import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import s from "../../styles.module.css";
import a from "./article.module.css";
import { StickyChrome, Footer } from "../../Chrome";
import {
  IconArrowRight,
  IconBookOpen,
  IconCompass,
} from "../../icons";
import {
  articles,
  getArticleBySlug,
  getArticleDetail,
  getPrevNextArticles,
  getRelatedArticles,
  type ArticleInlineCta,
  type ArticleBlock,
} from "../data";

type PageParams = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const detail = getArticleDetail(slug);
  if (!article) return { title: "Žurnál | J.Oli Origins" };
  const title = detail?.seoTitle ?? `${article.title} | Žurnál J.Oli Origins`;
  const description = detail?.seoDescription ?? article.excerpt;
  return {
    title,
    description,
    openGraph: {
      title: article.title,
      description,
      images: [article.image],
      type: "article",
    },
  };
}

function CtaCard({ cta }: { cta: ArticleInlineCta }) {
  return (
    <a href={cta.href} className={a.inlineCta}>
      <div className={a.inlineCtaImage}>
        <Image
          src={cta.image}
          alt={cta.title}
          fill
          sizes="120px"
        />
      </div>
      <div className={a.inlineCtaBody}>
        <h3 className={a.inlineCtaTitle}>{cta.title}</h3>
        <p className={a.inlineCtaText}>{cta.text}</p>
      </div>
      <span className={a.inlineCtaLink}>
        {cta.ctaLabel} <IconArrowRight size={12} />
      </span>
    </a>
  );
}

function renderBlock(block: ArticleBlock, ctaMap: Map<string, ArticleInlineCta>, idx: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={idx} id={block.id}>
          {block.text}
        </h2>
      );
    case "paragraph":
      return <p key={idx}>{block.text}</p>;
    case "stepList":
      return (
        <div key={idx} className={a.stepList}>
          {block.steps.map((st) => (
            <div key={st.number} className={a.stepRow}>
              <span className={a.stepNum}>{st.number}</span>
              <span className={a.stepPhase}>
                {st.phase} <span className={a.stepSep}>|</span>
              </span>
              <span className={a.stepText}>{st.text}</span>
            </div>
          ))}
        </div>
      );
    case "inlineCta": {
      const cta = ctaMap.get(block.ctaId);
      if (!cta) return null;
      return <CtaCard key={idx} cta={cta} />;
    }
  }
}

function buildFallbackDetail(slug: string) {
  const article = getArticleBySlug(slug);
  if (!article) return undefined;
  return {
    slug,
    author: "J.Oli Origins",
    updatedAt: "16. května 2026",
    displayTags: (article.tags ?? []).slice(0, 4).map(
      (t) => t.charAt(0).toUpperCase() + t.slice(1)
    ),
    summaryBullets: [
      "co článek pokrývá",
      "proč na tématu záleží pro vaši pleť",
      "jak na sebe kroky a látky navazují",
      "doporučený další krok rituálu",
    ],
    tableOfContents: [
      { id: "uvod", label: "Úvod" },
      { id: "souvislosti", label: "Souvislosti" },
      { id: "doporuceny-krok", label: "Doporučený další krok" },
    ],
    inlineCtas: [
      {
        id: "cta-ritual",
        title: "Najděte si svůj vstup do rituálu",
        text: "Ritual Guide vám pomůže vybrat správné kroky podle vaší pleti.",
        ctaLabel: "Spustit průvodce",
        href: "/ritual#ritual-concierge",
        image: "/assets/joliorigins/zurnal/featured-ritual.png",
      },
    ],
    blocks: [
      { type: "heading" as const, id: "uvod", text: article.title },
      { type: "paragraph" as const, text: article.excerpt },
      {
        type: "heading" as const,
        id: "souvislosti",
        text: "Souvislosti rituálu",
      },
      {
        type: "paragraph" as const,
        text: "J.Oli Origins staví na rituálu, ne rutině. Každý článek v Žurnálu má za cíl pomoci vám porozumět tomu, co a proč pleti děláme. Plné znění tohoto článku připravujeme — mezitím vás zveme prozkoumat související obsah a Generation Perfect Ritual.",
      },
      { type: "inlineCta" as const, ctaId: "cta-ritual" },
      {
        type: "heading" as const,
        id: "doporuceny-krok",
        text: "Doporučený další krok",
      },
      {
        type: "paragraph" as const,
        text: "Pokud chcete jít do hloubky, vyberte si Travel Luxe Set jako bezpečný první vstup, nebo kompletní sadu pro celý longevity rituál.",
      },
    ],
    relatedSlugs: [],
    seoTitle: `${article.title} | Žurnál J.Oli Origins`,
    seoDescription: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const detail = getArticleDetail(slug) ?? buildFallbackDetail(slug);
  if (!detail) notFound();

  const ctaMap = new Map(detail.inlineCtas.map((c) => [c.id, c]));
  const { prev, next } = getPrevNextArticles(slug);
  const related = getRelatedArticles(slug, detail, 3);

  return (
    <div className={s.root}>
      <StickyChrome active="zurnal" />

      <main className={a.page}>
        <div className={a.wrap}>
          {/* Breadcrumbs */}
          <nav className={a.breadcrumbs} aria-label="Drobečková navigace">
            <a href="/">Domů</a>
            <span className="sep">/</span>
            <a href="/zurnal">Žurnál</a>
            <span className="sep">/</span>
            <a href={`/zurnal?category=${article.category}`}>
              {article.categoryLabel}
            </a>
            <span className="sep">/</span>
            <span className="current">{article.title}</span>
          </nav>

          {/* Hero */}
          <header className={a.hero}>
            <div className={a.heroBody}>
              <div className={a.heroMeta}>
                {article.categoryLabel}
                <span style={{ margin: "0 8px", opacity: 0.5 }}>·</span>
                {article.readingTime}
              </div>
              <h1 className={a.heroTitle}>{article.title}</h1>
              <p className={a.heroExcerpt}>{article.excerpt}</p>
              <div className={a.heroDetails}>
                <span>Autor: {detail.author}</span>
                <span>·</span>
                <span>Aktualizováno: {detail.updatedAt}</span>
              </div>
              <div className={a.heroTags}>
                {detail.displayTags.map((t) => (
                  <span key={t} className={a.heroTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={a.heroImage}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 1100px) 100vw, 720px"
                priority
              />
            </div>
          </header>

          {/* Summary box */}
          <section className={a.summaryBox}>
            <div className={a.summaryBoxIcon}>
              <IconBookOpen size={22} />
            </div>
            <div className={a.summaryBoxBody}>
              <h2 className={a.summaryBoxTitle}>V tomto článku se dozvíte</h2>
              <ul className={a.summaryBoxList}>
                {detail.summaryBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Body layout: content + sticky aside */}
          <div className={a.layout}>
            <article className={a.content}>
              {detail.blocks.map((b, i) => renderBlock(b, ctaMap, i))}

              <div className={a.editorialNote}>
                <span className={a.editorialSeal}>J·O</span>
                <p className={a.editorialText}>
                  Editorial note J.Oli Origins · Texty v Žurnálu jsou
                  průvodce vědomou péčí o pleť, nenahrazují dermatologické
                  doporučení ani léčbu kožních onemocnění.
                </p>
              </div>
            </article>

            <aside className={a.aside} aria-label="V článku">
              <div className={a.asideBox}>
                <h3 className={a.asideTitle}>V článku</h3>
                <ul className={a.tocList}>
                  {detail.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a href={`#${toc.id}`}>{toc.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={a.guideCta}>
                <div className={a.guideIcon}>
                  <IconCompass size={22} />
                </div>
                <h3 className={a.guideTitle}>Nevíte, kde začít?</h3>
                <p className={a.guideText}>
                  Spusťte Ritual Guide a najděte vhodný vstup do rituálu podle
                  své pleti.
                </p>
                <a
                  href="/ritual#ritual-concierge"
                  className={a.guideLink}
                >
                  Spustit průvodce <IconArrowRight size={11} />
                </a>
              </div>

              <div className={a.asideBox}>
                <h3 className={a.asideTitle}>Souvisí s článkem</h3>
                <div className={a.relatedProduct}>
                  <div className={a.relatedProductImg}>
                    <Image
                      src="/assets/joliorigins/hero/set.png"
                      alt="Generation Perfect Ritual"
                      fill
                      sizes="70px"
                    />
                  </div>
                  <div className={a.relatedProductBody}>
                    <h4>Generation Perfect Ritual</h4>
                    <p>Pět kroků pro ranní a večerní péči.</p>
                    <a href="/ritual">
                      Objevit rituál →
                    </a>
                  </div>
                </div>
              </div>

              <a href="/zurnal" className={a.asideBackLink}>
                ← Zpět na seznam článků
              </a>
            </aside>
          </div>

          {/* Related articles */}
          <section className={a.related}>
            <div className={a.relatedHead}>
              <h2 className={a.relatedTitle}>Čtěte dál</h2>
              <a className={a.relatedAll} href="/zurnal">
                Zobrazit všechny články <IconArrowRight size={11} />
              </a>
            </div>
            <div className={a.relatedGrid}>
              {related.map((r) => (
                <a
                  key={r.id}
                  href={`/zurnal/${r.slug}`}
                  className={a.relatedCard}
                >
                  <div className={a.relatedCardImg}>
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 1100px) 50vw, 25vw"
                    />
                  </div>
                  <div className={a.relatedCardBody}>
                    <div className={a.relatedCardMeta}>
                      {r.categoryLabel}
                      <span className="dot">·</span>
                      {r.readingTime}
                    </div>
                    <h3 className={a.relatedCardTitle}>{r.title}</h3>
                    <p className={a.relatedCardExcerpt}>{r.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Prev / back / next */}
          <nav className={a.nav} aria-label="Navigace článků">
            {prev ? (
              <a href={`/zurnal/${prev.slug}`} className={a.navItem}>
                <span className={a.navLabel}>← Předchozí článek</span>
                <span className={a.navTitle}>{prev.title}</span>
              </a>
            ) : (
              <div className={a.navDisabled}>
                <span className={a.navLabel}>← Předchozí článek</span>
              </div>
            )}
            <a href="/zurnal" className={a.navItemCenter}>
              Zpět na žurnál
            </a>
            {next ? (
              <a
                href={`/zurnal/${next.slug}`}
                className={`${a.navItem} ${a.navItemRight}`}
              >
                <span className={a.navLabel}>Další článek →</span>
                <span className={a.navTitle}>{next.title}</span>
              </a>
            ) : (
              <div className={a.navDisabled}>
                <span className={a.navLabel}>Další článek →</span>
              </div>
            )}
          </nav>

        </div>
      </main>

      <Footer />
    </div>
  );
}
