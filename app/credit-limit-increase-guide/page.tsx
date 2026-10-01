import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credit Limit Increase Guide: Timing, Scripts & Denials | LoanPay Credit",
  description:
    "How to request a credit limit increase — timing, soft vs. hard pulls, income math, and denial next steps — with examples and FAQs.",
  alternates: { canonical: "https://credit.loanpaylogic.com/credit-limit-increase-guide" },
};

export default function LimitIncreasePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Cards &middot; Limits
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Credit Limit Increases: Timing and Tactics
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A higher limit lowers utilization, adds emergency headroom, and signals trust &mdash;
          when requested at the right moment with the right numbers. Learn the timing, the pull
          question, and the recovery plan if denied.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Request after 6&ndash;12 clean months with rising income or falling balances.</li>
            <li>Ask the issuer whether the review uses a soft or hard pull first.</li>
            <li>Request a specific, moderate number &mdash; roughly 1.5&ndash;2x current limit.</li>
            <li>Update income figures honestly before requesting.</li>
            <li>If denied, wait 3&ndash;6 months fixing the stated reason.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Why limits matter:{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              utilization guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Why increases help &mdash; and when they hurt</h2>
          <p className="mt-3">
            The arithmetic benefit is immediate: identical balances against larger limits mean
            lower overall and per-card utilization, the fastest-moving scoring input. A borrower
            reporting 1,500 dollars against 5,000 dollars of limits sits at 30 percent; the same
            balances against 10,000 dollars after an increase sit at 15 percent, often worth 10 to
            25 points within two cycles. Headroom also cushions irregular months &mdash; travel,
            medical bills, inventory &mdash; without maxing any single card. The risks are
            behavioral and procedural: extra headroom tempts extra spending that recreates the old
            ratio at a higher level, and hard-pull requests add inquiries when timed poorly. The
            disciplined rule is that a limit increase funds flexibility, never lifestyle; spending
            budgets stay fixed while denominators grow.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Same balances, different limits: the utilization dividend.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Total limits</th>
                  <th className="px-4 py-3 font-semibold">Balances $1,500</th>
                  <th className="px-4 py-3 font-semibold">Signal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$5,000</td><td className="px-4 py-2">30%</td><td className="px-4 py-2">Ceiling</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$7,500</td><td className="px-4 py-2">20%</td><td className="px-4 py-2">Comfortable</td></tr>
                <tr><td className="px-4 py-2">$10,000</td><td className="px-4 py-2">15%</td><td className="px-4 py-2">Strong</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Timing and the pull question</h2>
          <p className="mt-3">
            Strong requests follow six or more months of perfect payments on the account, utilization
            trending down, and updated income reflecting raises or added household income where the
            issuer permits. Many issuers run automatic reviews on the same cadence &mdash; check
            for preapproved increase offers in the app before requesting manually, since system
            offers cost no inquiry. For manual requests, ask explicitly whether evaluation uses a
            soft or hard pull; several large issuers use soft pulls for increase reviews, making
            the request nearly free, while others hard-pull, in which case batch the request away
            from mortgage shopping per our{" "}
            <Link href="/how-long-hard-inquiries-last" className="text-amber-200 underline underline-offset-2">
              inquiry guide
            </Link>
            . State a specific target &mdash; for example, from 5,000 to 8,000 dollars &mdash;
            supported by income math: total requested minimum payments should remain a small
            fraction of monthly income. Request increases on your oldest clean card first, where
            history argues loudest.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the 5,000-to-8,000 request</h2>
          <p className="mt-3">
            Sofia holds a 5,000-dollar card opened in 2022 with eleven clean months, typical
            reported balances near 1,400 dollars for 28 percent, and a recent raise lifting income
            from 58,000 to 66,000 dollars. She updates income in the app, waits for two low-balance
            statements to post at 12 percent, confirms via chat that the review is a soft pull, and
            requests 8,000 dollars citing the raise and travel-heavy work quarters. Approved the
            same day, her utilization dividend lands next cycle: 1,400 against 8,000 reads 17.5
            percent, and her score rises 14 points over two months with no behavior change. The
            counterfactual &mdash; requesting at 68 percent utilization two months after a late mark
            with a hard pull &mdash; would likely have drawn a denial plus an inquiry scar. Same
            borrower, opposite timing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">If denied: reading the letter</h2>
          <p className="mt-3">
            Denial letters state reasons &mdash; recent late marks, high utilization, insufficient
            income, too many recent inquiries &mdash; and each maps to a fix with a timeline.
            Utilization-driven denials need two to three low-statement cycles per our{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              timing tactics
            </Link>
            . History-driven denials need six quiet months. Income-driven denials wait for the next
            documented raise. Never rapid-fire requests across five issuers after one denial;
            clusters of hard pulls plus new-account age penalties compound the original weakness.
            Wait three to six months, fix the stated cause, and re-request on the strongest single
            account. Broader income and debt-ratio strategy lives on{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Will requesting hurt my score?</h3>
              <p className="mt-1">Soft-pull reviews cost nothing. Hard-pull requests cost a few points for about a year — ask the issuer which applies first.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How much should I request?</h3>
              <p className="mt-1">A moderate step — roughly 1.5 to 2 times the current limit — supported by income. Extreme requests invite denial or counteroffers.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do automatic increases count?</h3>
              <p className="mt-1">Yes, identically. System-initiated increases carry the same utilization benefit with no request needed. Keep usage exemplary to trigger them.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should new borrowers request early?</h3>
              <p className="mt-1">Wait at least six clean months. Early requests on thin files usually deny and waste hard pulls better saved for graduation products.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Issuer review policies vary; confirm
            pull type before requesting. Read our full{" "}
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
