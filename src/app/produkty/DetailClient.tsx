"use client";

import * as React from "react";
import Image from "next/image";
import p from "./products.module.css";
import { IconBag, IconCheck } from "../icons";
import type { Product, ProductSet } from "../data/products";

type Props = { product: Product | ProductSet };

/* ============================================================
   Detail hero gallery — main image + 4 thumbnails
============================================================ */
export function DetailGallery({ product }: Props) {
  // Editorial fallback set — used to fill the gallery to exactly 4 thumbnails.
  // Keep these distinct so they reliably differ from the product hero image.
  const EDITORIAL_FALLBACKS = [
    "/assets/joliorigins/ai/longevity-dropper-ai.png",
    "/assets/joliorigins/ai/journal-botanical-ai.png",
    "/assets/joliorigins/ai/journal-spheres-ai.png",
    "/assets/joliorigins/ai/journal-glassware-ai.png",
    "/assets/joliorigins/midnight-7.jpg",
  ];

  const gallery = React.useMemo(() => {
    const set = product.gallery && product.gallery.length > 0
      ? [...product.gallery]
      : [
          product.heroImage,
          product.textureImage ?? product.cardImage ?? product.productImage,
          product.cardImage ?? product.productImage,
          product.productImage,
        ].filter(Boolean) as string[];

    // pad to exactly 4 with editorial fallbacks not yet in the gallery
    const out: string[] = [];
    for (const src of set) {
      if (src && !out.includes(src)) out.push(src);
      if (out.length === 4) break;
    }
    for (const src of EDITORIAL_FALLBACKS) {
      if (out.length === 4) break;
      if (!out.includes(src)) out.push(src);
    }
    return out.slice(0, 4);
  }, [product]);

  const [active, setActive] = React.useState(0);
  const current = gallery[active] ?? product.heroImage;

  return (
    <div className={p.galleryWrap}>
      <div className={p.galleryMain}>
        <Image src={current} alt={product.name} fill priority sizes="(max-width: 1100px) 100vw, 56vw" />
      </div>
      {gallery.length > 1 && (
        <div className={p.galleryThumbs}>
          {gallery.map((src, i) => (
            <button
              key={src + i}
              type="button"
              className={`${p.galleryThumb} ${i === active ? p.galleryThumbActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Zobrazit fotografii ${i + 1}`}
            >
              <Image src={src} alt="" fill sizes="160px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Right purchase panel — qty, CTAs, batch box, accordions
============================================================ */
export function DetailPurchasePanel({ product }: Props) {
  const [qty, setQty] = React.useState(1);
  const [openAcc, setOpenAcc] = React.useState<number | null>(null);

  const onAdd = () => {
    if (typeof window !== "undefined") {
      console.log("[cart] add", { id: product.id, qty });
    }
  };

  const ritualLabel = product.ritualLabel ?? product.phase;
  const stepNum = product.ritualStep;
  const display = product.displayName ?? product.name;

  const accordions = (product.accordions ?? []).filter(
    (a) => a.title?.trim() && a.content?.trim()
  );

  const batch = product.batchInfo;

  return (
    <div className={p.purchasePanel}>
      {(ritualLabel || stepNum) && (
        <span className={p.purchaseEyebrow}>
          {stepNum ? `Krok ${stepNum}` : ""}{stepNum && ritualLabel ? " · " : ""}{ritualLabel}
        </span>
      )}
      <h1 className={p.purchaseTitle}>
        {display.split("\n").map((line, i, arr) => (
          <React.Fragment key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h1>
      {product.subtitle && (
        <p className={p.purchaseSubtitle}>{product.subtitle}</p>
      )}
      <p className={p.purchaseDesc}>{product.shortDescription}</p>

      {product.tags && product.tags.length > 0 && (
        <ul className={p.purchaseTags}>
          {product.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}

      <div className={p.purchasePriceRow}>
        <span className={p.purchasePrice}>{product.priceFormatted}</span>
        {product.size && <span className={p.purchaseSize}>{product.size}</span>}
      </div>

      <div className={p.purchaseCtaRow}>
        <div className={p.qty}>
          <button className={p.qtyBtn} onClick={() => setQty((q) => Math.max(1, q - 1))} type="button" aria-label="Snížit množství">−</button>
          <span className={p.qtyValue}>{qty}</span>
          <button className={p.qtyBtn} onClick={() => setQty((q) => q + 1)} type="button" aria-label="Zvýšit množství">+</button>
        </div>
        <button className={p.purchasePrimary} type="button" onClick={onAdd}>
          Přidat do košíku <IconBag size={15} />
        </button>
      </div>

      {batch && (
        <div className={p.batchBox}>
          <span className={p.batchLine}>
            Šarže {batch.batch}
            {batch.producedAt && ` · vyrobeno ${batch.producedAt}`}
          </span>
          <span className={p.batchSub}>
            {typeof batch.remaining === "number" && typeof batch.total === "number"
              ? `Zbývá ${batch.remaining} lahviček z ${batch.total}`
              : "Malosériová výroba · omezené množství"}
          </span>
        </div>
      )}

      {accordions.length > 0 && (
        <ul className={p.accordionList}>
          {accordions.map((a, i) => {
            const open = openAcc === i;
            return (
              <li key={a.title} className={p.accordionItem}>
                <button
                  type="button"
                  className={p.accordionToggle}
                  onClick={() => setOpenAcc(open ? null : i)}
                  aria-expanded={open}
                >
                  <span>{a.title}</span>
                  <span className={p.accordionSign} aria-hidden="true">{open ? "−" : "+"}</span>
                </button>
                {open && <div className={p.accordionBody}>{a.content}</div>}
              </li>
            );
          })}
        </ul>
      )}

      {/* Mobile sticky add-to-cart */}
      <div className={p.mobileSticky}>
        <div className={p.mobileStickyInfo}>
          <span className={p.mobileStickyName}>{product.shortName ?? product.name}</span>
          <span className={p.mobileStickyPrice}>{product.priceFormatted}</span>
        </div>
        <button className={p.mobileStickyCta} type="button" onClick={onAdd}>
          Přidat do košíku
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   Newsletter strip (inline, light) — client because of input
============================================================ */
export function NewsletterStrip() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <form
      className={p.newsletterStrip}
      onSubmit={(e) => {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
        setSubmitted(true);
      }}
    >
      <div className={p.newsletterText}>
        <h3>Buďte první, kdo se dozví</h3>
        <p>Novinky, rituály a příběhy ze světa J.Oli Origins.</p>
      </div>
      <div className={p.newsletterForm}>
        <input
          type="email"
          required
          placeholder={submitted ? "Děkujeme — jste v klubu." : "Váš e-mail"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={p.newsletterInput}
          disabled={submitted}
        />
        <button type="submit" className={p.newsletterCta} disabled={submitted}>
          {submitted ? "Přihlášeno" : "Přihlásit se"}
          {!submitted && <IconCheck size={14} />}
        </button>
      </div>
    </form>
  );
}
