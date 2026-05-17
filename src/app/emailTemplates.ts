/**
 * J.Oli Ritual Concierge — post-purchase email sequence.
 *
 * Šablony pro budoucí napojení na e-mailovou automatizaci (Klaviyo, Smartemailing,
 * Postmark apod.). Tone of voice: luxusní, klidný, prémiový. Žádná medicínská
 * tvrzení, žádná léčebná slova. Vše formulováno jako kosmetický rituál.
 */

export type EmailTemplate = {
  id: string;
  /** When this email should fire after the order is placed. */
  delay: string;
  subject: string;
  /** Plain text body — HTML rendering layer is responsible for styling. */
  body: string;
  /** Optional primary CTA shown in the template. */
  cta?: { label: string; href: string };
};

export const postPurchaseSequence: EmailTemplate[] = [
  {
    id: "ritual-starts",
    delay: "0h (ihned po objednávce)",
    subject: "Váš Generation Perfect Ritual začíná",
    body: `Děkujeme za vaši objednávku.

Generation Perfect Ritual není jen pět produktů — je to pětikrokový rituál, který má své pořadí, rytmus a smysl. V příštích dnech vám pošleme pár krátkých zpráv, které vám pomohou rituál správně zařadit do dne.

Mezitím si můžete v klidu projít, jak rituál funguje. Pokud máte jakoukoli otázku, jsme tady pro vás osobně.`,
    cta: { label: "Jak rituál funguje", href: "/ritual" },
  },
  {
    id: "first-evening",
    delay: "1 den po doručení",
    subject: "Jak začít první večer",
    body: `Doporučujeme začít rituál večerní péčí — pleť je v klidu, otevřená a má čas přijmout péči bez spěchu.

Začněte čištěním (No1), pokračujte tonizací (No2), hydratací (No3) a uzavřete večer noční obnovou (No5). Mezi vrstvami nechte cca 30 vteřin, aby textura zaschla.

Tento první večer si dopřejte čas. Rituál není jen o péči o pleť — je to klidná chvíle pro sebe.`,
    cta: { label: "Detail večerního rituálu", href: "/ritual/vecer" },
  },
  {
    id: "layering",
    delay: "3 dny po doručení",
    subject: "Jak správně vrstvit ráno a večer",
    body: `Vrstvení je jednoduché, jakmile pochopíte logiku.

Ráno: No1 čištění → No2 tonizace → No3 hydratace → No4 denní sérum s vitaminem a CoQ10.
Večer: No1 čištění → No2 tonizace → No3 hydratace → No5 noční sérum pro výživu a klid.

Vždy postupujte od nejlehčí textury k nejvýživnější. A pokud si nejste jistá, náš Ritual Concierge vás provede pořadím i pro vaši pleť.`,
    cta: { label: "Otevřít Ritual Concierge", href: "/#concierge" },
  },
  {
    id: "week-check",
    delay: "7 dní po doručení",
    subject: "Jak se vaše pleť cítí po prvním týdnu?",
    body: `Po týdnu pravidelného používání může pleť působit hydratovaněji, klidněji a méně unaveně.

Pokud máte pocit, že některý krok rituálu na vás "sedí" víc než jiný, dejte nám vědět. Rádi vám doporučíme, jak rituál jemně přizpůsobit.

A pokud byste chtěla rituál sdílet — Travel Luxe Set je krásný dárek pro někoho, komu na pleti záleží.`,
    cta: { label: "Napsat nám", href: "/kontakt" },
  },
  {
    id: "month-milestone",
    delay: "30 dní po doručení",
    subject: "První měsíc rituálu",
    body: `Pravidelnost je to, co dělá rozdíl. Po měsíci pleť často působí sjednoceněji, pružněji a vitálněji.

Tento e-mail je malé připomenutí, že jste věnovala pleti měsíc péče, řád a klid. To není málo.

Mezitím pro vás chystáme příští sezónní šarži — jako jedna z prvních se dozvíte, kdy bude dostupná.`,
  },
  {
    id: "refill-reminder",
    delay: "75 dní po doručení (cca 2 týdny před doděláním)",
    subject: "Je čas doplnit váš oblíbený krok?",
    body: `Vaše sada vystačí na přibližně 92 dní pravidelného používání. Některé kroky se ale spotřebují rychleji — záleží na množství a frekvenci aplikace.

Pokud chcete plynule pokračovat v rituálu, můžete si jednotlivě doplnit oblíbený krok nebo si znovu objednat kompletní sadu. Nová šarže je vyráběna ručně v ČR — výroba trvá několik dní.

Pokud byste chtěla rituál upravit (např. změnit poměr ranní/večerní péče), náš Concierge vám pomůže.`,
    cta: { label: "Doplnit produkt", href: "/produkty" },
  },
];

/**
 * Triggers a templated Concierge question prefilled with a product context.
 * Useful from product detail pages: open the modal and seed it with this query.
 */
export function productConciergeQuery(productName: string) {
  return `Jak zařadit ${productName} do ranního nebo večerního rituálu?`;
}

/**
 * Cart "kontrola rituálu" messaging used by the cart drawer once it ships.
 * Returns the right copy based on how many products are in the cart.
 */
export function cartRitualCheck(itemsInCart: number) {
  if (itemsInCart === 1) {
    return {
      headline: "Dává váš rituál smysl?",
      text: "Vybraný produkt je jeden krok Generation Perfect Ritual. Nejlépe funguje v přesném pořadí s ostatními kroky. Pokud začínáte poprvé, zvažte Travel Luxe Set nebo kompletní rituál.",
      ctas: [
        { label: "Zobrazit Travel Luxe Set", href: "/travel-luxe" },
        { label: "Koupit celý rituál", href: "/kompletni-sada" },
      ],
    };
  }
  if (itemsInCart >= 3 && itemsInCart <= 4) {
    return {
      headline: "Jste blízko kompletnímu rituálu",
      text: "Jste blízko kompletnímu rituálu. Kompletní sada přidává zbývající kroky v prémiovém balení a pomáhá udržet jasné ranní i večerní pořadí.",
      ctas: [{ label: "Doplnit na celý rituál", href: "/kompletni-sada" }],
    };
  }
  return null;
}
