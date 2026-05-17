import type { Metadata } from "next";
import Image from "next/image";
import s from "../../styles.module.css";
import u from "./pouziti.module.css";
import { StickyChrome, Footer } from "../../Chrome";
import {
  IconSun,
  IconMoon,
  IconArrowRight,
  IconClose,
  IconCheck,
} from "../../icons";
import {
  morningRoutine,
  eveningRoutine,
  firstWeek,
  howMuch,
  avoidList,
  shortOnTime,
  type RoutineStep,
} from "./data";

export const metadata: Metadata = {
  title: "Jak používat Generation Perfect Ritual | J.Oli Origins",
  description:
    "Praktický návod k používání Generation Perfect Ritual. Přehled ranního a večerního rituálu J.Oli Origins, pořadí kroků, množství produktu a konkrétní aplikace.",
};

function RoutineSequence({ nums }: { nums: string[] }) {
  return (
    <span className={u.heroSeqNums}>
      {nums.map((n, i) => (
        <span key={i}>
          {n}
          {i < nums.length - 1 && <span className="sep">→</span>}
        </span>
      ))}
    </span>
  );
}

function RoutineTable({
  variant,
  title,
  sequence,
  steps,
}: {
  variant: "light" | "dark";
  title: string;
  sequence: string[];
  steps: RoutineStep[];
}) {
  return (
    <section
      className={`${u.routineSection} ${
        variant === "light" ? u.routineLight : u.routineDark
      }`}
    >
      <div className={u.container}>
        <div className={u.routineHead}>
          <span className={u.routineHeadTitle}>{title}</span>
          <span className={u.routineHeadSeq}>
            {sequence.map((n, i) => (
              <span key={i}>
                {n}
                {i < sequence.length - 1 && <span className="sep">→</span>}
              </span>
            ))}
          </span>
        </div>
        <div>
          {steps.map((step) => (
            <div key={step.step} className={u.routineRow}>
              <div className={u.routineNumber}>{step.step}</div>
              <div
                className={`${u.routineImage} ${step.isJar ? u.isJar : ""}`}
              >
                <Image
                  src={step.image}
                  alt={step.productName}
                  width={140}
                  height={180}
                />
              </div>
              <div className={u.routineProduct}>
                <span className={u.routinePhase}>{step.phase}</span>
                <span className={u.routineProductName}>{step.productName}</span>
              </div>
              <div className={`${u.routineCell} ${u.amount}`}>
                <span className={u.routineLabel}>Kolik</span>
                <span className={u.routineText}>{step.amount}</span>
              </div>
              <div className={`${u.routineCell} ${u.howCell}`}>
                <span className={u.routineLabel}>Jak aplikovat</span>
                <span className={u.routineText}>{step.how}</span>
              </div>
              <div className={`${u.routineCell} ${u.goalCell}`}>
                <span className={u.routineLabel}>Cíl</span>
                <span className={u.routineText}>{step.goal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RitualUsagePage() {
  return (
    <div className={s.root}>
      <StickyChrome active="pouziti" />

      <main className={u.page}>
        {/* ===== HERO ===== */}
        <section className={u.hero}>
          <div className={u.container}>
            <div className={u.heroInner}>
              <div>
                <span className={u.heroLabel}>Detailní použití rituálu</span>
                <h1 className={u.heroTitle}>
                  Ráno čtyři kroky.<br />
                  <em>Večer čtyři kroky.</em>
                </h1>
                <p className={u.heroBody}>
                  Generation Perfect Ritual používáte ve dvou jednoduchých
                  pořadích. Každý krok má své místo a stačí malé množství.
                  Pokud jdete ven, denní péči vždy doplňte SPF.
                </p>
                <div className={u.heroSeq}>
                  <div className={u.heroSeqRow}>
                    <IconSun size={24} />
                    <span className={u.heroSeqLabel}>Ráno</span>
                    <RoutineSequence nums={["01", "02", "03", "04"]} />
                  </div>
                  <div className={u.heroSeqRow}>
                    <IconMoon size={24} />
                    <span className={u.heroSeqLabel}>Večer</span>
                    <RoutineSequence nums={["01", "02", "03", "05"]} />
                  </div>
                </div>
              </div>
              <div className={u.heroImage}>
                <Image
                  src="/assets/joliorigins/ritual/hero.png"
                  alt="Generation Perfect Ritual"
                  fill
                  sizes="(max-width: 1100px) 100vw, 55vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== OVERVIEW (full split image) ===== */}
        <section className={u.overviewWrap}>
          <div className={u.container}>
            <div className={u.overviewImage}>
              <Image
                src="/assets/joliorigins/ritual/pouzitiranovecer.png"
                alt="Ranní a večerní rituál — vizuální přehled"
                width={1536}
                height={1024}
                sizes="(max-width: 700px) 100vw, 960px"
                priority
              />
            </div>
          </div>
        </section>

        {/* ===== MORNING ROUTINE TABLE (light) ===== */}
        <RoutineTable
          variant="light"
          title="Ranní rituál"
          sequence={["01", "02", "03", "04"]}
          steps={morningRoutine}
        />

        {/* ===== EVENING ROUTINE TABLE (dark) ===== */}
        <RoutineTable
          variant="dark"
          title="Večerní rituál"
          sequence={["01", "02", "03", "05"]}
          steps={eveningRoutine}
        />

        {/* ===== PRACTICAL BLOCKS ===== */}
        <section className={u.practical}>
          <div className={u.container}>
            <div className={u.practicalGrid}>
              <div className={u.practicalCol}>
                <h3 className={u.practicalTitle}>První týden používání</h3>
                {firstWeek.map((entry) => (
                  <div key={entry.range} className={u.practicalEntry}>
                    <div className={u.practicalEntryLabel}>{entry.range}</div>
                    <p className={u.practicalEntryText}>{entry.text}</p>
                  </div>
                ))}
              </div>

              <div className={u.practicalCol}>
                <h3 className={u.practicalTitle}>Kolik produktu použít</h3>
                {howMuch.map((entry) => (
                  <div key={entry.label} className={u.practicalKV}>
                    <span className="k">{entry.label}</span>
                    <span className="v">{entry.value}</span>
                  </div>
                ))}
              </div>

              <div className={u.practicalCol}>
                <h3 className={u.practicalTitle}>Čemu se vyhnout</h3>
                <ul className={u.practicalAvoidList}>
                  {avoidList.map((it) => (
                    <li key={it}>
                      <IconClose size={12} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={u.practicalCol}>
                <h3 className={u.practicalTitle}>Když nemáte čas</h3>
                {shortOnTime.map((entry) => (
                  <div key={entry.title} className={u.practicalEntry}>
                    <div className={u.practicalEntryLabel}>{entry.title}</div>
                    <p
                      className={u.practicalEntryText}
                      style={{
                        fontFamily: "var(--font-display), serif",
                        color: "var(--color-light-text)",
                        margin: "2px 0 6px",
                      }}
                    >
                      {entry.sequence}
                    </p>
                    <p className={u.practicalEntryText}>{entry.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className={u.finalCta}>
          <div className={u.container}>
            <div className={u.finalCtaInner}>
              <h2 className={u.finalCtaText}>
                Začněte rituál používat tak, aby se stal{" "}
                <em>přirozenou součástí dne.</em>
              </h2>
              <div className={u.finalCtaButtons}>
                <a
                  href="/produkty/generation-perfect-ritual-kompletni-sada"
                  className={u.btnPrimary}
                >
                  <span>
                    <IconCheck size={14} style={{ marginRight: 8 }} /> Koupit
                    kompletní rituál
                  </span>
                  <IconArrowRight size={14} />
                </a>
                <a
                  href="/produkty/travel-luxe-set"
                  className={u.btnSecondary}
                >
                  <span>Travel Luxe Set</span>
                  <IconArrowRight size={14} />
                </a>
                <a href="/ritual" className={u.btnGhost}>
                  <span>Vrátit se na rituál</span>
                  <IconArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
