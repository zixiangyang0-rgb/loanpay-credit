import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credit Score Basics: What 300–850 Means in 2026 | LoanPay Credit",
  description:
    "Learn what a US credit score is, the FICO 300–850 bands, who uses your score, and the first habits that build it — with tables, examples, and FAQs.",
  alternates: { canonical: "https://credit.loanpaylogic.com/credit-score-basics" },
};

export default function CreditScoreBasicsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Scores &middot; Start here
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Credit Score Basics: What Your 300&ndash;850 Number Means
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A credit score compresses your borrowing track record into one number lenders use to
          judge risk. This guide explains the scale, the score bands, who checks your score, and
          the habits that move it &mdash; in plain English with real numbers.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Most US scores run from 300 to 850. Higher means lower predicted risk.</li>
            <li>FICO bands: 300&ndash;579 poor, 580&ndash;669 fair, 670&ndash;739 good, 740&ndash;799 very good, 800&ndash;850 exceptional.</li>
            <li>Payment history and balances owed drive roughly two-thirds of a FICO score.</li>
            <li>Lenders, landlords, insurers in most states, and some employers use reports or scores.</li>
            <li>Pay on time, keep reported balances low, and give negative marks time to fade.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            New to scoring math? See{" "}
            <Link href="/how-credit-scores-calculated" className="text-amber-200 underline underline-offset-2">
              how credit scores are calculated
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What a credit score actually is</h2>
          <p className="mt-3">
            A credit score is a statistical prediction, not a grade your bank assigns by hand. Fair
            Isaac Corporation builds FICO models, and the three national bureaus &mdash; Equifax,
            Experian, and TransUnion &mdash; built VantageScore as an alternative. Both models read
            the same raw material, which is your credit report: accounts, balances, limits, payment
            dates, inquiries, collections, and public records such as bankruptcies. The model weighs
            patterns in that data &mdash; how often payments arrive on time, how much of your
            available revolving credit is in use, how long accounts have been open &mdash; and
            converts them into a three-digit number. Because each bureau file can differ slightly,
            and because FICO and VantageScore weigh factors differently, you do not have one single
            score; you have many, one per bureau-model combination, and lenders may pull whichever
            version fits the product.
          </p>
          <p className="mt-3">
            The national average FICO score held near 714 through 2026 reporting, squarely in the
            good band, while a record share of consumers sat above 750. That split matters for
            expectations: averages describe the population, while approvals describe you. Two
            borrowers with a 715 can pay different rates because mortgage, auto, and card lenders
            often use industry-specific FICO variants with 250&ndash;900 ranges, and each lender
            sets its own cutoffs. Treat any single free score &mdash; from a card app, Credit Karma
            with VantageScore 3.0, or a bureau trial &mdash; as a directional signal, and treat the
            underlying report data as the ground truth you can actually fix. If the data is clean
            and current across all three bureaus, every model built on it tends to rise together.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The FICO bands and what lenders see</h2>
          <p className="mt-3">
            FICO publishes five population bands that lenders use as rough shorthand. Borrowers in
            the exceptional band are statistically the least likely to miss payments over the next
            two years, so they see the widest approvals and the lowest advertised rates. The very
            good and good bands cover the broad middle where most approvals happen with mainstream
            terms. The fair band is approvable with many lenders but often at higher rates, lower
            limits, or with deposits attached. The poor band signals high predicted risk, so options
            narrow to secured cards, credit-builder products, and manual-review loans &mdash; which
            is exactly why the building-credit guides on this site start there rather than with
            rewards comparisons.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                FICO Score 8 population bands, 300&ndash;850 scale.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Band</th>
                  <th className="px-4 py-3 font-semibold">Range</th>
                  <th className="px-4 py-3 font-semibold">What it signals</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Exceptional</td><td className="px-4 py-2">800&ndash;850</td><td className="px-4 py-2">Top slice; lowest predicted risk, best terms</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Very good</td><td className="px-4 py-2">740&ndash;799</td><td className="px-4 py-2">Very dependable; strong approvals</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Good</td><td className="px-4 py-2">670&ndash;739</td><td className="px-4 py-2">Near average; most lenders say yes</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Fair</td><td className="px-4 py-2">580&ndash;669</td><td className="px-4 py-2">Below average; approvals with higher pricing</td></tr>
                <tr><td className="px-4 py-2">Poor</td><td className="px-4 py-2">300&ndash;579</td><td className="px-4 py-2">Highest risk; secured and builder products</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who checks your credit and why</h2>
          <p className="mt-3">
            Card issuers and personal-loan lenders pull scores to set approvals, limits, and annual
            percentage rates. Mortgage lenders go further, often pulling all three bureaus and
            using the middle of your three FICO mortgage scores, with rate tiers that sharpen
            around 670, 700, 740, and 760. Auto lenders use FICO Auto variants tuned to car-loan
            repayment patterns. Beyond lending, landlords routinely screen reports for missed rent
            and collections, insurers in most states use credit-based insurance scores for pricing,
            and some employers review reports &mdash; not scores &mdash; for roles involving money
            handling, with your written permission. Each audience reads the same file for a
            different question, which is why one clean report serves every goal at once.
          </p>
          <p className="mt-3">
            Checks come in two flavors. Soft inquiries &mdash; your own monitoring, preapprovals,
            employer screens &mdash; never affect scores. Hard inquiries, triggered when you apply
            for credit, can trim a few points and stay visible as described in our{" "}
            <Link href="/how-long-hard-inquiries-last" className="text-amber-200 underline underline-offset-2">
              hard-inquiry guide
            </Link>
            . Rate shopping for a mortgage or auto loan within a focused window is generally treated
            as one event by modern models, so comparing offers over a week or two is far less
            costly than rumors suggest. For broader payoff context, our main site at{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>{" "}
            explains how loan pricing interacts with these checks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: two borrowers, one number apart</h2>
          <p className="mt-3">
            Maya and Luis each earn 72,000 dollars and want a 300,000-dollar home. Maya has a 742
            FICO mortgage score with six years of on-time card payments and 12 percent utilization.
            Luis has a 668 with two 60-day late marks from 2024 and 61 percent utilization across
            two cards. At illustrative 2026 pricing, Maya qualifies near 6.4 percent while Luis is
            quoted near 7.3 percent &mdash; a 0.9-point gap that costs roughly 175 dollars more per
            month, or about 63,000 dollars over 30 years before refinancing. Luis follows a focused
            plan: autopay minimums on everything, pays 4,200 dollars of card balances to pull
            utilization under 30 percent, and disputes one duplicated late mark. Twelve months
            later his file shows 12 months of clean history and 24 percent utilization, and his
            score reads 706 &mdash; still below Maya, but now inside conventional approval tiers
            with meaningfully cheaper pricing. The lesson is that scores price risk at a moment in
            time, and moments can be rebuilt with boring, repeatable habits.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Habits that build the number</h2>
          <p className="mt-3">
            Pay every account on time, every month, because payment history is about 35 percent of
            FICO and a single 30-day late can linger for years. Keep reported revolving balances
            modest relative to limits; the common guideline is under 30 percent overall and per
            card, with lower generally better, as our{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              utilization guide
            </Link>{" "}
            shows with statement-timing math. Keep older cards open where they cost nothing, since
            average account age rewards patience. Apply for new credit only when needed, because
            each hard inquiry and each brand-new account trims the average-age and new-credit
            factors. Finally, read all three bureau reports at least yearly through our{" "}
            <Link href="/free-credit-report-guide" className="text-amber-200 underline underline-offset-2">
              free report guide
            </Link>{" "}
            and dispute anything wrong under your Fair Credit Reporting Act rights &mdash; removing
            a genuine error is the fastest legitimate gain available.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is a good credit score in 2026?</h3>
              <p className="mt-1">FICO calls 670&ndash;739 good, 740&ndash;799 very good, and 800&ndash;850 exceptional. The national average sits near 714, inside the good band.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I have one score or many?</h3>
              <p className="mt-1">Many. Each bureau file combined with each model version produces its own number, and industry variants for mortgages, auto loans, and cards use 250&ndash;900 scales.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does checking my own score hurt it?</h3>
              <p className="mt-1">No. Self-checks and preapprovals are soft inquiries with zero scoring impact. Only applications for credit generally create hard inquiries.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How fast can a beginner get a score?</h3>
              <p className="mt-1">FICO needs about six months of reported history; VantageScore can score after roughly one month. See our from-zero plan for the timeline.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Score bands and averages reflect 2026
            FICO and bureau publications and change over time. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and confirm decisions with a qualified professional.
          </p>
        </section>
      </article>
    </div>
  );
}
