/**
 * J.OLI ORIGINS v3 — /jak-to-funguje/pouziti
 *
 * Sekce per brief 15:
 *  1. Hero
 *  2. Ranní postup
 *  3. Večerní postup
 *  4. První týden
 *  5. Nejčastější chyby
 *  6. CTA
 */

import type { Metadata } from "next";
import s from "../../styles.module.css";
import { StickyChrome, Footer } from "../../Chrome";
import { IconSun, IconMoon, IconCheck } from "../../icons";

export const metadata: Metadata = {
  title: "Jak používat | J.OLI Origins",
  description:
    "Ráno čtyři kroky, večer čtyři kroky. Začněte menším množstvím a sledujte, jak se pleť cítí.",
};

const morning = [
  "No1 — Dvoufázová mycí emulze (čištění)",
  "No2 — Bioaktivní tonikum (tonizace)",
  "No3 — Collagel hydratační sérum (hydratace)",
  "No4 denní — Vitaminové sérum + CoQ10 (ranní péče)",
  "SPF — při pobytu venku doplňte ochranný krém",
];

const evening = [
  "No1 — Dvoufázová mycí emulze (čištění)",
  "No2 — Bioaktivní tonikum (tonizace)",
  "No3 — Collagel hydratační sérum (hydratace)",
  "No4 noční — Regenerační sérum (večerní péče)",
];

const mistakes = [
  "Příliš mnoho produktu — stačí 2–3 kapky séra.",
  "Vynechání No3 — bez hydratace pleť následný krok hůře přijme.",
  "Záměna No4 denní a No4 noční.",
  "Očekávání okamžité změny — longevity vyžaduje pravidelnost.",
  "Nepoužití SPF po ranní péči při pobytu venku.",
];

export default function HowToUsePage() {
  return (
    <>
      <StickyChrome active="jak-to-funguje" />

      {/* HERO */}
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Jak používat</span>
            <h1 className={s.heroTitle}>
              Jak používat rituál ráno a večer
            </h1>
            <p className={s.lead}>
              Ráno čtyři kroky. Večer čtyři kroky. Začněte menším množstvím
              a sledujte, jak se pleť cítí.
            </p>
          </div>
        </div>
      </section>

      {/* RÁNO */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrowGold}>
                <IconSun size={14} style={{ marginRight: 6 }} /> Ranní postup
              </span>
              <h2 className={s.h2Display} style={{ marginTop: 16 }}>
                Ráno čtyři kroky.
              </h2>
              <p
                className={s.bodyCopy}
                style={{ marginTop: 16 }}
              >
                Pořadí je dané. Nemusíte nic kombinovat.
              </p>
            </div>
            <ol className={s.checkList}>
              {morning.map((m, i) => (
                <li key={m}>
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
                  <span>{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* VEČER */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrowGold}>
                <IconMoon size={14} style={{ marginRight: 6 }} /> Večerní postup
              </span>
              <h2 className={s.h2Display} style={{ marginTop: 16 }}>
                Večer čtyři kroky.
              </h2>
              <p
                className={s.bodyCopy}
                style={{ marginTop: 16 }}
              >
                Pleť očistěte, hydratujte a uzavřete výživnějším nočním krokem.
              </p>
            </div>
            <ol className={s.checkList}>
              {evening.map((m, i) => (
                <li key={m}>
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
                  <span>{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PRVNÍ TÝDEN */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrow}>První týden</span>
              <h2 className={s.h2Display} style={{ marginTop: 16 }}>
                Méně je víc.
              </h2>
            </div>
            <p className={s.bodyCopy}>
              U prémiové péče neplatí, že více produktu znamená lepší výsledek.
              První týden používejte menší množství a sledujte komfort pleti.
              Postupně dávkování upravíte podle toho, jak se pleť cítí.
            </p>
          </div>
        </div>
      </section>

      {/* CHYBY */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrowGold}>Nejčastější chyby</span>
            <h2 className={s.h2Display}>Pět drobností, na kterých to nejčastěji selže.</h2>
          </div>
          <ul
            className={s.checkList}
            style={{ maxWidth: 720, margin: "40px auto 0" }}
          >
            {mistakes.map((m) => (
              <li key={m}>
                <IconCheck size={16} /> {m}
              </li>
            ))}
          </ul>
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
                Začít Travel Setem
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
