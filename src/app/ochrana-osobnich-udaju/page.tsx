import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | J.OLI Origins",
};

export default function PrivacyPage() {
  return (
    <>
      <StickyChrome active={null} />
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Právní</span>
            <h1 className={s.heroTitle}>Ochrana osobních údajů</h1>
            <p className={s.lead}>
              Jak nakládáme s vašimi osobními údaji a jaká jsou vaše práva.
            </p>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.container}>
          <div className={s.prose}>
            <h2>Správce osobních údajů</h2>
            <p>
              Správcem osobních údajů je J.OLI ORIGINS. Kontaktní e-mail:{" "}
              <strong>kontakt@joliorigins.cz</strong>.
            </p>

            <h2>Jaké údaje zpracováváme</h2>
            <ul>
              <li>Identifikační a kontaktní údaje (jméno, e-mail, adresa)</li>
              <li>Údaje o objednávkách a platbách</li>
              <li>Údaje z formulářů osobního doporučení (anonymizujeme)</li>
            </ul>

            <h2>Účel zpracování</h2>
            <ul>
              <li>Vyřízení objednávky a komunikace o ní</li>
              <li>Plnění zákonných povinností</li>
              <li>Marketingová komunikace (pouze se souhlasem)</li>
            </ul>

            <h2>Vaše práva</h2>
            <p>
              Máte právo na přístup, opravu, výmaz, omezení zpracování,
              přenositelnost údajů a právo vznést námitku. Kontaktujte nás na
              uvedeném e-mailu.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
