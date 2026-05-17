import type { Metadata } from "next";
import s from "../styles.module.css";
import p from "./products.module.css";
import { StickyChrome, Footer } from "../Chrome";
import { ListingClient } from "./ListingClient";
import { RitualConcierge } from "../RitualConcierge";
import { IconArrowRight } from "../icons";

export const metadata: Metadata = {
  title: "Produkty | J.Oli Origins",
  description:
    "Generation Perfect Ritual — pětikrokový longevity rituál J.Oli Origins. Jednotlivé produkty, kompletní sada a Travel Luxe Set.",
};

export default function ProductListingPage() {
  return (
    <div className={s.root}>
      <StickyChrome active="produkty" />

      {/* Breadcrumb */}
      <nav className={p.breadcrumb} aria-label="Drobečková navigace">
        <div className={`${s.container} ${p.breadcrumbInner}`}>
          <a href="/">Domů</a>
          <span className={p.breadcrumbSep}>/</span>
          <span className={p.breadcrumbCurrent}>Produkty</span>
        </div>
      </nav>

      {/* Listing hero */}
      <section className={p.listingHero}>
        <div className={`${s.container} ${p.listingHeroInner}`}>
          <div className={p.listingHeroText}>
            <span className={`${s.uppercase} ${s.gold}`}>Generation Perfect</span>
            <h1
              className={s.serif}
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 1.05,
                color: "var(--color-cream)",
                margin: "16px 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              Produkty, které <em style={{ color: "var(--color-gold-light)", fontStyle: "italic" }}>mají smysl</em>
            </h1>
            <p style={{ color: "var(--color-text-muted-light)", fontSize: 15.5, lineHeight: 1.7, margin: "0 0 28px" }}>
              Každý produkt je navržen tak, aby pracoval v synergii s vaší pletí
              i s ostatními kroky rituálu. Žádné náhodné kombinace — jeden ucelený
              systém péče inspirovaný longevity přístupem.
            </p>
            <a href="#ritual-listing" className={s.btnSecondary}>
              Zobrazit rituál <span className={s.arrow}><IconArrowRight size={14} /></span>
            </a>
          </div>
        </div>
      </section>

      <div id="ritual-listing" />
      <ListingClient />

      <Footer />
      <RitualConcierge />
    </div>
  );
}
