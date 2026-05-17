/**
 * Shared chrome — top bar, cart progress, main header, footer.
 * Used by homepage and all product pages.
 */

import * as React from "react";
import s from "./styles.module.css";
import {
  IconBatch,
  IconLeaf,
  IconTruck,
  IconSample,
  IconLock,
  IconHeadset,
  IconChevron,
  IconSearch,
  IconAccount,
  IconBag,
  IconMenu,
  IconGift,
  IconFlag,
} from "./icons";

export function TopAnnouncementBar() {
  return (
    <div className={s.announceBar}>
      <div className={`${s.container} ${s.announceInner}`}>
        <div className={s.announceItems}>
          <span className={s.announceItem}><IconBatch size={14} />Malosériová výroba v ČR</span>
          <span className={s.announceItem}><IconLeaf size={14} />Čerstvé šarže</span>
          <span className={s.announceItem}><IconTruck size={14} />Doprava zdarma od 2 000 Kč</span>
          <span className={s.announceItem}><IconSample size={14} />Vzorek zdarma ke každé objednávce</span>
          <span className={s.announceItem}><IconHeadset size={14} />30 dní zákaznické péče po nákupu</span>
        </div>
        <div className={s.currency}>CZK <IconChevron size={10} /></div>
      </div>
    </div>
  );
}

export function CartProgressBar() {
  const cartTotal = 1100;
  const target = 2500;
  const progress = Math.min(100, (cartTotal / target) * 100);
  const remaining = Math.max(0, target - cartTotal);

  return (
    <div className={s.cartProgress}>
      <div className={`${s.container} ${s.cartProgressInner}`}>
        <span className={s.cartProgressLabel}>
          <IconGift size={14} />
          {remaining > 0 ? (
            <>Do dárku zbývá <strong>{remaining.toLocaleString("cs-CZ")} Kč</strong></>
          ) : (
            <>Máte dárek · děkujeme</>
          )}
        </span>
        <div className={s.cartProgressBar} aria-hidden="true">
          <div className={s.cartProgressFill} style={{ width: `${progress}%` }} />
        </div>
        <div className={s.cartProgressMilestones}>
          <span className={cartTotal >= target ? "reached" : ""}>
            <IconGift size={11} /> 2 500 Kč
          </span>
        </div>
      </div>
    </div>
  );
}

export type ActiveNav = "ritual" | "produkty" | "pouziti" | "pribeh" | "zurnal" | "salony" | null;

export function MainHeader({ active = null }: { active?: ActiveNav }) {
  const links: { id: ActiveNav; href: string; label: string }[] = [
    { id: "ritual", href: "/ritual", label: "Rituál" },
    { id: "produkty", href: "/produkty", label: "Produkty" },
    { id: "pouziti", href: "/ritual/pouziti", label: "Detailní použití" },
    { id: "pribeh", href: "/pribeh", label: "Příběh" },
    { id: "zurnal", href: "/zurnal", label: "Žurnál" },
    { id: "salony", href: "/pro-salony", label: "Pro salony" },
  ];
  return (
    <header className={s.header}>
      <div className={`${s.container} ${s.headerInner}`}>
        <a className={s.logo} href="/" aria-label="J.Oli Origins">
          J·OLI
          <span>ORIGINS</span>
        </a>
        <nav className={s.nav} aria-label="Hlavní">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={l.href}
                className={`${s.navLink}${isActive ? " " + s.navLinkActive : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
        <div className={s.headerIcons}>
          <button className={s.iconBtn} aria-label="Hledat"><IconSearch size={18} /></button>
          <button className={s.iconBtn} aria-label="Účet"><IconAccount size={18} /></button>
          <a className={s.iconBtn} href="/kosik" aria-label="Košík" style={{ position: "relative" }}>
            <IconBag size={18} />
            <span className={s.cartBadge}>3</span>
          </a>
          <button className={`${s.iconBtn} ${s.hamburger}`} aria-label="Menu"><IconMenu size={20} /></button>
        </div>
      </div>
    </header>
  );
}

export function StickyChrome({ active = null }: { active?: ActiveNav }) {
  return (
    <div className={s.stickyTop}>
      <TopAnnouncementBar />
      <CartProgressBar />
      <MainHeader active={active} />
    </div>
  );
}

export function Footer() {
  const cols = [
    { h: "Rituál", l: ["Jak rituál funguje", "Ranní použití", "Večerní použití", "Detailní použití"] },
    { h: "Produkty", l: ["Kompletní sada", "Travel Luxe Set", "No1–No5 jednotlivě", "Doplňková péče"] },
    { h: "Jak začít", l: ["Travel Luxe Set jako první nákup", "Pro citlivou pleť", "INCI / složení", "Šarže a čerstvost"] },
    { h: "Příběh", l: ["Naše filozofie", "Suroviny", "Výroba", "Zakladatelka"] },
    { h: "Žurnál", l: ["Péče o pleť", "Ingredience", "Rituály", "Novinky"] },
    { h: "Servis", l: ["Kontakt", "Doprava a platba", "Vrácení a reklamace", "Pro salony", "Obchodní podmínky", "Ochrana osobních údajů"] },
  ];
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            <a className={s.logo} href="/">J·OLI<span>ORIGINS</span></a>
            <p className={s.footerTagline}>
              Pět kroků pro ranní a večerní péči. Promyšlený rituál pro ženy,
              které chtějí méně kosmetického chaosu a více řádu.
            </p>
          </div>
          <div className={s.footerCols}>
            {cols.map((c) => (
              <div key={c.h} className={s.footerCol}>
                <h4>{c.h}</h4>
                <ul>{c.l.map((it) => <li key={it}><a>{it}</a></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className={s.footerBottom}>
          <span>© {new Date().getFullYear()} J.Oli Origins · Vyrobeno v ČR <IconFlag size={12} style={{ verticalAlign: "middle", marginLeft: 6 }} /></span>
          <span className={s.payments}>
            <span className={s.paymentBadge}>Visa</span>
            <span className={s.paymentBadge}>Mastercard</span>
            <span className={s.paymentBadge}>Apple Pay</span>
            <span className={s.paymentBadge}>Google Pay</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
