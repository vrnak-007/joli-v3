"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import s from "../../styles.module.css";
import c from "../checkout.module.css";
import { StickyChrome, Footer } from "../../Chrome";
import {
  CartProvider,
  useCart,
  cartSubtotal,
  formatPriceCZK,
  getRitualStepsInCart,
  RITUAL_STEP_META,
  RITUAL_STEPS,
  COD_SURCHARGE,
} from "../CartContext";
import {
  CheckoutStepper,
  CheckoutSummary,
  CheckoutTrustStrip,
  MobileBottomBar,
} from "../CheckoutShared";
import { IconLock, IconCheck, IconArrowRight } from "../../icons";

type Errors = Partial<Record<string, string>>;

function PaymentStepInner() {
  const router = useRouter();
  const { cart, form, updateForm, clear } = useCart();
  const [errors, setErrors] = React.useState<Errors>({});
  const [busy, setBusy] = React.useState(false);

  const subtotal = cartSubtotal(cart);
  const total = subtotal + (form.paymentMethod === "dobirka" ? COD_SURCHARGE : 0);

  const presentSteps = new Set(getRitualStepsInCart(cart));
  const stepCount = presentSteps.size;

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.paymentMethod) e.paymentMethod = "Vyberte platební metodu.";
    if (form.paymentMethod === "card") {
      if (!/^\d{12,19}$/.test(form.cardNumber.replace(/\s+/g, ""))) {
        e.cardNumber = "Zadejte platné číslo karty.";
      }
      if (!/^\d{2}\s*\/\s*\d{2}$/.test(form.cardExpiry)) {
        e.cardExpiry = "Formát MM/RR.";
      }
      if (!/^\d{3,4}$/.test(form.cardCvc)) e.cardCvc = "3–4 číslice.";
      if (!form.cardName.trim()) e.cardName = "Vyplňte jméno na kartě.";
    }
    if (!form.termsAccepted) e.termsAccepted = "Musíte souhlasit s obchodními podmínkami.";
    if (!form.privacyAccepted) e.privacyAccepted = "Musíte souhlasit se zásadami ochrany osobních údajů.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onPay = async () => {
    if (!validate()) return;
    setBusy(true);
    // TODO: napojit na payment provider. Tady jen mock confirmation.
    await new Promise((r) => setTimeout(r, 400));
    clear();
    router.push("/checkout/dokonceno");
  };

  const inputProps = (key: keyof typeof form) => ({
    value: String(form[key] ?? ""),
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      updateForm(key, e.target.value as never),
    "aria-invalid": Boolean(errors[key]),
    className: c.fieldInput,
  });

  return (
    <div className={s.root}>
      <StickyChrome active="produkty" />

      <main className={c.shell}>
        <div className={s.container}>
          <div className={c.headerRow}>
            <h1 className={c.pageTitle}>Platba a potvrzení</h1>
            <a href="/checkout/doprava" className={c.backLink}>← Zpět k dopravě a údajům</a>
          </div>
          <p className={c.pageSubtitle}>
            Vyberte platební metodu, potvrďte souhlasy a dokončete objednávku.
          </p>

          <CheckoutStepper current={3} />

          <div className={c.grid}>
            <div className={c.main}>
              {/* PAYMENT METHOD */}
              <div className={c.panel}>
                <h3 className={c.panelTitle}>Platební metoda</h3>
                <div className={c.radioCards}>
                  {([
                    {
                      id: "card",
                      title: "Online platba kartou",
                      desc: "Rychlá a bezpečná platba.",
                      right: (
                        <span className={c.payIcons}>
                          <span className={c.payIconChip}>Visa</span>
                          <span className={c.payIconChip}>MC</span>
                          <span className={c.payIconChip}>Apple Pay</span>
                          <span className={c.payIconChip}>G Pay</span>
                        </span>
                      ),
                    },
                    {
                      id: "applepay",
                      title: "Apple Pay",
                      desc: "Platba přes Apple Wallet.",
                      right: <span className={c.payIconChip}>Apple Pay</span>,
                    },
                    {
                      id: "googlepay",
                      title: "Google Pay",
                      desc: "Platba přes Google Wallet.",
                      right: <span className={c.payIconChip}>G Pay</span>,
                    },
                    {
                      id: "bank",
                      title: "Bankovní převod",
                      desc: "Standardní bankovní převod.",
                      right: <span className={c.payIconChip}>Banka</span>,
                    },
                    {
                      id: "dobirka",
                      title: "Dobírka",
                      desc: "Zaplatíte při převzetí zásilky.",
                      right: <span className={c.radioCardPrice}>+ 39 Kč</span>,
                    },
                  ] as const).map((opt) => {
                    const active = form.paymentMethod === opt.id;
                    return (
                      <label
                        key={opt.id}
                        className={`${c.radioCard} ${active ? c.radioCardActive : ""}`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={opt.id}
                          checked={active}
                          onChange={() => updateForm("paymentMethod", opt.id)}
                        />
                        <span className={c.radioDot} aria-hidden="true" />
                        <div className={c.radioCardBody}>
                          <h4>{opt.title}</h4>
                          <p>{opt.desc}</p>
                        </div>
                        {opt.right}
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* CARD FIELDS — only for card method */}
              {form.paymentMethod === "card" && (
                <div className={c.panel}>
                  <h3 className={c.panelTitle}>Údaje o kartě</h3>
                  <div className={c.cardForm}>
                    <div className={c.field}>
                      <label className={c.fieldLabel}>Číslo karty</label>
                      <input
                        type="text"
                        placeholder="1234 1234 1234 1234"
                        inputMode="numeric"
                        {...inputProps("cardNumber")}
                      />
                      {errors.cardNumber && <span className={c.fieldError}>{errors.cardNumber}</span>}
                    </div>
                    <div className={c.field}>
                      <label className={c.fieldLabel}>Platnost</label>
                      <input
                        type="text"
                        placeholder="MM / RR"
                        inputMode="numeric"
                        {...inputProps("cardExpiry")}
                      />
                      {errors.cardExpiry && <span className={c.fieldError}>{errors.cardExpiry}</span>}
                    </div>
                    <div className={c.field}>
                      <label className={c.fieldLabel}>CVC / CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        inputMode="numeric"
                        {...inputProps("cardCvc")}
                      />
                      {errors.cardCvc && <span className={c.fieldError}>{errors.cardCvc}</span>}
                    </div>
                    <div className={c.field}>
                      <label className={c.fieldLabel}>Jméno na kartě</label>
                      <input type="text" placeholder="Jméno a příjmení" {...inputProps("cardName")} />
                      {errors.cardName && <span className={c.fieldError}>{errors.cardName}</span>}
                    </div>
                  </div>
                  <span className={c.fieldHint}>
                    Vaše údaje jsou šifrované a v bezpečí. Platba probíhá přes zabezpečenou bránu.
                  </span>
                </div>
              )}

              {/* INFO PANEL FOR NON-CARD METHODS */}
              {form.paymentMethod === "applepay" && (
                <div className={c.paymentInfo}>
                  <IconLock size={20} />
                  <div>
                    <h4>Apple Pay</h4>
                    <p>Platbu potvrdíte přes Apple Wallet po kliknutí na „Zaplatit“.</p>
                  </div>
                </div>
              )}
              {form.paymentMethod === "googlepay" && (
                <div className={c.paymentInfo}>
                  <IconLock size={20} />
                  <div>
                    <h4>Google Pay</h4>
                    <p>Platbu potvrdíte přes Google Pay po kliknutí na „Zaplatit“.</p>
                  </div>
                </div>
              )}
              {form.paymentMethod === "bank" && (
                <div className={c.paymentInfo}>
                  <IconLock size={20} />
                  <div>
                    <h4>Bankovní převod</h4>
                    <p>
                      Po dokončení objednávky vám zašleme platební údaje e-mailem.
                      Objednávku odešleme po připsání platby.
                    </p>
                  </div>
                </div>
              )}
              {form.paymentMethod === "dobirka" && (
                <div className={c.paymentInfo}>
                  <IconLock size={20} />
                  <div>
                    <h4>Dobírka</h4>
                    <p>
                      Částku zaplatíte při převzetí zásilky. K objednávce bude
                      připočten poplatek 39 Kč.
                    </p>
                  </div>
                </div>
              )}

              {/* CONSENTS */}
              <div className={c.panelCompact}>
                <h3 className={c.panelTitle}>Souhlasy</h3>

                <label className={c.checkboxRow}>
                  <input
                    type="checkbox"
                    checked={form.termsAccepted}
                    onChange={(e) => updateForm("termsAccepted", e.target.checked)}
                  />
                  <span>
                    Souhlasím s{" "}
                    <a href="/obchodni-podminky" style={{ color: "var(--color-gold-light)", textDecoration: "underline" }}>
                      Obchodními podmínkami
                    </a>{" "}
                    *
                  </span>
                </label>
                {errors.termsAccepted && <span className={c.fieldError}>{errors.termsAccepted}</span>}

                <label className={c.checkboxRow}>
                  <input
                    type="checkbox"
                    checked={form.privacyAccepted}
                    onChange={(e) => updateForm("privacyAccepted", e.target.checked)}
                  />
                  <span>
                    Beru na vědomí{" "}
                    <a href="/ochrana-osobnich-udaju" style={{ color: "var(--color-gold-light)", textDecoration: "underline" }}>
                      Zásady ochrany osobních údajů
                    </a>{" "}
                    *
                  </span>
                </label>
                {errors.privacyAccepted && <span className={c.fieldError}>{errors.privacyAccepted}</span>}

                <label className={c.checkboxRow}>
                  <input
                    type="checkbox"
                    checked={form.ritualCareConsent}
                    onChange={(e) => updateForm("ritualCareConsent", e.target.checked)}
                  />
                  <span>
                    Souhlasím se zpracováním mých osobních údajů za účelem vyřízení objednávky
                    a zasílání návodu k používání rituálu, připomínek doplnění a péče o zákazníky.
                    Vím, že mohu svůj souhlas kdykoli odvolat.
                  </span>
                </label>
              </div>

              {/* MINI RITUAL SUMMARY */}
              <div className={c.miniRitual}>
                <h4>Váš Generation Perfect Ritual</h4>
                <p>
                  {stepCount === 5
                    ? "Máte všech 5 kroků. Ranní i večerní péče na sebe navazuje v přesném pořadí."
                    : `Máte ${stepCount} z 5 kroků. Pro kompletní ranní i večerní péči doporučujeme doplnit chybějící kroky.`}
                </p>
                <div className={c.miniRitualAxis}>
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
                {stepCount < 5 && (
                  <a href="/kosik" className={c.adviceCta} style={{ marginTop: 4 }}>
                    Zobrazit doporučení <IconArrowRight size={11} />
                  </a>
                )}
              </div>

              {/* SECURITY */}
              <div className={c.securityCard}>
                <IconLock size={20} />
                <div>
                  <h4>Bezpečný nákup</h4>
                  <p>
                    Vaše platba je zabezpečena šifrováním 256bit SSL a splňuje standardy PCI DSS.
                  </p>
                </div>
              </div>
            </div>

            <aside className={c.aside}>
              <CheckoutSummary
                step={3}
                showProducts
                totalOverride={total}
                primaryCta={{
                  label: busy
                    ? "Zpracovávám…"
                    : form.paymentMethod === "dobirka"
                      ? `Dokončit objednávku ${formatPriceCZK(total)}`
                      : `Zaplatit ${formatPriceCZK(total)}`,
                  onClick: onPay,
                  disabled: busy || cart.length === 0,
                }}
              />
            </aside>
          </div>
        </div>
      </main>

      <CheckoutTrustStrip />
      <Footer />

      <MobileBottomBar
        totalLabel={form.paymentMethod === "dobirka" ? "Dokončit objednávku" : "Zaplatit"}
        total={total}
        ctaLabel={busy ? "..." : "Zaplatit"}
        onClick={onPay}
        disabled={busy || cart.length === 0}
      />
    </div>
  );
}

export default function PaymentStepPage() {
  return (
    <CartProvider>
      <PaymentStepInner />
    </CartProvider>
  );
}
