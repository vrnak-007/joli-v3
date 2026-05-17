/**
 * J.OLI ORIGINS v3 — /jak-to-funguje
 *
 * Sekce per brief 14:
 *  1. Hero
 *  2. Longevity přístup
 *  3. Ranní rituál
 *  4. Večerní rituál
 *  5. Proč systém místo náhodné kosmetiky (kontrast)
 *  6. Jak začít
 *  7. FAQ
 *  8. CTA
 */

import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";
import { IconSun, IconMoon, IconArrowRight } from "../icons";

export const metadata: Metadata = {
  title: "Jak to funguje | J.OLI Origins",
  description:
    "Longevity neznamená složitější péči. Znamená pravidelnost, jasné pořadí a produkty, které do sebe zapadají.",
};

const morningSteps = [
  { no: "01", short: "Čištění", product: "No1", img: "/v3/products/no1.jpg" },
  { no: "02", short: "Tonizace", product: "No2", img: "/v3/products/no2.jpg" },
  { no: "03", short: "Hydratace", product: "No3", img: "/v3/products/no3.jpg" },
  {
    no: "04",
    short: "Ranní péče",
    product: "No4 denní",
    img: "/v3/products/no4-day.jpg",
  },
];

const eveningSteps = [
  { no: "01", short: "Čištění", product: "No1", img: "/v3/products/no1.jpg" },
  { no: "02", short: "Tonizace", product: "No2", img: "/v3/products/no2.jpg" },
  { no: "03", short: "Hydratace", product: "No3", img: "/v3/products/no3.jpg" },
  {
    no: "04",
    short: "Večerní péče",
    product: "No4 noční",
    img: "/v3/products/no4-night.jpg",
  },
];

const faqs = [
  {
    q: "Mám začít Travel Setem nebo Complete?",
    a: "Pokud J.OLI zkoušíte poprvé, doporučujeme Travel Set. Vyzkoušíte celý rituál v menším balení. Complete je vhodnější, když už víte, že vám textury a vůně sedí.",
  },
  {
    q: "Proč jsou dva produkty No4?",
    a: "No4 denní (vitaminové sérum + CoQ10) používáte ráno. No4 noční (regenerační sérum) používáte večer. Ostatní kroky (No1, No2, No3) jsou ráno i večer stejné.",
  },
  {
    q: "Je denní No4 SPF?",
    a: "Ne. Denní No4 není SPF a nenahrazuje ochranný krém. Při pobytu venku doplňte ochranný krém s SPF.",
  },
  {
    q: "Můžu používat jen jeden produkt?",
    a: "Můžete, ale celý rituál funguje nejlépe jako celek. Pokud chcete začít postupně, doporučujeme Travel Set, kde máte všechny kroky v menším formátu.",
  },
  {
    q: "Co když mám citlivou pleť?",
    a: "Začněte menším množstvím produktu a sledujte, jak se pleť cítí. Pokud řešíte aktivní kožní onemocnění, doporučujeme poradit se s odborníkem.",
  },
  {
    q: "Je longevity totéž co anti-age?",
    a: "Ne. Longevity nekomunikujeme jako boj proti věku, ale jako dlouhodobý přístup k péči o vzhled, komfort, hydrataci, jas a pravidelnost.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <StickyChrome active="jak-to-funguje" />

      {/* ===== HERO ===== */}
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroSplit}>
            <div className={s.setCopy}>
              <span className={s.eyebrow}>Longevity rituál</span>
              <h1 className={s.heroTitle}>
                Jak funguje longevity rituál J.OLI
              </h1>
              <p className={s.lead}>
                Longevity neznamená složitější péči. Znamená pravidelnost,
                jasné pořadí a produkty, které do sebe zapadají.
              </p>
              <div
                className={`${s.heroLineCtas} ${s.heroLineCtasLeft}`}
                style={{ marginTop: 8 }}
              >
                <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                  Začít Travel Setem
                </a>
                <a className={s.btnSecondary} href="/poradit-s-vyberem">
                  Chci poradit
                </a>
              </div>
            </div>
            <div className={s.setVisual}>
              <img
                src="/v3/hero/jtf-hero.jpg"
                alt="Večerní longevity rituál J.OLI Origins"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== LONGEVITY ===== */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrowGold}>Longevity přístup</span>
              <h2 className={s.h2Display} style={{ marginTop: 16 }}>
                Longevity pleti začíná pravidelností.
              </h2>
            </div>
            <p className={s.bodyCopy}>
              Nejde o rychlý slib ani další kosmetický trend. Jde o dlouhodobý
              přístup: méně střídání produktů, více řádu, komfortu a
              pravidelnosti. Dlouhodobý vzhled pleti nevzniká jedním hero
              produktem. Vzniká pravidelným rituálem, texturami, které se
              příjemně používají, a složkami, které mají v receptuře jasné
              místo.
            </p>
          </div>
        </div>
      </section>

      {/* ===== RÁNO ===== */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrowGold}>
              <IconSun size={14} style={{ marginRight: 6 }} /> Ranní rituál
            </span>
            <h2 className={s.h2Display}>Ráno čtyři kroky.</h2>
            <p className={s.lead}>
              Pořadí: No1 → No2 → No3 → No4 denní
            </p>
          </div>

          <div className={s.stepperHorizontal} style={{ marginTop: 48 }}>
            {morningSteps.map((step) => (
              <div key={"morn-" + step.no} className={s.ritualStep}>
                <div className={s.ritualStepThumb}>
                  <img src={step.img} alt={step.product} />
                </div>
                <span className={s.ritualStepNo}>{step.no}</span>
                <span className={s.ritualStepName}>
                  {step.product}
                  <br />
                  {step.short}
                </span>
              </div>
            ))}
          </div>

          <p
            className={s.smallText}
            style={{
              textAlign: "center",
              marginTop: 32,
              fontStyle: "italic",
            }}
          >
            Denní No4 není SPF. Při pobytu venku doplňte ochranný krém s SPF.
          </p>
        </div>
      </section>

      {/* ===== VEČER ===== */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrowGold}>
              <IconMoon size={14} style={{ marginRight: 6 }} /> Večerní rituál
            </span>
            <h2 className={s.h2Display}>Večer čtyři kroky.</h2>
            <p className={s.lead}>
              Pořadí: No1 → No2 → No3 → No4 noční
            </p>
          </div>

          <div className={s.stepperHorizontal} style={{ marginTop: 48 }}>
            {eveningSteps.map((step) => (
              <div key={"eve-" + step.no} className={s.ritualStep}>
                <div className={s.ritualStepThumb}>
                  <img src={step.img} alt={step.product} />
                </div>
                <span className={s.ritualStepNo}>{step.no}</span>
                <span className={s.ritualStepName}>
                  {step.product}
                  <br />
                  {step.short}
                </span>
              </div>
            ))}
          </div>

          <p
            className={s.smallText}
            style={{
              textAlign: "center",
              marginTop: 32,
              fontStyle: "italic",
            }}
          >
            Večerní rituál pleť očistí, hydratuje a uzavře výživnějším nočním
            krokem.
          </p>

          <div
            style={{
              marginTop: 56,
              borderRadius: "var(--card-radius-lg)",
              overflow: "hidden",
            }}
          >
            <img
              src="/v3/decor/pouzitiranovecer.png"
              alt="Použití ranního a večerního rituálu krok za krokem"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ===== PROČ SYSTÉM ===== */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Proč systém</span>
            <h2 className={s.h2Display}>
              Místo kosmetického chaosu — jasný rituál.
            </h2>
          </div>

          <div className={s.contrastBlock}>
            <div className={`${s.contrastCard} ${s.contrastChaos}`}>
              <h3 className={s.contrastTitle}>Kosmetický chaos</h3>
              <ul className={s.contrastList}>
                <li>· Moc produktů</li>
                <li>· Nejasné pořadí</li>
                <li>· Překrývající se aktivní látky</li>
                <li>· Časté střídání</li>
                <li>· Nevíte, co s čím kombinovat</li>
              </ul>
            </div>
            <div className={`${s.contrastCard} ${s.contrastRitual}`}>
              <h3 className={s.contrastTitle}>J.OLI rituál</h3>
              <ul className={s.contrastList}>
                <li>· Ráno čtyři kroky</li>
                <li>· Večer čtyři kroky</li>
                <li>· Jasné pořadí</li>
                <li>· Propojené kroky</li>
                <li>· Možnost začít Travel Setem</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JAK ZAČÍT ===== */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.sectionHeader} style={{ marginBottom: 72 }}>
            <span className={s.eyebrowGold}>Jak začít</span>
            <h2 className={s.h2Display}>Tři jednoduché cesty.</h2>
          </div>
          <div className={s.choiceGrid} style={{ marginTop: 32 }}>
            <article className={`${s.choiceCard} ${s.choiceCardPrimary}`}>
              <span className={s.choiceBadge}>Doporučujeme</span>
              <span className={s.choiceLabel}>Zkouším poprvé</span>
              <h3 className={s.choiceTitle}>Travel Luxe Set</h3>
              <p className={s.choiceCardHook}>Začněte tady.</p>
              <p className={s.choicePrice}>2 490 Kč</p>
              <div className={s.choiceCardCta}>
                <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                  Začít Travel Setem
                </a>
              </div>
            </article>
            <article className={s.choiceCard}>
              <span className={`${s.choiceBadge} ${s.choiceBadgeGold}`}>
                Úspora 3 750 Kč
              </span>
              <span className={s.choiceLabel}>Chci všechno</span>
              <h3 className={s.choiceTitle}>Complete</h3>
              <p className={s.choicePrice}>9 000 Kč</p>
              <div className={s.choiceCardCta}>
                <a
                  className={s.btnPrimary}
                  href="/produkty/generation-perfect-complete"
                >
                  Chci celou sadu
                </a>
              </div>
            </article>
            <article className={s.choiceCard}>
              <span className={s.choiceLabel}>Nevím</span>
              <h3 className={s.choiceTitle}>Poradíme vám</h3>
              <p className={s.choicePrice}>Zdarma</p>
              <div className={s.choiceCardCta}>
                <a className={s.btnSecondary} href="/poradit-s-vyberem">
                  Chci poradit
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Časté otázky</span>
            <h2 className={s.h2Display}>Co se zákaznice nejčastěji ptají.</h2>
          </div>
          <div className={s.faqList} style={{ maxWidth: 760, margin: "32px auto 0" }}>
            {faqs.map((f, i) => (
              <details key={i} className={s.faqItem}>
                <summary className={s.faqQuestion}>
                  {f.q}
                  <span style={{ color: "var(--champagne-gold)" }}>+</span>
                </summary>
                <p className={s.faqAnswer} style={{ marginTop: 8 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className={s.finalCta}>
        <div className={s.container}>
          <div className={s.finalCtaInner}>
            <span className={s.eyebrow}>Začněte rituál</span>
            <h2 className={s.heroTitle}>Začněte jednoduše.</h2>
            <p className={s.lead}>
              Detailní krok-za-krokem návod najdete také na stránce Jak používat.
            </p>
            <div className={s.finalCtaCtas}>
              <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                Začít Travel Setem
              </a>
              <a
                className={`${s.btnSecondary} ${s.btnOnDark}`}
                href="/jak-to-funguje/pouziti"
              >
                Jak používat <IconArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
