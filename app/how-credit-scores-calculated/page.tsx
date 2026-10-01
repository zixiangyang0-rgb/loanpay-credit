import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd, Byline, FaqJsonLd } from "../components/schema";

export const metadata: Metadata = {
  title: "How Credit Scores Are Calculated: FICO Weights Explained | LoanPay Credit",
  description:
    "FICO weights — payment history 35%, amounts owed 30%, length 15%, new credit 10%, mix 10% — explained with tables, a worked example, and FAQs.",
  alternates: { canonical: "https://credit.loanpaylogic.com/how-credit-scores-calculated" },
};

export default function HowScoresCalculatedPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="How Credit Scores Are Calculated: FICO Weights Explained | LoanPay Credit" description="FICO weights — payment history 35%, amounts owed 30%, length 15%, new credit 10%, mix 10% — explained with tables, a worked example, and FAQs." slug="/how-credit-scores-calculated" />
      <FaqJsonLd items={[{"q":"Which factor matters most?","a":"Payment history at about 35%, followed by amounts owed at about 30%. Together they drive roughly two-thirds of a FICO score."},{"q":"Does income affect my score?","a":"No. Income, savings, employment, age, and marital status are not scoring inputs. Lenders consider income separately in approvals."},{"q":"Is FICO 10T different?","a":"FICO 10T adds 24-month trended data, rewarding falling balances and flagging rising ones. Adoption varies by lender; FICO 8 remains the most common baseline."},{"q":"Can a thin file still score well?","a":"Yes. A single card paid on time with low utilization can reach the good band within a year or two, though depth limits how high it climbs initially."}]} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Scores &middot; Scoring math
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          How Credit Scores Are Calculated
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          FICO reads your bureau file through five weighted lenses. Understand each weight, what
          feeds it, and which levers actually move your number &mdash; with a full worked example.
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
            <li>Payment history is about 35%: on-time streaks help most; late marks hurt most.</li>
            <li>Amounts owed is about 30%: balances versus limits, especially revolving utilization.</li>
            <li>Length of history is about 15%: older average account age generally scores better.</li>
            <li>New credit is about 10%: inquiries plus newly opened accounts.</li>
            <li>Credit mix is about 10%: revolving plus installment experience, with no need to over-collect accounts.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Start broader? Read{" "}
            <Link href="/credit-score-basics" className="text-amber-200 underline underline-offset-2">
              credit score basics
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The five FICO ingredients</h2>
          <p className="mt-3">
            FICO Score 8, still the most widely used general model in 2026, publishes approximate
            weights that describe an average borrower. Your file personalizes them: a borrower with
            a recent collection will find payment history dominating everything, while a
            decades-clean borrower will find utilization swings driving month-to-month movement.
            VantageScore 3.0 and 4.0 use the same 300&ndash;850 scale but label influence
            differently &mdash; extremely, highly, moderately influential &mdash; and rank payment
            history first as well. Newer FICO 10T adds trended data, rewarding balances that fall
            over 24 months and penalizing balances that climb, which means the direction of your
            balances now matters alongside their level at some lenders.
          </p>
          <p className="mt-3">
            What models never score is also worth knowing. Income, savings balances, employment
            history, age, gender, and marital status do not enter the formula. Rent payments appear
            only if reported through rent-reporting services or specialty bureaus. Buy-now-pay-later
            reporting remains inconsistent across bureaus in 2026. Utility and phone bills count
            only through programs such as Experian Boost or when sent to collections. Knowing these
            boundaries keeps effort focused on the data the models actually read.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Approximate FICO Score 8 weights and what feeds each factor.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Weight</th>
                  <th className="px-4 py-3 font-semibold">Key inputs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Payment history</td><td className="px-4 py-2">~35%</td><td className="px-4 py-2">On-time rate, 30/60/90-day lates, collections, bankruptcies</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Amounts owed</td><td className="px-4 py-2">~30%</td><td className="px-4 py-2">Revolving utilization, installment balances vs. original amounts</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Length of history</td><td className="px-4 py-2">~15%</td><td className="px-4 py-2">Oldest account age, average age, time since last activity</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">New credit</td><td className="px-4 py-2">~10%</td><td className="px-4 py-2">Hard inquiries, newly opened accounts, rate-shopping windows</td></tr>
                <tr><td className="px-4 py-2">Credit mix</td><td className="px-4 py-2">~10%</td><td className="px-4 py-2">Revolving plus installment experience; depth over quantity</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Payment history: the 35 percent anchor</h2>
          <p className="mt-3">
            Every on-time payment adds to a streak the model trusts; every late mark breaks it.
            Severity scales with lateness: a 30-day mark stings, 60-day marks sting more, 90-day
            marks plus charge-offs, collections, and bankruptcies sit at the severe end for up to
            seven years, or up to ten for Chapter 7 bankruptcy. Recency matters enormously &mdash;
            a two-year-old late mark weighs far less than a two-month-old one &mdash; and
            frequency compounds, so three separate late marks damage more than one isolated slip
            followed by years of clean payments. The practical takeaway is absolute: autopay at
            least the minimum on every account, days before the due date, because no utilization
            trick can offset a fresh delinquency. Borrowers repairing damage should read our{" "}
            <Link href="/missed-payment-credit-impact" className="text-amber-200 underline underline-offset-2">
              missed-payment guide
            </Link>{" "}
            and our{" "}
            <Link href="/collections-debt-credit-report" className="text-amber-200 underline underline-offset-2">
              collections guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Amounts owed: utilization and installment math</h2>
          <p className="mt-3">
            For revolving accounts the model divides reported statement balances by credit limits,
            both per card and across all cards. The long-standing guideline is to keep both ratios
            under 30 percent, with lower generally scoring better and single-digit utilization
            associated with the highest score tiers. What surprises beginners is timing: bureaus see
            the balance your issuer reports once monthly, usually the statement balance, not your
            balance after you pay. Paying in full but letting a 4,500-dollar statement post on a
            5,000-dollar limit still reports 90 percent until the next cycle. Our{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              utilization guide
            </Link>{" "}
            walks through pre-statement payments that fix this without spending less.
          </p>
          <p className="mt-3">
            Installment loans &mdash; auto, student, mortgage &mdash; contribute a subtler signal:
            balance relative to the original loan amount. A loan nearly paid off can help slightly
            versus the same loan brand new, but rapidly adding large installment balances can
            offset gains. Number of accounts carrying balances also counts, so consolidating five
            maxed cards into similar total debt spread across five cards rarely helps; paying the
            total down helps everywhere at once. For payoff sequencing that lowers interest while
            utilization falls, see the avalanche and snowball explainers on{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Length, new credit, and mix</h2>
          <p className="mt-3">
            Length of history rewards patience through oldest-account age, average age across all
            accounts, and time since each account was last used. Closing your oldest no-fee card to
            simplify can eventually shorten the average the model sees, so keep such cards alive
            with a small recurring charge on autopay. New credit captures the search for debt:
            each hard inquiry may cost a few points for about twelve months, and each newly opened
            account lowers average age while adding an inquiry. Spacing applications months apart
            and rate shopping within a focused window, as our{" "}
            <Link href="/how-long-hard-inquiries-last" className="text-amber-200 underline underline-offset-2">
              inquiry guide
            </Link>{" "}
            details, keeps this factor quiet. Credit mix, the smallest slice, simply notes
            experience with both revolving and installment credit; it never justifies opening loans
            you do not need, since a thin but clean single-card file outscores a cluttered file
            full of recent accounts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: same income, different files</h2>
          <p className="mt-3">
            Ana and Ben each earn 65,000 dollars. Ana holds two cards opened in 2019 and 2021 with
            a combined 20,000-dollar limit, reports a 1,600-dollar total statement balance for 8
            percent utilization, has zero late marks, one inquiry from 2024, and a 2018 auto loan at
            40 percent remaining. Ben holds four cards, all opened in 2025, with a combined
            9,000-dollar limit, reports 5,400 dollars for 60 percent utilization, carries one 60-day
            late from March 2026, and shows four recent inquiries. Ana scores around 758 while Ben
            sits near 621 &mdash; a 137-point gap built from behavior, not income. Ben then runs a
            six-month plan: autopay minimums, a 3,000-dollar balance paydown to reach 27 percent
            utilization, and zero new applications. Utilization relief plus six months of distance
            from the late mark typically recovers 35 to 55 points, illustrating how the two heavy
            factors dominate every comeback story.
          </p>
        </section>

        <AdSlot format="in-article" slot="TODO-credit-article-mid" />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Which factor matters most?</summary>
              <p className="mt-2">Payment history at about 35%, followed by amounts owed at about 30%. Together they drive roughly two-thirds of a FICO score.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does income affect my score?</summary>
              <p className="mt-2">No. Income, savings, employment, age, and marital status are not scoring inputs. Lenders consider income separately in approvals.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is FICO 10T different?</summary>
              <p className="mt-2">FICO 10T adds 24-month trended data, rewarding falling balances and flagging rising ones. Adoption varies by lender; FICO 8 remains the most common baseline.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can a thin file still score well?</summary>
              <p className="mt-2">Yes. A single card paid on time with low utilization can reach the good band within a year or two, though depth limits how high it climbs initially.</p>
            </details>
          </div>
        </section>

        <AdSlot format="multiplex" slot="TODO-credit-article-bottom" />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Weights are FICO published
            approximations and vary by file. Read our full{" "}
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
