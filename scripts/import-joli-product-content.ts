/**
 * J.Oli Origins — legacy product content importer.
 *
 * One-off script that fetches each legacy product URL from joliorigins.cz,
 * extracts the marketing copy (claim, description, active substances, usage,
 * INCI) and writes the result into:
 *
 *   src/data/imported-joli-products.json
 *
 * This file is the canonical raw input. Production product detail pages MUST
 * NOT scrape the live site at render time — they read from `data/products.ts`,
 * which is updated by hand using this import as the source of truth.
 *
 * Run:
 *   npx tsx scripts/import-joli-product-content.ts
 *
 * Requirements:
 *   - Node 18+ (for global `fetch`)
 *   - No third-party dependencies (regex-based parser, robust against
 *     Webnode's loose HTML).
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

type LegacyProductSource = {
  id: string;
  slug: string;
  sourceUrl: string;
};

type ImportedProduct = {
  id: string;
  slug: string;
  sourceUrl: string;
  title: string;
  subtitle: string;
  claim: string;
  description: string;
  activeSubstances: string;
  howToUse: string;
  inci: string;
  packageContent: string;
  imageUrls: string[];
  importedAt: string;
};

const legacyProductSources: LegacyProductSource[] = [
  {
    id: "no1-two-phase-cleanser",
    slug: "no1-dvoufazova-myci-emulze",
    sourceUrl: "https://www.joliorigins.cz/p/two-phase-cleanser/",
  },
  {
    id: "no2-bioactive-toner",
    slug: "no2-bioaktivni-tonikum",
    sourceUrl: "https://www.joliorigins.cz/p/bioactive-toner/",
  },
  {
    id: "no3-hydro-boost-collagel",
    slug: "no3-collagel-hydratacni-serum",
    sourceUrl: "https://www.joliorigins.cz/p/hydro-boost-collagel/",
  },
  {
    id: "no4-daily-superfood-moisture-serum",
    slug: "no4-denni-vitaminove-serum-coq10",
    sourceUrl: "https://www.joliorigins.cz/p/daily-skin-superfood-moisture-serum/",
  },
  {
    id: "no5-night-mineral-pressed-serum",
    slug: "no5-nocni-regeneracni-serum",
    sourceUrl: "https://www.joliorigins.cz/p/night-mineral-pressed-serum/",
  },
  {
    id: "generation-perfect-complete",
    slug: "generation-perfect-ritual-kompletni-sada",
    sourceUrl: "https://www.joliorigins.cz/p/generation-perfect-complete/",
  },
];

/* ============================================================
   HTML helpers
============================================================ */

/** Strip all HTML tags, decode common entities and collapse whitespace. */
function htmlToPlainText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|h\d|section|article)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, " ")
    .replace(/[ \t]*\n[ \t]*/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Crop everything past the Webnode "related products" / footer markers so we
 * don't pull in unrelated content.
 */
function cropToProductArea(plain: string): string {
  const stopMarkers = [
    "DALŠÍ PRODUKTY",
    "ZAJÍMAVÉ ČLÁNKY",
    "© ",
    "Cookies",
    "Měna",
    "Jazyk",
  ];
  let cropped = plain;
  for (const marker of stopMarkers) {
    const idx = cropped.indexOf(marker);
    if (idx > 0) cropped = cropped.slice(0, idx);
  }
  return cropped.trim();
}

/**
 * Split the cropped product copy into sections by known section markers
 * found on legacy joliorigins.cz product pages. Returns a map keyed by the
 * raw marker text. Each value is the cleaned text that follows it (until the
 * next marker or end of input).
 */
function splitBySections(plain: string): Record<string, string> {
  const markers = [
    "Benefity",
    "Klíčové vysoce aktivní složky",
    "Klíčové aktivní složky",
    "Účinné látky",
    "POUŽITÍ",
    "Použití",
    "Obsah balení",
    "Obsah",
    "INGREDIENTS",
  ];
  // Build a regex that matches any marker as its own line / phrase.
  const escaped = markers.map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(^|\\n)\\s*(${escaped.join("|")})\\s*[:：]?\\s*\\n?`, "g");

  const positions: Array<{ marker: string; start: number; valueStart: number }> = [];
  let m;
  while ((m = re.exec(plain)) !== null) {
    positions.push({
      marker: m[2],
      start: m.index + m[1].length,
      valueStart: m.index + m[0].length,
    });
  }

  const out: Record<string, string> = {};
  for (let i = 0; i < positions.length; i++) {
    const cur = positions[i];
    const next = positions[i + 1];
    const end = next ? next.start : plain.length;
    out[cur.marker] = plain.slice(cur.valueStart, end).trim();
  }
  // Pre-marker text is the description body
  if (positions[0]) {
    out.__lead = plain.slice(0, positions[0].start).trim();
  } else {
    out.__lead = plain.trim();
  }
  return out;
}

/* ============================================================
   Section extractors
============================================================ */

function extractTitle(html: string): string {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return m ? htmlToPlainText(m[1]) : "";
}

function extractSubtitle(html: string): string {
  // Heuristic: first <h2> on the page
  const m = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  return m ? htmlToPlainText(m[1]) : "";
}

function extractClaim(lead: string): string {
  const firstParagraph = lead.split(/\n\n|\n/).find((p) => p.trim().length > 0);
  return firstParagraph?.trim() ?? "";
}

function extractImageUrls(html: string): string[] {
  const out = new Set<string>();
  const re = /<img[^>]+src=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const src = m[1];
    // Skip Webnode icons, footer logos, tracking pixels
    if (/(icon|logo|footer|pixel|favicon|sprite)/i.test(src)) continue;
    // Keep only product-ish images (e.g. /upload/, /image/, /products/)
    if (/(upload|image|gallery|product|media)/i.test(src)) {
      out.add(new URL(src, "https://www.joliorigins.cz/").toString());
    }
  }
  return Array.from(out).slice(0, 8);
}

/* ============================================================
   Main per-product import
============================================================ */

async function importOne(src: LegacyProductSource): Promise<ImportedProduct> {
  const res = await fetch(src.sourceUrl, {
    headers: { "user-agent": "joli-origins-content-importer/1.0" },
  });
  if (!res.ok) throw new Error(`${src.slug}: HTTP ${res.status}`);
  const html = await res.text();

  const title = extractTitle(html);
  const subtitle = extractSubtitle(html);
  const plain = htmlToPlainText(html);
  const cropped = cropToProductArea(plain);
  const sections = splitBySections(cropped);

  const lead = sections.__lead ?? "";
  const claim = extractClaim(lead);
  const description = lead.replace(claim, "").trim();

  const activeSubstances =
    sections["Klíčové vysoce aktivní složky"] ||
    sections["Klíčové aktivní složky"] ||
    sections["Účinné látky"] ||
    "";
  const howToUse = sections["POUŽITÍ"] || sections["Použití"] || "";
  const inci = sections["INGREDIENTS"] || "";
  const packageContent = sections["Obsah balení"] || sections["Obsah"] || "";

  return {
    id: src.id,
    slug: src.slug,
    sourceUrl: src.sourceUrl,
    title,
    subtitle,
    claim,
    description,
    activeSubstances,
    howToUse,
    inci,
    packageContent,
    imageUrls: extractImageUrls(html),
    importedAt: new Date().toISOString(),
  };
}

/* ============================================================
   Entry point
============================================================ */

async function main() {
  const results: ImportedProduct[] = [];
  for (const src of legacyProductSources) {
    try {
      console.log(`→ fetching ${src.slug}`);
      const data = await importOne(src);
      results.push(data);
      console.log(`  ok (title="${data.title.slice(0, 50)}…", inci=${data.inci.length} chars)`);
    } catch (e) {
      console.error(`  failed: ${(e as Error).message}`);
    }
  }

  const outPath = resolve(process.cwd(), "src/data/imported-joli-products.json");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\n✓ wrote ${results.length} products to ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
