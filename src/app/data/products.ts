/**
 * J.Oli Origins — produktový katalog.
 *
 * Centralizovaný datový model pro homepage, listing a detail produktů.
 * Texty: bezpečné kosmetické formulace, žádné medicínské tvrzení.
 */

export type ProductType = "single" | "set" | "travel" | "accessory";

export type ProductCategory =
  | "ritual"
  | "sets"
  | "travel"
  | "supplementary"
  | "accessories";

/**
 * Layout discriminator for the product detail page.
 * - "ritual"     → full ritual product detail (5-step axis, ingredients, texture/how, etc.)
 * - "supplement" → universal detail (single description accordion, ritual-fit + value-reasons + how)
 * - "tool"       → universal detail with tool-flavoured copy
 * - "set"        → universal detail with set-flavoured copy
 * - "travel"     → universal detail with travel-flavoured copy
 * - "gift"       → universal detail with gift-flavoured copy
 *
 * If omitted, it is derived from category at render time.
 */
export type ProductDetailType =
  | "ritual"
  | "supplement"
  | "tool"
  | "set"
  | "travel"
  | "gift";

export function resolveDetailType(p: { detailType?: ProductDetailType; category: ProductCategory; type: ProductType }): ProductDetailType {
  if (p.detailType) return p.detailType;
  if (p.category === "ritual") return "ritual";
  if (p.type === "set" || p.category === "sets") return "set";
  if (p.type === "travel" || p.category === "travel") return "travel";
  if (p.type === "accessory" || p.category === "accessories") return "tool";
  return "supplement";
}

export type RitualStep = "01" | "02" | "03" | "04" | "05";

export type Usage =
  | "ráno"
  | "večer"
  | "ráno i večer"
  | "1× týdně večer"
  | "ráno i večer · po No2";

export type Review = {
  rating: number;
  text: string;
  author: string;
  meta?: string;
};

export type Ingredient = {
  name: string;
  description: string;
  image?: string;
};

export type HowToStep = {
  step: string;
  text: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

/**
 * Accordion item used on the product detail page.
 * Stable `id` allows analytics, deep-link / open-on-load, and content overrides.
 */
export type Accordion = {
  id?: string;
  title: string;
  content: string;
};

/** Canonical IDs for ritual product accordions (in the required order). */
export const RITUAL_ACCORDION_IDS = [
  "description",
  "active-substances",
  "texture-feel",
  "how-to-use",
  "inci",
  "batch-freshness",
] as const;

export type BatchInfo = {
  batch: string;
  producedAt?: string;
  remaining?: number;
  total?: number;
};

export type Product = {
  id: string;
  slug: string;
  type: ProductType;
  category: ProductCategory;
  detailType?: ProductDetailType;
  ritualStep?: RitualStep;
  ritualLabel?: string;
  phase?: string;
  name: string;
  displayName?: string;
  shortName?: string;
  subtitle?: string;
  price: number;
  priceFormatted: string;
  size?: string;
  travelSize?: string;
  heroImage: string;
  productImage: string;
  cardImage?: string;
  gallery?: string[];
  textureImage?: string;
  tags?: string[];
  badge?: string;
  usage?: Usage;
  shortDescription: string;
  longDescription?: string;
  heroClaim: string;
  benefits: string[];
  keyIngredients?: Ingredient[];
  texture?: { title: string; description: string; image?: string };
  howToUse?: HowToStep[];
  morningNote?: string;
  eveningNote?: string;
  morningUsage?: boolean;
  eveningUsage?: boolean;
  suitableFor?: string[];
  notSureNote?: string;
  ritualRole?: string;
  routinePlacement?: string;
  recommendedWith?: string[];
  recommendedProductIds?: string[];
  reviews?: Review[];
  faqs?: FAQ[];
  rating?: number;
  reviewCount?: number;
  batchInfo?: BatchInfo;
  accordions?: Accordion[];
  seoTitle?: string;
  seoDescription?: string;
};

export type ProductSet = Product & {
  includedProductIds: string[];
  savingText?: string;
  dailyPrice?: string;
  duration?: string;
};

const commonRitualReviews: Review[] = [
  {
    rating: 5,
    text: "Mám citlivou a reaktivní pleť a tahle péče je pro mě ideální. Jemná, voňavá a pleť je po ní krásně komfortní.",
    author: "Petra",
    meta: "41 let · citlivější pleť",
  },
  {
    rating: 5,
    text: "Používám ráno i večer. Rituál začíná právě tímhle krokem a je to znát — pleť je připravená na všechno další.",
    author: "Lucie",
    meta: "38 let · smíšená pleť",
  },
];

const commonRitualFaqs: FAQ[] = [
  {
    question: "Jak produkt zařadit do rituálu?",
    answer: "Produkt má své přesné místo v pořadí Generation Perfect Ritual. Podle čísla kroku (01–05) ho použijete v ranní nebo večerní péči, vždy po předchozím a před následujícím krokem.",
  },
  {
    question: "Mohu jej používat ráno i večer?",
    answer: "Záleží na fázi rituálu. Čištění, tonizace a hydratace fungují ráno i večer. Denní sérum doporučujeme jen ráno, noční sérum jen večer.",
  },
  {
    question: "Je vhodný pro citlivější pleť?",
    answer: "Produkty rituálu jsou formulovány s důrazem na komfort i pro citlivější pleť. Pokud si nejste jistá nebo používáte silné aktivní látky, doporučujeme nejprve osobní konzultaci.",
  },
  {
    question: "Jak dlouho balení vydrží?",
    answer: "Při doporučeném používání jeden krok vydrží přibližně 6–8 týdnů. Kompletní sada (5 kroků) vystačí přibližně 92 dní pravidelného rituálu.",
  },
];

export const products: Product[] = [
  {
    id: "no1-cleansing-emulsion",
    slug: "no1-dvoufazova-myci-emulze",
    type: "single",
    category: "ritual",
    ritualStep: "01",
    ritualLabel: "První krok rituálu",
    phase: "Čištění",
    name: "No1 Dvoufázová mycí emulze",
    displayName: "No1 Dvoufázová\nmycí emulze",
    subtitle: "Two-Phase Cleansing Emulsion",
    shortName: "No1 Čištění",
    price: 1490,
    priceFormatted: "1 490 Kč",
    size: "150 ml",
    travelSize: "30 ml",
    usage: "ráno i večer",
    heroImage: "/assets/joliorigins/products/1.png",
    productImage: "/assets/joliorigins/products/1.png",
    cardImage: "/assets/joliorigins/products/no1.png",
    textureImage: "/assets/joliorigins/ai/journal-spheres-ai.png",
    gallery: [
      "/assets/joliorigins/products/1.png",
      "/assets/joliorigins/ai/journal-spheres-ai.png",
      "/assets/joliorigins/ai/journal-botanical-ai.png",
      "/assets/joliorigins/products/no1.png",
    ],
    tags: ["Botanické extrakty", "Prebiotika", "Čištění", "Make-up i SPF"],
    badge: "Nejlepší první krok",
    heroClaim: "Jemně odstraňuje nečistoty a připravuje pleť na další vrstvy rituálu.",
    shortDescription:
      "Hebká emulze, která v kontaktu s vodou tvoří jemné mléko. Odstraňuje make-up, SPF a nečistoty, aniž by narušila ochranný komfort pleti.",
    batchInfo: { batch: "2026/04", producedAt: "8. května 2026", remaining: 22, total: 80 },
    accordions: [
      {
        id: "description",
        title: "Popis produktu",
        content:
          "Dvojité čištění. Jeden krok.\n\nRáno i večer si žádají to samé: čistý základ. Dvoufázová mycí emulze spolu s konjakovou houbou vaši pokožku zbaví nánosů kožního mazu, líčidel i městského znečištění. Olej z citrónových semen vám svou čerstvou vůní dodá energii, kyseliny se postarají o šetrnou exfoliaci.\n\nObsah balení: No1 Dvoufázová mycí emulze 100 ml + konjaková houbička.",
      },
      {
        id: "active-substances",
        title: "Aktivní látky",
        content:
          "Bioaktivní micelární esence. Přírodní saponiny z mydlice lékařské. Aminokyseliny draselné kokosové rýže. AHA + PHA kyseliny. Hedvábné tropické oleje. Tekutý chlorofyl.\n\nKonjaková houba s bambuckým uhlím kombinuje jemnou exfoliaci s detoxikačními účinky uhlí. Houba je vyrobena z kořene rostliny konjak, který je bohatý na vlákninu a má přirozené antibakteriální vlastnosti. Bambucké uhlí absorbuje nečistoty, přebytečný maz a toxiny, což pomáhá čistit a stahovat póry. Konjaková houba je biologicky odbouratelná a kompostovatelná.",
      },
      {
        id: "texture-feel",
        title: "Textura & pocit",
        content:
          "Dvoufázová emulze se před použitím protřepe, aby se spojily obě fáze. V kombinaci s vodou a konjakovou houbou vytváří jemný čisticí rituál pro ráno i večer — bez pocitu pnutí nebo vysušení.",
      },
      {
        id: "how-to-use",
        title: "Jak používat",
        content:
          "1. Navlhčete obličej a konjakovou houbu.\n2. Konjakovou houbu namočte ve vodě, aby změkla.\n3. Emulzi důkladně protřepejte, aby se spojily obě fáze.\n4. Vmasírujte do oblasti obličeje včetně očí a krku a jemně krouživými pohyby odstraňte nečistoty pomocí konjakové houby.\n5. Opláchněte vlažnou vodou a pokračujte krokem No2.\n6. Konjakovou houbu po použití důkladně opláchněte a nechte vyschnout.",
      },
      {
        id: "for-you",
        title: "Je tento produkt pro vás?",
        content:
          "Ano, pokud:\n· nosíte SPF nebo make-up a chcete je odstranit beze stop,\n· hledáte jemné čištění bez pocitu pnutí po opláchnutí,\n· chcete první krok ranní i večerní péče.\n\nZačněte opatrně, pokud:\n· máte velmi citlivou pleť — první týden bez konjakové houby,\n· aktuálně řešíte podráždění — emulzi naneste, ale houbu zatím vynechte.\n\nKam patří v rituálu:\nKrok 01 — první krok ráno i večer.\n\nCo použít po něm:\nNo2 Bioaktivní tonikum.",
      },
      {
        id: "common-mistake",
        title: "Nejčastější chyba",
        content:
          "Nanést příliš málo produktu nebo jej hned smýt. Emulzi nejdříve promasírujte na pleti — teprve potom ji aktivujte vodou. Houba na suchou pleť nepatří.",
      },
      {
        id: "inci",
        title: "Ingredients (INCI)",
        content:
          "Citrus limon fruit water, Caprylic/capric triglyceride, Passiflora edulis seed oil, Citrus limon seed oil, Saponaria officinalis root extract, Potassium cocoyl rice amino acids, Borago officinalis leaf extract, Betula pendula leaf extract, Ginkgo biloba leaf extract, Gymnema sylvestre leaf extract, Centella asiatica leaf extract, Gluconolactone, Glycolic acid, Coco caprylate carpate, Lactic acid, Glycerin, Aqua, Tocopherol, Alcohol, Citrus limon peel oil, Citrus grandis peel oil, Citrus aurantium bergamia fruit oil, Leptospermum petersonii oil, Sodium levulinate, Sodium anisate, Sodium phytate, Sodium copperchlorophyllin complex, Limonene*, Linalool*, Geraniol*, Citral*.\n\n* přirozeně vyskytující se látky v rostlinách",
      },
      {
        id: "batch-freshness",
        title: "Šarže & čerstvost",
        content:
          "Produkty J.Oli Origins jsou vyráběny v menších šaržích s důrazem na čerstvost, kontrolu a smyslovou kvalitu. Konkrétní číslo šarže a datum výroby najdete na obalu produktu.",
      },
    ],
    recommendedProductIds: [
      "no2-toner",
      "no3-collagel-serum",
      "generation-perfect-ritual-complete-set",
    ],
    longDescription:
      "No1 je první krok Generation Perfect Ritual. Otevírá rituál a připravuje pleť na všechny další vrstvy. Lehká dvoufázová textura jemně rozpouští make-up, SPF a denní nečistoty a po opláchnutí zanechává pleť čistou, hydratovanou a klidnou.",
    benefits: [
      "Jemné čištění bez vysušování",
      "Vhodné pro citlivou a reaktivní pleť",
      "Podporuje komfort a hydrataci",
      "Odstraňuje make-up i SPF",
    ],
    keyIngredients: [
      {
        name: "Rostlinné oleje",
        description: "Jemně rozpouštějí make-up a SPF, podporují komfort pleti.",
      },
      {
        name: "Betain",
        description: "Hydratuje a pomáhá předcházet pocitu pnutí po umytí.",
      },
      {
        name: "Heřmánek a oves",
        description: "Zklidňují a podporují pocit komfortu citlivější pleti.",
      },
      {
        name: "Prebiotický komplex",
        description: "Podporuje přirozenou rovnováhu kožní mikroflóry.",
      },
    ],
    texture: {
      title: "Lehká hedvábná emulze",
      description: "V kontaktu s vodou se mění v jemné mléko, které se snadno opláchne a nezanechává mastný film.",
    },
    howToUse: [
      { step: "Příprava pleti", text: "Naneste 2–3 dávky emulze na suchou pleť před prvním kontaktem s vodou." },
      { step: "Masírujte krouživými pohyby", text: "Jemně vmasírujte do pleti — emulze začne rozpouštět make-up a SPF." },
      { step: "Aktivujte vodou", text: "Přidejte trochu vlažné vody. Emulze se promění v jemné mléko." },
      { step: "Nechte pleť dýchat", text: "Opláchněte vlažnou vodou a osušte. Pleť je připravená na No2." },
    ],
    morningNote: "Ráno postačí jedno čištění pro svěží start rituálu.",
    eveningNote: "Večer použijte na suchou pleť pro důkladné odstranění make-upu a SPF.",
    ritualRole: "Čištění je základem. Připravuje pleť na tonizaci a maximalizuje účinek následujících kroků.",
    recommendedWith: ["no2-bioaktivni-tonikum", "no3-collagel-hydratacni-serum"],
    rating: 4.9,
    reviewCount: 142,
    reviews: [
      {
        rating: 5,
        text: "Nejlepší čisticí emulze, co jsem kdy měla. Pleť je po ní čistá, ale vůbec není vysušená. Make-up i SPF odstraňuje skvěle.",
        author: "Jana",
        meta: "34 let · normální pleť",
      },
      ...commonRitualReviews,
    ],
    faqs: [
      {
        question: "Je produkt vhodný pro citlivou pleť?",
        answer: "Ano. Formule je navržena s důrazem na komfort i citlivější pleti. Obsahuje heřmánek, oves a prebiotický komplex.",
      },
      {
        question: "Zanechává pleť mastný film?",
        answer: "Ne. Po opláchnutí vodou se emulze promění v jemné mléko a pleť po ní působí čistá a komfortní, bez mastného filmu.",
      },
      {
        question: "Odstraňuje voděodolný make-up?",
        answer: "Ano. Dvoufázová textura jemně rozpouští i odolnější make-up a SPF. Pro velmi silný oční make-up doporučujeme jemně opakovat aplikaci.",
      },
      {
        question: "Mohu emulzi používat i ráno?",
        answer: "Ano. Ráno postačí jedno krátké čištění pro probuzení pleti a přípravu na další kroky rituálu.",
      },
    ],
    seoTitle: "No1 Dvoufázová mycí emulze | J.Oli Origins",
    seoDescription:
      "Jemná čisticí emulze jako první krok Generation Perfect Ritual. Připravuje pleť na další vrstvy péče a podporuje komfort bez vysušování.",
  },

  {
    id: "no2-toner",
    slug: "no2-bioaktivni-tonikum",
    type: "single",
    category: "ritual",
    ritualStep: "02",
    ritualLabel: "Příprava pleti pro sérum",
    phase: "Tonizace",
    name: "No2 Bioaktivní tonikum",
    displayName: "No2 Bioaktivní\ntonikum",
    subtitle: "Bioactive Bloom Toner",
    shortName: "No2 Tonizace",
    price: 1490,
    priceFormatted: "1 490 Kč",
    size: "150 ml",
    travelSize: "30 ml",
    usage: "ráno i večer",
    heroImage: "/assets/joliorigins/products/2.png",
    productImage: "/assets/joliorigins/products/2.png",
    cardImage: "/assets/joliorigins/products/no2.png",
    textureImage: "/assets/joliorigins/ai/journal-glassware-ai.png",
    gallery: [
      "/assets/joliorigins/products/2.png",
      "/assets/joliorigins/ai/journal-glassware-ai.png",
      "/assets/joliorigins/ai/journal-botanical-ai.png",
      "/assets/joliorigins/products/no2.png",
    ],
    tags: ["Fermentace", "Hyaluron", "Tonizace", "Komfort"],
    badge: "Součást rituálu",
    heroClaim: "Navrací pleti pocit komfortu a připravuje ji na aplikaci aktivní péče.",
    shortDescription:
      "Tonizační krok, který pomáhá uvést pleť do rovnováhy a otevřít ji pro aktivní složky následujícího séra. Fermentované extrakty a botanické hydroláty zklidňují a osvěžují.",
    batchInfo: { batch: "2026/04", producedAt: "8. května 2026", remaining: 19, total: 80 },
    accordions: [
      {
        id: "description",
        title: "Popis produktu",
        content:
          "Druhý krok naší holistické péče.\n\nSvěží tonikum plné probiotik a antioxidantů vyrovnává pH pokožky a jemně ji dočistí. Výsledkem je jasná, sjednocená pleť se stáhnutými póry. Bylinné a ovocné extrakty spolu s antioxidanty podporují tvorbu kolagenu.",
      },
      {
        id: "active-substances",
        title: "Aktivní látky",
        content:
          "Molekula NMN. Rostlinný kolagen. Extrakty z chrpy, slézu maurského, protěže alpské, rosolovky řasotvaré a klitorie ternantské. Probiotika. Esence z dračího ovoce, papáji a opuncie. Hydrolát bílé růže a aloe vera.",
      },
      {
        id: "texture-feel",
        title: "Textura & pocit",
        content:
          "Svěží tonikum ve formě lehké vodní mlhy pro osvěžení a přípravu pleti na další kroky. Vstřebává se rychle a nezanechává lepivý pocit.",
      },
      {
        id: "how-to-use",
        title: "Jak používat",
        content:
          "1. Lahvičku s tonikem protřepejte.\n2. Aplikujte 5 stříknutí přímo na obličej, krk a dekolt.\n3. Nechte vstřebat a pokračujte krokem No3.",
      },
      {
        id: "for-you",
        title: "Je tento produkt pro vás?",
        content:
          "Ano, pokud:\n· pleť po čištění rychle pne,\n· chcete lehkou hydrataci před sérem,\n· potřebujete jasný krok mezi čištěním a No3.\n\nZačněte opatrně, pokud:\n· máte aktuálně podrážděnou nebo zacelovanou pleť,\n· používáte koncentrované aktivní látky a chcete je nejdřív stabilizovat.\n\nKam patří v rituálu:\nKrok 02 — po No1, před No3.\n\nCo použít po něm:\nNo3 Collagel hydratační sérum.",
      },
      {
        id: "common-mistake",
        title: "Nejčastější chyba",
        content:
          "Použít tonikum jako parfémovaný sprej a hned pokračovat dalším krokem. Nechte ho krátce vstřebat nebo jemně vklepejte do pleti — tonikum má připravit pleť, ne ji jen ovonět.",
      },
      {
        id: "inci",
        title: "Ingredients (INCI)",
        content:
          "Aloe barbadensis leaf water, Rosa alba flower water, Collagen amino acides, Biosaccharide gum-1, Lactobacillus ferment, Lactobacillus ferment lysate, Sodium levulinate, Nicotinamide mononucleotide, Lactic acide, Glycerin, Aqua, Carica papaya fruit extract, Opuntia ficus-indica flower extract, Leontopodium alpinum flower/leaf extract, Hylocereus undatus fruit extract, Sodium anisate, Tremella fuciformis extract, Clitoria ternatea flower extract, Malva sylvestris flower extract, Centaurea cyanus flower extract, Alcohol, Leuconostoc/radish root ferment filtrate, Sodium phytate.",
      },
      {
        id: "batch-freshness",
        title: "Šarže & čerstvost",
        content:
          "Produkty J.Oli Origins jsou vyráběny v menších šaržích s důrazem na čerstvost, kontrolu a smyslovou kvalitu. Konkrétní číslo šarže a datum výroby najdete na obalu produktu.",
      },
    ],
    recommendedProductIds: [
      "no1-cleansing-emulsion",
      "no3-collagel-serum",
      "generation-perfect-ritual-complete-set",
    ],
    longDescription:
      "No2 navazuje na čištění a uvádí pleť do komfortu. Bioaktivní tonikum jemně zjemňuje, hydratuje a otevírá pleť pro aktivní složky následujícího séra.",
    benefits: [
      "Připravuje pleť na další vrstvy",
      "Podporuje pocit hydratace",
      "Zjemňuje a osvěžuje",
    ],
    keyIngredients: [
      { name: "Fermentované extrakty", description: "Podporují přípravu pleti pro aktivní péči." },
      { name: "Hyaluronové frakce", description: "Dodávají pocit lehké hydratace a pružnosti." },
      { name: "Botanické hydroláty", description: "Jemně zklidňují a podporují komfort pleti." },
    ],
    texture: {
      title: "Lehké tonizační fluidum",
      description: "Vodnatá textura, která se rychle vstřebá a nezanechává lepivý pocit.",
    },
    howToUse: [
      { step: "Po čištění", text: "Po kroku No1 naneste 2–3 dávky tonika na dlaň nebo bavlněný tampon." },
      { step: "Naneste na pleť", text: "Jemně rozetřete po celém obličeji, krku a dekoltu." },
      { step: "Vmasírujte krouživě", text: "Pleť tonikum pomalu vstřebá. Lehce vmasírujte krouživými pohyby." },
      { step: "Pokračujte sérem", text: "Pleť je připravená pro krok No3. Aplikujte hned po tonizaci." },
    ],
    morningNote: "Ráno použijte po čištění pro svěžest a přípravu na denní sérum.",
    eveningNote: "Večer jemně zklidní pleť před noční regenerací.",
    ritualRole: "Tonizace navrací pleti komfort a připravuje ji na sérum.",
    recommendedWith: ["no1-dvoufazova-myci-emulze", "no3-collagel-hydratacni-serum"],
    rating: 4.8,
    reviewCount: 96,
    reviews: commonRitualReviews,
    faqs: commonRitualFaqs,
    seoTitle: "No2 Bioaktivní tonikum | J.Oli Origins",
    seoDescription:
      "Tonizace jako druhý krok Generation Perfect Ritual. Připravuje pleť na sérum a podporuje pocit komfortu i hydratace.",
  },

  {
    id: "no3-collagel-serum",
    slug: "no3-collagel-hydratacni-serum",
    type: "single",
    category: "ritual",
    ritualStep: "03",
    ritualLabel: "Mezikrok rituálu",
    phase: "Hydratace",
    name: "No3 Collagel hydratační sérum",
    displayName: "No3 Collagel\nhydratační sérum",
    subtitle: "Hydro Boost Collagel Serum",
    shortName: "No3 Hydratace",
    price: 2990,
    priceFormatted: "2 990 Kč",
    size: "30 ml",
    travelSize: "10 ml",
    usage: "ráno i večer",
    heroImage: "/assets/joliorigins/products/3.png",
    productImage: "/assets/joliorigins/products/3.png",
    cardImage: "/assets/joliorigins/products/no3.png",
    textureImage: "/assets/joliorigins/ai/longevity-dropper-ai.png",
    gallery: [
      "/assets/joliorigins/products/3.png",
      "/assets/joliorigins/ai/longevity-dropper-ai.png",
      "/assets/joliorigins/ai/journal-spheres-ai.png",
      "/assets/joliorigins/products/no3.png",
    ],
    tags: ["Hyaluron", "Peptidy", "Hydratace", "Pružnost"],
    badge: "Součást rituálu",
    heroClaim: "Dodává pleti pocit hydratace, plnosti a pružně působícího vzhledu.",
    shortDescription:
      "Hydratační collagel sérum jako mezikrok rituálu, který propojuje tonizaci s denní nebo noční péčí. Multimolekulární hyaluron a peptidy dodávají pocit plnosti a pružnosti.",
    batchInfo: { batch: "2026/04", producedAt: "8. května 2026", remaining: 11, total: 80 },
    accordions: [
      {
        id: "description",
        title: "Popis produktu",
        content:
          "Hydratační anti-age sérum pro žíznivou pleť. Ráno i večer.\n\nHydro Boost Collagel pleti dodává instantní vláhu a hydrataci. Kyselina hyaluronová se v celém spektru molekulárních velikostí postará o dlouhotrvající hydrataci, tekuté minerály a hydrolát z okurky v pokožce uzamykají vlhkost a čistou, šťavnatou vůní dodávají vašemu rituálu pocit lehkosti a osvěžení.",
      },
      {
        id: "active-substances",
        title: "Aktivní látky",
        content:
          "Komplex hydratačních peptidů. Kyselina hyaluronová. Tekutý malachit. Hydroláty z okurky a aloe vera.",
      },
      {
        id: "texture-feel",
        title: "Textura & pocit",
        content:
          "Lehké hydratační sérum s osvěžujícím pocitem a šťavnatou vůní okurky. Vstřebává se rychle a zanechává pleť pružně působící.",
      },
      {
        id: "how-to-use",
        title: "Jak používat",
        content:
          "1. Lahvičku před použitím protřepejte.\n2. Aplikujte tři dávky pumpičky na oblast obličeje, krku a dekoltu.\n3. Jemně vmasírujte krouživými pohyby do pokožky.\n4. Ráno pokračujte No4, večer No5.",
      },
      {
        id: "for-you",
        title: "Je tento produkt pro vás?",
        content:
          "Ano, pokud:\n· pleť působí unaveně nebo dehydratovaně,\n· chcete pocit plnější a komfortnější pleti,\n· hledáte sérum, které lze používat ráno i večer.\n\nZačněte opatrně, pokud:\n· máte velmi aktivní reaktivní pleť — začněte 2 dávkami místo 3.\n\nKam patří v rituálu:\nKrok 03 — po No2, před No4 ráno nebo No5 večer.\n\nCo použít po něm:\nRáno No4, večer No5.",
      },
      {
        id: "common-mistake",
        title: "Nejčastější chyba",
        content:
          "Vynechat No3 a přejít rovnou na aktivní denní nebo noční krok. Bez hydratační vrstvy je následující péče pro pleť intenzivnější, než potřebuje, a produkty se hůř vstřebávají.",
      },
      {
        id: "inci",
        title: "Ingredients (INCI)",
        content:
          "Aloe barbadensis leaf water (100% hydrolát z aloe vera), Cucumis sativus fruit water (100% hydrolát z okurky), Acetyl hexapeptide-8 (komplex hydro peptidů, přírodní alternativa botoxu), Sodium hyaluronate (matrix nízkomolekulární a středněmolekulární kyseliny hyaluronové), Sodium PCA, Biosaccharide gum-1, Cucumis sativus fruit extract, Glyceryl caprylate, Lactic acid, Malachite extract, Tremella fuciformis extract, Glycerin, Aqua, Sodium phytate, Alcohol, Clitoria ternatea flower extract, Malva sylvestris flower extract, Centaurea cyanus flower extract, Aroma* (přírodní vůně okurky), Caprylyl glycol, Citronellol*.\n\n* přirozeně vyskytující se látky v rostlinách",
      },
      {
        id: "batch-freshness",
        title: "Šarže & čerstvost",
        content:
          "Produkty J.Oli Origins jsou vyráběny v menších šaržích s důrazem na čerstvost, kontrolu a smyslovou kvalitu. Konkrétní číslo šarže a datum výroby najdete na obalu produktu.",
      },
    ],
    recommendedProductIds: [
      "no2-toner",
      "no4-day-serum",
      "no5-night-serum",
    ],
    benefits: [
      "Intenzivní pocit hydratace",
      "Pružně působící vzhled",
      "Komfortní mezivrstva rituálu",
    ],
    keyIngredients: [
      { name: "Multimolekulární kyselina hyaluronová", description: "Hydratace v různých vrstvách pleti." },
      { name: "Peptidový komplex", description: "Podporuje pružně působící vzhled pleti." },
      { name: "Fermentovaný kolagenový extrakt", description: "Podporuje pocit plnosti pleti." },
    ],
    texture: {
      title: "Gelové sérum",
      description: "Lehká rosolovitá textura, která se rychle vstřebá a nezanechává lepivý pocit.",
    },
    howToUse: [
      { step: "Po tonizaci", text: "Po kroku No2 naneste 2–3 kapky séra na dlaň. Pleť je v tu chvíli vlhká a otevřená pro hydrataci." },
      { step: "Malé množství", text: "Větší množství není potřeba. 2–3 kapky pokryjí obličej, krk i dekolt." },
      { step: "Vmasírujte do pleti", text: "Jemnými krouživými pohyby vmasírujte. Pocit lepkavosti se rychle ztrácí." },
      { step: "Pokračujte sérem péče", text: "Ráno aplikujte No4, večer No5. Pleť pak rituál uzavře." },
    ],
    ritualRole: "Hydratace je mezikrok, který propojuje tonizaci s denní nebo noční péčí.",
    recommendedWith: ["no2-bioaktivni-tonikum", "no4-denni-vitaminove-serum-coq10", "no5-nocni-regeneracni-serum"],
    rating: 4.9,
    reviewCount: 178,
    reviews: commonRitualReviews,
    faqs: commonRitualFaqs,
    seoTitle: "No3 Collagel hydratační sérum | J.Oli Origins",
    seoDescription:
      "Hydratační collagel sérum jako třetí krok Generation Perfect Ritual. Dodává pocit plnosti a pružně působícího vzhledu pleti.",
  },

  {
    id: "no4-day-serum",
    slug: "no4-denni-vitaminove-serum-coq10",
    type: "single",
    category: "ritual",
    ritualStep: "04",
    ritualLabel: "Ranní uzávěr rituálu",
    phase: "Denní péče",
    name: "No4 Denní vitaminové sérum + CoQ10",
    displayName: "No4 Denní vitaminové\nsérum + CoQ10",
    subtitle: "Day Vitamin Serum with CoQ10",
    shortName: "No4 Denní péče",
    price: 3290,
    priceFormatted: "3 290 Kč",
    size: "30 ml",
    travelSize: "10 ml",
    usage: "ráno",
    heroImage: "/assets/joliorigins/products/4.png",
    productImage: "/assets/joliorigins/products/4.png",
    cardImage: "/assets/joliorigins/products/no4-day.png",
    textureImage: "/assets/joliorigins/ai/longevity-dropper-ai.png",
    gallery: [
      "/assets/joliorigins/products/4.png",
      "/assets/joliorigins/ai/longevity-dropper-ai.png",
      "/assets/joliorigins/ai/journal-botanical-ai.png",
      "/assets/joliorigins/products/no4-day.png",
    ],
    tags: ["CoQ10", "Vitamin C", "Antioxidanty", "Jas"],
    badge: "Ráno",
    heroClaim: "Ranní krok pro svěžejší, rozjasněnější a vitálně působící pleť.",
    shortDescription:
      "Denní vitaminové sérum s CoQ10 a antioxidačním komplexem. Pomáhá chránit vzhled pleti před každodenním stresem prostředí a podporuje její vitální působení.",
    batchInfo: { batch: "2026/04", producedAt: "8. května 2026", remaining: 9, total: 80 },
    accordions: [
      {
        id: "description",
        title: "Popis produktu",
        content:
          "Ranní anti-age péče o pleť si žádá vydatnou dávku vitaminů a živin.\n\nDaily Skin Superfood Moisture Serum je poslední krok ranního anti-age pečujícího rituálu. Hedvábný olej pokožce dodá šťávu, jas a energii. Koktejl enzymů, lehkých tropických olejů a koenzymu Q10 je pro vaši pleť vyváženou snídaní, která ji po zbytek dne pomáhá chránit před škodlivými radikály a UV zářením.",
      },
      {
        id: "active-substances",
        title: "Aktivní látky",
        content:
          "Koenzym Q10. Přírodní vitamin E. Vzácné oleje z tropické guavy, opuncie, černých malin a švestek kakadu. Okurkový olej. CO2 Granátové jablko.",
      },
      {
        id: "texture-feel",
        title: "Textura & pocit",
        content:
          "Hedvábný olejový balzám, který se rozprostře a rychle vstřebá. Pleť po něm působí svěže, rozjasněně a vitálně.",
      },
      {
        id: "how-to-use",
        title: "Jak používat",
        content:
          "1. Lahvičku se sérem protřepejte.\n2. Aplikujte 2–3 kapky pipetou přímo na oblast obličeje, krku a dekoltu.\n3. Jemně vmasírujte do pokožky.\n4. Doporučujeme dokončit ranní rituál denním SPF.",
      },
      {
        id: "for-you",
        title: "Je tento produkt pro vás?",
        content:
          "Ano, pokud:\n· chcete ráno lehký aktivní krok s antioxidanty,\n· pleť působí mdlá nebo unavená,\n· hledáte denní sérum se srozumitelnou rolí — uzavřít ranní rituál.\n\nZačněte opatrně, pokud:\n· používáte koncentrované aktivní látky od jiné značky — vyberte si jednu aktivní ranní péči.\n\nKam patří v rituálu:\nKrok 04 — ranní rituál, po No3.\n\nCo použít po něm:\nSPF, pokud jdete ven. No4 ochranu před sluncem nenahrazuje.",
      },
      {
        id: "common-mistake",
        title: "Nejčastější chyba",
        content:
          "Považovat denní sérum za náhradu SPF. No4 obsahuje antioxidanty, které pleti pomáhají vyrovnávat se s každodenním stresem prostředí, ale není to opalovací krém. Pokud jdete ven, ochranu před sluncem vždy doplňte samostatně.",
      },
      {
        id: "inci",
        title: "Ingredients (INCI)",
        content:
          "Terminalia ferdinandiana fruit seed oil, Passiflora edulis seed oil, Pyrus malus seed oil, Caryodendron orinocense seed oil, Rubus occidentalis seed oil, Psidium guajava seed oil, Opuntia ficus indica seed oil, Cucumis sativus seed oil, Caprylic/capric triglyceride, Ubiquinone, Tocopherol, Citrus grandis maxima peel oil, Citrus limon peel oil, Punica granatum seed extract, natural peach aroma, Limonene*, Linalool*, Geraniol*, Citral*.\n\n* přirozeně vyskytující se látky v rostlinách",
      },
      {
        id: "batch-freshness",
        title: "Šarže & čerstvost",
        content:
          "Produkty J.Oli Origins jsou vyráběny v menších šaržích s důrazem na čerstvost, kontrolu a smyslovou kvalitu. Konkrétní číslo šarže a datum výroby najdete na obalu produktu.",
      },
    ],
    recommendedProductIds: [
      "no1-cleansing-emulsion",
      "no3-collagel-serum",
      "generation-perfect-ritual-complete-set",
    ],
    benefits: [
      "Denní antioxidační péče",
      "Podpora jasu pleti",
      "Vitálně působící vzhled",
    ],
    keyIngredients: [
      { name: "CoQ10", description: "Klíčový antioxidant pro podporu vitálního vzhledu pleti." },
      { name: "Vitamin C derivát", description: "Podporuje jas a rozjasňuje vzhled pleti." },
      { name: "Vitamin E", description: "Antioxidační ochrana vzhledu pleti." },
    ],
    texture: {
      title: "Lehké olejové sérum",
      description: "Hřejivá textura, která se hedvábně rozprostře a rychle vstřebá.",
    },
    howToUse: [
      { step: "Ranní krok", text: "Aplikujte ráno po kroku No3 jako uzávěr denního rituálu, abyste pleť připravili na celý den." },
      { step: "Malé množství", text: "Naberte 2–3 kapky na dlaň. Větší množství není potřeba." },
      { step: "Vmasírujte do pleti", text: "Jemně vmasírujte do obličeje, krku a dekoltu krouživými pohyby." },
      { step: "Uzavřete SPF", text: "Doporučujeme dokončit ranní rituál denním SPF. Pleť pak působí svěže a chráněně." },
    ],
    morningNote: "Pouze ranní krok. Připravuje pleť na celý den.",
    ritualRole: "Denní sérum je ranní krok pro jas, antioxidanty a vitálně působící vzhled.",
    recommendedWith: ["no1-dvoufazova-myci-emulze", "no2-bioaktivni-tonikum", "no3-collagel-hydratacni-serum"],
    rating: 4.9,
    reviewCount: 124,
    reviews: commonRitualReviews,
    faqs: commonRitualFaqs,
    seoTitle: "No4 Denní vitaminové sérum + CoQ10 | J.Oli Origins",
    seoDescription:
      "Ranní antioxidační sérum s CoQ10 jako čtvrtý krok Generation Perfect Ritual. Podporuje jas a vitální vzhled pleti.",
  },

  {
    id: "no5-night-serum",
    slug: "no5-nocni-regeneracni-serum",
    type: "single",
    category: "ritual",
    ritualStep: "05",
    ritualLabel: "Noční uzávěr rituálu",
    phase: "Noční obnova",
    name: "No5 Noční regenerační sérum",
    displayName: "No5 Noční\nregenerační sérum",
    subtitle: "Midnight Mineral Pressed Serum",
    shortName: "No5 Noční obnova",
    price: 3490,
    priceFormatted: "3 490 Kč",
    size: "30 ml",
    travelSize: "10 ml",
    usage: "večer",
    heroImage: "/assets/joliorigins/products/5.png",
    productImage: "/assets/joliorigins/products/5.png",
    cardImage: "/assets/joliorigins/products/no4-night.png",
    textureImage: "/assets/joliorigins/midnight-7.jpg",
    gallery: [
      "/assets/joliorigins/products/5.png",
      "/assets/joliorigins/midnight-7.jpg",
      "/assets/joliorigins/products/no4-night.png",
      "/assets/joliorigins/ai/longevity-dropper-ai.png",
    ],
    tags: ["Bakuchiol", "Peptidy", "Noční péče", "Regenerace"],
    badge: "Večer",
    heroClaim: "Večerní péče pro výživu, klid a regenerovaně působící vzhled pleti.",
    shortDescription:
      "Intenzivní noční sérum v lisované minerální bázi uzavírá rituál Generation Perfect a podporuje komfort pleti během spánku. Bakuchiol, peptidy a vybrané minerály pomáhají pleti působit pevněji, pružněji a odpočatěji, zatímco botanické extrakty podporují pocit klidu a rovnováhy.",
    benefits: [
      "Noční výživa",
      "Smyslový komfort",
      "Pružně a odpočatě působící pleť",
    ],
    batchInfo: {
      batch: "2026/04",
      producedAt: "8. května 2026",
      remaining: 14,
      total: 80,
    },
    accordions: [
      {
        id: "description",
        title: "Popis produktu",
        content:
          "Královská anti-age péče pro hlubokou regeneraci.\n\nMidnight mineral pressed serum je posledním krokem večerního rituálu před tolik potřebným spánkem. Tento výživný balzám pokožku revitalizuje pomocí 24-karátového zlata, vzácných esencí z opuncie, švestek kakadu a jablka a přírodního vitaminu A.",
      },
      {
        id: "active-substances",
        title: "Aktivní látky",
        content:
          "24-karátové zlato, vločky z čistého stříbra. Ester vitaminu C. Marocký heřmánek. Antioxidant gamma oryzanol. Exotické oleje a extrakty.",
      },
      {
        id: "texture-feel",
        title: "Textura & pocit",
        content:
          "Lisovaná minerální textura, která se při kontaktu s pletí mění v komfortní noční balzám. Vstřebává se hedvábně a podporuje smyslový zážitek večerního rituálu.",
      },
      {
        id: "how-to-use",
        title: "Jak používat",
        content:
          "1. Na obličej navlhčený hydratačním sérem naneste jednu dávku o velikosti hrášku suchou, čistou bambusovou špachtlí.\n2. Konečky prstů balzám jemně rozmasírujte do pokožky obličeje, krku a dekoltu.\n3. Nechte sérum působit přes noc.",
      },
      {
        id: "for-you",
        title: "Je tento produkt pro vás?",
        content:
          "Ano, pokud:\n· chcete večer výživnější péči s bakuchiolem,\n· pleť ráno působí suchá nebo unavená,\n· hledáte aktivní noční krok bez retinolu.\n\nZačněte opatrně, pokud:\n· máte velmi citlivou pleť — první týden 2–3× za týden místo každý den,\n· používáte koncentrovaný retinoid od jiné značky — vyberte si jednu aktivní noční péči.\n\nKam patří v rituálu:\nKrok 05 — poslední večerní krok, po No3.\n\nCo použít po něm:\nNic. No5 uzavírá večerní rituál.",
      },
      {
        id: "common-mistake",
        title: "Nejčastější chyba",
        content:
          "Používat příliš mnoho produktu. Stačí množství velikosti hrášku, zahřát mezi prsty a vtlačit do pleti. Více produktu se nevstřebá — zůstane na povrchu a večerní rituál pak působí nepříjemně.",
      },
      {
        id: "inci",
        title: "Ingredients (INCI)",
        content:
          "Aristotelia chilensis seed oil, Terminalia ferdinandiana fruit seed oil, Caryodendron orinocense seed oil, Caryocar Brasiliense fruit oil, Cucumis sativus seed oil, Opuntia ficus indica seed oil, Tetrahexyldecyl ascorbate, Oryzanol, Jasminum sambac flower cera, Rosa damascena flower cera, Bakuchiol, Caprylic/capric triglyceride, Candelilla cera, Tocopherol, Lavandula angustifolia oil, Tanacetum annuum flower oil, Jasminum sambac flower extract, Rosa damascena flower oil, Gardenia taitensis flower extract, Pelargonium graveolens flower oil, 24k Gold, Silver, Limonene*, Linalool*, Citronellol*, Citral*, Geraniol*, Farnesol*, Eugenol*, Benzyl alcohol, Benzyl benzoate.\n\n* přirozeně vyskytující se látky v rostlinách",
      },
      {
        id: "batch-freshness",
        title: "Šarže & čerstvost",
        content:
          "Produkty J.Oli Origins jsou vyráběny v menších šaržích s důrazem na čerstvost, kontrolu a smyslovou kvalitu. Konkrétní číslo šarže a datum výroby najdete na obalu produktu.",
      },
    ],
    recommendedProductIds: [
      "no3-collagel-serum",
      "no4-day-serum",
      "generation-perfect-ritual-complete-set",
    ],
    keyIngredients: [
      {
        name: "Bakuchiol 1 %",
        description: "Rostlinná alternativa retinolu. Podporuje hladší, pružněji působící vzhled pleti bez zbytečného podráždění.",
        image: "/assets/joliorigins/ai/journal-botanical-ai.png",
      },
      {
        name: "Peptidy",
        description: "Podporují pevněji působící vzhled pleti a pomáhají udržet její komfort a pružnost.",
        image: "/assets/joliorigins/ai/journal-spheres-ai.png",
      },
      {
        name: "NMN · niacin derivative",
        description: "Podporuje vitálně působící vzhled a pomáhá pleti lépe zvládat každodenní stres.",
        image: "/assets/joliorigins/ai/longevity-dropper-ai.png",
      },
      {
        name: "Botanické extrakty",
        description: "Směs zklidňujících a regeneračně působících extraktů podporuje komfort a rovnováhu pleti.",
        image: "/assets/joliorigins/ai/journal-glassware-ai.png",
      },
    ],
    texture: {
      title: "Sametové sérum",
      description: "Bohatá, ale lehká textura, která dodává večerní rituálu smyslový zážitek.",
    },
    howToUse: [
      {
        step: "Závěrečný krok",
        text: "Aplikujte jako poslední krok večerního rituálu, abyste uzavřeli péči a podpořili pocit komfortu během noci.",
      },
      {
        step: "Malé množství",
        text: "Naberte množství o velikosti hrášku pomocí špachtle a naneste na obličej, krk a dekolt.",
      },
      {
        step: "Zahřát & vtlačit",
        text: "Jemně zahřejte mezi prsty a vtlačujte do pleti krouživými pohyby, ideálně směrem nahoru.",
      },
      {
        step: "Nechte působit",
        text: "Nechte sérum během noci působit. Ráno může pleť působit hydratovaněji, hladší a odpočatěji.",
      },
    ],
    eveningNote: "Pouze večerní krok. Uzavírá rituál péčí a klidem.",
    ritualRole: "Noční sérum uzavírá večerní péči a dodává výživu a komfort.",
    recommendedWith: ["no1-dvoufazova-myci-emulze", "no2-bioaktivni-tonikum", "no3-collagel-hydratacni-serum"],
    rating: 4.9,
    reviewCount: 156,
    reviews: commonRitualReviews,
    faqs: commonRitualFaqs,
    seoTitle: "No5 Noční regenerační sérum | J.Oli Origins",
    seoDescription:
      "Noční sérum jako pátý krok Generation Perfect Ritual. Výživa, smyslový komfort a pružně působící vzhled pleti.",
  },
];

/* ============================================================
   SUPPLEMENTARY CARE — volitelné doplňky k rituálu
============================================================ */
export const supplementaryProducts: Product[] = [
  {
    id: "enzyme-peeling",
    slug: "enzymovy-peeling",
    type: "single",
    category: "supplementary",
    phase: "Týdenní péče",
    name: "Enzymový peeling",
    shortName: "Enzymový peeling",
    price: 1890,
    priceFormatted: "1 890 Kč",
    size: "50 ml",
    usage: "1× týdně večer",
    heroImage: "/assets/joliorigins/ai/journal-glassware-ai.png",
    productImage: "/assets/joliorigins/ai/journal-glassware-ai.png",
    cardImage: "/assets/joliorigins/ai/journal-glassware-ai.png",
    badge: "1× týdně",
    heroClaim: "Jemný týdenní krok pro hladší a jasněji působící pleť.",
    shortDescription:
      "Enzymová exfoliace 1× týdně večer, po čištění. Připravuje pleť na hydratační kroky rituálu. U citlivější pleti začněte 1× za 10–14 dní.",
    benefits: [
      "1× týdně večer · jemná enzymatická exfoliace",
      "Vhodné i pro citlivější pleť (začněte 1× za 10–14 dní)",
      "Zařadit po No1, před No2",
      "Nekombinovat ve stejný večer s No5",
    ],
    rating: 4.8,
    reviewCount: 48,
  },
  {
    id: "booster-ampule",
    slug: "booster-ampule",
    type: "single",
    category: "supplementary",
    phase: "Intenzivní péče",
    name: "Booster ampule",
    shortName: "Booster ampule",
    price: 2490,
    priceFormatted: "2 490 Kč",
    size: "7 × 2 ml",
    usage: "večer",
    heroImage: "/assets/joliorigins/ai/longevity-dropper-ai.png",
    productImage: "/assets/joliorigins/ai/longevity-dropper-ai.png",
    cardImage: "/assets/joliorigins/ai/longevity-dropper-ai.png",
    badge: "7denní kúra",
    heroClaim: "Sedmidenní intenzivní kúra pro období, kdy pleť potřebuje víc podpory.",
    shortDescription:
      "Jako 7denní kúru při sezónní změně, po cestování, před důležitou událostí nebo když pleť působí unaveně. Jedna ampule denně po dobu 7 dní — ne jako trvalý každodenní produkt.",
    benefits: [
      "7denní kúra · 1 ampule denně",
      "Zařadit po No2, před No3",
      "Vhodné při sezónní změně, po cestování nebo před událostí",
      "Není určená pro trvalé každodenní používání",
    ],
    rating: 4.9,
    reviewCount: 37,
  },
  {
    id: "oci-serum",
    slug: "ocni-serum",
    type: "single",
    category: "supplementary",
    phase: "Péče o oční okolí",
    name: "Oční konturní sérum",
    shortName: "Oční sérum",
    price: 2290,
    priceFormatted: "2 290 Kč",
    size: "15 ml",
    usage: "ráno i večer · po No2",
    heroImage: "/assets/joliorigins/midnight-7.jpg",
    productImage: "/assets/joliorigins/midnight-7.jpg",
    cardImage: "/assets/joliorigins/midnight-7.jpg",
    badge: "Detail péče",
    heroClaim: "Lehká péče pro jemné oční okolí.",
    shortDescription:
      "Ráno a/nebo večer po No2, před hutnějšími séry a závěrečnou péčí. Lehká textura pro jemnou pleť v oblasti očí.",
    benefits: [
      "Po tonizaci · před No3",
      "Lehká textura pro jemné oční okolí",
      "Vhodné ráno i večer, pokud okolí produkt dobře snáší",
    ],
    rating: 4.8,
    reviewCount: 62,
  },
];

/* ============================================================
   ACCESSORIES — rituální doplňky a pomůcky
============================================================ */
export const accessoryProducts: Product[] = [
  {
    id: "gua-sha-obsidian",
    slug: "gua-sha-obsidian",
    type: "accessory",
    category: "accessories",
    phase: "Rituální nástroj",
    name: "Gua sha · černý obsidian",
    shortName: "Gua sha",
    price: 1290,
    priceFormatted: "1 290 Kč",
    heroImage: "/assets/joliorigins/ai/journal-spheres-ai.png",
    productImage: "/assets/joliorigins/ai/journal-spheres-ai.png",
    cardImage: "/assets/joliorigins/ai/journal-spheres-ai.png",
    badge: "Massage",
    heroClaim: "Masážní kámen pro večerní rituál — vždy s dostatečným skluzem produktu.",
    shortDescription:
      "Používejte na pleť s dostatečným skluzem, ideálně s No5 nebo vhodným olejovým krokem. Na suchou pleť gua sha nepatří. Není nutný krok rituálu — spíš příjemný smyslový doplněk pro večer.",
    benefits: [
      "Používat pouze s dostatečným skluzem (No5 nebo olejová textura)",
      "Smyslový doplněk večerního rituálu, ne povinný krok",
      "Příjemně chladivý kontakt s pletí",
    ],
    rating: 4.9,
    reviewCount: 88,
  },
  {
    id: "aplikator-stetec",
    slug: "aplikator-stetec",
    type: "accessory",
    category: "accessories",
    phase: "Rituální nástroj",
    name: "Aplikační štětec",
    shortName: "Štětec",
    price: 690,
    priceFormatted: "690 Kč",
    heroImage: "/assets/joliorigins/hp03-2.jpg",
    productImage: "/assets/joliorigins/hp03-2.jpg",
    cardImage: "/assets/joliorigins/hp03-2.jpg",
    badge: "Detail péče",
    heroClaim: "Pro hygienickou aplikaci masek, peelingu a vybraných textur.",
    shortDescription:
      "Měkký štětec s veganskou syntetickou srstí. Vhodný pro aplikaci masek, enzymového peelingu nebo hutnějších textur. Pro běžné aplikaci sér ho nepotřebujete — stačí prsty.",
    benefits: [
      "Veganská syntetická srst",
      "Vhodný hlavně pro masky a peeling, ne pro běžná séra",
      "Hygieničtější než aplikace ze sklenice",
    ],
    rating: 4.7,
    reviewCount: 41,
  },
  {
    id: "muselin-kapesniky",
    slug: "muselinove-kapesniky",
    type: "accessory",
    category: "accessories",
    phase: "Rituální nástroj",
    name: "Mušelínové kapesníky",
    shortName: "Mušelíny",
    price: 590,
    priceFormatted: "590 Kč",
    size: "3 ks",
    heroImage: "/assets/joliorigins/hp03-8.webp",
    productImage: "/assets/joliorigins/hp03-8.webp",
    cardImage: "/assets/joliorigins/hp03-8.webp",
    badge: "3 ks",
    heroClaim: "Pro jemné osušení nebo odstranění čisticí emulze.",
    shortDescription:
      "Tři mušelínové kapesníky z certifikované bavlny. Po čištění je můžete použít místo papírového ručníku — jsou jemnější k pleti a po praní vydrží dlouho. Pratelné na 60 °C.",
    benefits: [
      "Certifikovaná bavlna, jemná k pleti",
      "Pratelné na 60 °C, opakovaně použitelné",
      "Alternativa papírových ručníků",
    ],
    rating: 4.8,
    reviewCount: 56,
  },
  {
    id: "keramicka-misticka",
    slug: "keramicka-misticka",
    type: "accessory",
    category: "accessories",
    phase: "Rituální nástroj",
    name: "Keramická mistička",
    shortName: "Mistička",
    price: 490,
    priceFormatted: "490 Kč",
    heroImage: "/assets/joliorigins/scene-02.jpg",
    productImage: "/assets/joliorigins/scene-02.jpg",
    cardImage: "/assets/joliorigins/scene-02.jpg",
    badge: "Pro masky",
    heroClaim: "Pro míchání masek, peelingu a aktivních ingrediencí.",
    shortDescription:
      "Ruční keramika v matně černém provedení. Estetický a hygienický doplněk — užitečný hlavně tehdy, pokud používáte enzymový peeling nebo aktivní masky. Pro běžný rituál není nutný.",
    benefits: [
      "Ruční keramika, matně černé provedení",
      "Užitečné pro masky a peeling",
      "Estetický a hygienický doplněk, ne povinný krok",
    ],
    rating: 4.8,
    reviewCount: 29,
  },
  {
    id: "cestovni-pouzdro",
    slug: "cestovni-pouzdro",
    type: "accessory",
    category: "accessories",
    phase: "Cestovní vybavení",
    name: "Cestovní pouzdro",
    shortName: "Pouzdro",
    price: 990,
    priceFormatted: "990 Kč",
    heroImage: "/assets/joliorigins/travel-luxe-set.png",
    productImage: "/assets/joliorigins/travel-luxe-set.png",
    cardImage: "/assets/joliorigins/travel-luxe-set.png",
    badge: "Na cesty",
    heroClaim: "Prémiové pouzdro, které vezme rituál s vámi všude.",
    shortDescription:
      "Měkké pouzdro z přírodního materiálu, navržené pro Travel Luxe Set i jednotlivé produkty rituálu. Decentní, bezpečné a krásné.",
    benefits: [
      "Vhodné pro Travel Luxe Set",
      "Přírodní materiál",
      "Měkké vnitřní polstrování",
    ],
    rating: 4.9,
    reviewCount: 34,
  },
];

export const productSets: ProductSet[] = [
  {
    id: "generation-perfect-ritual-complete-set",
    slug: "generation-perfect-ritual-kompletni-sada",
    type: "set",
    category: "sets",
    name: "Generation Perfect Ritual",
    subtitle: "Kompletní pětikroková péče pro ráno i večer",
    price: 9000,
    priceFormatted: "9 000 Kč",
    heroImage: "/assets/joliorigins/complete/box-set.png",
    productImage: "/assets/joliorigins/complete/box-set.png",
    cardImage: "/assets/joliorigins/complete/box-set.png",
    badge: "Úspora 3 750 Kč",
    heroClaim: "Pět plných balení. Jeden promyšlený systém ráno i večer.",
    shortDescription:
      "Pět plných produktů navržených jako jeden systém. Pro zákaznici, která nechce skládat péči náhodně, ale chce jasné pořadí, prémiové textury a rituál, ke kterému se bude vracet.",
    longDescription:
      "Kompletní sada obsahuje všech pět plných balení Generation Perfect Ritual: čištění, tonizaci, hydrataci, denní aktivní péči a noční obnovu. Jednotlivě by produkty stály 12 750 Kč — kompletní sada vás vyjde na 9 000 Kč, tedy o 3 750 Kč méně. Při doporučeném množství vystačí přibližně 92 dní (cca 98 Kč na den).\n\nProč můžete začít bez obavy:\n· pokud si nejste jistá, můžete nejdříve zvolit menší Travel Luxe Set (cca 21 dní),\n· dostanete jasný návod ráno / večer, který je v sadě přiložený,\n· začínáte menším množstvím — dávkujte podle reakce pleti,\n· u citlivější pleti nebo aktivních látek doporučujeme nejdřív osobní doporučení,\n· po nákupu vždy víte, jak produkty vrstvit a v jakém pořadí.",
    benefits: [
      "5 plných balení · ranní i večerní rituál",
      "Cca 92 dní pravidelného používání",
      "Cca 98 Kč / den",
      "Jednotlivě 12 750 Kč · sada 9 000 Kč",
      "Úspora 3 750 Kč oproti nákupu jednotlivě",
      "Prémiové dárkové balení",
    ],
    duration: "přibližně 92 dní pravidelného používání",
    dailyPrice: "cca 98 Kč / den · úspora 3 750 Kč oproti nákupu jednotlivě",
    includedProductIds: [
      "no1-cleansing-emulsion",
      "no2-toner",
      "no3-collagel-serum",
      "no4-day-serum",
      "no5-night-serum",
    ],
    rating: 4.9,
    reviewCount: 286,
    reviews: [
      {
        rating: 5,
        text: "Začala jsem Travel Luxe Setem a po třech týdnech přešla na plnou sadu. Největší rozdíl pro mě nebyl jen v pleti, ale v tom, že jsem konečně měla jasný systém ráno a večer.",
        author: "Markéta",
        meta: "36 let · smíšená pleť · používá 8 týdnů · začala Travel Luxe Setem",
      },
      {
        rating: 5,
        text: "Měla jsem mnoho produktů, ale žádný systém. Tady přesně vím, co použít ráno a co večer. Pleť je komfortnější a péče mě konečně baví. Sada vydrží opravdu dlouho, dávkuji minimum.",
        author: "Jana",
        meta: "46 let · suchá pleť · používá 10 týdnů · koupila kompletní sadu",
      },
      {
        rating: 5,
        text: "Nejvíc oceňuji osobní doporučení. Vyplnila jsem dotazník, ozvali se mi a vysvětlili, proč začít Travel Setem a kdy přejít dál. To není zvyk u jiných značek.",
        author: "Alena",
        meta: "51 let · citlivá pleť · 6 týdnů · začala Travel Luxe Setem po konzultaci",
      },
    ],
    seoTitle: "Generation Perfect Ritual – kompletní sada | J.Oli Origins",
    seoDescription:
      "Pětikrokový longevity rituál J.Oli Origins v kompletní sadě. Ranní i večerní péče inspirovaná korejským vrstvením, přírodou a kosmetickou vědou.",
  },
  {
    id: "travel-luxe-set",
    slug: "travel-luxe-set",
    type: "travel",
    category: "travel",
    name: "Travel Luxe Set",
    subtitle: "Nejbezpečnější způsob, jak poznat celý rituál",
    price: 2490,
    priceFormatted: "2 490 Kč",
    heroImage: "/assets/joliorigins/travel-luxe-set.png",
    productImage: "/assets/joliorigins/travel-luxe-set.png",
    cardImage: "/assets/joliorigins/travel-luxe-set.png",
    badge: "Nejlepší první nákup",
    heroClaim: "Pět kroků Generation Perfect v menším formátu.",
    shortDescription:
      "Vyzkoušíte vůně, textury, pořadí vrstvení i pocit na pleti — bez nutnosti začít hned plnou sadou za 9 000 Kč. Přibližně 21 dní používání. Ideální první nákup.",
    longDescription:
      "Travel Luxe Set obsahuje všech pět kroků Generation Perfect v menším formátu. Za 21 dní pravidelného používání zjistíte, jak vám sedí ranní i večerní rituál, vůně, textury a pocit po aplikaci. Teprve potom dává smysl rozhodnout se o plné sadě.\n\nProč můžete začít bez obavy:\n· investujete méně, než kdyby vám plná sada nesedla,\n· dostanete přesný návod, jak rituál používat,\n· začínáte menším množstvím — pleť dostává jen tolik, kolik potřebuje,\n· u citlivější pleti je to bezpečnější vstup než plné koncentrace,\n· vzorek jednoho produktu neukáže, jak funguje vrstvení — Travel Luxe Set ano.",
    benefits: [
      "Všech 5 kroků v menším formátu",
      "Cca 21 dní pravidelného používání",
      "Vhodné na cesty",
      "Bezpečnější než vzorek jednoho produktu",
      "Poznáte ranní i večerní vrstvení",
    ],
    suitableFor: [
      "Pokud J.Oli Origins zkoušíte poprvé",
      "Pokud máte citlivější pleť",
      "Pokud chcete nejdřív poznat textury a vůně",
      "Pokud nechcete hned investovat 9 000 Kč",
      "Pokud hledáte luxusní menší dárek",
    ],
    duration: "přibližně 21 dní pravidelného používání",
    includedProductIds: [
      "no1-cleansing-emulsion",
      "no2-toner",
      "no3-collagel-serum",
      "no4-day-serum",
      "no5-night-serum",
    ],
    rating: 4.8,
    reviewCount: 64,
    reviews: [
      {
        rating: 5,
        text: "Nejdřív jsem vyzkoušela Travel Luxe Set. Přesvědčila mě textura sér a hlavně to, že se produkty dobře vrství.",
        author: "Petra",
        meta: "39 let · citlivější pleť",
      },
      ...commonRitualReviews,
    ],
    seoTitle: "Travel Luxe Set | J.Oli Origins",
    seoDescription:
      "Poznejte všech pět kroků Generation Perfect Ritual v menším formátu. Ideální první vstup do rituálu J.Oli Origins.",
  },
];

export const allProducts: (Product | ProductSet)[] = [
  ...productSets,
  ...products,
  ...supplementaryProducts,
  ...accessoryProducts,
];

export function getProductBySlug(slug: string): Product | ProductSet | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | ProductSet | undefined {
  return allProducts.find((p) => p.id === id);
}

export function getRitualProducts(): Product[] {
  return products
    .filter((p) => p.category === "ritual")
    .sort((a, b) => (a.ritualStep ?? "0").localeCompare(b.ritualStep ?? "0"));
}

export function getSets(): ProductSet[] {
  return productSets;
}

export function getSupplementary(): Product[] {
  return supplementaryProducts;
}

export function getAccessories(): Product[] {
  return accessoryProducts;
}

export function isProductSet(p: Product | ProductSet): p is ProductSet {
  return p.type === "set" || p.type === "travel";
}
