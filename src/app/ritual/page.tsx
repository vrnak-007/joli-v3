import type { Metadata } from "next";
import Image from "next/image";
import s from "../styles.module.css";
import r from "./ritual.module.css";
import { StickyChrome, Footer } from "../Chrome";
import { RitualConcierge } from "../RitualConcierge";
import {
  IconArrowRight,
  IconCheck,
  IconCompass,
  IconDrop,
  IconShield,
  IconSparkle,
  IconLeaf,
  IconCycle,
  IconAroma,
  IconSun,
  IconMoon,
  IconCraft,
  IconMolecule,
  IconRitual,
  IconLayers,
  IconHands,
} from "../icons";

export const metadata: Metadata = {
  title: "Rituál dlouhověkosti pleti | J.Oli Origins",
  description:
    "Objevte Generation Perfect Ritual — pětikrokový systém péče inspirovaný skin longevity, korejským vrstvením, botanikou a kosmetickou vědou. Ranní a večerní rituál pro hydratovaně, pružně a vitálně působící pleť.",
  openGraph: {
    title: "Rituál dlouhověkosti pleti | J.Oli Origins",
    description:
      "Pětikrokový longevity rituál: jeden ucelený systém péče, který spojuje přírodu, kosmetickou vědu a smyslový prožitek.",
    images: ["/assets/joliorigins/ritual/hero.png"],
  },
};

const longevityPillars = [
  { icon: IconDrop, title: "Hydratace", text: "No3 dodává vodní fázi a pomáhá pleti působit plnější a komfortnější. Bez něj je další péče pro pleť intenzivnější, než potřebuje." },
  { icon: IconShield, title: "Kožní bariéra", text: "Jemné vrstvení v jasném pořadí snižuje potřebu neustále střídat produkty z různých značek. Pleť dostává jen to, co dává smysl." },
  { icon: IconSparkle, title: "Antioxidační péče", text: "No4 je ranní krok pro vzhled pleti vystavené každodennímu stresu prostředí. Pokud jdete ven, vždy doplňte SPF — No4 ochranu před sluncem nenahrazuje." },
  { icon: IconLeaf, title: "Výživa a pružnost", text: "No5 uzavírá večerní rituál výživnou texturou s bakuchiolem a peptidy. Cílem je, aby pleť ráno působila odpočatěji." },
  { icon: IconCycle, title: "Rytmus a pravidelnost", text: "Ráno 01 → 02 → 03 → 04, večer 01 → 02 → 03 → 05. Stejný logický postup každý den — bez přemýšlení, co s čím." },
  { icon: IconAroma, title: "Smyslový prožitek", text: "Vůně a textury jsou navržené tak, abyste se k rituálu chtěla vracet. Pravidelnost je největší účinná látka." },
];

const fiveSteps = [
  {
    num: "01",
    phase: "Čištění",
    name: "No1 Dvoufázová mycí emulze",
    text: "Odstraňuje nečistoty, make-up a městské zatížení. Připravuje pleť na další vrstvy rituálu.",
    slug: "no1-dvoufazova-myci-emulze",
    image: "/assets/joliorigins/products/no1.png",
  },
  {
    num: "02",
    phase: "Tonizace",
    name: "No2 Bioaktivní tonikum",
    text: "Vyrovnává pH pleti, dočišťuje a připravuje pleť na aktivní péči.",
    slug: "no2-bioaktivni-tonikum",
    image: "/assets/joliorigins/products/no2.png",
  },
  {
    num: "03",
    phase: "Hydratace",
    name: "No3 Collagel hydratační sérum",
    text: "Dodává intenzivní vláhu a podporuje komfort pleti.",
    slug: "no3-collagel-hydratacni-serum",
    image: "/assets/joliorigins/products/no3.png",
  },
  {
    num: "04",
    phase: "Denní péče",
    name: "No4 Denní vitaminové sérum + CoQ10",
    text: "Výživa, antioxidanty a ochrana vzhledu pleti během dne.",
    slug: "no4-denni-vitaminove-serum-coq10",
    image: "/assets/joliorigins/products/no4-day.png",
  },
  {
    num: "05",
    phase: "Noční obnova",
    name: "No5 Noční regenerační sérum",
    text: "Závěrečný večerní krok pro výživu, zklidnění a odpočatě působící pleť.",
    slug: "no5-nocni-regeneracni-serum",
    image: "/assets/joliorigins/products/no4-night.png",
  },
];

const natureCards = [
  {
    title: "Botanické extrakty",
    text: "Bylinné a ovocné extrakty, hydroláty a vzácné rostlinné oleje jako smyslový i funkční základ rituálu.",
    image: "/assets/joliorigins/ritual/extrakty.png",
  },
  {
    title: "Biotechnologické aktivní látky",
    text: "NMN, peptidy, probiotika, kyselina hyaluronová, CoQ10 a další moderní kosmetické složky.",
    image: "/assets/joliorigins/ritual/biotech.png",
  },
  {
    title: "Aromachologie rituálu",
    text: "Každý krok má vlastní smyslovou vrstvu. Vůně, textura a dotek proměňují péči v okamžik pro sebe.",
    image: "/assets/joliorigins/ritual/aroma.png",
  },
  {
    title: "Malosériová péče",
    text: "Menší šarže, čerstvost, kontrola kvality a osobní odpovědnost za každý produkt.",
    image: "/assets/joliorigins/ritual/vyroba.png",
  },
];

export default function RitualPage() {
  return (
    <div className={s.root}>
      <StickyChrome active="ritual" />

      <main className={r.page}>
        {/* ============== HERO ============== */}
        <section className={r.hero}>
          <div className={r.heroBg} aria-hidden="true" />
          <div className={`${r.container} ${r.heroInner}`}>
            <div className={r.heroBody}>
              <span className={r.heroLabel}>Generation Perfect Ritual</span>
              <h1 className={r.heroTitle}>
                Rituál,<br />který dá péči<br />
                <em>jasný řád.</em>
              </h1>
              <p className={r.heroSubclaim}>
                Ráno připravit. Večer zklidnit.<br />
                Pět produktů, dvě jednoduchá pořadí.
              </p>
              <p className={r.heroDesc}>
                Ráno pleť připravíte na den. Večer ji zklidníte a uzavřete
                výživným krokem. Žádné skládání kosmetiky metodou pokus–omyl,
                žádný kosmetický chaos — jeden promyšlený systém.
              </p>
              <div className={r.heroCtas}>
                <a
                  href="/produkty/travel-luxe-set"
                  className={r.btnPrimary}
                >
                  Vyzkoušet Travel Luxe Set <IconArrowRight size={14} />
                </a>
                <a
                  href="/produkty/generation-perfect-ritual-kompletni-sada"
                  className={r.btnSecondary}
                >
                  Koupit kompletní rituál <IconArrowRight size={14} />
                </a>
              </div>
              <a href="/produkty/travel-luxe-set" className={r.heroTextLink}>
                Nejdříve vyzkoušet Travel Luxe Set <IconArrowRight size={11} />
              </a>
            </div>
          </div>
        </section>

        {/* ============== WHY RITUAL, NOT ROUTINE ============== */}
        <section id="proc-ritual" className={r.section}>
          <div className={r.container}>
            <div className={r.whyGrid}>
              <div>
                <span className={r.sectionLabel}>Proč rituál, ne rutina</span>
                <h2 className={r.sectionTitle}>
                  Rutina je sled kroků.<br />
                  <em>Rituál je vědomý systém.</em>
                </h2>
                <p className={r.sectionBody}>
                  Běžná péče vzniká náhodně. Sérum z jedné značky, krém z druhé, tonikum
                  z doporučení. Generation Perfect Ritual vznikl opačně — nejdřív byla
                  myšlenka celku, teprve potom jednotlivé kroky.
                </p>
                <p className={r.sectionBody}>
                  Každý produkt má přesné místo. Každá textura navazuje na další. Každá
                  vůně podporuje okamžik, kdy se péče o pleť stává péčí o sebe.
                </p>
                <div className={r.whyTags}>
                  <span className={r.whyTag}><IconLayers size={16} />Řád</span>
                  <span className={r.whyTag}><IconRitual size={16} />Místo</span>
                  <span className={r.whyTag}><IconMolecule size={16} />Synergie</span>
                  <span className={r.whyTag}><IconAroma size={16} />Prožitek</span>
                </div>
              </div>
              <div className={r.whyCards}>
                <article className={r.whyCard}>
                  <Image src="/assets/joliorigins/ritual/chaos.png" alt="Kosmetický chaos" fill sizes="(max-width: 1100px) 100vw, 25vw" />
                  <div className={r.whyCardOverlay} aria-hidden="true" />
                  <div className={r.whyCardBody}>
                    <h4>Kosmetický chaos</h4>
                    <p>Náhodná kombinace, která pleť může zbytečně zatěžovat.</p>
                  </div>
                </article>
                <article className={r.whyCard}>
                  <Image src="/assets/joliorigins/ritual/koupelna.png" alt="Rituál J.Oli Origins" fill sizes="(max-width: 1100px) 100vw, 25vw" />
                  <div className={r.whyCardOverlay} aria-hidden="true" />
                  <div className={r.whyCardBody}>
                    <h4>Rituál J.Oli Origins</h4>
                    <p>Jasné pořadí, které dává péči logiku a směr.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ============== LONGEVITY ARCHITECTURE ============== */}
        <section id="longevity" className={r.section}>
          <div className={r.container}>
            <div className={r.longevityHead}>
              <span className={r.sectionLabel}>Longevity architektura pleti</span>
              <h2 className={r.sectionTitle}>
                Dlouhodobě krásně působící<br />
                pleť stojí na <em>šesti pilířích.</em>
              </h2>
              <p className={r.sectionBody}>
                Nejde o jeden zázračný produkt, ale o pravidelnou péči, která podporuje
                přirozenou krásu pleti v čase.
              </p>
            </div>
            <div className={r.pillarGrid}>
              {longevityPillars.map((p) => (
                <article key={p.title} className={r.pillarCard}>
                  <span className={r.pillarIcon}><p.icon size={24} /></span>
                  <h3 className={r.pillarTitle}>{p.title}</h3>
                  <p className={r.pillarText}>{p.text}</p>
                </article>
              ))}
            </div>
            <p className={r.longevityFootnote}>
              Longevity není slib okamžité změny. Je to přístup k péči,<br />
              který dává pleti řád, komfort a čas.
            </p>
          </div>
        </section>

        {/* ============== FIVE STEPS ============== */}
        <section id="pet-kroku" className={r.section}>
          <div className={r.container}>
            <div className={r.fiveHead}>
              <div>
                <span className={r.sectionLabel}>Pět kroků. Jeden systém.</span>
                <h2 className={r.sectionTitle}>
                  Pět kroků,<br />které na sebe<br /><em>navazují.</em>
                </h2>
              </div>
              <p className={r.sectionBody} style={{ marginBottom: 0 }}>
                Každý krok má své přesné místo. Cílem není koupit pět produktů,
                ale složit ucelený systém péče s logikou a synergií textur, vůní a
                aktivních složek.
              </p>
            </div>
            <div className={r.fiveSteps}>
              {fiveSteps.map((step) => (
                <a key={step.num} href={`/produkty/${step.slug}`} className={r.fiveStepCard}>
                  <div className={r.fiveStepImg}>
                    <Image
                      src={step.image}
                      alt={step.name}
                      fill
                      sizes="(max-width: 700px) 80vw, (max-width: 1100px) 33vw, 20vw"
                    />
                  </div>
                  <div className={r.fiveStepHeader}>
                    <span className={r.fiveStepNum}>{step.num}</span>
                    <span className={r.fiveStepPhase}>{step.phase}</span>
                  </div>
                  <div className={r.fiveStepBody}>
                    <span className={r.fiveStepName}>{step.name}</span>
                    <p className={r.fiveStepText}>{step.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============== MORNING / EVENING ============== */}
        <section id="rano-vecer" className={r.dayNight}>
          <div className={r.container}>
            <div className={r.dayNightGrid}>
              <article className={r.dayNightCard}>
                <span className={r.dayNightCardHead}><IconSun size={16} /> Ranní rituál</span>
                <span className={r.dayNightSteps}>
                  01 <span className="sep">→</span> 02 <span className="sep">→</span> 03 <span className="sep">→</span> 04
                </span>
                <h3 className={r.dayNightCardTitle}>Probuzení pleti a komfort na celý den</h3>
                <p className={r.dayNightText}>
                  Probuzení pleti, hydratace a příprava na den. Cílem je čistý základ,
                  komfort a svěží vzhled — bez tíhy večerní péče.
                </p>
              </article>

              <div className={r.dayNightCenter}>
                <Image src="/assets/joliorigins/ritual/ranovecer.png" alt="Ranní i večerní rituál" width={440} height={440} />
              </div>

              <article className={r.dayNightCard}>
                <span className={r.dayNightCardHead}><IconMoon size={16} /> Večerní rituál</span>
                <span className={r.dayNightSteps}>
                  01 <span className="sep">→</span> 02 <span className="sep">→</span> 03 <span className="sep">→</span> 05
                </span>
                <h3 className={r.dayNightCardTitle}>Zklidnění a uzavření péče výživným krokem</h3>
                <p className={r.dayNightText}>
                  Zpomalení denního tempa, očista, zklidnění, hydratace a uzavření péče
                  výživným krokem pro odpočinek pleti přes noc.
                </p>
              </article>
            </div>
            <div className={r.dayNightFooter}>
              <a href="/ritual/pouziti" className={r.btnSecondary}>
                Zobrazit detailní použití <IconArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ============== NATURE × SCIENCE ============== */}
        <section id="priroda-veda" className={r.section}>
          <div className={r.container}>
            <span className={r.sectionLabel}>Příroda × kosmetická věda</span>
            <h2 className={r.sectionTitle}>
              Botanika, biotechnologie<br />
              a <em>smyslová péče</em> v jednom systému.
            </h2>
            <div className={r.natureGrid}>
              {natureCards.map((card) => (
                <article key={card.title} className={r.natureCard}>
                  <div className={r.natureImg}>
                    <Image src={card.image} alt={card.title} fill sizes="(max-width: 1100px) 50vw, 25vw" />
                  </div>
                  <div className={r.natureBody}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============== COMPLETE RITUAL + PRICE ============== */}
        <section id="kompletni-ritual" className={r.section}>
          <div className={r.container}>
            <div className={r.completeGrid}>
              <div className={r.completeLeft}>
                <div className={r.completeLeftBody}>
                  <span className={r.sectionLabel}>Proč koupit celý rituál</span>
                  <h2>Největší smysl dává rituál jako <em>celek.</em></h2>
                  <p>
                    Každý produkt můžete koupit samostatně. Generation Perfect ale byl
                    navržen jako integrovaný systém. Pokud použijete celý rituál,
                    získáte logiku, pořadí a synergii, kvůli které kolekce vznikla.
                  </p>
                  <ul className={r.completeList}>
                    <li><IconCheck size={14} /> Méně rozhodování</li>
                    <li><IconCheck size={14} /> Jasné pořadí ráno i večer</li>
                    <li><IconCheck size={14} /> Synergie textur a aktivních látek</li>
                    <li><IconCheck size={14} /> Výhodnější první nákup</li>
                    <li><IconCheck size={14} /> Prémiové balení, ideální jako dárek</li>
                  </ul>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href="/produkty/generation-perfect-ritual-kompletni-sada" className={r.btnPrimary}>
                      Koupit kompletní rituál <IconArrowRight size={14} />
                    </a>
                    <a href="/produkty/travel-luxe-set" className={r.heroTextLink}>
                      Vyzkoušet Travel Luxe Set <IconArrowRight size={11} />
                    </a>
                  </div>
                </div>
                <div className={r.completeImage}>
                  <Image src="/assets/joliorigins/ritual/box.png" alt="Kompletní sada Generation Perfect Ritual" width={600} height={800} />
                </div>
              </div>

              <div className={r.priceCard}>
                <div className={r.priceImg}>
                  <Image src="/assets/joliorigins/ritual/cena.png" alt="Pleť, která působí svěže a vitálně" width={700} height={900} />
                </div>
                <div className={r.priceBody}>
                  <span className={r.sectionLabel}>Cena za rituál</span>
                  <h2>Cena, která <em>dává smysl.</em></h2>
                  <p style={{ color: "var(--color-text-muted-light)", fontSize: 12.5, lineHeight: 1.55, margin: "0 0 10px" }}>
                    Nejde jen o pět produktů, ale o kompletní ranní a večerní péči,
                    která nahrazuje náhodné skládání kosmetiky.
                  </p>
                  <ul className={r.priceArgs}>
                    <li><IconCheck size={14} /> Kompletní systém pro ráno i večer</li>
                    <li><IconCheck size={14} /> Malé šarže a prémiové složky</li>
                    <li><IconCheck size={14} /> Osobní přístup a doporučení</li>
                  </ul>
                  <div className={r.priceBox}>
                    <span className={r.priceLabel}>cca</span>
                    <div className={r.priceValue}>98 Kč / den</div>
                    <span className={r.priceSmall}>Kompletní rituál při pravidelném používání*</span>
                    <p className={r.priceDisclaimer}>
                      * Při přibližné výdrži sady 92 dní. Skutečná výdrž se může lišit
                      podle způsobu používání.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== FIRST-TIME + SELF-CARE ============== */}
        <section id="prvni-krok" className={r.section}>
          <div className={r.container}>
            <div className={r.splitGrid}>
              {/* First-time customer — woman photo as background, text on left */}
              <article className={r.splitCard}>
                <div className={r.splitImage}>
                  <Image
                    src="/assets/joliorigins/ritual/kdezacit.png"
                    alt="Žena s No2 — smyslový prožitek"
                    fill
                    sizes="(max-width: 1100px) 100vw, 50vw"
                  />
                </div>
                <div className={r.splitCardBody}>
                  <span className={r.sectionLabel}>Když značku zkoušíte poprvé</span>
                  <h2>Začněte tak, jak vám to dává největší <em>smysl.</em></h2>
                  <p>
                    Nemusíte začít nejdražší variantou. Pokud si nejste jistá, začněte
                    Travel Luxe Setem nebo osobním doporučením. Cílem není prodat za
                    každou cenu, ale pomoci vám najít péči, kterou budete chtít skutečně
                    používat.
                  </p>
                  <ul className={r.splitMiniList}>
                    <li>
                      <span className={r.splitMiniIcon}>
                        <IconLayers size={20} />
                      </span>
                      <span>Chci celý systém — kompletní sada Generation Perfect Ritual.</span>
                    </li>
                    <li>
                      <span className={r.splitMiniIcon}>
                        <IconSparkle size={20} />
                      </span>
                      <span>Chci nejdřív poznat textury a vůně — Travel Luxe Set.</span>
                    </li>
                    <li>
                      <span className={r.splitMiniIcon}>
                        <IconCompass size={20} />
                      </span>
                      <span>Chci se poradit — Ritual Concierge.</span>
                    </li>
                  </ul>
                  <a href="#ritual-concierge" className={r.btnSecondary}>
                    Najít svůj vstup do rituálu <IconArrowRight size={14} />
                  </a>
                </div>
              </article>

              {/* Self-care moment — products photo as background, text on left */}
              <article className={r.splitCard}>
                <div className={r.splitImage}>
                  <Image
                    src="/assets/joliorigins/hero/hero-set.png"
                    alt="Pět produktů rituálu — smyslový prožitek"
                    fill
                    sizes="(max-width: 1100px) 100vw, 50vw"
                  />
                </div>
                <div className={r.splitCardBody}>
                  <span className={r.sectionLabel}>Chvilka pro sebe</span>
                  <h2>Rituál není jen péče o pleť. Je to návrat k <em>sobě.</em></h2>
                  <p>
                    Ráno vás rituál připraví na den. Večer vás vrátí zpět k sobě. Několik
                    minut, kdy zpomalíte, dotknete se vlastní pleti a místo dalšího úkolu
                    si dovolíte péči.
                  </p>
                  <div className={r.splitMiniRow}>
                    <div>
                      <span className={r.splitMiniIcon}>
                        <IconAroma size={20} />
                      </span>
                      <span className={r.miniLabel}>Vůně</span>
                      <span className={r.miniText}>které připomínají rituál</span>
                    </div>
                    <div>
                      <span className={r.splitMiniIcon}>
                        <IconLayers size={20} />
                      </span>
                      <span className={r.miniLabel}>Textura</span>
                      <span className={r.miniText}>která tvoří zážitek</span>
                    </div>
                    <div>
                      <span className={r.splitMiniIcon}>
                        <IconHands size={20} />
                      </span>
                      <span className={r.miniLabel}>Dotyk</span>
                      <span className={r.miniText}>který propojuje tělo a mysl</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============== RITUAL CONCIERGE ============== */}
        <section id="ritual-concierge" className={r.section}>
          <div className={r.container}>
            <div className={r.conciergeWrap}>
              <div>
                <span className={r.sectionLabel}>Ritual Concierge</span>
                <h2 className={r.sectionTitle}>
                  Najděte svůj<br />vstup do <em>rituálu.</em>
                </h2>
                <p className={r.sectionBody}>
                  Nejste si jistá, zda začít kompletní sadou, Travel Luxe Setem nebo
                  osobním doporučením? Odpovězte na několik krátkých otázek a průvodce
                  vám doporučí nejvhodnější cestu.
                </p>
                <a href="#concierge" className={r.btnPrimary}>
                  <IconCompass size={14} /> Spustit průvodce rituálem <IconArrowRight size={14} />
                </a>
              </div>
              <div className={r.conciergeImage}>
                <Image src="/assets/joliorigins/ritual/concierge.png" alt="J.Oli Ritual Concierge na mobilu" width={500} height={900} />
              </div>
            </div>
          </div>
        </section>

        {/* ============== FINAL CTA ============== */}
        <section className={r.section} style={{ borderTop: "none", paddingTop: 0 }}>
          <div className={r.container}>
            <div className={r.finalCta}>
              <div className={r.finalCtaBody}>
                <span className={r.sectionLabel}>Váš rituál. Váš okamžik.</span>
                <h2>Začněte rituál, ke kterému se budete chtít <em>vracet.</em></h2>
                <p>
                  Pět kroků. Každé ráno, každý večer, pocit komfortu a vědomá péče.
                  Objevte Generation Perfect Ritual jako systém, který dává pleti řád
                  a vám chvíli pro sebe.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="/produkty/generation-perfect-ritual-kompletni-sada" className={r.btnPrimary}>
                    Koupit kompletní rituál <IconArrowRight size={14} />
                  </a>
                  <a href="/produkty/travel-luxe-set" className={r.btnSecondary}>
                    Vyzkoušet Travel Luxe Set <IconArrowRight size={14} />
                  </a>
                </div>
              </div>
              <div className={r.finalCtaImage}>
                <Image
                  src="/assets/joliorigins/ritual/kytka2.png"
                  alt="Sušená květina v luxusním dark stylu"
                  width={1618}
                  height={972}
                  style={{ objectPosition: "right center" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RitualConcierge />
    </div>
  );
}
