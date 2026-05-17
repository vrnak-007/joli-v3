/**
 * J.OLI ORIGINS v3 — /zurnal/[slug]
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import s from "../../styles.module.css";
import { StickyChrome, Footer } from "../../Chrome";
import {
  articleDetails,
  getArticleBySlug,
  getArticleDetail,
  categoryMeta,
} from "../data";

export async function generateStaticParams() {
  return Object.keys(articleDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  const d = getArticleDetail(slug);
  return {
    title: `${a?.title ?? "Žurnál"} | J.OLI Origins`,
    description: d?.seoDescription ?? a?.excerpt ?? "",
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const detail = getArticleDetail(slug);
  if (!article || !detail) notFound();

  return (
    <>
      <StickyChrome active={null} />

      <section className={s.articleHero}>
        <div className={s.container}>
          <div className={s.articleHeader}>
            <span className={s.eyebrowGold}>
              {categoryMeta[article.category]?.label ?? "Žurnál"}
            </span>
            <h1 className={s.heroTitle}>{article.title}</h1>
            <p className={s.lead}>{article.excerpt}</p>
            <p className={s.smallText}>
              {detail.author} · {article.readingTime}
            </p>
          </div>
          <div className={s.articleCoverImg}>
            <img
              src={
                article.image ||
                "/v3/journal/journal_travel_set_first_step.jpg"
              }
              alt={article.title}
            />
          </div>
        </div>
      </section>

      <section className={s.sectionBone}>
        <div className={s.container}>
          <article className={s.articleBody}>
            {detail.blocks.map((block, i) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2 key={i} id={block.id}>
                      {block.text}
                    </h2>
                  );
                case "paragraph":
                  return <p key={i}>{block.text}</p>;
                case "stepList":
                  return (
                    <div key={i}>
                      {block.steps.map((step, j) => (
                        <div key={j} className={s.articleStep}>
                          <span className={s.articleStepLabel}>
                            {step.number} · {step.phase}
                          </span>
                          <span>{step.text}</span>
                        </div>
                      ))}
                    </div>
                  );
                case "inlineCta": {
                  const cta = detail.inlineCtas.find(
                    (c) => c.id === block.ctaId
                  );
                  if (!cta) return null;
                  return (
                    <div key={i} className={s.articleInlineCta}>
                      <span className={s.eyebrowGold}>Doporučujeme</span>
                      <h3
                        style={{
                          fontFamily: "var(--font-display), serif",
                          fontSize: 22,
                          color: "var(--soft-charcoal)",
                          margin: 0,
                        }}
                      >
                        {cta.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: 15 }}>{cta.text}</p>
                      <div>
                        <a className={s.btnPrimary} href={cta.href}>
                          {cta.ctaLabel}
                        </a>
                      </div>
                    </div>
                  );
                }
                default:
                  return null;
              }
            })}
          </article>
        </div>
      </section>

      <section className={s.finalCta}>
        <div className={s.container}>
          <div className={s.finalCtaInner}>
            <span className={s.eyebrow}>Začněte rituál</span>
            <h2 className={s.heroTitle}>Pět kroků. Jeden rituál.</h2>
            <p className={s.lead}>
              Pokud J.OLI zkoušíte poprvé, začněte Travel Setem.
            </p>
            <div className={s.finalCtaCtas}>
              <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                Začít Travel Setem
              </a>
              <a
                className={`${s.btnSecondary} ${s.btnOnDark}`}
                href="/zurnal"
              >
                Zpět na žurnál
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
