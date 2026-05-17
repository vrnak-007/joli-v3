/**
 * J.OLI ORIGINS v3 — /ingredience-a-vyroba
 * Sekce per brief 16.
 */

import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";
import {
  IconCheck,
  IconBotanicalBranch,
  IconBotanicalLeaf,
  IconBotanicalSprig,
} from "../icons";
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
      <section
        className={s.pageHero}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <IconBotanicalSprig
          size={200}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 40,
            left: -40,
            color: "var(--champagne-gold)",
            opacity: 0.18,
            pointerEvents: "none",
          }}
        />
        <IconBotanicalBranch
          size={260}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 20,
            right: -60,
            color: "var(--botanical-olive)",
            opacity: 0.15,
            pointerEvents: "none",
            transform: "rotate(15deg)",
          }}
        />
        <IconBotanicalLeaf
          size={140}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 20,
            left: "10%",
            color: "var(--botanical-olive)",
            opacity: 0.14,
            pointerEvents: "none",
            transform: "rotate(-25deg)",
          }}
        />
        <IconBotanicalSprig
          size={120}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 40,
            right: "12%",
            color: "var(--champagne-gold)",
            opacity: 0.18,
            pointerEvents: "none",
            transform: "rotate(180deg)",
          }}
        />
        <div className={s.container} style={{ position: "relative", zIndex: 1 }}>
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
      <section
        className={`${s.section} ${s.sectionIvory}`}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <IconBotanicalSprig
          size={220}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 30,
            left: -60,
            color: "var(--champagne-gold)",
            opacity: 0.16,
            pointerEvents: "none",
          }}
        />
        <IconBotanicalBranch
          size={260}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 80,
            right: -70,
            color: "var(--botanical-olive)",
            opacity: 0.14,
            pointerEvents: "none",
            transform: "rotate(20deg)",
          }}
        />
        <IconBotanicalLeaf
          size={160}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 40,
            left: "12%",
            color: "var(--botanical-olive)",
            opacity: 0.12,
            pointerEvents: "none",
            transform: "rotate(-15deg)",
          }}
        />
        <IconBotanicalSprig
          size={140}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 60,
            right: "8%",
            color: "var(--champagne-gold)",
            opacity: 0.18,
            pointerEvents: "none",
            transform: "rotate(180deg)",
          }}
        />
        <div className={s.container} style={{ position: "relative", zIndex: 1 }}>
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
      <section
        className={`${s.section} ${s.sectionBone}`}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.08,
            color: "var(--dark-moss)",
            pointerEvents: "none",
          }}
        >
          <defs>
            <pattern
              id="worldDots"
              x="0"
              y="0"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.4" fill="currentColor" />
            </pattern>
            <mask id="worldMask">
              <rect width="1000" height="500" fill="black" />
              {/* Severní Amerika */}
              <path
                d="M120,110 Q150,80 200,90 Q240,95 270,120 Q280,150 260,180 Q230,220 200,230 Q170,235 150,220 Q120,200 110,170 Q105,140 120,110 Z"
                fill="white"
              />
              <path
                d="M180,240 Q200,250 220,275 Q225,300 215,315 Q200,325 185,318 Q170,305 168,285 Q170,255 180,240 Z"
                fill="white"
              />
              {/* Jižní Amerika */}
              <path
                d="M260,300 Q280,295 295,310 Q310,340 310,375 Q305,410 285,430 Q265,440 255,425 Q245,400 248,370 Q252,335 260,300 Z"
                fill="white"
              />
              {/* Evropa */}
              <path
                d="M470,120 Q500,105 535,115 Q560,130 555,155 Q540,175 510,180 Q480,180 465,165 Q455,145 470,120 Z"
                fill="white"
              />
              {/* Afrika */}
              <path
                d="M490,200 Q525,190 560,205 Q580,235 580,275 Q575,320 555,355 Q535,380 510,380 Q485,370 475,340 Q465,300 470,260 Q478,225 490,200 Z"
                fill="white"
              />
              {/* Asie */}
              <path
                d="M580,110 Q650,95 740,110 Q820,125 870,155 Q890,180 870,205 Q820,225 740,225 Q670,225 610,215 Q575,200 575,170 Q570,135 580,110 Z"
                fill="white"
              />
              {/* Indie */}
              <path
                d="M650,225 Q680,225 690,250 Q695,275 680,295 Q665,300 655,285 Q645,260 650,225 Z"
                fill="white"
              />
              {/* Austrálie */}
              <path
                d="M790,335 Q830,325 870,335 Q890,355 880,380 Q855,395 820,395 Q790,390 780,370 Q780,350 790,335 Z"
                fill="white"
              />
            </mask>
          </defs>
          <rect
            width="1000"
            height="500"
            fill="url(#worldDots)"
            mask="url(#worldMask)"
          />
        </svg>
        <div className={s.container} style={{ position: "relative", zIndex: 1 }}>
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
