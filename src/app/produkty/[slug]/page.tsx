/**
 * J.OLI ORIGINS v3 — /produkty/[slug]
 *
 * Jednotný template pro:
 *   - Sady: travel-luxe-set, generation-perfect-complete
 *   - Jednotlivé produkty: no1, no2, no3, no4-denni-vitaminove-serum-coq10, no4-nocni-regeneracni-serum
 *
 * Sekce per brief 11/12/13:
 *   1. Hero (split — galerie vlevo, copy + cena + CTA vpravo)
 *   2. Role v rituálu
 *   3. Pro koho je
 *   4. Jak používat
 *   5. Co je uvnitř (set) / Textura + ingredience (single)
 *   6. Co dál / Next steps
 *   7. Final CTA
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import s from "../../styles.module.css";
import { StickyChrome, Footer } from "../../Chrome";
import {
  IconCheck,
  IconArrowRight,
  IconLeaf,
  IconMolecule,
  IconSun,
  IconMoon,
  IconCycle,
} from "../../icons";
import { ProductGallery } from "../ProductGallery";
import {
  V3_PRODUCTS,
  getV3ProductBySlug,
} from "../../data/v3-products";

export async function generateStaticParams() {
  return V3_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getV3ProductBySlug(slug);
  if (!product) return { title: "Produkt | J.OLI Origins" };
  return {
    title: `${product.name} | J.OLI Origins`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getV3ProductBySlug(slug);
  if (!product) notFound();

  const isSet = product.kind === "set";

  return (
    <>
      <StickyChrome active="produkty" />

      {/* ===== HERO ===== */}
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroSplit}>
            {/* Gallery — interactive */}
            <ProductGallery
              images={product.gallery && product.gallery.length > 0 ? product.gallery : [product.heroImg]}
              alt={product.name}
            />

            {/* Copy + buy */}
            <div className={s.setCopy}>
              {product.badge && (
                <span className={s.eyebrow}>{product.badge}</span>
              )}
              {!product.badge && product.no && (
                <span className={s.eyebrow}>{product.no}</span>
              )}
              <h1 className={s.heroTitle}>{product.name}</h1>
              <p
                className={s.lead}
                style={{ fontStyle: "italic" }}
              >
                {product.subtitle}
              </p>
              <p className={s.bodyCopy}>{product.description}</p>

              {/* Economy box pro Complete */}
              {product.economy && (
                <div className={s.setEconomy}>
                  <div className={s.setEconomyRow}>
                    <span>Jednotlivě</span>
                    <span>{product.economy.individual}</span>
                  </div>
                  <div className={s.setEconomyRow}>
                    <span>Sada</span>
                    <span>{product.economy.set}</span>
                  </div>
                  <div className={s.setEconomyHighlight}>
                    <span>Ušetříte</span>
                    <span>{product.economy.save}</span>
                  </div>
                </div>
              )}

              {!product.economy && (
                <div className={s.priceTag}>
                  <strong>{product.priceText}</strong>
                </div>
              )}

              <div className={s.setCtas}>
                {isSet ? (
                  <>
                    <a className={s.btnPrimary} href="/kosik">
                      {product.slug === "travel-luxe-set"
                        ? "Začít Travel Setem"
                        : "Chci celou sadu"}
                    </a>
                    {product.nextSteps?.[0] && (
                      <a
                        className={s.btnTextLink}
                        href={product.nextSteps[0].href}
                      >
                        {product.nextSteps[0].label}
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    <a className={s.btnPrimary} href="/kosik">
                      Přidat do košíku
                    </a>
                    <a
                      className={s.btnSecondary}
                      href="/produkty/travel-luxe-set"
                    >
                      Vyzkoušet v Travel Setu
                    </a>
                  </>
                )}
              </div>

              {product.spfNote && (
                <p className={s.smallText}>
                  Denní No4 není SPF. Při pobytu venku doplňte ochranný krém
                  s SPF.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CO JE UVNITŘ (sety) / TEXTURA + INGREDIENCE (single) ===== */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrow}>
                {isSet ? "Co je uvnitř" : "Role v rituálu"}
              </span>
              <h2 className={s.sideHeading} style={{ marginTop: 16 }}>
                {isSet
                  ? "Kompletní obsah sady."
                  : product.role}
              </h2>
            </div>
            <div>
              {isSet ? (
                <ul className={s.checkList}>
                  {product.contents?.map((c) => (
                    <li key={c}>
                      <IconCheck size={16} /> {c}
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  {product.texture && (
                    <p
                      className={s.bodyCopy}
                      style={{ marginBottom: 16 }}
                    >
                      <strong style={{ color: "var(--soft-charcoal)" }}>
                        Textura.
                      </strong>{" "}
                      {product.texture}
                    </p>
                  )}
                  {product.keyIngredients &&
                    product.keyIngredients.length > 0 && (
                      <>
                        <p
                          className={s.eyebrow}
                          style={{ marginBottom: 12 }}
                        >
                          Klíčové ingredience
                        </p>
                        <ul className={s.checkList}>
                          {product.keyIngredients.map((ing) => (
                            <li key={ing.name}>
                              <IconCheck size={16} />
                              <span>
                                <strong style={{ color: "var(--soft-charcoal)" }}>
                                  {ing.name}.
                                </strong>{" "}
                                {ing.role}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FÁZE V RITUÁLU ===== */}
      {product.phase && (
        <section className={`${s.section} ${s.sectionBone}`}>
          <div className={s.container}>
            <div className={s.twoCol}>
              <div>
                <span className={s.eyebrowGold}>
                  <IconCycle size={14} style={{ marginRight: 6 }} /> Fáze v rituálu
                </span>
                <h2 className={s.h2Display} style={{ marginTop: 12 }}>
                  Kam tento krok patří.
                </h2>
                <p className={s.bodyCopy} style={{ marginTop: 14 }}>
                  Každý produkt má své přesné místo v ranním nebo večerním rituálu.
                  Pořadí je dané — nemusíte nic kombinovat.
                </p>
              </div>

              <div className={s.phaseCard}>
                <div className={s.phaseHeader}>
                  <span className={s.phaseStepNumber}>
                    {String(product.phase.stepNumber).padStart(2, "0")}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span
                      className={`${s.phaseBadge}${
                        product.phase.timeOfDay === "večer"
                          ? " " + s.phaseBadgeNight
                          : product.phase.timeOfDay === "ráno"
                          ? " " + s.phaseBadgeDay
                          : ""
                      }`}
                    >
                      {product.phase.timeOfDay === "večer" ? (
                        <IconMoon size={11} />
                      ) : product.phase.timeOfDay === "ráno" ? (
                        <IconSun size={11} />
                      ) : (
                        <>
                          <IconSun size={11} />
                          <IconMoon size={11} />
                        </>
                      )}
                      {product.phase.timeOfDay}
                    </span>
                    <strong
                      style={{
                        fontFamily: "var(--font-display), serif",
                        fontSize: 20,
                        color: "var(--soft-charcoal)",
                        fontWeight: 500,
                      }}
                    >
                      {product.phase.stepLabel}
                    </strong>
                  </div>
                </div>

                <div className={s.phaseFlow}>
                  {product.phase.before && (
                    <>
                      <span className={s.phaseFlowItem}>{product.phase.before}</span>
                      <span className={s.phaseFlowArrow}>→</span>
                    </>
                  )}
                  <span className={`${s.phaseFlowItem} ${s.phaseFlowCurrent}`}>
                    {product.no ?? product.name}
                  </span>
                  {product.phase.after && (
                    <>
                      <span className={s.phaseFlowArrow}>→</span>
                      <span className={s.phaseFlowItem}>{product.phase.after}</span>
                    </>
                  )}
                </div>

                {product.spfNote && (
                  <p
                    className={s.smallText}
                    style={{ fontStyle: "italic", marginTop: 4 }}
                  >
                    Denní No4 není SPF. Při pobytu venku doplňte ochranný krém s SPF.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== PRO KOHO JE ===== */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrowGold}>Pro koho je</span>
              <h2 className={s.sideHeading} style={{ marginTop: 16 }}>
                {isSet
                  ? "Je vhodný, pokud:"
                  : "Tento krok je vhodný, pokud:"}
              </h2>
            </div>
            <ul className={s.checkList}>
              {product.forWhom.map((f) => (
                <li key={f}>
                  <IconCheck size={16} /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SLOŽENÍ (per-product hero actives + INCI accordion) ===== */}
      {(product.heroIngredients || product.inci) && (
        <section className={`${s.section} ${s.sectionIvory}`}>
          <div className={s.container}>
            <div className={s.sectionHeader}>
              <span className={s.eyebrowGold}>
                <IconLeaf size={14} style={{ marginRight: 6 }} /> Složení
              </span>
              <h2 className={s.h2Display}>
                Účinné látky, které dávají {product.no ?? product.name} jeho charakter.
              </h2>
              {product.scentTexture && (
                <p className={s.lead}>{product.scentTexture}</p>
              )}
            </div>

            {/* Hero ingredients grid */}
            {product.heroIngredients &&
              product.heroIngredients.length > 0 && (
                <div className={s.ingredientHeroGrid}>
                  {product.heroIngredients.map((ing) => (
                    <div key={ing.name} className={s.ingredientHeroCard}>
                      <span className={s.ingredientHeroIcon}>
                        <IconMolecule size={20} />
                      </span>
                      <h3 className={s.ingredientHeroName}>{ing.name}</h3>
                      <p className={s.ingredientHeroRole}>{ing.role}</p>
                    </div>
                  ))}
                </div>
              )}

            {/* INCI accordion */}
            {product.inci && (
              <details
                className={s.inciAccordion}
              >
                <summary className={s.inciSummary}>
                  <span>Plný INCI seznam</span>
                  <span style={{ color: "var(--champagne-gold)", fontSize: 20 }}>
                    +
                  </span>
                </summary>
                <p className={s.inciContent}>{product.inci}</p>
              </details>
            )}
          </div>
        </section>
      )}

      {/* ===== JAK POUŽÍVAT ===== */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrow}>Jak používat</span>
              <h2 className={s.sideHeading} style={{ marginTop: 16 }}>
                Pořadí je dané. Nemusíte nic kombinovat.
              </h2>
            </div>
            <ol
              className={s.checkList}
              style={{ counterReset: "step" }}
            >
              {product.howToUse.map((step, i) => (
                <li key={i}>
                  <span
                    style={{
                      fontFamily: "var(--font-display), serif",
                      color: "var(--champagne-gold)",
                      fontSize: 14,
                      minWidth: 24,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Common mistake */}
          {product.commonMistake && (
            <div
              style={{
                marginTop: 48,
                padding: 24,
                background: "var(--bone-white)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--card-radius)",
                maxWidth: 720,
              }}
            >
              <p
                className={s.eyebrowGold}
                style={{ marginBottom: 10 }}
              >
                Nejčastější chyba
              </p>
              <p className={s.bodyCopy}>{product.commonMistake}</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== CO DÁL ===== */}
      {product.nextSteps && product.nextSteps.length > 0 && (
        <section className={`${s.section} ${s.sectionBone}`}>
          <div className={s.container}>
            <div className={s.sectionHeader}>
              <span className={s.eyebrowGold}>Co dál</span>
              <h2 className={s.h2Display}>
                Pokračujte v rituálu.
              </h2>
            </div>
            <div className={s.heroLineCtas} style={{ marginTop: 40 }}>
              {product.nextSteps.map((step) => (
                <a
                  key={step.href}
                  className={s.btnSecondary}
                  href={step.href}
                >
                  {step.label} <IconArrowRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FINAL CTA ===== */}
      <section className={s.finalCta}>
        <div className={s.container}>
          <div className={s.finalCtaInner}>
            <span className={s.eyebrow}>Začněte rituál</span>
            <h2 className={s.heroTitle}>
              {isSet
                ? "Připraveni začít?"
                : "Pět kroků. Jeden rituál."}
            </h2>
            <p className={s.lead}>
              Pokud J.OLI zkoušíte poprvé, začněte Travel Setem. Chcete celou
              péči? Zvolte Complete. Nejste si jistá? Napište nám.
            </p>
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
              <a
                className={`${s.btnSecondary} ${s.btnOnDark}`}
                href="/poradit-s-vyberem"
              >
                Chci poradit
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
