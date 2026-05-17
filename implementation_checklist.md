# J.OLI ORIGINS v3 — Implementation Checklist

Botanical Prestige / Quiet Luxury / Longevity Ritual.

---

## ✅ Step 1–3 · Recon · DONE

- Stack: Next.js 15 / React 19 / TS / CSS Modules
- v3 = úplná kopie v2 s migrací /v2/* → /*
- Asset paths registered (mockupy + AI vizuály + originály + raw fotky)
- Produktová pravidla zapamatovaná (No5 neexistuje, dva No4, doprava zdarma vždy, dárek od 2 500 Kč, ekonomika Complete: 12 750 → 9 000 = úspora 3 750 Kč)

## ✅ Step 4 · Global design tokens · DONE

**Změny:**
- `src/app/layout.tsx` — fonty změněny **Cormorant Garamond + Manrope** → **Playfair Display + Plus Jakarta Sans**
- `src/app/globals.css` — kompletní přepis. Vyhozena dark luxury paleta, zaveden Botanical Prestige token systém:
  - Bone White / Warm Ivory / Botanical Olive / Dark Moss / Champagne Gold / Mineral Taupe / Soft Charcoal
  - Layout tokens (container, gaps, button sizes, radius)
  - Typografické tokens (leading, tracking)

**Pravidla splněna:**
- ✅ Bone White / Warm Ivory jako hlavní pozadí
- ✅ Dark Moss CTA, Champagne Gold jen na detaily

## ✅ Step 5 · Chrome (Header + Footer) · DONE

**Změny:**
- `src/app/styles.module.css` — kompletní přepis z 2779 řádků dark luxury → 1100 řádků Botanical Prestige design systém
- `src/app/Chrome.tsx` — nová struktura:
  - **Top bar**: Doprava zdarma vždy · Dárek od 2 500 Kč · Malé šarže v ČR
  - **Header**: Logo (J·OLI ORIGINS) · Nav (Produkty / Jak to funguje / Příběh / Salony) · CTAs ("Poradit s výběrem" + "Vyzkoušet Travel Set") + ikony (hledat / účet / košík)
  - **Footer**: 4 sloupce (Nakupování / Pomoc / Značka / Právní) + tagline + payment badges
- Smazána zaniklá `CartProgressBar` (přesune se do /kosik)

**Pravidla splněna:**
- ✅ Žurnál + Ingredience NE v hlavní navigaci (jen footer)
- ✅ Doprava zdarma **vždy** (ne „od ...")
- ✅ Dárek **od 2 500 Kč**

## ✅ Step 6 · Homepage · DONE

**Změny:**
- `src/app/page.tsx` — kompletní přepis z 1137 řádků v2 → ~560 řádků v3
- 9 sekcí + sticky chrome + footer:
  1. Hero (split 50/50, lifestyle vizuál + 2 CTA + microbenefits)
  2. „Vyberte si, jak chcete začít" (3 karty — Travel / Complete / Osobní doporučení)
  3. „Jeden rituál. Dvě jednoduchá pořadí." (Ráno + Večer s 4 step thumbnails)
  4. Travel Luxe Set hero blok (visual + copy + benefit list + 2 490 Kč + CTA)
  5. Generation Perfect Complete blok (copy + ekonomika 12 750 → 9 000 = 3 750 Kč + CTA)
  6. Prémiová péče — 4 pilíře (šarže / botanika / aktivní látky / poradenství)
  7. Recenze (3 karty s autor + stars)
  8. Příběh značky (founder visual + quote + CTA)
  9. Final CTA (dark moss sekce)

**Použité AI vizuály:**
- `/v3/hero/homepage_hero_desktop.jpg` (hero + founder placeholder)
- `/v3/sets/travel_luxe_card_visual.jpg` + `travel_luxe_open_box_mood.jpg`
- `/v3/sets/complete_set_card_visual.jpg` + `complete_set_still_life.jpg`
- `/v3/ritual/ritual_morning_visual.jpg`
- `/v3/products/no1.jpg` ... `no4-night.jpg` (reálné packshoty pro rituál step thumbs)

**Pravidla splněna:**
- ✅ Headline „Pět kroků pro dlouhověkost pleti."
- ✅ Subheadline obsahuje longevity i Travel Set
- ✅ Tři cesty: Travel (zkouším poprvé) / Complete (kompletní péče) / Osobní doporučení
- ✅ Ráno: No1 → No2 → No3 → No4 denní + poznámka „Při pobytu venku doplňte SPF."
- ✅ Večer: No1 → No2 → No3 → No4 noční
- ✅ Žádné No5
- ✅ Ekonomika Complete přesně 12 750 / 9 000 / úspora 3 750 Kč
- ✅ Žádná „výdrž 92 dní" ani „98 Kč/den"
- ✅ Žádné léčebné claimy
- ✅ Recenze konkrétní, ne přehnané
- ✅ Footer claim „Pět kroků pro ranní a večerní longevity rituál."

## ✅ UX Simplification Update · DONE (po Step 6)

**Cíl:** Zjednodušit texty a CTA, aby návštěvnice okamžitě věděla:
- Zkouším poprvé → Začít Travel Setem
- Chci všechno → Chci celou sadu
- Nevím → Chci poradit

**Změny:**

### Chrome header
- ❌ „Poradit s výběrem" → ✅ „Chci poradit"
- ❌ „Vyzkoušet Travel Set" → ✅ „Začít Travel Setem"

### Hero
- ❌ „Pět kroků pro dlouhověkost pleti." → ✅ „Pět kroků. Jednodušší péče. Dlouhodobě krásnější pleť."
- ✅ Subtitle: „Ráno víte, co použít. Večer víte, co použít. Pokud J.OLI zkoušíte poprvé, začněte Travel Luxe Setem."
- ✅ CTAs: Začít Travel Setem · Chci celou sadu · Chci poradit (text link)

### Choice section
- ❌ „Vyberte si, jak chcete začít." → ✅ „Vyberte si jednu ze tří cest."
- ✅ Subtitle: „Nemusíte znát všechny produkty. Stačí vybrat, kde právě jste."
- **Travel card priorita:** ivory bg + champagne gold border + „Začněte tady." hook + box-shadow
- Card 1: „Doporučujeme pro první nákup" / „Zkouším poprvé" / „Začněte tady." / 2 490 Kč / CTA „Začít Travel Setem"
- Card 2: „Úspora 3 750 Kč" / „Chci všechno" / 9 000 Kč / CTA „Chci celou sadu"
- Card 3: „Nevím" / „Poradíme vám" / Zdarma / CTA „Chci poradit"

### Ritual section
- ❌ „Jeden rituál. Dvě jednoduchá pořadí." → ✅ „Ráno čtyři kroky. Večer čtyři kroky."
- ✅ Subtitle: „Pořadí je dané. Nemusíte nic kombinovat."
- ✅ Krátké štítky: „Ranní péče" / „Večerní péče" (místo dlouhých názvů)
- ✅ SPF caveat: „Denní No4 není SPF. Při pobytu venku doplňte ochranný krém s SPF."
- ❌ „Zjistit více o rituálu" → ✅ „Jak to funguje"

### Travel Luxe Set sekce
- ❌ „Nejste si jistá? Začněte menší sadou." → ✅ „Nejlepší první krok: Travel Luxe Set"
- ✅ Krátké body: Celý rituál v menším balení · Ideální pro první nákup · Bez nutnosti kupovat plnou sadu
- ✅ CTA: „Začít Travel Setem"

### Complete sekce
- ❌ „Kompletní rituál v plném balení." → ✅ „Chcete rovnou celou péči?"
- ✅ Krátký text: „Complete obsahuje plná balení všech produktů pro ráno i večer."
- ✅ Ekonomika: Jednotlivě 12 750 / Sada 9 000 / Ušetříte 3 750 Kč
- ✅ CTA: „Chci celou sadu" + „Nejdřív začít Travel Setem"

### Trust pillars
- Zkráceno na 4 krátké odstavce (Malé šarže v ČR / Botanické extrakty / Aktivní látky / Osobní doporučení)
- ❌ „Poznat ingredience a výrobu" → ✅ „Poznat ingredience"

### Final CTA
- ✅ „Začněte jednoduše."
- ✅ Text: „Zkoušíte J.OLI poprvé? Začněte Travel Setem. Chcete rovnou celou péči? Zvolte Complete. Nejste si jistá? Napište nám."
- ✅ CTAs: Začít Travel Setem · Chci celou sadu · Chci poradit

**Pravidla splněna:**
- ✅ Žádné No5
- ✅ SPF caveat explicitně zmíněn
- ✅ Doprava zdarma vždy (top bar)
- ✅ Dárek od 2 500 Kč (top bar)
- ✅ Ekonomika 12 750 / 9 000 / 3 750
- ✅ Žádná výdrž ani „98 Kč/den"
- ✅ Longevity zachované (eyebrow „Longevity rituál"), ale ne přetížené
- ✅ Travel card má nejsilnější vizuální prioritu
- ✅ CTA krátké a návodné

**Zbývá aplikovat tyto stejné texty/CTA na stránky, které ještě staví:**
- /produkty (rozhodovací logika nahoře, zkrácené štítky pro produktové karty)
- /produkty/travel-luxe-set (CTA „Začít Travel Setem")
- /produkty/generation-perfect-complete (CTA „Chci celou sadu")
- /jak-to-funguje (longevity vysvětleno jednoduše)
- /ingredience-a-vyroba (úvod „Nechceme dlouhý seznam trendů…")

## ✅ Build verification · DONE

- `npx tsc --noEmit` → exit 0
- `npx next build` → 38 routes static, homepage 1.61 kB, žádné runtime chyby
- Build warnings pouze cosmetic (unused IconCraft, missing useMemo dep) — k vyčištění ve Step 19

---

## ⏳ Zbývá

### Step 7 · /produkty (in progress)
### Step 8 · /produkty/travel-luxe-set + /produkty/generation-perfect-complete
### Step 9 · Product detail pages (5 SKU)
### Step 10–11 · /jak-to-funguje + /jak-to-funguje/pouziti (přepis z /ritual)
### Step 12 · /ingredience-a-vyroba + ingredients.ts data
### Step 13 · /pribeh redesign
### Step 14 · /poradit-s-vyberem (form)
### Step 15 · /salony (přepis z /pro-salony)
### Step 16 · /zurnal restyle + 8 článků
### Step 17 · /kosik + checkout flow restyle
### Step 18 · service pages (doprava, vraceni, kontakt, OP, GDPR, cookies)
### Step 19 · Wire CTAs + zrušit unused imports
### Step 20 · Compliance audit (No5, SPF caveat, doprava, dárek, claims)
### Step 21 · final_web_check_report.md

### Známé broken pages (zatím funkční, ale vizuálně rozbité starým CSS)
- `/ritual` + `/ritual/pouziti` (přepíšeme jako `/jak-to-funguje*`)
- `/pro-salony` (přepíšeme jako `/salony`)
- `/pribeh` (přepíšeme in-place)
- `/produkty` listing + `[slug]` detail
- `/zurnal` listing + `[slug]` článek
- `/kosik`, `/checkout/*`

Tyto stránky se postaví / restylují v dalších krocích.

---

## ✅ Steps 7–21 · FINISHED

### Step 7 · /produkty · DONE
Rozhodovací logika nahoře + 3 cesty + 5 jednotlivých produktů (zkrácené štítky: Čištění / Tonizace / Hydratace / Ranní péče / Večerní péče) + Doplňky sekce + Final CTA.

### Steps 8–9 · /produkty/[slug] (unified template) · DONE
Jednotný produktový detail pro 7 SKU:
- Travel Luxe Set, Generation Perfect Complete (sady — Economy box, contents list)
- No1, No2, No3, No4 denní, No4 noční (single — texture + key ingredients + common mistake)
Vlastní lehká `v3-products.ts` data struktura (No5 nikde).

### Steps 10–11 · /jak-to-funguje + /jak-to-funguje/pouziti · DONE
Hero + Longevity přístup + Ráno/Večer stepper + chaos-vs-rituál kontrast blok + 3 cesty + FAQ accordion (6 Q&A) + CTA.
/jak-to-funguje/pouziti: Ráno postup (5) + Večer postup (4) + První týden + Nejčastější chyby (5) + CTA.
Smazáno: `/ritual` + `/ritual/pouziti`.

### Step 12 · /ingredience-a-vyroba + ingredients.ts · DONE
18 ingrediencí v 9 kategoriích (Hydratace / Antioxidanty / Oleje / Zklidnění / Exfoliace / Fermenty / Vůně / Minerály / Stabilita).
Accordion struktura, `claimRisk` flag pro citlivější složky (bakuchiol, NMN označeny "high").
Sekce „Co slibujeme / Neslibujeme" jako kontrastní blok.

### Step 13 · /pribeh · DONE
Hero + Zakladatelka + Longevity jako životní přístup + 6 Hodnot + Final CTA.

### Step 14 · /poradit-s-vyberem · DONE
Hero + Formulář (10 polí: jméno, e-mail, věk, typ pleti, citlivost, rutina, cíl, kyseliny, start, poznámka) + disclaimer („nenahrazuje dermatologickou péči").

### Step 15 · /salony · DONE
Hero + 5 benefitů + 4-krokový salonní rituál + Domácí pokračování + 3 partner levels (Starter / Ritual Partner / Signature Salon — prostřední s primary stylem) + Kontaktní formulář.
Smazáno: `/pro-salony`.

### Step 16 · /zurnal + články · DONE
Listing zobrazuje **pouze** články, které mají `ArticleDetail` (filtr `articles.filter(a => articleDetails[a.slug])`) — žádné placeholdery.
Detail: hero + cover image + ArticleBlock render (heading / paragraph / stepList / inlineCta).

### Step 17 · /kosik · DONE (stub)
Empty state s benefit strip + 3 CTA hierarchie. Plný cart flow po napojení backendu.
Smazáno: `/checkout/*` flow (CartContext byl pevně provázán s v2 designem).

### Step 18 · Service pages · DONE
- /doprava-a-platba (Doprava zdarma vždy + dárek od 2 500 Kč)
- /vraceni-a-reklamace (14 dní)
- /kontakt (e-mail + odkazy)
- /obchodni-podminky (5 článků)
- /ochrana-osobnich-udaju (GDPR-friendly)
- /cookies

### Step 19–20 · Audit + cleanup · DONE
- Smazány orphan v2 soubory: `RitualConcierge.tsx`, `Forms.tsx`, `emailTemplates.ts`, `data.ts`, `DetailClient.tsx`, `ListingClient.tsx`, `products.module.css`, `pribeh.module.css`, `data/products.ts`, `data/imported-joli-products.json`, `zurnal/zurnal.module.css`, `zurnal/layout.tsx`, `zurnal/[slug]/article.module.css`, `pribeh/data.ts`.
- Forbidden text audit:
  - ❌ `No5` (user-visible): 0 occurrences ✓
  - ❌ `92 dn` / `98 Kč`: 0 occurrences ✓
  - ❌ „doprava zdarma od", „dárek ke každé objednávce": 0 ✓
- Required text audit:
  - ✅ „Doprava zdarma vždy": 5×
  - ✅ „od 2 500 Kč": 7×
  - ✅ ekonomika „3 750 Kč": 8×
  - ✅ SPF caveat: 20×
  - ✅ CTA „Začít Travel Setem": 18× · „Chci celou sadu": 11× · „Chci poradit": 13×

### Step 21 · final_web_check_report.md · DONE
Viz `/final_web_check_report.md`

---

## ✅ Build verifikace

- `npx tsc --noEmit` → exit 0
- `npx next build` → exit 0
- **31 statických stránek** generováno SSG
- Žádné runtime / SSG chyby
- Dev server: http://localhost:3000
