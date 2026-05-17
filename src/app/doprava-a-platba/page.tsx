import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";

export const metadata: Metadata = {
  title: "Doprava a platba | J.OLI Origins",
  description: "Doprava zdarma vždy. Dárek od 2 500 Kč.",
};

export default function ShippingPage() {
  return (
    <>
      <StickyChrome active={null} />
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Servis</span>
            <h1 className={s.heroTitle}>Doprava a platba</h1>
            <p className={s.lead}>
              Doprava zdarma vždy. Dárek k nákupu od 2 500 Kč.
            </p>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.container}>
          <div className={s.prose}>
            <h2>Doprava</h2>
            <p>
              Veškeré objednávky doručujeme <strong>zdarma</strong>, bez ohledu
              na výši nákupu.
            </p>
            <p>
              Standardní doručení do 2–3 pracovních dní po expedici. Objednávky
              přijaté do 13:00 v pracovní den odesíláme týž den.
            </p>

            <h2>Platba</h2>
            <ul>
              <li>Platební karta (Visa, Mastercard)</li>
              <li>Apple Pay / Google Pay</li>
              <li>Bankovní převod</li>
              <li>Dobírka při doručení</li>
            </ul>

            <h2>Dárek k nákupu</h2>
            <p>
              Při objednávce nad <strong>2 500 Kč</strong> přidáváme do balíčku
              dárek. Dárek se automaticky zobrazí v košíku.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
