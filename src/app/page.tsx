/**
 * J.OLI ORIGINS v3 — Homepage
 * Botanical Prestige / Quiet Luxury / Longevity Ritual
 *
 * Sekce per brief 9.x:
 *  1. Chrome (top bar + header)
 *  2. Hero — „Pět kroků pro dlouhověkost pleti."
 *  3. Vyberte si, jak chcete začít (3 karty)
 *  4. Jeden rituál. Dvě jednoduchá pořadí. (Ráno / Večer)
 *  5. Travel Luxe Set hero
 *  6. Generation Perfect Complete (s ekonomikou)
 *  7. Prémiová péče, které můžete věřit (4 pilíře)
 *  8. Recenze
 *  9. Příběh značky
 * 10. Final CTA (tmavá sekce)
 * 11. Footer
 */

import type { Metadata } from "next";
import s from "./styles.module.css";
import { StickyChrome, Footer } from "./Chrome";
import {
  IconTruck,
  IconGift,
  IconBatch,
  IconCheck,
  IconLeaf,
  IconMolecule,
  IconCompass,
  IconSun,
  IconMoon,
  IconArrowRight,
  IconBotanicalBranch,
  IconBotanicalSprig,
  IconBotanicalLeaf,
  IconDropletEditorial,
} from "./icons";

export const metadata: Metadata = {
  title: "J.OLI ORIGINS — Pět kroků pro dlouhověkost pleti",
  description:
    "Ranní a večerní longevity rituál, který dává péči o pleť jasný řád. Začněte Travel Luxe Setem, zvolte kompletní sadu nebo si nechte poradit.",
};

/* ============================================================
 * Data — lokální pro homepage; produkty/data později zkonsoliduji
 * ============================================================ */
const morningSteps = [
  { no: "01", name: "Čištění", product: "No1", img: "/v3/products/no1.jpg" },
  { no: "02", name: "Tonizace", product: "No2", img: "/v3/products/no2.jpg" },
  { no: "03", name: "Hydratace", product: "No3", img: "/v3/products/no3.jpg" },
  {
    no: "04",
    name: "Ranní péče",
    product: "No4 denní",
    img: "/v3/products/no4-day.jpg",
  },
];

const eveningSteps = [
  { no: "01", name: "Čištění", product: "No1", img: "/v3/products/no1.jpg" },
  { no: "02", name: "Tonizace", product: "No2", img: "/v3/products/no2.jpg" },
  { no: "03", name: "Hydratace", product: "No3", img: "/v3/products/no3.jpg" },
  {
    no: "04",
    name: "Večerní péče",
    product: "No4 noční",
    img: "/v3/products/no4-night.jpg",
  },
];

const pillars = [
  {
    Icon: IconBatch,
    title: "Malé šarže v ČR",
    text: "Vyrábíme v menších šaržích, abychom drželi kontrolu nad kvalitou.",
  },
  {
    Icon: IconLeaf,
    title: "Botanické extrakty",
    text: "Rostlinné výtažky jsou součástí identity značky i receptur.",
  },
  {
    Icon: IconMolecule,
    title: "Aktivní látky",
    text: "Každý krok má v rituálu konkrétní roli.",
  },
  {
    Icon: IconCompass,
    title: "Osobní doporučení",
    text: "Nejste si jistá? Pomůžeme vám vybrat.",
  },
];

const reviews = [
  {
    name: "Markéta",
    meta: "42 let · začala Travel Setem",
    initial: "M",
    text: "Nechtěla jsem hned kupovat plnou sadu. Travel Set mi pomohl poznat textury i vůně a hlavně jsem konečně věděla, co použít ráno a co večer.",
  },
  {
    name: "Jana",
    meta: "51 let · používá Complete",
    initial: "J",
    text: "Líbí se mi, že nemusím kombinovat pět různých značek. Všechno má své pořadí a dává mi to smysl.",
  },
  {
    name: "Petra",
    meta: "39 let · osobní doporučení",
    initial: "P",
    text: "Nebyla jsem si jistá, kde začít. Doporučení mi pomohlo vybrat Travel Set místo toho, abych nakupovala naslepo.",
  },
];

/* ============================================================
 * Homepage
 * ============================================================ */
export default function HomePage() {
  return (
    <>
      <StickyChrome active={null} />

      {/* ===== 1. HERO ===== */}
      <section className={s.hero}>
        <div className={s.container}>
          <div className={s.heroPhoto} aria-hidden="true" />
          <div className={s.heroGrid}>
            <div className={s.heroCopy}>
              <span className={s.eyebrow}>Longevity rituál</span>
              <h1 className={s.heroTitle}>
                Pět kroků.
                <br />
                Jednodušší péče.
                <br />
                <em>Dlouhodobě krásnější pleť.</em>
              </h1>
              <p className={s.heroSub}>
                Ráno víte, co použít. Večer víte, co použít. Pokud J.OLI
                zkoušíte poprvé, začněte Travel Luxe Setem.
              </p>
            </div>

          </div>

          <div className={`${s.heroCtas} ${s.heroCtasUnderPhoto}`}>
            <a
              className={s.btnPrimary}
              href="/produkty/travel-luxe-set"
            >
              Začít Travel Setem
            </a>
            <a
              className={s.btnSecondary}
              href="/produkty/generation-perfect-complete"
            >
              Chci celou sadu
            </a>
            <a className={s.btnTextLink} href="/poradit-s-vyberem">
              Chci poradit
            </a>
          </div>

          <div className={s.heroBenefits}>
            <span className={s.heroBenefit}>
              <IconTruck size={14} /> Doprava zdarma vždy
            </span>
            <span className={s.heroBenefit}>
              <IconGift size={14} /> Dárek od 2 500 Kč
            </span>
            <span className={s.heroBenefit}>
              <IconLeaf size={14} /> Malé šarže v Česku
            </span>
          </div>
        </div>
      </section>

      {/* ===== 2. VYBERTE SI, JAK CHCETE ZAČÍT ===== */}
      <section
        className={`${s.section} ${s.sectionIvory}`}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <IconBotanicalSprig
          size={160}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 40,
            left: -50,
            color: "var(--champagne-gold)",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
        <div className={s.container} style={{ position: "relative", zIndex: 1 }}>
          <div className={s.choiceHeader}>
            <h2 className={s.h2Display}>Vyberte si, jak chcete začít.</h2>
            <p className={s.lead}>
              Nemusíte hned znát všechny produkty. Vyberte cestu, která vám
              dává smysl už dnes.
            </p>
          </div>

          <div className={s.choiceGrid}>
            {/* Card 1 — Travel (PRIMARY) */}
            <article className={`${s.choiceCard} ${s.choiceCardPrimary}`}>
              <span className={s.choiceBadge}>Doporučujeme</span>
              <span className={s.choiceLabel}>Začínám poprvé</span>
              <h3 className={s.choiceTitle}>Travel Luxe Set</h3>
              <p className={s.choiceCardHook}>Začněte tady.</p>
              <div className={s.choiceVisual}>
                <img
                  src="/v3/sets/travel_luxe_card_visual.jpg"
                  alt="Travel Luxe Set — menší sada všech pěti kroků"
                />
              </div>
              <p className={s.choicePrice}>2 490 Kč</p>
              <p className={s.choiceDescription}>
                Nemusíte hned kupovat celou sadu. Vyzkoušíte celý rituál
                v menším balení.
              </p>
              <div className={s.choiceCardCta}>
                <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                  Začít Travel Setem
                </a>
              </div>
            </article>

            {/* Card 2 — Complete */}
            <article className={s.choiceCard}>
              <span className={`${s.choiceBadge} ${s.choiceBadgeGold}`}>
                Úspora 3 750 Kč
              </span>
              <span className={s.choiceLabel}>Chci kompletní péči</span>
              <h3 className={s.choiceTitle}>Generation Perfect Complete</h3>
              <div className={s.choiceVisual}>
                <img
                  src="/v3/sets/complete_set_card_visual.jpg"
                  alt="Generation Perfect Complete — pět plných produktů"
                />
              </div>
              <p className={s.choicePrice}>9 000 Kč</p>
              <p className={s.choiceDescription}>
                Plná balení všech produktů. Výhodnější než kupovat jednotlivě.
              </p>
              <div className={s.choiceCardCta}>
                <a
                  className={s.btnPrimary}
                  href="/produkty/generation-perfect-complete"
                >
                  Chci celou sadu
                </a>
              </div>
            </article>

            {/* Card 3 — Consultation */}
            <article className={s.choiceCard}>
              <span className={s.choiceLabel}>Nevím, co vybrat</span>
              <h3 className={s.choiceTitle}>Osobní doporučení</h3>
              <div className={s.choiceVisual}>
                <img
                  src="/v3/ritual/ritual_morning_visual.jpg"
                  alt="Osobní doporučení podle typu pleti"
                />
              </div>
              <p className={s.choicePrice}>Zdarma</p>
              <p className={s.choiceDescription}>
                Odpovíte na pár otázek a doporučíme nejlepší začátek.
              </p>
              <div className={s.choiceCardCta}>
                <a className={s.btnSecondary} href="/poradit-s-vyberem">
                  Vybrat pomocí konzultace
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== 3. JEDEN RITUÁL, DVĚ POŘADÍ ===== */}
      <section
        className={`${s.section} ${s.sectionBone}`}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <IconBotanicalLeaf
          size={130}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 60,
            right: -30,
            color: "var(--botanical-olive)",
            opacity: 0.13,
            pointerEvents: "none",
            transform: "rotate(25deg)",
          }}
        />
        <div className={s.container} style={{ position: "relative", zIndex: 1 }}>
          <div className={s.sectionHeader}>
            <h2 className={s.h2Display}>
              Jeden rituál. Dvě jednoduchá pořadí.
            </h2>
            <p className={s.lead}>
              Ranní pořadí a večerní pořadí. Stejný řád, jiný cíl pro pleť.
            </p>
          </div>

          <div className={s.ritualWrap}>
            {/* Morning */}
            <div className={`${s.ritualBlock} ${s.ritualBlockMorning}`}>
              <span className={s.ritualLabel}>
                <IconSun size={14} style={{ marginRight: 6 }} /> Ráno
              </span>
              <div className={s.ritualSteps}>
                {morningSteps.map((st) => (
                  <div key={"morn-" + st.no} className={s.ritualStep}>
                    <div className={s.ritualStepThumb}>
                      <img src={st.img} alt={st.product} />
                    </div>
                    <span className={s.ritualStepNo}>{st.no}</span>
                    <span className={s.ritualStepName}>
                      {st.product}
                      <br />
                      {st.name}
                    </span>
                  </div>
                ))}
              </div>
              <p className={s.ritualNote}>
                Denní No4 není SPF. Při pobytu venku doplňte ochranný krém s SPF.
              </p>
            </div>

            {/* Evening */}
            <div className={`${s.ritualBlock} ${s.ritualBlockEvening}`}>
              <span className={s.ritualLabel}>
                <IconMoon size={14} style={{ marginRight: 6 }} /> Večer
              </span>
              <div className={s.ritualSteps}>
                {eveningSteps.map((st) => (
                  <div key={"eve-" + st.no} className={s.ritualStep}>
                    <div className={s.ritualStepThumb}>
                      <img src={st.img} alt={st.product} />
                    </div>
                    <span className={s.ritualStepNo}>{st.no}</span>
                    <span className={s.ritualStepName}>
                      {st.product}
                      <br />
                      {st.name}
                    </span>
                  </div>
                ))}
              </div>
              <p className={s.ritualNote}>
                Večerní rituál uzavře pleť výživnějším krokem.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a className={s.btnSecondary} href="/jak-to-funguje">
              Jak to funguje
            </a>
          </div>
        </div>
      </section>

      {/* ===== 4. TRAVEL LUXE SET ===== */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.setHero}>
            <div className={s.setVisual}>
              <img
                src="/v3/sets/travel_luxe_open_box_mood.jpg"
                alt="Travel Luxe Set — otevřený box s pěti kroky rituálu"
              />
            </div>
            <div className={s.setCopy}>
              <span className={s.eyebrow}>Travel Luxe Set</span>
              <h2 className={s.h2Display}>
                Nejlepší první krok: Travel Luxe Set
              </h2>
              <p className={s.bodyCopy}>
                Vyzkoušíte celý rituál v menším balení. Poznáte vůně, textury
                i pocit na pleti. Teprve potom se rozhodnete, jestli chcete
                plnou sadu.
              </p>
              <ul className={s.setBenefitList}>
                <li>
                  <IconCheck size={16} /> Celý rituál v menším balení
                </li>
                <li>
                  <IconCheck size={16} /> Ideální pro první nákup
                </li>
                <li>
                  <IconCheck size={16} /> Bez nutnosti kupovat plnou sadu
                </li>
              </ul>
              <div className={s.priceTag}>
                <strong>2 490 Kč</strong>
              </div>
              <div className={s.setCtas}>
                <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                  Začít Travel Setem
                </a>
                <a className={s.btnTextLink} href="/jak-to-funguje">
                  Co je uvnitř
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. GENERATION PERFECT COMPLETE ===== */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={`${s.setHero} ${s.setHeroReverse}`}>
            <div className={s.setCopy}>
              <span className={s.eyebrow}>Generation Perfect Complete</span>
              <h2 className={s.h2Display}>
                Chcete rovnou celou péči?
              </h2>
              <p className={s.bodyCopy}>
                Complete obsahuje plná balení všech produktů pro ráno i večer.
              </p>

              <div className={s.setEconomy}>
                <div className={s.setEconomyRow}>
                  <span>Jednotlivě</span>
                  <span>12 750 Kč</span>
                </div>
                <div className={s.setEconomyRow}>
                  <span>Sada</span>
                  <span>9 000 Kč</span>
                </div>
                <div className={s.setEconomyHighlight}>
                  <span>Ušetříte</span>
                  <span>3 750 Kč</span>
                </div>
              </div>

              <div className={s.setCtas}>
                <a
                  className={s.btnPrimary}
                  href="/produkty/generation-perfect-complete"
                >
                  Chci celou sadu
                </a>
                <a className={s.btnTextLink} href="/produkty/travel-luxe-set">
                  Nejdřív začít Travel Setem
                </a>
              </div>
            </div>
            <div className={s.setVisual}>
              <img
                src="/v3/sets/complete_set_still_life.jpg"
                alt="Generation Perfect Complete — pět plných produktů rituálu"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. TRUST PILLARS ===== */}
      <section
        className={`${s.section} ${s.sectionIvory}`}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <IconBotanicalSprig
          size={200}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -20,
            right: -40,
            color: "var(--champagne-gold)",
            opacity: 0.18,
            pointerEvents: "none",
          }}
        />
        <IconBotanicalLeaf
          size={120}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -20,
            left: -30,
            color: "var(--botanical-olive)",
            opacity: 0.15,
            pointerEvents: "none",
            transform: "rotate(-20deg)",
          }}
        />
        <div className={s.container} style={{ position: "relative", zIndex: 1 }}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrowGold}>Proč J.OLI</span>
            <h2 className={s.h2Display}>
              Prémiová péče, které můžete věřit.
            </h2>
          </div>

          <div className={s.pillarsGrid}>
            {pillars.map((p) => (
              <div key={p.title} className={s.pillarCard}>
                <span className={s.pillarIcon}>
                  <p.Icon size={20} />
                </span>
                <h3 className={s.pillarTitle}>{p.title}</h3>
                <p className={s.pillarText}>{p.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a className={s.btnTextLink} href="/ingredience-a-vyroba">
              Poznat ingredience
            </a>
          </div>
        </div>
      </section>

      {/* ===== 7. RECENZE ===== */}
      <section
        className={`${s.section} ${s.sectionBone}`}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <IconBotanicalBranch
          size={180}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 30,
            left: -40,
            color: "var(--champagne-gold)",
            opacity: 0.12,
            pointerEvents: "none",
            transform: "rotate(-18deg)",
          }}
        />
        <IconDropletEditorial
          size={50}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 60,
            right: 60,
            color: "var(--champagne-gold)",
            opacity: 0.25,
            pointerEvents: "none",
          }}
        />
        <div className={s.container} style={{ position: "relative", zIndex: 1 }}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Recenze</span>
            <h2 className={s.h2Display}>
              Co zákaznice oceňují nejčastěji.
            </h2>
          </div>

          <div className={s.reviewsGrid}>
            {reviews.map((r) => (
              <article key={r.name} className={s.reviewCard}>
                <p className={s.reviewText}>{r.text}</p>
                <div className={s.reviewAuthor}>
                  <span className={s.reviewAvatar}>{r.initial}</span>
                  <div>
                    <div className={s.reviewAuthorName}>{r.name}</div>
                    <div className={s.reviewAuthorMeta}>{r.meta}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL MACRO STRIP ===== */}
      <div className={s.macroStrip}>
        <div className={s.macroStripTile}>
          <img src="/v3/decor/macro-1.webp" alt="Botanický detail" />
        </div>
        <div className={s.macroStripTile}>
          <img src="/v3/decor/macro-2.webp" alt="Detail séra" />
        </div>
        <div className={s.macroStripTile}>
          <img src="/v3/decor/macro-3.webp" alt="Sklo a textura" />
        </div>
        <div className={s.macroStripTile}>
          <img src="/v3/decor/macro-4.webp" alt="Botanické extrakty" />
        </div>
        <div className={s.macroStripTile}>
          <img src="/v3/decor/macro-5.webp" alt="Ranní rituál" />
        </div>
      </div>

      {/* ===== 8. PŘÍBĚH ZNAČKY ===== */}
      <section
        className={`${s.section} ${s.sectionIvory}`}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <IconBotanicalSprig
          size={150}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 50,
            left: -40,
            color: "var(--botanical-olive)",
            opacity: 0.16,
            pointerEvents: "none",
            transform: "rotate(15deg)",
          }}
        />
        <div className={s.container} style={{ position: "relative", zIndex: 1 }}>
          <div className={s.founderGrid}>
            <div className={s.founderVisual}>
              <img
                src="/v3/hero/founder.png"
                alt="Jitka Vrňáková — zakladatelka J.OLI Origins"
              />
            </div>
            <div className={s.founderCopy}>
              <span className={s.eyebrow}>Příběh značky</span>
              <h2 className={s.h2Display}>
                Z osobní potřeby vznikla péče, která má řád.
              </h2>
              <p className={s.bodyCopy}>
                Za J.OLI ORIGINS stojí Jitka Vrňáková. Z hledání jemné
                a promyšlené péče vznikl systém, který má ženám usnadnit
                každodenní rozhodování — ne přidat další kosmetický chaos.
              </p>
              <blockquote className={s.founderQuote}>
                <span>
                  Chtěla jsem péči, která dává smysl ráno i večer. Bez chaosu,
                  bez slibů, ale s řádem.
                </span>
              </blockquote>
              <div>
                <a className={s.btnSecondary} href="/pribeh">
                  Poznat příběh značky
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. FINAL CTA ===== */}
      <section className={s.finalCta}>
        <IconBotanicalBranch
          size={220}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            color: "var(--champagne-gold)",
            opacity: 0.16,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <IconBotanicalSprig
          size={180}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            color: "var(--champagne-gold)",
            opacity: 0.16,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div className={s.container}>
          <div className={s.finalCtaInner}>
            <span className={s.eyebrow}>Začněte rituál</span>
            <h2 className={s.heroTitle}>Začněte jednoduše.</h2>
            <p className={s.lead}>
              Zkoušíte J.OLI poprvé? Začněte Travel Setem. Chcete rovnou celou
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
                Chci celou sadu <IconArrowRight size={14} />
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
