import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "./components/AdSlot";

export const metadata: Metadata = {
  title: "LoanPay Credit | Credit Scores, Cards & Reports Explained",
  description:
    "Free plain-English guides to US credit scores, credit cards, credit reports, and building credit — with tables, examples, and FAQs.",
};

type Card = { title: string; description: string; href: string; badge: string };
type Cluster = { id: string; heading: string; blurb: string; cards: Card[] };

const clusters: Cluster[] = [
  {
    id: "scores",
    heading: "A · Credit scores",
    blurb: "FICO and VantageScore basics, scoring factors, updates, and the home-buying link.",
    cards: [
      {
        title: "Credit Score Basics",
        description: "What a 300–850 score means, who uses it, and the five FICO bands.",
        href: "/credit-score-basics",
        badge: "Guide",
      },
      {
        title: "How Credit Scores Are Calculated",
        description: "Payment history 35%, amounts owed 30%, and the other three factors.",
        href: "/how-credit-scores-calculated",
        badge: "Guide",
      },
      {
        title: "How to Improve Your Score Fast",
        description: "Realistic 30/60/90-day moves — and what cannot change overnight.",
        href: "/how-to-improve-credit-score-fast",
        badge: "Guide",
      },
      {
        title: "FICO vs. VantageScore",
        description: "Same 300–850 scale, different tiers, models, and lender adoption.",
        href: "/fico-vs-vantagescore",
        badge: "Compare",
      },
      {
        title: "How Often Your Score Updates",
        description: "Statement cycles, bureau reporting lags, and monitoring cadence.",
        href: "/how-often-credit-score-updates",
        badge: "Guide",
      },
      {
        title: "Credit Scores and Home Buying",
        description: "Mortgage score thresholds, rate tiers, and pre-approval prep.",
        href: "/credit-score-home-buying-link",
        badge: "Guide",
      },
    ],
  },
  {
    id: "cards",
    heading: "B · Credit cards",
    blurb: "Secured, starter, balance-transfer, rewards, store, and business cards compared.",
    cards: [
      {
        title: "Credit Utilization Guide",
        description: "The 30% guideline, per-card vs. overall math, and statement timing.",
        href: "/credit-utilization-guide",
        badge: "Guide",
      },
      {
        title: "Secured Credit Cards Guide",
        description: "Deposits, graduation paths, and fee comparisons with examples.",
        href: "/secured-credit-cards-guide",
        badge: "Guide",
      },
      {
        title: "Starter Credit Cards Guide 2026",
        description: "First-card options for thin files: secured, student, and retail paths.",
        href: "/starter-credit-cards-guide-2026",
        badge: "Guide",
      },
      {
        title: "Balance Transfer Cards Guide",
        description: "Intro-APR math, transfer fees, and payoff-plan examples.",
        href: "/balance-transfer-cards-guide",
        badge: "Guide",
      },
      {
        title: "Cash Back vs. Travel Rewards",
        description: " Flat-rate cash, category bonuses, points, and break-even examples.",
        href: "/cash-back-vs-travel-rewards",
        badge: "Compare",
      },
      {
        title: "Store Credit Cards: Pros & Cons",
        description: "High APRs, closed-loop limits, and when the discount is worth it.",
        href: "/store-credit-cards-pros-cons",
        badge: "Compare",
      },
      {
        title: "Business Credit Cards Basics",
        description: "EIN vs. SSN, reporting quirks, and separating business spend.",
        href: "/business-credit-cards-basics",
        badge: "Guide",
      },
      {
        title: "Credit Limit Increase Guide",
        description: "When to request, soft vs. hard pulls, and denial next steps.",
        href: "/credit-limit-increase-guide",
        badge: "Guide",
      },
    ],
  },
  {
    id: "reports",
    heading: "C · Reports & protection",
    blurb: "Free reports, disputes, freezes, inquiries, late payments, and collections.",
    cards: [
      {
        title: "How to Dispute Report Errors",
        description: "FCRA dispute rights, evidence checklist, and 30-day timelines.",
        href: "/how-to-dispute-credit-report-errors",
        badge: "Guide",
      },
      {
        title: "Free Credit Report Guide",
        description: "Weekly reports via AnnualCreditReport.com and what to check.",
        href: "/free-credit-report-guide",
        badge: "Guide",
      },
      {
        title: "Credit Freeze vs. Fraud Alert",
        description: "Side-by-side comparison: duration, cost (free), and when to use each.",
        href: "/credit-freeze-vs-fraud-alert",
        badge: "Compare",
      },
      {
        title: "How Long Hard Inquiries Last",
        description: "2-year reporting, 12-month scoring impact, and rate-shopping windows.",
        href: "/how-long-hard-inquiries-last",
        badge: "Guide",
      },
      {
        title: "Missed Payment Credit Impact",
        description: "30/60/90-day late marks, recovery timelines, and goodwill letters.",
        href: "/missed-payment-credit-impact",
        badge: "Guide",
      },
      {
        title: "Collections Debt & Your Report",
        description: "Validation rights, pay-for-delete reality, and newer scoring treatment.",
        href: "/collections-debt-credit-report",
        badge: "Guide",
      },
    ],
  },
  {
    id: "building",
    heading: "D · Building credit",
    blurb: "From zero to established: builder loans, authorized users, and cosigning.",
    cards: [
      {
        title: "Authorized User Guide",
        description: "How piggybacking helps — and when it backfires.",
        href: "/authorized-user-guide",
        badge: "Guide",
      },
      {
        title: "Building Credit From Zero",
        description: "A 12-month starter plan with no score to 670+.",
        href: "/building-credit-from-zero",
        badge: "Guide",
      },
      {
        title: "Credit Builder Loans Guide",
        description: "How locked-savings loans report, with cost examples.",
        href: "/credit-builder-loans-guide",
        badge: "Guide",
      },
      {
        title: "Cosigner Credit Impact",
        description: "Equal liability, late-payment spillover, and exit options.",
        href: "/cosigner-credit-impact",
        badge: "Guide",
      },
      {
        title: "Joint Account vs. Authorized User",
        description: "Ownership, liability, and reporting differences side by side.",
        href: "/joint-account-vs-authorized-user",
        badge: "Compare",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-14 text-center sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          credit.loanpaylogic.com
        </p>
        <h1 className="hero-title mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          Credit Scores, Cards & Reports in Plain English
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          LoanPay Credit turns confusing scoring models and card terms into short, friendly
          guides. Learn how 300–850 scores work, compare card types with real numbers, read your
          reports, and build credit step by step — no signup required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/credit-score-basics"
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
          >
            Start with score basics
          </Link>
          <Link
            href="/building-credit-from-zero"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30"
          >
            Building from zero?
          </Link>
        </div>
      </section>

      <div className="mt-8">
        <AdSlot format="display" slot="TODO-credit-home-top" label="Homepage top" />
      </div>

      {clusters.map((cluster) => (
        <section key={cluster.id} className="mt-12">
          <h2 className="text-2xl font-bold">{cluster.heading}</h2>
          <p className="mt-2 text-sm text-slate-400">{cluster.blurb}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cluster.cards.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="glass-card block rounded-2xl p-6 transition hover:border-amber-200/30"
              >
                <span className="inline-block rounded-full border border-amber-200/30 px-3 py-1 text-xs font-medium text-amber-200">
                  {tool.badge}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="glass-card mt-12 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Why learn credit before you borrow?</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          A credit score compresses years of payment history, balances, account age, inquiries,
          and mix into one 300–850 number that lenders, landlords, and sometimes employers use
          to judge risk. Small mechanics — which balance posts on your statement date, whether a
          late payment crosses 30 days, whether an error lingers on one bureau file — can move
          offers by hundreds of dollars a year. The guides on credit.loanpaylogic.com explain
          each input with tables, worked examples, and checklists, so you can bring better
          questions to a qualified professional and borrow with open eyes.
        </p>
        <p className="mt-4 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
          Disclaimer: everything on this site is general education only and is not financial,
          legal, or tax advice. Scoring models and issuer terms change often. Confirm important
          decisions with a qualified professional. Read our full{" "}
          <Link href="/disclaimer" className="underline underline-offset-2">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
