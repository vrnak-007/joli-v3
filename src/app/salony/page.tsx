/**
 * J.OLI ORIGINS v3 — /salony
 * Sekce per brief 19.
 */

import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";
import { IconCheck, IconArrowRight } from "../icons";

export const metadata: Metadata = {
  title: "Salony | J.OLI Origins",
  description:
    "Profesionální longevity rituál pro salony, které chtějí nabídnout víc než běžné ošetření.",
};

const benefits = [
  "Vyšší vnímaná hodnota ošetření",
  "Jasná domácí návaznost",
  "Retail bez tvrdého prodeje",
  "Odlišitelnost salonu",
  "Dlouhodobý vztah s klientkou",
];

const ritualSteps = [
  { no: "01", t: "Konzultace", d: "Krátký rozhovor o pleti klientky a o jejím cíli." },
  { no: "02", t: "Ošetření", d: "Salonní ošetření s J.OLI produkty." },
  { no: "03", t: "Doporučení domácí péče", d: "Klientka odchází se srozumitelným plánem rituálu." },
  { no: "04", t: "Follow-up", d: "Návaznost na další návštěvu a opakované nákupy." },
];

const partners = [
  {
    name: "Starter",
    tagline: "První zařazení J.OLI do salonu.",
    for: "Pro salony, které značku zkoušejí poprvé.",
  },
  {
    name: "Ritual Partner",
    tagline: "Stabilní spolupráce.",
    for: "Pro salony, které již s J.OLI pracují a chtějí prohloubit nabídku.",
  },
  {
    name: "Signature Salon",
    tagline: "Vlajková spolupráce.",
    for: "Pro salony zaměřené na prémiový segment a dlouhodobou klientelu.",
  },
];

export default function SalonsPage() {
  return (
    <>
      <StickyChrome active="salony" />

      {/* HERO */}
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroSplit}>
            <div className={s.setCopy}>
              <span className={s.eyebrow}>Pro salony</span>
              <h1 className={s.heroTitle}>
                Profesionální longevity rituál pro salony.
              </h1>
              <p className={s.bodyCopy}>
                J.OLI ORIGINS propojuje prémiové salonní ošetření s domácím
                pokračováním péče. Klientka nezažije jen proceduru, ale
                odchází s jasným rituálem.
              </p>
              <div className={s.setCtas}>
                <a className={s.btnPrimary} href="#kontakt">
                  Poptat spolupráci
                </a>
              </div>
            </div>
            <div className={s.setVisual}>
              <img
                src="/v3/salons/salon_hero_desktop.jpg"
                alt="Profesionální salon s rituálem J.OLI"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROČ ZAŘADIT */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrowGold}>Proč zařadit J.OLI</span>
              <h2 className={s.h2Display} style={{ marginTop: 16 }}>
                Více než produkt — celý rituál.
              </h2>
            </div>
            <ul className={s.checkList}>
              {benefits.map((b) => (
                <li key={b}>
                  <IconCheck size={16} /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SALONNÍ RITUÁL */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Jak funguje salonní rituál</span>
            <h2 className={s.h2Display}>Čtyři kroky od konzultace k follow-upu.</h2>
          </div>
          <div className={s.stepperHorizontal} style={{ marginTop: 48 }}>
            {ritualSteps.map((step) => (
              <div key={step.no} className={s.ritualStep}>
                <span className={s.ritualStepNo}>{step.no}</span>
                <h3
                  className={s.choiceTitle}
                  style={{ fontSize: 19, margin: "4px 0" }}
                >
                  {step.t}
                </h3>
                <p className={s.smallText} style={{ textAlign: "center" }}>
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMÁCÍ POKRAČOVÁNÍ */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrowGold}>Domácí pokračování</span>
              <h2 className={s.h2Display} style={{ marginTop: 16 }}>
                Klientka odchází s jasnou domácí péčí.
              </h2>
            </div>
            <p className={s.bodyCopy}>
              J.OLI má jasné pořadí kroků pro ráno a večer. Klientka nemusí
              doma řešit, co s čím kombinovat — má rituál, který jí dává
              smysl od první aplikace. Vy získáváte retail bez tvrdého
              prodeje a dlouhodobý vztah místo jednorázové procedury.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERSKÉ MODELY */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Partnerské modely</span>
            <h2 className={s.h2Display}>Tři úrovně spolupráce.</h2>
            <p className={s.smallText}>
              Konkrétní rabaty a obchodní podmínky doplníme po prvním
              kontaktu podle profilu salonu.
            </p>
          </div>
          <div className={s.choiceGrid} style={{ marginTop: 48 }}>
            {partners.map((p, idx) => (
              <article
                key={p.name}
                className={
                  idx === 1
                    ? `${s.choiceCard} ${s.choiceCardPrimary}`
                    : s.choiceCard
                }
              >
                {idx === 1 && (
                  <span className={s.choiceBadge}>Nejčastější volba</span>
                )}
                <span className={s.choiceLabel}>Úroveň {idx + 1}</span>
                <h3 className={s.choiceTitle}>{p.name}</h3>
                <p className={s.choiceCardHook}>{p.tagline}</p>
                <p className={s.choiceDescription}>{p.for}</p>
                <div className={s.choiceCardCta}>
                  <a className={s.btnSecondary} href="#kontakt">
                    Mám zájem <IconArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT FORM */}
      <section
        id="kontakt"
        className={`${s.section} ${s.sectionIvory}`}
      >
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Poptat spolupráci</span>
            <h2 className={s.h2Display}>Napište nám o vašem salonu.</h2>
          </div>
          <form className={s.formCard} action="#" method="POST">
            <div className={s.formGrid}>
              <div className={s.formField}>
                <label htmlFor="salon">Název salonu</label>
                <input id="salon" name="salon" type="text" required />
              </div>
              <div className={s.formField}>
                <label htmlFor="contact">Kontaktní osoba</label>
                <input id="contact" name="contact" type="text" required />
              </div>
              <div className={s.formField}>
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className={s.formField}>
                <label htmlFor="phone">Telefon</label>
                <input id="phone" name="phone" type="tel" />
              </div>
              <div className={s.formField}>
                <label htmlFor="city">Město / lokalita</label>
                <input id="city" name="city" type="text" />
              </div>
              <div className={s.formField}>
                <label htmlFor="level">Úroveň, o kterou máte zájem</label>
                <select id="level" name="level">
                  <option>Starter</option>
                  <option>Ritual Partner</option>
                  <option>Signature Salon</option>
                  <option>Nejsem si jistá</option>
                </select>
              </div>
              <div
                className={`${s.formField} ${s.formFullWidth}`}
              >
                <label htmlFor="note">Poznámka</label>
                <textarea id="note" name="note" />
              </div>
            </div>
            <div className={s.formSubmit}>
              <button type="submit" className={s.btnPrimary}>
                Odeslat poptávku
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
