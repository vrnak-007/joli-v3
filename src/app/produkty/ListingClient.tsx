"use client";

import * as React from "react";
import Image from "next/image";
import s from "../styles.module.css";
import p from "./products.module.css";
import {
  IconArrowRight,
  IconCraft,
  IconLeaf,
  IconMolecule,
  IconCompass,
  IconCheck,
} from "../icons";
import {
  getRitualProducts,
  getSets,
  getSupplementary,
  getAccessories,
} from "../data/products";

type TabId = "vse" | "sady" | "ritual" | "doplnky" | "accessories";

const TABS: { id: TabId; label: string }[] = [
  { id: "vse", label: "Vše" },
  { id: "sady", label: "Sady" },
  { id: "ritual", label: "Rituál — 5 kroků" },
  { id: "doplnky", label: "Doplňková péče" },
  { id: "accessories", label: "Accessories" },
];

export function ListingClient() {
  const [tab, setTab] = React.useState<TabId>("vse");
  const ritualProducts = getRitualProducts();
  const sets = getSets();
  const supplementary = getSupplementary();
  const accessories = getAccessories();
  const complete = sets.find((x) => x.type === "set");
  const travel = sets.find((x) => x.type === "travel");

  const showSets = tab === "vse" || tab === "sady";
  const showRitual = tab === "vse" || tab === "ritual";
  const showSupplementary = tab === "vse" || tab === "doplnky";
  const showAccessories = tab === "vse" || tab === "accessories";

  return (
    <>
      <div className={p.tabsBar}>
        <div className={`${s.container} ${p.tabsInner}`}>
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`${p.tabBtn} ${tab === t.id ? p.active : ""}`}
              onClick={() => setTab(t.id)}
              type="button"
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {showSets && complete && travel && (
        <section className={`${p.section} ${p.sectionDark}`}>
          <div className={s.container}>
            <div className={p.sectionHeader}>
              <span className={`${s.uppercase} ${s.gold}`}>Sady</span>
              <h2>Začněte <em>celým rituálem</em></h2>
              <p>
                Sady vám dají kompletní přehled rituálu i synergii pěti kroků
                v jednom balení.
              </p>
            </div>

            <div className={p.setsGrid}>
              {/* Complete set */}
              <a href={`/produkty/${complete.slug}`} className={p.setCard}>
                <div className={p.setCardImg}>
                  <span className={p.setCardBadge}>Bestseller</span>
                  <Image src={complete.heroImage} alt={complete.name} width={700} height={500} />
                </div>
                <div className={p.setCardBody}>
                  <span className={p.setCardLabel}>Kompletní rituál — velká sada</span>
                  <h3 className={p.setCardTitle}>{complete.name}</h3>
                  <p className={p.setCardText}>
                    Pět vzájemně propojených produktů v plném balení. Pro viditelné
                    a dlouhodobé výsledky.
                  </p>
                  <div className={p.setCardFooter}>
                    <span className={p.setCardPrice}>{complete.priceFormatted}</span>
                    <div className={p.setCardCtas}>
                      <button className={s.btnPrimary} type="button" onClick={(e) => e.preventDefault()}>
                        Přidat do košíku <span className={s.arrow}><IconArrowRight size={14} /></span>
                      </button>
                      <span className={s.linkArrow}>
                        Detail <span className={s.arrow}><IconArrowRight size={12} /></span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Travel Luxe set */}
              <a href={`/produkty/${travel.slug}`} className={p.setCard}>
                <div className={p.setCardImg}>
                  <span className={p.setCardBadge}>Ideální první nákup</span>
                  <Image src={travel.heroImage} alt={travel.name} width={700} height={500} />
                </div>
                <div className={p.setCardBody}>
                  <span className={p.setCardLabel}>Travel Luxe — malá sada</span>
                  <h3 className={p.setCardTitle}>{travel.name}</h3>
                  <p className={p.setCardText}>
                    Pět kroků v cestovním balení. Ideální pro začátek nebo na cesty.
                  </p>
                  <div className={p.setCardFooter}>
                    <span className={p.setCardPrice}>{travel.priceFormatted}</span>
                    <div className={p.setCardCtas}>
                      <button className={s.btnPrimary} type="button" onClick={(e) => e.preventDefault()}>
                        Přidat do košíku <span className={s.arrow}><IconArrowRight size={14} /></span>
                      </button>
                      <span className={s.linkArrow}>
                        Detail <span className={s.arrow}><IconArrowRight size={12} /></span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Trust column */}
              <aside className={p.setsTrust}>
                <h3>Proč právě sada</h3>
                <div className={p.setsTrustItem}>
                  <IconCraft size={22} />
                  <div>
                    <h4>Malé šarže</h4>
                    <p>Ručně vyráběno v omezeném množství s důrazem na čerstvost.</p>
                  </div>
                </div>
                <div className={p.setsTrustItem}>
                  <IconMolecule size={22} />
                  <div>
                    <h4>Příroda × věda</h4>
                    <p>Vlastní botanické extrakty a moderní kosmetická věda.</p>
                  </div>
                </div>
                <div className={p.setsTrustItem}>
                  <IconLeaf size={22} />
                  <div>
                    <h4>Čerstvost</h4>
                    <p>Krátké výrobní cykly. Sada vystačí přibližně 92 dní.</p>
                  </div>
                </div>
                <div className={p.setsTrustItem}>
                  <IconCheck size={22} />
                  <div>
                    <h4>Udržitelnost</h4>
                    <p>Prémiové obaly, šetrný k pleti i k prostředí.</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      {showRitual && (
        <section className={`${p.section} ${p.sectionDarker}`}>
          <div className={s.container}>
            <div className={p.sectionHeader}>
              <span className={`${s.uppercase} ${s.gold}`}>Rituál — 5 kroků</span>
              <h2>Jednotlivé <em>kroky rituálu</em></h2>
              <p>
                Každý produkt můžete koupit samostatně. Nejlépe ale fungují
                v přesném pořadí jako celek rituálu.
              </p>
            </div>

            <div className={p.ritualListingGrid}>
              {ritualProducts.map((prod) => (
                <a key={prod.id} href={`/produkty/${prod.slug}`} className={p.productCard}>
                  <div className={p.productCardImg}>
                    <Image
                      src={prod.heroImage}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 20vw"
                    />
                  </div>
                  <div className={p.productCardTop}>
                    <span className={p.productCardStep}>{prod.ritualStep}</span>
                    {prod.badge && <span className={p.productCardBadge}>{prod.badge}</span>}
                  </div>
                  <div className={p.productCardBody}>
                    <span className={p.productCardPhase}>{prod.phase}</span>
                    <h3 className={p.productCardName}>{prod.name}</h3>
                    <p className={p.productCardDesc}>{prod.heroClaim}</p>
                    <span className={p.productCardPrice}>{prod.priceFormatted}</span>
                    <button
                      className={p.productCardCta}
                      type="button"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    >
                      Přidat do košíku
                    </button>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {showSupplementary && (
        <section className={`${p.section} ${p.sectionDark}`}>
          <div className={s.container}>
            <div className={p.sectionHeader}>
              <span className={`${s.uppercase} ${s.gold}`}>Doplňková péče</span>
              <h2>Volitelné <em>doplňky rituálu</em></h2>
              <p>
                Produkty, které rituál nenahrazují, ale rozšiřují. Pro chvíle,
                kdy pleť potřebuje intenzivnější péči nebo specifický detail.
              </p>
            </div>

            <div className={p.supplementaryGrid}>
              {supplementary.map((prod) => (
                <a key={prod.id} href={`/produkty/${prod.slug}`} className={p.suppCard}>
                  <div className={p.suppCardImg}>
                    <Image src={prod.cardImage ?? prod.heroImage} alt={prod.name} fill sizes="(max-width: 1100px) 100vw, 33vw" />
                    {prod.badge && <span className={p.suppCardBadge}>{prod.badge}</span>}
                  </div>
                  <div className={p.suppCardBody}>
                    <span className={p.suppCardPhase}>{prod.phase}</span>
                    <h3 className={p.suppCardName}>{prod.name}</h3>
                    <p className={p.suppCardDesc}>{prod.shortDescription}</p>
                    <div className={p.suppCardFooter}>
                      <span className={p.suppCardPrice}>{prod.priceFormatted}</span>
                      <button
                        type="button"
                        className={p.suppCardCta}
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      >
                        Přidat do košíku
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {showAccessories && (
        <section className={`${p.section} ${p.sectionDarker}`}>
          <div className={s.container}>
            <div className={p.sectionHeader}>
              <span className={`${s.uppercase} ${s.gold}`}>Accessories</span>
              <h2>Rituální <em>doplňky a pomůcky</em></h2>
              <p>
                Nástroje, které z rutiny dělají rituál. Smyslové detaily, které
                zpříjemňují každodenní péči i cestování.
              </p>
            </div>

            <div className={p.accessoriesGrid}>
              {accessories.map((prod) => (
                <a key={prod.id} href={`/produkty/${prod.slug}`} className={p.accessoryCard}>
                  <div className={p.accessoryCardImg}>
                    <Image src={prod.cardImage ?? prod.heroImage} alt={prod.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 20vw" />
                    {prod.badge && <span className={p.accessoryCardBadge}>{prod.badge}</span>}
                  </div>
                  <div className={p.accessoryCardBody}>
                    <h3 className={p.accessoryCardName}>{prod.name}</h3>
                    <div className={p.accessoryCardFooter}>
                      <span className={p.accessoryCardPrice}>{prod.priceFormatted}</span>
                      <button
                        type="button"
                        className={p.accessoryCardCta}
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        aria-label={`Přidat ${prod.name} do košíku`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={p.listingBottomCta}>
        <div className={s.container}>
          <span className={`${s.uppercase} ${s.gold}`}>Osobní doporučení</span>
          <h2 style={{ marginTop: 14 }}>Nevíte, kde začít?</h2>
          <p>
            Pomůžeme vám vybrat ideální péči podle potřeb vaší pleti.
            Náš Ritual Concierge vás provede výběrem v pěti krátkých krocích.
          </p>
          <a href="/#concierge" className={s.btnPrimary}>
            <IconCompass size={14} /> Najít svůj rituál <span className={s.arrow}><IconArrowRight size={14} /></span>
          </a>
        </div>
      </section>
    </>
  );
}
