/**
 * J.OLI ORIGINS v3 — Ingredients library
 *
 * Pravidla:
 *  - claimRisk "high" → v preview žádné silné claimy; v detailu pouze opatrné kosmetické formulace.
 *  - Žádné léčebné formulace.
 *  - Vždy „pomáhá pleti…", „přispívá k pocitu…", „podporuje vzhled…".
 */

export type IngredientCategory =
  | "hydration"
  | "antioxidants"
  | "nourishing_oils"
  | "soothing"
  | "exfoliation_texture"
  | "ferments_biotech"
  | "aroma_hydrolates"
  | "minerals_luxury"
  | "stability";

export type Ingredient = {
  id: string;
  nameCs: string;
  nameInci?: string;
  category: IngredientCategory[];
  role: string;
  shortDescription: string;
  longDescription?: string;
  foundIn?: string[];
  claimRisk?: "low" | "medium" | "high";
};

export const INGREDIENT_CATEGORIES: { id: IngredientCategory; label: string; text: string }[] = [
  {
    id: "hydration",
    label: "Hydratace",
    text: "Hydratační složky pomáhají pleti udržet vodu, působit plnější a zanechat komfortnější pocit po aplikaci.",
  },
  {
    id: "antioxidants",
    label: "Antioxidanty a jas",
    text: "Antioxidační složky pomáhají chránit vzhled pleti před každodenní zátěží prostředí a podporují svěžejší, jasnější vzhled.",
  },
  {
    id: "nourishing_oils",
    label: "Výživa a oleje",
    text: "Výživné oleje, vosky a másla dodávají textuře měkkost, skluz a komfort. V noční péči pomáhají uzavřít rituál bohatším krokem.",
  },
  {
    id: "soothing",
    label: "Zklidnění",
    text: "Zklidňující botanické složky podporují pocit komfortu a pomáhají pleti působit vyrovnaněji.",
  },
  {
    id: "exfoliation_texture",
    label: "Exfoliace a textura",
    text: "Jemně exfoliační složky pomáhají zjemnit povrch pleti a podpořit hladší vzhled. Patří do péče používané s rozmyslem.",
  },
  {
    id: "ferments_biotech",
    label: "Fermenty a biotechnologie",
    text: "Fermentované a biotechnologické složky doplňují botanický základ o modernější kosmetický přístup.",
  },
  {
    id: "aroma_hydrolates",
    label: "Vůně a hydroláty",
    text: "Vonné a aromatické složky dávají produktům jejich smyslový charakter. U citlivější pleti doporučujeme začínat postupně a sledovat individuální komfort.",
  },
  {
    id: "minerals_luxury",
    label: "Minerály a luxusní složky",
    text: "Minerální a luxusní prvky posilují prémiový charakter rituálu. Komunikujeme je jako součást smyslovosti, textury a zážitku.",
  },
  {
    id: "stability",
    label: "Konzervace a stabilita",
    text: "Stabilita receptury je součástí kvalitní kosmetiky. Pomocné složky pomáhají udržet texturu, stabilitu a bezpečné používání produktu.",
  },
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: "hyaluronic-acid",
    nameCs: "Kyselina hyaluronová",
    nameInci: "Sodium Hyaluronate",
    category: ["hydration"],
    role: "Hydratace v hloubce i na povrchu",
    shortDescription: "Pomáhá pleti působit plněji a hydratovaněji.",
    longDescription:
      "Sodium Hyaluronate je hydratující složka, která pomáhá pleti zadržovat vlhkost a podporuje pocit komfortu. V kombinaci s dalšími hydratanty přispívá k vyrovnanějšímu vzhledu pleti.",
    foundIn: ["No3"],
  },
  {
    id: "coq10",
    nameCs: "Koenzym Q10",
    nameInci: "Ubiquinone",
    category: ["antioxidants"],
    role: "Antioxidační podpora denní péče",
    shortDescription: "Pomáhá chránit vzhled pleti před každodenní zátěží.",
    foundIn: ["No4 denní"],
    claimRisk: "low",
  },
  {
    id: "peptides",
    nameCs: "Peptidy",
    nameInci: "Palmitoyl Tripeptide-1, Acetyl Hexapeptide-8",
    category: ["antioxidants", "hydration"],
    role: "Podpora pocitu pevnosti pleti",
    shortDescription: "Pomáhají pleti působit pevněji a opečovaněji.",
    foundIn: ["No3"],
    claimRisk: "medium",
  },
  {
    id: "vitamin-c-derivative",
    nameCs: "Vitamin C (stabilní derivát)",
    nameInci: "Ascorbyl Glucoside",
    category: ["antioxidants"],
    role: "Svěžejší a jasnější vzhled",
    shortDescription: "Pomáhá podpořit jasnější a svěžejší vzhled pleti.",
    foundIn: ["No4 denní"],
    claimRisk: "low",
  },
  {
    id: "niacinamide",
    nameCs: "Niacinamid",
    nameInci: "Niacinamide",
    category: ["soothing", "antioxidants"],
    role: "Vyrovnaný komfort pleti",
    shortDescription: "Pomáhá pleti působit komfortněji a vyrovnaněji.",
    foundIn: ["No2", "No3"],
    claimRisk: "low",
  },
  {
    id: "bakuchiol",
    nameCs: "Bakuchiol",
    nameInci: "Bakuchiol",
    category: ["antioxidants", "nourishing_oils"],
    role: "Jemný botanický anti-age příspěvek",
    shortDescription:
      "Botanická složka, která podporuje vzhled pleti v noční péči.",
    longDescription:
      "Bakuchiol je rostlinná molekula. Komunikujeme ji jako podporu vzhledu pleti, ne jako léčebnou alternativu retinolu.",
    foundIn: ["No4 noční"],
    claimRisk: "high",
  },
  {
    id: "nmn",
    nameCs: "NMN",
    nameInci: "Nicotinamide Mononucleotide",
    category: ["ferments_biotech"],
    role: "Biotechnologická složka noční péče",
    shortDescription:
      "Doplňuje botanický základ o moderní biotechnologickou složku.",
    foundIn: ["No4 noční"],
    claimRisk: "high",
  },
  {
    id: "squalane",
    nameCs: "Skvalan",
    nameInci: "Squalane",
    category: ["nourishing_oils"],
    role: "Komfort a měkkost textury",
    shortDescription:
      "Pomáhá zanechat pleť na pohled hladší a měkčí.",
    foundIn: ["No3", "No4 noční"],
  },
  {
    id: "rosehip-oil",
    nameCs: "Šípkový olej",
    nameInci: "Rosa Canina Fruit Oil",
    category: ["nourishing_oils", "antioxidants"],
    role: "Výživa a antioxidační podpora",
    shortDescription:
      "Bohatý botanický olej, který přispívá ke smyslovému charakteru noční péče.",
    foundIn: ["No4 noční"],
  },
  {
    id: "centella",
    nameCs: "Centella asiatica",
    nameInci: "Centella Asiatica Extract",
    category: ["soothing"],
    role: "Zklidňující botanický extrakt",
    shortDescription:
      "Podporuje pocit komfortu a vyrovnanějšího vzhledu pleti.",
    foundIn: ["No2"],
  },
  {
    id: "panthenol",
    nameCs: "Panthenol",
    nameInci: "Panthenol",
    category: ["soothing", "hydration"],
    role: "Zklidnění a hydratace",
    shortDescription:
      "Pomáhá pleti udržet komfort a hydratovaný pocit.",
    foundIn: ["No1", "No3"],
  },
  {
    id: "enzymes",
    nameCs: "Enzymové frakce",
    nameInci: "Subtilisin",
    category: ["exfoliation_texture"],
    role: "Jemný povrchový hladký vzhled",
    shortDescription:
      "Jemně podporuje hladší vzhled povrchu pleti.",
    foundIn: [],
    claimRisk: "medium",
  },
  {
    id: "lactobacillus-ferment",
    nameCs: "Probiotický ferment",
    nameInci: "Lactobacillus Ferment",
    category: ["ferments_biotech", "soothing"],
    role: "Moderní biotechnologická podpora",
    shortDescription:
      "Botanický základ doplňuje modernější kosmetický přístup.",
    foundIn: ["No2"],
    claimRisk: "medium",
  },
  {
    id: "rose-hydrolate",
    nameCs: "Růžový hydrolát",
    nameInci: "Rosa Damascena Flower Water",
    category: ["aroma_hydrolates", "soothing"],
    role: "Smyslový charakter rituálu",
    shortDescription:
      "Aromatický prvek, který dodává rituálu klidný smyslový rozměr.",
    foundIn: ["No2"],
  },
  {
    id: "neroli",
    nameCs: "Neroli",
    nameInci: "Citrus Aurantium Amara Flower Oil",
    category: ["aroma_hydrolates"],
    role: "Vůně rituálu",
    shortDescription: "Jemná květinová vůně, která doplňuje smyslový charakter péče.",
    foundIn: ["No1"],
  },
  {
    id: "gold-24k",
    nameCs: "24karátové zlato",
    nameInci: "Gold",
    category: ["minerals_luxury"],
    role: "Luxusní zlaté šupiny",
    shortDescription:
      "Zlaté šupiny dodávají séru viditelný luxusní detail a posilují smyslový charakter rituálu.",
    longDescription:
      "Drobné šupiny 24karátového zlata viditelně mihotají v textuře séra. V kosmetice je komunikujeme jako součást smyslovosti, prémiového dojmu a textury, ne jako léčebnou složku.",
    foundIn: ["No4 noční"],
  },
  {
    id: "silver",
    nameCs: "Stříbro",
    nameInci: "Silver",
    category: ["minerals_luxury"],
    role: "Doplňková minerální stopa",
    shortDescription:
      "Stříbrná složka v doprovodu zlata tvoří charakteristický minerální profil nočního séra.",
    foundIn: ["No4 noční"],
  },
  {
    id: "pearl",
    nameCs: "Perleťový prášek",
    nameInci: "Hydrolyzed Pearl",
    category: ["minerals_luxury"],
    role: "Luxusní minerální stopa",
    shortDescription:
      "Posiluje prémiový charakter noční péče.",
    foundIn: ["No4 noční"],
  },
  {
    id: "tocopherol",
    nameCs: "Vitamin E",
    nameInci: "Tocopherol",
    category: ["antioxidants", "stability"],
    role: "Antioxidant + stabilita receptury",
    shortDescription:
      "Pomáhá udržet stabilitu textury a podpořit antioxidační charakter receptury.",
    foundIn: ["No3", "No4 denní", "No4 noční"],
  },
  {
    id: "preservation-system",
    nameCs: "Stabilizační systém",
    nameInci: "Pentylene Glycol, Benzyl Alcohol, Dehydroacetic Acid",
    category: ["stability"],
    role: "Bezpečné používání",
    shortDescription:
      "Pomáhá udržet stabilitu, texturu a bezpečné používání receptury.",
    foundIn: ["všechny produkty"],
  },
];
