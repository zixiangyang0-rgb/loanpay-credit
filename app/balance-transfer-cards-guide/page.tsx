import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd, Byline, FaqJsonLd } from "../components/schema";

export const metadata: Metadata = {
  title: "Balance Transfer Cards Guide: Fees, APR Math & Payoff Plans | LoanPay Credit",
  description:
    "How balance transfer cards work — transfer fees, intro APR windows, and payoff math — with comparison tables and a worked 0% example.",
  alternates: { canonical: "https://credit.loanpaylogic.com/balance-transfer-cards-guide" },
};

export default function BalanceTransferGuidePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Balance Transfer Cards Guide: Fees, APR Math & Payoff Plans | LoanPay Credit" description="How balance transfer cards work — transfer fees, intro APR windows, and payoff math — with comparison tables and a worked 0% example." slug="/balance-transfer-cards-guide" />
      <FaqJsonLd items={[{"q":"Does a transfer hurt my score?","a":"Temporarily, via the inquiry and new account. Falling utilization as balances clear usually outweighs it within a few cycles."},{"q":"Can I transfer between same-bank cards?","a":"Usually no. Issuers exclude transfers from their own cards and affiliates. Check the offer terms before applying."},{"q":"What score qualifies?","a":"Long-window 0% offers generally favor scores of 670-plus with clean recent history. Shorter or secured options vary."},{"q":"Should I close the old card?","a":"Usually keep it open at zero. Closing cuts total limits, raising utilization, and eventually shortens average age."}]} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Cards &middot; Debt strategy
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Balance Transfer Cards: Intro-APR Math That Actually Pays
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A balance transfer buys time at low interest for an upfront fee. Learn when the fee
          earns back its cost, which traps erase the savings, and how to build a payoff plan that
          finishes inside the window.
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
            <li>Intro windows often run 12&ndash;21 months at 0% on transferred balances.</li>
            <li>Transfer fees typically cost 3&ndash;5% of the moved balance.</li>
            <li>Divide the transferred total by window months: that is your required payment.</li>
            <li>New purchases often accrue interest immediately; separate spending elsewhere.</li>
            <li>Old cards must stay near zero, or consolidation becomes duplication.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Utilization angle:{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              utilization guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How the offer is structured</h2>
          <p className="mt-3">
            Approved applicants receive a credit line and an invitation to move balances from
            other issuers &mdash; usually not from the same bank &mdash; within a transfer window
            of roughly 60 to 90 days after account opening. The fee posts immediately to the new
            balance, so a 6,000-dollar transfer at 3 percent becomes 6,180 dollars owed at 0
            percent. Minimum payments still apply monthly, and the promotional rate covers only
            the transferred amount for the stated months; new purchases frequently sit outside the
            promotion and accrue interest from day one without a grace period while a promo balance
            exists. Late payments can void the promotion at penalty rates, which makes autopay
            non-negotiable during the window. When the window ends, any remainder reprices to the
            regular APR, often in the mid-to-high twenties.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Illustrative balance-transfer archetypes. Verify current offers with issuers.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Archetype</th>
                  <th className="px-4 py-3 font-semibold">Intro window</th>
                  <th className="px-4 py-3 font-semibold">Fee</th>
                  <th className="px-4 py-3 font-semibold">Fits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Long-window flagship</td><td className="px-4 py-2">18&ndash;21 mo at 0%</td><td className="px-4 py-2">4&ndash;5%</td><td className="px-4 py-2">Large balances, steady income</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Low-fee option</td><td className="px-4 py-2">12&ndash;15 mo at 0%</td><td className="px-4 py-2">3%</td><td className="px-4 py-2">Mid balances, fast payoff</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">No-fee niche</td><td className="px-4 py-2">6&ndash;12 mo at 0%</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">Small balances, short sprint</td></tr>
                <tr><td className="px-4 py-2">Ongoing low APR</td><td className="px-4 py-2">No window; ~12&ndash;15%</td><td className="px-4 py-2">3%</td><td className="px-4 py-2">Uncertain timelines</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: 7,500 dollars at 0% for 18 months</h2>
          <p className="mt-3">
            Daniel carries 7,500 dollars at 26.99 percent, costing roughly 165 dollars in monthly
            interest and barely shrinking with 250-dollar payments. He transfers to an 18-month 0
            percent offer with a 3 percent fee: 225 dollars posts immediately, making 7,725 dollars
            owed interest-free. Required payoff pace is 7,725 divided by 18, or about 430 dollars
            monthly &mdash; steeper than his old minimum but finite. He autopays 430 dollars on the
            transfer card, routes new spending to a separate debit-paid card, and leaves the old
            card open at zero to preserve its age and limit. Total cost: 225 dollars versus roughly
            1,650 dollars in interest had the balance sat at 26.99 percent for 18 months, saving
            over 1,400 dollars if the plan completes. If instead he pays only minimums and 3,000
            dollars reprices at 27 percent in month 19, remaining interest erases half the savings
            &mdash; proof that the window is a deadline, not a discount.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Qualifying, applying, and sequencing</h2>
          <p className="mt-3">
            The strongest windows generally require good to very good scores, typically 670-plus
            with clean recent history, because issuers extend large interest-free lines only to
            low-risk files. Borrowers below that threshold often do better with a secured-card and
            paydown strategy first, per our{" "}
            <Link href="/how-to-improve-credit-score-fast" className="text-amber-200 underline underline-offset-2">
              90-day improvement plan
            </Link>
            , then transfer the remainder. Apply for one well-matched offer rather than three
            simultaneously; each hard inquiry is covered in our{" "}
            <Link href="/how-long-hard-inquiries-last" className="text-amber-200 underline underline-offset-2">
              inquiry guide
            </Link>
            . Transfer enough to matter but no more than the window payoff math supports, keep
            every minimum on time, and freeze new card spending during the sprint. For comparing
            transfer-versus-loan consolidation with full interest math, see{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Traps that erase the savings</h2>
          <p className="mt-3">
            The costliest trap is refilling the old cards: two balances where one existed doubles
            minimums and utilization while the fee is already sunk. Second is mixing purchases onto
            the transfer card, where payments may apply to the promo balance first while purchases
            accrue interest. Third is missing the window end date &mdash; set two reminders, at 30
            days and 7 days before expiry. Fourth is ignoring the fee breakeven on short payoffs:
            transferring 1,200 dollars at a 5 percent fee to clear it in two months costs 60 dollars
            to save roughly 40 dollars in interest, a net loss versus simply paying directly. Run
            the division before applying: fee dollars versus interest dollars over your realistic
            payoff months.
          </p>
        </section>

        <AdSlot format="in-article" slot="TODO-credit-article-mid" />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does a transfer hurt my score?</summary>
              <p className="mt-2">Temporarily, via the inquiry and new account. Falling utilization as balances clear usually outweighs it within a few cycles.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I transfer between same-bank cards?</summary>
              <p className="mt-2">Usually no. Issuers exclude transfers from their own cards and affiliates. Check the offer terms before applying.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What score qualifies?</summary>
              <p className="mt-2">Long-window 0% offers generally favor scores of 670-plus with clean recent history. Shorter or secured options vary.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should I close the old card?</summary>
              <p className="mt-2">Usually keep it open at zero. Closing cuts total limits, raising utilization, and eventually shortens average age.</p>
            </details>
          </div>
        </section>

        <AdSlot format="multiplex" slot="TODO-credit-article-bottom" />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Offers and fees change frequently;
            verify current terms with the issuer. Read our full{" "}
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
