/**
 * J.OLI ORIGINS v3 — /poradit-s-vyberem
 * Sekce per brief 18.
 */

import type { Metadata } from "next";
import s from "../styles.module.css";
import { StickyChrome, Footer } from "../Chrome";

export const metadata: Metadata = {
  title: "Chci poradit | J.OLI Origins",
  description:
    "Napište nám pár informací o své pleti. Doporučíme vám nejvhodnější začátek — Travel Set, Complete nebo konkrétní krok.",
};

export default function ConsultationPage() {
  return (
    <>
      <StickyChrome active={null} />

      <section className={s.pageHero}>
        <div className={s.container}>
          <div className={s.pageHeroCentered}>
            <span className={s.eyebrow}>Osobní doporučení</span>
            <h1 className={s.heroTitle}>
              Nejste si jistá, kde začít?
            </h1>
            <p className={s.lead}>
              Napište nám pár informací o své pleti. Doporučíme, zda je pro
              vás vhodnější Travel Set, Complete nebo konkrétní krok.
            </p>
          </div>
        </div>
      </section>

      <section className={`${s.sectionTight} ${s.sectionIvory}`}>
        <div className={s.container}>
          <form
            className={s.formCard}
            action="#"
            method="POST"
          >
            <div className={s.formGrid}>
              <div className={s.formField}>
                <label htmlFor="name">Jméno</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className={s.formField}>
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className={s.formField}>
                <label htmlFor="age">Věková skupina</label>
                <select id="age" name="age" required>
                  <option value="">Vyberte</option>
                  <option>do 35</option>
                  <option>35–45</option>
                  <option>45–55</option>
                  <option>55+</option>
                </select>
              </div>
              <div className={s.formField}>
                <label htmlFor="type">Typ pleti</label>
                <select id="type" name="type" required>
                  <option value="">Vyberte</option>
                  <option>Normální</option>
                  <option>Suchá</option>
                  <option>Smíšená</option>
                  <option>Mastná</option>
                </select>
              </div>

              <div className={s.formField}>
                <label htmlFor="sens">Citlivost</label>
                <select id="sens" name="sens" required>
                  <option value="">Vyberte</option>
                  <option>Nízká</option>
                  <option>Občasná</option>
                  <option>Vysoká</option>
                </select>
              </div>
              <div className={s.formField}>
                <label htmlFor="routine">Aktuální rutina</label>
                <select id="routine" name="routine" required>
                  <option value="">Vyberte</option>
                  <option>Žádná pravidelná</option>
                  <option>2–3 produkty</option>
                  <option>4 a více produktů</option>
                </select>
              </div>

              <div className={s.formField}>
                <label htmlFor="goal">Hlavní cíl</label>
                <select id="goal" name="goal" required>
                  <option value="">Vyberte</option>
                  <option>Více řádu v péči</option>
                  <option>Hydratace</option>
                  <option>Komfort / zklidnění</option>
                  <option>Dlouhodobý vzhled</option>
                  <option>Jas a svěžest</option>
                </select>
              </div>
              <div className={s.formField}>
                <label htmlFor="acids">Retinoidy / kyseliny / derma péče</label>
                <select id="acids" name="acids">
                  <option value="">Vyberte</option>
                  <option>Používám pravidelně</option>
                  <option>Občas</option>
                  <option>Nepoužívám</option>
                </select>
              </div>

              <div
                className={`${s.formField} ${s.formFullWidth}`}
              >
                <label htmlFor="start">Jak chcete začít?</label>
                <select id="start" name="start">
                  <option>Začít menším Travel Setem</option>
                  <option>Zvažuji plnou sadu Complete</option>
                  <option>Chci jen jeden konkrétní krok</option>
                  <option>Nejsem si jistá</option>
                </select>
              </div>

              <div
                className={`${s.formField} ${s.formFullWidth}`}
              >
                <label htmlFor="note">Poznámka</label>
                <textarea id="note" name="note" />
              </div>
            </div>

            <div className={s.formSubmit}>
              <button type="submit" className={s.btnPrimary}>
                Odeslat dotaz
              </button>
              <p className={s.disclaimer}>
                Toto doporučení nenahrazuje dermatologickou ani lékařskou
                péči. Pokud řešíte aktivní kožní onemocnění, doporučujeme
                poradit se s odborníkem.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
