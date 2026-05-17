import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";

export const metadata: Metadata = {
  title: "Cookies | J.OLI Origins",
};

export default function CookiesPage() {
  return (
    <>
      <StickyChrome active={null} />
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Právní</span>
            <h1 className={s.heroTitle}>Cookies</h1>
            <p className={s.lead}>
              Webové stránky používají cookies pro správnou funkci a měření
              návštěvnosti.
            </p>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.container}>
          <div className={s.prose}>
            <h2>Co jsou cookies</h2>
            <p>
              Cookies jsou malé textové soubory ukládané do prohlížeče. Pomáhají
              webové stránce fungovat a poskytují základní statistiky.
            </p>

            <h2>Jaké cookies používáme</h2>
            <ul>
              <li>
                <strong>Nezbytné</strong> — funkce košíku, přihlášení, jazyk.
              </li>
              <li>
                <strong>Analytické</strong> — anonymní měření návštěvnosti.
              </li>
              <li>
                <strong>Marketingové</strong> — pouze se souhlasem.
              </li>
            </ul>

            <h2>Změna nastavení</h2>
            <p>
              Souhlas s cookies můžete kdykoliv změnit ve svém prohlížeči nebo
              prostřednictvím cookie lišty na webu.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
