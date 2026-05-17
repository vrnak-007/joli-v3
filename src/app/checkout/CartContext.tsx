"use client";

import * as React from "react";

export type CartCategory = "ritual" | "set" | "travel" | "supplementary" | "accessory";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  phase?: string;
  ritualStep?: "01" | "02" | "03" | "04" | "05";
  category: CartCategory;
  size?: string;
  price: number;
  quantity: number;
  image: string;
};

type CheckoutFormState = {
  email: string;
  phone: string;
  marketingConsent: boolean;
  firstName: string;
  lastName: string;
  street: string;
  streetNumber: string;
  zip: string;
  city: string;
  country: string;
  shippingMethod: "zasilkovna" | "ppl" | "osobni";
  pickupPoint: string;
  billingSameAsShipping: boolean;
  isCompany: boolean;
  companyName: string;
  companyIco: string;
  companyDic: string;
  isGift: boolean;
  hidePrice: boolean;
  giftMessage: string;
  orderNote: string;
  paymentMethod: "card" | "applepay" | "googlepay" | "bank" | "dobirka";
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  cardName: string;
  termsAccepted: boolean;
  privacyAccepted: boolean;
  ritualCareConsent: boolean;
};

const DEFAULT_FORM: CheckoutFormState = {
  email: "jitka.novakova@email.cz",
  phone: "+420 123 456 789",
  marketingConsent: true,
  firstName: "Jitka",
  lastName: "Nováková",
  street: "Na Příkopě 14",
  streetNumber: "1234",
  zip: "110 00",
  city: "Praha 1",
  country: "Česká republika",
  shippingMethod: "zasilkovna",
  pickupPoint: "Praha 1, Na Příkopě 14",
  billingSameAsShipping: true,
  isCompany: false,
  companyName: "",
  companyIco: "",
  companyDic: "",
  isGift: false,
  hidePrice: false,
  giftMessage: "",
  orderNote: "",
  paymentMethod: "card",
  cardNumber: "",
  cardExpiry: "",
  cardCvc: "",
  cardName: "",
  termsAccepted: false,
  privacyAccepted: false,
  ritualCareConsent: false,
};

const DEFAULT_CART: CartItem[] = [
  {
    productId: "no1-cleansing-emulsion",
    slug: "no1-dvoufazova-myci-emulze",
    name: "No1 Dvoufázová mycí emulze",
    phase: "Čištění",
    ritualStep: "01",
    category: "ritual",
    size: "150 ml",
    price: 1490,
    quantity: 1,
    image: "/assets/joliorigins/products/no1.png",
  },
  {
    productId: "no3-collagel-serum",
    slug: "no3-collagel-hydratacni-serum",
    name: "No3 Collagel hydratační sérum",
    phase: "Hydratace",
    ritualStep: "03",
    category: "ritual",
    size: "30 ml",
    price: 2990,
    quantity: 1,
    image: "/assets/joliorigins/products/no3.png",
  },
  {
    productId: "no5-night-serum",
    slug: "no5-nocni-regeneracni-serum",
    name: "No5 Noční regenerační sérum",
    phase: "Noční obnova",
    ritualStep: "05",
    category: "ritual",
    size: "30 ml",
    price: 3490,
    quantity: 1,
    image: "/assets/joliorigins/products/no4-night.png",
  },
];

type Ctx = {
  cart: CartItem[];
  setQuantity: (id: string, qty: number) => void;
  remove: (id: string) => void;
  addItem: (item: CartItem) => void;
  clear: () => void;
  form: CheckoutFormState;
  updateForm: <K extends keyof CheckoutFormState>(key: K, value: CheckoutFormState[K]) => void;
  setForm: (next: Partial<CheckoutFormState>) => void;
};

const CartCtx = React.createContext<Ctx | null>(null);

const STORAGE_KEY = "v2.cart.items";
const FORM_KEY = "v2.cart.form";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = React.useState<CartItem[]>(DEFAULT_CART);
  const [form, setFormState] = React.useState<CheckoutFormState>(DEFAULT_FORM);
  const [hydrated, setHydrated] = React.useState(false);

  // Hydrate from localStorage after mount
  React.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {}
    try {
      const raw = window.localStorage.getItem(FORM_KEY);
      if (raw) setFormState({ ...DEFAULT_FORM, ...JSON.parse(raw) });
    } catch {}
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart, hydrated]);

  React.useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(FORM_KEY, JSON.stringify(form));
    } catch {}
  }, [form, hydrated]);

  const setQuantity = React.useCallback((id: string, qty: number) => {
    setCart((prev) =>
      prev.map((it) =>
        it.productId === id ? { ...it, quantity: Math.max(1, qty) } : it
      )
    );
  }, []);

  const remove = React.useCallback((id: string) => {
    setCart((prev) => prev.filter((it) => it.productId !== id));
  }, []);

  const addItem = React.useCallback((item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((it) => it.productId === item.productId);
      if (existing) {
        return prev.map((it) =>
          it.productId === item.productId
            ? { ...it, quantity: it.quantity + item.quantity }
            : it
        );
      }
      return [...prev, item];
    });
  }, []);

  const clear = React.useCallback(() => setCart([]), []);

  const updateForm = React.useCallback(
    <K extends keyof CheckoutFormState>(key: K, value: CheckoutFormState[K]) => {
      setFormState((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const setForm = React.useCallback((next: Partial<CheckoutFormState>) => {
    setFormState((prev) => ({ ...prev, ...next }));
  }, []);

  const value = React.useMemo<Ctx>(
    () => ({ cart, setQuantity, remove, addItem, clear, form, updateForm, setForm }),
    [cart, setQuantity, remove, addItem, clear, form, updateForm, setForm]
  );

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

/* ============================================================
   Pricing & shipping helpers
============================================================ */
export const SHIPPING_FREE_THRESHOLD = 2000;
export const COD_SURCHARGE = 39;

export function formatPriceCZK(amount: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(Math.round(amount)) + " Kč";
}

export function cartSubtotal(cart: CartItem[]) {
  return cart.reduce((sum, it) => sum + it.price * it.quantity, 0);
}

export function cartCount(cart: CartItem[]) {
  return cart.reduce((sum, it) => sum + it.quantity, 0);
}

export type ShippingProgress = {
  total: number;
  threshold: number;
  remaining: number;
  percentage: number;
  isFree: boolean;
  text: string;
};

export function getShippingProgress(total: number): ShippingProgress {
  const isFree = total >= SHIPPING_FREE_THRESHOLD;
  const remaining = Math.max(0, SHIPPING_FREE_THRESHOLD - total);
  const percentage = Math.min(100, (total / SHIPPING_FREE_THRESHOLD) * 100);
  return {
    total,
    threshold: SHIPPING_FREE_THRESHOLD,
    remaining,
    percentage,
    isFree,
    text: isFree ? "Dopravu máte zdarma" : `Ještě ${formatPriceCZK(remaining)} a máte dopravu zdarma`,
  };
}

/* Gift threshold — matches the global cart-progress bar above the menu. */
export const GIFT_THRESHOLD = 2500;

export type GiftProgress = {
  total: number;
  threshold: number;
  remaining: number;
  percentage: number;
  unlocked: boolean;
  text: string;
};

export function getGiftProgress(total: number): GiftProgress {
  const unlocked = total >= GIFT_THRESHOLD;
  const remaining = Math.max(0, GIFT_THRESHOLD - total);
  const percentage = Math.min(100, (total / GIFT_THRESHOLD) * 100);
  return {
    total,
    threshold: GIFT_THRESHOLD,
    remaining,
    percentage,
    unlocked,
    text: unlocked
      ? "Dárek k objednávce máte zdarma"
      : `Ještě ${formatPriceCZK(remaining)} a získáte dárek k objednávce zdarma`,
  };
}

/* ============================================================
   Ritual completeness
============================================================ */
export const RITUAL_STEPS: ("01" | "02" | "03" | "04" | "05")[] = [
  "01",
  "02",
  "03",
  "04",
  "05",
];

export const RITUAL_STEP_META: Record<
  "01" | "02" | "03" | "04" | "05",
  { phase: string; slug: string; name: string; shortName: string; price: number; image: string }
> = {
  "01": {
    phase: "Čištění",
    slug: "no1-dvoufazova-myci-emulze",
    name: "No1 Dvoufázová mycí emulze",
    shortName: "No1 Čištění",
    price: 1490,
    image: "/assets/joliorigins/products/no1.png",
  },
  "02": {
    phase: "Tonizace",
    slug: "no2-bioaktivni-tonikum",
    name: "No2 Bioaktivní tonikum",
    shortName: "No2 Tonizace",
    price: 1490,
    image: "/assets/joliorigins/products/no2.png",
  },
  "03": {
    phase: "Hydratace",
    slug: "no3-collagel-hydratacni-serum",
    name: "No3 Collagel hydratační sérum",
    shortName: "No3 Hydratace",
    price: 2990,
    image: "/assets/joliorigins/products/no3.png",
  },
  "04": {
    phase: "Denní péče",
    slug: "no4-denni-vitaminove-serum-coq10",
    name: "No4 Denní vitaminové sérum + CoQ10",
    shortName: "No4 Denní péče",
    price: 3290,
    image: "/assets/joliorigins/products/no4-day.png",
  },
  "05": {
    phase: "Noční obnova",
    slug: "no5-nocni-regeneracni-serum",
    name: "No5 Noční regenerační sérum",
    shortName: "No5 Noční obnova",
    price: 3490,
    image: "/assets/joliorigins/products/no4-night.png",
  },
};

export function getRitualStepsInCart(cart: CartItem[]): ("01" | "02" | "03" | "04" | "05")[] {
  const hasSet = cart.some((it) => it.category === "set");
  if (hasSet) return [...RITUAL_STEPS];
  return RITUAL_STEPS.filter((step) =>
    cart.some((it) => it.ritualStep === step && it.category === "ritual")
  );
}

export function getMissingRitualSteps(cart: CartItem[]): ("01" | "02" | "03" | "04" | "05")[] {
  const present = new Set(getRitualStepsInCart(cart));
  return RITUAL_STEPS.filter((step) => !present.has(step));
}

export function isCompleteRitual(cart: CartItem[]): boolean {
  return getRitualStepsInCart(cart).length === 5;
}

export type RitualRecommendation = {
  headline: string;
  text: string;
  product?: {
    step: "01" | "02" | "03" | "04" | "05";
    name: string;
    phase: string;
    price: number;
    image: string;
    slug: string;
  };
};

export function getRecommendedNextProduct(cart: CartItem[]): RitualRecommendation {
  const present = new Set(getRitualStepsInCart(cart));
  const missing = getMissingRitualSteps(cart);
  const count = present.size;

  if (count === 5) {
    return {
      headline: "Váš rituál je kompletní",
      text: "Máte všech pět kroků Generation Perfect Ritual. Ranní i večerní péče na sebe navazuje v přesném pořadí.",
    };
  }

  if (count === 0) {
    return {
      headline: "Váš rituál ještě nezačal",
      text: "Vyberte první krok rituálu. Doporučujeme začít čištěním No1.",
      product: { step: "01", ...RITUAL_STEP_META["01"] },
    };
  }

  // Priority: No2 missing but has serums → recommend No2
  if (
    missing.includes("02") &&
    (present.has("03") || present.has("04") || present.has("05"))
  ) {
    return {
      headline: count >= 3 ? "Váš rituál ještě není kompletní" : "Doplňte tonizaci",
      text: `Máte ${count} z 5 kroků. Pro maximální logiku rituálu doporučujeme doplnit chybějící kroky nebo zvolit kompletní sadu.`,
      product: { step: "02", ...RITUAL_STEP_META["02"] },
    };
  }
  if (missing.includes("01")) {
    return {
      headline: "Začněte rituál čištěním",
      text: `Máte ${count} z 5 kroků. Začněte základem rituálu — čištěním pleti.`,
      product: { step: "01", ...RITUAL_STEP_META["01"] },
    };
  }
  if (missing.includes("03") && present.has("01") && present.has("02")) {
    return {
      headline: "Doplňte hydrataci",
      text: `Máte ${count} z 5 kroků. Hydratace propojuje tonizaci s denní nebo noční péčí.`,
      product: { step: "03", ...RITUAL_STEP_META["03"] },
    };
  }
  if (missing.includes("05")) {
    return {
      headline: "Uzavřete večerní rituál",
      text: `Máte ${count} z 5 kroků. Noční sérum dodává péči, výživu a komfort přes noc.`,
      product: { step: "05", ...RITUAL_STEP_META["05"] },
    };
  }
  if (missing.includes("04")) {
    return {
      headline: "Doplňte ranní péči",
      text: `Máte ${count} z 5 kroků. Denní sérum chrání vzhled pleti před každodenním stresem prostředí.`,
      product: { step: "04", ...RITUAL_STEP_META["04"] },
    };
  }

  // Fallback: first missing
  const first = missing[0];
  return {
    headline: "Doplňte krok rituálu",
    text: `Máte ${count} z 5 kroků.`,
    product: first ? { step: first, ...RITUAL_STEP_META[first] } : undefined,
  };
}
