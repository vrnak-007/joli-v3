export type RoutineStep = {
  step: string;
  phase: string;
  productName: string;
  amount: string;
  how: string;
  goal: string;
  image: string;
  isJar?: boolean;
};

export const morningRoutine: RoutineStep[] = [
  {
    step: "01",
    phase: "Čištění",
    productName: "No1 Dvoufázová mycí emulze",
    amount: "1–2 dávky",
    how: "Protřepejte. Naneste na navlhčenou pleť, jemně masírujte a opláchněte vlažnou vodou.",
    goal: "Odstranit nečistoty a připravit pleť na další kroky.",
    image: "/assets/joliorigins/no1-cleanser-cutout.png",
  },
  {
    step: "02",
    phase: "Tonizace",
    productName: "No2 Bioaktivní tonikum",
    amount: "3–5 stříknutí",
    how: "Nastříkejte na pleť nebo do dlaní a jemně vklepejte. Nechte krátce vstřebat.",
    goal: "Osvěžit pleť a připravit ji na hydratační sérum.",
    image: "/assets/joliorigins/no2-toner-cutout.png",
  },
  {
    step: "03",
    phase: "Hydratace",
    productName: "No3 Collagel hydratační sérum",
    amount: "2–3 dávky",
    how: "Naneste na pleť, krk a dekolt. Jemně vklepejte a nechte krátce usadit.",
    goal: "Dodat pleti hydrataci a podpořit komfort po celý den.",
    image: "/assets/joliorigins/no3-collagel-cutout.png",
  },
  {
    step: "04",
    phase: "Denní péče",
    productName: "No4 Denní vitaminové sérum + CoQ10",
    amount: "2–3 kapky",
    how: "Naneste na pleť po séru. Nechte krátce vstřebat a pokračujte SPF, pokud jdete ven.",
    goal: "Antioxidanty a výživa pro svěží a vitální vzhled.",
    image: "/assets/joliorigins/no4-day-serum-cutout.png",
  },
];

export const eveningRoutine: RoutineStep[] = [
  {
    step: "01",
    phase: "Čištění",
    productName: "No1 Dvoufázová mycí emulze",
    amount: "1–2 dávky",
    how: "Protřepejte. Naneste na vlhkou pleť, jemně masírujte a opláchněte.",
    goal: "Odstranit make-up, SPF a nečistoty dne.",
    image: "/assets/joliorigins/no1-cleanser-cutout.png",
  },
  {
    step: "02",
    phase: "Tonizace",
    productName: "No2 Bioaktivní tonikum",
    amount: "3–5 stříknutí",
    how: "Nastříkejte na pleť nebo do dlaní a jemně vklepejte. Nechte krátce vstřebat.",
    goal: "Zklidnit a připravit pleť na hydrataci.",
    image: "/assets/joliorigins/no2-toner-cutout.png",
  },
  {
    step: "03",
    phase: "Hydratace",
    productName: "No3 Collagel hydratační sérum",
    amount: "2–3 dávky",
    how: "Naneste na pleť, krk a dekolt. Jemně vklepejte a nechte krátce usadit.",
    goal: "Dodat pleti hloubkovou hydrataci.",
    image: "/assets/joliorigins/no3-collagel-cutout.png",
  },
  {
    step: "05",
    phase: "Noční obnova",
    productName: "No5 Noční regenerační sérum",
    amount: "malé množství",
    how: "Naneste jako poslední krok. Jemně vklepejte a nechte působit přes noc.",
    goal: "Vyživit a podpořit regeneraci během spánku.",
    image: "/assets/joliorigins/no4-night-serum-cutout.png",
    isJar: true,
  },
];

export const firstWeek = [
  { range: "1–2 dny", text: "Používejte základní pořadí s menším množstvím." },
  { range: "3–5 dní", text: "Pokračujte pravidelně a sledujte komfort pleti." },
  { range: "6–7 dní", text: "Upravte množství podle potřeb vaší pleti." },
];

export const howMuch = [
  { label: "No1 Čištění", value: "1–2 dávky" },
  { label: "No2 Tonikum", value: "3–5 stříknutí" },
  { label: "No3 Hydratace", value: "2–3 dávky" },
  { label: "No4 Denní sérum", value: "2–3 kapky" },
  { label: "No5 Noční sérum", value: "malé množství" },
];

export const avoidList = [
  "Nanášení na úplně suchou pleť",
  "Příliš mnoho produktu",
  "Tření místo vklepávání",
  "Vynechání hydratačního kroku",
  "Používání horké vody",
  "Očekávání okamžité proměny",
];

export const shortOnTime = [
  {
    title: "Rychlé ráno",
    sequence: "01 → 02 → 03 → SPF",
    text: "Základní kroky a SPF pro ochranu během dne.",
  },
  {
    title: "Rychlý večer",
    sequence: "01 → 02 → 03 → 05",
    text: "Čistý základ, hydratace a výživný závěr.",
  },
];
