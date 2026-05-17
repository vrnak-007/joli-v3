"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import s from "../../styles.module.css";
import c from "../checkout.module.css";
import { StickyChrome, Footer } from "../../Chrome";
import { CartProvider, useCart, cartSubtotal } from "../CartContext";
import {
  CheckoutStepper,
  CheckoutSummary,
  CheckoutTrustStrip,
  MobileBottomBar,
} from "../CheckoutShared";
import { IconLock, IconArrowRight } from "../../icons";

type Errors = Partial<Record<string, string>>;

function ShippingStepInner() {
  const router = useRouter();
  const { cart, form, updateForm } = useCart();
  const [errors, setErrors] = React.useState<Errors>({});

  const subtotal = cartSubtotal(cart);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Zadejte platný e-mail.";
    if (!form.phone.trim()) e.phone = "Telefon je povinný.";
    if (!form.firstName.trim()) e.firstName = "Jméno je povinné.";
    if (!form.lastName.trim()) e.lastName = "Příjmení je povinné.";
    if (!form.street.trim()) e.street = "Ulice je povinná.";
    if (!form.zip.trim()) e.zip = "PSČ je povinné.";
    if (!form.city.trim()) e.city = "Město je povinné.";
    if (!form.country.trim()) e.country = "Stát je povinný.";
    if (form.shippingMethod === "zasilkovna" && !form.pickupPoint.trim()) {
      e.pickupPoint = "Vyberte výdejní místo.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onContinue = () => {
    if (validate()) router.push("/checkout/platba");
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
            <h1 className={c.pageTitle}>Doprava a údaje</h1>
            <a href="/kosik" className={c.backLink}>← Zpět ke košíku</a>
          </div>
          <p className={c.pageSubtitle}>
            Vyplňte kontakt, adresu a způsob dopravy. V dalším kroku zvolíte
            platební metodu.
          </p>

          <CheckoutStepper current={2} />

          <div className={c.grid}>
            <div className={c.main}>
              {/* CONTACT */}
              <div className={c.panel}>
                <h3 className={c.panelTitle}>Kontaktní údaje</h3>
                <div className={c.fieldGrid}>
                  <div className={c.field}>
                    <label className={c.fieldLabel} htmlFor="email">E-mail *</label>
                    <input id="email" type="email" {...inputProps("email")} />
                    {errors.email && <span className={c.fieldError}>{errors.email}</span>}
                  </div>
                  <div className={c.field}>
                    <label className={c.fieldLabel} htmlFor="phone">Telefon *</label>
                    <input id="phone" type="tel" {...inputProps("phone")} />
                    {errors.phone && <span className={c.fieldError}>{errors.phone}</span>}
                  </div>
                </div>

                <label className={c.checkboxRow}>
                  <input
                    type="checkbox"
                    checked={form.marketingConsent}
                    onChange={(e) => updateForm("marketingConsent", e.target.checked)}
                  />
                  <span>
                    Chci dostávat rituálové tipy, návod k používání a připomenutí doplnění
                    produktů e-mailem.
                    <span className="hint">E-maily posíláme střídmě a můžete se kdykoli odhlásit.</span>
                  </span>
                </label>

                <div className={c.miniTrust} style={{ marginTop: 10 }}>
                  <IconLock size={16} />
                  <p>
                    Vaše údaje jsou v bezpečí. Používáme šifrované připojení a chráníme
                    vaše soukromí.
                  </p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className={c.panel}>
                <h3 className={c.panelTitle}>Dodací adresa</h3>
                <div className={c.fieldGrid}>
                  <div className={c.field}>
                    <label className={c.fieldLabel} htmlFor="fn">Jméno *</label>
                    <input id="fn" {...inputProps("firstName")} />
                    {errors.firstName && <span className={c.fieldError}>{errors.firstName}</span>}
                  </div>
                  <div className={c.field}>
                    <label className={c.fieldLabel} htmlFor="ln">Příjmení *</label>
                    <input id="ln" {...inputProps("lastName")} />
                    {errors.lastName && <span className={c.fieldError}>{errors.lastName}</span>}
                  </div>
                  <div className={`${c.field} ${c.fieldFull}`}>
                    <label className={c.fieldLabel} htmlFor="street">Ulice a číslo popisné *</label>
                    <input id="street" {...inputProps("street")} />
                    {errors.street && <span className={c.fieldError}>{errors.street}</span>}
                  </div>
                  <div className={c.field}>
                    <label className={c.fieldLabel} htmlFor="sn">Číslo orientační</label>
                    <input id="sn" {...inputProps("streetNumber")} />
                  </div>
                  <div className={c.field}>
                    <label className={c.fieldLabel} htmlFor="zip">PSČ *</label>
                    <input id="zip" {...inputProps("zip")} />
                    {errors.zip && <span className={c.fieldError}>{errors.zip}</span>}
                  </div>
                  <div className={c.field}>
                    <label className={c.fieldLabel} htmlFor="city">Město *</label>
                    <input id="city" {...inputProps("city")} />
                    {errors.city && <span className={c.fieldError}>{errors.city}</span>}
                  </div>
                  <div className={c.field}>
                    <label className={c.fieldLabel} htmlFor="country">Stát *</label>
                    <input id="country" {...inputProps("country")} />
                    {errors.country && <span className={c.fieldError}>{errors.country}</span>}
                  </div>
                </div>
                <label className={c.checkboxRow}>
                  <input type="checkbox" />
                  <span>Doručit na jinou adresu</span>
                </label>
              </div>

              {/* SHIPPING METHOD */}
              <div className={c.panel}>
                <h3 className={c.panelTitle}>Způsob dopravy</h3>
                <div className={c.radioCards}>
                  {([
                    {
                      id: "zasilkovna",
                      title: "Zásilkovna — výdejní místo",
                      desc: "Doručení do výdejního místa Zásilkovna.",
                      price: "Zdarma",
                    },
                    {
                      id: "ppl",
                      title: "Kurýr PPL — na adresu",
                      desc: "Doručení kurýrem na uvedenou adresu.",
                      price: "Zdarma",
                    },
                    {
                      id: "osobni",
                      title: "Osobní odběr — Praha (J.Oli Origins)",
                      desc: "Vinohradská 123, 130 00 Praha 3",
                      price: "Zdarma",
                    },
                  ] as const).map((opt) => {
                    const active = form.shippingMethod === opt.id;
                    return (
                      <label
                        key={opt.id}
                        className={`${c.radioCard} ${active ? c.radioCardActive : ""}`}
                      >
                        <input
                          type="radio"
                          name="shipping"
                          value={opt.id}
                          checked={active}
                          onChange={() => updateForm("shippingMethod", opt.id)}
                        />
                        <span className={c.radioDot} aria-hidden="true" />
                        <div className={c.radioCardBody}>
                          <h4>{opt.title}</h4>
                          <p>{opt.desc}</p>
                        </div>
                        <span className={c.radioCardPrice}>{opt.price}</span>
                      </label>
                    );
                  })}
                </div>

                {form.shippingMethod === "zasilkovna" && (
                  <>
                    <div className={c.pickupGrid}>
                      <div className={c.pickupMapPlaceholder}>
                        <span className={c.pickupPin} aria-hidden="true">●</span>
                      </div>
                      <div className={c.pickupCard}>
                        <h5>Vybrané výdejní místo</h5>
                        <p style={{ fontWeight: 500 }}>Zásilkovna</p>
                        <p>{form.pickupPoint}</p>
                        <p>110 00 Praha 1</p>
                        <p style={{ marginTop: 6, fontSize: 11.5, color: "var(--color-text-muted-light)" }}>
                          Po–Pá 8:00–20:00 · So–Ne 9:00–18:00
                        </p>
                        <button type="button" className={c.pickupChange}>Změnit</button>
                      </div>
                    </div>
                    {errors.pickupPoint && <span className={c.fieldError}>{errors.pickupPoint}</span>}
                  </>
                )}
              </div>

              {/* BILLING */}
              <div className={c.panelCompact}>
                <h3 className={c.panelTitle}>Fakturační údaje</h3>
                <label className={c.checkboxRow}>
                  <input
                    type="radio"
                    name="billing"
                    checked={form.billingSameAsShipping && !form.isCompany}
                    onChange={() => {
                      updateForm("billingSameAsShipping", true);
                      updateForm("isCompany", false);
                    }}
                  />
                  <span>Fakturační údaje jsou stejné jako doručovací</span>
                </label>
                <label className={c.checkboxRow}>
                  <input
                    type="radio"
                    name="billing"
                    checked={form.isCompany}
                    onChange={() => {
                      updateForm("billingSameAsShipping", false);
                      updateForm("isCompany", true);
                    }}
                  />
                  <span>Nákup na firmu</span>
                </label>
                {form.isCompany && (
                  <div className={c.fieldGrid} style={{ marginTop: 8 }}>
                    <div className={c.field}>
                      <label className={c.fieldLabel}>Název firmy</label>
                      <input {...inputProps("companyName")} />
                    </div>
                    <div className={c.field}>
                      <label className={c.fieldLabel}>IČO</label>
                      <input {...inputProps("companyIco")} />
                    </div>
                    <div className={c.field}>
                      <label className={c.fieldLabel}>DIČ</label>
                      <input {...inputProps("companyDic")} />
                    </div>
                  </div>
                )}
              </div>

              {/* GIFT + NOTE */}
              <div className={c.panelCompact}>
                <h3 className={c.panelTitle}>Dárek a poznámka (volitelné)</h3>
                <label className={c.checkboxRow}>
                  <input
                    type="checkbox"
                    checked={form.isGift}
                    onChange={(e) => updateForm("isGift", e.target.checked)}
                  />
                  <span>Objednávka je dárek</span>
                </label>
                {form.isGift && (
                  <>
                    <label className={c.checkboxRow}>
                      <input
                        type="checkbox"
                        checked={form.hidePrice}
                        onChange={(e) => updateForm("hidePrice", e.target.checked)}
                      />
                      <span>Nepřikládat cenu do balíčku</span>
                    </label>
                    <div className={c.field}>
                      <label className={c.fieldLabel}>Osobní vzkaz</label>
                      <textarea
                        className={c.fieldInput}
                        value={form.giftMessage}
                        onChange={(e) => updateForm("giftMessage", e.target.value.slice(0, 250))}
                        rows={3}
                        placeholder="Napište osobní vzkaz, který přidáme k zásilce."
                      />
                      <span className={c.fieldHint}>{form.giftMessage.length} / 250</span>
                    </div>
                  </>
                )}
                <div className={c.field}>
                  <label className={c.fieldLabel}>Poznámka k objednávce</label>
                  <textarea
                    className={c.fieldInput}
                    value={form.orderNote}
                    onChange={(e) => updateForm("orderNote", e.target.value.slice(0, 250))}
                    rows={2}
                    placeholder="Například: Prosím doručit v dopoledních hodinách."
                  />
                  <span className={c.fieldHint}>{form.orderNote.length} / 250</span>
                </div>
              </div>
            </div>

            <aside className={c.aside}>
              <CheckoutSummary
                step={2}
                showProducts
                primaryCta={{ label: "Pokračovat k platbě", onClick: onContinue }}
              />
            </aside>
          </div>
        </div>
      </main>

      <CheckoutTrustStrip />
      <Footer />

      <MobileBottomBar
        totalLabel="Celkem vč. DPH"
        total={subtotal}
        ctaLabel="Pokračovat"
        onClick={onContinue}
      />
    </div>
  );
}

export default function ShippingStepPage() {
  return (
    <CartProvider>
      <ShippingStepInner />
    </CartProvider>
  );
}
