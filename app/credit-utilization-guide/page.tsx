import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd, Byline, FaqJsonLd } from "../components/schema";

export const metadata: Metadata = {
  title: "Credit Utilization Guide: 30% Rule & Statement Timing | LoanPay Credit",
  description:
    "How credit utilization is calculated per card and overall, why the 30% guideline exists, statement-date timing tricks, and a worked paydown example.",
  alternates: { canonical: "https://credit.loanpaylogic.com/credit-utilization-guide" },
};

export default function UtilizationGuidePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Credit Utilization Guide: 30% Rule & Statement Timing | LoanPay Credit" description="How credit utilization is calculated per card and overall, why the 30% guideline exists, statement-date timing tricks, and a worked paydown example." slug="/credit-utilization-guide" />
      <FaqJsonLd items={[{"q":"Is 0% utilization ideal?","a":"Not necessarily. Files reporting 1–9% sometimes outscore all-zero files. Keep one small balance reporting, then pay in full."},{"q":"Does utilization history matter?","a":"In FICO 8 and most current models, no — only the latest snapshot counts. FICO 10T adds trended data at adopting lenders."},{"q":"Do installment balances count?","a":"Separately, as balance versus original loan amount. Paying an auto loan from 90% to 40% remaining can help modestly."},{"q":"How fast do paydowns report?","a":"Usually one to two statement cycles after the lower snapshot, since issuers report monthly on their own schedules."}]} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Cards &middot; Utilization
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Credit Utilization: the 30% Guideline and Statement Timing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Utilization is the fastest-moving part of your score &mdash; and the most misunderstood.
          Learn the per-card and overall math, the timing quirk that fools full-balance payers,
          and the paydown order that reports fastest.
        </p>
        <Byline />
      </section>

      <div className="mt-8">
        <AdSlot format="display" slot="TODO-credit-article-top" />
      </div>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Utilization equals reported balances divided by limits, per card and overall.</li>
            <li>Keep both under 30%; lower generally scores better, single digits best.</li>
            <li>Bureaus usually see statement balances, not post-payment balances.</li>
            <li>Pay before the statement closing date to change what reports.</li>
            <li>Utilization has no memory in most models &mdash; fixes show in 1&ndash;2 cycles.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Scoring context:{" "}
            <Link href="/how-credit-scores-calculated" className="text-amber-200 underline underline-offset-2">
              how scores are calculated
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The two ratios that matter</h2>
          <p className="mt-3">
            Every revolving account &mdash; credit cards, charge-card flexibility aside, personal
            lines of credit &mdash; contributes to two numbers. Overall utilization divides the sum
            of reported balances by the sum of limits. Per-card utilization divides each card
            balance by its own limit. Both feed scoring, so a file with 10 percent overall but one
            card at 95 percent still shows strain on that card. Installment loans use a parallel
            concept, balance versus original amount, but the utilization conversation almost always
            means revolving ratios. Closed cards with zero balances and no available limit generally
            drop out of the denominator, which is one reason closing cards can spike the ratio
            overnight: 2,000 dollars owed against 6,500 dollars of limits reads 31 percent, but the
            same 2,000 against 3,500 after closing an unused card reads 57 percent.
          </p>
          <p className="mt-3">
            The 30 percent guideline comes from observed risk patterns, not a scoring cliff: files
            above it default more often, so models price them worse on average. There is no single
            percentage that guarantees optimal points, and FICO notes that lower utilization means
            less risk generally. Practically, treat 30 percent as the ceiling for each card and
            overall, 10 percent as a strong target before applications, and single digits as the
            zone associated with top-tier files. Zero percent everywhere can score slightly below
            1&ndash;9 percent in some files because the model sees no revolving use at all &mdash;
            a quirk worth knowing but never worth carrying interest to chase.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                How the same 2,000 dollars of balances reads at different limits.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Total limits</th>
                  <th className="px-4 py-3 font-semibold">Balances</th>
                  <th className="px-4 py-3 font-semibold">Utilization</th>
                  <th className="px-4 py-3 font-semibold">Signal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$20,000</td><td className="px-4 py-2">$2,000</td><td className="px-4 py-2">10%</td><td className="px-4 py-2">Strong</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$6,500</td><td className="px-4 py-2">$2,000</td><td className="px-4 py-2">31%</td><td className="px-4 py-2">Borderline</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$3,500</td><td className="px-4 py-2">$2,000</td><td className="px-4 py-2">57%</td><td className="px-4 py-2">Strained</td></tr>
                <tr><td className="px-4 py-2">$2,200</td><td className="px-4 py-2">$2,000</td><td className="px-4 py-2">91%</td><td className="px-4 py-2">Maxed-out pattern</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The statement-date quirk</h2>
          <p className="mt-3">
            Most issuers report to bureaus once per month, typically the balance on the statement
            closing date &mdash; days before the payment due date. This creates the classic
            confusion: a borrower who charges 4,500 dollars and pays in full every month still
            reports 90 percent on a 5,000-dollar limit if the statement snapshots first. The model
            never sees the full payment; it sees the snapshot. The fix is calendar-driven: find
            each card closing date in the app or statement, and make the bulk payment several days
            before it, leaving only a small balance &mdash; say 20 to 50 dollars on one card &mdash;
            to report. The due-date payment then clears the remainder, preserving both the on-time
            record and the low reported snapshot. Automate this by setting a monthly calendar
            reminder five days before each closing date, distinct from the due-date autopay that
            guards payment history.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the two-payment shuffle</h2>
          <p className="mt-3">
            Jordan holds a 6,000-dollar-limit card closing on the 18th with a 4,800-dollar balance
            from travel, plus a 4,000-dollar-limit card closing on the 25th with a 600-dollar
            balance. Reported utilization reads 54 percent overall with one card at 80 percent.
            Jordan pays 4,200 dollars toward the first card on the 14th, leaving 600 dollars to
            close and report 10 percent, and pays 400 dollars toward the second card on the 21st,
            leaving 200 dollars to report 5 percent. Next cycle the bureaus see 800 dollars against
            10,000 dollars of limits for 8 percent overall, with no card above 10 percent &mdash;
            the same spending, rescheduled. Scores typically respond within one to two reporting
            cycles, often 20 to 50 points on utilization-heavy files. Contrast this with paying
            after statements close: identical dollars, but the high snapshot reports first and the
            gain waits an extra cycle.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Paydown order and limit strategy</h2>
          <p className="mt-3">
            When cash cannot clear everything, attack the highest per-card utilization first,
            because it relieves both that card ratio and the overall ratio simultaneously. Next,
            consider a limit increase on a clean old account &mdash; often a soft pull if requested
            modestly &mdash; since a higher denominator lowers the ratio without spending less, as
            our{" "}
            <Link href="/credit-limit-increase-guide" className="text-amber-200 underline underline-offset-2">
              limit-increase guide
            </Link>{" "}
            explains. Balance transfers can consolidate ratios onto one promotional card, but the
            math only wins if the transfer fee undercuts interest saved and the old cards stay near
            zero rather than refilling; see our{" "}
            <Link href="/balance-transfer-cards-guide" className="text-amber-200 underline underline-offset-2">
              balance-transfer guide
            </Link>
            . Debt-payoff sequencing with interest math lives on{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            . Whatever the order, never miss minimums elsewhere to accelerate one card &mdash; a new
            late mark erases utilization gains many times over.
          </p>
        </section>

        <AdSlot format="in-article" slot="TODO-credit-article-mid" />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is 0% utilization ideal?</summary>
              <p className="mt-2">Not necessarily. Files reporting 1&ndash;9% sometimes outscore all-zero files. Keep one small balance reporting, then pay in full.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does utilization history matter?</summary>
              <p className="mt-2">In FICO 8 and most current models, no &mdash; only the latest snapshot counts. FICO 10T adds trended data at adopting lenders.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do installment balances count?</summary>
              <p className="mt-2">Separately, as balance versus original loan amount. Paying an auto loan from 90% to 40% remaining can help modestly.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How fast do paydowns report?</summary>
              <p className="mt-2">Usually one to two statement cycles after the lower snapshot, since issuers report monthly on their own schedules.</p>
            </details>
          </div>
        </section>

        <AdSlot format="multiplex" slot="TODO-credit-article-bottom" />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Issuer reporting dates vary; verify
            yours in the card app. Read our full{" "}
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
