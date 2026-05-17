/**
 * J.OLI ORIGINS v3 — /pribeh
 * Sekce per brief 17:
 *  1. Hero
 *  2. Zakladatelka
 *  3. Proč vznikl rituál
 *  4. Longevity jako životní přístup
 *  5. Hodnoty
 *  6. CTA
 */

import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";

export const metadata: Metadata = {
  title: "Příběh | J.OLI Origins",
  description:
    "Z osobní potřeby vznikla péče, která má řád. Za J.OLI ORIGINS stojí Jitka Vrňáková.",
};

const values = [
  { title: "Řád místo chaosu", text: "Místo katalogu produktů — rituál se začátkem a koncem." },
  { title: "Botanika a věda", text: "Rostlinné výtažky a aktivní látky, které mají v receptuře důvod." },
  { title: "Malé šarže", text: "Kontrola nad kvalitou a čerstvostí, ne anonymní výroba." },
  { title: "Smyslovost", text: "Textura, vůně a pořadí použití jsou součástí celku." },
  { title: "Osobní přístup", text: "Pomůžeme s výběrem, pokud si nejste jistá, kde začít." },
  { title: "Dlouhodobý přístup", text: "Pravidelnost místo rychlých slibů a trendy hero produktů." },
];

export default function StoryPage() {
  return (
    <>
      <StickyChrome active="pribeh" />

      {/* HERO */}
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Příběh značky</span>
            <h1 className={s.heroTitle}>
              Z osobní potřeby vznikla péče, která má řád.
            </h1>
            <p className={s.lead}>
              J.OLI ORIGINS vznikla z potřeby vytvořit péči, která bude jemná,
              smyslová a přehledná. Místo nekonečného katalogu vznikl rituál,
              který má jasné ranní a večerní pořadí.
            </p>
          </div>
        </div>
      </section>

      {/* ZAKLADATELKA */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.founderGrid}>
            <div className={s.founderVisual}>
              <img
                src="/v3/hero/founder.png"
                alt="Jitka Vrňáková — zakladatelka J.OLI Origins"
              />
            </div>
            <div className={s.founderCopy}>
              <span className={s.eyebrowGold}>Zakladatelka</span>
              <h2 className={s.h2Display}>Jitka Vrňáková</h2>
              <p className={s.bodyCopy}>
                Hledání účinné, ale kultivované péče vedlo k vývoji vlastních
                receptur a k myšlence vytvořit systém, který ženám ušetří
                každodenní rozhodování.
              </p>
              <blockquote className={s.founderQuote}>
                <span>
                  Chtěla jsem péči, která dává smysl ráno i večer. Bez chaosu,
                  bez slibů, ale s řádem.
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* LONGEVITY JAKO ŽIVOTNÍ PŘÍSTUP */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrowGold}>Longevity jako životní přístup</span>
              <h2 className={s.h2Display} style={{ marginTop: 16 }}>
                Péče, která není o spěchu.
              </h2>
            </div>
            <p className={s.bodyCopy}>
              Longevity pro nás není jen téma pleti. Je to způsob, jak se
              vracet k pravidelnosti, klidu a vědomé péči o sebe. Každý den
              nemusí být dokonalý, ale může mít svůj malý rituál.
            </p>
          </div>
        </div>
      </section>

      {/* HODNOTY */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Hodnoty</span>
            <h2 className={s.h2Display}>Šest principů, kterých se držíme.</h2>
          </div>
          <div className={s.pillarsGrid}>
            {values.map((v) => (
              <div key={v.title} className={s.pillarCard}>
                <h3 className={s.pillarTitle}>{v.title}</h3>
                <p className={s.pillarText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={s.finalCta}>
        <div className={s.container}>
          <div className={s.finalCtaInner}>
            <span className={s.eyebrow}>Pojďte do rituálu</span>
            <h2 className={s.heroTitle}>Začněte jednoduše.</h2>
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
