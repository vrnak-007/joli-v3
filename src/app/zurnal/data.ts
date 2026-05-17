export type JournalCategory =
  | "ritual"
  | "longevity"
  | "ingredients"
  | "how-to"
  | "seasonal"
  | "small-batch"
  | "salons";

export type JournalArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: JournalCategory;
  categoryLabel: string;
  readingTime: string;
  image: string;
  featured?: boolean;
  pinned?: boolean;
  tags?: string[];
  reads?: number;
};

/* ============================================================
   ARTICLE DETAIL (body content for /zurnal/[slug])
============================================================ */
export type ArticleStep = { number: string; phase: string; text: string };

export type ArticleBlock =
  | { type: "heading"; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "stepList"; steps: ArticleStep[] }
  | { type: "inlineCta"; ctaId: string };

export type ArticleInlineCta = {
  id: string;
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
  image: string;
};

export type ArticleDetail = {
  slug: string;
  author: string;
  updatedAt: string;
  publishedAt?: string;
  displayTags: string[];
  summaryBullets: string[];
  tableOfContents: { id: string; label: string }[];
  blocks: ArticleBlock[];
  inlineCtas: ArticleInlineCta[];
  relatedSlugs: string[];
  seoTitle?: string;
  seoDescription?: string;
};

export const categoryMeta: Record<
  JournalCategory,
  { label: string; iconKey: string }
> = {
  ritual: { label: "Rituál", iconKey: "ritual" },
  longevity: { label: "Longevity", iconKey: "longevity" },
  ingredients: { label: "Ingredience", iconKey: "ingredients" },
  "how-to": { label: "Jak používat", iconKey: "howto" },
  seasonal: { label: "Sezónní péče", iconKey: "seasonal" },
  "small-batch": { label: "Malé šarže", iconKey: "small-batch" },
  salons: { label: "Pro salony", iconKey: "salons" },
};

export const categoryOrder: JournalCategory[] = [
  "ritual",
  "longevity",
  "ingredients",
  "how-to",
  "seasonal",
  "small-batch",
  "salons",
];

export const articles: JournalArticle[] = [
  {
    id: "proc-ritual-ne-rutina",
    slug: "proc-ritual-ne-rutina",
    title: "Proč rituál, ne rutina",
    excerpt:
      "Pět kroků, které dávají péči řád, podporují její komfort a vám chvíli jen pro sebe.",
    category: "ritual",
    categoryLabel: "Rituál",
    readingTime: "7 min čtení",
    image: "/assets/joliorigins/zurnal/featured-ritual.png",
    featured: true,
    pinned: true,
    tags: ["rituál", "longevity", "péče"],
    reads: 5420,
  },
  {
    id: "jak-pouzivat-ritual-rano-a-vecer",
    slug: "jak-pouzivat-ritual-rano-a-vecer",
    title: "Jak používat rituál ráno a večer",
    excerpt:
      "Detailní průvodce správným pořadím, množstvím a vrstvením produktů.",
    category: "how-to",
    categoryLabel: "Jak používat",
    readingTime: "9 min čtení",
    image: "/assets/joliorigins/zurnal/howto-rano-vecer.png",
    featured: true,
    pinned: true,
    tags: ["jak používat", "vrstvení", "ráno", "večer"],
    reads: 4980,
  },
  {
    id: "skin-longevity-bez-prazdnych-slibu",
    slug: "skin-longevity-bez-prazdnych-slibu",
    title: "Skin longevity bez prázdných slibů",
    excerpt:
      "Proč dlouhodobá péče začíná pravidelností a pochopením potřeb vaší pleti.",
    category: "longevity",
    categoryLabel: "Longevity",
    readingTime: "6 min čtení",
    image: "/assets/joliorigins/zurnal/longevity.png",
    featured: true,
    tags: ["longevity", "pravidelnost"],
    reads: 3120,
  },
  {
    id: "travel-luxe-set-jako-prvni-krok",
    slug: "travel-luxe-set-jako-prvni-krok",
    title: "Travel Luxe Set jako první krok",
    excerpt:
      "Bezpečný vstup do světa J.Oli Origins — ideální na cesty i na zkoušku.",
    category: "ritual",
    categoryLabel: "Rituál",
    readingTime: "5 min čtení",
    image: "/assets/joliorigins/zurnal/travel-luxe.png",
    featured: true,
    tags: ["travel luxe", "začátek"],
    reads: 2980,
  },
  {
    id: "bakuchiol-v-nocni-peci",
    slug: "bakuchiol-v-nocni-peci",
    title: "Co v kosmetice znamená bakuchiol a proč patří do noční péče",
    excerpt:
      "Jemná alternativa retinolu, která podporuje hebkost a mladistvě působící vzhled pleti.",
    category: "ingredients",
    categoryLabel: "Ingredience",
    readingTime: "6 min čtení",
    image: "/assets/joliorigins/zurnal/bakuchiol.png",
    tags: ["bakuchiol", "noční péče", "ingredience"],
    reads: 2150,
  },
  {
    id: "kolik-produktu-opravdu-staci",
    slug: "kolik-produktu-opravdu-staci",
    title: "Kolik produktu opravdu stačí",
    excerpt:
      "Množství, které dává smysl — pro pleť i pro vaši peněženku.",
    category: "how-to",
    categoryLabel: "Jak používat",
    readingTime: "7 min čtení",
    image: "/assets/joliorigins/zurnal/aplikace.png",
    tags: ["jak používat", "aplikace", "množství"],
    reads: 1980,
  },
  {
    id: "hydratace-je-zaklad",
    slug: "hydratace-je-zaklad",
    title: "Hydratace je základ. Tady je proč.",
    excerpt:
      "Jak správná hydratace ovlivňuje komfort, pružnost a celkový vzhled pleti.",
    category: "longevity",
    categoryLabel: "Longevity",
    readingTime: "6 min čtení",
    image: "/assets/joliorigins/zurnal/hydratace.png",
    tags: ["hydratace", "longevity"],
    reads: 1740,
  },
  {
    id: "zimni-pece-jak-upravit-ritual",
    slug: "zimni-pece-jak-upravit-ritual",
    title: "Zimní péče: jak upravit rituál v chladných dnech",
    excerpt:
      "Jednoduché úpravy pro ochranu bariéry, hydrataci a komfort během zimy.",
    category: "seasonal",
    categoryLabel: "Sezónní péče",
    readingTime: "6 min čtení",
    image: "/assets/joliorigins/zurnal/zimni.png",
    tags: ["zima", "sezónní péče", "bariéra"],
    reads: 1320,
  },
];

/* ============================================================
   ARTICLE DETAILS — body content keyed by slug
============================================================ */
export const articleDetails: Record<string, ArticleDetail> = {
  "proc-ritual-ne-rutina": {
    slug: "proc-ritual-ne-rutina",
    author: "J.Oli Origins",
    updatedAt: "16. května 2026",
    displayTags: ["Rituál", "Skin longevity", "Jak začít"],
    summaryBullets: [
      "proč rutina často selhává",
      "proč rituál dává péči lepší řád",
      "jak na sebe navazují jednotlivé kroky",
      "kdy začít Travel Luxe Setem a kdy kompletní sadou",
    ],
    tableOfContents: [
      { id: "proc-rutina-casto-selhava", label: "Proč rutina často selhává" },
      { id: "co-znamena-ritual", label: "Co znamená rituál" },
      { id: "pet-kroku", label: "Pět kroků, které dávají smysl" },
      { id: "jak-zacit", label: "Jak začít" },
    ],
    inlineCtas: [
      {
        id: "cta-pouziti",
        title: "Chcete vidět, jak rituál funguje v praxi?",
        text: "Podívejte se na přehled ranního a večerního použití.",
        ctaLabel: "Zobrazit detailní použití",
        href: "/ritual/pouziti",
        image: "/assets/joliorigins/zurnal/howto-rano-vecer.png",
      },
      {
        id: "cta-travel",
        title: "Nejste si jistá, zda začít celou sadou?",
        text: "Travel Luxe Set je bezpečný první vstup do textur a logiky rituálu.",
        ctaLabel: "Vyzkoušet Travel Luxe Set",
        href: "/produkty/travel-luxe-set",
        image: "/assets/joliorigins/zurnal/travel-luxe.png",
      },
    ],
    blocks: [
      { type: "heading", id: "proc-rutina-casto-selhava", text: "Proč rutina často selhává" },
      {
        type: "paragraph",
        text: "Rutina bývá rychlá, mechanická a snadno se vytratí ve spěchu. Pleť ale potřebuje víc než náhodné kroky — potřebuje řád, návaznost a vědomý dotek. Když přesně víme, co, kdy a proč používáme, výsledky jsou viditelné a dlouhodobé.",
      },
      { type: "heading", id: "co-znamena-ritual", text: "Co znamená rituál" },
      {
        type: "paragraph",
        text: "Rituál není o dokonalosti. Je to chvíle, kdy se zpomalíte a věnujete pleti i sobě plnou pozornost. Pět kroků, které pracují v harmonii, podporují přirozené procesy pleti a posilují její odolnost i krásu v čase.",
      },
      { type: "inlineCta", ctaId: "cta-pouziti" },
      { type: "heading", id: "pet-kroku", text: "Pět kroků, které dávají smysl" },
      {
        type: "stepList",
        steps: [
          { number: "01", phase: "Čištění",     text: "Odstraní nečistoty a připraví pleť na aktivní látky." },
          { number: "02", phase: "Tonizace",    text: "Obnoví pH, zklidní pleť a zlepší vstřebávání." },
          { number: "03", phase: "Hydratace",   text: "Dodá vodu a podpoří přirozenou ochrannou bariéru." },
          { number: "04", phase: "Denní péče",  text: "Chrání, vyživuje a zlepšuje kvalitu pleti během dne." },
          { number: "05", phase: "Noční obnova", text: "Podporuje regeneraci, obnovu a hlubokou výživu v noci." },
        ],
      },
      { type: "heading", id: "jak-zacit", text: "Jak začít" },
      {
        type: "paragraph",
        text: "Rituál si získá vaši pleť — i vás. Pokud chcete nejprve poznat textury a logiku kroků, ideální je Travel Luxe Set. Chcete-li jít do hloubky, vyberte kompletní sadu a dopřejte si péči, která dává smysl každý den.",
      },
      { type: "inlineCta", ctaId: "cta-travel" },
    ],
    relatedSlugs: [
      "jak-pouzivat-ritual-rano-a-vecer",
      "skin-longevity-bez-prazdnych-slibu",
      "kolik-produktu-opravdu-staci",
    ],
    seoTitle: "Proč rituál, ne rutina | Žurnál J.Oli Origins",
    seoDescription:
      "Pět kroků, které dávají péči jasný řád, pleti komfort a vám chvíli, ke které se chcete vracet. Praktický průvodce rituálem skin longevity.",
  },

  "jak-pouzivat-ritual-rano-a-vecer": {
    slug: "jak-pouzivat-ritual-rano-a-vecer",
    author: "J.Oli Origins",
    updatedAt: "16. května 2026",
    displayTags: ["Jak používat", "Ráno a večer", "Vrstvení"],
    summaryBullets: [
      "proč na pořadí kroků skutečně záleží",
      "ranní rituál 01 → 02 → 03 → 04 + SPF",
      "večerní rituál 01 → 02 → 03 → 05",
      "kolik produktu stačí a co dělat první týden",
    ],
    tableOfContents: [
      { id: "porad-rozhoduje", label: "Proč pořadí rozhoduje" },
      { id: "ranni-ritual", label: "Ranní rituál krok za krokem" },
      { id: "vecerni-ritual", label: "Večerní rituál krok za krokem" },
      { id: "kolik-produktu", label: "Kolik produktu stačí" },
      { id: "prvni-tyden", label: "Co dělat první týden" },
      { id: "nejcastejsi-chyby", label: "Nejčastější chyby" },
    ],
    inlineCtas: [
      {
        id: "cta-travel-howto",
        title: "Chcete celý postup nejdřív vyzkoušet?",
        text: "Travel Luxe Set obsahuje všech pět kroků v menším formátu. Bezpečný první nákup, než si pořídíte plnou sadu.",
        ctaLabel: "Vyzkoušet Travel Luxe Set",
        href: "/produkty/travel-luxe-set",
        image: "/assets/joliorigins/zurnal/travel-luxe.png",
      },
      {
        id: "cta-pouziti-detail",
        title: "Chcete detailní vizuální návod?",
        text: "Detailní použití rituálu obsahuje přehled ranního i večerního postupu s fotografiemi a přesným pořadím.",
        ctaLabel: "Zobrazit detailní použití",
        href: "/ritual/pouziti",
        image: "/assets/joliorigins/zurnal/howto-rano-vecer.png",
      },
    ],
    blocks: [
      { type: "heading", id: "porad-rozhoduje", text: "Proč na pořadí kroků skutečně záleží" },
      {
        type: "paragraph",
        text: "Pořadí péče není kosmetický detail. Každý krok mění pH pleti, hydrataci povrchu nebo schopnost dalšího produktu se vstřebat. Pokud aplikujete sérum na příliš suchou pleť, nedostane se hlouběji. Pokud naopak vrstvíte krém pod sérum, sérum nezafunguje. Generation Perfect Ritual byl navržen tak, aby každý krok připravil pleť na ten následující.",
      },

      { type: "heading", id: "ranni-ritual", text: "Ranní rituál krok za krokem" },
      {
        type: "paragraph",
        text: "Ráno je cílem čistá, hydratovaná a komfortně působící pleť, která je připravená na den. Používejte v tomto pořadí:",
      },
      {
        type: "stepList",
        steps: [
          { number: "01", phase: "Čištění",    text: "No1 Dvoufázová mycí emulze — odstraní zbytky noční péče a připraví pleť." },
          { number: "02", phase: "Tonizace",   text: "No2 Bioaktivní tonikum — vrátí pleti pocit komfortu a připraví ji na sérum." },
          { number: "03", phase: "Hydratace",  text: "No3 Collagel hydratační sérum — dodá vodní fázi, na kterou bude další krok navazovat." },
          { number: "04", phase: "Denní péče", text: "No4 Denní vitaminové sérum + CoQ10 — uzavírá ranní rituál aktivní péčí." },
          { number: "SPF", phase: "Ochrana",   text: "Pokud jdete ven, vždy doplňte SPF jako poslední krok. No4 SPF nenahrazuje." },
        ],
      },

      { type: "inlineCta", ctaId: "cta-pouziti-detail" },

      { type: "heading", id: "vecerni-ritual", text: "Večerní rituál krok za krokem" },
      {
        type: "paragraph",
        text: "Večer je cílem zklidnit, vyživit a uzavřít den. Pořadí zůstává stejné jako ráno — místo denní aktivní péče přijde výživný noční krok:",
      },
      {
        type: "stepList",
        steps: [
          { number: "01", phase: "Čištění",     text: "No1 Dvoufázová mycí emulze — důkladněji odstraní SPF, make-up a nečistoty dne." },
          { number: "02", phase: "Tonizace",    text: "No2 Bioaktivní tonikum — zklidní pleť po čištění a připraví ji na výživnější péči." },
          { number: "03", phase: "Hydratace",   text: "No3 Collagel hydratační sérum — stejný hydratační mezikrok jako ráno." },
          { number: "05", phase: "Noční obnova", text: "No4 noční Regenerační sérum — výživná textura, která uzavírá rituál." },
        ],
      },

      { type: "heading", id: "kolik-produktu", text: "Kolik produktu skutečně stačí" },
      {
        type: "paragraph",
        text: "Méně produktu při pravidelném používání funguje lépe než větší množství nárazově. Doporučená dávkování: No1 — 1–2 dávky, No2 — 3–5 stříknutí, No3 — 2–3 kapky, No4 — 2–3 kapky, No4 noční — množství velikosti hrášku.",
      },

      { type: "heading", id: "prvni-tyden", text: "Co dělat první týden" },
      {
        type: "paragraph",
        text: "První týden nepoužívejte více produktu jen proto, že je péče prémiová. Sledujte komfort pleti, vůně a textury. Pokud pleť reaguje dobře, druhý týden můžete dávkování jemně upravit podle potřeby. Pokud zkoušíte Travel Luxe Set, máte přibližně 21 dní na to, abyste poznala, zda vám rituál sedí.",
      },

      { type: "inlineCta", ctaId: "cta-travel-howto" },

      { type: "heading", id: "nejcastejsi-chyby", text: "Nejčastější chyby" },
      {
        type: "paragraph",
        text: "Příliš mnoho produktu — méně se vstřebá. Vrstvení na zcela suchou pleť — další krok pleť spíš zatíží. Vynechání No3 — bez hydratační vrstvy je následující péče pro pleť intenzivnější, než potřebuje. Používání No4 nočního ráno místo večer — noční výživná textura ráno není vhodná. Spoléhání se na No4 jako ochranu před sluncem — No4 obsahuje antioxidanty, ale nenahrazuje SPF.",
      },
    ],
    relatedSlugs: [
      "kolik-produktu-opravdu-staci",
      "proc-ritual-ne-rutina",
      "bakuchiol-v-nocni-peci",
    ],
    seoTitle: "Jak používat rituál ráno a večer | Žurnál J.Oli Origins",
    seoDescription:
      "Praktický návod k vrstvení Generation Perfect Ritual. Ranní pořadí 01 → 02 → 03 → 04 + SPF, večerní 01 → 02 → 03 → 05. Kolik produktu stačí a co dělat první týden.",
  },

  "bakuchiol-v-nocni-peci": {
    slug: "bakuchiol-v-nocni-peci",
    author: "J.Oli Origins",
    updatedAt: "16. května 2026",
    displayTags: ["Bakuchiol", "Noční péče", "Ingredience"],
    summaryBullets: [
      "co bakuchiol v kosmetice znamená",
      "proč ho J.Oli zařadilo do No4 nočního a do večerního kroku",
      "v čem se liší od retinolu",
      "jak začít, pokud máte citlivější pleť",
    ],
    tableOfContents: [
      { id: "co-je-bakuchiol", label: "Co je bakuchiol" },
      { id: "proc-vecer", label: "Proč patří spíš večer" },
      { id: "bakuchiol-vs-retinol", label: "Bakuchiol vs. retinol" },
      { id: "no4-nocni", label: "Bakuchiol v No4 nočním" },
      { id: "jak-zacit", label: "Jak začít u citlivější pleti" },
      { id: "s-cim-nekombinovat", label: "S čím ho nekombinovat" },
    ],
    inlineCtas: [
      {
        id: "cta-no4-nocni",
        title: "Vyzkoušet bakuchiol v noční péči",
        text: "No4 noční Regenerační sérum používá bakuchiol jako jednu z klíčových látek. Lze ho vyzkoušet samostatně i jako součást Travel Luxe Setu.",
        ctaLabel: "Zobrazit Travel Luxe Set",
        href: "/produkty/travel-luxe-set",
        image: "/assets/joliorigins/zurnal/bakuchiol.png",
      },
    ],
    blocks: [
      { type: "heading", id: "co-je-bakuchiol", text: "Co je bakuchiol" },
      {
        type: "paragraph",
        text: "Bakuchiol je rostlinná látka získávaná z listů a semen rostliny Psoralea corylifolia. V kosmetice se používá jako alternativa k retinolu, protože v laboratorních a klinických studiích vykazuje podobné účinky na vzhled pleti, ale obvykle je lépe snášena. Není to „přírodní retinol“ v chemickém smyslu — je to jiná molekula s vlastním mechanismem působení.",
      },

      { type: "heading", id: "proc-vecer", text: "Proč patří spíš večer" },
      {
        type: "paragraph",
        text: "Aktivní látky pracující s obnovou pleti se obvykle aplikují večer. Pleť přes noc dostává více klidu, není vystavena slunečnímu záření a má prostor pro vlastní regenerační procesy. Bakuchiol není fotosenzitivní jako retinol, ale i tak ho doporučujeme do večerního kroku — zapadá totiž do výživné fáze rituálu, kterou uzavírá noční péči.",
      },

      { type: "heading", id: "bakuchiol-vs-retinol", text: "Bakuchiol vs. retinol" },
      {
        type: "paragraph",
        text: "Retinol je dlouhodobý standard pro péči o vzhled pleti, ale často způsobuje období adaptace: zarudnutí, suchost, citlivost. Bakuchiol bývá pro pleť přijatelnější — bez nutnosti pomalého zaváděcího protokolu a obvykle bez výrazného podráždění. Pro citlivější pleť nebo pro ženy, které retinol nezvládají, je proto často vhodnější volbou.",
      },

      { type: "inlineCta", ctaId: "cta-no4-nocni" },

      { type: "heading", id: "no4-nocni", text: "Bakuchiol v No4 nočním Regeneračním séru" },
      {
        type: "paragraph",
        text: "No4 noční kombinuje bakuchiol s peptidy a vybranými minerály. Cílem není rychlá viditelná změna, ale podpora pleti, aby ráno působila odpočatěji a komfortněji. Bakuchiol je v No4 nočním zařazený do výživné večerní textury, takže pleť dostává aktivní látku i příjemný závěr rituálu.",
      },

      { type: "heading", id: "jak-zacit", text: "Jak začít u citlivější pleti" },
      {
        type: "paragraph",
        text: "Pokud máte citlivější pleť nebo s aktivními látkami teprve začínáte, doporučujeme zavádět No4 noční postupně: první týden 2–3× za týden, místo každý den. Sledujte, jak pleť reaguje. Pokud po týdnu vše sedí, přejděte na každodenní použití. Stačí množství velikosti hrášku — více produktu neznamená rychlejší výsledek.",
      },

      { type: "heading", id: "s-cim-nekombinovat", text: "S čím ho nekombinovat" },
      {
        type: "paragraph",
        text: "V den, kdy je pleť aktuálně podrážděná (po dlouhém pobytu na slunci, po peelingu, při kožní reakci), No4 noční ten večer vynechte a místo něj použijte jen No3. Bakuchiol není agresivní, ale podrážděnou pleť není potřeba zbytečně dráždit dalšími aktivními látkami. Pokud používáte koncentrovaný retinoid od jiné značky, nedoporučujeme ho v jeden večer kombinovat s No4 nočním — vyberte si jednu aktivní noční péči.",
      },
    ],
    relatedSlugs: [
      "kolik-produktu-opravdu-staci",
      "jak-pouzivat-ritual-rano-a-vecer",
      "proc-ritual-ne-rutina",
    ],
    seoTitle: "Co je bakuchiol a proč patří do noční péče | Žurnál J.Oli Origins",
    seoDescription:
      "Bakuchiol jako jemnější alternativa retinolu. Proč patří do večerního kroku rituálu, v čem se liší od retinolu a jak ho zavádět u citlivější pleti.",
  },

  "kolik-produktu-opravdu-staci": {
    slug: "kolik-produktu-opravdu-staci",
    author: "J.Oli Origins",
    updatedAt: "16. května 2026",
    displayTags: ["Aplikace", "Množství", "Ekonomika"],
    summaryBullets: [
      "kolik produktu na jednu aplikaci skutečně potřebujete",
      "proč více produktu neznamená lepší výsledek",
      "jak tím sada vydrží déle",
      "kdy začít opatrněji a kdy si dovolit více",
    ],
    tableOfContents: [
      { id: "davkovani", label: "Doporučené dávkování" },
      { id: "vice-neni-lepe", label: "Proč více neznamená lepší výsledek" },
      { id: "ekonomika", label: "Ekonomika rituálu" },
      { id: "kdy-zacit-opatrne", label: "Kdy začít opatrněji" },
    ],
    inlineCtas: [
      {
        id: "cta-travel-dose",
        title: "Vyzkoušet rituál v menším formátu",
        text: "Travel Luxe Set vám pomůže najít vaše osobní dávkování bez nutnosti hned investovat 9 000 Kč.",
        ctaLabel: "Vyzkoušet Travel Luxe Set",
        href: "/produkty/travel-luxe-set",
        image: "/assets/joliorigins/zurnal/travel-luxe.png",
      },
    ],
    blocks: [
      { type: "heading", id: "davkovani", text: "Doporučené dávkování krok za krokem" },
      {
        type: "paragraph",
        text: "Doporučená množství pro Generation Perfect Ritual při doporučeném používání:",
      },
      {
        type: "stepList",
        steps: [
          { number: "01", phase: "No1 čištění",     text: "1–2 dávky pumpičky. Promasírovat na navlhčené pleti, opláchnout vlažnou vodou." },
          { number: "02", phase: "No2 tonikum",     text: "3–5 stříknutí na pleť nebo do dlaní, jemně vklepat." },
          { number: "03", phase: "No3 hydratace",   text: "2–3 kapky / dávky pumpičky. Nanést na pleť, krk a dekolt." },
          { number: "04", phase: "No4 denní péče",  text: "2–3 kapky. Vetřít po No3, nechat krátce vstřebat a doplnit SPF, pokud jdete ven." },
          { number: "05", phase: "No4 noční obnova", text: "Množství velikosti hrášku. Zahřát mezi prsty a jemně vtlačit do pleti." },
        ],
      },

      { type: "heading", id: "vice-neni-lepe", text: "Proč více produktu neznamená lepší výsledek" },
      {
        type: "paragraph",
        text: "Aktivní látky se vstřebávají v omezeném množství. Pokud nanesete dvojnásobnou dávku, pleť stejně přijme jen tolik, kolik je schopna v daný okamžik využít. Zbytek zůstane na povrchu, kde se může mísit s SPF nebo make-upem a působit nepříjemně. Konzistentní menší množství každý den funguje lépe než nárazové „dobíjení“.",
      },

      { type: "inlineCta", ctaId: "cta-travel-dose" },

      { type: "heading", id: "ekonomika", text: "Ekonomika rituálu" },
      {
        type: "paragraph",
        text: "Pokud si produkty pořídíte jednotlivě, zaplatíte 12 750 Kč. Sada stojí 9 000 Kč — ušetříte 3 750 Kč a získáte všech pět kroků navržených jako jeden systém.",
      },

      { type: "heading", id: "kdy-zacit-opatrne", text: "Kdy začít opatrněji" },
      {
        type: "paragraph",
        text: "Pokud máte citlivější pleť nebo s prémiovou péčí teprve začínáte, doporučujeme první týden držet dávkování na spodní hranici (1 dávka No1, 3 stříknutí No2, 2 kapky No3, 2 kapky No4, malé množství No4 nočního velikosti čočky). Sledujte komfort pleti. Druhý týden můžete jemně upravit. Travel Luxe Set je ideální způsob, jak najít své osobní dávkování — všech pět kroků v menším formátu, cca 21 dní.",
      },
    ],
    relatedSlugs: [
      "jak-pouzivat-ritual-rano-a-vecer",
      "proc-ritual-ne-rutina",
      "bakuchiol-v-nocni-peci",
    ],
    seoTitle: "Kolik produktu opravdu stačí | Žurnál J.Oli Origins",
    seoDescription:
      "Doporučené dávkování pro Generation Perfect Ritual. Proč více produktu neznamená lepší výsledek.",
  },
};

/* ============================================================
   ARTICLE HELPERS
============================================================ */
export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticleDetail(slug: string): ArticleDetail | undefined {
  return articleDetails[slug];
}

export function getPrevNextArticles(slug: string) {
  const i = articles.findIndex((a) => a.slug === slug);
  if (i < 0) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? articles[i - 1] : undefined,
    next: i < articles.length - 1 ? articles[i + 1] : undefined,
  };
}

export function getRelatedArticles(
  slug: string,
  detail: ArticleDetail | undefined,
  limit = 3
): JournalArticle[] {
  const main = getArticleBySlug(slug);
  const explicit = (detail?.relatedSlugs ?? [])
    .map((s) => getArticleBySlug(s))
    .filter((a): a is JournalArticle => Boolean(a));
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const used = new Set([slug, ...explicit.map((a) => a.slug)]);
  const sameCat = main
    ? articles.filter((a) => !used.has(a.slug) && a.category === main.category)
    : [];
  const rest = articles.filter((a) => !used.has(a.slug) && !sameCat.includes(a));
  return [...explicit, ...sameCat, ...rest].slice(0, limit);
}
