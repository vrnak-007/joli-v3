"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import s from "../styles.module.css";
import z from "./zurnal.module.css";
import { StickyChrome, Footer } from "../Chrome";
import {
  IconArrowRight,
  IconSearch,
  IconAroma,
  IconBag,
  IconCompass,
  IconCheck,
} from "../icons";
import { ClubForm } from "../Forms";
import {
  articles,
  categoryMeta,
  categoryOrder,
  type JournalArticle,
  type JournalCategory,
} from "./data";

type SortKey = "newest" | "featured" | "popular";

const sortLabels: Record<SortKey, string> = {
  newest: "Nejnovější",
  featured: "Doporučené",
  popular: "Nejčtenější",
};

function applyFilters(
  list: JournalArticle[],
  category: JournalCategory | "all",
  query: string,
  sort: SortKey
): JournalArticle[] {
  let out = list;
  if (category !== "all") out = out.filter((a) => a.category === category);
  if (query.trim()) {
    const q = query.toLowerCase();
    out = out.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.categoryLabel.toLowerCase().includes(q) ||
        (a.tags ?? []).some((t) => t.toLowerCase().includes(q))
    );
  }
  if (sort === "featured") {
    out = [...out].sort(
      (a, b) =>
        (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) ||
        (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    );
  } else if (sort === "popular") {
    out = [...out].sort((a, b) => (b.reads ?? 0) - (a.reads ?? 0));
  }
  return out;
}

export default function ZurnalPage() {
  const [activeCat, setActiveCat] = useState<JournalCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");

  const featured = useMemo(() => articles.filter((a) => a.featured), []);
  const heroFeatured = featured[0];
  const horizontalFeatured = featured[1];
  const smallFeaturedA = featured[2];
  const smallFeaturedB = featured[3];

  const featuredIds = new Set(featured.map((a) => a.id));
  const rest = articles.filter((a) => !featuredIds.has(a.id));

  const filtered = useMemo(
    () => applyFilters(rest, activeCat, query, sort),
    [rest, activeCat, query, sort]
  );

  return (
    <div className={s.root}>
      <StickyChrome active="zurnal" />

      <main className={z.page}>
        {/* ===== HERO ===== */}
        <section className={z.hero}>
          <div className={z.heroInner}>
            <div className={z.heroBody}>
              <span className={z.heroLabel}>Žurnál</span>
              <h1 className={z.heroTitle}>
                Péče, která má<br />
                <em>souvislosti.</em>
              </h1>
              <p className={z.heroBodyText}>
                Články o rituálu, skin longevity, ingrediencích a smyslové péči.
                Pro ženy, které nechtějí kosmetický chaos, ale chtějí rozumět
                tomu, co používají.
              </p>
            </div>
            <div className={z.heroImage}>
              <Image
                src="/assets/joliorigins/zurnal/hero-light.png"
                alt="Žurnál J.Oli Origins — světlá editorial atmosféra"
                fill
                sizes="(max-width: 1100px) 100vw, 58vw"
                priority
              />
              <span className={z.heroFade} aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ===== FEATURED ===== */}
        <section id="doporucene-clanky" className={z.featuredSection}>
          <div className={z.container}>
            <div className={z.sectionHead}>
              <span className={z.sectionHeadLabel}>Doporučené články</span>
              <a className={z.sectionHeadLink} href="#filtry">
                Zobrazit vše <IconArrowRight size={12} />
              </a>
            </div>
            <div className={z.featuredGrid}>
              {heroFeatured && (
                <a
                  href={`/zurnal/${heroFeatured.slug}`}
                  className={z.featuredHero}
                >
                  <Image
                    src={heroFeatured.image}
                    alt={heroFeatured.title}
                    fill
                    sizes="(max-width: 1100px) 100vw, 50vw"
                  />
                  <div className={z.featuredHeroBody}>
                    <div className={z.featuredHeroMeta}>
                      {heroFeatured.categoryLabel}
                      <span className="dot">·</span>
                      {heroFeatured.readingTime}
                    </div>
                    <h2 className={z.featuredHeroTitle}>{heroFeatured.title}</h2>
                    <p className={z.featuredHeroExcerpt}>
                      {heroFeatured.excerpt}
                    </p>
                    <span className={z.featuredHeroCta}>
                      Číst článek <IconArrowRight size={12} />
                    </span>
                  </div>
                </a>
              )}

              <div className={z.featuredRight}>
                {horizontalFeatured && (
                  <a
                    href={`/zurnal/${horizontalFeatured.slug}`}
                    className={z.featuredHorizontal}
                  >
                    <div className={z.body}>
                      <div className={z.featuredCardMeta}>
                        {horizontalFeatured.categoryLabel}
                        <span className="dot">·</span>
                        {horizontalFeatured.readingTime}
                      </div>
                      <h3 className={z.featuredCardTitle}>
                        {horizontalFeatured.title}
                      </h3>
                      <p className={z.featuredCardExcerpt}>
                        {horizontalFeatured.excerpt}
                      </p>
                      <span className={z.featuredCardCta}>
                        Číst článek <IconArrowRight size={11} />
                      </span>
                    </div>
                    <div className={z.imgWrap}>
                      <Image
                        src={horizontalFeatured.image}
                        alt={horizontalFeatured.title}
                        fill
                        sizes="(max-width: 1100px) 100vw, 25vw"
                      />
                    </div>
                  </a>
                )}

                <div className={z.featuredSmallRow}>
                  {smallFeaturedA && (
                    <a
                      href={`/zurnal/${smallFeaturedA.slug}`}
                      className={z.featuredSmall}
                    >
                      <div className={z.imgWrap}>
                        <Image
                          src={smallFeaturedA.image}
                          alt={smallFeaturedA.title}
                          fill
                          sizes="(max-width: 1100px) 50vw, 13vw"
                        />
                      </div>
                      <div className={z.body}>
                        <div className={z.featuredCardMeta}>
                          {smallFeaturedA.categoryLabel}
                          <span className="dot">·</span>
                          {smallFeaturedA.readingTime}
                        </div>
                        <h4>{smallFeaturedA.title}</h4>
                      </div>
                    </a>
                  )}
                  {smallFeaturedB && (
                    <a
                      href={`/zurnal/${smallFeaturedB.slug}`}
                      className={z.featuredSmall}
                    >
                      <div className={z.imgWrap}>
                        <Image
                          src={smallFeaturedB.image}
                          alt={smallFeaturedB.title}
                          fill
                          sizes="(max-width: 1100px) 50vw, 13vw"
                        />
                      </div>
                      <div className={z.body}>
                        <div className={z.featuredCardMeta}>
                          {smallFeaturedB.categoryLabel}
                          <span className="dot">·</span>
                          {smallFeaturedB.readingTime}
                        </div>
                        <h4>{smallFeaturedB.title}</h4>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FILTER ===== */}
        <section id="filtry" className={z.filterSection}>
          <div className={z.container}>
            <div className={z.filterbar}>
              <div className={z.filterPills}>
                <button
                  type="button"
                  className={`${z.filterPill}${
                    activeCat === "all" ? " " + z["is-active"] : ""
                  }`}
                  onClick={() => setActiveCat("all")}
                >
                  Vše
                </button>
                {categoryOrder.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`${z.filterPill}${
                      activeCat === cat ? " " + z["is-active"] : ""
                    }`}
                    onClick={() => setActiveCat(cat)}
                  >
                    {categoryMeta[cat].label}
                  </button>
                ))}
              </div>
              <div className={z.filterbarRow}>
                <div className={z.searchWrap}>
                  <IconSearch size={16} />
                  <input
                    type="search"
                    className={z.searchInput}
                    placeholder="Hledat v žurnálu…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Hledat v žurnálu"
                  />
                </div>
                <select
                  className={z.sortSelect}
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  aria-label="Třídit články"
                >
                  {(Object.keys(sortLabels) as SortKey[]).map((k) => (
                    <option key={k} value={k}>
                      {sortLabels[k]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ARTICLE GRID ===== */}
        <section className={z.articleSection}>
          <div className={z.container}>
            {filtered.length === 0 ? (
              <div className={z.emptyState}>
                Žádný článek neodpovídá zvoleným kritériím.
              </div>
            ) : (
              <div className={z.articleGrid}>
                {filtered.map((a) => (
                  <a
                    key={a.id}
                    href={`/zurnal/${a.slug}`}
                    className={z.articleCard}
                  >
                    <div className={z.articleCardImage}>
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        sizes="(max-width: 1100px) 50vw, 25vw"
                      />
                    </div>
                    <div className={z.articleCardBody}>
                      <div className={z.articleCardMeta}>
                        {a.categoryLabel}
                        <span className="dot">·</span>
                        {a.readingTime}
                      </div>
                      <h3 className={z.articleCardTitle}>{a.title}</h3>
                      <p className={z.articleCardExcerpt}>{a.excerpt}</p>
                      <span className={z.articleCardCta}>
                        Číst článek <IconArrowRight size={11} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ===== RITUAL GUIDE ===== */}
        <section className={z.ritualGuideSection}>
          <div className={z.container}>
            <div className={z.ritualGuide}>
              <div className={z.guideText}>
                <span className={z.guideLabel}>Ritual Guide</span>
                <h2 className={z.guideTitle}>
                  Najděte článek <em>podle své pleti.</em>
                </h2>
                <p className={z.guideBody}>
                  Nevíte, kde začít? Odpovězte na pár otázek a doporučíme vám
                  články, produkty i nejvhodnější vstup do rituálu.
                </p>
                <a
                  className={z.guideCta}
                  href="/ritual#ritual-concierge"
                >
                  Spustit průvodce <IconArrowRight size={12} />
                </a>
              </div>
              <div className={z.guideSteps}>
                <div className={z.guideStep}>
                  <span className={z.guideStepIcon}>
                    <IconAroma size={22} />
                  </span>
                  <span className={z.guideStepNum}>01</span>
                  <span className={z.guideStepTitle}>Poznejte svou pleť</span>
                  <span className={z.guideStepText}>
                    Zvolte, co vás nejvíce trápí nebo zajímá.
                  </span>
                </div>
                <span className={z.guideArrow}>
                  <IconArrowRight size={18} />
                </span>
                <div className={z.guideStep}>
                  <span className={z.guideStepIcon}>
                    <IconCompass size={22} />
                  </span>
                  <span className={z.guideStepNum}>02</span>
                  <span className={z.guideStepTitle}>Doporučíme články</span>
                  <span className={z.guideStepText}>
                    Vybereme pro vás nejrelevantnější témata.
                  </span>
                </div>
                <span className={z.guideArrow}>
                  <IconArrowRight size={18} />
                </span>
                <div className={z.guideStep}>
                  <span className={z.guideStepIcon}>
                    <IconBag size={22} />
                  </span>
                  <span className={z.guideStepNum}>03</span>
                  <span className={z.guideStepTitle}>Najděte svůj rituál</span>
                  <span className={z.guideStepText}>
                    Doporučíme produkty a další kroky péče.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CLUB NEWSLETTER (homepage component) ===== */}
        <section className={s.darkSection} style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className={s.container}>
            <div className={s.clubPanel}>
              <div className={s.clubBody}>
                <span className={`${s.uppercase} ${s.gold}`}>Klub J.Oli Origins</span>
                <h2
                  className={`${s.serif} ${s.sectionHeadline}`}
                  style={{ color: "var(--color-cream)", marginTop: 14 }}
                >
                  Buďte první u <em>nových šarží</em>
                </h2>
                <p className={s.bodyLight} style={{ marginTop: 10, maxWidth: 520 }}>
                  Buďte první u nových šarží, Travel Luxe setů, limitovaných balení
                  a longevity rituálů podle sezóny.
                </p>
                <ClubForm />
                <ul className={s.clubBenefits}>
                  <li><IconCheck size={14} /> Přednostní přístup k nové šarži</li>
                  <li><IconCheck size={14} /> Sezónní tipy a rituály</li>
                  <li><IconCheck size={14} /> Připomenutí doplnění vašich produktů</li>
                  <li><IconCheck size={14} /> Pozvánky a limitované nabídky</li>
                </ul>
              </div>
              <div className={s.clubImg}>
                <Image
                  src="/assets/joliorigins/ai/hero-ritual.png"
                  alt="Klub J.Oli Origins"
                  width={900}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
