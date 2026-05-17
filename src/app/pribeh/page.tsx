import type { Metadata } from "next";
import Image from "next/image";
import s from "../styles.module.css";
import p from "./pribeh.module.css";
import { StickyChrome, Footer } from "../Chrome";
import {
  IconArrowRight,
  IconDrop,
  IconShield,
  IconSun,
  IconLeaf,
  IconCycle,
  IconAroma,
  IconCheck,
  IconClose,
} from "../icons";
import {
  longevityPillars,
  ingredientCards,
  promises,
  nonPromises,
  startPaths,
  smallBatchChecklist,
  type IconKey,
} from "./data";

export const metadata: Metadata = {
  title: "Příběh značky | J.Oli Origins",
  description:
    "Poznejte příběh J.Oli Origins – české luxusní kosmetické značky, která spojuje malé šarže, botanické extrakty, moderní aktivní látky a pětikrokový rituál dlouhověkosti pleti.",
};

const PillarIcon = ({ kind, size = 24 }: { kind: IconKey; size?: number }) => {
  switch (kind) {
    case "drop":
      return <IconDrop size={size} />;
    case "shield":
      return <IconShield size={size} />;
    case "sun":
      return <IconSun size={size} />;
    case "leaf":
      return <IconLeaf size={size} />;
    case "cycle":
      return <IconCycle size={size} />;
    case "aroma":
      return <IconAroma size={size} />;
  }
};

export default function StoryPage() {
  return (
    <div className={s.root}>
      <StickyChrome active="pribeh" />

      <main className={p.page}>
        {/* ============== HERO ============== */}
        <section className={p.hero}>
          <div className={p.heroInner}>
            <div className={p.heroBody}>
              <span className={p.sectionLabel}>Příběh značky</span>
              <h1 className={p.heroTitle}>
                Péče, která vznikla<br />
                z osobní potřeby.<br />
                <em>A vyrostla v rituál.</em>
              </h1>
              <p className={p.heroDesc}>
                J.Oli Origins vzniklo z přesvědčení, že skutečně luxusní péče
                nemusí být složitá. Má být promyšlená, koncentrovaná a smyslová.
                Spojuje botanické suroviny, vlastní extrakty, moderní biotechnologické
                látky a rituál, ke kterému se chcete vracet.
              </p>
              <div className={p.heroCtas}>
                <a href="/ritual" className={p.btnPrimary}>
                  Objevit rituál <IconArrowRight size={14} />
                </a>
                <a href="#suroviny" className={p.btnSecondary}>
                  Poznat ingredience a výrobu <IconArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className={p.heroImage}>
              <Image
                src="/assets/joliorigins/pribeh/hero-ritualtop.png"
                alt="Generation Perfect Ritual — kompletní sada"
                fill
                sizes="(max-width: 1100px) 100vw, 56vw"
                priority
              />
              <span className={p.heroFade} aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ============== ORIGIN ============== */}
        <section className={`${p.section} ${p.sectionTone}`}>
          <div className={p.container}>
            <div className={p.originGrid}>
              <div className={p.originImage}>
                <Image
                  src="/assets/joliorigins/pribeh/origin-woman.png"
                  alt="Hledání jemné a smysluplné péče"
                  fill
                  sizes="(max-width: 1100px) 100vw, 50vw"
                />
              </div>
              <div>
                <span className={p.sectionLabel}>
                  Od osobní potřeby k vlastní značce
                </span>
                <h2 className={p.sectionTitle}>
                  Začalo to tam, kde<br />
                  běžné produkty <em>nestačily.</em>
                </h2>
                <p className={p.sectionBody}>
                  J.Oli Origins nevzniklo jako marketingový koncept. Vzniklo z osobní
                  zkušenosti zakladatelky Jitky Vrňákové, která po narození syna
                  Olivera začala hledat péči, která by byla jemná, smysluplná
                  a skutečně promyšlená. Když běžné komerční produkty nenabízely
                  odpověď, začaly vznikat první vlastní receptury tonik, krémů a balzámů.
                </p>
                <p
                  className={p.sectionBody}
                  style={{ marginTop: 14 }}
                >
                  Z toho, co začalo jako osobní hledání, postupně vyrostla značka.
                  A z mnoha pokusů, extraktů, textur a kombinací se časem
                  vykrystalizovala řada Generation Perfect — pět produktů, které
                  nesoutěží o pozornost, ale pracují společně.
                </p>

                <ol
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "28px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    counterReset: "story 0",
                  }}
                >
                  {[
                    { title: "Osobní hledání jemnější péče", text: "Vlastní zkušenost s pletí, na kterou běžné produkty nestačily." },
                    { title: "První vlastní receptury", text: "Tonika, krémy a balzámy připravené ručně doma — kus po kuse." },
                    { title: "Testování textur a pořadí", text: "Hledání, co spolu funguje, v jakém pořadí a v jakém množství." },
                    { title: "Vznik řady Generation Perfect", text: "Pět kroků, které dávají smysl jako jeden systém, ne jako náhodná kosmetika." },
                    { title: "Malosériová výroba a čerstvé šarže", text: "Výroba v menších šaržích v ČR, aby zůstala čerstvost a kontrola kvality." },
                    { title: "Travel Luxe Set jako bezpečný vstup", text: "Aby zákaznice mohla rituál nejdřív vyzkoušet, než se rozhodne pro plnou sadu." },
                  ].map((step, i) => (
                    <li
                      key={step.title}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "32px 1fr",
                        gap: 16,
                        alignItems: "start",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display), serif",
                          fontStyle: "italic",
                          color: "var(--color-gold-light)",
                          fontSize: 18,
                          lineHeight: 1,
                          paddingTop: 2,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div
                          style={{
                            fontSize: 11,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "var(--color-cream)",
                            fontWeight: 700,
                            marginBottom: 4,
                          }}
                        >
                          {step.title}
                        </div>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 13.5,
                            lineHeight: 1.55,
                            color: "var(--color-text-muted-light)",
                          }}
                        >
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ============== NAME + CHAOS COMPARISON ============== */}
        <section className={p.section}>
          <div className={p.container}>
            <div className={p.nameGrid}>
              <div>
                <span className={p.sectionLabel}>
                  J.Oli znamená radost a krásu
                </span>
                <h2 className={p.sectionTitle}>
                  Krása J.Oli spočívá<br />
                  v <em>jednoduchosti.</em>
                </h2>
                <div className={p.nameSubclaim}>
                  Pět produktů. Dokonalá synergie.
                </div>
                <p className={p.sectionBody}>
                  Jméno J.Oli vzniklo ze jmen Julie a Olivera. V názvu je osobní
                  začátek značky, ale také její dnešní filozofie: radost z péče,
                  krása jednoduchosti a respekt k tomu, že pleť nepotřebuje další
                  chaos. Potřebuje řád, kvalitní suroviny a rituál, který se stane
                  přirozenou součástí dne.
                </p>
              </div>
              <div className={p.comparePanel}>
                <div className={p.compareLead}>
                  Neděláme nekonečný katalog. Vytváříme systém.
                </div>
                <div className={p.compareCards}>
                  <div className={p.compareCard}>
                    <Image
                      src="/assets/joliorigins/ritual/chaos.png"
                      alt="Kosmetický chaos"
                      fill
                      sizes="(max-width: 1100px) 100vw, 30vw"
                    />
                    <div className={p.compareCardBody}>
                      <h4>Kosmetický chaos</h4>
                      <p>
                        Mnoho produktů, nejasné pořadí, překrývající se látky
                        a zbytečná zátěž.
                      </p>
                    </div>
                  </div>
                  <div className={p.compareCard}>
                    <Image
                      src="/assets/joliorigins/hero/set.png"
                      alt="Generation Perfect Ritual"
                      fill
                      sizes="(max-width: 1100px) 100vw, 30vw"
                    />
                    <div className={p.compareCardBody}>
                      <h4>J.Oli Origins</h4>
                      <p>
                        Pět kroků, jasné pořadí, ranní a večerní rituál a vědomá
                        pravidelnost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== LONGEVITY ============== */}
        <section className={p.section}>
          <div className={p.container}>
            <div className={p.longevityHead}>
              <div>
                <span className={p.sectionLabel}>
                  Naše filozofie: skin longevity jako každodenní péče
                </span>
                <h2 className={p.sectionTitle}>
                  Dlouhověkost pleti nezačíná zázrakem.{" "}
                  <em>Začíná pravidelností.</em>
                </h2>
              </div>
              <p className={p.sectionBody}>
                Skin longevity pro nás neznamená slib okamžitého omlazení. Znamená
                přístup k péči, který dává pleti stabilitu, hydrataci, podporu
                bariéry, výživu, antioxidanty a čas. Pleť se nemá každý týden
                učit nový produktový trend. Má dostávat péči, ke které se můžete
                vracet.
              </p>
            </div>
            <div className={p.pillarGrid}>
              {longevityPillars.map((pillar) => (
                <div key={pillar.title} className={p.pillarCard}>
                  <div className={p.pillarIcon}>
                    <PillarIcon kind={pillar.icon} size={24} />
                  </div>
                  <h3 className={p.pillarTitle}>{pillar.title}</h3>
                  <p className={p.pillarText}>{pillar.text}</p>
                </div>
              ))}
            </div>
            <p className={p.longevityFootnote}>
              Longevity není slib okamžité změny. Je to přístup k péči, který
              dává pleti řád, komfort a čas.
            </p>
          </div>
        </section>

        {/* ============== INGREDIENTS ============== */}
        <section id="suroviny" className={p.section}>
          <div className={p.container}>
            <div className={p.ingHead}>
              <div>
                <span className={p.sectionLabel}>
                  Suroviny, které mají důvod
                </span>
                <h2 className={p.sectionTitle}>
                  Botanika, která má charakter.<br />
                  <em>Věda, která má směr.</em>
                </h2>
              </div>
              <p className={p.sectionBody}>
                Každá složka v rituálu má svůj důvod — od vlastních botanických
                macerátů přes moderní aktivní látky až po vůně a textury, které
                z rituálu dělají smyslový prožitek.
              </p>
            </div>
            <div className={p.ingGrid}>
              {ingredientCards.map((c) => (
                <article key={c.title} className={p.ingCard}>
                  <div className={p.ingCardImage}>
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 1100px) 50vw, 24vw"
                    />
                  </div>
                  <div className={p.ingCardBody}>
                    <h4>{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============== SMALL BATCH + MANIFEST ============== */}
        <section className={p.section}>
          <div className={p.container}>
            <div className={p.smallBatchGrid}>
              <div className={p.smallBatchPanel}>
                <span className={p.sectionLabel}>
                  Malé šarže nejsou kompromis. Jsou standard.
                </span>
                <h3>Malosériová výroba jako forma kontroly.</h3>
                <p>
                  Produkty vznikají v menších šaržích, abychom mohli hlídat
                  čerstvost, texturu, vůni i celkovou kvalitu. Malá šarže pro nás
                  není známka omezení. Je to způsob, jak zůstat blízko produktu.
                </p>
                <ul className={p.smallBatchList}>
                  {smallBatchChecklist.map((item) => (
                    <li key={item}>
                      <IconCheck size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={p.smallBatchImage}>
                <Image
                  src="/assets/joliorigins/pribeh/small-batch-lab.png"
                  alt="Malosériová laboratorní výroba J.Oli Origins"
                  fill
                  sizes="(max-width: 1100px) 100vw, 33vw"
                />
              </div>

              <div className={`${p.smallBatchPanel} ${p.manifestPanel}`}>
                <span className={p.sectionLabel}>
                  Luxus pro nás není přebytek. Je to smysl.
                </span>
                <ul className={p.manifestList}>
                  <li><em>Méně</em> produktů.</li>
                  <li>Více <em>koncentrace.</em></li>
                  <li><em>Méně</em> chaosu.</li>
                  <li>Více <em>rituálu.</em></li>
                </ul>
                <div className={p.manifestQuote}>
                  Méně slibů. Více smyslu.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== FOUNDER + PROMISE + START PATH ============== */}
        <section className={p.section}>
          <div className={p.container}>
            <div className={p.tripleGrid}>
              {/* FOUNDER */}
              <div className={`${p.tripleBox} ${p.founderBox}`}>
                <span className={p.tripleBoxLabel}>
                  Za každým produktem je konkrétní odpovědnost.
                </span>
                <h3 className={p.tripleBoxTitle}>Kdo za značkou stojí</h3>
                <div className={p.founderImage}>
                  <Image
                    src="/assets/joliorigins/pribeh/zakladatelka.webp"
                    alt="Jitka Vrňáková — zakladatelka J.Oli Origins"
                    fill
                    sizes="(max-width: 1100px) 100vw, 20vw"
                  />
                </div>
                <div className={p.founderTextCol}>
                  <p className={p.founderText}>
                    Za J.Oli Origins stojí Jitka Vrňáková. Její cesta nezačala
                    snahou vytvořit další beauty značku, ale potřebou najít péči,
                    která bude jemná, smysluplná a funkční.
                  </p>
                  <blockquote className={p.founderQuote}>
                    „Nechtěla jsem, aby žena doma přemýšlela, co s čím
                    kombinovat a jestli toho už není moc. Chtěla jsem vytvořit
                    péči, která má jasné pořadí, příjemné textury a dává smysl
                    ráno i večer.“
                  </blockquote>
                  <div className={p.founderSig}>— Jitka Vrňáková</div>
                </div>
              </div>

              {/* PROMISE */}
              <div className={p.tripleBox}>
                <span className={p.tripleBoxLabel}>
                  Co slibujeme. A co neslibujeme.
                </span>
                <h3 className={p.tripleBoxTitle}>
                  Jasná hranice mezi péčí a slibem.
                </h3>
                <div className={p.promiseColumns}>
                  <div className={p.promiseCol}>
                    <h5>Slibujeme</h5>
                    <ul>
                      {promises.map((it) => (
                        <li key={it}>
                          <IconCheck size={14} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${p.promiseCol} ${p.notList}`}>
                    <h5>Neslibujeme</h5>
                    <ul>
                      {nonPromises.map((it) => (
                        <li key={it}>
                          <IconClose size={12} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* START PATH */}
              <div className={p.tripleBox}>
                <span className={p.tripleBoxLabel}>
                  Jak začít s J.Oli Origins
                </span>
                <h3 className={p.tripleBoxTitle}>Vyberte svou cestu.</h3>
                <ul className={p.startPathList}>
                  {startPaths.map((sp) => (
                    <li key={sp.num} className={p.startPathItem}>
                      <span className={p.startPathNum}>{sp.num}</span>
                      <div>
                        <h4 className={p.startPathTitle}>{sp.title}</h4>
                        <p className={p.startPathText}>{sp.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a href="/ritual#ritual-concierge" className={p.btnSecondary}>
                  Najít svůj vstup do rituálu <IconArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============== FINAL CTA ============== */}
        <section className={p.section}>
          <div className={p.container}>
            <div className={p.finalCta}>
              <div>
                <span className={p.sectionLabel}>Váš příběh. Váš rituál.</span>
                <h2 className={p.sectionTitle}>
                  Objevte péči, která vznikla z potřeby a vyrostla{" "}
                  <em>v promyšlený rituál.</em>
                </h2>
                <p className={p.sectionBody}>
                  Pět produktů. Jedna myšlenka. Společně mohou dávat odpověď,
                  proč se k beauty péči chcete vracet.
                </p>
                <div className={p.finalCtaCtas} style={{ marginTop: 24 }}>
                  <a href="/ritual" className={p.btnPrimary}>
                    Objevit rituál <IconArrowRight size={14} />
                  </a>
                  <a
                    href="/produkty/generation-perfect-ritual-kompletni-sada"
                    className={p.btnSecondary}
                  >
                    Koupit kompletní rituál <IconArrowRight size={14} />
                  </a>
                </div>
              </div>
              <div className={p.finalCtaImage}>
                <Image
                  src="/assets/joliorigins/pribeh/hero-ritualtop.png"
                  alt="Generation Perfect Ritual — pět produktů"
                  fill
                  sizes="(max-width: 1100px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
