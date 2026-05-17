import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";

export const metadata: Metadata = {
  title: "Vrácení a reklamace | J.OLI Origins",
  description: "Spokojenost je pro nás důležitá. Vrácení do 14 dnů od převzetí.",
};

export default function ReturnsPage() {
  return (
    <>
      <StickyChrome active={null} />
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Servis</span>
            <h1 className={s.heroTitle}>Vrácení a reklamace</h1>
            <p className={s.lead}>
              Spokojenost je pro nás důležitá. Pokud cokoliv nesedí, ozvěte se.
            </p>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.container}>
          <div className={s.prose}>
            <h2>Vrácení do 14 dnů</h2>
            <p>
              Zboží zakoupené online můžete vrátit do 14 dnů od převzetí bez
              udání důvodu. Vrácený produkt by měl být nepoužitý a v původním
              obalu.
            </p>

            <h2>Reklamace</h2>
            <p>
              Reklamaci řešíme individuálně do 30 dnů. Pokud se s produktem
              objeví neshoda, napište nám na{" "}
              <strong>kontakt@joliorigins.cz</strong>.
            </p>

            <h2>Postup</h2>
            <ul>
              <li>Vyplňte formulář na stránce Kontakt nebo nám napište e-mail.</li>
              <li>Po potvrzení vám zašleme adresu pro vrácení.</li>
              <li>Po přijetí zásilky vracíme částku do 14 dnů.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
