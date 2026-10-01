import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credit Scores & Home Buying: Thresholds, Rates & Prep | LoanPay Credit",
  description:
    "How credit scores shape mortgage approval, rate tiers, and costs — score thresholds, preparation timelines, and a worked rate example.",
  alternates: { canonical: "https://credit.loanpaylogic.com/credit-score-home-buying-link" },
};

export default function ScoreHomeBuyingPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Scores &middot; Home buying
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Credit Scores and Buying a Home
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Mortgage lenders read your scores more strictly &mdash; and more profitably &mdash; than
          any other creditor. Learn the approval thresholds, the rate tiers where points turn
          into dollars, and the preparation timeline that buys the cheapest money.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Conventional loans generally want 620+; FHA allows 580, or 500s with 10% down.</li>
            <li>Lenders often price off the middle of your three FICO mortgage scores.</li>
            <li>Rate tiers sharpen near 670, 700, 740, and 760.</li>
            <li>Start preparing 6&ndash;12 months out; pause new credit before shopping.</li>
            <li>Full mortgage walkthrough lives in our companion guide linked below.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Deep dive:{" "}
            <a
              href="https://guides.loanpaylogic.com/credit-score-mortgage-guide"
              className="text-amber-200 underline underline-offset-2"
            >
              credit score mortgage guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How mortgage scoring differs</h2>
          <p className="mt-3">
            Mortgage underwriting pulls all three bureaus and typically qualifies you on the middle
            of your three FICO mortgage scores &mdash; for joint applications, the lower of the
            two borrowers middles often governs pricing. The versions are older FICO flavors, not
            the FICO 8 your card app shows, so monitoring numbers translate imperfectly; a 720
            FICO 8 can pair with a 698 mortgage FICO on the same file. Thresholds stack by program:
            conventional conforming loans generally require 620 with pricing improving through
            every 20-point tier; FHA insures down to 580 with 3.5 percent down and into the 500s
            with 10 percent down plus lender overlays; VA and USDA publish no hard floors but
            lenders commonly overlay 620. For the complete program-by-program thresholds, disputes
            timing, and rapid-rescore tactics, see our companion{" "}
            <a
              href="https://guides.loanpaylogic.com/credit-score-mortgage-guide"
              className="text-amber-200 underline underline-offset-2"
            >
              credit-score mortgage guide on guides.loanpaylogic.com
            </a>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Illustrative mortgage pricing tiers, 2026. Lender overlays vary.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Mortgage score tier</th>
                  <th className="px-4 py-3 font-semibold">Illustrative 30-yr rate</th>
                  <th className="px-4 py-3 font-semibold">Monthly per $300k</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">760+</td><td className="px-4 py-2">~6.2%</td><td className="px-4 py-2">~$1,837</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">740&ndash;759</td><td className="px-4 py-2">~6.4%</td><td className="px-4 py-2">~$1,877</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">700&ndash;739</td><td className="px-4 py-2">~6.6%</td><td className="px-4 py-2">~$1,918</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">670&ndash;699</td><td className="px-4 py-2">~6.9%</td><td className="px-4 py-2">~$1,980</td></tr>
                <tr><td className="px-4 py-2">620&ndash;669</td><td className="px-4 py-2">~7.4%</td><td className="px-4 py-2">~$2,078</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: 40 points worth 63,000 dollars</h2>
          <p className="mt-3">
            Two buyers each seek a 300,000-dollar 30-year loan. Priya, middle mortgage score 754,
            locks 6.4 percent for about 1,877 dollars monthly. Sam, middle score 668 after a
            two-year-old collection and 58 percent utilization, is offered 7.3 percent for about
            2,058 dollars monthly &mdash; 181 dollars more per month, or roughly 65,000 dollars
            across 30 years before refinancing, plus steeper mortgage-insurance pricing. Sam
            delays six months: he settles reporting, drives utilization to 18 percent per our{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              utilization guide
            </Link>
            , and lets no new inquiry post per our{" "}
            <Link href="/how-long-hard-inquiries-last" className="text-amber-200 underline underline-offset-2">
              inquiry guide
            </Link>
            . His middle score reaches 712 and pricing improves to about 6.6 percent, saving
            roughly 140 dollars monthly versus the original quote. Waiting plus preparation beats
            rushing at almost every tier boundary.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The 12-month preparation timeline</h2>
          <p className="mt-3">
            Twelve months out, pull all three reports via our{" "}
            <Link href="/free-credit-report-guide" className="text-amber-200 underline underline-offset-2">
              report checklist
            </Link>{" "}
            and dispute genuine errors, since investigations take 30 to 45 days and underwriting
            pauses during open disputes. Nine months out, drive utilization under 30 percent and
            keep it there; avoid closing old cards. Six months out, halt new applications entirely
            and resolve collections with mortgage-aware written terms, because older FICO versions
            count paid collections that monitoring ignores. Three months out, assemble income,
            asset, and explanation letters for any remaining derogatories. During shopping, batch
            lender pulls into one to two weeks for single-inquiry treatment, and freeze files after
            closing per our{" "}
            <Link href="/credit-freeze-vs-fraud-alert" className="text-amber-200 underline underline-offset-2">
              freeze guide
            </Link>
            . Step-by-step program detail, DTI math, and insurance pricing live in the{" "}
            <a
              href="https://guides.loanpaylogic.com/credit-score-mortgage-guide"
              className="text-amber-200 underline underline-offset-2"
            >
              guides.loanpaylogic.com mortgage guide
            </a>
            , with loan-payment strategy on{" "}
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
              <h3 className="font-semibold text-white">What score buys a house?</h3>
              <p className="mt-1">Conventional approval often starts at 620, FHA at 580 with 3.5% down. Better tiers — 700, 740, 760 — cut rates meaningfully.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Which score do lenders use?</h3>
              <p className="mt-1">Usually the middle of three FICO mortgage scores — older versions that can read 20+ points below your FICO 8.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I close cards before applying?</h3>
              <p className="mt-1">No. Keep no-fee cards open; closing cuts limits and raises utilization right when pricing is tightest.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I get approved with collections?</h3>
              <p className="mt-1">Sometimes, depending on program and amount — but many lenders require resolution first. Start the process 6+ months early.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Mortgage thresholds and pricing
            change with markets and policy. Read our full{" "}
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
