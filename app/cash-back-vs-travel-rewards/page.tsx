import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cash Back vs. Travel Rewards: Break-Even Examples | LoanPay Credit",
  description:
    "Compare cash-back and travel-rewards card styles with break-even math, redemption examples, and fee analysis — comparison framing, no hype.",
  alternates: { canonical: "https://credit.loanpaylogic.com/cash-back-vs-travel-rewards" },
};

export default function CashVsTravelPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Cards &middot; Rewards compared
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Cash Back vs. Travel Rewards: Which Style Fits Your Spending?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Both reward styles return a slice of spending &mdash; but through different mechanics,
          fees, and effort levels. Compare flat cash, category bonuses, and points transfers with
          break-even examples before choosing.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Flat cash back pays 1.5&ndash;2% on everything: simple, flexible, no blackouts.</li>
            <li>Category cash pays 3&ndash;5% in bonus areas, often with caps and activation.</li>
            <li>Travel points can exceed 2 cents each via transfers, or underperform at 0.5 cents via poor redemptions.</li>
            <li>Annual fees must be beaten by extra rewards versus a no-fee baseline.</li>
            <li>Rewards never justify carrying a balance: 25% APR erases 2% rewards twelve times over.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            New to cards? Start with{" "}
            <Link href="/starter-credit-cards-guide-2026" className="text-amber-200 underline underline-offset-2">
              starter cards 2026
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How each style pays</h2>
          <p className="mt-3">
            Flat-rate cash back multiplies every dollar at one rate, usually 1.5 or 2 percent, with
            no categories to track and redemptions as statement credit or deposit. Category cash
            multiplies grocery, dining, gas, or rotating quarterly categories at 3 to 5 percent up
            to published caps &mdash; commonly 1,500 dollars per quarter on rotating offers &mdash;
            then drops to 1 percent beyond. Travel rewards instead earn points or miles whose value
            floats with redemption: transferred to airline or hotel partners during award
            availability, points can clear 1.5 to 2 cents each, while the same points redeemed for
            merchandise may fetch 0.5 cents. Annual fees follow complexity: flat cash often charges
            zero, category cards range from zero to around 95 dollars, and travel flagships run
            250 to 695 dollars against lounge, credit, and transfer-benefit bundles whose real
            value depends entirely on use.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Reward styles at 24,000 dollars of yearly card spending. Illustrative.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Style</th>
                  <th className="px-4 py-3 font-semibold">Effective return</th>
                  <th className="px-4 py-3 font-semibold">Yearly value</th>
                  <th className="px-4 py-3 font-semibold">Effort</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Flat 2% cash, $0 fee</td><td className="px-4 py-2">2.0%</td><td className="px-4 py-2">~$480</td><td className="px-4 py-2">Minimal</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Category cash, $95 fee</td><td className="px-4 py-2">~2.6% blended</td><td className="px-4 py-2">~$624 minus $95 = ~$529</td><td className="px-4 py-2">Moderate</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Travel points, $395 fee, savvy redemptions</td><td className="px-4 py-2">~2.8%</td><td className="px-4 py-2">~$672 minus $395 = ~$277 + perks</td><td className="px-4 py-2">High</td></tr>
                <tr><td className="px-4 py-2">Travel points, poor redemptions</td><td className="px-4 py-2">~0.8%</td><td className="px-4 py-2">~$192 minus fee = negative</td><td className="px-4 py-2">Wasted</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the 24,000-dollar household</h2>
          <p className="mt-3">
            The Rivera household routes 24,000 dollars yearly through cards, paid in full: 9,000
            dollars groceries and dining, 6,000 travel booked direct, 9,000 everything else. On
            flat 2 percent cash with no fee they earn 480 dollars for near-zero effort. On a
            category setup earning 4 percent on groceries and dining up to caps, 2 percent travel,
            and 1.5 percent elsewhere, they earn about 615 dollars minus a 95-dollar fee for 520
            dollars net with quarterly activation chores. On a travel-points setup earning roughly
            2 points per travel and dining dollar and 1 elsewhere &mdash; about 36,000 points
            &mdash; savvy partner transfers at 1.5 cents each yield 540 dollars minus a 395-dollar
            fee for 145 dollars net plus lounge visits they use monthly; the same points cashed for
            merchandise at 0.6 cents yield 216 dollars, a net loss after the fee. The ranking flips
            with behavior: travelers who redeem deliberately can justify fees, while everyone else
            keeps more with cash.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Fee break-even and the APR rule</h2>
          <p className="mt-3">
            Every annual fee must clear a break-even test against a no-fee baseline. A 95-dollar
            fee against a 2 percent no-fee alternative requires 4,750 dollars of extra effective
            earn or equivalent perk value yearly; a 395-dollar fee requires nearly 20,000 dollars
            of incremental earn unless lounge access, travel credits, and status benefits you would
            buy anyway close the gap. Audit perk use yearly &mdash; unused credits are marketing,
            not value. Above all, the APR rule dominates: carrying a 3,000-dollar balance at 27
            percent costs about 810 dollars in yearly interest, erasing any 400&ndash;600-dollar
            rewards haul twice over. Rewards cards suit transactors who pay in full; revolvers
            should prioritize low-APR or{" "}
            <Link href="/balance-transfer-cards-guide" className="text-amber-200 underline underline-offset-2">
              balance-transfer
            </Link>{" "}
            strategies until balances clear. Spending-level payoff planning lives on{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Choosing without absolute claims</h2>
          <p className="mt-3">
            No single card is best for everyone, because earn rates interact with personal spend
            mix, redemption patience, and fee tolerance. A renter who cooks at home and flies twice
            yearly often nets most from category cash; a consultant flying weekly who redeems
            transfers skillfully can out-earn cash by multiples; a simplicity-first borrower keeps
            most lifetime value with flat 2 percent and zero chores. Compare two or three options
            against your last twelve months of actual categorized spending, weight the fee honestly,
            and revisit yearly as issuers devalue points and reshuffle categories. Our{" "}
            <Link href="/credit-limit-increase-guide" className="text-amber-200 underline underline-offset-2">
              limit-increase guide
            </Link>{" "}
            helps rewards earn scale safely once the choice is made.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are points or cash better?</h3>
              <p className="mt-1">Cash is predictable and flexible. Points can beat cash for deliberate travel redemptions but underperform badly when redeemed carelessly.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How do I value a point?</h3>
              <p className="mt-1">Divide the cash price of the identical trip by the points required. Your past redemptions, not bloggers averages, set your personal valuation.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do rewards expire?</h3>
              <p className="mt-1">Cash rarely expires on open accounts. Points can expire with program inactivity or account closure; transfer-partner rules add another layer.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can rewards build credit?</h3>
              <p className="mt-1">Only indirectly. Payment history and utilization build the score; rewards are a rebate on spending you would do anyway and pay in full.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Reward rates and fees change; verify
            current terms with issuers. Read our full{" "}
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
