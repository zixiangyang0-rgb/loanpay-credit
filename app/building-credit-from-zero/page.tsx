import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building Credit From Zero: 12-Month Starter Plan | LoanPay Credit",
  description:
    "A month-by-month plan to build credit from no score to 670+ — secured cards, builder loans, authorized users, monitoring — with timelines and FAQs.",
  alternates: { canonical: "https://credit.loanpaylogic.com/building-credit-from-zero" },
};

export default function BuildingFromZeroPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Building &middot; From scratch
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Building Credit From Zero: a 12-Month Plan
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          No score is not a bad score &mdash; it is an empty file waiting for structure. Follow a
          month-by-month sequence from first tradeline to 670-plus, with costs, timelines, and the
          mistakes that waste a year.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Open one reporting product: secured card first, builder loan as companion.</li>
            <li>Automate one small charge paid in full; keep utilization under 30%.</li>
            <li>Add authorized-user history only from a pristine host account.</li>
            <li>Never miss a payment; pause new applications for the full year.</li>
            <li>Expect a score in ~6 months for FICO, faster for VantageScore; 670+ by month 12&ndash;18.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Product details:{" "}
            <Link href="/secured-credit-cards-guide" className="text-amber-200 underline underline-offset-2">
              secured cards
            </Link>{" "}
            and{" "}
            <Link href="/credit-builder-loans-guide" className="text-amber-200 underline underline-offset-2">
              builder loans
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Why zero is an advantage</h2>
          <p className="mt-3">
            Borrowers starting clean skip the hardest phase of rebuilding: waiting out old damage.
            Every month from account opening writes positive history with no delinquency to dilute,
            so the trajectory is monotonically up as long as payments stay perfect. FICO requires
            roughly six months of reported history with activity in the last six months to generate
            a score, while VantageScore can score after about one month of reported activity &mdash;
            which is why free monitoring often shows a VantageScore months before a FICO appears.
            Lenders overwhelmingly use FICO for approvals, so plan around the six-month milestone
            while enjoying earlier VantageScore feedback. The national average near 714 is a
            multi-year destination, not a first-year target; reaching the good band at 670-plus
            within 12 to 18 months is an excellent outcome from zero.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Typical from-zero timeline with perfect behavior.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Phase</th>
                  <th className="px-4 py-3 font-semibold">What happens</th>
                  <th className="px-4 py-3 font-semibold">Score signal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Months 1&ndash;3</td><td className="px-4 py-2">First tradeline reports; autopay perfect</td><td className="px-4 py-2">VantageScore appears</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Months 4&ndash;6</td><td className="px-4 py-2">Six-month history completes</td><td className="px-4 py-2">First FICO, often 620&ndash;660</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Months 7&ndash;9</td><td className="px-4 py-2">Graduation review; possible limit growth</td><td className="px-4 py-2">Climbing toward 670</td></tr>
                <tr><td className="px-4 py-2">Months 10&ndash;12</td><td className="px-4 py-2">12 clean payments; second product considered</td><td className="px-4 py-2">670+ within reach</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Months 1&ndash;3: lay the first tradeline</h2>
          <p className="mt-3">
            Open exactly one product to start. The default is a no-annual-fee secured card with a
            stated graduation path, funded with a 200- to 500-dollar deposit you will not need for
            a year. Route one small recurring bill through it &mdash; streaming, phone, transit
            &mdash; enable autopay for the full statement balance from checking with a backup
            minimum autopay, and schedule a pre-statement payment so reported utilization stays
            under 30 percent per our{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              utilization guide
            </Link>
            . If a trusted family member offers a pristine seasoned card, accept authorized-user
            status in parallel per our{" "}
            <Link href="/authorized-user-guide" className="text-amber-200 underline underline-offset-2">
              authorized-user rules
            </Link>
            , ideally without taking a physical card. Pull one bureau report mid-quarter to confirm
            the tradeline reports correctly; errors at this stage are cheap to fix through our{" "}
            <Link href="/how-to-dispute-credit-report-errors" className="text-amber-200 underline underline-offset-2">
              dispute process
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Months 4&ndash;12: deepen without widening</h2>
          <p className="mt-3">
            Resist opening more accounts until month ten at the earliest. Depth &mdash; consecutive
            on-time payments on the same tradeline &mdash; outranks breadth for young files, and
            each new account resets portions of average age while adding inquiries. Around month
            six, consider a small credit-builder loan as an installment companion if the budget
            allows, following the cost analysis in our{" "}
            <Link href="/credit-builder-loans-guide" className="text-amber-200 underline underline-offset-2">
              builder-loan guide
            </Link>
            ; the loan adds mix and a second payment streak for a modest fee. At the graduation
            review, accept limit increases, keep the aged account open, and only then evaluate a
            no-fee unsecured cash-back card for everyday spending. Throughout, free weekly report
            checks via our{" "}
            <Link href="/free-credit-report-guide" className="text-amber-200 underline underline-offset-2">
              report guide
            </Link>{" "}
            confirm every month posted. Broader first-borrower budgeting pairs well with the
            starter-loan explainers on{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: zero to 691 in twelve months</h2>
          <p className="mt-3">
            Jordan, 22, starts with no file in October 2025: a 300-dollar secured card, a
            25-dollar subscription on autopay, pre-statement payments holding reported utilization
            near 8 percent, plus authorized-user status on a parent 2015 card. Month three brings a
            first VantageScore near 648. Month six generates a first FICO near 662. The secured
            card graduates at month eight with the deposit refunded and the limit raised to 1,500
            dollars. At month eleven Jordan adds a no-fee 1 percent cash-back card, keeping the
            original account open. By October 2026 the file shows 12 perfect secured payments, 12
            perfect authorized-user months, and two months on the new card: FICO 691, inside the
            good band, with total fees under 30 dollars for the year. The counterfactual &mdash;
            four applications in month one and a missed payment in month five &mdash; would likely
            still sit near 630. Sequence and perfection beat speed and volume.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How long until I have a score?</h3>
              <p className="mt-1">About one month of reporting for VantageScore and about six months for a FICO score, assuming recent activity.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Secured card or builder loan first?</h3>
              <p className="mt-1">Secured card first for most people — revolving history is the versatile foundation. Add a builder loan later for mix.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Will my deposit earn interest?</h3>
              <p className="mt-1">Rarely. Treat the deposit as temporarily parked, refunded at graduation or careful closure with a zero balance.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">When can I rent or finance a car?</h3>
              <p className="mt-1">Many landlords and auto lenders approve thin-but-clean files with income verification after 6&ndash;12 months. Bring pay stubs and bank records.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Timelines vary by issuer reporting
            and bureau processing. Read our full{" "}
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
