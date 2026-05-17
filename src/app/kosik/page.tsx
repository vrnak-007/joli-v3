"use client";

import * as React from "react";
import Image from "next/image";
import s from "../styles.module.css";
import c from "../checkout/checkout.module.css";
import { StickyChrome, Footer } from "../Chrome";
import {
  CartProvider,
  useCart,
  formatPriceCZK,
  cartSubtotal,
  getRecommendedNextProduct,
  getRitualStepsInCart,
  isCompleteRitual,
  RITUAL_STEP_META,
  RITUAL_STEPS,
} from "../checkout/CartContext";
import {
  CheckoutStepper,
  CheckoutSummary,
  CheckoutTrustStrip,
  MobileBottomBar,
} from "../checkout/CheckoutShared";
import {
  IconArrowRight,
  IconClose,
  IconCheck,
} from "../icons";

function CartStepInner() {
  const { cart, setQuantity, remove, addItem } = useCart();
  const subtotal = cartSubtotal(cart);
  const recommendation = getRecommendedNextProduct(cart);
  const presentSteps = new Set(getRitualStepsInCart(cart));
  const complete = isCompleteRitual(cart);
  const count = presentSteps.size;

  let ritualHeadline = recommendation.headline;
  let ritualText = recommendation.text;
  if (cart.length === 0) {
    ritualHeadline = "Váš košík je prázdný";
    ritualText = "Objevte Generation Perfect Ritual a vraťte se sem.";
  }

  const onAddRec = () => {
    if (!recommendation.product) return;
    const r = recommendation.product;
    addItem({
      productId: r.slug,
      slug: r.slug,
      name: r.name,
      phase: r.phase,
      ritualStep: r.step,
      category: "ritual",
      size: "30 ml",
      price: r.price,
      quantity: 1,
      image: r.image,
    });
  };

  return (
    <div className={s.root}>
      <StickyChrome active="produkty" />

      <main className={c.shell}>
        <div className={s.container}>
          <div className={c.headerRow}>
            <h1 className={c.pageTitle}>Košík</h1>
            <a href="/produkty" className={c.backLink}>
              ← Zpět k nákupu
            </a>
          </div>
          <p className={c.pageSubtitle}>
            Zkontrolujte produkty a množství. V dalším kroku zvolíte dopravu
            a vyplníte údaje.
          </p>

          <CheckoutStepper current={1} />

          {cart.length === 0 ? (
            <div className={c.panel}>
              <div className={c.emptyCart}>
                <h2>Váš košík je prázdný</h2>
                <p>Objevte Generation Perfect Ritual.</p>
                <a href="/produkty" className={c.bigCta} style={{ width: "auto", display: "inline-flex" }}>
                  Zobrazit produkty <IconArrowRight size={14} />
                </a>
              </div>
            </div>
          ) : (
            <div className={c.grid}>
              <div className={c.main}>
                {/* PRODUCT TABLE */}
                <div className={c.panel}>
                  <div className={c.tableHead}>
                    <div>Produkt</div>
                    <div>Velikost</div>
                    <div>Cena</div>
                    <div>Množství</div>
                    <div>Mezisoučet</div>
                    <div />
                  </div>
                  {cart.map((it) => (
                    <div key={it.productId} className={c.row}>
                      <a href={`/produkty/${it.slug}`} className={c.rowProduct}>
                        <div className={c.rowImage}>
                          <Image src={it.image} alt={it.name} fill sizes="80px" />
                        </div>
                        <div>
                          <h4 className={c.rowName}>{it.name}</h4>
                          {it.phase && it.ritualStep && (
                            <span className={c.rowPhase}>
                              Krok {it.ritualStep} · {it.phase}
                            </span>
                          )}
                        </div>
                      </a>
                      <div className={c.rowSize}>{it.size ?? "—"}</div>
                      <div className={c.rowPrice}>{formatPriceCZK(it.price)}</div>
                      <div className={c.qty}>
                        <button
                          className={c.qtyBtn}
                          type="button"
                          onClick={() => setQuantity(it.productId, it.quantity - 1)}
                          aria-label="Snížit množství"
                        >
                          −
                        </button>
                        <span className={c.qtyValue}>{it.quantity}</span>
                        <button
                          className={c.qtyBtn}
                          type="button"
                          onClick={() => setQuantity(it.productId, it.quantity + 1)}
                          aria-label="Zvýšit množství"
                        >
                          +
                        </button>
                      </div>
                      <div className={c.rowSubtotal}>
                        {formatPriceCZK(it.price * it.quantity)}
                      </div>
                      <button
                        type="button"
                        className={c.rowRemove}
                        onClick={() => remove(it.productId)}
                        aria-label={`Odstranit ${it.name}`}
                      >
                        <IconClose size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* RITUAL COMPLETENESS */}
                <div className={c.ritualPanel}>
                  <div className={c.ritualLeft}>
                    <h3>{ritualHeadline}</h3>
                    <p>{ritualText}</p>
                    <div className={c.ritualStepsRow}>
                      {RITUAL_STEPS.map((stepId) => {
                        const meta = RITUAL_STEP_META[stepId];
                        const done = presentSteps.has(stepId);
                        return (
                          <div
                            key={stepId}
                            className={`${c.ritualStepNode} ${done ? c.ritualStepNodeDone : c.ritualStepNodeMissing}`}
                          >
                            <span className={c.ritualStepBadge}>
                              {done ? <IconCheck size={12} /> : "+"}
                            </span>
                            <span className={c.ritualStepNum}>{stepId}</span>
                            <span className={c.ritualStepPhase}>{meta.phase}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {complete ? (
                    <div className={c.ritualComplete}>
                      <IconCheck size={14} />
                      <span>
                        Rituál máte kompletní. V dalším kroku zvolíte dopravu
                        a platbu.
                      </span>
                    </div>
                  ) : (
                    recommendation.product && (
                      <div className={c.ritualRecRow}>
                        <div className={c.ritualRecRowImg}>
                          <Image
                            src={recommendation.product.image}
                            alt={recommendation.product.name}
                            fill
                            sizes="58px"
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <div className={c.ritualRecRowBody}>
                          <span className={c.ritualRecRowLabel}>
                            Doporučujeme doplnit
                          </span>
                          <h4 className={c.ritualRecRowName}>
                            {recommendation.product.name}
                          </h4>
                          <span className={c.ritualRecRowPhase}>
                            Krok {recommendation.product.step} ·{" "}
                            {recommendation.product.phase}
                          </span>
                        </div>
                        <span className={c.ritualRecRowPrice}>
                          {formatPriceCZK(recommendation.product.price)}
                        </span>
                        <button
                          type="button"
                          className={c.ritualRecRowCta}
                          onClick={onAddRec}
                        >
                          Přidat
                        </button>
                      </div>
                    )
                  )}
                </div>

                {/* Soft text-only fallback links — replaces heavy promo grid */}
                {!complete && (
                  <div className={c.softPromoLinks}>
                    <span>Chcete jednodušší volbu?</span>
                    <a href="/produkty/generation-perfect-ritual-kompletni-sada">
                      Zobrazit kompletní sadu
                    </a>
                    <span aria-hidden="true">·</span>
                    <a href="/produkty/travel-luxe-set">
                      Travel Luxe Set
                    </a>
                  </div>
                )}
              </div>

              <aside className={c.aside}>
                <CheckoutSummary
                  step={1}
                  primaryCta={{
                    label: "Pokračovat na dopravu",
                    href: "/checkout/doprava",
                    disabled: cart.length === 0,
                  }}
                />
              </aside>
            </div>
          )}
        </div>
      </main>

      <CheckoutTrustStrip />
      <Footer />

      {cart.length > 0 && (
        <MobileBottomBar
          totalLabel="Celkem vč. DPH"
          total={subtotal}
          ctaLabel="Pokračovat"
          href="/checkout/doprava"
        />
      )}
    </div>
  );
}

export default function CartStepPage() {
  return (
    <CartProvider>
      <CartStepInner />
    </CartProvider>
  );
}
