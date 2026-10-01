import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd, Byline, FaqJsonLd } from "../components/schema";

export const metadata: Metadata = {
  title: "FICO vs. VantageScore: Models, Tiers & Lender Use Compared | LoanPay Credit",
  description:
    "FICO versus VantageScore — same 300–850 scale, different tiers, weights, versions, and lender adoption — compared with tables and examples.",
  alternates: { canonical: "https://credit.loanpaylogic.com/fico-vs-vantagescore" },
};

export default function FicoVsVantagePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="FICO vs. VantageScore: Models, Tiers & Lender Use Compared | LoanPay Credit" description="FICO versus VantageScore — same 300–850 scale, different tiers, weights, versions, and lender adoption — compared with tables and examples." slug="/fico-vs-vantagescore" />
      <FaqJsonLd items={[{"q":"Why do my scores differ?","a":"Different weights, tier definitions, and bureau files. Gaps of 20–40 points on the same file are normal."},{"q":"Which matters more to lenders?","a":"FICO in most mortgage, auto, and card decisions — roughly 90% of top-lender use. VantageScore adoption grows in cards and personal loans."},{"q":"What is FICO 10T?","a":"A version adding 24-month trended data — falling balances help, rising balances flag. Adoption varies; FICO 8 remains the baseline."},{"q":"Can I raise both at once?","a":"Yes. Both reward on-time payments, low utilization, and accurate files. Improving the shared inputs lifts every model."}]} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Scores &middot; Models compared
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          FICO vs. VantageScore: Same Scale, Different Lenses
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Both models read your bureau files and both score 300 to 850 &mdash; but their tiers,
          weights, minimum-history rules, and lender audiences differ. Learn which number matters
          where, and why your two free scores disagree.
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
            <li>FICO, by Fair Isaac since 1989, powers ~90% of top-lender decisions.</li>
            <li>VantageScore, by the three bureaus since 2006, powers free monitoring and growing lending.</li>
            <li>FICO good means 670&ndash;739; VantageScore good means 661&ndash;780.</li>
            <li>FICO needs ~6 months of history; VantageScore scores after ~1 month.</li>
            <li>Same-file gaps of 20&ndash;40 points between models are normal.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Basics first:{" "}
            <Link href="/credit-score-basics" className="text-amber-200 underline underline-offset-2">
              score basics
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Origins and audiences</h2>
          <p className="mt-3">
            FICO grew from Fair Isaac analytics into the industry default: FICO 8 remains the most
            used general score in 2026, with FICO 9, 10, and 10T layering medical-collection
            leniency and trended balance data at adopting lenders, plus industry variants &mdash;
            Auto, Bankcard, mortgage flavors &mdash; tuned per product on 250&ndash;900 scales.
            Federal mortgage policy still runs substantially on older FICO versions, though
            VantageScore 4.0 acceptance in mortgage underwriting has advanced through recent
            policy updates. VantageScore, built jointly by Equifax, Experian, and TransUnion,
            dominates consumer-facing monitoring: Credit Karma, CreditWise, and bank dashboards
            typically show VantageScore 3.0, which is why the first score most borrowers ever see
            is a VantageScore. Personal-loan and card issuers increasingly use VantageScore in
            approvals, but mortgage and auto decisions remain FICO-led in practice.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Head-to-head: FICO Score 8 versus VantageScore 3.0/4.0.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">FICO</th>
                  <th className="px-4 py-3 font-semibold">VantageScore</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Scale</td><td className="px-4 py-2">300&ndash;850 base</td><td className="px-4 py-2">300&ndash;850</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Good tier</td><td className="px-4 py-2">670&ndash;739</td><td className="px-4 py-2">661&ndash;780</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Top tier</td><td className="px-4 py-2">800&ndash;850 exceptional</td><td className="px-4 py-2">781&ndash;850 excellent</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">History needed</td><td className="px-4 py-2">~6 months</td><td className="px-4 py-2">~1 month</td></tr>
                <tr><td className="px-4 py-2">Used most in</td><td className="px-4 py-2">Mortgage, auto, cards</td><td className="px-4 py-2">Monitoring, cards, personal loans</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Weights and tier traps</h2>
          <p className="mt-3">
            FICO publishes percentage weights &mdash; 35 percent payment history, 30 percent
            amounts owed, 15 percent length, 10 percent new credit, 10 percent mix &mdash; while
            VantageScore ranks influence from extremely influential payment history down through
            highly influential age-and-type and utilization to moderately influential balances and
            recent behavior. The practical divergence: VantageScore punishes high utilization and
            short histories somewhat more sharply on young files, while FICO penalizes isolated
            late marks on thick files more durably. Tier labels trap comparers: a 705 is good in
            FICO but merely fair-adjacent in older VantageScore narratives, and a 760 is very good
            in FICO yet good in VantageScore 3.0 bands. Always translate numbers through the
            model own bands rather than generic good-or-bad instincts, and track one model
            consistently for trend analysis while checking the other before major applications.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the 38-point gap</h2>
          <p className="mt-3">
            Kevin holds a two-year file: one 30-day late 18 months ago, utilization currently 34
            percent after travel, oldest account three years. His monitoring shows VantageScore 692
            and FICO 8 at 730 &mdash; a 38-point gap on identical data. The late mark aging plus
            FICO gentler utilization curve on seasoned files lifts FICO, while VantageScore
            weights the elevated utilization and short average age more heavily. Kevin pays
            balances to 9 percent before statements; next cycle VantageScore jumps 26 points while
            FICO rises 11, narrowing the gap to 23. The lesson: gaps reflect weighting
            philosophy, not errors, and both models agree directionally once behavior improves.
            Borrowers who panic at the lower number and dispute accurate data waste the dispute
            rights our{" "}
            <Link href="/how-to-dispute-credit-report-errors" className="text-amber-200 underline underline-offset-2">
              dispute guide
            </Link>{" "}
            reserves for genuine inaccuracies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Which score to watch for your goal</h2>
          <p className="mt-3">
            Mortgage shopping: track FICO mortgage flavors through a lender or bureau product, and
            prepare with the threshold explainers on{" "}
            <a href="https://guides.loanpaylogic.com/credit-score-mortgage-guide" className="text-amber-200 underline underline-offset-2">
              guides.loanpaylogic.com mortgage guide
            </a>
            . Auto and card shopping: FICO 8 or Bankcard flavors lead, with free issuer-provided
            FICO dashboards &mdash; Discover, Wells Fargo, and others &mdash; offering the exact
            lens. Everyday monitoring and building from zero: VantageScore trends suffice, since
            direction matches and updates arrive sooner, as our{" "}
            <Link href="/how-often-credit-score-updates" className="text-amber-200 underline underline-offset-2">
              update cadence guide
            </Link>{" "}
            details. Whatever the goal, fix the file rather than the model: clean payments, low
            reported balances, and accurate reports lift every version simultaneously.
          </p>
        </section>

        <AdSlot format="in-article" slot="TODO-credit-article-mid" />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Why do my scores differ?</summary>
              <p className="mt-2">Different weights, tier definitions, and bureau files. Gaps of 20&ndash;40 points on the same file are normal.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Which matters more to lenders?</summary>
              <p className="mt-2">FICO in most mortgage, auto, and card decisions — roughly 90% of top-lender use. VantageScore adoption grows in cards and personal loans.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is FICO 10T?</summary>
              <p className="mt-2">A version adding 24-month trended data — falling balances help, rising balances flag. Adoption varies; FICO 8 remains the baseline.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I raise both at once?</summary>
              <p className="mt-2">Yes. Both reward on-time payments, low utilization, and accurate files. Improving the shared inputs lifts every model.</p>
            </details>
          </div>
        </section>

        <AdSlot format="multiplex" slot="TODO-credit-article-bottom" />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Model versions and lender adoption
            change over time. Read our full{" "}
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
