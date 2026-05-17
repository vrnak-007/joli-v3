/**
 * J.OLI ORIGINS v3 — /ingredience-a-vyroba
 * Sekce per brief 16.
 */

import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";
import { IconCheck } from "../icons";
import {
  INGREDIENTS,
  INGREDIENT_CATEGORIES,
  type IngredientCategory,
} from "../../data/ingredients";

export const metadata: Metadata = {
  title: "Ingredience a výroba | J.OLI Origins",
  description:
    "Ingredience, které mají v rituálu své místo. Botanické extrakty, aktivní látky a výrobní proces v malých šaržích v ČR.",
};

const pillars = [
  {
    title: "Botanické extrakty",
    text: "Rostlinné extrakty, hydroláty a oleje tvoří botanický základ značky.",
  },
  {
    title: "Funkční aktivní látky",
    text: "Kyselina hyaluronová, koenzym Q10, peptidy, fermenty, NMN, bakuchiol nebo vitaminové deriváty.",
  },
  {
    title: "Malé šarže",
    text: "Větší kontrola nad výrobou, texturou a čerstvostí produktů.",
  },
  {
    title: "Smyslový rituál",
    text: "Vůně, textura a pořadí použití jsou součástí celku.",
  },
];

const processSteps = [
  "Výběr botanických surovin",
  "Příprava extraktů, olejů a hydrolátů",
  "Formulace textury",
  "Výroba v menších šaržích",
  "Plnění do obalů",
  "Zařazení do ranního nebo večerního rituálu",
];

const promises = {
  yes: [
    "promyšlený longevity rituál",
    "jasné pořadí produktů",
    "prémiové textury",
    "pečlivě vybrané botanické a aktivní složky",
    "možnost začít postupně",
    "osobní doporučení při výběru",
  ],
  no: [
    "zázraky přes noc",
    "léčbu dermatologických obtíží",
    "náhradu odborné péče",
    "náhradu SPF",
    "že každé pleti bude sedět vše bez individuální reakce",
  ],
};

export default function IngredientsPage() {
  // Seskupíme ingredience podle první kategorie
  const grouped: Record<string, typeof INGREDIENTS> = {};
  for (const ing of INGREDIENTS) {
    const cat = ing.category[0];
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(ing);
  }

  return (
    <>
      <StickyChrome active="ingredience" />

      {/* HERO */}
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Ingredience a výroba</span>
            <h1 className={s.heroTitle}>
              Ingredience, které mají v rituálu své místo.
            </h1>
            <p className={s.lead}>
              Botanické extrakty, aktivní látky a textury vybíráme tak, aby
              podporovaly dlouhodobý, pravidelný a smyslově příjemný přístup
              k péči o pleť.
            </p>
            <p
              className={s.smallText}
              style={{ marginTop: 8, fontStyle: "italic" }}
            >
              Nechceme dlouhý seznam trendů. Každá složka má mít v receptuře
              důvod.
            </p>
          </div>
        </div>
      </section>

      {/* PILÍŘE */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrowGold}>Čtyři pilíře receptur</span>
            <h2 className={s.h2Display}>
              Botanika, věda, šarže a smyslovost.
            </h2>
          </div>
          <div className={s.pillarsGrid}>
            {pillars.map((p) => (
              <div key={p.title} className={s.pillarCard}>
                <h3 className={s.pillarTitle}>{p.title}</h3>
                <p className={s.pillarText}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÝROBA */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrow}>Výrobní proces</span>
              <h2 className={s.h2Display} style={{ marginTop: 16 }}>
                Od suroviny k rituálu.
              </h2>
              <p className={s.bodyCopy} style={{ marginTop: 16 }}>
                Receptury vznikají v menších šaržích a s důrazem na smyslový
                zážitek, stabilitu a logiku celého rituálu.
              </p>
            </div>
            <ol className={s.checkList}>
              {processSteps.map((step, i) => (
                <li key={step}>
                  <span
                    style={{
                      fontFamily: "var(--font-display), serif",
                      color: "var(--champagne-gold)",
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
        </div>
      </section>

      {/* KNIHOVNA */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrowGold}>Knihovna ingrediencí</span>
            <h2 className={s.h2Display}>
              Co najdete v receptuře a proč.
            </h2>
          </div>

          {INGREDIENT_CATEGORIES.map((cat) => {
            const items = grouped[cat.id];
            if (!items || items.length === 0) return null;
            return (
              <div key={cat.id} className={s.ingredientGroup}>
                <div className={s.ingredientGroupHeader}>
                  <h3 className={s.ingredientGroupTitle}>{cat.label}</h3>
                  <p className={s.ingredientGroupNote}>{cat.text}</p>
                </div>
                <div className={s.ingredientList}>
                  {items.map((ing) => (
                    <details
                      key={ing.id}
                      className={s.ingredientItem}
                    >
                      <summary>
                        <span>
                          <span className={s.ingredientName}>{ing.nameCs}</span>
                          {ing.nameInci && (
                            <span className={s.ingredientInci}>
                              · {ing.nameInci}
                            </span>
                          )}
                          <div className={s.ingredientRole}>{ing.role}</div>
                        </span>
                        <span
                          style={{
                            color: "var(--champagne-gold)",
                            fontSize: 18,
                          }}
                        >
                          +
                        </span>
                      </summary>
                      <div className={s.ingredientDetail}>
                        <p style={{ margin: 0 }}>
                          {ing.longDescription ?? ing.shortDescription}
                        </p>
                        {ing.foundIn && ing.foundIn.length > 0 && (
                          <span className={s.ingredientFoundIn}>
                            Najdete v: {ing.foundIn.join(", ")}
                          </span>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SLIBUJEME / NESLIBUJEME */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Co slibujeme a co neslibujeme</span>
            <h2 className={s.h2Display}>Péče, která nepřehání.</h2>
          </div>
          <div className={s.contrastBlock}>
            <div className={`${s.contrastCard} ${s.contrastChaos}`}>
              <h3 className={s.contrastTitle}>Slibujeme</h3>
              <ul className={s.contrastList}>
                {promises.yes.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </div>
            <div className={`${s.contrastCard} ${s.contrastRitual}`}>
              <h3 className={s.contrastTitle}>Neslibujeme</h3>
              <ul className={s.contrastList}>
                {promises.no.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={s.finalCta}>
        <div className={s.container}>
          <div className={s.finalCtaInner}>
            <span className={s.eyebrow}>Začněte rituál</span>
            <h2 className={s.heroTitle}>
              Receptury, kterým můžete věřit.
            </h2>
            <div className={s.finalCtaCtas}>
              <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                Začít Travel Setem
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
