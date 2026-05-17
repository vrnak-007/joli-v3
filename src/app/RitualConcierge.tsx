"use client";

import * as React from "react";
import s from "./styles.module.css";
import { IconArrowRight, IconClose, IconCompass } from "./icons";

type OptionId = string;

type Question = {
  id: string;
  q: string;
  options: { id: OptionId; label: string }[];
};

const QUESTIONS: Question[] = [
  {
    id: "goal",
    q: "Co od péče očekáváte nejvíce?",
    options: [
      { id: "hydration", label: "Hydratace a komfort" },
      { id: "glow", label: "Jas a svěžest" },
      { id: "nourish", label: "Výživa a pružnější vzhled" },
      { id: "simplify", label: "Jednodušší rutina" },
      { id: "unsure", label: "Nejsem si jistá" },
    ],
  },
  {
    id: "skin",
    q: "Jak byste popsala svou pleť?",
    options: [
      { id: "dry", label: "Suchá" },
      { id: "normal", label: "Normální" },
      { id: "combo", label: "Smíšená" },
      { id: "sensitive", label: "Citlivější" },
      { id: "unknown", label: "Neznám přesně" },
    ],
  },
  {
    id: "experience",
    q: "Jaká je vaše zkušenost s vrstvenou péčí?",
    options: [
      { id: "starter", label: "Začínám" },
      { id: "basic", label: "Používám 2–3 kroky" },
      { id: "complex", label: "Mám komplexní rutinu" },
      { id: "simplify", label: "Chci ji zjednodušit" },
    ],
  },
  {
    id: "entry",
    q: "Preferujete první nákup spíše opatrně, nebo kompletně?",
    options: [
      { id: "try", label: "Chci nejdřív vyzkoušet" },
      { id: "full", label: "Chci rovnou kompletní rituál" },
      { id: "single", label: "Chci začít jedním krokem" },
    ],
  },
  {
    id: "actives",
    q: "Používáte aktuálně silné aktivní látky nebo dermatologickou péči?",
    options: [
      { id: "yes", label: "Ano" },
      { id: "no", label: "Ne" },
      { id: "unsure", label: "Nejsem si jistá" },
    ],
  },
];

type ResultKey = "full" | "travel" | "single" | "personal";

type Result = {
  key: ResultKey;
  badge: string;
  title: string;
  text: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

const RESULTS: Record<ResultKey, Result> = {
  full: {
    key: "full",
    badge: "Doporučení rituálu",
    title: "Doporučujeme začít kompletním rituálem",
    text: "Podle vašich odpovědí hledáte ucelenou péči bez náhodného kombinování. Generation Perfect Ritual vám dá jasné ranní i večerní pořadí a všech pět kroků v jedné sadě.",
    primaryCta: { label: "Koupit kompletní rituál", href: "#kompletni-ritual" },
    secondaryCta: { label: "Více o rituálu", href: "#kompletni-ritual" },
  },
  travel: {
    key: "travel",
    badge: "Doporučení rituálu",
    title: "Doporučujeme začít Travel Luxe Setem",
    text: "Pokud chcete nejprve poznat textury, vůně a způsob vrstvení, Travel Luxe Set je nejbezpečnější vstup do rituálu. Vyzkoušíte všech pět kroků v menším formátu.",
    primaryCta: { label: "Vyzkoušet Travel Luxe Set", href: "#discovery" },
    secondaryCta: { label: "Více o Travel Luxe", href: "#discovery" },
  },
  single: {
    key: "single",
    badge: "Doporučení rituálu",
    title: "Doporučujeme začít jedním krokem",
    text: "Pokud už máte vlastní rutinu a chcete J.Oli zařadit postupně, začněte krokem, který nejlépe odpovídá vašemu cíli. Doporučíme produkt podle vašeho cíle.",
    primaryCta: { label: "Vybrat doporučený produkt", href: "#produkty" },
  },
  personal: {
    key: "personal",
    badge: "Osobní přístup",
    title: "Doporučujeme osobní posouzení",
    text: "U citlivější nebo reaktivní pleti, případně při používání silných aktivních látek, je lepší začít individuálním doporučením. Napište nám pár informací o své současné péči a doporučíme vám šetrný způsob zařazení rituálu.",
    primaryCta: { label: "Požádat o doporučení", href: "#doporuceni" },
  },
};

function pickResult(answers: Record<string, string>): ResultKey {
  const sensitive = answers.skin === "sensitive";
  const usingActives = answers.actives === "yes";
  const entry = answers.entry;
  const goal = answers.goal;

  if (sensitive && usingActives) return "personal";
  if (entry === "try") return "travel";
  if (entry === "full" && !sensitive) return "full";
  if (entry === "single") return "single";
  if (goal === "unsure" || answers.skin === "unknown") return "travel";
  return "travel";
}

export function RitualConcierge() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const check = () => {
      if (typeof window === "undefined") return;
      setOpen(window.location.hash === "#concierge");
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setStep(0);
      setAnswers({});
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    history.pushState(null, "", window.location.pathname + window.location.search);
    setOpen(false);
  };

  const onSelect = (qId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionId }));
    setTimeout(() => setStep((s) => s + 1), 260);
  };

  const isIntro = step === 0;
  const isResult = step > QUESTIONS.length;

  if (!open) return null;

  const goBack = () => setStep((s) => Math.max(0, s - 1));
  const restart = () => { setStep(0); setAnswers({}); };

  return (
    <div
      className={s.modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="concierge-title"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className={s.modalCard}>
        <div className={s.modalHeader}>
          <span className={s.modalEyebrow}>J.Oli Ritual Concierge</span>
          <button className={s.modalClose} onClick={close} aria-label="Zavřít průvodce">
            <IconClose size={16} />
          </button>
        </div>

        {!isIntro && !isResult && (
          <div className={s.modalProgress}>
            <div className={s.modalProgressBar}>
              <div className={s.modalProgressFill} style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
            </div>
            <span className={s.modalProgressLabel}>Otázka {step} z {QUESTIONS.length}</span>
          </div>
        )}

        <div className={s.modalBody}>
          {isIntro && (
            <div className={s.modalIntroBlock}>
              <h2 id="concierge-title">Najděte svůj vstup do rituálu</h2>
              <p>
                Pomůžeme vám vybrat nejvhodnější vstup do Generation Perfect Ritual.
                Odpovězte na 5 krátkých otázek a doporučíme vám, zda začít kompletní
                sadou, Travel Luxe Setem, jedním krokem nebo osobním doporučením.
              </p>
              <p className={s.modalDisclaimer}>
                Toto není dermatologická diagnostika. Pokud řešíte akutní kožní problém,
                alergii nebo léčbu pleti, doporučujeme konzultaci s odborníkem.
              </p>
            </div>
          )}

          {!isIntro && !isResult && (
            <>
              <h3 className={s.modalQuestion}>{QUESTIONS[step - 1].q}</h3>
              <ul className={s.modalOptions}>
                {QUESTIONS[step - 1].options.map((opt) => {
                  const isSelected = answers[QUESTIONS[step - 1].id] === opt.id;
                  return (
                    <li key={opt.id}>
                      <button
                        type="button"
                        className={`${s.modalOption} ${isSelected ? s.selected : ""}`}
                        onClick={() => onSelect(QUESTIONS[step - 1].id, opt.id)}
                      >
                        <span className={s.modalOptionDot} />
                        {opt.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          {isResult && (() => {
            const result = RESULTS[pickResult(answers)];
            return (
              <div className={s.modalResultHero}>
                <span className={s.modalResultBadge}><IconCompass size={11} /> {result.badge}</span>
                <h2 className={s.modalResultTitle}>{result.title}</h2>
                <p className={s.modalResultText}>{result.text}</p>
                <div className={s.modalResultCtas}>
                  <a href={result.primaryCta.href} className={s.btnPrimary} onClick={close}>
                    {result.primaryCta.label} <span className={s.arrow}><IconArrowRight size={14} /></span>
                  </a>
                  {result.secondaryCta && (
                    <a href={result.secondaryCta.href} className={s.btnSecondary} onClick={close}>
                      {result.secondaryCta.label} <span className={s.arrow}><IconArrowRight size={14} /></span>
                    </a>
                  )}
                  <button type="button" className={s.modalRestart} onClick={restart}>
                    Začít znovu
                  </button>
                </div>
              </div>
            );
          })()}
        </div>

        <div className={s.modalFooter}>
          <button
            type="button"
            className={s.modalBackBtn}
            onClick={goBack}
            disabled={isIntro}
          >
            ← Zpět
          </button>
          {isIntro && (
            <button
              type="button"
              className={s.btnPrimary}
              onClick={() => setStep(1)}
            >
              Spustit průvodce <span className={s.arrow}><IconArrowRight size={14} /></span>
            </button>
          )}
          {isResult && (
            <span className={s.modalProgressLabel}>Vaše doporučení</span>
          )}
        </div>
      </div>
    </div>
  );
}
