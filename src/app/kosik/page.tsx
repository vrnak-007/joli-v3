/**
 * J.OLI ORIGINS v3 — /kosik (empty state)
 * Plný cart + checkout flow přijde po napojení backendu.
 */

import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";
import { IconTruck, IconGift, IconLock, IconCompass } from "../icons";

export const metadata: Metadata = {
  title: "Košík | J.OLI Origins",
  description: "Váš košík J.OLI Origins.",
};

const benefits = [
  { Icon: IconTruck, text: "Doprava zdarma vždy" },
  { Icon: IconGift, text: "Dárek od 2 500 Kč" },
  { Icon: IconLock, text: "Bezpečná platba" },
  { Icon: IconCompass, text: "Poradíme s výběrem" },
];

export default function CartPage() {
  return (
    <>
      <StickyChrome active={null} />

      <section
        className={s.sectionTight}
        style={{ background: "var(--warm-ivory)" }}
      >
        <div className={s.container}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              justifyContent: "center",
            }}
          >
            {benefits.map((b) => (
              <span key={b.text} className={s.heroBenefit}>
                <b.Icon size={16} /> {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Košík</span>
            <h1 className={s.heroTitle}>Košík je prozatím prázdný.</h1>
            <p className={s.lead}>
              Pokud J.OLI zkoušíte poprvé, doporučujeme začít Travel Setem.
              Pokud chcete celý rituál v plném balení, zvolte Complete.
            </p>
            <div className={s.heroLineCtas}>
              <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
