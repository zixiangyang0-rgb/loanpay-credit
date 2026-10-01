import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credit Builder Loans Guide: Costs, Reporting & Alternatives | LoanPay Credit",
  description:
    "How credit-builder loans work — locked savings, fees, reporting — with cost examples, comparison tables, and who should use one.",
  alternates: { canonical: "https://credit.loanpaylogic.com/credit-builder-loans-guide" },
};

export default function BuilderLoansPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Building &middot; Installment tradelines
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Credit Builder Loans: Locked Savings That Report
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A builder loan reverses the normal order: you pay first, receive later, and the payments
          build an installment tradeline meanwhile. Learn the true costs, the reporting mechanics,
          and when a secured card serves better.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>The lender locks the loan amount in savings; you pay monthly over 6&ndash;24 months.</li>
            <li>Payments report as installment history; the lump sum releases at the end minus fees.</li>
            <li>Total fees often run 50&ndash;150 dollars on small plans &mdash; verify the APR.</li>
            <li>Missed payments damage the file the product was meant to build.</li>
            <li>Best as a companion to a secured card, not a replacement.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Foundation first:{" "}
            <Link href="/building-credit-from-zero" className="text-amber-200 underline underline-offset-2">
              from-zero plan
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Mechanics: paying forward to yourself</h2>
          <p className="mt-3">
            In a standard loan the borrower receives cash and repays with interest. Builder loans
            invert receipt: the 500- to 3,000-dollar principal sits in a locked certificate or
            savings account while the borrower makes fixed monthly payments over 6 to 24 months.
            Each payment reports to one or more bureaus &mdash; strong programs report to all three
            &mdash; as current installment history, and the locked funds, minus administrative fees
            and any interest spread, release to the borrower at completion. Fintech programs often
            pair the loan with a secured-card feature sharing the same payment. Community banks and
            credit unions offer equivalents sometimes called fresh-start or share-secured loans with
            lower fees for members. Because the lender holds the collateral throughout, approval is
            far easier than standard personal loans, though income and identity verification still
            apply.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Illustrative builder-loan plans. Verify fees and APRs with providers.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Plan</th>
                  <th className="px-4 py-3 font-semibold">Monthly</th>
                  <th className="px-4 py-3 font-semibold">Term</th>
                  <th className="px-4 py-3 font-semibold">Approx. total fees</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$500 starter</td><td className="px-4 py-2">~$45</td><td className="px-4 py-2">12 mo</td><td className="px-4 py-2">~$40&ndash;$60</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$1,000 standard</td><td className="px-4 py-2">~$89</td><td className="px-4 py-2">12 mo</td><td className="px-4 py-2">~$60&ndash;$100</td></tr>
                <tr><td className="px-4 py-2">$2,000 extended</td><td className="px-4 py-2">~$93</td><td className="px-4 py-2">24 mo</td><td className="px-4 py-2">~$100&ndash;$150</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What builder loans add to a file</h2>
          <p className="mt-3">
            Scoring reads builder loans as ordinary installment tradelines: on-time streaks under
            payment history, declining balance-versus-original under amounts owed, and account
            diversity under mix. For revolving-only files, adding installment experience can lift
            the mix slice modestly while doubling the monthly payment streaks the model observes.
            Effects are gradual rather than dramatic &mdash; think foundation thickening over 12
            months, not a 50-point jump in 60 days. Late payments invert the benefit completely,
            since a delinquency on a self-chosen builder product signals risk as loudly as any
            other late mark, per our{" "}
            <Link href="/missed-payment-credit-impact" className="text-amber-200 underline underline-offset-2">
              missed-payment analysis
            </Link>
            . Autopay from a checking buffer covering two payments is therefore mandatory, not
            optional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: 1,000 dollars over 12 months</h2>
          <p className="mt-3">
            Lena takes a 1,000-dollar 12-month builder plan at 89 dollars monthly, totaling 1,068
            dollars in payments against 1,000 dollars locked. At completion she receives about 980
            dollars after a small administrative fee &mdash; a net cost near 88 dollars for twelve
            installment payments reported to three bureaus. Her file, previously a single secured
            card at 655, gains installment mix plus a second perfect streak and reaches 678 by
            month twelve. The 88-dollar cost bought roughly 23 points plus 980 dollars of forced
            savings. Had she instead saved 89 dollars monthly in a plain account, she would hold
            1,068 dollars with zero reporting benefit. Whether the trade wins depends on goals: mix
            plus discipline justifies the fee for thin files; borrowers who already hold
            installment history gain little and should skip it. Savings-strategy context lives on{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Choosing a provider and avoiding duds</h2>
          <p className="mt-3">
            Compare providers on four questions: reporting to all three bureaus monthly, total
            fee-equivalent cost expressed as an APR, late-payment grace and reporting policy, and
            early-payoff or cancellation terms with exact refund math. Prefer credit unions and
            established fintechs with transparent fee pages; avoid programs bundling expensive
            subscriptions, insurance add-ons, or unclear cancellation penalties that trap savers.
            Share-secured loans &mdash; borrowing against your own savings deposit at a small spread
            &mdash; often beat standalone builder products for credit-union members on pure cost.
            And any provider promising score guarantees or charging large upfront fees deserves the
            same skepticism as any credit-repair pitch.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I get the money upfront?</h3>
              <p className="mt-1">No. Funds lock until you complete payments, then release minus fees. That inversion is what makes approval easy.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Builder loan or secured card?</h3>
              <p className="mt-1">Secured card first for most builders. Add a builder loan for installment mix once the card runs cleanly.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I pay off early?</h3>
              <p className="mt-1">Often yes, but early completion shortens the payment streak the file observes. Check refund and reporting terms first.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What if I miss a payment?</h3>
              <p className="mt-1">It reports like any late payment and can drop scores sharply. Keep a two-payment buffer and dual autopay reminders.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Provider terms change; verify fees,
            APRs, and bureau reporting before enrolling. Read our full{" "}
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
