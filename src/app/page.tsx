import type { Metadata } from "next";
import Image from "next/image";
import s from "./styles.module.css";
import { products, ritualSet } from "./data";
import { RecommendationForm, ClubForm } from "./Forms";
import { RitualConcierge } from "./RitualConcierge";
import {
  IconBatch,
  IconDerma,
  IconLeaf,
  IconTruck,
  IconSample,
  IconReturn,
  IconLock,
  IconHeadset,
  IconCleansing,
  IconMist,
  IconDrop,
  IconSun,
  IconMoon,
  IconGift,
  IconFlag,
  IconStory,
  IconJournal,
  IconSalon,
  IconCheck,
  IconSearch,
  IconAccount,
  IconBag,
  IconChevron,
  IconMenu,
  IconArrowRight,
  IconRitual,
  IconCraft,
  IconLayers,
  IconMolecule,
  IconAroma,
  IconShield,
  IconCycle,
  IconSparkle,
  IconCompass,
  IconHelp,
} from "./icons";

export const metadata: Metadata = {
  title: "J.Oli Origins · Generation Perfect Ritual — pět kroků, jeden rituál",
  description:
    "Luxusní pětikrokový rituál péče pro pleť, která potřebuje pravidelnost, klid a smysl. Čištění, tonizace, hydratace, denní péče a noční obnova.",
};

const phaseIcons = [IconCleansing, IconMist, IconDrop, IconSun, IconMoon];

/* ---------- 1. TOP ANNOUNCEMENT BAR ---------- */
function TopAnnouncementBar() {
  return (
    <div className={s.announceBar}>
      <div className={`${s.container} ${s.announceInner}`}>
        <div className={s.announceItems}>
          <span className={s.announceItem}><IconBatch size={14} />Malosériová výroba v ČR</span>
          <span className={s.announceItem}><IconLeaf size={14} />Čerstvé šarže</span>
          <span className={s.announceItem}><IconTruck size={14} />Doprava zdarma</span>
          <span className={s.announceItem}><IconSample size={14} />Vzorek zdarma ke každé objednávce</span>
          <span className={s.announceItem}><IconLock size={14} />Bezpečná platba</span>
        </div>
        <div className={s.currency}>CZK <IconChevron size={10} /></div>
      </div>
    </div>
  );
}

/* ---------- 1b. CART PROGRESS BAR (sticky, above header) ---------- */
function CartProgressBar() {
  const cartTotal = 1100; // demo cart value
  const giftAt = 2000;
  const giftPlusAt = 2500;
  const target = giftPlusAt;
  const progress = Math.min(100, (cartTotal / target) * 100);
  const remainingGift = Math.max(0, giftAt - cartTotal);
  const remainingPlus = Math.max(0, giftPlusAt - cartTotal);

  let msg: React.ReactNode;
  if (remainingGift > 0) {
    msg = (
      <>Do dárku zbývá <strong>{remainingGift.toLocaleString("cs-CZ")} Kč</strong></>
    );
  } else if (remainingPlus > 0) {
    msg = (
      <>Do dárku navíc zbývá <strong>{remainingPlus.toLocaleString("cs-CZ")} Kč</strong></>
    );
  } else {
    msg = <>Máte oba dárky · děkujeme</>;
  }

  return (
    <div className={s.cartProgress}>
      <div className={`${s.container} ${s.cartProgressInner}`}>
        <span className={s.cartProgressLabel}>
          <IconGift size={14} /> {msg}
        </span>
        <div className={s.cartProgressBar} aria-hidden="true">
          <div className={s.cartProgressFill} style={{ width: `${progress}%` }} />
        </div>
        <div className={s.cartProgressMilestones}>
          <span className={cartTotal >= giftPlusAt ? "reached" : ""}>
            <IconGift size={11} /> 2 500 Kč
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- 2. MAIN HEADER ---------- */
function MainHeader() {
  return (
    <header className={s.header}>
      <div className={`${s.container} ${s.headerInner}`}>
        <a className={s.logo} aria-label="J.Oli Origins">
          J·OLI
          <span>ORIGINS</span>
        </a>
        <nav className={s.nav} aria-label="Hlavní">
          <a className={s.navLink} href="/ritual">Rituál</a>
          <a className={s.navLink} href="/produkty">Produkty</a>
          <a className={s.navLink} href="/ritual/pouziti">Detailní použití</a>
          <a className={s.navLink} href="/pribeh">Příběh</a>
          <a className={s.navLink} href="/zurnal">Žurnál</a>
          <a className={s.navLink} href="/pro-salony">Pro salony</a>
        </nav>
        <div className={s.headerIcons}>
          <button className={s.iconBtn} aria-label="Hledat"><IconSearch size={18} /></button>
          <button className={s.iconBtn} aria-label="Účet"><IconAccount size={18} /></button>
          <button className={s.iconBtn} aria-label="Košík">
            <IconBag size={18} />
            <span className={s.cartBadge}>0</span>
          </button>
          <button className={`${s.iconBtn} ${s.hamburger}`} aria-label="Menu"><IconMenu size={20} /></button>
        </div>
      </div>
    </header>
  );
}

/* ---------- 3. HERO ---------- */
function HeroSection() {
  return (
    <section className={s.hero}>
      <div className={s.heroBg} aria-hidden="true" />
      <div className={s.heroVignette} aria-hidden="true" />
      <div className={`${s.container} ${s.heroInner}`}>
        <div className={s.heroLeft}>
          <span className={`${s.uppercase} ${s.heroLabel}`}>Generation Perfect Ritual</span>
          <h1 className={`${s.serif} ${s.heroHeadline}`}>
            Pět kroků,<br />které dají vaší<br />
            <em>pleti řád.</em>
          </h1>
          <p className={s.heroSubclaim}>Promyšlená ranní a večerní péče bez kosmetického chaosu.</p>
          <p className={s.heroPara}>
            Generation Perfect Ritual je ucelený systém pěti kroků pro ráno
            i večer. Začněte bezpečně menším Travel Luxe Setem, nebo si
            dopřejte kompletní rituál v plném balení.
          </p>
          <div className={s.heroCtas}>
            <a href="/produkty/travel-luxe-set" className={s.btnPrimary}>
              Vyzkoušet Travel Luxe Set <span className={s.arrow}><IconArrowRight size={14} /></span>
            </a>
            <a href="/produkty/generation-perfect-ritual-kompletni-sada" className={s.btnSecondary}>
              Koupit kompletní rituál <span className={s.arrow}><IconArrowRight size={14} /></span>
            </a>
          </div>
          <a href="#concierge" className={s.guideLinkInline} style={{ marginTop: 18 }}>
            <IconCompass size={14} /> Nejsem si jistá, poradit s výběrem <span className={s.arrow}><IconArrowRight size={12} /></span>
          </a>
          <p style={{ marginTop: 14, fontSize: 12, color: "var(--color-text-muted-light)", maxWidth: 520, lineHeight: 1.55 }}>
            Travel Luxe Set obsahuje všech pět kroků v menším formátu — ideální,
            pokud J.Oli Origins zkoušíte poprvé.
          </p>
        </div>
      </div>
      <div className={s.heroSeal}>
        <div className={s.heroSealInner}>
          <span className={s.heroSealTitle}>Nová šarže<br />právě dostupná</span>
          <span className={s.heroSealSep} />
          <span className={s.heroSealMeta}>Ručně vyráběno<br />v&nbsp;ČR<br />Omezené množství</span>
        </div>
      </div>
      <div className={s.heroBadge}>
        <strong>Dárek</strong>
        <span>ke každé objednávce nad 2 500 Kč</span>
      </div>
    </section>
  );
}

/* ---------- 4. HERO TRUST STRIP ---------- */
function HeroTrustStrip() {
  const items = [
    { icon: IconCraft, title: "Ručně vyráběno v ČR", sub: "Malé šarže" },
    { icon: IconLeaf, title: "Vlastní botanické extrakty", sub: "Příroda v aktivní podobě" },
    { icon: IconMolecule, title: "Biotechnologie & fermentace", sub: "Moderní kosmetická věda" },
    { icon: IconLayers, title: "Korejské vrstvení", sub: "Každý krok připravuje další" },
    { icon: IconAroma, title: "Aromachologický rituál", sub: "Péče o pleť i smysly" },
  ];
  return (
    <section className={s.trustStrip}>
      <div className={`${s.container} ${s.trustGrid}`}>
        {items.map((it) => (
          <div key={it.title} className={s.trustItem}>
            <span className={s.trustIconCircle}><it.icon size={22} /></span>
            <div className={s.trustItemText}>
              <span className={s.trustItemTitle}>{it.title}</span>
              <span className={s.trustItemSub}>{it.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 5. SERVICE BENEFITS STRIP ---------- */
function ServiceBenefitsStrip() {
  const items = [
    { icon: IconTruck, t: "Doprava zdarma" },
    { icon: IconSample, t: "Vzorek zdarma ke každé objednávce" },
    { icon: IconReturn, t: "30 dní na vrácení" },
    { icon: IconLock, t: "Bezpečná platba online i dobírkou" },
    { icon: IconHeadset, t: "Zákaznická péče / osobní přístup" },
  ];
  return (
    <section className={s.serviceStrip}>
      <div className={`${s.container} ${s.serviceGrid}`}>
        {items.map((i) => (
          <span key={i.t} className={s.serviceItem}>
            <i.icon size={16} /> {i.t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- 6. WHY FIVE PRODUCTS ---------- */
function WhyFiveProductsSection() {
  const steps = [
    { num: "01", label: "Čištění", icon: IconCleansing },
    { num: "02", label: "Tonizace", icon: IconMist },
    { num: "03", label: "Hydratace", icon: IconDrop },
    { num: "04", label: "Denní péče", icon: IconSun },
    { num: "05", label: "Noční obnova", icon: IconMoon },
  ];
  return (
    <section className={s.lightSection}>
      <div className={`${s.container} ${s.whyGrid}`}>
        <div className={s.whyImageWrap}>
          <Image
            src="/assets/joliorigins/ai/longevity-face-ai.png"
            alt="Aplikace péče"
            width={720}
            height={900}
            sizes="(max-width: 1100px) 100vw, 360px"
          />
        </div>
        <div>
          <span className={s.eyebrow}>Filozofie značky</span>
          <h2 className={`${s.serif} ${s.sectionHeadline}`}>
            Proč jen <em>pět produktů?</em>
          </h2>
          <p className={s.bodyDark}>
            Protože pleť nepotřebuje další náhodně přidané produkty. Potřebuje
            pořadí, které dává smysl: očistit, připravit, hydratovat, chránit
            během dne a vyživit večer. Proto má Generation Perfect Ritual jen
            pět kroků — každý má vlastní roli a navazuje na další.
          </p>
          {/* Horizontal infografika ráno + večer */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
              marginTop: 22,
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            <div>
              <div
                style={{
                  color: "var(--color-gold-light)",
                  fontSize: 10.5,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                Ráno
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: 18,
                  color: "var(--color-cream)",
                  letterSpacing: "0.04em",
                }}
              >
                01 <span style={{ color: "var(--color-gold)" }}>→</span> 02{" "}
                <span style={{ color: "var(--color-gold)" }}>→</span> 03{" "}
                <span style={{ color: "var(--color-gold)" }}>→</span> 04
              </div>
            </div>
            <div>
              <div
                style={{
                  color: "var(--color-gold-light)",
                  fontSize: 10.5,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                Večer
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: 18,
                  color: "var(--color-cream)",
                  letterSpacing: "0.04em",
                }}
              >
                01 <span style={{ color: "var(--color-gold)" }}>→</span> 02{" "}
                <span style={{ color: "var(--color-gold)" }}>→</span> 03{" "}
                <span style={{ color: "var(--color-gold)" }}>→</span> 05
              </div>
            </div>
          </div>
          <p className={s.claim} style={{ marginTop: 18 }}>
            Nic navíc. Nic náhodného.<br />
            Jen pět kroků, které na sebe navazují.
          </p>
        </div>
        <div className={s.fiveSteps}>
          {steps.map((st) => (
            <div key={st.num} className={s.fiveStepRow}>
              <span className={s.fiveStepNum}>{st.num}</span>
              <st.icon size={18} />
              <span className={s.fiveStepLabel}>{st.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. RITUAL STEPS ---------- */
function RitualStepsSection() {
  return (
    <section className={`${s.darkSection} ${s.deepDark}`}>
      <div className={s.container}>
        <div className={s.ritualHeader}>
          <div className={s.ritualTitleBlock}>
            <span className={`${s.uppercase} ${s.gold}`}>Generation Perfect</span>
            <h2 className={`${s.serif} ${s.sectionHeadline}`} style={{ color: "var(--color-cream)", marginTop: 16 }}>
              Rituál v <em>pěti krocích</em>
            </h2>
            <p className={s.bodyLight} style={{ marginTop: 12, maxWidth: 620 }}>
              Každý krok má přesné místo v architektuře péče. Společně tvoří systém pro
              ráno i večer — od čisté pleti přes hydrataci až po denní jas a noční obnovu.
            </p>
          </div>
          <a href="/produkty" className={s.linkArrow}>
            Zobrazit všechny produkty <span className={s.arrow}><IconArrowRight size={14} /></span>
          </a>
        </div>

        <div className={s.ritualGrid}>
          {products.map((p, i) => {
            const Icon = phaseIcons[i];
            const slugs = [
              "no1-dvoufazova-myci-emulze",
              "no2-bioaktivni-tonikum",
              "no3-collagel-hydratacni-serum",
              "no4-denni-vitaminove-serum-coq10",
              "no5-nocni-regeneracni-serum",
            ];
            return (
              <a
                key={p.step}
                href={`/produkty/${slugs[i]}`}
                className={s.ritualCard}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className={s.ritualImg}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 20vw"
                  />
                </div>
                <div className={s.ritualCardTop}>
                  <span className={s.ritualNum}>{p.step}</span>
                  <span className={s.ritualIcon}><Icon size={22} /></span>
                </div>
                <div className={s.ritualBody}>
                  <span className={s.ritualPhase}>{p.phase}</span>
                  <h3 className={s.ritualName}>{p.name}</h3>
                  <p className={s.ritualDesc}>{p.description}</p>
                  <span className={s.ritualLink}>
                    Detail kroku <span className={s.arrow}><IconArrowRight size={12} /></span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7b. LONGEVITY ARCHITECTURE ---------- */
function LongevityArchitectureSection() {
  const pillars = [
    { icon: IconDrop, t: "Hydratace", d: "Hydratovaný vzhled je základem pleti, která působí plnější, jemnější a komfortnější." },
    { icon: IconShield, t: "Kožní bariéra", d: "Rituál podporuje pocit klidu a komfortu pleti, která je méně zatížená kosmetickým chaosem." },
    { icon: IconSparkle, t: "Antioxidační péče", d: "Denní krok pomáhá chránit vzhled pleti před každodenním stresem prostředí." },
    { icon: IconLeaf, t: "Výživa a pružnost", d: "Noční péče dodává smyslový komfort, výživu a podporuje pružně působící vzhled pleti." },
    { icon: IconCycle, t: "Rytmus a pravidelnost", d: "Dlouhodobě krásná pleť nevzniká náhodným střídáním produktů, ale opakovaným rituálem." },
    { icon: IconAroma, t: "Smyslový prožitek", d: "Textury a vůně nejsou detail navíc. Jsou součástí rituálu, ke kterému se chcete vracet." },
  ];
  return (
    <section className={s.longevitySection}>
      <div className={s.container}>
        <div className={s.longevityHead}>
          <span className={`${s.uppercase} ${s.gold}`}>Skin longevity approach</span>
          <h2 className={`${s.serif} ${s.sectionHeadline}`} style={{ color: "var(--color-cream)", marginTop: 14 }}>
            Longevity <em>architektura pleti</em>
          </h2>
          <p className={s.bodyLight} style={{ marginTop: 14, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            Dlouhověkost pleti nezačíná jedním zázračným produktem. Začíná pravidelným rituálem,
            který podporuje hydrataci, komfort, bariéru, jas a pružně působící vzhled v čase.
          </p>
        </div>

        <div className={s.longevityGrid}>
          {pillars.map((p) => (
            <article key={p.t} className={s.longevityCard}>
              <span className={s.longevityIconCircle}><p.icon size={24} /></span>
              <h3 className={s.longevityTitle}>{p.t}</h3>
              <p className={s.longevityDesc}>{p.d}</p>
            </article>
          ))}
        </div>

        <div className={s.longevityFooter}>
          <p className={s.longevityClaim}>
            Longevity není slib okamžité změny.<br />
            Je to přístup k péči, který dává pleti řád, komfort a čas.
          </p>
          <a className={s.btnSecondary}>
            Jak rituál funguje <span className={s.arrow}><IconArrowRight size={14} /></span>
          </a>
        </div>

        <div className={s.guidePanel} style={{ marginTop: 32 }}>
          <span className={s.guideIcon}><IconSparkle size={26} /></span>
          <div className={s.guideBody}>
            <span className={`${s.uppercase} ${s.gold}`}>Longevity profil</span>
            <h3>Zjistěte svůj longevity profil</h3>
            <p>
              Každá pleť potřebuje jiný důraz: hydrataci, bariéru, jas, výživu nebo
              pravidelnost. Průvodce vám ukáže, které pilíře rituálu jsou pro vás
              nejdůležitější.
            </p>
          </div>
          <div className={s.guideCtaSlot}>
            <a href="#concierge" className={s.btnSecondary}>
              Zjistit můj profil <span className={s.arrow}><IconArrowRight size={14} /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 8+9. MORNING/EVENING + START OPTIONS (combined) ---------- */
function MorningStartCombo() {
  const startCards = [
    {
      label: "Nejlepší první nákup",
      title: "Zkoušíte J.Oli poprvé?",
      text: "Začněte menším setem všech pěti kroků. Poznáte textury, vůně i pořadí vrstvení, než se rozhodnete pro plné balení.",
      cta: "Vyzkoušet za 2 490 Kč",
      img: "/assets/joliorigins/travel-luxe-set.png",
    },
    {
      label: "Úspora 3 750 Kč oproti nákupu jednotlivě",
      title: "Chcete celou péči bez skládání?",
      text: "Pět plných produktů pro ranní i večerní rituál. Výhodnější než nákup jednotlivě, připravené i jako dárek.",
      cta: "Koupit kompletní rituál",
      img: "/assets/joliorigins/hero/hero-set.png",
    },
    {
      label: "Osobní přístup",
      title: "Nejste si jistá?",
      text: "Napište nám pár informací o své pleti. Doporučíme, zda začít Travel Luxe Setem, kompletní sadou nebo jen vybraným krokem.",
      cta: "Požádat o doporučení",
      img: "/assets/joliorigins/products/no2.png",
    },
  ];
  return (
    <section className={s.comboSection}>
      <div className={s.comboGrid}>
        {/* LEFT — Morning / Evening */}
        <div className={s.comboLeft}>
          <div className={s.comboLeftInner}>
            <div className={s.comboLeftHeader}>
              <span className={s.eyebrow}>Rytmus dne</span>
              <h2 className={`${s.serif} ${s.sectionHeadline}`}>
                Jeden rituál<br />pro <em>ráno i večer</em>
              </h2>
              <p className={s.bodyDark} style={{ marginTop: 12 }}>
                Produkty se doplňují v přesném pořadí — pleť dostane,
                co potřebuje v každou část dne.
              </p>
            </div>

            <div className={s.meCard}>
              <span className={s.meCardLabel}><IconSun size={16} /> Ranní rituál</span>
              <div className={s.meStepsList}>
                <div className={s.meStepLine}><span className={s.meStepNum}>01</span><span className={s.meStepName}>No1 Dvoufázová mycí emulze</span></div>
                <div className={s.meStepLine}><span className={s.meStepNum}>02</span><span className={s.meStepName}>No2 Bioaktivní tonikum</span></div>
                <div className={s.meStepLine}><span className={s.meStepNum}>03</span><span className={s.meStepName}>No3 Collagel hydratační sérum</span></div>
                <div className={s.meStepLine}><span className={s.meStepNum}>04</span><span className={s.meStepName}>No4 Denní vitaminové sérum + CoQ10</span></div>
              </div>
              <p className={s.meDesc}>
                Ráno pleť jemně probudíte, hydratujete a připravíte na celý den.
              </p>
              <a className={s.linkArrowDark}>
                Zobrazit detail ranní péče <span className={s.arrow}><IconArrowRight size={12} /></span>
              </a>
            </div>

            <div className={s.meCard}>
              <span className={s.meCardLabel}><IconMoon size={16} /> Večerní rituál</span>
              <div className={s.meStepsList}>
                <div className={s.meStepLine}><span className={s.meStepNum}>01</span><span className={s.meStepName}>No1 Dvoufázová mycí emulze</span></div>
                <div className={s.meStepLine}><span className={s.meStepNum}>02</span><span className={s.meStepName}>No2 Bioaktivní tonikum</span></div>
                <div className={s.meStepLine}><span className={s.meStepNum}>03</span><span className={s.meStepName}>No3 Collagel hydratační sérum</span></div>
                <div className={s.meStepLine}><span className={s.meStepNum}>04</span><span className={s.meStepName}>No5 Noční regenerační sérum</span></div>
              </div>
              <p className={s.meDesc}>
                Večer pleť očistíte, zklidníte a dopřejete jí výživnou regenerační péči.
              </p>
              <a className={s.linkArrowDark}>
                Zobrazit detail večerní péče <span className={s.arrow}><IconArrowRight size={12} /></span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — Vyberte si, jak začít */}
        <div className={s.comboRight}>
          <span className={s.eyebrow}>Tři cesty</span>
          <h2 className={`${s.serif} ${s.sectionHeadline}`}>
            Vyberte si, <em>jak začít</em>
          </h2>
          <p className={s.bodyDark} style={{ marginTop: 12 }}>
            Jeden rituál. Tři způsoby, jak do něj vstoupit.
          </p>

          <div className={s.startGridSide}>
            {startCards.map((c) => (
              <article key={c.title} className={s.startCardLight}>
                <div className={s.startCardLightImg}>
                  <Image src={c.img} alt={c.title} width={400} height={300} />
                </div>
                <div className={s.startCardLightBody}>
                  <span className={s.startCardLightLabel}>{c.label}</span>
                  <h3 className={s.startCardLightTitle}>{c.title}</h3>
                  <p className={s.startCardLightText}>{c.text}</p>
                  <button className={s.startCardLightCta}>{c.cta}</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. COMPLETE RITUAL SALES PANEL ---------- */
function CompleteRitualSection() {
  const benefits = [
    { icon: IconCraft, t: "Malé šarže", d: "Ručně vyráběno v omezeném množství s důrazem na čerstvost a kontrolu." },
    { icon: IconMolecule, t: "Příroda × věda", d: "Botanické extrakty, fermentované složky, peptidy a moderní kosmetická biotechnologie." },
    { icon: IconLayers, t: "Synergie pěti kroků", d: "Produkty nejsou náhodné. Každý krok připravuje pleť na další." },
    { icon: IconAroma, t: "Smyslový rituál", d: "Textury a vůně jsou navržené jako součást každodenního prožitku péče." },
  ];
  return (
    <section className={s.darkSection} style={{ paddingTop: 44, paddingBottom: 44 }}>
      <div className={s.container}>
        {/* Main hero-style stripe with photo background */}
        <div className={s.completeStripe}>
          <div className={s.completeStripeBg} aria-hidden="true" />
          <div className={s.completeStripeInner}>
            <div className={s.completeStripeBody}>
              <span className={`${s.uppercase} ${s.gold}`}>Generation Perfect Ritual</span>
              <h2>Kompletní <em>longevity sada</em></h2>
              <div className={s.completeRating}>
                <span className="stars">★★★★★</span>
                <span>{ritualSet.rating} z {ritualSet.reviews} recenzí</span>
              </div>
              <p className={s.bodyLight} style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Pět produktů navržených tak, aby pracovaly společně. Ranní i večerní
                péče inspirovaná longevity přístupem, korejským vrstvením a spojením
                přírody s kosmetickou vědou.
              </p>
              <ul className={s.compactCheck}>
                <li><IconCheck size={14} /> 5 plných balení · ranní i večerní rituál</li>
                <li><IconCheck size={14} /> Cca 92 dní pravidelného používání</li>
                <li><IconCheck size={14} /> Cca 98 Kč / den</li>
                <li><IconCheck size={14} /> Jednotlivě 12 750 Kč · sada 9 000 Kč</li>
                <li><IconCheck size={14} /> Úspora 3 750 Kč oproti nákupu jednotlivě</li>
              </ul>
              <div className={s.completePriceLine}>
                <span className={s.bigPrice}>{ritualSet.price}</span>
                <span className={s.priceUnit}>úspora 3 750 Kč oproti nákupu jednotlivě</span>
              </div>
              <p className={s.priceMicro} style={{ marginTop: 4 }}>Kompletní rituál — ranní i večerní péče bez skládání.</p>
              <div className={s.completeStripeCtas}>
                <a href="/produkty/generation-perfect-ritual-kompletni-sada" className={s.btnPrimary}>Koupit kompletní rituál <span className={s.arrow}><IconArrowRight size={14} /></span></a>
                <a href="/produkty/travel-luxe-set" className={s.btnSecondary}>Nejdřív vyzkoušet Travel Luxe Set <span className={s.arrow}><IconArrowRight size={14} /></span></a>
              </div>
            </div>
          </div>
        </div>

        {/* Compact benefits strip */}
        <div className={s.completeBenefitsStrip}>
          <span className={s.completeBenefitsHead}>Proč to stojí za to?</span>
          <div className={s.completeBenefitsGrid}>
            {benefits.map((b) => (
              <div key={b.t} className={s.completeBenefitInline}>
                <b.icon size={20} />
                <div>
                  <h4>{b.t}</h4>
                  <p>{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 11. INDIVIDUAL PRODUCTS ---------- */
function IndividualProductsSection() {
  return (
    <section className={s.darkSection}>
      <div className={s.container}>
        <span className={`${s.uppercase} ${s.gold}`}>Jednotlivě</span>
        <h2 className={`${s.serif} ${s.sectionHeadline}`} style={{ color: "var(--color-cream)", marginTop: 16 }}>
          Jednotlivé produkty <em>rituálu</em>
        </h2>
        <p className={s.bodyLight} style={{ maxWidth: 620, marginTop: 12 }}>
          Každý produkt můžete koupit samostatně, nejlépe však fungují jako součást
          kompletního rituálu.
        </p>
        <div className={s.indivGrid}>
          {products.map((p, i) => {
            const slugs = [
              "no1-dvoufazova-myci-emulze",
              "no2-bioaktivni-tonikum",
              "no3-collagel-hydratacni-serum",
              "no4-denni-vitaminove-serum-coq10",
              "no5-nocni-regeneracni-serum",
            ];
            return (
              <article key={p.name} className={s.indivCard}>
                <a
                  href={`/produkty/${slugs[i]}`}
                  style={{ position: "absolute", inset: 0, zIndex: 1 }}
                  aria-label={p.name}
                />
                <div className={s.indivImg}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 20vw"
                  />
                </div>
                <span className={s.indivBadge}>{p.badge}</span>
                <div className={s.indivBody} style={{ position: "relative", zIndex: 2 }}>
                  <h3 className={s.indivName}>{p.name}</h3>
                  <span className={s.indivPrice}>{p.price}</span>
                  <button className={s.indivAdd} type="button">Přidat do košíku</button>
                  <a href="#concierge" className={s.askGuide}>
                    <IconHelp size={12} /> Nejste si jistá? Zeptat se průvodce
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <div className={s.indivCtaRow}>
          <a href="/produkty" className={s.btnPrimaryLarge}>
            Zobrazit všechny produkty <span className={s.arrow}><IconArrowRight size={16} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- 11b. PŘÍRODA × VĚDA ---------- */
function PrirodaVedaSection() {
  const items = [
    {
      icon: IconLeaf,
      t: "Vlastní botanické extrakty",
      d: "Byliny, maceráty a hydroláty připravované v menších objemech s důrazem na čerstvost, vůni a charakter.",
    },
    {
      icon: IconMolecule,
      t: "Biotechnologie & fermentace",
      d: "Moderní kosmetické složky, fermentované ingredience, peptidy a symbiotika jako součást longevity-inspired přístupu.",
    },
    {
      icon: IconAroma,
      t: "Aromachologie rituálu",
      d: "Vůně jednotlivých kroků podporuje smyslový prožitek — od ranní energie po večerní zklidnění.",
    },
    {
      icon: IconDrop,
      t: "Čistota, transparentnost a respekt",
      d: "Složení bez zbytečností, s jemnou roli každé složky. Respekt k pleti, přírodě i vědě naším pohledem péče.",
    },
  ];
  return (
    <section className={s.darkSection} style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className={`${s.container} ${s.prirodaWrap}`}>
        <div className={s.prirodaLeft}>
          <span className={`${s.uppercase} ${s.gold}`}>Filozofie složení</span>
          <h2 className={`${s.serif} ${s.sectionHeadline}`} style={{ color: "var(--color-cream)", marginTop: 14 }}>
            Příroda <em>× kosmetická věda</em>
          </h2>
          <p className={s.bodyLight} style={{ marginTop: 12, maxWidth: 560 }}>
            Generation Perfect spojuje botanické suroviny, vlastní extrakty a moderní
            aktivní látky do rituálu, který je smyslový, funkční a promyšlený.
          </p>

          <ul className={s.prirodaList}>
            {items.map((it) => (
              <li key={it.t} className={s.prirodaItem}>
                <span className={s.prirodaItemIcon}><it.icon size={22} /></span>
                <div>
                  <h3 className={s.prirodaItemTitle}>{it.t}</h3>
                  <p className={s.prirodaItemDesc}>{it.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={s.prirodaFooter}>
            <p className={s.prirodaClaim}>
              Příroda nám dává inspiraci.<br />
              Kosmetická věda jí dává smysl.
            </p>
            <a className={s.linkArrow}>
              Více o složení <span className={s.arrow}><IconArrowRight size={12} /></span>
            </a>
          </div>
        </div>

        <div className={s.prirodaImage}>
          <Image
            src="/assets/joliorigins/ai/journal-glassware-ai.png"
            alt="Botanické extrakty a kosmetická věda"
            width={800}
            height={1100}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- 12. VALUE TILES ---------- */
function ValueTilesSection() {
  const tiles = [
    { icon: IconLeaf, t: "Proč stojí za prémiovou cenu?", d: "Každý detail má svůj důvod. Od složení po obal.", cta: "Zjistit proč" },
    { icon: IconRitual, t: "Co můžete očekávat?", d: "Reálné výsledky při pravidelném používání.", cta: "Více o výsledcích" },
    { icon: IconDerma, t: "Pro koho je rituál vhodný?", d: "Pro pleť, která potřebuje klid, hydrataci a řád.", cta: "Zobrazit" },
    { icon: IconHeadset, t: "Osobní doporučení", d: "Nejste si jistá? Pomůžeme vám začít správně.", cta: "Požádat o doporučení" },
    { icon: IconGift, t: "Dárkové balení", d: "Kompletní sada je připravena jako luxusní dárek.", cta: "Zjistit více" },
    { icon: IconStory, t: "Klub J.Oli Origins", d: "Přednostní přístup k novým šaržím a rituálům.", cta: "Připojit se" },
  ];
  return (
    <section className={s.lightSection}>
      <div className={s.container}>
        <span className={s.eyebrow}>Informace</span>
        <h2 className={`${s.serif} ${s.sectionHeadline}`}>
          Vše, <em>co potřebujete vědět</em>
        </h2>
        <div className={s.valueGrid}>
          {tiles.map((t) => (
            <article key={t.t} className={s.valueTile}>
              <span className={s.valueIcon}><t.icon size={26} /></span>
              <h3 className={s.valueTitle}>{t.t}</h3>
              <p className={s.valueDesc}>{t.d}</p>
              <a className={s.linkArrowDark}>{t.cta} <span className={s.arrow}><IconArrowRight size={12} /></span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 13. GIFT PROGRESS ---------- */
function GiftProgressSection() {
  return (
    <section className={s.darkSection} style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className={s.container}>
        <div className={s.giftPanel}>
          <div className={s.giftBody}>
            <h2 className={`${s.serif} ${s.sectionHeadline}`} style={{ color: "var(--color-cream)", marginTop: 0 }}>
              Dárek <em>k objednávce</em>
            </h2>
            <p className={s.bodyLight} style={{ marginTop: 10, maxWidth: 520 }}>
              Ke každé objednávce nad 2 500 Kč získáte malý dárek,
              nebo vybraný vzorek zdarma.
            </p>
            <p style={{ marginTop: 22, color: "var(--color-cream)", fontSize: 14, letterSpacing: "0.04em" }}>
              Objednejte ještě za <strong style={{ color: "var(--color-gold-light)" }}>900 Kč</strong> a máte dárek zdarma.
            </p>
            <div className={s.giftBar}>
              <div className={s.giftBarFill} />
            </div>
            <div className={s.giftBarMilestones}>
              <span>0 Kč</span>
              <span className={s.giftMilestoneCenter}><IconGift size={14} /> 2 000 Kč</span>
              <span className={s.giftEndIcon}><IconGift size={14} /> 2 500 Kč</span>
            </div>
          </div>
          <div className={s.giftImg}>
            <Image src="/assets/joliorigins/ai/complete-set-box-ai.png" alt="Dárkové balení" width={700} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 14+15+16. RESULTS + REVIEWS + RECO (3-column light) ---------- */
function ResultsReviewsRecoSection() {
  const timeline = [
    { l: "Ihned po použití", d: "Pleť působí čistěji a klidněji, komfortněji a je připravená na další vrstvy péče." },
    { l: "Po 7 dnech", d: "Při pravidelném používání může pleť působit hydratovaněji, klidněji a méně unaveně." },
    { l: "Po 30 dnech", d: "Rituál pomáhá vytvořit stabilní návyk péče. Pleť může působit sjednoceněji, pružněji a vitálněji." },
    { l: "Po delším používání", d: "Pravidelnost, hydratace, výživa a ochrana pomáhají udržovat pleť v lepší kondici v čase." },
  ];
  return (
    <section className={s.lightSection}>
      <div className={s.container}>
        <div className={s.threeColLight}>
          {/* Co můžete očekávat */}
          <article className={s.colCard}>
            <span className={s.eyebrow}>Reálné výsledky</span>
            <h3>Co můžete očekávat při pravidelném rituálu</h3>
            <div className={s.timelineList}>
              {timeline.map((t) => (
                <div key={t.l} className={s.timelineItem}>
                  <span className={s.timelineDot} />
                  <div>
                    <h4>{t.l}</h4>
                    <p>{t.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={s.resultDisclaimer}>
              Každá pleť je individuální. Výsledky se mohou lišit podle typu pleti,
              pravidelnosti používání a celkového stavu pokožky.
            </p>
          </article>

          {/* Skutečné zkušenosti */}
          <article className={s.colCard}>
            <span className={s.eyebrow}>Zkušenosti</span>
            <h3>Skutečné zkušenosti s rituálem</h3>
            <div className={s.miniReview}>
              <span className="stars">★★★★★</span>
              <p>
                „Jitka mi vysvětlila postup celodenní péče. Zpočátku mi připadal složitý,
                ale brzy jsem ho přijala za svůj. Pleť je po večerním rituálu ráno krásně
                pružná a komfortní.“
              </p>
              <span className={s.miniReviewAuthor}>Nela, 37 let · Praha</span>
            </div>
            <div className={s.miniReview}>
              <span className="stars">★★★★★</span>
              <p>
                „Po používání kompletní sady se moje pleť viditelně rozjasnila. Produkty
                mají lehkou strukturu, příjemnou vůni a celý rituál mi dává smysl.“
              </p>
              <span className={s.miniReviewAuthor}>Markéta, 36 let · Praha</span>
            </div>
            <div className={s.miniReview}>
              <span className="stars">★★★★★</span>
              <p>
                „Oceňuji osobní přístup a doporučení na míru. Péče je příjemná,
                vrstvení je jasné a moje pleť je po ní jemná a hladká.“
              </p>
              <span className={s.miniReviewAuthor}>Alena, 51 let · Praha</span>
            </div>
            <a className={s.linkArrowDark} style={{ marginTop: "auto" }}>
              Zobrazit další recenze <span className={s.arrow}><IconArrowRight size={12} /></span>
            </a>
          </article>

          {/* Osobní doporučení */}
          <article className={s.colCard}>
            <span className={s.eyebrow}>Osobní přístup</span>
            <h3>Nevíte, zda je longevity rituál pro vás?</h3>
            <p className={s.bodyDark} style={{ fontSize: 13.5, lineHeight: 1.6 }}>
              Napište nám pár informací o své pleti. Doporučíme vám, jak s rituálem
              začít, jak produkty vrstvit a zda je pro vás vhodnější kompletní sada,
              Travel Luxe Set nebo jednotlivý krok.
            </p>
            <RecommendationForm />
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- 17. STORY / JOURNAL / SALON ---------- */
function StoryJournalSalonSection() {
  return (
    <section className={`${s.darkSection} ${s.deepDark}`}>
      <div className={s.container}>
        <div className={s.sjsGrid}>
          {/* STORY */}
          <article className={s.sjsCard}>
            <div className={s.sjsBg}>
              <Image src="/assets/joliorigins/dsc01164.jpg" alt="Příběh značky · zakladatelka J.Oli Origins" width={700} height={900} />
            </div>
            <div className={s.sjsOverlay} />
            <div className={s.sjsBody}>
              <span className={`${s.uppercase} ${s.gold}`}><IconStory size={14} style={{ marginRight: 8, verticalAlign: "middle" }} />Příběh značky</span>
              <h3 className={s.sjsTitle} style={{ marginTop: 14 }}>Z osobní potřeby vznikla značka. Z pěti produktů rituál.</h3>
              <p className={s.sjsDesc}>
                J.Oli Origins založila Jitka Vrňáková. Název značky vznikl spojením
                jmen Julie a Oliver — jejích dětí. Hledání šetrné a účinné péče
                přerostlo ve vývoj vlastních receptur a pětikrokového rituálu.
              </p>
              <a className={s.linkArrow}>Poznat příběh značky <span className={s.arrow}><IconArrowRight size={12} /></span></a>
            </div>
          </article>

          {/* JOURNAL */}
          <article className={s.sjsCard}>
            <div className={s.sjsBg}>
              <Image src="/assets/joliorigins/ai/journal-botanical-ai.png" alt="Žurnál" width={900} height={900} />
            </div>
            <div className={s.sjsOverlay} />
            <div className={s.sjsBody}>
              <a href="/zurnal" className={s.sjsLink}>
                <span className={`${s.uppercase} ${s.gold}`}><IconJournal size={14} style={{ marginRight: 8, verticalAlign: "middle" }} />Žurnál</span>
                <h3 className={s.sjsTitle} style={{ marginTop: 14 }}>Vědomá péče začíná porozuměním.</h3>
              </a>
              <div className={s.journalArticlesBox}>
                <a href="/zurnal/proc-plet-nepotrebuje-deset-kroku" className={s.journalArticle}>
                  <span className={s.journalThumb}><Image src="/assets/joliorigins/ai/journal-spheres-ai.png" alt="" width={120} height={120} /></span>
                  <span className={s.journalTitle}>Proč pleť nepotřebuje deset kroků — jak jednoduchý rituál vrací péči řád</span>
                </a>
                <a href="/zurnal/ranni-vs-vecerni-pece" className={s.journalArticle}>
                  <span className={s.journalThumb}><Image src="/assets/joliorigins/ai/journal-glassware-ai.png" alt="" width={120} height={120} /></span>
                  <span className={s.journalTitle}>Ranní vs. večerní péče — jak budovat rytmus, který pleti vyhovuje</span>
                </a>
                <a href="/zurnal/hydratace-bariera-longevity" className={s.journalArticle}>
                  <span className={s.journalThumb}><Image src="/assets/joliorigins/midnight-7.jpg" alt="" width={120} height={120} /></span>
                  <span className={s.journalTitle}>Hydratace, bariéra a longevity — proč dlouhodobá vitalita pleti začíná pravidelností</span>
                </a>
                <a href="/zurnal/priroda-veda-v-kosmetice" className={s.journalArticle}>
                  <span className={s.journalThumb}><Image src="/assets/joliorigins/ai/journal-botanical-ai.png" alt="" width={120} height={120} /></span>
                  <span className={s.journalTitle}>Příroda × věda v kosmetice — botanické extrakty, fermentace a aktivní látky</span>
                </a>
              </div>
              <a href="/zurnal" className={s.linkArrow}>Číst žurnál <span className={s.arrow}><IconArrowRight size={12} /></span></a>
            </div>
          </article>

          {/* SALON */}
          <article className={`${s.sjsCard} ${s.sjsCardSalon}`}>
            <div className={s.sjsBg}>
              <Image src="/assets/joliorigins/salon/salony-spoluprace.png" alt="Pro salony · profesionální péče" width={700} height={900} />
            </div>
            <div className={s.sjsOverlay} />
            <div className={s.sjsBody}>
              <span className={`${s.uppercase} ${s.gold}`}><IconSalon size={14} style={{ marginRight: 8, verticalAlign: "middle" }} />Pro salony</span>
              <h3 className={s.sjsTitle} style={{ marginTop: 14 }}>Pro salony a profesionály</h3>
              <p className={s.sjsDesc}>
                Generation Perfect je profesionálním doplňkem salonní péče
                i domácím pokračováním rituálu. Pro salony, spa a beauty profesionály.
              </p>
              <ul className={s.salonBenefits}>
                <li>Profesionální prezentace rituálu</li>
                <li>Domácí pokračování salonní péče</li>
                <li>Prémiové balení a edukace</li>
                <li>Individuální spolupráce</li>
              </ul>
              <a className={s.linkArrow}>Více pro salony <span className={s.arrow}><IconArrowRight size={12} /></span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- 18. CLUB NEWSLETTER ---------- */
function ClubNewsletterSection() {
  return (
    <section className={s.darkSection} style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className={s.container}>
        <div className={s.clubPanel}>
          <div className={s.clubBody}>
            <span className={`${s.uppercase} ${s.gold}`}>Klub J.Oli Origins</span>
            <h2 className={`${s.serif} ${s.sectionHeadline}`} style={{ color: "var(--color-cream)", marginTop: 14 }}>
              Buďte první u <em>nových šarží</em>
            </h2>
            <p className={s.bodyLight} style={{ marginTop: 10, maxWidth: 520 }}>
              Buďte první u nových šarží, Travel Luxe setů, limitovaných balení
              a longevity rituálů podle sezóny.
            </p>
            <ClubForm />
            <ul className={s.clubBenefits}>
              <li><IconCheck size={14} /> Přednostní přístup k nové šarži</li>
              <li><IconCheck size={14} /> Sezónní tipy a rituály</li>
              <li><IconCheck size={14} /> Připomenutí doplnění vašich produktů</li>
              <li><IconCheck size={14} /> Pozvánky a limitované nabídky</li>
            </ul>
          </div>
          <div className={s.clubImg}>
            <Image src="/assets/joliorigins/ai/hero-ritual.png" alt="Klub J.Oli Origins" width={900} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 19. FOOTER ---------- */
function Footer() {
  const cols = [
    { h: "Rituál", l: ["Jak rituál funguje", "Ranní použití", "Večerní použití", "Kompletní sada"] },
    { h: "Produkty", l: ["No1 Čištění", "No2 Tonizace", "No3 Hydratace", "No4 Denní péče", "No5 Noční obnova"] },
    { h: "Discovery", l: ["O sadě", "Jak funguje set", "Časté otázky"] },
    { h: "Příběh", l: ["Naše filozofie", "Suroviny", "Výroba"] },
    { h: "Žurnál", l: ["Péče o pleť", "Ingredience", "Rituály", "Novinky"] },
    { h: "Servis", l: ["Kontakt", "Doprava a platba", "Vrácení a reklamace", "Podmínky", "Ochrana osobních údajů"] },
  ];
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            <a className={s.logo}>J·OLI<span>ORIGINS</span></a>
            <p className={s.footerTagline}>
              Pět kroků. Dokonalá synergie. Longevity rituál pro pleť, která má
              působit svěže, pevně a vitálně i v čase.
            </p>
          </div>
          <div className={s.footerCols}>
            {cols.map((c) => (
              <div key={c.h} className={s.footerCol}>
                <h4>{c.h}</h4>
                <ul>{c.l.map((it) => <li key={it}><a>{it}</a></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className={s.footerBottom}>
          <span>© {new Date().getFullYear()} J.Oli Origins · Vyrobeno v ČR <IconFlag size={12} style={{ verticalAlign: "middle", marginLeft: 6 }} /></span>
          <span className={s.payments}>
            <span className={s.paymentBadge}>Visa</span>
            <span className={s.paymentBadge}>Mastercard</span>
            <span className={s.paymentBadge}>Apple Pay</span>
            <span className={s.paymentBadge}>Google Pay</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- PAGE ---------- */
export default function V2Page() {
  return (
    <div className={s.root}>
      <div className={s.stickyTop}>
        <TopAnnouncementBar />
        <CartProgressBar />
        <MainHeader />
      </div>
      <HeroSection />
      <HeroTrustStrip />
      <ServiceBenefitsStrip />
      <WhyFiveProductsSection />
      <RitualStepsSection />
      <LongevityArchitectureSection />
      <MorningStartCombo />
      <CompleteRitualSection />
      <IndividualProductsSection />
      <PrirodaVedaSection />
      <ValueTilesSection />
      <GiftProgressSection />
      <ResultsReviewsRecoSection />
      <StoryJournalSalonSection />
      <ClubNewsletterSection />
      <Footer />
      <RitualConcierge />
    </div>
  );
}
