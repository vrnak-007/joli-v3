"use client";

import * as React from "react";
import Image from "next/image";
import s from "../styles.module.css";
import c from "./checkout.module.css";
import {
  useCart,
  cartSubtotal,
  formatPriceCZK,
  getShippingProgress,
  getGiftProgress,
  GIFT_THRESHOLD,
  COD_SURCHARGE,
} from "./CartContext";
import {
  IconArrowRight,
  IconBatch,
  IconCheck,
  IconCraft,
  IconGift,
  IconLeaf,
  IconLock,
  IconReturn,
  IconSample,
  IconTruck,
  IconCompass,
} from "../icons";

/* ============================================================
   STEPPER
============================================================ */
export function CheckoutStepper({ current }: { current: 1 | 2 | 3 }) {
  const steps: { num: 1 | 2 | 3; label: string; href: string }[] = [
    { num: 1, label: "Košík", href: "/kosik" },
    { num: 2, label: "Doprava a údaje", href: "/checkout/doprava" },
    { num: 3, label: "Platba a potvrzení", href: "/checkout/platba" },
  ];
  return (
    <nav className={c.stepper} aria-label="Postup objednávky">
      {steps.map((st, i) => {
        const active = st.num === current;
        const done = st.num < current;
        const className = `${c.step} ${active ? c.stepActive : ""} ${done ? c.stepDone : ""}`;
        const inner = (
          <>
            <span className={c.stepCircle}>{done ? "✓" : st.num}</span>
            <span>{st.label}</span>
          </>
        );
        return (
          <React.Fragment key={st.num}>
            {done ? (
              <a href={st.href} className={className} aria-label={`Zpět na krok ${st.num}: ${st.label}`}>
                {inner}
              </a>
            ) : (
              <span className={className}>{inner}</span>
            )}
            {i < steps.length - 1 && <span className={c.stepConnector} aria-hidden="true" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

/* ============================================================
   SUMMARY (aside panel)
============================================================ */
type SummaryProps = {
  step: 1 | 2 | 3;
  showProducts?: boolean;
  primaryCta: { label: string; href?: string; onClick?: () => void; disabled?: boolean };
  totalOverride?: number;
};

export function CheckoutSummary({
  step,
  showProducts = false,
  primaryCta,
  totalOverride,
}: SummaryProps) {
  const { cart, form } = useCart();
  const [couponOpen, setCouponOpen] = React.useState(false);

  const subtotal = cartSubtotal(cart);
  const codSurcharge = step === 3 && form.paymentMethod === "dobirka" ? COD_SURCHARGE : 0;
  const total = totalOverride ?? subtotal + codSurcharge;
  const ship = getShippingProgress(subtotal);
  const gift = getGiftProgress(subtotal);

  return (
    <>
      <div className={c.panel}>
        <div className={c.summaryHead}>
          <h3>Souhrn objednávky</h3>
          {step !== 1 && (
            <a href="/kosik" className={c.summaryEditLink}>Upravit košík</a>
          )}
        </div>

        {showProducts && (
          <div className={c.miniProducts}>
            {cart.map((it) => (
              <div key={it.productId} className={c.miniProduct}>
                <div className={c.miniProductImg}>
                  <Image src={it.image} alt={it.name} fill sizes="56px" />
                </div>
                <div className={c.miniProductBody}>
                  <span className={c.miniProductName}>{it.name}</span>
                  <span className={c.miniProductMeta}>
                    {it.phase ? `${it.phase} · ` : ""}{it.size ? `${it.size} · ` : ""}{it.quantity} ks
                  </span>
                </div>
                <span className={c.miniProductPrice}>{formatPriceCZK(it.price * it.quantity)}</span>
              </div>
            ))}
          </div>
        )}

        <div className={c.lineRow}>
          <span className="muted">Mezisoučet</span>
          <span>{formatPriceCZK(subtotal)}</span>
        </div>
        <div className={c.lineRow}>
          <span className="muted">Doprava</span>
          <span className="gold">{ship.isFree ? "Zdarma" : formatPriceCZK(0)}</span>
        </div>
        <div className={c.lineRow}>
          <span className="muted">Dárek / vzorek</span>
          <span className="gold">Zdarma</span>
        </div>
        {codSurcharge > 0 && (
          <div className={c.lineRow}>
            <span className="muted">Příplatek dobírka</span>
            <span>{formatPriceCZK(codSurcharge)}</span>
          </div>
        )}

        <div className={c.totalRow}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span className={c.totalLabel}>Celkem</span>
            <span className={c.totalSubtext}>vč. DPH</span>
          </div>
          <span className={c.totalValue}>{formatPriceCZK(total)}</span>
        </div>

        {step === 1 && (
          <div className={c.couponRow}>
            <button
              type="button"
              className={c.couponToggle}
              onClick={() => setCouponOpen((o) => !o)}
            >
              Máte dárkový kód? <span>{couponOpen ? "−" : "+"}</span>
            </button>
            {couponOpen && (
              <div className={c.couponBox}>
                <input type="text" className={c.couponInput} placeholder="Zadejte kód" />
                <button type="button" className={c.couponCta}>Použít</button>
              </div>
            )}
          </div>
        )}

        <div className={c.shipBlock} style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--color-border-dark)" }}>
          <p className={c.shipLabel}>
            {gift.unlocked ? "Dárek k objednávce zdarma" : "Dárek k objednávce"}
          </p>
          <p className={c.shipText}>{gift.text}</p>
          <div className={c.shipBar}>
            <div className={c.shipBarFill} style={{ width: `${gift.percentage}%` }} />
          </div>
          <div className={c.shipMilestones}>
            <span>0 Kč</span>
            <span>{formatPriceCZK(GIFT_THRESHOLD)}</span>
          </div>
        </div>
      </div>

      {primaryCta.href ? (
        <a
          href={primaryCta.href}
          className={c.bigCta}
          aria-disabled={primaryCta.disabled}
          onClick={(e) => {
            if (primaryCta.disabled) e.preventDefault();
          }}
        >
          {primaryCta.label} <IconArrowRight size={16} />
        </a>
      ) : (
        <button
          type="button"
          className={c.bigCta}
          onClick={primaryCta.onClick}
          disabled={primaryCta.disabled}
        >
          {primaryCta.label} <IconArrowRight size={16} />
        </button>
      )}

      <div className={c.secureRow}>
        <IconLock size={12} /> Bezpečná platba · 256bit SSL
      </div>

      <div className={c.giftPanel}>
        <div className={c.giftPanelBody}>
          <h4>Dárek k rituálu</h4>
          <p>Ke každé objednávce získáváte vzorek zdarma.</p>
        </div>
        <div className={c.giftPanelImg}>
          <Image src="/assets/joliorigins/ai/complete-set-box-ai.png" alt="" width={200} height={120} />
        </div>
      </div>

      <div className={c.advicePanel}>
        <h4>Potřebujete poradit?</h4>
        <p>Náš Ritual Concierge vám rád pomůže s výběrem správných kroků.</p>
        <a href="/#concierge" className={c.adviceCta}>
          <IconCompass size={12} /> Konzultace online <IconArrowRight size={11} />
        </a>
      </div>
    </>
  );
}

/* ============================================================
   BOTTOM TRUST STRIP
============================================================ */
export function CheckoutTrustStrip() {
  const items = [
    { icon: IconSample, t: "Vzorek zdarma ke každé objednávce" },
    { icon: IconTruck, t: "Doprava zdarma od 2 000 Kč" },
    { icon: IconLock, t: "Bezpečná platba online i dobírkou" },
    { icon: IconReturn, t: "Vrácení do 30 dní bez udání důvodu" },
    { icon: IconCraft, t: "Ručně vyráběno v ČR · malé šarže" },
  ];
  return (
    <section className={c.trustStripBottom}>
      <div className={`${s.container} ${c.container}`}>
        {items.map((it) => (
          <div key={it.t} className={c.trustStripItem}>
            <it.icon size={20} /> {it.t}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Mobile sticky bottom CTA
============================================================ */
export function MobileBottomBar({
  totalLabel,
  total,
  ctaLabel,
  href,
  onClick,
  disabled,
}: {
  totalLabel: string;
  total: number;
  ctaLabel: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <div className={c.mobileBottomBar}>
      <div className={c.mobileBottomInfo}>
        <span className={c.mobileBottomTotal}>{formatPriceCZK(total)}</span>
        <span className={c.mobileBottomLabel}>{totalLabel}</span>
      </div>
      {href ? (
        <a href={href} className={c.mobileBottomCta} aria-disabled={disabled}>
          {ctaLabel}
        </a>
      ) : (
        <button
          type="button"
          className={c.mobileBottomCta}
          onClick={onClick}
          disabled={disabled}
        >
          {ctaLabel}
        </button>
      )}
    </div>
  );
}

/* helpers re-exported */
export { IconBatch, IconCheck, IconGift, IconLeaf, IconLock };
