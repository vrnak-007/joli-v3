# J.OLI ORIGINS · Homepage Full Luxury Alignment Report

Cíl: posunout homepage z minimalistického e-shop / template look k **prémiovému luxusnímu skincare editorialu** (Botanical Prestige / Quiet Luxury). Obsah a produkty zůstávají beze změny — pouze design, layout, typografie, spacing a art direction.

**Build status:** ✅ `npx tsc --noEmit` exit 0 · `npx next build` exit 0 · 31 SSG routes
**Live:** http://localhost:3000

---

## 1 · Hero

**Před:** split layout, image jako menší karta, headline 84px max, padding ~96px.

**Po:**
- Sekce min-height clamp(640px, 82vh, 860px) → působí jako titulní spread beauty magazínu
- Headline 3-řádkový: „Pět kroků. / Jednodušší péče. / *Dlouhodobě krásnější pleť.*" — třetí řádek kurzívou v Botanical Olive jako editorial accent
- Headline font-size clamp(48px, 7.2vw, 96px), line-height 0.96, letter-spacing −0.022em — monumentální váha
- Image větší (`1fr 1.15fr` mřížka, aspect 4/5 → vyšší vertikální plocha), s warm shadow + jemný linear gradient overlay (bottom 100% dark moss 8%)
- Monogram J·O v levém horním rohu (64px, blurred ivory bg)
- Pozadí: subtle warm radial gradient + paper grain (téměř neviditelný `radial-gradient` dot pattern přes globals.css)
- Proof strip pod CTA: 3 mikrobenefity oddělené 1px svislými linkami (border-right) — působí jako editorial banner, ne jako ikonové „badges"
- Větší max-width copy zóny (600px), gap mezi blocs zvětšen na 32px

## 2 · Tři cesty

**Před:** 3 stejné karty, malé obrázky, méně whitespace.

**Po:**
- Větší karty: padding 44px 32px 32px, gap 28px mezi nimi, `align-items: stretch` pro equal heights
- Karta **Travel** = jasně primary:
  - Warm Ivory background
  - Champagne Gold border (subtle 1px)
  - **L-shaped gold corner detail** (::before + ::after pseudo prvky) — editorial detail, ne dekorativní outline
  - Dvouvrstvý box-shadow s gold tónem
  - Hook „Začněte tady." v Playfair italic 19px botanical olive
- Větší obrazové plochy v kartách: aspect-ratio 4/3.4 (z 4/3)
- Cena v Playfair 26px s tight letter-spacing, místo plain sans-serif
- Hover: translateY(-3px) + 30px box-shadow (jemně, prémiově)
- Badge na top edge — větší padding, tighter letter-spacing 0.2em

## 3 · Rituálový stepper

**Před:** boxové karty s borderem, „technický" dojem.

**Po:**
- **Žádné boxy, žádné rámečky** — produkty stojí na čistém pozadí
- Šipky `→` mezi kroky (`.ritualStep:not(:first-child)::before` s champagne gold opacity 0.6)
- Větší produktové thumbs (aspect 4/5 vs předchozí 1/1) — víc vertikální plochy, méně thumbnail feeling
- Label „Ráno" / „Večer" s expanding line (`::after { flex: 1; height: 1px; background: border }`) — editorial divider, ne plain text
- Číslo kroku v Playfair italic 14px gold (z 16px regular)
- Hover: thumb se posune translateY(-3px) — drobný kinetic detail
- SPF poznámka jako levý champagne border + padding-left, ne plain centered italic

## 4 · Travel Luxe Set sekce

**Před:** dvousloupcová mřížka 1fr 1fr.

**Po:**
- Mřížka **1.25fr 1fr** → image dostává cca 55 % šířky (per brief 52–56 %)
- Image má 50px 90px shadow + subtle bottom dark moss gradient overlay
- Copy column omezen na max-width 520px → klidnější editorial sloupec
- Gap mezi blocs 24px, sekce padding clamp(96px, 11vw, 160px)
- Body text v setBenefitList: 15px line-height 1.6, champagne gold checks

## 5 · Complete sekce

**Před:** standard split (Complete text vlevo, image vpravo).

**Po:**
- `.setHeroReverse` class — mřížka **1fr 1.25fr** → image vpravo dostává cca 55 % šířky
- Ekonomický box: champagne gold border, jemné ivory pozadí (`var(--warm-ivory)`), gap 14px mezi řádky
- Highlight řádek „Ušetříte 3 750 Kč" — Playfair 28px Dark Moss color s tight letter-spacing, NE jako slevový štítek
- **Žádná „92 dní" ani „98 Kč/den"** ✓
- CTA „Chci celou sadu" + text-link „Nejdřív začít Travel Setem"

## 6 · Trust pillars

**Před:** 4 sloupce 44px ikony, gap 32px.

**Po:**
- **Větší ikony 64px** (z 44px) — kruhový champagne gold border, bone-white interior
- Gap 48px mezi sloupci (z 32px) + vertikální linka mezi pillary (`.pillarCard::after` s `right: -24px`) — editorial dělič
- Title v Playfair 22px (z 19px), letter-spacing −0.005em
- Body text 15px line-height 1.7 (z 14px / 1.65)
- Sekce margin-top 72px (z 48px) → víc breathing room

## 7 · Recenze

**Před:** hvězdičky `★ ★ ★ ★ ★` + plain text v Playfair 17px.

**Po:**
- **Hvězdičky odstraněny** — místo nich velký champagne gold quote mark `„` (Playfair 64px, opacity 0.6, `::before` pseudo)
- Text v Playfair italic 19px (z 17px), letter-spacing −0.003em
- Karta padding 44px 36px 32px (z 28px 26px) — víc luxusního prostoru
- Avatar: 48px kruh s champagne gold borderem (z 40px bez borderu), iniciála v Playfair 18px
- Border-radius karty `--card-radius-lg` (14px, z 12px)
- Hover lift -2px + 24px shadow

## 8 · Příběh

**Před:** mřížka 0.9fr 1.1fr, plain image.

**Po:**
- Mřížka **1.1fr 1fr** (text vlevo, image vpravo) — asymetrický editorial spread, image dostává víc váhy
- Gap clamp(56px, 8vw, 120px) — generous editorial breathing
- Image: dvouvrstvý shadow 60px+24px — image „pluje", ne plochá karta
- **Monogram J·O watermark** v pravém dolním rohu image (56px kruh, blurred ivory bg, gold border)
- Quote v Playfair italic clamp(22px, 2vw, 28px), big champagne gold `„` na top-left (`::before` 72px opacity 0.55, padding-left 32px na obsahu) — editorial pull quote
- Quote celá v `<span>` pro padding-left offset za quote markem

## 9 · Final CTA

**Před:** dark moss sekce padding ~130px, jednoduchý dark blok.

**Po:**
- Padding clamp(110px, 13vw, 180px) — větší vertikální výška
- **Warm radial gradient** shora: 120% width ellipse v champagne gold 16% → transparent (`::before`) — sekce září, místo aby byla plochá
- **Paper grain texture overlay**: jemný dot pattern 28×28px opacity 0.7 (`::after`)
- Headline 42–76px v Playfair, lead text 16–18px line-height 1.7
- 3 CTAs s gap 16px — sjednocená výška, větší vizuální váha

## 10 · Typografie

| Vlastnost | Před | Po |
|---|---|---|
| Display leading | 1.1 | **0.98** (tight beauty editorial) |
| Body leading | 1.6 | **1.65** |
| Hero font-size | clamp(40, 5.8vw, 84px) | **clamp(48, 7.2vw, 96px)** |
| Hero letter-spacing | −0.015em | **−0.022em** |
| Choice title | clamp(22, 2.2vw, 28) | **clamp(24, 2.4vw, 30)** |
| Pillar title | 19px | **22px** |
| Review text | 17px | **italic 19px** |
| Founder quote | clamp(20, 1.8vw, 24) | **clamp(22, 2vw, 28)** |
| Italic accent | — | **Hero 3. řádek + reviews + quote** |

Italic Playfair systematicky používán jako accent — hero třetí řádek, recenze, founder quote, ritual step čísla.

## 11 · Spacing a grid

| Token | Před | Po |
|---|---|---|
| `--section-gap` | clamp(72, 9vw, 120) | **clamp(96, 11vw, 160)** |
| `--section-gap-tight` | clamp(48, 6vw, 80) | **clamp(64, 7vw, 110)** |
| `--container-padding` | clamp(20, 4vw, 56) | **clamp(24, 5vw, 64)** |
| `--container-max` | 1280px | **1240px** (užší editorial column) |
| `--button-height` | 52px | **54px** |
| `--grid-gap` | 24px | **28px** |
| Header padding | 22px | **28px** |
| Choice card padding | 36/28/28 | **44/32/32** |
| Review card padding | 28/26 | **44/36/32** |

Karty, sekce, headers, mřížky napříč webem — všechno větší / vzdušnější.

## 12 · Background textury

Přidáno (jemně, téměř neviditelné):

1. **Paper grain** — `--paper-grain` token: dva radial gradient layers 24px tile s alpha 0.04/0.05 — jen tušení textury
2. **Warm radial** — `--warm-radial` token: ellipse champagne gold 7% → transparent na 55% — sekce mají decentní hloubku
3. **Hero pozadí** = paper grain + warm radial → působí jako jemný papír, ne plochá bone-white plocha
4. **Final CTA gradient** — warm radial shora + dot pattern → finální moment září
5. **Image shadows** — dvouvrstvý box-shadow (60px / 24px / champagne gold tinted) na hero, set, founder vizuálech — image „plave" v sekci místo aby seděl placko

Žádný hard shadow, žádné dekorativní efekty — vše ve službě hloubky.

## 13 · Co zůstává TODO

1. **AI vizuály jsou placeholdery** — vyměnit za finální studio fotky (zejména founder portrét a editorial scenes do trust pillars / appendix)
2. **Custom typografie** — Playfair Display + Plus Jakarta Sans aktuálně z Google Fonts; pro absolutní hi-end zvážit licencovaný Tiempos / GT Super
3. **Mikro-animace** — scroll-reveal pro sekce, parallax na hero image, image-zoom na hover v kartách (zatím staticky)
4. **Mobile fine-tuning** — testovat na real device, headline na malých viewportech může být příliš dominantní
5. **Footer** zůstal beze změny — má vlastní design, který sedí; pokud bys chtěl, můžeme přidat doplňující typografickou jemnost
6. **Search modal / Account modal** — header ikony stále neaktivní

## 14 · Potvrzení: produkty nezměněny

✅ Produktové fotky beze změny:
- `/v3/products/no1.jpg` ... `no4-night.jpg` — packshoty zůstávají
- `/v3/sets/travel_luxe_*` + `/v3/sets/complete_set_*` — set vizuály zůstávají
- `/v3/hero/homepage_hero_desktop.jpg` — hero vizuál zůstává

Změny jsou v **kontextu fotek** (větší crop, lepší stín, lepší pozadí, větší obrazové plochy), ne v samotných obrázcích. Žádná lahvička, etiketa ani produkt nebyl upraven.

✅ Produktová identita beze změny:
- 5 SKU rituálu (No1, No2, No3, No4 denní, No4 noční)
- 2 sady (Travel Luxe Set 2 490 Kč, Generation Perfect Complete 9 000 Kč)
- Ekonomika 12 750 → 9 000 = úspora 3 750 Kč

## 15 · Potvrzení: zakázané texty 0×

Compliance audit (grep přes celý `src/`):

| Zakázaný text | Výskyt |
|---|---|
| `No5` (user-visible) | ✅ 0× |
| `92 dn` (výdrž) | ✅ 0× |
| `98 Kč` (cena/den) | ✅ 0× |
| `doprava zdarma od` | ✅ 0× |
| `dárek ke každé objednávce` | ✅ 0× |

Povinné texty (across files):

| Povinný text | Souborů |
|---|---|
| `Doprava zdarma vždy` | 4 |
| `od 2 500 Kč` (dárek) | 4 |
| `3 750 Kč` (úspora) | 5 |
| `Začít Travel Setem` (CTA) | 11 |
| `Chci celou sadu` (CTA) | 6 |
| `Chci poradit` (CTA) | 10 |
| `SPF` (caveat) | 8 |

---

## Souhrn

Homepage byla povýšena z **template e-shop look** na **beauty editorial spread**:

- **Větší, monumentální typografie** (hero 7.2vw, line-height 0.96, italic accent)
- **Větší obrazové plochy** (set image 55 %, hero image dominantnější)
- **Šipky místo boxů** v rituálu — méně technický, víc klidný
- **Italic Playfair accents** napříč webem (hero, recenze, quote)
- **Editorial textury** (paper grain, warm radial, gold pull-quotes)
- **Čistší spacing** — větší sekce, větší karty, větší dechovost
- **L-shape gold corner** + **monogram watermark** + **expanding label line** — editorial mikro-detaily

Web zůstává obsahově identický (Travel jako první nákup, Complete jako celá sada, Chci poradit jako třetí cesta), ale designově se přiblížil schválenému Botanical Prestige / Quiet Luxury směru.
