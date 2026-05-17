/**
 * J.OLI ORIGINS v3 — /zurnal (listing)
 *
 * Pravidla:
 *  - Žádné placeholder články. Zobrazujeme pouze ty, které mají ArticleDetail.
 *  - Rituál / Longevity / Ingredience / Jak začít — kategorie viditelné v meta.
 */

import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";
import { articles, articleDetails, categoryMeta } from "./data";

export const metadata: Metadata = {
  title: "Žurnál | J.OLI Origins",
  description:
    "Praktický žurnál o rituálu, longevity přístupu a ingrediencích. Jen články, které mají co říct.",
};

export default function JournalPage() {
  const published = articles.filter((a) => articleDetails[a.slug]);

  return (
    <>
      <StickyChrome active={null} />

      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Žurnál</span>
            <h1 className={s.heroTitle}>
              Praktický žurnál o péči, která dává smysl.
            </h1>
            <p className={s.lead}>
              Krátké texty o rituálu, longevity přístupu a ingrediencích.
              Bez kosmetického balastu.
            </p>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.journalGrid}>
            {published.map((a) => (
              <a
                key={a.slug}
                className={s.journalCard}
                href={`/zurnal/${a.slug}`}
              >
                <div className={s.journalCardThumb}>
                  <img
                    src={
                      a.image ||
                      "/v3/journal/journal_travel_set_first_step.jpg"
                    }
                    alt={a.title}
                  />
                </div>
                <div className={s.journalCardMeta}>
                  <span>{categoryMeta[a.category]?.label ?? "Žurnál"}</span>
                  <span className={s.dot} />
                  <span>{a.readingTime}</span>
                </div>
                <h2 className={s.journalCardTitle}>{a.title}</h2>
                <p className={s.journalCardExcerpt}>{a.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={s.finalCta}>
        <div className={s.container}>
          <div className={s.finalCtaInner}>
            <span className={s.eyebrow}>Pojďte do rituálu</span>
            <h2 className={s.heroTitle}>
              Teorie je hezká. Praxe začíná Travel Setem.
            </h2>
            <div className={s.finalCtaCtas}>
              <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                Začít Travel Setem
              </a>
              <a
                className={`${s.btnSecondary} ${s.btnOnDark}`}
                href="/produkty/generation-perfect-complete"
              >
                Chci celou sadu
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
