/**
 * J.OLI ORIGINS v3 — Chrome (top bar + header + footer)
 * Botanical Prestige / Quiet Luxury
 */
"use client";

import * as React from "react";
import s from "./styles.module.css";
import {
  IconBatch,
  IconTruck,
  IconGift,
  IconSearch,
  IconAccount,
  IconBag,
  IconMenu,
  IconFlag,
} from "./icons";

/* ============================================================
 * Top announcement bar
 * ============================================================ */
export function TopAnnouncementBar() {
  return (
    <div className={s.announceBar}>
      <div className={`${s.container} ${s.announceInner}`}>
        <div className={s.announceItems}>
          <span className={s.announceItem}>
            <IconTruck size={14} /> Doprava zdarma vždy
          </span>
          <span className={s.announceItem}>
            <IconGift size={14} /> Dárek k nákupu od 2 500 Kč
          </span>
          <span className={s.announceItem}>
            <IconBatch size={14} /> Malé šarže v ČR
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
 * Main Header — Logo / Nav / CTAs + ikony
 * ============================================================ */
export type ActiveNav =
  | "produkty"
  | "jak-to-funguje"
  | "ingredience"
  | "pribeh"
  | "salony"
  | null;

export function MainHeader({ active = null }: { active?: ActiveNav }) {
  const links: { id: ActiveNav; href: string; label: string }[] = [
    { id: "produkty", href: "/produkty", label: "Produkty" },
    { id: "jak-to-funguje", href: "/jak-to-funguje", label: "Jak to funguje" },
    { id: "ingredience", href: "/ingredience-a-vyroba", label: "Ingredience" },
    { id: "pribeh", href: "/pribeh", label: "Příběh" },
    { id: "salony", href: "/salony", label: "Salony" },
  ];

  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className={s.header}>
      <div className={`${s.container} ${s.headerInner}`}>
        <a className={s.logo} href="/" aria-label="J.OLI Origins — domů">
          J·OLI
          <span>ORIGINS</span>
        </a>

        <nav className={s.nav} aria-label="Hlavní">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id ?? l.href}
                href={l.href}
                className={`${s.navLink}${
                  isActive ? " " + s.navLinkActive : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className={s.headerIcons}>
          <a className={s.headerCta} href="/poradit-s-vyberem">
            Chci poradit
          </a>
          <a
            className={`${s.headerCta} ${s.headerCtaDark}`}
            href="/produkty/travel-luxe-set"
          >
            Začít Travel Setem
          </a>
          <button className={s.iconBtn} aria-label="Hledat" type="button">
            <IconSearch size={18} />
          </button>
          <button className={s.iconBtn} aria-label="Účet" type="button">
            <IconAccount size={18} />
          </button>
          <a className={s.iconBtn} href="/kosik" aria-label="Košík">
            <IconBag size={18} />
            <span className={s.cartBadge}>0</span>
          </a>
          <button
            className={`${s.iconBtn} ${s.hamburger}`}
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <IconMenu size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className={s.mobileMenuOverlay}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className={s.mobileMenu}
            role="dialog"
            aria-modal="true"
            aria-label="Mobilní navigace"
          >
            <nav className={s.mobileMenuNav} aria-label="Mobilní">
              {links.map((l) => {
                const isActive = active === l.id;
                return (
                  <a
                    key={l.id ?? l.href}
                    href={l.href}
                    className={`${s.mobileMenuLink}${
                      isActive ? " " + s.mobileMenuLinkActive : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                );
              })}
            </nav>
            <div className={s.mobileMenuCtas}>
              <a
                className={s.btnPrimary}
                href="/produkty/travel-luxe-set"
                onClick={() => setMenuOpen(false)}
              >
                Začít Travel Setem
              </a>
              <a
                className={s.btnSecondary}
                href="/poradit-s-vyberem"
                onClick={() => setMenuOpen(false)}
              >
                Chci poradit
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

/* ============================================================
 * Sticky chrome wrapper
 * ============================================================ */
export function StickyChrome({ active = null }: { active?: ActiveNav }) {
  return (
    <div className={s.stickyTop}>
      <TopAnnouncementBar />
      <MainHeader active={active} />
    </div>
  );
}

/* ============================================================
 * Footer — 4 sloupce + dark moss bg
 * ============================================================ */
export function Footer() {
  const cols = [
    {
      h: "Nakupování",
      l: [
        { label: "Produkty", href: "/produkty" },
        { label: "Travel Luxe Set", href: "/produkty/travel-luxe-set" },
        {
          label: "Generation Perfect Complete",
          href: "/produkty/generation-perfect-complete",
        },
        { label: "Jak to funguje", href: "/jak-to-funguje" },
      ],
    },
    {
      h: "Pomoc",
      l: [
        { label: "Poradit s výběrem", href: "/poradit-s-vyberem" },
        { label: "Jak používat", href: "/jak-to-funguje/pouziti" },
        { label: "Doprava a platba", href: "/doprava-a-platba" },
        { label: "Vrácení a reklamace", href: "/vraceni-a-reklamace" },
        { label: "Kontakt", href: "/kontakt" },
      ],
    },
    {
      h: "Značka",
      l: [
        { label: "Příběh", href: "/pribeh" },
        { label: "Ingredience a výroba", href: "/ingredience-a-vyroba" },
        { label: "Žurnál", href: "/zurnal" },
        { label: "Salony", href: "/salony" },
      ],
    },
    {
      h: "Právní",
      l: [
        { label: "Obchodní podmínky", href: "/obchodni-podminky" },
        {
          label: "Ochrana osobních údajů",
          href: "/ochrana-osobnich-udaju",
        },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            <a className={s.logo} href="/">
              J·OLI
              <span>ORIGINS</span>
            </a>
            <p className={s.footerTagline}>
              Pět kroků pro ranní a večerní longevity rituál. Méně kosmetického
              chaosu. Více řádu, klidu a dlouhodobé péče.
            </p>
          </div>
          <div className={s.footerCols}>
            {cols.map((c) => (
              <div key={c.h} className={s.footerCol}>
                <h4>{c.h}</h4>
                <ul>
                  {c.l.map((it) => (
                    <li key={it.label}>
                      <a href={it.href}>{it.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={s.footerBottom}>
          <span>
            © {new Date().getFullYear()} J.OLI Origins · Vyrobeno v ČR{" "}
            <IconFlag
              size={12}
              style={{ verticalAlign: "middle", marginLeft: 6 }}
            />
          </span>
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
