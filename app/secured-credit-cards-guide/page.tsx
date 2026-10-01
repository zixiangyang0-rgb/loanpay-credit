import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Secured Credit Cards Guide: Deposits, Fees & Graduation | LoanPay Credit",
  description:
    "How secured credit cards work — deposits, annual fees, graduation paths — compared with examples, plus who should choose one in 2026.",
  alternates: { canonical: "https://credit.loanpaylogic.com/secured-credit-cards-guide" },
};

export default function SecuredCardsGuidePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Cards &middot; First cards
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Secured Credit Cards: Deposits, Fees, and Graduation Paths
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A secured card trades a refundable deposit for a real revolving tradeline. Compare how
          deposits, fees, and graduation reviews differ &mdash; and run the first-year math before
          you apply.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>You post a deposit, usually 200&ndash;500 dollars; it typically sets your limit.</li>
            <li>The issuer reports monthly like any card, building history from month one.</li>
            <li>Prefer no-annual-fee cards with a stated graduation review.</li>
            <li>Use lightly, automate full payment, keep utilization low on the small limit.</li>
            <li>Graduation refunds the deposit and may preserve your account age.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Comparing first-card paths? See{" "}
            <Link href="/starter-credit-cards-guide-2026" className="text-amber-200 underline underline-offset-2">
              starter cards 2026
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How the deposit works</h2>
          <p className="mt-3">
            A secured card is a genuine revolving account whose risk is collateralized by your
            refundable deposit, held &mdash; not spent &mdash; while the account is open. Most
            issuers set the limit equal to the deposit: 300 dollars down means a 300-dollar limit,
            though some allow larger deposits up to 2,500 or 5,000 dollars. The deposit is not a
            prepaid balance; purchases draw on the credit line and you still owe a monthly payment.
            Miss payments and the issuer can keep the deposit against the debt while reporting the
            delinquency normally. Approval is easier than unsecured cards because losses are
            covered, which is why secured cards anchor nearly every from-scratch and rebuilding
            plan, including our{" "}
            <Link href="/building-credit-from-zero" className="text-amber-200 underline underline-offset-2">
              12-month from-zero plan
            </Link>
            .
          </p>
          <p className="mt-3">
            Deposit logistics vary. Some issuers fund instantly from checking; others require a
            mailed money order or a waiting period. Minimums cluster near 200 dollars, with 49-,
            99-, and 200-dollar partial-deposit tiers on a few well-known rebuilding products that
            extend a 200-dollar line against a smaller deposit. Understand the refund trigger
            before applying: the strongest products run automatic graduation reviews starting
            around month seven or eight, refund the deposit, and convert the account to unsecured
            while preserving its age. Weaker products never graduate, forcing eventual closure and
            an age reset &mdash; acceptable only if no graduating option approves you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Comparing secured offers: the fee table</h2>
          <p className="mt-3">
            Secured cards differ less in rewards &mdash; most pay little or none &mdash; than in
            cost structure and reporting quality. Every legitimate secured card reports to all
            three bureaus monthly; verify this explicitly, because a card reporting to one bureau
            builds one-third of a file. Annual fees range from zero on the strongest options to 35&ndash;50
            dollars on rebuilding specialists. Monthly maintenance fees, penalty APRs near 30
            percent, and paid add-on features are warning signs when a no-fee alternative exists.
            Because limits are small, a 300-dollar limit means a single 150-dollar grocery run
            reports 50 percent &mdash; so statement-timing discipline from our{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              utilization guide
            </Link>{" "}
            matters more here than anywhere.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Illustrative secured-card archetypes, October 2026. Verify current terms with issuers.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Archetype</th>
                  <th className="px-4 py-3 font-semibold">Deposit</th>
                  <th className="px-4 py-3 font-semibold">Annual fee</th>
                  <th className="px-4 py-3 font-semibold">Graduation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">No-fee bank secured</td><td className="px-4 py-2">$200+</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">Auto review from ~month 7</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Partial-deposit rebuilding</td><td className="px-4 py-2">$49&ndash;$200 for $200 line</td><td className="px-4 py-2">$0 first year, then ~$35</td><td className="px-4 py-2">Possible with strong use</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Credit-union secured</td><td className="px-4 py-2">$250&ndash;$500</td><td className="px-4 py-2">$0&ndash;$25</td><td className="px-4 py-2">Often manual review at 12 mo</td></tr>
                <tr><td className="px-4 py-2">Fee-heavy last resort</td><td className="px-4 py-2">$200+</td><td className="px-4 py-2">$35&ndash;$50 + monthly fees</td><td className="px-4 py-2">Rarely; plan to replace</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: first-year cost and score path</h2>
          <p className="mt-3">
            Sam posts a 300-dollar deposit on a no-annual-fee secured card, routes a 25-dollar
            streaming subscription through it, and autopays the statement in full from checking.
            Reported utilization sits near 8 percent each cycle. First-year out-of-pocket cost: zero
            in fees plus the opportunity cost of the tied-up deposit. After eight months of perfect
            payments the issuer graduates the account, refunds 300 dollars, raises the limit to
            1,500 dollars, and preserves the account age &mdash; Sam now holds an unsecured
            one-year tradeline with a clean record. Contrast Alex, who picks a 48-dollar-annual-fee
            card with a 6-dollar monthly maintenance fee and carries a 200-dollar balance at 29.99
            percent APR: first-year cost approaches 170 dollars in fees and interest for identical
            reporting. Same bureaus, same months, wildly different economics &mdash; which is why
            fee comparison precedes every application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who should &mdash; and should not &mdash; get one</h2>
          <p className="mt-3">
            Secured cards fit first-time builders with no score, post-bankruptcy rebuilders outside
            discharge restrictions, and newcomers whose foreign history does not transfer. They fit
            less well for borrowers who already qualify for no-fee student or starter unsecured
            cards, since unsecured lines preserve deposits and often pay modest rewards. They also
            fit poorly as a second or third card for chasing mix points; depth comes from time, not
            from stacking deposits. Alternatives worth comparing include credit-builder loans from
            our{" "}
            <Link href="/credit-builder-loans-guide" className="text-amber-200 underline underline-offset-2">
              builder-loan guide
            </Link>
            , authorized-user tradelines from our{" "}
            <Link href="/authorized-user-guide" className="text-amber-200 underline underline-offset-2">
              authorized-user guide
            </Link>
            , and retail cards whose closed-loop limits our{" "}
            <Link href="/store-credit-cards-pros-cons" className="text-amber-200 underline underline-offset-2">
              store-card comparison
            </Link>{" "}
            evaluates honestly. Broader borrowing strategy lives on{" "}
            <a href="https://guides.loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I get the deposit back?</h3>
              <p className="mt-1">Yes, when the account graduates or closes in good standing with a zero balance, minus any unpaid balance owed. Reviews often start around month seven or eight.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does a secured card build credit as fast?</h3>
              <p className="mt-1">Reporting is identical to unsecured cards &mdash; monthly balance, limit, and payment status to all three bureaus on strong products. Behavior sets the pace.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I be denied for a secured card?</h3>
              <p className="mt-1">Yes, for unresolved bankruptcy, fraud flags, or insufficient income. Credit-union and partial-deposit options sometimes approve where big banks decline.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I close it after graduating?</h3>
              <p className="mt-1">Usually no. A graduated no-fee card is a free aged tradeline. Keep a small recurring charge on it and let age compound.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Card terms change; verify deposits,
            fees, and graduation policies with the issuer. Read our full{" "}
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
