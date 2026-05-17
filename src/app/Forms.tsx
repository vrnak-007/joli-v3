"use client";

import * as React from "react";
import s from "./styles.module.css";
import { IconArrowRight } from "./icons";

export function RecommendationForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");

  return (
    <form
      className={s.recoForm}
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setEmailError("Zadejte platný e-mail.");
          return;
        }
        setEmailError("");
        setSubmitted(true);
      }}
      noValidate
    >
      <div className={s.recoFormGrid}>
        <div className={s.recoFieldRow}>
          <label htmlFor="skin-type">Typ pleti</label>
          <input id="skin-type" name="skinType" className={s.recoInput} placeholder="Suchá / smíšená / citlivá" />
        </div>
        <div className={s.recoFieldRow}>
          <label htmlFor="age">Věk</label>
          <input id="age" name="age" className={s.recoInput} placeholder="Např. 38" />
        </div>
      </div>
      <div className={s.recoFieldRow}>
        <label htmlFor="goal">Co chcete řešit?</label>
        <input id="goal" name="goal" className={s.recoInput} placeholder="Hydratace, klid, jas…" />
      </div>
      <div className={s.recoFieldRow}>
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" required className={s.recoInput} placeholder="vy@email.cz" />
        {emailError && <p className={s.recoMicro} style={{ color: "#9c2c2c" }}>{emailError}</p>}
      </div>
      <button type="submit" className={s.btnDark} style={{ alignSelf: "flex-start", marginTop: 8 }}>
        Požádat o doporučení <span className={s.arrow}><IconArrowRight size={14} /></span>
      </button>
      <p className={s.recoMicro}>
        {submitted
          ? "Děkujeme. Ozveme se vám osobně do 24 hodin."
          : "Odpovídáme osobně, obvykle do 24 hodin."}
      </p>
    </form>
  );
}

export function ClubForm() {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <form
      className={s.clubForm}
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const email = (form.elements.namedItem("clubEmail") as HTMLInputElement)?.value || "";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
        setSubmitted(true);
      }}
      noValidate
    >
      <input
        type="email"
        name="clubEmail"
        required
        placeholder={submitted ? "Děkujeme — vítejte v klubu." : "Váš e-mail"}
        className={s.clubInput}
        disabled={submitted}
      />
      <button type="submit" className={s.btnPrimary} disabled={submitted}>
        {submitted ? "Přihlášeno" : "Připojit se ke klubu"} <span className={s.arrow}><IconArrowRight size={14} /></span>
      </button>
    </form>
  );
}
