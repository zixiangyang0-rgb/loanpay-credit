import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store Credit Cards: Honest Pros & Cons With APR Math | LoanPay Credit",
  description:
    "Store and retail cards compared — signup discounts, rewards limits, 25–33% APRs, closed-loop limits — with break-even examples and FAQs.",
  alternates: { canonical: "https://credit.loanpaylogic.com/store-credit-cards-pros-cons" },
};

export default function StoreCardsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Cards &middot; Retail compared
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Store Credit Cards: Honest Pros and Cons
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The checkout discount is real &mdash; and so is the 30 percent APR behind it. Compare
          closed-loop and co-branded retail cards on rewards, limits, and costs with break-even
          math before saying yes at the register.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Signup discounts of 10&ndash;20% reward the first purchase only.</li>
            <li>Ongoing rewards are usually 5% at the retailer, ~1% elsewhere, often as certificates.</li>
            <li>APRs run 25&ndash;33%, among the highest in consumer credit.</li>
            <li>Closed-loop cards work at one merchant; co-branded versions run on Visa or Mastercard networks.</li>
            <li>Pay in full or the discount evaporates within two billing cycles.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Easier first cards:{" "}
            <Link href="/starter-credit-cards-guide-2026" className="text-amber-200 underline underline-offset-2">
              starter cards 2026
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Two species: closed-loop versus co-branded</h2>
          <p className="mt-3">
            Closed-loop store cards function only within the issuing retailer family, sometimes
            including its gas stations or sister brands. Approval thresholds run lower than
            mainstream cards, limits often start near 500&ndash;1,500 dollars, and rewards pay as
            merchant certificates rather than flexible cash. Co-branded retail cards carry a
            network logo and work anywhere, pairing elevated merchant earn &mdash; often 5 percent
            or 5 points per dollar &mdash; with 1 percent base earn elsewhere plus network benefits.
            Both species share the defining trait: APRs near or above 30 percent on many 2026
            products, with deferred-interest promotions on furniture and electronics that retroactively
            charge full-period interest if any balance remains at promotion end. That retroactive
            clause, detailed in financing fine print, is the single most expensive sentence in
            retail credit.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Retail card species compared. Illustrative 2026 ranges.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Closed-loop</th>
                  <th className="px-4 py-3 font-semibold">Co-branded network</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Where usable</td><td className="px-4 py-2">One retailer family</td><td className="px-4 py-2">Anywhere the network works</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Typical APR</td><td className="px-4 py-2">27&ndash;33%</td><td className="px-4 py-2">25&ndash;31%</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Rewards</td><td className="px-4 py-2">~5% as store certificates</td><td className="px-4 py-2">5% merchant, ~1% elsewhere</td></tr>
                <tr><td className="px-4 py-2">Approval ease</td><td className="px-4 py-2">Easiest</td><td className="px-4 py-2">Moderate</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the discount that cost 74 dollars</h2>
          <p className="mt-3">
            Ana buys an 800-dollar appliance with a 15 percent signup discount, saving 120 dollars
            at the register, then carries the 680-dollar balance at 31.24 percent making
            50-dollar monthly payments. Interest across eight payoff months totals about 78
            dollars, and the rewards certificates earned would have required full payment to redeem
            cleanly &mdash; net result roughly negative 74 dollars including the lost flexibility of
            an inquiry plus a new low-limit tradeline dragging average age. Had she paid the
            680 dollars in full on the first statement, the outcome flips: 120 dollars saved, a
            clean tradeline, and 5 percent back on future planned purchases. The card did not
            decide the outcome; the payoff behavior did. Rule of thumb: accept retail cards only
            for planned purchases already budgeted to clear in full, never to stretch affordability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">When retail cards make sense</h2>
          <p className="mt-3">
            Three profiles genuinely benefit. High-volume loyalists spending thousands yearly at
            one retailer can out-earn general cash back through 5 percent certificates, provided
            every statement clears in full. Thin-file builders denied elsewhere can use a retail
            approval as a first tradeline, then graduate to mainstream products within a year per
            our{" "}
            <Link href="/building-credit-from-zero" className="text-amber-200 underline underline-offset-2">
              from-zero plan
            </Link>
            . Large planned purchases with true 0 percent installment offers &mdash; distinct from
            deferred interest &mdash; can smooth cash flow when autopaid to finish early. Everyone
            else should prefer a general cash-back card from our{" "}
            <Link href="/cash-back-vs-travel-rewards" className="text-amber-200 underline underline-offset-2">
              rewards comparison
            </Link>
            . Checkout-pressure applications deserve a standing rule: never apply same-day. Take
            the brochure, compare at home against APR and fee facts, and apply later only if the
            math survives daylight. Financing-pattern context lives on{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Managing cards you already hold</h2>
          <p className="mt-3">
            Keep existing retail cards reporting small balances paid in full to preserve age and
            limits, which cushion overall utilization as our{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              utilization guide
            </Link>{" "}
            shows. Decline credit-protection add-ons and financing upsells unless the written terms
            beat your bank. If a card charges an annual fee you no longer out-earn, ask for a
            no-fee downgrade before closing, since closure surrenders limit and eventual age.
            Watch deferred-interest deadlines with two reminders; one residual dollar can trigger
            full-period retroactive interest on some promotions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do store cards build credit?</h3>
              <p className="mt-1">Yes, equally. They report balances, limits, and payment history to bureaus like any revolving account.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is deferred interest?</h3>
              <p className="mt-1">A promotion charging zero if fully paid by a deadline but retroactively adding all-period interest if any balance remains. True 0% offers instead waive interest unconditionally.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I close unused store cards?</h3>
              <p className="mt-1">Usually keep no-fee ones open for age and utilization cushion. Close only fee cards you cannot downgrade or accounts tempting overspending.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I negotiate the APR?</h3>
              <p className="mt-1">Occasionally with strong history, but retail APRs rarely fall far. Paying in full beats negotiating by orders of magnitude.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Retail terms change; verify APRs and
            promotion wording with the issuer. Read our full{" "}
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
