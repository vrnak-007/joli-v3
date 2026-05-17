/**
 * J.OLI ORIGINS v3 — /produkty
 *
 * Sekce per brief 14:
 *  1. Hero (rozhodovací logika)
 *  2. Tři cesty
 *  3. Sady (Travel + Complete)
 *  4. Jednotlivé kroky rituálu (No1..No4 noční)
 *  5. Doplňky (zatím prázdné — TODO až přijde sortiment)
 *  6. Final CTA
 */

import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";
import { IconCheck, IconArrowRight } from "../icons";

export const metadata: Metadata = {
  title: "Produkty | J.OLI Origins",
  description:
    "Nevíte, co koupit? Začněte podle situace. Travel Luxe Set, Generation Perfect Complete nebo jednotlivé kroky rituálu.",
};

type ProductCard = {
  slug: string;
  no: string;
  label: string;
  short: string;
  price: string;
  img: string;
};

const individualProducts: ProductCard[] = [
  {
    slug: "no1",
    no: "No1",
    label: "Čištění",
    short: "První krok ráno i večer.",
    price: "1 990 Kč",
    img: "/v3/products/no1.jpg",
  },
  {
    slug: "no2",
    no: "No2",
    label: "Tonizace",
    short: "Po čištění, před sérem.",
    price: "1 990 Kč",
    img: "/v3/products/no2.jpg",
  },
  {
    slug: "no3",
    no: "No3",
    label: "Hydratace",
    short: "Mezikrok pro ráno i večer.",
    price: "2 490 Kč",
    img: "/v3/products/no3.jpg",
  },
  {
    slug: "no4-denni-vitaminove-serum-coq10",
    no: "No4 denní",
    label: "Ranní péče",
    short: "Vitaminové sérum + CoQ10.",
    price: "3 140 Kč",
    img: "/v3/products/no4-day.jpg",
  },
  {
    slug: "no4-nocni-regeneracni-serum",
    no: "No4 noční",
    label: "Večerní péče",
    short: "Regenerační noční sérum.",
    price: "3 140 Kč",
    img: "/v3/products/no4-night.jpg",
  },
];

export default function ProductsPage() {
  return (
    <>
      <StickyChrome active="produkty" />

      {/* ===== HERO ===== */}
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Produkty</span>
            <h1 className={s.heroTitle}>
              Nevíte, co koupit? Začněte podle situace.
            </h1>
            <p className={s.lead}>
              Značku můžete poznat menším Travel Luxe Setem, zvolit kompletní
              longevity rituál v plném balení, nebo doplnit konkrétní krok.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 3 CESTY ===== */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.choiceGrid}>
            {/* Travel — primary */}
            <article className={`${s.choiceCard} ${s.choiceCardPrimary}`}>
              <span className={s.choiceBadge}>
                Doporučujeme pro první nákup
              </span>
              <span className={s.choiceLabel}>Zkouším poprvé</span>
              <h3 className={s.choiceTitle}>Travel Luxe Set</h3>
              <p className={s.choiceCardHook}>Začněte tady.</p>
              <div className={s.choiceVisual}>
                <img
                  src="/v3/sets/travel_luxe_card_visual.jpg"
                  alt="Travel Luxe Set"
                />
              </div>
              <p className={s.choicePrice}>2 490 Kč</p>
              <p className={s.choiceDescription}>
                Celý rituál v menším balení. Pozn&aacute;te v&#367;n&#283; i
                textury bez nutnosti kupovat plnou sadu.
              </p>
              <div className={s.choiceCardCta}>
                <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                  Začít Travel Setem
                </a>
              </div>
            </article>

            {/* Complete */}
            <article className={s.choiceCard}>
              <span className={`${s.choiceBadge} ${s.choiceBadgeGold}`}>
                Úspora 3 750 Kč
              </span>
              <span className={s.choiceLabel}>Chci všechno</span>
              <h3 className={s.choiceTitle}>Generation Perfect Complete</h3>
              <div className={s.choiceVisual}>
                <img
                  src="/v3/sets/complete_set_card_visual.jpg"
                  alt="Generation Perfect Complete"
                />
              </div>
              <p className={s.choicePrice}>9 000 Kč</p>
              <p className={s.choiceDescription}>
                Plná balení všech produktů. Výhodnější než kupovat jednotlivě.
              </p>
              <div className={s.choiceCardCta}>
                <a
                  className={s.btnPrimary}
                  href="/produkty/generation-perfect-complete"
                >
                  Chci celou sadu
                </a>
              </div>
            </article>

            {/* Single step */}
            <article className={s.choiceCard}>
              <span className={s.choiceLabel}>Chci jen jeden krok</span>
              <h3 className={s.choiceTitle}>Jednotlivé produkty</h3>
              <div className={s.choiceVisual}>
                <img
                  src="/v3/products/no3.jpg"
                  alt="Jednotlivé kroky rituálu"
                />
              </div>
              <p className={s.choicePrice}>od 1 990 Kč</p>
              <p className={s.choiceDescription}>
                Vyberte konkrétní část rituálu — od čištění po noční péči.
              </p>
              <div className={s.choiceCardCta}>
                <a className={s.btnSecondary} href="#jednotlive">
                  Zobrazit produkty <IconArrowRight size={14} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== JEDNOTLIVÉ PRODUKTY ===== */}
      <section
        id="jednotlive"
        className={`${s.section} ${s.sectionBone}`}
      >
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Jednotlivé kroky rituálu</span>
            <h2 className={s.h2Display}>
              Pět produktů, dvě varianty No4.
            </h2>
            <p className={s.lead}>
              Ráno používáte denní No4, večer noční. Ostatní kroky jsou ráno
              i večer stejné.
            </p>
          </div>

          <div className={s.productGrid}>
            {individualProducts.map((p) => (
              <a
                key={p.slug}
                className={s.productCard}
                href={`/produkty/${p.slug}`}
              >
                <div className={s.productCardThumb}>
                  <img src={p.img} alt={p.label} />
                </div>
                <span className={s.productCardNo}>{p.no}</span>
                <h3 className={s.productCardLabel}>{p.label}</h3>
                <p className={s.productCardSub}>{p.short}</p>
                <div className={s.productCardFooter}>
                  <span className={s.productCardPrice}>{p.price}</span>
                  <span className={s.btnTextLink}>Detail</span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <p
              className={s.smallText}
              style={{ maxWidth: 560, margin: "0 auto 16px" }}
            >
              Denní No4 není SPF. Při pobytu venku doplňte ochranný krém s SPF.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DOPLŇKY ===== */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrowGold}>Doplňky</span>
            <h2 className={s.h2Display}>
              Doplňky až ve chvíli, kdy máte základ.
            </h2>
            <p className={s.lead}>
              Doplňkové produkty nejsou nutné pro první nákup. Přidejte je až
              tehdy, kdy víte, že vám základní rituál sedí.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className={s.finalCta}>
        <div className={s.container}>
          <div className={s.finalCtaInner}>
            <span className={s.eyebrow}>Začněte rituál</span>
            <h2 className={s.heroTitle}>Tři jednoduché cesty.</h2>
            <p className={s.lead}>
              Vyberte podle toho, kde právě jste — a začněte ještě dnes.
            </p>
            <div className={s.finalCtaCtas}>
              <a className={s.btnPrimary} href="/produkty/travel-luxe-set">
                Začít Travel Setem
              </a>
              <a
                className={`${s.btnSecondary} ${s.btnOnDark}`}
                href="/produkty/generation-perfect-complete"
              >
                Chci celou sadu
              </a>
              <a
                className={`${s.btnSecondary} ${s.btnOnDark}`}
                href="/poradit-s-vyberem"
              >
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
