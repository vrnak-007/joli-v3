export type IconKey =
  | "drop"
  | "shield"
  | "sun"
  | "leaf"
  | "cycle"
  | "aroma";

export type LongevityPillar = {
  icon: IconKey;
  title: string;
  text: string;
};

export const longevityPillars: LongevityPillar[] = [
  {
    icon: "drop",
    title: "Hydratace",
    text: "No3 dodává vodní fázi rituálu. Aby pleť nepůsobila unaveně a napjatě po čištění.",
  },
  {
    icon: "shield",
    title: "Bariéra",
    text: "Jasné pořadí pěti kroků snižuje riziko, že pleť přetížíte produkty z různých značek.",
  },
  {
    icon: "sun",
    title: "Antioxidační péče",
    text: "No4 je ranní krok pro vzhled pleti vystavené městskému prostředí. Pokud jdete ven, vždy doplňte SPF.",
  },
  {
    icon: "leaf",
    title: "Výživa",
    text: "No5 uzavírá večerní rituál výživnou texturou. Cílem je, aby pleť ráno působila odpočatěji.",
  },
  {
    icon: "cycle",
    title: "Pravidelnost",
    text: "Ráno 01 → 02 → 03 → 04, večer 01 → 02 → 03 → 05. Stejný logický postup každý den.",
  },
  {
    icon: "aroma",
    title: "Smyslový prožitek",
    text: "Textury a vůně, ke kterým se chcete vracet. Pravidelnost je největší účinná látka.",
  },
];

export type IngredientCard = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

export const ingredientCards: IngredientCard[] = [
  {
    title: "Vlastní botanické extrakty",
    text: "Byliny, maceráty a hydroláty připravujeme v menších objemech s důrazem na čerstvost, vůni a charakter.",
    image: "/assets/joliorigins/ritual/extrakty.png",
    alt: "Botanické extrakty a květy",
  },
  {
    title: "Moderní aktivní látky",
    text: "Peptidy, probiotika, kyselina hyaluronová, CoQ10 a další složky podle konkrétních potřeb pleti.",
    image: "/assets/joliorigins/ritual/biotech.png",
    alt: "Biotechnologické aktivní látky",
  },
  {
    title: "Smyslová aromachologie",
    text: "Vůně není parfemace navíc. Je součástí rituálu, který má ráno probudit a večer zklidnit.",
    image: "/assets/joliorigins/ritual/aroma.png",
    alt: "Aromachologie — růže a vůně",
  },
  {
    title: "Textury, které chcete používat",
    text: "Luxusní péče musí být funkční, ale také příjemná. Jinak se z ní nestane pravidelnost.",
    image: "/assets/joliorigins/ritual/aplikace.png",
    alt: "Textury a aplikace",
  },
];

export const promises = [
  "Promyšlený systém péče",
  "Kvalitní a koncentrované suroviny",
  "Malé šarže a osobní kontrolu",
  "Jasné návody",
  "Smyslový prožitek",
  "Možnost začít postupně",
];

export const nonPromises = [
  "Okamžité zázraky",
  "Léčbu kožních onemocnění",
  "Jeden produkt na vše",
  "Nekonečné trendy",
  "Kosmetický chaos",
];

export type StartPath = {
  num: string;
  title: string;
  text: string;
};

export const startPaths: StartPath[] = [
  {
    num: "01",
    title: "Poznat filozofii",
    text: "Objevte rituál dlouhověkosti pleti.",
  },
  {
    num: "02",
    title: "Vyzkoušet textury",
    text: "Travel Luxe Set jako první krok.",
  },
  {
    num: "03",
    title: "Celý systém",
    text: "Generation Perfect Ritual jako kompletní péče.",
  },
];

export const smallBatchChecklist = [
  "Čerstvější produkt",
  "Větší kontrola nad výrobou",
  "Menší riziko kompromisu",
  "Pocit výjimečnosti",
];
