/**
 * J.OLI ORIGINS v3 — /jak-to-funguje/pouziti
 *
 * Detail aplikace ranního a večerního rituálu:
 *  1. Hero + back link
 *  2. Tabulka Ranní rituál (4 kroky)
 *  3. Tabulka Večerní rituál (5 kroků — včetně No5)
 *  4. První týden / Kolik produktu / Čemu se vyhnout / Když nemáte čas
 *  5. CTA
 */

import type { Metadata } from "next";
import s from "../../styles.module.css";
import { StickyChrome, Footer } from "../../Chrome";
import {
  IconSun,
  IconMoon,
  IconArrowRight,
  IconClose,
  IconCheck,
} from "../../icons";

export const metadata: Metadata = {
  title: "Detail aplikace | J.OLI Origins",
  description:
    "Krok za krokem aplikace ranního a večerního rituálu J.OLI Origins. Kolik produktu, jak nanést, jaký je cíl každého kroku.",
};

type Step = {
  no: string;
  category: string;
  product: string;
  img: string;
  amount: string;
  how: string;
  goal: string;
};

const morningSteps: Step[] = [
  {
    no: "01",
    category: "Čištění",
    product: "No1 Dvoufázová mycí emulze",
    img: "/v3/products/no1.jpg",
    amount: "1–2 dávky",
    how: "Protřepejte. Naneste na navlhčenou pleť, jemně masírujte a opláchněte vlažnou vodou.",
    goal: "Odstranit nečistoty a připravit pleť na další kroky.",
  },
  {
    no: "02",
    category: "Tonizace",
    product: "No2 Bioaktivní tonikum",
    img: "/v3/products/no2.jpg",
    amount: "3–5 stříknutí",
    how: "Nastříkejte na pleť nebo do dlaní a jemně vklepejte. Nechte krátce vstřebat.",
    goal: "Osvěžit pleť a připravit ji na hydratační sérum.",
  },
  {
    no: "03",
    category: "Hydratace",
    product: "No3 Collagel hydratační sérum",
    img: "/v3/products/no3.jpg",
    amount: "2–3 dávky",
    how: "Naneste na pleť, krk a dekolt. Jemně vklepejte a nechte krátce usadit.",
    goal: "Dodat pleti hydrataci a podpořit komfort po celý den.",
  },
  {
    no: "04",
    category: "Denní péče",
    product: "No4 Denní vitaminové sérum + CoQ10",
    img: "/v3/products/no4-day.jpg",
    amount: "2–3 kapky",
    how: "Naneste na pleť po séru. Nechte krátce vstřebat a pokračujte SPF, pokud jdete ven.",
    goal: "Antioxidanty a výživa pro svěží a vitální vzhled.",
  },
];

const eveningSteps: Step[] = [
  {
    no: "01",
    category: "Čištění",
    product: "No1 Dvoufázová mycí emulze",
    img: "/v3/products/no1.jpg",
    amount: "1–2 dávky",
    how: "Protřepejte. Naneste na vlhkou pleť, jemně masírujte a opláchněte.",
    goal: "Odstranit make-up, SPF a nečistoty dne.",
  },
  {
    no: "02",
    category: "Tonizace",
    product: "No2 Bioaktivní tonikum",
    img: "/v3/products/no2.jpg",
    amount: "3–5 stříknutí",
    how: "Nastříkejte na pleť nebo do dlaní a jemně vklepejte. Nechte krátce vstřebat.",
    goal: "Zklidnit a připravit pleť na hydrataci.",
  },
  {
    no: "03",
    category: "Hydratace",
    product: "No3 Collagel hydratační sérum",
    img: "/v3/products/no3.jpg",
    amount: "2–3 dávky",
    how: "Naneste na pleť, krk a dekolt. Jemně vklepejte a nechte krátce usadit.",
    goal: "Dodat pleti hloubkovou hydrataci.",
  },
  {
    no: "05",
    category: "Noční obnova",
    product: "No5 Noční regenerační sérum",
    img: "/v3/products/no4-night.jpg",
    amount: "malé množství",
    how: "Naneste jako poslední krok. Jemně vklepejte a nechte působit přes noc.",
    goal: "Vyživit a podpořit regeneraci během spánku.",
  },
];

const firstWeek = [
  { day: "1–2 dny", text: "Používejte základní pořadí s menším množstvím." },
  { day: "3–5 dní", text: "Pokračujte pravidelně a sledujte komfort pleti." },
  { day: "6–7 dní", text: "Upravte množství podle potřeb vaší pleti." },
];

const amounts = [
  { p: "No1 Čištění", a: "1–2 dávky" },
  { p: "No2 Tonikum", a: "3–5 stříknutí" },
  { p: "No3 Hydratace", a: "2–3 dávky" },
  { p: "No4 Denní sérum", a: "2–3 kapky" },
  { p: "No5 Noční sérum", a: "malé množství" },
];

const avoid = [
  "Nanášení na úplně suchou pleť",
  "Příliš mnoho produktu",
  "Tření místo vklepávání",
  "Vynechání hydratačního kroku",
  "Používání horké vody",
  "Očekávání okamžité proměny",
];

const quickRoutines = [
  {
    title: "Rychlé ráno",
    seq: "01 → 02 → 03 → SPF",
    note: "Základní kroky a SPF pro ochranu během dne.",
  },
  {
    title: "Rychlý večer",
    seq: "01 → 02 → 03 → 05",
    note: "Čistý základ, hydratace a výživný závěr.",
  },
];

function StepRow({ step }: { step: Step }) {
  return (
    <article className={s.applyRow}>
      <div className={s.applyNo}>{step.no}</div>
      <div className={s.applyThumb}>
        <img src={step.img} alt={step.product} />
      </div>
      <div className={s.applyCell}>
        <span className={s.applyCellLabel}>{step.category}</span>
        <p className={s.applyCellValue}>{step.product}</p>
      </div>
      <div className={s.applyCell}>
        <span className={s.applyCellLabel}>Kolik</span>
        <p className={s.applyCellValue}>{step.amount}</p>
      </div>
      <div className={s.applyCell}>
        <span className={s.applyCellLabel}>Jak aplikovat</span>
        <p className={s.applyCellValue}>{step.how}</p>
      </div>
      <div className={s.applyCell}>
        <span className={s.applyCellLabel}>Cíl</span>
        <p className={s.applyCellValue}>{step.goal}</p>
      </div>
    </article>
  );
}

export default function HowToUseDetailPage() {
  return (
    <>
      <StickyChrome active="jak-to-funguje" />

      {/* HERO */}
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Detail aplikace</span>
            <h1 className={s.heroTitle}>
              Krok za krokem: ráno a večer.
            </h1>
            <p className={s.lead}>
              Konkrétní množství, postup nanášení a cíl každého kroku. Začněte
              menším množstvím a sledujte, jak se pleť cítí.
            </p>
            <div style={{ marginTop: 12 }}>
              <a className={s.btnSecondary} href="/jak-to-funguje">
                ← Zpět na Jak to funguje
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RANNÍ RITUÁL */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.applyHeader}>
            <span className={s.eyebrowGold}>
              <IconSun size={14} style={{ marginRight: 6 }} /> Ranní rituál
            </span>
            <span className={s.applyFlow}>01 → 02 → 03 → 04</span>
          </div>
          <div className={s.applyTable}>
            {morningSteps.map((step) => (
              <StepRow key={"m-" + step.no} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* VEČERNÍ RITUÁL */}
      <section className={`${s.section} ${s.sectionCharcoal}`}>
        <div className={s.container}>
          <div className={s.applyHeader}>
            <span className={s.eyebrowGold}>
              <IconMoon size={14} style={{ marginRight: 6 }} /> Večerní rituál
            </span>
            <span className={s.applyFlow}>01 → 02 → 03 → 05</span>
          </div>
          <div className={s.applyTable}>
            {eveningSteps.map((step) => (
              <StepRow key={"e-" + step.no} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* PODPŮRNÉ TABULKY */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.applyCardGrid}>
            <div className={s.applyCard}>
              <span className={s.eyebrowGold}>První týden používání</span>
              <ul className={s.applyCardList}>
                {firstWeek.map((w) => (
                  <li key={w.day}>
                    <strong>{w.day}</strong>
                    <span>{w.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={s.applyCard}>
              <span className={s.eyebrowGold}>Kolik produktu použít</span>
              <ul className={s.applyAmounts}>
                {amounts.map((a) => (
                  <li key={a.p}>
                    <span>{a.p}</span>
                    <span>{a.a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={s.applyCard}>
              <span className={s.eyebrowGold}>Čemu se vyhnout</span>
              <ul className={s.applyAvoidList}>
                {avoid.map((a) => (
                  <li key={a}>
                    <IconClose size={14} />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={s.applyCard}>
              <span className={s.eyebrowGold}>Když nemáte čas</span>
              <div className={s.applyQuickList}>
                {quickRoutines.map((q) => (
                  <div key={q.title} className={s.applyQuickItem}>
                    <h4>{q.title}</h4>
                    <p className={s.applyQuickSeq}>{q.seq}</p>
                    <p className={s.applyQuickNote}>{q.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.finalCta}>
        <div className={s.container}>
          <div className={s.finalCtaInner}>
            <span className={s.eyebrow}>Připraveni začít?</span>
            <h2 className={s.heroTitle}>
              Vyzkoušejte celý rituál v Travel Setu.
            </h2>
            <p className={s.lead}>
              Travel Set je nejlepší způsob, jak poznat všechny kroky bez
              nutnosti kupovat plnou sadu.
            </p>
            <div className={s.finalCtaCtas}>
              <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                Začít Travel Setem <IconArrowRight size={14} />
              </a>
              <a
                className={`${s.btnSecondary} ${s.btnOnDark}`}
                href="/jak-to-funguje"
              >
                Zpět na Jak to funguje
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
