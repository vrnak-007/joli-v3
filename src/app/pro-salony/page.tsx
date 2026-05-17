"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import s from "../styles.module.css";
import x from "./salony.module.css";
import { StickyChrome, Footer } from "../Chrome";
import {
  IconArrowRight,
  IconCheck,
  IconSpa,
  IconHands,
  IconChart,
  IconHeadset,
  IconStar,
  IconHomeRitual,
  IconCycle,
  IconBatch,
  IconLayers,
  IconClipboard,
  IconClientCard,
  IconSpeech,
  IconTraining,
  IconMegaphone,
  IconLaptop,
  IconCoin,
  IconGift,
  IconBox,
  IconKit,
  IconTruck,
  IconLaunch,
  IconPin,
  IconCompass,
  IconJournal,
  IconMail,
  IconRefresh,
  IconSparkle,
  IconDownload,
  IconHandshake,
  IconBookOpen,
  IconChair,
  IconFace,
  IconBottle,
  IconShoppingBag,
  IconGrowth,
  IconPeopleHeart,
  IconCoins,
  IconDiscount,
  IconLightning,
  IconHome,
  IconLocationPartner,
  IconDiamond,
  IconTools,
  IconHeart,
} from "../icons";
import {
  heroBenefits,
  businessValues,
  salonSystemFeatures,
  salonRituals,
  salesSteps,
  salesChecklist,
  materialCards,
  onboardingSteps,
  economicsSteps,
  partnerLevels,
  digitalSupportItems,
  formBenefits,
  businessProcessSteps,
  businessFlowBenefits,
  businessTools,
  economicModelSteps,
  businessWhyJoli,
  economicScenario,
  economicScenarioNote,
  type IconKey,
  type FlowIcon,
} from "./data";

/* ============================================================
   Icon mapper — keeps data file decoupled from React imports.
============================================================ */
function SalonIcon({ kind, size = 22 }: { kind: IconKey; size?: number }) {
  switch (kind) {
    // Hero benefits
    case "spa":          return <IconSpa size={size} />;
    case "home-ritual":  return <IconHomeRitual size={size} />;
    case "growth":       return <IconChart size={size} />;
    case "support":      return <IconHeadset size={size} />;
    // Business values
    case "value":        return <IconStar size={size} />;
    case "home-care":    return <IconHomeRitual size={size} />;
    case "loyalty":      return <IconCycle size={size} />;
    // System features
    case "spa-pack":     return <IconBatch size={size} />;
    case "retail":       return <IconBox size={size} />;
    case "protocol":     return <IconClipboard size={size} />;
    case "client-sheet": return <IconClientCard size={size} />;
    case "sales-script": return <IconSpeech size={size} />;
    case "training":     return <IconTraining size={size} />;
    case "marketing":    return <IconMegaphone size={size} />;
    case "digital":      return <IconLaptop size={size} />;
    // Business model
    case "rebate":       return <IconCoin size={size} />;
    case "pro-pack":     return <IconLayers size={size} />;
    case "starter":      return <IconKit size={size} />;
    case "shipping":     return <IconTruck size={size} />;
    case "launch":       return <IconLaunch size={size} />;
    case "visibility":   return <IconPin size={size} />;
    // Digital support
    case "guide":        return <IconCompass size={size} />;
    case "articles":     return <IconJournal size={size} />;
    case "follow-up":    return <IconMail size={size} />;
    case "reorder":      return <IconRefresh size={size} />;
    case "salon-support":return <IconSparkle size={size} />;
    default:             return <IconStar size={size} />;
  }
}

function FlowIconRenderer({ kind, size = 26 }: { kind: FlowIcon; size?: number }) {
  switch (kind) {
    case "handshake":    return <IconHandshake size={size} />;
    case "book":         return <IconBookOpen size={size} />;
    case "chair":        return <IconChair size={size} />;
    case "face":         return <IconFace size={size} />;
    case "bottle":       return <IconBottle size={size} />;
    case "bag":          return <IconShoppingBag size={size} />;
    case "growth":       return <IconGrowth size={size} />;
    case "people-heart": return <IconPeopleHeart size={size} />;
    case "coins":        return <IconCoins size={size} />;
    case "discount":     return <IconDiscount size={size} />;
    case "lightning":    return <IconLightning size={size} />;
    case "home":         return <IconHome size={size} />;
    case "megaphone":    return <IconMegaphone size={size} />;
    case "location":     return <IconLocationPartner size={size} />;
    case "gift":         return <IconGift size={size} />;
    case "diamond":      return <IconDiamond size={size} />;
    case "tools":        return <IconTools size={size} />;
    case "heart":        return <IconHeart size={size} />;
    default:             return <IconHandshake size={size} />;
  }
}

/* ============================================================
   Page
============================================================ */
type FormState = {
  salonName: string;
  city: string;
  contact: string;
  email: string;
  phone: string;
  team: string;
  interest: "starter" | "ritual" | "signature" | "unsure" | "";
  note: string;
  consent: boolean;
};

const interestLabels: Record<string, string> = {
  "": "Vyberte úroveň…",
  starter: "Starter",
  ritual: "Ritual Partner",
  signature: "Signature Salon",
  unsure: "Nejsem si jistá",
};

export default function ProSalonyPage() {
  const [form, setForm] = useState<FormState>({
    salonName: "",
    city: "",
    contact: "",
    email: "",
    phone: "",
    team: "",
    interest: "",
    note: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function pickInterest(level: "starter" | "ritual" | "signature") {
    setForm((p) => ({ ...p, interest: level }));
    document
      .getElementById("salon-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire backend submission
    // eslint-disable-next-line no-console
    console.log("Salon partner inquiry:", form);
    setSubmitted(true);
  }

  return (
    <div className={s.root}>
      <StickyChrome active="salony" />

      <main className={x.page}>
        {/* ====================== HERO ====================== */}
        <section className={x.hero}>
          <div className={x.heroInner}>
            <div className={x.heroBody}>
              <span className={x.heroLabel}>Pro salony · B2B partnerství</span>
              <h1 className={x.heroTitle}>
                Prémiový longevity rituál pro salony, které chtějí prodávat víc
                než <em>ošetření.</em>
              </h1>
              <p className={x.heroDesc}>
                J.Oli Origins propojuje profesionální salonní péči, domácí
                pětikrokový rituál a prodejní podporu pro kosmetičky. Vybraným
                Signature partnerům navíc dáváme exkluzivní produkty, které
                ve vašem okolí nikdo jiný nemá.
              </p>
              <div className={x.heroCtas}>
                <a href="#salon-form" className={x.btnPrimary}>
                  Chci salonní spolupráci <IconArrowRight size={12} />
                </a>
                <a href="#business-model" className={x.btnSecondary}>
                  Zobrazit business model <IconArrowRight size={12} />
                </a>
              </div>
            </div>
            <div className={x.heroImage}>
              <Image
                src="/assets/joliorigins/pro-salony/hero.png"
                alt="Salon J.Oli Origins — produkty na tácu, masážní lehátko"
                fill
                sizes="(max-width: 1100px) 100vw, 56vw"
                priority
              />
              <div className={x.heroBadge} aria-hidden="true">
                <div>
                  Více než
                  <strong>10 let</strong>
                  vývoje
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== HERO BENEFIT ROW ============== */}
        <section className={x.heroBenefitWrap}>
          <div className={x.container}>
            <div className={x.heroBenefitRow}>
              {heroBenefits.map((b) => (
                <div key={b.title} className={x.heroBenefit}>
                  <div className={x.heroBenefitIcon}>
                    <SalonIcon kind={b.icon} size={26} />
                  </div>
                  <h3 className={x.heroBenefitTitle}>{b.title}</h3>
                  <p className={x.heroBenefitText}>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== BUSINESS VALUES (3 pillars) ============== */}
        <section className={x.section}>
          <div className={x.container}>
            <div className={x.sectionHead}>
              <span className={x.sectionLabel}>Obchodní hodnota pro salon</span>
              <h2 className={x.sectionTitle}>
                Proč to dává salonu <em>obchodní smysl</em>
              </h2>
            </div>
            <div className={x.valuesGrid}>
              {businessValues.map((v) => (
                <article key={v.title} className={x.valueCard}>
                  <span className={x.valueIcon}>
                    <SalonIcon kind={v.icon} size={24} />
                  </span>
                  <span className={x.valueNum}>{v.num}</span>
                  <h3 className={x.valueTitle}>{v.title}</h3>
                  <p className={x.valueText}>{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============== SALON SYSTEM (4x2 grid) ============== */}
        <section className={x.section} style={{ paddingTop: 16 }}>
          <div className={x.container}>
            <div className={x.sectionHead}>
              <span className={x.sectionLabel}>Salonní systém</span>
              <h2 className={x.sectionTitle}>
                Nejen kosmetiku. <em>Kompletní salonní systém.</em>
              </h2>
            </div>
            <div className={x.systemGrid}>
              {salonSystemFeatures.map((f) => (
                <div key={f.title} className={x.systemCard}>
                  <span className={x.systemIcon}>
                    <SalonIcon kind={f.icon} size={20} />
                  </span>
                  <h3 className={x.systemTitle}>{f.title}</h3>
                  <p className={x.systemText}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== BUSINESS MODEL FLOW ============== */}
        <section id="business-model" className={x.flowSection}>
          <div className={x.container}>
            {/* Intro */}
            <div className={x.flowIntro}>
              <div>
                <span className={x.flowIntroLabel}>Business model</span>
                <h2 className={x.flowIntroTitle}>
                  Partnerství, které vám přináší{" "}
                  <em>více prodeje, klientek a růstu.</em>
                </h2>
                <p className={x.flowIntroBody}>
                  J.Oli Origins vám dává kompletní systém, který funguje
                  v praxi. Vy se soustředíte na své klientky. My vám dodáme
                  nástroje, podporu a strategii.
                </p>
              </div>
              <div className={x.flowIntroImage}>
                <Image
                  src="/assets/joliorigins/pro-salony/hero.png"
                  alt="Profesionální salon J.Oli Origins"
                  fill
                  sizes="(max-width: 1100px) 100vw, 360px"
                />
              </div>
            </div>

            {/* Process heading */}
            <div className={x.flowHeading}>
              Jak to funguje — od partnerství k růstu vašeho salonu
            </div>

            {/* Process flow */}
            <div className={x.flowGrid}>
              {businessProcessSteps.map((step) => (
                <div key={step.num} className={x.flowStep}>
                  <span className={x.flowStepNum}>{step.num}</span>
                  <h3 className={x.flowStepTitle}>{step.title}</h3>
                  <span className={x.flowStepIcon}>
                    <FlowIconRenderer kind={step.icon} size={32} />
                  </span>
                  <p className={x.flowStepText}>{step.text}</p>
                </div>
              ))}
              <div className={`${x.flowStep} ${x.flowResult}`}>
                <span className={x.flowResultLabel}>Výsledek:</span>
                <h3 className={x.flowResultTitle}>
                  Více prodeje,<br />
                  více klientek,<br />
                  vyšší zisk.
                </h3>
                <span className={x.flowResultIcon}>
                  <IconPeopleHeart size={50} />
                </span>
              </div>
            </div>

            {/* Benefit strip */}
            <div className={x.flowBenefitsWrap}>
              <h3 className={x.flowBenefitsTitle}>Co vám přinášíme</h3>
              <div className={x.flowBenefitsGrid}>
                {businessFlowBenefits.map((b) => (
                  <div key={b.title} className={x.flowBenefit}>
                    <span className={x.flowBenefitIcon}>
                      <FlowIconRenderer kind={b.icon} size={32} />
                    </span>
                    <h4 className={x.flowBenefitItemTitle}>{b.title}</h4>
                    <p className={x.flowBenefitText}>{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support grid (3 cols) */}
            <div className={x.flowSupportGrid}>
              {/* Tools */}
              <div className={x.flowSupportCard}>
                <h3 className={x.flowSupportTitle}>
                  Nástroje, které vám usnadní práci
                </h3>
                <ul className={x.flowSupportList}>
                  {businessTools.map((t) => (
                    <li key={t}>
                      <IconCheck size={12} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Economic model */}
              <div className={x.flowSupportCard}>
                <h3 className={x.flowSupportTitle}>Ekonomický model salonu</h3>
                <div className={x.economicRow}>
                  {economicModelSteps.map((node, i) => (
                    <Fragment key={node.title}>
                      <div className={x.economicNode}>
                        <span
                          className={`${x.economicNodeCircle}${
                            i === economicModelSteps.length - 1
                              ? " " + x.isResult
                              : ""
                          }`}
                        >
                          <FlowIconRenderer kind={node.icon} size={22} />
                        </span>
                        <span className={x.economicNodeTitle}>
                          {node.title}
                        </span>
                        <p className={x.economicNodeText}>{node.text}</p>
                      </div>
                      {i < economicModelSteps.length - 1 && (
                        <span className={x.economicSign} aria-hidden="true">
                          {i === economicModelSteps.length - 2 ? "=" : "+"}
                        </span>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>

              {/* Why J.Oli */}
              <div className={x.flowSupportCard}>
                <h3 className={x.flowSupportTitle}>
                  Proč salony volí J.Oli Origins
                </h3>
                <ul className={x.flowSupportList}>
                  {businessWhyJoli.map((w) => (
                    <li key={w}>
                      <IconCheck size={12} />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Final CTA bar */}
            <div className={x.flowFinalCta}>
              <div className={x.flowCtaLabel}>
                <IconHeart size={20} />
                <span>Jsme tu pro váš úspěch.</span>
              </div>
              <p className={x.flowCtaText}>
                Náš tým vám bude vždy nablízku. Pomůžeme vám s každým krokem,
                aby se J.Oli Origins stalo nedílnou a ziskovou součástí vašeho
                salonu.
              </p>
              <a href="#salon-form" className={x.flowCtaButton}>
                Staňte se naším partnerem <IconArrowRight size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* ============== SALON RITUALS ============== */}
        <section className={x.section} style={{ paddingTop: 16 }}>
          <div className={x.container}>
            <div className={x.sectionHead}>
              <span className={x.sectionLabel}>Procedury</span>
              <h2 className={x.sectionTitle}>Salonní rituály</h2>
            </div>
            <div className={x.ritualGrid}>
              {salonRituals.map((r) => (
                <article key={r.title} className={x.ritualCard}>
                  <div className={x.ritualImage}>
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 1100px) 50vw, 25vw"
                    />
                  </div>
                  <div className={x.ritualBody}>
                    <span className={x.ritualDuration}>{r.duration}</span>
                    <h3 className={x.ritualTitle}>{r.title}</h3>
                    <p className={x.ritualText}>{r.text}</p>
                    <a href="#salon-form" className={x.ritualCta}>
                      Zjistit více <IconArrowRight size={11} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className={x.ritualsCenterCta}>
              <a href="/downloads/salonni-ritualy.pdf" className={x.btnSecondary}>
                <IconDownload size={12} /> Stáhnout přehled rituálů (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* ============== SALES SUPPORT ============== */}
        <section className={x.section}>
          <div className={x.container}>
            <div className={x.sectionHead}>
              <span className={x.sectionLabel}>Doprovod prodeje</span>
              <h2 className={x.sectionTitle}>
                Prodej, který navazuje na péči.{" "}
                <em>Ne tlak u pokladny.</em>
              </h2>
            </div>
            <div className={x.salesGrid}>
              <div className={x.salesPhoto}>
                <Image
                  src="/assets/joliorigins/pro-salony/sales-worksheet.png"
                  alt="Pracovní list klientky"
                  fill
                  sizes="(max-width: 1100px) 100vw, 32vw"
                />
              </div>
              <div className={x.salesTimeline}>
                {salesSteps.map((step) => (
                  <div key={step.num} className={x.salesStep}>
                    <span className={x.salesStepNum}>{step.num}</span>
                    <div>
                      <h4 className={x.salesStepTitle}>{step.title}</h4>
                      <p className={x.salesStepText}>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={x.salesChecklist}>
                <span className={x.salesChecklistTitle}>
                  Příklad doporučeného postupu
                </span>
                <h4 className={x.salesChecklistTopline}>
                  Po ošetření v salonu
                </h4>
                <ul className={x.salesChecklistList}>
                  {salesChecklist.map((c) => (
                    <li key={c}>
                      <IconCheck size={12} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <p className={x.salesChecklistOutro}>
                  Děkujeme za vaši důvěru.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============== ECONOMIC SCENARIO ============== */}
        <section className={x.section} style={{ paddingTop: 0 }}>
          <div className={x.container}>
            <div className={x.sectionHead}>
              <span className={x.sectionLabel}>Modelový scénář</span>
              <h2 className={x.sectionTitle}>
                Příklad cesty klientky <em>v salonu i doma</em>
              </h2>
              <p className={x.sectionLead}>
                Pět kroků od první procedury k opakovanému retail příjmu.
                {" "}{economicScenarioNote}
              </p>
            </div>
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                gap: 18,
              }}
            >
              {economicScenario.map((step) => (
                <li
                  key={step.num}
                  style={{
                    background: "var(--salon-card)",
                    border: "1px solid var(--salon-line)",
                    padding: "22px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    minHeight: 220,
                  }}
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--salon-black)",
                      color: "var(--salon-gold-light)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display), serif",
                      fontStyle: "italic",
                      fontSize: 16,
                      marginBottom: 4,
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{
                      fontSize: 11.5,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "var(--salon-text)",
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 12.5,
                      lineHeight: 1.55,
                      color: "var(--salon-muted)",
                      margin: 0,
                    }}
                  >
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============== MATERIALS ============== */}
        <section className={x.section} style={{ paddingTop: 0 }}>
          <div className={x.container}>
            <div className={x.sectionHead}>
              <span className={x.sectionLabel}>Materiály pro salon</span>
              <h2 className={x.sectionTitle}>
                Materiály, které zjednoduší práci{" "}
                <em>kosmetičce</em>
              </h2>
            </div>
            <div className={x.materialsRow}>
              {materialCards.map((m) => (
                <div key={m.title} className={x.materialCard}>
                  <div
                    className={x.materialThumb}
                    aria-hidden="true"
                  />
                  <h3 className={x.materialTitle}>{m.title}</h3>
                  <p className={x.materialSubtitle}>{m.subtitle}</p>
                </div>
              ))}
            </div>
            <div className={x.materialsCenterCta}>
              <a href="/pro-salony#salon-form" className={x.btnSecondary}>
                Zobrazit ukázky ke stažení <IconArrowRight size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* ============== PARTNER LEVELS (dominant row) ============== */}
        <section className={x.partnerLevelsSection}>
          <div className={x.container}>
            <div className={x.sectionHead}>
              <span className={x.sectionLabel}>Partnerské úrovně</span>
              <h2 className={x.sectionTitle}>
                Vyberte si úroveň <em>partnerství</em>
              </h2>
              <p className={x.sectionLead}>
                Tři úrovně podle vašeho salonu a fáze spolupráce. Každá s jasným
                rozsahem podpory, materiálů a podmínek.
              </p>
            </div>
            <div className={x.partnerLevelsGrid}>
              {partnerLevels.map((lvl) => (
                <article
                  key={lvl.id}
                  className={`${x.partnerLevelCard}${
                    lvl.highlighted ? " " + x.partnerLevelCardDark : ""
                  }`}
                >
                  <h3 className={x.partnerLevelName}>{lvl.name}</h3>
                  <p className={x.partnerLevelTagline}>{lvl.tagline}</p>
                  <p
                    className={x.partnerLevelTagline}
                    style={{ marginTop: -4, fontStyle: "italic", opacity: 0.85 }}
                  >
                    {lvl.forWhom}
                  </p>
                  <ul className={x.partnerLevelFeatures}>
                    {lvl.features.map((f) => (
                      <li key={f}>
                        <IconCheck size={12} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => pickInterest(lvl.id)}
                    className={`${
                      lvl.highlighted ? x.btnGold : x.btnPrimary
                    } ${x.partnerLevelCta}`}
                  >
                    Více informací <IconArrowRight size={11} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============== ONBOARDING + ECONOMICS (2 cols) ============== */}
        <section className={x.section}>
          <div className={x.container}>
            <div className={x.bottomGrid}>
              {/* Onboarding */}
              <div className={x.bottomBox}>
                <span className={x.bottomBoxLabel}>Onboarding salonu</span>
                <h3 className={x.bottomBoxTitle}>
                  Za 14 dní můžete mít J.Oli připravené v nabídce.
                </h3>
                <p className={x.bottomBoxSub}>
                  Strukturovaný proces od první konzultace po vyhodnocení launchů.
                </p>
                <ol className={x.timelineList}>
                  {onboardingSteps.map((step) => (
                    <li key={step.num}>
                      <span className={x.timelineNum}>{step.num}</span>
                      <div>
                        <div className={x.timelineTitle}>{step.title}</div>
                        <p className={x.timelineText}>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Economics */}
              <div className={x.bottomBox}>
                <span className={x.bottomBoxLabel}>Ekonomika pro salon</span>
                <h3 className={x.bottomBoxTitle}>
                  Příklad cesty klientky a příležitostí pro opakovaný prodej.
                </h3>
                <p className={x.bottomBoxSub}>
                  Pět kroků od prvního ošetření k pravidelnému kontaktu
                  s klientkou.
                </p>
                <ol className={x.timelineList}>
                  {economicsSteps.map((step) => (
                    <li key={step.num}>
                      <span className={x.timelineNum}>{step.num}</span>
                      <div>
                        <div className={x.timelineTitle}>{step.title}</div>
                        <p className={x.timelineText}>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ============== DIGITAL SUPPORT ============== */}
        <section className={x.section} style={{ paddingTop: 0 }}>
          <div className={x.container}>
            <div className={x.sectionHead}>
              <span className={x.sectionLabel}>Digitální podpora</span>
              <h2 className={x.sectionTitle}>
                Digitální podpora, která pomáhá klientce{" "}
                <em>pokračovat doma</em>
              </h2>
            </div>
            <div className={x.digitalGrid}>
              {digitalSupportItems.map((d) => (
                <div key={d.title} className={x.digitalItem}>
                  <span className={x.digitalIcon}>
                    <SalonIcon kind={d.icon} size={22} />
                  </span>
                  <h3 className={x.digitalTitle}>{d.title}</h3>
                  <p className={x.digitalText}>{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== PARTNER FORM ============== */}
        <section id="salon-form" className={x.formSection}>
          <div className={x.container}>
            <div className={x.formGrid}>
              <div className={x.formIntro}>
                <span className={x.formIntroLabel}>Salonní partnerství</span>
                <h2 className={x.formIntroTitle}>
                  Staňte se naším <em>salónním partnerem</em>
                </h2>
                <p className={x.formIntroText}>
                  Domluvte si konzultaci a zjistěte, jak může J.Oli Origins
                  podpořit váš salon a vaše podnikání.
                </p>
                <ul className={x.formBenefitsList}>
                  {formBenefits.map((b) => (
                    <li key={b}>
                      <IconCheck size={12} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className={x.formIntroImage}>
                  <Image
                    src="/assets/joliorigins/pro-salony/form-intro.png"
                    alt="Salon J.Oli Origins — partnerství"
                    fill
                    sizes="(max-width: 1100px) 100vw, 38vw"
                  />
                </div>
              </div>

              <form className={x.salonForm} onSubmit={handleSubmit} noValidate>
                {submitted ? (
                  <div className={x.formSuccess}>
                    Děkujeme. Ozveme se vám s návrhem partnerských podmínek.
                  </div>
                ) : (
                  <>
                    <div className={x.formField}>
                      <label htmlFor="salonName" className={x.formLabel}>
                        Název salonu <span className="req">*</span>
                      </label>
                      <input
                        id="salonName"
                        type="text"
                        required
                        className={x.formInput}
                        value={form.salonName}
                        onChange={(e) => update("salonName", e.target.value)}
                      />
                    </div>
                    <div className={x.formField}>
                      <label htmlFor="city" className={x.formLabel}>
                        Město <span className="req">*</span>
                      </label>
                      <input
                        id="city"
                        type="text"
                        required
                        className={x.formInput}
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                      />
                    </div>
                    <div className={x.formField}>
                      <label htmlFor="contact" className={x.formLabel}>
                        Kontaktní osoba <span className="req">*</span>
                      </label>
                      <input
                        id="contact"
                        type="text"
                        required
                        className={x.formInput}
                        value={form.contact}
                        onChange={(e) => update("contact", e.target.value)}
                      />
                    </div>
                    <div className={x.formField}>
                      <label htmlFor="email" className={x.formLabel}>
                        E-mail <span className="req">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className={x.formInput}
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                    <div className={x.formField}>
                      <label htmlFor="phone" className={x.formLabel}>
                        Telefon <span className="req">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className={x.formInput}
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                    <div className={x.formField}>
                      <label htmlFor="team" className={x.formLabel}>
                        Počet kosmetiček
                      </label>
                      <input
                        id="team"
                        type="text"
                        className={x.formInput}
                        value={form.team}
                        onChange={(e) => update("team", e.target.value)}
                      />
                    </div>
                    <div className={`${x.formField} ${x.formFieldFull}`}>
                      <label htmlFor="interest" className={x.formLabel}>
                        Zájem o spolupráci <span className="req">*</span>
                      </label>
                      <select
                        id="interest"
                        required
                        className={x.formSelect}
                        value={form.interest}
                        onChange={(e) =>
                          update("interest", e.target.value as FormState["interest"])
                        }
                      >
                        <option value="">{interestLabels[""]}</option>
                        <option value="starter">{interestLabels.starter}</option>
                        <option value="ritual">{interestLabels.ritual}</option>
                        <option value="signature">{interestLabels.signature}</option>
                        <option value="unsure">{interestLabels.unsure}</option>
                      </select>
                    </div>
                    <div className={`${x.formField} ${x.formFieldFull}`}>
                      <label htmlFor="note" className={x.formLabel}>
                        Poznámka
                      </label>
                      <textarea
                        id="note"
                        className={x.formTextarea}
                        value={form.note}
                        onChange={(e) => update("note", e.target.value)}
                      />
                    </div>
                    <label className={x.formCheckbox}>
                      <input
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                      />
                      <span>
                        Souhlasím se zpracováním osobních údajů.
                      </span>
                    </label>
                    <div className={x.formSubmitRow}>
                      <button type="submit" className={x.btnPrimary}>
                        Odeslat poptávku <IconArrowRight size={12} />
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
