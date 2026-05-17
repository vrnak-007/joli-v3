/**
 * J.OLI ORIGINS v3 — Product data
 * Lehčí struktura než v2; výhradně pro nové produktové detaily.
 *
 * Pětikrokový rituál:
 *   Ráno:   No1 → No2 → No3 → No4 denní
 *   Večer:  No1 → No2 → No3 → No4 noční
 *
 * Žádné No5. Dva produkty No4 (denní + noční).
 */

export type V3ProductKind = "set" | "single";

export type V3Product = {
  slug: string;
  kind: V3ProductKind;
  no?: string;
  name: string;
  subtitle: string;
  shortLabel: string; // pro karty (Čištění, Ranní péče, ...)
  priceCzk: number;
  priceText: string; // formátovaný „2 490 Kč"
  heroImg: string;
  gallery: string[];
  // Marketing
  role: string;
  description: string;
  forWhom: string[];
  howToUse: string[];
  texture?: string;
  keyIngredients?: { name: string; role: string }[];
  commonMistake?: string;
  nextSteps?: { label: string; href: string }[];
  // Set-only
  contents?: string[]; // pro Travel + Complete (seznam vnitřku)
  economy?: {
    individual: string;
    set: string;
    save: string;
  };
  badge?: string; // např. „Doporučujeme pro první nákup" nebo „Úspora 3 750 Kč"
  spfNote?: boolean;

  /* INCI + per-product hero ingredients */
  inci?: string; // plný INCI seznam jednou stringem (řazený zápis)
  heroIngredients?: {
    name: string;          // český název hero ingredience
    role: string;          // krátký popis role
  }[];
  scentTexture?: string;   // jednovětový popis textury a vůně

  /* Fáze v rituálu */
  phase?: {
    timeOfDay: "ráno" | "večer" | "ráno + večer"; // kdy se používá
    stepNumber: number;                            // pořadí v rituálu (1–4)
    stepLabel: string;                             // např. „Čištění", „Tonizace"
    before?: string;                               // předchozí krok (slug nebo název)
    after?: string;                                // následující krok
  };
};

export const V3_PRODUCTS: V3Product[] = [
  /* =========================================================
   *  SADY
   * ========================================================= */
  {
    slug: "travel-luxe-set",
    kind: "set",
    name: "Travel Luxe Set",
    subtitle: "Nejlepší první nákup, pokud J.OLI zkoušíte poprvé.",
    shortLabel: "Travel Set",
    priceCzk: 2490,
    priceText: "2 490 Kč",
    heroImg: "/v3/sets/travel_luxe_card_visual.jpg",
    gallery: [
      "/v3/sets/travel_luxe_card_visual.jpg",
      "/v3/sets/travel_luxe_open_box_mood.jpg",
      "/v3/sets/travel_luxe_banner_desktop.jpg",
      "/v3/products/travel-luxe-set.jpg",
    ],
    badge: "Doporučujeme pro první nákup",
    role: "Menší balení celého ranního i večerního rituálu.",
    description:
      "Vyzkoušíte celý rituál v menším balení. Poznáte vůně, textury i pocit na pleti bez nutnosti kupovat plnou sadu.",
    forWhom: [
      "J.OLI zkoušíte poprvé",
      "Nechcete hned kupovat plnou sadu",
      "Chcete poznat textury a vůně",
      "Nejste si jistá, co vaší pleti sedne",
    ],
    contents: [
      "No1 · Dvoufázová mycí emulze (menší formát)",
      "No2 · Bioaktivní tonikum (menší formát)",
      "No3 · Collagel hydratační sérum (menší formát)",
      "No4 denní · Vitaminové sérum + CoQ10 (menší formát)",
      "No4 noční · Regenerační sérum (menší formát)",
    ],
    howToUse: [
      "Ráno: No1 → No2 → No3 → No4 denní",
      "Večer: No1 → No2 → No3 → No4 noční",
      "Začněte menším množstvím a sledujte, jak se pleť cítí.",
    ],
    nextSteps: [
      {
        label: "Až vám rituál sedne, přejděte na Complete",
        href: "/produkty/generation-perfect-complete",
      },
    ],
    spfNote: true,
  },

  {
    slug: "generation-perfect-complete",
    kind: "set",
    name: "Generation Perfect Complete",
    subtitle: "Pro zákaznice, které chtějí rovnou celou péči.",
    shortLabel: "Complete",
    priceCzk: 9000,
    priceText: "9 000 Kč",
    heroImg: "/v3/sets/complete_set_card_visual.jpg",
    gallery: [
      "/v3/sets/complete_set_card_visual.jpg",
      "/v3/sets/complete_set_still_life.jpg",
      "/v3/sets/complete_set_banner_desktop.jpg",
      "/v3/products/complete-set.jpg",
    ],
    badge: "Úspora 3 750 Kč",
    role: "Plná balení všech produktů pro ranní i večerní rituál.",
    description:
      "Complete obsahuje plná balení všech produktů. Ráno používáte denní variantu No4, večer noční variantu No4.",
    forWhom: [
      "Chcete celý systém péče",
      "Nechcete kombinovat různé značky",
      "Chcete výhodnější cenu oproti nákupu jednotlivě",
      "Hledáte prémiový dárek",
    ],
    contents: [
      "No1 · Dvoufázová mycí emulze, 100 ml",
      "No2 · Bioaktivní tonikum, 100 ml",
      "No3 · Collagel hydratační sérum, 30 ml",
      "No4 denní · Vitaminové sérum + CoQ10, 30 ml",
      "No4 noční · Midnight Mineral Pressed Serum, 30 ml",
    ],
    economy: {
      individual: "12 750 Kč",
      set: "9 000 Kč",
      save: "3 750 Kč",
    },
    howToUse: [
      "Ráno: No1 → No2 → No3 → No4 denní",
      "Večer: No1 → No2 → No3 → No4 noční",
    ],
    nextSteps: [
      {
        label: "Začněte raději Travel Setem, pokud J.OLI neznáte",
        href: "/produkty/travel-luxe-set",
      },
    ],
    spfNote: true,
  },

  /* =========================================================
   *  JEDNOTLIVÉ PRODUKTY
   * ========================================================= */
  {
    slug: "no1",
    kind: "single",
    no: "No1",
    name: "Dvoufázová mycí emulze",
    subtitle: "Two Phase Cleanser · 100 ml",
    shortLabel: "Čištění",
    priceCzk: 1990,
    priceText: "1 990 Kč",
    heroImg: "/v3/products/gallery/no1/01.jpg",
    gallery: [
      "/v3/products/gallery/no1/01.jpg",
      "/v3/products/gallery/no1/02.jpg",
      "/v3/products/gallery/no1/03.jpg",
      "/v3/products/gallery/no1/04.jpg",
      "/v3/products/gallery/no1/05.jpg",
    ],
    phase: {
      timeOfDay: "ráno + večer",
      stepNumber: 1,
      stepLabel: "Čištění",
      after: "No2 Tonizace",
    },
    role: "První krok rituálu pro ranní i večerní čištění.",
    description:
      "Pomáhá odstranit nečistoty, SPF a make-up a připravit pleť na další kroky.",
    forWhom: [
      "Vždy jako první krok",
      "Pro všechny typy pleti",
      "Ráno i večer",
    ],
    howToUse: [
      "Naneste na suchou pleť malé množství.",
      "Jemně promasírujte a aktivujte druhou fází.",
      "Opláchněte vlažnou vodou.",
    ],
    texture: "Lehká emulze, která se v kontaktu s vodou jemně mění.",
    keyIngredients: [
      { name: "Rostlinné oleje", role: "Šetrné rozpuštění nečistot." },
      { name: "Hydroláty", role: "Zklidňující botanický základ." },
    ],
    commonMistake:
      "Produkt hned smýt. Nejprve jej jemně promasírujte a až poté pokračujte podle návodu.",
    nextSteps: [
      { label: "Pokračovat krokem No2", href: "/produkty/no2" },
    ],
    scentTexture:
      "Dvě oddělené fáze, které se před použitím protřepou do emulze. Vůni dominuje svěží citrusová kompozice z oleje citrónových semen.",
    heroIngredients: [
      { name: "Bioaktivní micelární esence", role: "Šetrná čisticí složka, která odstraňuje nečistoty bez napínání pleti." },
      { name: "Saponiny z mydlice lékařské", role: "Přírodní mycí složka s detoxikačním účinkem." },
      { name: "AHA + PHA kyseliny", role: "Jemná povrchová exfoliace pro hladší pocit pleti." },
      { name: "Hedvábné tropické oleje", role: "Pomáhají zachovat hydratovaný komfort po umytí." },
      { name: "Tekutý chlorofyl", role: "Botanická složka s detoxikačními vlastnostmi." },
      { name: "Aminokyseliny z rýže", role: "Posilující složka, která podporuje pocit komfortu." },
    ],
    inci:
      "Citrus limon fruit water, Caprylic/capric triglyceride, Passiflora edulis seed oil, Citrus limon seed oil, Saponaria officinalis root extract, Potassium cocoyl rice amino acids, Borago officinalis leaf extract, Betula pendula leaf extract, Ginkgo biloba leaf extract, Gymnema sylvestre leaf extract, Centella asiatica leaf extract, Gluconolactone, Glycolic acid, Coco caprylate carpate, Lactic acid, Glycerin, Aqua, Tocopherol, Alcohol, Citrus limon peel oil, Citrus grandis peel oil, Citrus aurantium bergamia fruit oil, Leptospermum petersonii oil, Sodium levulinate, Sodium anisate, Sodium phytate, Sodium copperchlorophyllin complex, Limonene, Linalool, Geraniol, Citral.",
  },

  {
    slug: "no2",
    kind: "single",
    no: "No2",
    name: "Bioaktivní tonikum",
    subtitle: "Bioactive Toner · 100 ml",
    shortLabel: "Tonizace",
    priceCzk: 1990,
    priceText: "1 990 Kč",
    heroImg: "/v3/products/gallery/no2/01.jpg",
    gallery: [
      "/v3/products/gallery/no2/01.jpg",
      "/v3/products/gallery/no2/02.jpg",
      "/v3/products/gallery/no2/03.jpg",
      "/v3/products/gallery/no2/04.jpg",
    ],
    phase: {
      timeOfDay: "ráno + večer",
      stepNumber: 2,
      stepLabel: "Tonizace",
      before: "No1 Čištění",
      after: "No3 Hydratace",
    },
    role: "Druhý krok po čištění. Připraví pleť na sérum.",
    description:
      "Tonizující krok, který obnoví komfort a připraví pleť na další ošetření.",
    forWhom: ["Po No1", "Před No3", "Ráno i večer"],
    howToUse: [
      "Po čištění naneste tonikum na vatový tampón nebo přímo do dlaní.",
      "Jemně přejeďte po obličeji a krku.",
    ],
    texture: "Lehká, rychle se vstřebávající kapalina.",
    keyIngredients: [
      { name: "Fermenty", role: "Podpora pocitu rovnováhy." },
      { name: "Botanické extrakty", role: "Smyslový charakter kroku." },
    ],
    commonMistake:
      "Vynechat tento krok. Bez tonizace nepřipravíte pleť optimálně na sérum.",
    nextSteps: [
      { label: "Pokračovat krokem No3", href: "/produkty/no3" },
    ],
    scentTexture:
      "Svěží tonikum ve spreji s květinovým profilem bílé růže a aloe. Aplikujte ~5 stříknutí.",
    heroIngredients: [
      { name: "NMN (Nicotinamide mononucleotide)", role: "Biotechnologická složka, která podporuje vzhled pleti a působí antioxidačně." },
      { name: "Rostlinný kolagen (aminokyseliny)", role: "Strukturní složka pro pocit pevnější pleti." },
      { name: "Probiotika (Lactobacillus ferment)", role: "Podporuje vyrovnaný komfort pleti." },
      { name: "Bylinné extrakty", role: "Chrpa, sléz, protěž, rosolovka a klitorie pro antioxidační a zklidňující charakter." },
      { name: "Hydrolát bílé růže a aloe", role: "Hydratační a aromatický základ tonika." },
    ],
    inci:
      "Aloe barbadensis leaf water, Rosa alba flower water, Collagen amino acides, Biosaccharide gum-1, Lactobacillus ferment, Lactobacillus ferment lysate, Sodium levulinate, Nicotinamide mononucleotide, Lactic acid, Glycerin, Aqua, Carica papaya fruit extract, Opuntia ficus-indica flower extract, Leontopodium alpinum flower/leaf extract, Hylocereus undatus fruit extract, Sodium anisate, Tremella fuciformis extract, Clitoria ternatea flower extract, Malva sylvestris flower extract, Centaurea cyanus flower extract, Alcohol, Leuconostoc/radish root ferment filtrate, Sodium phytate.",
  },

  {
    slug: "no3",
    kind: "single",
    no: "No3",
    name: "Collagel hydratační sérum",
    subtitle: "Hydro Boost Collagel Serum · 30 ml",
    shortLabel: "Hydratace",
    priceCzk: 2490,
    priceText: "2 490 Kč",
    heroImg: "/v3/products/gallery/no3/01.jpg",
    gallery: [
      "/v3/products/gallery/no3/01.jpg",
      "/v3/products/gallery/no3/02.jpg",
      "/v3/products/gallery/no3/03.jpg",
    ],
    phase: {
      timeOfDay: "ráno + večer",
      stepNumber: 3,
      stepLabel: "Hydratace",
      before: "No2 Tonizace",
      after: "No4 (denní nebo noční)",
    },
    role: "Hydratační mezikrok pro ranní i večerní rituál.",
    description:
      "Hluboce hydratující sérum s peptidy. Pomáhá pleti působit pevněji a plněji.",
    forWhom: ["Po No2", "Před No4", "Ráno i večer"],
    howToUse: [
      "Naneste 2–3 kapky na čistou tonizovanou pleť.",
      "Jemně vmasírujte do obličeje, krku a dekoltu.",
    ],
    texture: "Gelové sérum s lehkou texturou.",
    keyIngredients: [
      { name: "Kyselina hyaluronová", role: "Hydratace v hloubce i na povrchu." },
      { name: "Peptidy", role: "Podpora pocitu pevnosti." },
    ],
    commonMistake:
      "Aplikovat příliš mnoho. Stačí 2–3 kapky, více ne.",
    nextSteps: [
      {
        label: "Ráno pokračovat No4 denní",
        href: "/produkty/no4-denni-vitaminove-serum-coq10",
      },
      {
        label: "Večer pokračovat No4 noční",
        href: "/produkty/no4-nocni-regeneracni-serum",
      },
    ],
    scentTexture:
      "Gelové sérum s lehkou texturou, čistou okurkovou vůní a osvěžujícím pocitem. Před použitím protřepat.",
    heroIngredients: [
      { name: "Hydratační peptidy", role: "Acetyl hexapeptide-8 jako jemná botanická alternativa k injekčním proteinům." },
      { name: "Kyselina hyaluronová", role: "Nízká i střední molekulární váha pro dlouhotrvající hydratovaný pocit." },
      { name: "Tekutý malachit (minerální extrakt)", role: "Minerální složka, která dodává séru charakter." },
      { name: "Okurka + aloe vera hydroláty", role: "Botanické základy pro svěží hydrataci a komfort." },
      { name: "AHA — kyselina mléčná", role: "Jemná exfoliační podpora pro hladší vzhled." },
    ],
    inci:
      "Aloe barbadensis leaf water, Cucumis sativus fruit water, Acetyl hexapeptide-8, Sodium hyaluronate, Sodium PCA, Biosaccharide gum-1, Cucumis sativus fruit extract, Glyceryl caprylate, Lactic acid, Malachite extract, Tremella fuciformis extract, Glycerin, Aqua, Sodium phytate, Alcohol, Clitoria ternatea flower extract, Malva sylvestris flower extract, Centaurea cyanus flower extract, Aroma, Caprylyl glycol.",
  },

  {
    slug: "no4-denni-vitaminove-serum-coq10",
    kind: "single",
    no: "No4 denní",
    name: "Denní vitaminové sérum + CoQ10",
    subtitle: "Daily Superfood Moisture Serum + CoQ10 · 30 ml",
    shortLabel: "Ranní péče",
    priceCzk: 3140,
    priceText: "3 140 Kč",
    heroImg: "/v3/products/gallery/no4-day/01.jpg",
    gallery: [
      "/v3/products/gallery/no4-day/01.jpg",
      "/v3/products/gallery/no4-day/02.jpg",
      "/v3/products/gallery/no4-day/03.jpg",
      "/v3/products/gallery/no4-day/04.jpg",
      "/v3/products/gallery/no4-day/05.jpg",
    ],
    phase: {
      timeOfDay: "ráno",
      stepNumber: 4,
      stepLabel: "Ranní aktivní péče",
      before: "No3 Hydratace",
      after: "SPF (při pobytu venku)",
    },
    role: "Ranní vitaminové sérum + CoQ10.",
    description:
      "Denní aktivní krok zaměřený na svěžejší a hydratovaně působící vzhled pleti.",
    forWhom: ["Ráno po No3", "Pro pravidelnou denní péči"],
    howToUse: [
      "Ráno po No3 naneste 2–3 kapky.",
      "Jemně vmasírujte do obličeje, krku a dekoltu.",
      "Při pobytu venku doplňte SPF.",
    ],
    texture: "Lehké vyživující sérum s vitaminovým komplexem.",
    keyIngredients: [
      { name: "CoQ10", role: "Antioxidační podpora." },
      { name: "Vitaminový komplex", role: "Svěžejší vzhled pleti." },
    ],
    commonMistake:
      "Záměna s nočním No4. Denní No4 používejte ráno, noční No4 večer.",
    nextSteps: [
      {
        label: "Vyzkoušet celý rituál Travel Setem",
        href: "/produkty/travel-luxe-set",
      },
    ],
    spfNote: true,
    scentTexture:
      "Hedvábný olej s přírodní broskvovo-citrusovou vůní (pomelo a citron). Aplikujte 2–3 kapky.",
    heroIngredients: [
      { name: "Koenzym Q10 (Ubiquinone)", role: "Čistý antioxidant pro denní podporu vzhledu pleti." },
      { name: "Vitamin E (Tocopherol)", role: "Přírodní antioxidant, který přispívá ke stabilitě receptury." },
      { name: "Extrakt z granátového jablka", role: "CO₂ extrakt jako botanická antioxidační složka." },
      { name: "Botanické oleje", role: "Kakadu plum, passion fruit, semínko jablka, cacay, ostružina, guava, opuncie, semínko okurky — bohatá vyživující směs." },
    ],
    inci:
      "Terminalia ferdinandiana fruit seed oil, Passiflora edulis seed oil, Pyrus malus seed oil, Caryodendron orinocense seed oil, Rubus occidentalis seed oil, Psidium guajava seed oil, Opuntia ficus indica seed oil, Cucumis sativus seed oil, Caprylic/capric triglyceride, Ubiquinone, Tocopherol, Citrus grandis maxima peel oil, Citrus limon peel oil, Punica granatum seed extract, Aroma, Limonene, Linalool, Geraniol, Citral.",
  },

  {
    slug: "no4-nocni-regeneracni-serum",
    kind: "single",
    no: "No4 noční",
    name: "Noční regenerační sérum",
    subtitle: "Midnight Mineral Pressed Serum · 30 ml",
    shortLabel: "Večerní péče",
    priceCzk: 3140,
    priceText: "3 140 Kč",
    heroImg: "/v3/products/gallery/no4-night/01.jpg",
    gallery: [
      "/v3/products/gallery/no4-night/01.jpg",
      "/v3/products/gallery/no4-night/02.jpg",
      "/v3/products/gallery/no4-night/03.jpg",
      "/v3/products/gallery/no4-night/04.jpg",
      "/v3/products/gallery/no4-night/05.jpg",
      "/v3/products/gallery/no4-night/06.jpg",
    ],
    phase: {
      timeOfDay: "večer",
      stepNumber: 4,
      stepLabel: "Večerní regenerace",
      before: "No3 Hydratace",
    },
    role: "Večerní regenerační sérum.",
    description:
      "Výživnější večerní krok, který uzavírá rituál po No3 a podporuje pocit komfortu pleti.",
    forWhom: ["Večer po No3", "Závěr večerního rituálu"],
    howToUse: [
      "Večer po No3 naneste 2–3 kapky.",
      "Jemně vmasírujte do obličeje, krku a dekoltu.",
      "Nechte vstřebat před spánkem.",
    ],
    texture: "Výživnější olejovité sérum s minerální stopou.",
    keyIngredients: [
      { name: "Minerály", role: "Smyslový a regenerační charakter." },
      { name: "Botanické oleje", role: "Komfort a výživa večerního kroku." },
    ],
    commonMistake:
      "Záměna s denním No4. Noční No4 patří výhradně do večerního rituálu.",
    nextSteps: [
      {
        label: "Pořídit celou sadu",
        href: "/produkty/generation-perfect-complete",
      },
    ],
    scentTexture:
      "Bohatá olejovo-balsámová textura. Květinovo-aromatický profil: marocký heřmánek, jasmín, růže, modrá vratič, geranium.",
    heroIngredients: [
      { name: "24karátové zlato a stříbro", role: "Luxusní minerální stopa pro smyslový charakter večerního kroku." },
      { name: "Vitamin C ester", role: "Tetrahexyldecyl ascorbate — stabilní antioxidant pro svěží vzhled pleti." },
      { name: "Bakuchiol", role: "Botanická alternativa retinolu, kterou komunikujeme jako podporu vzhledu pleti." },
      { name: "Oryzanol", role: "Antioxidant z rýžových otrub." },
      { name: "Marocký heřmánek (modrá vratič)", role: "Aromatická složka, která dodává séru klidný barevný a smyslový tón." },
      { name: "Exotické oleje", role: "Maqui berry, kakadu plum, cacay, pequi, opuncie — výživný botanický základ." },
    ],
    inci:
      "Aristotelia chilensis seed oil, Terminalia ferdinandiana fruit seed oil, Caryodendron orinocense seed oil, Caryocar brasiliense fruit oil, Cucumis sativus seed oil, Opuntia ficus indica seed oil, Tetrahexyldecyl ascorbate, Oryzanol, Jasminum sambac flower cera, Rosa damascena flower cera, Bakuchiol, Caprylic/capric triglyceride, Candelilla cera, Tocopherol, Lavandula angustifolia oil, Tanacetum annuum flower oil, Jasminum sambac flower extract, Rosa damascena flower oil, Gardenia taitensis flower extract, Pelargonium graveolens flower oil, 24k Gold, Silver, Limonene, Linalool, Citronellol, Citral, Geraniol, Farnesol, Eugenol, Benzyl alcohol, Benzyl benzoate.",
  },
];

export function getV3ProductBySlug(slug: string): V3Product | undefined {
  return V3_PRODUCTS.find((p) => p.slug === slug);
}

export function getV3Singles(): V3Product[] {
  return V3_PRODUCTS.filter((p) => p.kind === "single");
}

export function getV3Sets(): V3Product[] {
  return V3_PRODUCTS.filter((p) => p.kind === "set");
}
