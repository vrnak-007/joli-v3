export type IconKey =
  | "spa" | "home-ritual" | "growth" | "support"
  | "value" | "home-care" | "loyalty"
  | "spa-pack" | "retail" | "protocol" | "client-sheet" | "sales-script" | "training" | "marketing" | "digital"
  | "rebate" | "pro-pack" | "starter" | "shipping" | "launch" | "visibility"
  | "guide" | "articles" | "follow-up" | "reorder" | "salon-support";

export type HeroBenefit = { icon: IconKey; title: string; text: string };
export const heroBenefits: HeroBenefit[] = [
  { icon: "spa",          title: "Profesionální péče", text: "SPA rituály s viditelným efektem a smyslovým zážitkem." },
  { icon: "home-ritual",  title: "Domácí rituál",      text: "Prodej navazující domácí péče, který prodlužuje efekt ošetření a přináší salonu další zisk." },
  { icon: "growth",       title: "Vyšší ziskovost",    text: "Více hodnoty pro klientku, více příležitostí pro salon." },
  { icon: "support",      title: "Kompletní podpora",  text: "Školení, materiály, marketing a digitální podpora." },
];

export type BusinessValue = { icon: IconKey; num: string; title: string; text: string };
export const businessValues: BusinessValue[] = [
  { icon: "value",     num: "01", title: "Vyšší hodnota ošetření", text: "Longevity rituál pozvedne vaše procedury na prémiovou úroveň a umožní vám pracovat s vyšší cenou a vyšší vnímanou hodnotou." },
  { icon: "home-care", num: "02", title: "Domácí pokračování péče", text: "Klientka odchází s jasným rituálem pro domácí používání. Přirozeně se vrací a doplňuje produkty, které udržují efekt ošetření." },
  { icon: "loyalty",   num: "03", title: "Opakovaný kontakt s klientkou", text: "Díky doporučení a digitální podpoře zůstáváte v kontaktu s klientkou a budujete dlouhodobý vztah a pravidelný příjem." },
];

export type SystemFeature = { icon: IconKey; title: string; text: string };
export const salonSystemFeatures: SystemFeature[] = [
  { icon: "spa-pack",     title: "Profesionální SPA balení", text: "No1 a No2 v 500 ml balení s dávkovačem a další produkty pro profesionální použití." },
  { icon: "retail",       title: "Retail + exkluzivní řada", text: "Kompletní pětikrokový rituál a Travel Luxe Set pro všechny partnery. Signature salony získávají exkluzivní řadu navíc, kterou konkurence nemá." },
  { icon: "protocol",     title: "Protokol ošetření",        text: "Detailní postup rituálu a práce s produkty pro maximální efekt a bezpečí." },
  { icon: "client-sheet", title: "Pracovní list klientky",   text: "Připravené listy pro doporučení domácí péče a plán další návštěvy." },
  { icon: "sales-script", title: "Prodejní argumentář",      text: "Jasné scénáře a věty, které kosmetičce pomohou doporučit rituál přirozeně." },
  { icon: "training",     title: "Školení a onboarding",     text: "Úvodní školení, pravidelné webináře a podpora při zavedení značky." },
  { icon: "marketing",    title: "Marketingové materiály",   text: "Fotky, texty, šablony pro sociální sítě, letáky, ceníky a další materiály." },
  { icon: "digital",      title: "Digitální podpora",        text: "Ritual Guide pro klientky, e-mail/SMS follow-up a připomínky doplnění." },
];

export type BusinessModelItem = { icon: IconKey; title: string; text: string };
export const businessModelItems: BusinessModelItem[] = [
  { icon: "rebate",     title: "Salonní rabat na retail produkty", text: "Partnerské podmínky s atraktivním rabatem pro váš prodej." },
  { icon: "pro-pack",   title: "Profesionální balení výhodněji",   text: "Ekonomická balení pro ošetření s lepší nákladovostí procedury." },
  { icon: "starter",    title: "Starter kit pro první zavedení",   text: "Kompletní startovací set produktů, materiálů a školení." },
  { icon: "shipping",   title: "Doprava zdarma",                   text: "Doprava zdarma pro salony od partnerského objednávkového limitu." },
  { icon: "launch",     title: "Launch podpora",                   text: "Pomoc s uvedením značky, komunikací a nastavením procedur a cen." },
  { icon: "visibility", title: "Partnerská viditelnost",           text: "Zařazení vašeho salonu na mapu partnerů J.Oli Origins." },
];

export type SalonRitual = {
  title: string;
  duration: string;
  text: string;
  image: string;
};
export const salonRituals: SalonRitual[] = [
  {
    title: "Generation Perfect Longevity Ritual",
    duration: "75 min",
    text: "Kompletní pětikrokový rituál pro hydrataci, výživu a viditelně vitálnější vzhled pleti.",
    image: "/assets/joliorigins/pro-salony/ritual-long.png",
  },
  {
    title: "Express Ritual",
    duration: "35 min",
    text: "Rychlé, účinné ošetření pro okamžité osvěžení a komfort pleti.",
    image: "/assets/joliorigins/pro-salony/ritual-express.png",
  },
  {
    title: "Evening Recovery Ritual",
    duration: "60 min",
    text: "Zklidňující večerně laděné ošetření pro regeneraci a hlubokou hydrataci.",
    image: "/assets/joliorigins/pro-salony/ritual-evening.png",
  },
  {
    title: "Signature Exclusive Ritual",
    duration: "90 min · pouze pro Signature salony",
    text: "Prémiový rituál s exkluzivními produkty, které najdete jen ve vybraných partnerských salonech. Jedinečná nabídka, kterou vaše konkurence nemá.",
    image: "/assets/joliorigins/pro-salony/ritual-travel.png",
  },
];

export const salesSteps = [
  { num: "01", title: "Vysvětlete rituál během ošetření", text: "Klientka rozumí krokům, které právě zažila, a jejich přínosům." },
  { num: "02", title: "Doporučte domácí pokračování",     text: "Jasně a jednoduše doporučte rituál na doma — ráno a večer." },
  { num: "03", title: "Nabídněte vhodný vstup",           text: "Celý rituál nebo bezpečný start přes Travel Luxe Set." },
];

export const salesChecklist = [
  "Ranní rituál: 01 → 02 → 03 → 04",
  "Večerní rituál: 01 → 02 → 03 → 05",
  "Péči začít menším množstvím",
  "Chránit pleť před nadměrným sluncem",
  "Další návštěva za 4–6 týdnů",
];

export const materialCards = [
  { title: "Pracovní list ošetření", subtitle: "PDF · A4 · 2 strany" },
  { title: "Domácí rituál pro klientku", subtitle: "PDF · A5 · 1 strana" },
  { title: "Ceník procedur", subtitle: "PDF · A4 · editovatelné" },
  { title: "Sociální sítě — posty & stories", subtitle: "Šablony · 12 ks" },
  { title: "Prodejní scénáře", subtitle: "PDF · 4 strany" },
];

export const onboardingSteps = [
  { num: "1", title: "Úvodní konzultace",            text: "Poznáme váš salon a vaše klientky." },
  { num: "2", title: "Výběr partnerského balíčku",   text: "Starter, Ritual Partner nebo Signature Salon." },
  { num: "3", title: "Školení a protokol ošetření",  text: "Produkty, postupy, doporučení, retail prodej." },
  { num: "4", title: "Příprava materiálů",           text: "Ceník, listy, sociální sítě, doporučovací karty." },
  { num: "5", title: "Launch v salonu",              text: "Oznámení klientkám, první ošetření, budování rytmu." },
  { num: "6", title: "Vyhodnocení po 30 dnech",      text: "Společně upravíme strategii a doporučení." },
];

export const economicsSteps = [
  { num: "1", title: "Ošetření v salonu",       text: "Klientka zažije longevity rituál a jeho smyslový efekt." },
  { num: "2", title: "Doporučení domácí péče",  text: "Dostane pracovní list a doporučený rituál na míru." },
  { num: "3", title: "První nákup",             text: "Travel Luxe Set nebo klíčový krok rituálu." },
  { num: "4", title: "Doplnění & upgrade",      text: "Celý rituál nebo další kroky, které chybí." },
  { num: "5", title: "Návrat do salonu",        text: "Kontrola, další ošetření, nový cíl péče." },
];

export type PartnerLevel = {
  id: "starter" | "ritual" | "signature";
  name: string;
  tagline: string;
  forWhom: string;
  highlighted?: boolean;
  features: string[];
};
export const partnerLevels: PartnerLevel[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Pro salon, který chce značku nejdřív otestovat.",
    forWhom: "Pokud chcete vyzkoušet, zda J.Oli klientkám sedí, bez velkého vstupního závazku.",
    features: [
      "Základní profesionální produkty",
      "Discovery / Travel Luxe Sety pro klientky",
      "Online školení a digitální materiály",
      "Vstupní rozsah: nižší — k upřesnění individuálně",
    ],
  },
  {
    id: "ritual",
    name: "Ritual Partner",
    tagline: "Pro salon, který chce J.Oli aktivně zařadit do nabídky.",
    forWhom: "Pokud chcete plnou retailovou nabídku, materiály pro klientky a aktivní podporu prodeje.",
    highlighted: true,
    features: [
      "Profesionální SPA balení (No1, No2 500 ml)",
      "Retail sortiment + testery pro klientky",
      "Online + osobní školení, materiály, podpora prodeje",
      "Zařazení na mapu partnerů J.Oli",
      "Vstupní rozsah: střední — k upřesnění individuálně",
    ],
  },
  {
    id: "signature",
    name: "Signature Salon",
    tagline: "Pro salon, který chce lokální exkluzivitu a odlišení.",
    forWhom: "Pokud chcete exkluzivní produkty, individuální podmínky a vyšší úroveň podpory.",
    features: [
      "Exkluzivní produkty dostupné pouze pro Signature salony",
      "Signature Exclusive Ritual v nabídce salonu",
      "Individuální obchodní podmínky a prioritní podpora",
      "Školení na místě / na míru a launch podpora",
      "Označení salonu jako Signature partnera J.Oli",
    ],
  },
];

export type EconomicStep = {
  num: string;
  title: string;
  text: string;
};
export const economicScenario: EconomicStep[] = [
  {
    num: "1",
    title: "Procedura v salonu",
    text: "Klientka si rezervuje longevity rituál v jasném postupu. Cena ošetření odráží prémiový charakter péče a domácí pokračování.",
  },
  {
    num: "2",
    title: "Doporučení domácí péče",
    text: "Po ošetření klientka dostane pracovní list a doporučený rituál ráno/večer. Žádný tlak u pokladny — kosmetička doporučuje to, co klientka právě zažila.",
  },
  {
    num: "3",
    title: "První retail nákup",
    text: "Část klientek si pořídí Travel Luxe Set jako bezpečný první krok. Salon má první příjem z retailu.",
  },
  {
    num: "4",
    title: "Upgrade na plnou sadu",
    text: "Po cca 3 týdnech klientka přechází na kompletní rituál. Salon má druhý retail prodej s vyšší marží.",
  },
  {
    num: "5",
    title: "Návrat za 4–6 týdnů",
    text: "Klientka se vrací na další ošetření a doplnění produktů. Salon buduje opakovaný kontakt a stálý retail příjem.",
  },
];

export const economicScenarioNote =
  "Příklad cesty klientky. Konkrétní marže, rabaty a vstupní rozsah upřesníme individuálně podle partnerské úrovně.";

export type DigitalSupportItem = { icon: IconKey; title: string; text: string };
export const digitalSupportItems: DigitalSupportItem[] = [
  { icon: "guide",         title: "Ritual Guide",          text: "Doporučení rituálu na míru podle potřeb pleti klientky." },
  { icon: "articles",      title: "Doporučené články",     text: "Edukace k péči, ingrediencím a správnému používání." },
  { icon: "follow-up",     title: "Follow-up po ošetření", text: "E-mail/SMS doporučení, jak pečovat, co sledovat a kdy přijít." },
  { icon: "reorder",       title: "Připomenutí doplnění",  text: "Chytré upozornění podle spotřeby a pravidelnosti péče." },
  { icon: "salon-support", title: "Podpora pro salon",     text: "AI návrhy textů, kampaní a obsahu pro vaše klientky." },
];

export const formBenefits = [
  "Partnerské podmínky na míru",
  "Školení a materiály",
  "Podpora při zavedení",
  "Doprava zdarma od partnerského limitu",
  "Pro Signature salony exkluzivní produkty navíc",
];

/* ============================================================
   BUSINESS MODEL FLOW (replaces the old 6-item model grid)
============================================================ */
export type FlowIcon =
  | "handshake" | "book" | "chair" | "face" | "bottle"
  | "bag" | "growth" | "people-heart"
  | "coins" | "discount" | "lightning" | "home"
  | "megaphone" | "location" | "gift" | "diamond"
  | "tools" | "heart";

export type ProcessStep = {
  num: string;
  title: string;
  icon: FlowIcon;
  text: string;
};

export const businessProcessSteps: ProcessStep[] = [
  {
    num: "1",
    title: "Partnerství & onboarding",
    icon: "handshake",
    text: "Vyberete si úroveň spolupráce. Provedeme vás celým procesem a připravíme váš salon na úspěch.",
  },
  {
    num: "2",
    title: "Školení & protokol",
    icon: "book",
    text: "Získáte školení, detailní protokoly ošetření a všechny materiály pro váš tým.",
  },
  {
    num: "3",
    title: "Zavedení do nabídky salonu",
    icon: "chair",
    text: "Zařadíte rituály do své nabídky, nastavíme ceny a připravíme komunikaci.",
  },
  {
    num: "4",
    title: "Salonní rituál pro klientku",
    icon: "face",
    text: "Klientka zažije viditelný efekt, smyslový zážitek a profesionální péči J.Oli Origins.",
  },
  {
    num: "5",
    title: "Doporučení domácí péče",
    icon: "bottle",
    text: "Doporučíte jí 5krokový rituál na doma. Dostane pracovní list a doporučený postup.",
  },
  {
    num: "6",
    title: "Prodej na doma",
    icon: "bag",
    text: "Klientka nakoupí produkty domů. Vy získáte zisk z prodeje.",
  },
  {
    num: "7",
    title: "Návrat & růst dlouhodobě",
    icon: "growth",
    text: "Klientka se vrací na další rituály, rozšiřuje péči a doporučuje vás dál. Váš salon roste.",
  },
];

export type FlowBenefit = { icon: FlowIcon; title: string; text: string };

export const businessFlowBenefits: FlowBenefit[] = [
  {
    icon: "coins",
    title: "Komise nebo nákup",
    text: "Zvolte si model, který vám vyhovuje. Produkty můžete mít na komisi nebo za zvýhodněné partnerské ceny.",
  },
  {
    icon: "discount",
    title: "Velké rabaty",
    text: "Atraktivní rabatové podmínky zajišťují vysokou marži a motivují kosmetičku k aktivnímu prodeji.",
  },
  {
    icon: "lightning",
    title: "Funguje okamžitě",
    text: "Viditelné výsledky po ošetření budují důvěru a přirozeně přivádí klientky zpět.",
  },
  {
    icon: "home",
    title: "Prodej na doma",
    text: "Domácí rituál prodlužuje efekt ošetření a přináší salonu opakovaný příjem z prodeje.",
  },
  {
    icon: "megaphone",
    title: "Kampaně na podporu salonů",
    text: "Pravidelné kampaně a obsah směřují nové klientky k vám — online i offline.",
  },
  {
    icon: "location",
    title: "Cílem je partnerský salon",
    text: "Žádné slevy na e-shopu. Neparazitujeme na salonech, ale budujeme síť silných partnerství.",
  },
  {
    icon: "gift",
    title: "Dárek ke každé objednávce",
    text: "Vždy získáte dárek, který můžete předat své klientce.",
  },
  {
    icon: "diamond",
    title: "Exkluzivní produkty navíc",
    text: "Signature partneři získávají prémiové produkty a rituály, které žádný jiný salon v okolí nenabízí. Vaše konkurenční výhoda začíná tady.",
  },
];

export const businessTools = [
  "Kompletní školení a protokoly ošetření",
  "Pracovní listy pro klientky a doporučovací karty",
  "Marketingové materiály a šablony pro sociální sítě",
  "Podpora při launchi a nastavení cen",
  "Ritual Guide pro klientky a follow-up komunikace",
  "Pravidelné novinky, webináře a inspirace",
];

export const economicModelSteps = [
  {
    title: "Procedury v salonu",
    text: "Vyšší hodnota ošetření",
    icon: "chair" as FlowIcon,
  },
  {
    title: "Prodej na doma",
    text: "Okamžitý zisk z retailu",
    icon: "bag" as FlowIcon,
  },
  {
    title: "Opakovaný návrat",
    text: "Věrné klientky, pravidelné rituály",
    icon: "heart" as FlowIcon,
  },
  {
    title: "Růst salonu a zisku",
    text: "Více klientek, více obratu",
    icon: "growth" as FlowIcon,
  },
];

export const businessWhyJoli = [
  "Poctivá kosmetika s viditelnými výsledky",
  "Profesionální přístup a dlouhodobé partnerství",
  "Transparentní podmínky a férové marže",
  "Stabilní kvalita, čerstvé šarže, výroba v ČR",
  "Reálná podpora, která šetří váš čas a energii",
  "Společně budujeme silnou komunitu salonů",
];
