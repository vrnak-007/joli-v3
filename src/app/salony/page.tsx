/**
 * J.OLI ORIGINS v3 — /salony
 * Sekce per brief 19.
 */

import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";
import {
  IconCheck,
  IconArrowRight,
  IconHandshake,
  IconBookOpen,
  IconChair,
  IconFace,
  IconBottle,
  IconShoppingBag,
  IconGrowth,
  IconPeopleHeart,
  IconDiscount,
  IconLightning,
  IconHome,
  IconMegaphone,
  IconLocationPartner,
  IconGift,
  IconDiamond,
} from "../icons";

export const metadata: Metadata = {
  title: "Salony | J.OLI Origins",
  description:
    "Profesionální longevity rituál pro salony, které chtějí nabídnout víc než běžné ošetření.",
};

const benefits = [
  "Vyšší vnímaná hodnota ošetření",
  "Jasná domácí návaznost",
  "Retail bez tvrdého prodeje",
  "Odlišitelnost salonu",
  "Dlouhodobý vztah s klientkou",
];

const ritualSteps = [
  { no: "01", t: "Konzultace", d: "Krátký rozhovor o pleti klientky a o jejím cíli." },
  { no: "02", t: "Ošetření", d: "Salonní ošetření s J.OLI produkty." },
  { no: "03", t: "Doporučení domácí péče", d: "Klientka odchází se srozumitelným plánem rituálu." },
  { no: "04", t: "Follow-up", d: "Návaznost na další návštěvu a opakované nákupy." },
];

const businessFlow = [
  {
    no: "1",
    title: "Partnerství & onboarding",
    Icon: IconHandshake,
    text: "Vyberete si úroveň spolupráce. Provedeme vás celým procesem a připravíme váš salon na úspěch.",
  },
  {
    no: "2",
    title: "Školení & protokol",
    Icon: IconBookOpen,
    text: "Získáte školení, detailní protokoly ošetření a všechny materiály pro váš tým.",
  },
  {
    no: "3",
    title: "Zavedení do nabídky salonu",
    Icon: IconChair,
    text: "Zařadíte rituály do své nabídky, nastavíme ceny a připravíme komunikaci.",
  },
  {
    no: "4",
    title: "Salonní rituál pro klientku",
    Icon: IconFace,
    text: "Klientka zažije viditelný efekt, smyslový zážitek a profesionální péči J.OLI Origins.",
  },
  {
    no: "5",
    title: "Doporučení domácí péče",
    Icon: IconBottle,
    text: "Doporučíte jí 5krokový rituál na doma. Dostane pracovní list a doporučený postup.",
  },
  {
    no: "6",
    title: "Prodej na doma",
    Icon: IconShoppingBag,
    text: "Klientka nakoupí produkty domů. Vy získáte zisk z prodeje.",
  },
  {
    no: "7",
    title: "Návrat & růst dlouhodobě",
    Icon: IconGrowth,
    text: "Klientka se vrací na další rituály, rozšiřuje péči a doporučuje vás dál. Váš salon roste.",
  },
];

const businessBenefits = [
  {
    Icon: IconPeopleHeart,
    title: "Komise nebo nákup",
    text: "Zvolte si model, který vám vyhovuje. Produkty můžete mít na komisi nebo za zvýhodněné partnerské ceny.",
  },
  {
    Icon: IconDiscount,
    title: "Velké rabaty",
    text: "Atraktivní rabatové podmínky zajišťují vysokou marži a motivují kosmetičku k aktivnímu prodeji.",
  },
  {
    Icon: IconLightning,
    title: "Funguje okamžitě",
    text: "Viditelné výsledky po ošetření budují důvěru a přirozeně přivádí klientky zpět.",
  },
  {
    Icon: IconHome,
    title: "Prodej na doma",
    text: "Domácí rituál prodlužuje efekt ošetření a přináší salonu opakovaný příjem z prodeje.",
  },
  {
    Icon: IconMegaphone,
    title: "Kampaně na podporu salonů",
    text: "Pravidelné kampaně a obsah směřují nové klientky k vám — online i offline.",
  },
  {
    Icon: IconLocationPartner,
    title: "Cílem je partnerský salon",
    text: "Žádné slevy na e-shopu. Neparazitujeme na salonech, ale budujeme síť silných partnerství.",
  },
  {
    Icon: IconGift,
    title: "Dárek ke každé objednávce",
    text: "Vždy získáte dárek, který můžete předat své klientce.",
  },
  {
    Icon: IconDiamond,
    title: "Exkluzivní produkty navíc",
    text: "Signature partneři získávají prémiové produkty a rituály, které žádný jiný salon v okolí nenabízí. Vaše konkurenční výhoda začíná tady.",
  },
];

const partners = [
  {
    name: "Starter",
    intro: "Pro salon, který chce značku nejdřív otestovat.",
    condition:
      "Pokud chcete vyzkoušet, zda J.OLI klientkám sedí, bez velkého vstupního závazku.",
    features: [
      "Základní profesionální produkty",
      "Discovery / Travel Luxe Sety pro klientky",
      "Online školení a digitální materiály",
      "Vstupní rozsah: nižší — k upřesnění individuálně",
    ],
    recommended: false,
  },
  {
    name: "Ritual Partner",
    intro: "Pro salon, který chce J.OLI aktivně zařadit do nabídky.",
    condition:
      "Pokud chcete plnou retailovou nabídku, materiály pro klientky a aktivní podporu prodeje.",
    features: [
      "Profesionální SPA balení (No1, No2 500 ml)",
      "Retail sortiment + testery pro klientky",
      "Online + osobní školení, materiály, podpora prodeje",
      "Zařazení na mapu partnerů J.OLI",
      "Vstupní rozsah: střední — k upřesnění individuálně",
    ],
    recommended: true,
  },
  {
    name: "Signature Salon",
    intro: "Pro salon, který chce lokální exkluzivitu a odlišení.",
    condition:
      "Pokud chcete exkluzivní produkty, individuální podmínky a vyšší úroveň podpory.",
    features: [
      "Exkluzivní produkty dostupné pouze pro Signature salony",
      "Signature Exclusive Ritual v nabídce salonu",
      "Individuální obchodní podmínky a prioritní podpora",
      "Školení na místě / na míru a launch podpora",
      "Označení salonu jako Signature partnera J.OLI",
    ],
    recommended: false,
  },
];

export default function SalonsPage() {
  return (
    <>
      <StickyChrome active="salony" />

      {/* HERO */}
      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroSplit}>
            <div className={s.setCopy}>
              <span className={s.eyebrow}>Pro salony</span>
              <h1 className={s.heroTitle}>
                Profesionální longevity rituál pro salony.
              </h1>
              <p className={s.bodyCopy}>
                J.OLI ORIGINS propojuje prémiové salonní ošetření s domácím
                pokračováním péče. Klientka nezažije jen proceduru, ale
                odchází s jasným rituálem.
              </p>
              <div className={s.setCtas}>
                <a className={s.btnPrimary} href="#kontakt">
                  Poptat spolupráci
                </a>
              </div>
            </div>
            <div className={s.setVisual}>
              <img
                src="/v3/salons/salon_hero_desktop.jpg"
                alt="Profesionální salon s rituálem J.OLI"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROČ ZAŘADIT */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrowGold}>Proč zařadit J.OLI</span>
              <h2 className={s.h2Display} style={{ marginTop: 16 }}>
                Více než produkt — celý rituál.
              </h2>
            </div>
            <ul className={s.checkList}>
              {benefits.map((b) => (
                <li key={b}>
                  <IconCheck size={16} /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SALONNÍ RITUÁL */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Jak funguje salonní rituál</span>
            <h2 className={s.h2Display}>Čtyři kroky od konzultace k follow-upu.</h2>
          </div>
          <div className={s.stepperHorizontal} style={{ marginTop: 48 }}>
            {ritualSteps.map((step) => (
              <div key={step.no} className={s.ritualStep}>
                <span className={s.ritualStepNo}>{step.no}</span>
                <h3
                  className={s.choiceTitle}
                  style={{ fontSize: 19, margin: "4px 0" }}
                >
                  {step.t}
                </h3>
                <p className={s.smallText} style={{ textAlign: "center" }}>
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMÁCÍ POKRAČOVÁNÍ */}
      <section className={`${s.section} ${s.sectionIvory}`}>
        <div className={s.container}>
          <div className={s.twoCol}>
            <div>
              <span className={s.eyebrowGold}>Domácí pokračování</span>
              <h2 className={s.h2Display} style={{ marginTop: 16 }}>
                Klientka odchází s jasnou domácí péčí.
              </h2>
            </div>
            <p className={s.bodyCopy}>
              J.OLI má jasné pořadí kroků pro ráno a večer. Klientka nemusí
              doma řešit, co s čím kombinovat — má rituál, který jí dává
              smysl od první aplikace. Vy získáváte retail bez tvrdého
              prodeje a dlouhodobý vztah místo jednorázové procedury.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.bizHero}>
            <div className={s.bizHeroCopy}>
              <span className={s.eyebrowGold}>Business model</span>
              <h2 className={s.bizHeroTitle}>
                Partnerství, které vám přináší{" "}
                <em>více prodeje, klientek a růstu.</em>
              </h2>
              <p className={s.bodyCopy}>
                J.OLI Origins vám dává kompletní systém, který funguje v
                praxi. Vy se soustředíte na své klientky. My vám dodáme
                nástroje, podporu a strategii.
              </p>
            </div>
            <div className={s.bizHeroVisual}>
              <img
                src="/v3/salons/salon_hero_desktop.jpg"
                alt="Salon J.OLI Origins"
              />
            </div>
          </div>

          <div className={s.bizFlow}>
            <div className={s.bizFlowLabel}>
              <span className={s.bizFlowLabelLine} aria-hidden="true" />
              Jak to funguje — od partnerství k růstu vašeho salonu
              <span className={s.bizFlowLabelLine} aria-hidden="true" />
            </div>
            <div className={s.bizFlowSteps}>
              {businessFlow.map((step) => (
                <div key={step.no} className={s.bizFlowStep}>
                  <span className={s.bizFlowNo}>{step.no}</span>
                  <h4 className={s.bizFlowTitle}>{step.title}</h4>
                  <span className={s.bizFlowIcon}>
                    <step.Icon size={26} />
                  </span>
                  <p className={s.bizFlowText}>{step.text}</p>
                </div>
              ))}
              <div className={`${s.bizFlowStep} ${s.bizFlowResult}`}>
                <span className={s.bizFlowResultLabel}>Výsledek:</span>
                <strong className={s.bizFlowResultText}>
                  Více prodeje, více klientek, vyšší zisk.
                </strong>
                <span className={s.bizFlowIcon}>
                  <IconPeopleHeart size={26} />
                </span>
              </div>
            </div>
          </div>

          <div className={s.bizBenefits}>
            <div className={s.bizBenefitsHeader}>Co vám přinášíme</div>
            <div className={s.bizBenefitsGrid}>
              {businessBenefits.map((b) => (
                <div key={b.title} className={s.bizBenefit}>
                  <span className={s.bizBenefitIcon}>
                    <b.Icon size={24} />
                  </span>
                  <h5 className={s.bizBenefitTitle}>{b.title}</h5>
                  <p className={s.bizBenefitText}>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSKÉ MODELY */}
      <section className={`${s.section} ${s.sectionBone}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Partnerské modely</span>
            <h2 className={s.h2Display}>Tři úrovně spolupráce.</h2>
            <p className={s.smallText}>
              Konkrétní rabaty a obchodní podmínky doplníme po prvním
              kontaktu podle profilu salonu.
            </p>
          </div>
          <div className={s.partnerGrid}>
            {partners.map((p) => (
              <article
                key={p.name}
                className={
                  p.recommended
                    ? `${s.partnerCard} ${s.partnerCardDark}`
                    : s.partnerCard
                }
              >
                {p.recommended && (
                  <span className={s.partnerBadge}>Doporučeno</span>
                )}
                <h3 className={s.partnerTitle}>{p.name}</h3>
                <p className={s.partnerIntro}>{p.intro}</p>
                <p className={s.partnerCondition}>{p.condition}</p>
                <ul className={s.partnerFeatures}>
                  {p.features.map((f) => (
                    <li key={f}>
                      <IconCheck size={14} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className={s.partnerCardCta}>
                  <a
                    className={
                      p.recommended
                        ? `${s.partnerCtaBtn} ${s.partnerCtaBtnGold}`
                        : s.partnerCtaBtn
                    }
                    href="#kontakt"
                  >
                    Více informací <IconArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT FORM */}
      <section
        id="kontakt"
        className={`${s.section} ${s.sectionIvory}`}
      >
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <span className={s.eyebrow}>Poptat spolupráci</span>
            <h2 className={s.h2Display}>Napište nám o vašem salonu.</h2>
          </div>
          <form className={s.formCard} action="#" method="POST">
            <div className={s.formGrid}>
              <div className={s.formField}>
                <label htmlFor="salon">Název salonu</label>
                <input id="salon" name="salon" type="text" required />
              </div>
              <div className={s.formField}>
                <label htmlFor="contact">Kontaktní osoba</label>
                <input id="contact" name="contact" type="text" required />
              </div>
              <div className={s.formField}>
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className={s.formField}>
                <label htmlFor="phone">Telefon</label>
                <input id="phone" name="phone" type="tel" />
              </div>
              <div className={s.formField}>
                <label htmlFor="city">Město / lokalita</label>
                <input id="city" name="city" type="text" />
              </div>
              <div className={s.formField}>
                <label htmlFor="level">Úroveň, o kterou máte zájem</label>
                <select id="level" name="level">
                  <option>Starter</option>
                  <option>Ritual Partner</option>
                  <option>Signature Salon</option>
                  <option>Nejsem si jistá</option>
                </select>
              </div>
              <div
                className={`${s.formField} ${s.formFullWidth}`}
              >
                <label htmlFor="note">Poznámka</label>
                <textarea id="note" name="note" />
              </div>
            </div>
            <div className={s.formSubmit}>
              <button type="submit" className={s.btnPrimary}>
                Odeslat poptávku
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
