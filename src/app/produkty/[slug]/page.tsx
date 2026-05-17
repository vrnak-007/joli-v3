import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import s from "../../styles.module.css";
import p from "../products.module.css";
import { StickyChrome, Footer } from "../../Chrome";
import { RitualConcierge } from "../../RitualConcierge";
import {
  DetailGallery,
  DetailPurchasePanel,
} from "../DetailClient";
import {
  IconBag,
  IconMoonStar,
  IconDrop,
  IconHands,
  IconSparkle,
  IconLeaf,
} from "../../icons";

function iconForHowStep(title: string) {
  const t = title.toLowerCase();
  if (t.includes("závěreč") || t.includes("noc") || t.includes("večer")) return IconMoonStar;
  if (t.includes("malé") || t.includes("množ") || t.includes("kapk") || t.includes("hrášku")) return IconDrop;
  if (t.includes("zahř") || t.includes("vtlač") || t.includes("vmasír") || t.includes("aplik") || t.includes("masír")) return IconHands;
  if (t.includes("nechte") || t.includes("působ") || t.includes("ráno") || t.includes("výsledek")) return IconSparkle;
  return IconLeaf;
}
import {
  allProducts,
  getProductBySlug,
  getRitualProducts,
  getProductById,
  isProductSet,
  resolveDetailType,
  type ProductDetailType,
} from "../../data/products";

export function generateStaticParams() {
  return allProducts.map((prod) => ({ slug: prod.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produkt | J.Oli Origins" };
  return {
    title: product.seoTitle ?? `${product.name} | J.Oli Origins`,
    description: product.seoDescription ?? product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // isProductSet kept available for future use:
  void isProductSet;
  const ritualSteps = getRitualProducts();
  const recommendedIds = product.recommendedProductIds ?? product.recommendedWith ?? [];
  const recommended = recommendedIds
    .map((id) => getProductById(id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    .slice(0, 3);

  const detailType = resolveDetailType(product);
  const isRitualDetail = detailType === "ritual";

  // Default Universal data for non-ritual products
  const ritualFitDefault: Record<ProductDetailType, { title: string; text: string }[]> = {
    supplement: [
      { title: "Kdy použít", text: "Použijte ráno i večer podle potřeby pleti. Doplněk k základním krokům rituálu." },
      { title: "Kam zařadit", text: "Zařaďte jako doplňující krok mezi sérum a závěrečnou péči." },
      { title: "Jak často", text: "Každý den nebo podle potřeby pleti a ročního období." },
      { title: "S čím kombinovat", text: "Ideálně s hydratačním sérem No3 a noční regenerací No5." },
    ],
    tool: [
      { title: "Kdy použít", text: "Před aplikací produktů nebo jako součást večerního smyslového rituálu." },
      { title: "Kam zařadit", text: "Použijte na čistou nebo lehce navlhčenou pleť." },
      { title: "Jak často", text: "1–3× týdně nebo podle preferencí." },
      { title: "S čím kombinovat", text: "Nejlépe s noční regenerací No5 a hydratačním sérem No3." },
    ],
    set: [
      { title: "Co sada obsahuje", text: "Všech pět kroků Generation Perfect Ritual v plném balení." },
      { title: "Pro koho je vhodná", text: "Pro každého, kdo chce ucelený rituál bez skládání produktů." },
      { title: "Doba používání", text: ("duration" in product ? product.duration : undefined) ?? "Přibližně 92 dní pravidelného rituálu." },
      { title: "Pro koho ne", text: "Pro citlivější pleť nebo při silných aktivních látkách doporučujeme osobní doporučení." },
    ],
    travel: [
      { title: "Pro koho", text: "Pokud J.Oli zkoušíte poprvé nebo se rozhodujete pro kompletní sadu." },
      { title: "Co poznáte", text: "Textury, vůně a pořadí vrstvení všech pěti kroků." },
      { title: "Doba používání", text: ("duration" in product ? product.duration : undefined) ?? "Přibližně 21 dní pravidelného rituálu." },
      { title: "Co dál", text: "Po dokončení můžete plynule přejít na kompletní sadu." },
    ],
    gift: [
      { title: "Pro koho", text: "Smyslový dárek pro někoho, komu na pleti záleží." },
      { title: "Balení", text: "Prémiové dárkové balení v matném černém boxu." },
      { title: "Co obsahuje", text: "Vybranou kompozici produktů s podrobnou kartou rituálu." },
      { title: "Doba doručení", text: "Možnost expresní rezervace dárkového balení." },
    ],
    ritual: [],
  };

  const valueReasonsCards = (() => {
    const editorial = [
      "/assets/joliorigins/ai/journal-botanical-ai.png",
      "/assets/joliorigins/ai/journal-spheres-ai.png",
      "/assets/joliorigins/ai/longevity-dropper-ai.png",
      "/assets/joliorigins/ai/journal-glassware-ai.png",
    ];
    const benefits = product.benefits ?? [];
    // Pair each benefit into title/text
    return benefits.slice(0, 4).map((b, i) => ({
      title: b.split(/[·.–:]/)[0].trim() || b,
      text: b,
      image: editorial[i % editorial.length],
    }));
  })();

  const universalHowSteps = (product.howToUse ?? []).slice(0, 4).map((s, i) => ({
    number: String(i + 1).padStart(2, "0"),
    text: typeof s === "string" ? s : `${s.step}. ${s.text}`,
  }));

  return (
    <div className={s.root}>
      <StickyChrome active="produkty" />

      {/* Breadcrumb */}
      <nav className={p.breadcrumb} aria-label="Drobečková navigace">
        <div className={`${s.container} ${p.breadcrumbInner}`}>
          <a href="/">Domů</a>
          <span className={p.breadcrumbSep}>/</span>
          <a href="/produkty">Produkty</a>
          <span className={p.breadcrumbSep}>/</span>
          <span className={p.breadcrumbCurrent}>{product.name}</span>
        </div>
      </nav>

      {/* ============== HERO ============== */}
      <section className={p.heroV2}>
        <div className={`${s.container} ${p.heroV2Grid}`}>
          <DetailGallery product={product} />
          <DetailPurchasePanel product={product} />
        </div>
      </section>

      {/* ============== UNIVERZÁLNÍ SEKCE (pro doplňky, sady, accessories, travel) ============== */}
      {!isRitualDetail && (
        <>
          {/* Jak zapadá do vašeho rituálu */}
          <section className={`${p.uniSection} ${s.container}`}>
            <h2 className={p.uniSectionTitle}>Jak zapadá do vašeho rituálu</h2>
            <div className={p.ritualFitGrid}>
              {(ritualFitDefault[detailType] ?? ritualFitDefault.supplement).map((card) => (
                <article key={card.title} className={p.ritualFitCard}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Proč dává smysl */}
          {valueReasonsCards.length > 0 && (
            <section className={`${p.uniSection} ${s.container}`}>
              <h2 className={p.uniSectionTitle}>Proč dává smysl</h2>
              <div className={p.valueReasonsGrid}>
                {valueReasonsCards.map((card) => (
                  <article key={card.title} className={p.valueReasonCard}>
                    {card.image && (
                      <div className={p.valueReasonImg}>
                        <Image src={card.image} alt={card.title} width={400} height={222} />
                      </div>
                    )}
                    <div className={p.valueReasonBody}>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Jak používat — image + numbered steps without icons */}
          {universalHowSteps.length > 0 && (
            <section className={`${p.uniSection} ${s.container}`}>
              <h2 className={p.uniSectionTitle}>Jak používat</h2>
              <div className={p.uniHowGrid}>
                <div className={p.uniHowImage}>
                  <Image
                    src={product.textureImage ?? product.heroImage}
                    alt={`${product.name} — aplikace`}
                    width={900}
                    height={580}
                  />
                </div>
                <ol className={p.uniHowSteps}>
                  {universalHowSteps.map((step) => (
                    <li key={step.number} className={p.uniHowStep}>
                      <span className={p.uniHowNum}>{step.number}</span>
                      <p className={p.uniHowText}>{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}
        </>
      )}

      {/* ============== ROLE V RITUÁLU (jen pro ritualové produkty) ============== */}
      {isRitualDetail && (
        <section className={p.ritualAxisSection}>
          <div className={s.container}>
            <h2 className={p.sectionTitleCenter}>Role v rituálu</h2>
            <div className={p.ritualAxis}>
              {ritualSteps.map((step) => {
                const isCurrent = step.id === product.id;
                return (
                  <a
                    key={step.id}
                    href={`/produkty/${step.slug}`}
                    className={`${p.ritualAxisCard} ${isCurrent ? p.ritualAxisCardCurrent : ""}`}
                  >
                    <div className={p.ritualAxisCardImg}>
                      <Image
                        src={step.heroImage}
                        alt={step.name}
                        fill
                        sizes="(max-width: 700px) 80vw, (max-width: 1100px) 33vw, 20vw"
                      />
                    </div>
                    <span className={p.ritualAxisNum}>{step.ritualStep}</span>
                    <span className={p.ritualAxisPhase}>{step.phase}</span>
                    <span className={p.ritualAxisName}>{step.shortName ?? step.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============== ÚČINNÉ LÁTKY (jen pro ritualové produkty) ============== */}
      {isRitualDetail && product.keyIngredients && product.keyIngredients.length > 0 && (
        <section className={p.ingredientsSection}>
          <div className={s.container}>
            <h2 className={p.sectionTitleCenter}>Účinné látky</h2>
            <div className={p.ingredientsGrid}>
              {(() => {
                // Editorial fallback set — different visuals for each card so
                // we never repeat the same product photo.
                const EDITORIAL = [
                  "/assets/joliorigins/ai/journal-botanical-ai.png",
                  "/assets/joliorigins/ai/journal-spheres-ai.png",
                  "/assets/joliorigins/ai/longevity-dropper-ai.png",
                  "/assets/joliorigins/ai/journal-glassware-ai.png",
                ];
                return product.keyIngredients!.slice(0, 4).map((ing, i) => (
                  <article key={ing.name} className={p.ingredientCard}>
                    <div className={p.ingredientCardImg}>
                      <Image
                        src={ing.image ?? EDITORIAL[i % EDITORIAL.length]}
                        alt={ing.name}
                        width={400}
                        height={240}
                      />
                    </div>
                    <div className={p.ingredientCardBody}>
                      <h3>{ing.name}</h3>
                      <p>{ing.description}</p>
                    </div>
                  </article>
                ));
              })()}
            </div>
          </div>
        </section>
      )}

      {/* ============== TEXTURA + JAK POUŽÍVAT (jen pro ritualové) ============== */}
      {isRitualDetail && product.howToUse && product.howToUse.length > 0 && (
        <section className={p.textureHowSection}>
          <div className={`${s.container} ${p.textureHowGrid}`}>
            <div className={p.textureHowImage}>
              <Image
                src={product.textureImage ?? product.heroImage}
                alt={`${product.name} — textura`}
                fill
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>
            <div className={p.textureHowSteps}>
              {product.howToUse.map((step, i) => {
                const Icon = iconForHowStep(step.step);
                return (
                  <article key={step.step + i} className={p.textureHowStep}>
                    <span className={p.textureHowNum}>
                      <Icon size={26} />
                    </span>
                    <div>
                      <h3>{step.step}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============== DOPORUČENO K TOMUTO PRODUKTU ============== */}
      {recommended.length > 0 && (
        <section className={p.recommendedSection}>
          <div className={s.container}>
            <h2 className={p.sectionTitleCenter}>Doporučeno k tomuto produktu</h2>
            <div className={p.recommendedGrid}>
              {recommended.map((rec) => (
                <a key={rec.id} href={`/produkty/${rec.slug}`} className={p.recommendedCard}>
                  <div className={p.recommendedImg}>
                    <Image
                      src={rec.cardImage ?? rec.heroImage}
                      alt={rec.name}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className={p.recommendedBody}>
                    {rec.phase && <span className={p.recommendedPhase}>{rec.phase}</span>}
                    <h3>{rec.shortName ?? rec.name}</h3>
                    <p>{rec.heroClaim}</p>
                    <div className={p.recommendedFooter}>
                      <span className={p.recommendedPrice}>{rec.priceFormatted}</span>
                      <span className={p.recommendedCta}>
                        Detail <IconBag size={13} />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============== ZAČNĚTE ZÁKLADNÍM RITUÁLEM (jen pro univerzální produkty) ============== */}
      {!isRitualDetail && (
        <section className={`${p.uniSection} ${s.container}`}>
          <div className={p.ritualCta}>
            <div className={p.ritualCtaBody}>
              <span className={`${s.uppercase} ${s.gold}`}>Generation Perfect Ritual</span>
              <h3>Začněte základním rituálem</h3>
              <p>
                Doplňkové produkty dávají největší smysl, když navazují na váš každodenní
                rituál. Objevte kompletní péči Generation Perfect Ritual — pět kroků,
                jeden vědomý rituál.
              </p>
              <a href="/ritual">Objevit rituál →</a>
            </div>
            <div className={p.ritualCtaImage}>
              <Image src="/assets/joliorigins/hero/hero-set.png" alt="Generation Perfect Ritual" width={700} height={500} />
            </div>
          </div>
        </section>
      )}

      <Footer />
      <RitualConcierge />
    </div>
  );
}
