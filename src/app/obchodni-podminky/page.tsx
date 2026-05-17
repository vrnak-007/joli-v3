import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";

export const metadata: Metadata = {
  title: "Obchodní podmínky | J.OLI Origins",
};

export default function TermsPage() {
  return (
    <>
      <StickyChrome active={null} />
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Právní</span>
            <h1 className={s.heroTitle}>Obchodní podmínky</h1>
            <p className={s.lead}>
              Plné znění obchodních podmínek e-shopu joliorigins.cz.
            </p>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.container}>
          <div className={s.prose}>
            <h2>1. Úvodní ustanovení</h2>
            <p>
              Tyto obchodní podmínky upravují vzájemná práva a povinnosti
              vyplývající z kupní smlouvy uzavřené mezi prodávajícím J.OLI
              ORIGINS a kupujícím prostřednictvím e-shopu joliorigins.cz.
            </p>

            <h2>2. Objednávka a uzavření kupní smlouvy</h2>
            <p>
              Veškerá objednávka učiněná v e-shopu je závazná. Kupní smlouva
              vzniká okamžikem potvrzení objednávky ze strany prodávajícího.
            </p>

            <h2>3. Cena a platba</h2>
            <p>
              Všechny ceny jsou uvedeny včetně DPH. Doprava je vždy zdarma.
              Dárek k nákupu je poskytován při objednávce nad 2 500 Kč.
            </p>

            <h2>4. Odstoupení od smlouvy</h2>
            <p>
              Kupující má právo odstoupit od kupní smlouvy ve lhůtě 14 dnů od
              převzetí zboží.
            </p>

            <h2>5. Reklamace</h2>
            <p>
              Reklamace zboží řeší prodávající individuálně do 30 dnů ode dne
              uplatnění reklamace.
            </p>

            <p
              style={{
                marginTop: 40,
                fontSize: 13,
                color: "var(--color-text-subtle)",
              }}
            >
              Plné znění obchodních podmínek aktualizujeme. Kontaktní e-mail:
              kontakt@joliorigins.cz.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
