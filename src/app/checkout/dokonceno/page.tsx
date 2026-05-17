import type { Metadata } from "next";
import s from "../../styles.module.css";
import c from "../checkout.module.css";
import { StickyChrome, Footer } from "../../Chrome";
import { IconCheck, IconArrowRight } from "../../icons";

export const metadata: Metadata = {
  title: "Děkujeme za objednávku | J.Oli Origins",
  description: "Vaše objednávka Generation Perfect Ritual byla úspěšně dokončena.",
};

export default function OrderSuccessPage() {
  return (
    <div className={s.root}>
      <StickyChrome active="produkty" />

      <main className={c.shell}>
        <div className={s.container}>
          <div
            className={c.panel}
            style={{
              maxWidth: 720,
              margin: "40px auto",
              textAlign: "center",
              padding: "56px 36px",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                border: "1px solid var(--color-gold)",
                background: "rgba(211,173,120,0.08)",
                color: "var(--color-gold-light)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
              aria-hidden="true"
            >
              <IconCheck size={28} />
            </div>
            <h1
              className={c.pageTitle}
              style={{ fontSize: "clamp(28px, 3vw, 44px)", marginBottom: 16 }}
            >
              Děkujeme za objednávku
            </h1>
            <p
              style={{
                color: "var(--color-text-muted-light)",
                fontSize: 14.5,
                lineHeight: 1.7,
                margin: "0 0 28px",
                maxWidth: 520,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Váš Generation Perfect Ritual začíná. Potvrzení objednávky a podrobnosti
              dopravy jsme vám zaslali na e-mail. Po doručení vás provedeme prvním
              večerním použitím a pošleme návod k vrstvení.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/ritual"
                className={c.bigCta}
                style={{ width: "auto", display: "inline-flex" }}
              >
                Zobrazit návod na rituál <IconArrowRight size={14} />
              </a>
              <a
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "18px 24px",
                  background: "transparent",
                  border: "1px solid var(--color-gold)",
                  color: "var(--color-cream)",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: 12,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Pokračovat na homepage <IconArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
