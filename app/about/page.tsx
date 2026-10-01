import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | LoanPay Credit",
  description:
    "About LoanPay Credit: plain-English US credit education on scores, cards, reports, and building credit.",
  alternates: { canonical: "https://credit.loanpaylogic.com/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          credit.loanpaylogic.com
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          About LoanPay Credit
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Plain-English credit education for US borrowers: how scores work, how cards compare,
          how reports and protections work, and how to build credit step by step.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <article className="mt-10 space-y-6 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">What we do</h2>
          <p className="mt-3">
            LoanPay Credit is an educational guide site within the loanpaylogic.com network. Our
            sibling sites cover{" "}
            <a
              href="https://loanpaylogic.com"
              className="text-amber-200 underline underline-offset-2"
            >
              loans and payoff strategy
            </a>{" "}
            and{" "}
            <a
              href="https://guides.loanpaylogic.com"
              className="text-amber-200 underline underline-offset-2"
            >
              borrowing guides
            </a>
            . Here we focus on credit fundamentals: FICO and VantageScore scoring, utilization,
            secured and starter cards, balance transfers, rewards comparisons, reading and
            disputing reports, freezes and fraud alerts, and building credit from zero.
          </p>
          <p className="mt-3">
            Every guide is written to be original, substantive, and careful with money topics. We
            use comparison and example framing rather than absolute &ldquo;best&rdquo; claims,
            show our math in worked examples, and cite the underlying rules (such as Fair Credit
            Reporting Act dispute rights and the 300&ndash;850 FICO scale) so readers can verify
            them independently.
          </p>
        </section>
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">How we write</h2>
          <p className="mt-3">
            We research current issuer pages, the Consumer Financial Protection Bureau, and the
            official FICO and bureau documentation, then explain findings in plain language with
            tables and frequently asked questions. Figures reflect October 2026 knowledge,
            including the national average FICO score near 714 and standard score bands
            (300&ndash;579 poor, 580&ndash;669 fair, 670&ndash;739 good, 740&ndash;799 very good,
            800&ndash;850 exceptional).
          </p>
          <p className="mt-3">
            This is general education, not financial advice. Credit decisions depend on your full
            profile, income, and goals. Read our full{" "}
            <Link href="/disclaimer" className="text-amber-200 underline underline-offset-2">
              disclaimer
            </Link>{" "}
            before acting.
          </p>
        </section>
      </article>
    </div>
  );
}
