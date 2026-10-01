import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collections Debt & Your Credit Report: Rights & Recovery | LoanPay Credit",
  description:
    "How collections affect your score — validation rights, medical-debt rules, pay-for-delete reality, and recovery steps — with tables and FAQs.",
  alternates: { canonical: "https://credit.loanpaylogic.com/collections-debt-credit-report" },
};

export default function CollectionsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Reports &middot; Collections
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Collections Debt and Your Credit Report
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A collection is a severe mark &mdash; but also one with validation rights, medical-debt
          reforms, and scoring improvements on your side. Learn the response order that protects
          both wallet and file.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Validate every collection in writing before paying a dollar.</li>
            <li>Paid medical collections are excluded; sub-$500 medical collections stay off reports.</li>
            <li>Newer scoring models ignore all paid collections; older mortgage models do not.</li>
            <li>Pay-for-delete is a negotiated courtesy, never a right &mdash; get terms in writing.</li>
            <li>Never reset the statute clock without legal advice.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Dispute mechanics:{" "}
            <Link href="/how-to-dispute-credit-report-errors" className="text-amber-200 underline underline-offset-2">
              disputing errors
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How collections land on reports</h2>
          <p className="mt-3">
            When an original creditor charges off an unpaid debt, typically after 120 to 180 days
            of delinquency, it may assign or sell the account to a collector, who then reports a
            separate collection tradeline showing balance, dates, and status. The file now carries
            two wounds: the original late-payment string plus the collection entry. Impact is
            severe &mdash; often 100-plus points on clean files &mdash; and recency rules again:
            a two-year-old collection drags less than a two-month-old one, and paid status reads
            better than unpaid under most lenses. Medical collections follow reformed rules: the
            bureaus removed paid medical collections entirely, withhold new medical collections
            under 500 dollars, and hold reporting for one year after the bill to allow insurance
            resolution. Non-medical collections carry no such shields.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Collection types and current reporting treatment, October 2026.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Debt type</th>
                  <th className="px-4 py-3 font-semibold">Reporting rule</th>
                  <th className="px-4 py-3 font-semibold">Scoring note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Paid medical</td><td className="px-4 py-2">Excluded from reports</td><td className="px-4 py-2">No impact</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Medical under $500</td><td className="px-4 py-2">Not reported</td><td className="px-4 py-2">No impact</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Paid non-medical</td><td className="px-4 py-2">Reports as paid, ~7 yrs</td><td className="px-4 py-2">Ignored by FICO 9/10, VantageScore 3/4</td></tr>
                <tr><td className="px-4 py-2">Unpaid non-medical</td><td className="px-4 py-2">Reports, ~7 yrs</td><td className="px-4 py-2">Severe under all models</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Validate first, negotiate second</h2>
          <p className="mt-3">
            Federal debt-collection law gives you the right to demand validation: within 30 days of
            first contact, write requesting proof that you owe the amount to this collector,
            including the original creditor, account history, and authority to collect. Legitimate
            collectors comply; inability to validate is grounds for removal demands through bureau
            disputes. Never acknowledge ownership on a recorded call, promise payment, or make a
            partial payment before validation completes, because acknowledgments can restart the
            state statute-of-limitations clock on lawsuits in some jurisdictions &mdash; get local
            legal advice for time-barred debts. Check whether the debt sits inside or outside
            limitations before any negotiation, and keep all correspondence written.
          </p>
          <p className="mt-3">
            With validation satisfied, three paths exist. Pay in full with a written pay-for-delete
            agreement if the collector grants one &mdash; a voluntary courtesy where the collector
            requests bureau deletion after payment, valuable but unenforceable without writing.
            Settle for less when funds are short, prioritizing written settlement-plus-reporting
            terms and tax awareness, since forgiven amounts above 600 dollars may draw a 1099-C.
            Or establish a written payment plan when neither lump sum works, confirming monthly
            reporting as paid-on-plan rather than fresh delinquency. Throughout, route other
            obligations through autopay so the collection negotiation never breeds new late marks,
            per our{" "}
            <Link href="/missed-payment-credit-impact" className="text-amber-200 underline underline-offset-2">
              missed-payment guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the 1,900-dollar medical pair</h2>
          <p className="mt-3">
            Omar finds two collections: a 400-dollar medical bill and a 1,500-dollar credit-card
            balance sold to a collector. The 400-dollar medical entry should not report at all
            under bureau policy; he disputes it with a statement showing the amount, and it clears
            within 30 days. For the 1,500-dollar card debt, validated and within limitations, he
            negotiates a 900-dollar lump settlement with written terms stating the account reports
            paid-settled and the collector requests deletion. He pays by cashier check, keeps the
            letter, and confirms deletion within 60 days. Score path: 601 to roughly 648 as the
            medical entry vanishes and the card collection resolves, with further gains as newer
            models weighting paid collections at zero spread through his monitoring. Had he paid
            the 400-dollar medical bill without disputing first, the unreportable entry might have
            refreshed activity dates pointlessly &mdash; order matters as much as dollars.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Rebuilding after resolution</h2>
          <p className="mt-3">
            Post-collection files recover through the standard engine: secured-card streaks from
            our{" "}
            <Link href="/secured-credit-cards-guide" className="text-amber-200 underline underline-offset-2">
              secured guide
            </Link>
            , utilization discipline from our{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              utilization guide
            </Link>
            , and time. Mortgage borrowers face a wrinkle: many lenders still use older FICO
            versions that count paid collections, so pre-approval may require older derogatories
            resolved regardless of what monitoring shows &mdash; coordinate with the home-buying
            timeline on{" "}
            <a href="https://guides.loanpaylogic.com/credit-score-mortgage-guide" className="text-amber-200 underline underline-offset-2">
              guides.loanpaylogic.com mortgage guide
            </a>
            . Keep every settlement and deletion letter permanently; re-aged or re-sold zombie
            debts resurface often enough that paper proof is protection.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I pay a collection?</h3>
              <p className="mt-1">Validate first, then usually yes for in-limitations debts — paid status helps newer scores and is often required for mortgages. Get deletion or reporting terms in writing.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does pay-for-delete always work?</h3>
              <p className="mt-1">No. It is voluntary and some collectors refuse as policy. Written agreement before payment is essential; verbal promises are worthless.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How long do collections stay?</h3>
              <p className="mt-1">Generally seven years from the original delinquency date, regardless of sale or payment. The clock does not restart on resale.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can collectors sue?</h3>
              <p className="mt-1">Within the state limitations period, yes. Time-barred debts have different rules — consult a local attorney before acknowledging old debts.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Collection law varies by state and
            changes over time. Read our full{" "}
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
