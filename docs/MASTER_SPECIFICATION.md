# J.Oli Origins Master Specification

Status: Active  
Last update: 2026-05-15  
Scope: kompletní cílový web `joliorigins.cz` v plné funkcionalitě (B2C + B2B + content + AI-ready provoz)

## 1. Produktová mise
J.Oli Origins není běžný e-shop. Cílový produkt je luxusní digitální butik postavený na principu:
1. prodávat vědomý pětikrokový rituál Generation Perfect
2. budovat důvěru v českou boutique značku
3. rozvíjet samostatnou B2B větev pro prémiové kosmetické salony
4. připravit plně auditovatelnou AI-ready content vrstvu s human approval branou

## 1.2 North Star cíle (závazné priority)
1. Primární obchodní cíl: systematicky růst B2C prodeje přes web.
2. Primární produktový cíl: špičkový UX a vizuální standard na úrovni top segmentu beauty/luxury e-commerce.
3. Primární provozní cíl: vysoká míra automatizace opakovatelných procesů při zachování brand a claim bezpečnosti.
4. Důvěra ve značku je podmínka růstu, ne vedlejší efekt.

## 1.3 Prioritizační pravidlo (při konfliktu rozhodnutí)
1. Rozhodnutí, které zlepší B2C konverzi bez poškození důvěry, má přednost.
2. Rozhodnutí, které zlepší UX čitelnost a sníží friction ve funnelu, má přednost.
3. Rozhodnutí, které zvýší automatizaci a zároveň zachová auditovatelnost, má přednost.
4. Rozhodnutí, které je "efektní", ale nepřináší měřitelný obchodní dopad, je sekundární.

## 1.4 Pilotní realizační logika (90 dní)
1. Prioritou je validace obchodních hypotéz, ne okamžitá plná automatizace.
2. AI je multiplikátor produktivity, ale důvěra stojí na reálném produktu, zakladatelce a referencích.
3. Každá fáze má mít go/no-go checkpoint.
4. Veřejné výstupy s rizikem claim/compliance musí mít lidské schválení.
5. Architektura workflow zůstává modulární a auditovatelná.

Detailní operační souhrn je v:
- `docs/PILOT_90D_WORKFLOW_SUMMARY.md`

## 2. Brand a komunikační rámec

### 2.1 Tonalita
- klidná
- ženská
- profesionální
- smyslová
- dospělá
- bez agresivního nátlaku

### 2.2 Povolený slovník
- rituál
- vrstvení
- longevity
- péče
- podpora
- doplnění
- ruční výroba
- malé šarže
- boutique
- vybrané salony

### 2.3 Zakázaná komunikace
- sleva
- akce
- výprodej
- ušetříte
- zázračný
- revoluční
- nejlepší
- léčí
- odstraní vrásky
- klinicky prokázané (bez doložení)

### 2.4 Design směr
- dark quiet luxury
- tmavé černohnědé pozadí
- krémová typografie
- champagne/měď akcenty
- olivová sekundárně
- velké serifové nadpisy
- čistý sans-serif body text
- jemné linky, prémiové spacingy, decentní animace

## 3. Cílové persony
1. B2C zákaznice
- hledá kvalitní rutinu
- oceňuje odbornost a klidnou péči
- nechce agresivní marketing
2. Salon partner (B2B)
- hledá profesionální značku s podporou
- potřebuje jasné podmínky spolupráce
- očekává materiály, školení a stabilní péči o klientelu
3. Content/operations tým
- potřebuje rychlou správu obsahu
- potřebuje jasný schvalovací proces
- potřebuje AI podporu bez reputačního rizika

## 4. Informační architektura webu

### 4.1 Hlavní sekce
1. Rituál
2. Produkty
3. Příběh
4. Žurnál
5. Pro salony
6. Ingredience
7. Podpora
8. Účet
9. Košík/Checkout

### 4.2 Klíčové landing stránky
1. Homepage (hlavní obchodní vstup)
2. Kompletní rituál / sada
3. Kategorie produktů
4. Produktový detail
5. Pleťový průvodce
6. Ingredience a filozofie
7. Žurnál listing + detail článku
8. Pro salony landing
9. Salonní formulář/lead funnel
10. Newsletter preference / odhlášení

## 5. Homepage cílový stav

### 5.1 Pořadí sekcí
1. Header
2. Gift progress bar
3. Hero (rituál + dual CTA)
4. Complete set box
5. Jedna hlavní produktová sekce s taby
6. Longevity/aktivní látky blok
7. Trust strip
8. Žurnál teaser
9. Pro salony teaser
10. Newsletter
11. Footer

### 5.2 Event tracking na homepage
- hero_ritual_click
- hero_salon_click
- gift_progress_view
- complete_set_add_to_cart
- complete_set_view
- product_category_switch
- product_detail_click
- product_add_to_cart
- longevity_block_click
- journal_article_click
- salon_teaser_click
- newsletter_signup

### 5.3 UX/CRO zásady homepage
1. Hero musí do 3 sekund vysvětlit hodnotu rituálu a nabídnout jasné B2C CTA.
2. Nejvýkonnější nabídka (kompletní sada) musí být viditelná bez zbytečného scroll friction.
3. Každá sekce musí mít jednu hlavní akci, ne paralýzu volbou.
4. Mobilní verze má mít stejnou argumentační sílu jako desktop.
5. Vizuální elegance nesmí oslabit čitelnost, kontrast ani orientaci.
6. Trust prvky (ruční výroba, malé šarže, partnerství) musí být distribuované napříč funnel cestou.
7. UX rozhodnutí se vyhodnocují podle měřených eventů, ne podle estetiky samotné.

## 6. Funkční rozsah celého webu (plná funkcionalita)

### 6.1 B2C e-commerce
1. katalog produktů s kategoriemi
2. rituálové pořadí 01-05
3. varianty, ceny, sklad, dostupnost
4. košík + checkout
5. gift progress bar bez slevové rétoriky
6. doprava a platební metody pro CZ trh
7. objednávková historie a notifikace

### 6.2 Produktový detail
1. jasný krok v rituálu
2. benefit a způsob vrstvení
3. klíčové ingredience
4. doporučené kombinace
5. CTA přidat do košíku
6. příbuzné články ze žurnálu

### 6.3 Pleťový průvodce
1. interaktivní otázky bez diagnostického framingu
2. výstup: doporučený rituál + sada + vysvětlení
3. možnost poslat výsledek e-mailem
4. navazující segmentace do e-mailových sekvencí

### 6.4 Žurnál (editorial + SEO)
1. listing článků podle témat
2. detail článku
3. interní linking na produkty a rituály
4. statusový workflow publikace
5. AI návrhy s povinným schválením

### 6.5 B2B Pro salony
1. samostatná landing page
2. hodnotová nabídka partnerství
3. formulář pro lead capture
4. možnost stažení salonního briefu
5. lead scoring a navazující e-mailová péče

### 6.6 Účet a podpora
1. účet zákaznice
2. reset hesla
3. stavy objednávek
4. podpora dopravy/vrácení/reklamace/FAQ

## 7. CMS, obsah a datové domény

### 7.1 Directus obsahové domény
1. homepage bloky
2. kampaně
3. GiftCampaign
4. žurnál
5. claim matrix
6. ingredience
7. skin guide otázky a výsledky
8. B2B obsah
9. Eliska content assets

### 7.2 Povinné workflow stavy (obsah)
- idea
- brief_generated
- draft_generated
- image_pending
- image_generated
- claim_check_pending
- review_pending
- approved
- scheduled
- published
- social_repurpose_pending

### 7.3 Publikační pravidlo
Na web může jít pouze obsah ve stavu `approved` nebo `published`.

## 8. AI-ready content a schvalování

### 8.1 AI role modelů
1. levné objemové texty: Kimi/cheap model
2. compliance a citlivé texty: premium model
3. image model: vizuály pro editorial/social
4. vision QA model: kontrola výstupů

### 8.2 Human approval gate
1. AI výstup je vždy návrh
2. schvalování probíhá přes Telegram workflow
3. bez schválení nesmí dojít k publikaci

### 8.3 Rizika AI vrstvy
1. claim risk
2. halucinace faktů
3. brand tone drift
4. nekonzistentní kvalita vizuálů

Mitigace:
1. claim matrix
2. dvouúrovňová kontrola pro citlivé texty
3. logging promptů a rozhodnutí
4. auditní stopa v Directus/n8n

## 9. Technická architektura (cílový stav)

### 9.1 Stack
1. Next.js frontend
2. Medusa.js commerce core
3. PostgreSQL (oddělené DB per služba)
4. Directus CMS
5. n8n orchestrace
6. Cloudflare R2 storage
7. Resend transakční e-mail
8. MailerLite marketing automation
9. Telegram bot pro schvalování

### 9.2 Hosting
1. Hetzner VPS
2. Docker Compose/Coolify
3. Reverse proxy + SSL (Caddy nebo Coolify proxy)
4. externí zálohy DB

### 9.3 Databázová separace
- joli_medusa_db
- joli_directus_db
- joli_n8n_db

## 10. Integrace českého provozu

### 10.1 Platby
Preferovaný obchodní směr: Comgate  
Rychlé MVP fallback: Stripe

### 10.2 Fakturace
Medusa order -> n8n webhook -> Fakturoid -> Resend -> metadata zpět

### 10.3 Doprava
Start:
1. Packeta výdejní místo
2. Packeta/PPL doručení
3. osobní odběr jen pokud existuje provozně

## 11. Měření a analytika

### 11.1 Nástroje
1. GA4
2. GTM
3. consent mode
4. Cloudflare Analytics

### 11.2 Funnel perspektivy
1. homepage -> ritual/product engagement
2. PDP -> add to cart -> checkout
3. salon teaser -> lead form submit
4. journal -> product assist conversion
5. newsletter signup -> retention flow

## 12. Security, compliance, governance
1. respektovat GDPR a consent režim
2. auditovat sběr dat a marketingové souhlasy
3. oddělit přístupy pro služby
4. logovat změny workflow, zejména AI approval rozhodnutí

## 13. Non-functional požadavky
1. rychlost načítání a Core Web Vitals
2. responzivita mobile/desktop
3. dostupnost a čitelnost UI
4. stabilita build/deploy pipeline
5. pozorovatelnost a monitoring

## 14. MVP roadmap

### MVP 1: butikový frontend základ
1. homepage
2. produktové stránky
3. základní CMS obsah
4. gift progress
5. skin guide
6. žurnál minimum
7. pro salony teaser

### MVP 2: český obchodní provoz
1. platba
2. fakturace
3. doprava
4. transakční e-maily
5. skladové minimum

### MVP 3: AI content engine
1. trend listener
2. article draft automation
3. image draft automation
4. claim check
5. telegram schvalování

### MVP 4: salonní engine
1. plný pro-salony funnel
2. lead magnet
3. nurture sekvence
4. scoring
5. B2B CRM logika

## 15. Cílové datové modely (minimum)

### 15.1 GiftCampaign
- title
- threshold_amount
- gift_product_id
- gift_name
- start_date
- end_date
- active
- homepage_copy
- cart_copy_before
- cart_copy_after
- claim_safe_note

### 15.2 SkinGuideQuestion
- question
- options
- weight_tags

### 15.3 SkinGuideResult
- result_key
- title
- description
- recommended_products
- recommended_ritual
- email_sequence_id
- disclaimer

### 15.4 Campaign
- id
- name
- type
- status
- active_from
- active_to
- homepage_slot
- related_products
- related_articles
- gift_campaign_id
- salon_cta_enabled
- copy_headline
- copy_body
- approved_by
- approved_at

### 15.5 EliskaContentAsset
- image
- prompt
- disclosure
- location
- outfit
- pillar
- approved
- used_on_pages
- social_post_ids

## 16. Akceptační kritéria hotového webu
1. Web působí jako prémiový butik, ne marketplace.
2. Hlavní obchodní příběh je rituál-first, ne slevy.
3. B2C i B2B funnel jsou jasně dostupné.
4. Gift mechanismus používá pečující, neslevový jazyk.
5. Žurnál a AI workflow mají jasný approval gate.
6. Claim rizika jsou procesně ošetřena.
7. Architektura umožňuje škálování bez pluginového chaosu.

## 17. Aktuální stav implementace (k datu poslední aktualizace)
1. Založen Next.js projekt a první premium homepage verze.
2. Zavedena základní komponentová struktura.
3. Připravena dokumentační sada pro multi-account spolupráci.

## 18. Pravidlo pro pokračování
Každý další větší krok musí:
1. navázat na tento dokument
2. zapsat změny do handover logu
3. udržet konzistenci brandu, compliance a architektury
