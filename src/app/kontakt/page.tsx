import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";

export const metadata: Metadata = {
  title: "Kontakt | J.OLI Origins",
  description: "Ozvěte se nám. Rádi s vámi probereme rituál i objednávku.",
};

export default function ContactPage() {
  return (
    <>
      <StickyChrome active={null} />
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Kontakt</span>
            <h1 className={s.heroTitle}>Ozvěte se nám.</h1>
            <p className={s.lead}>
              Rádi vám pomůžeme s výběrem rituálu, objednávkou i salonní
              spoluprací.
            </p>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.prose}>
            <h2>E-mail</h2>
            <p>
              <strong>kontakt@joliorigins.cz</strong>
            </p>

            <h2>Pomoc s výběrem</h2>
            <p>
              Pokud potřebujete poradit s výběrem rituálu, navštivte stránku{" "}
              <a
                href="/poradit-s-vyberem"
                style={{
                  color: "var(--botanical-olive)",
                  borderBottom: "1px solid var(--botanical-olive)",
                }}
              >
                Chci poradit
              </a>
              .
            </p>

            <h2>Pro salony</h2>
            <p>
              Máte zájem o B2B spolupráci? Navštivte stránku{" "}
              <a
                href="/salony"
                style={{
                  color: "var(--botanical-olive)",
                  borderBottom: "1px solid var(--botanical-olive)",
                }}
              >
                Salony
              </a>{" "}
              a vyplňte poptávkový formulář.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
