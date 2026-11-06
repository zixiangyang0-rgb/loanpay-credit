import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd, Byline, FaqJsonLd } from "../components/schema";
import { OfficialBox } from "../components/OfficialBox";
import PaydownCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Credit Utilization Paydown Calculator: Which Card to Pay First | LoanPay Credit",
  description:
    "Use the utilization paydown calculator to rank cards by per-card ratio, plan an extra payment for the fastest reported-ratio drop, and time it before statement dates.",
  alternates: { canonical: "https://credit.loanpaylogic.com/credit-utilization-paydown-calculator" },
};

const FAQS = [
  {
    q: "Should I pay the highest-utilization card or the highest-interest card first?",
    a: "If a mortgage, auto, or card application is weeks away, pay the highest-utilization card first because the reported ratio moves your score fastest. If no application is near, paying the highest-interest balance first usually saves more money over time. Either way, keep every account current so no new late mark wipes out the gain.",
  },
  {
    q: "How much extra payment moves my utilization meaningfully?",
    a: "Divide your extra payment by your total limits: $1,000 against $10,000 of limits cuts overall utilization by 10 percentage points. Concentrating that $1,000 on one maxed-out card also fixes the per-card ratio, which is why the calculator ranks cards individually instead of spreading payments evenly.",
  },
  {
    q: "Will paying a card to zero hurt my score?",
    a: "Paying one card to zero is fine as long as at least one card still reports a small balance, ideally 1 to 9 percent of its limit. Files where every revolving account reports zero sometimes score slightly below files with one small balance reporting, because the model sees no active revolving use.",
  },
  {
    q: "How fast will the paydown show on my credit report?",
    a: "Usually one to two statement cycles. Issuers report once a month on their own schedules, so a payment made today appears only after the next statement snapshot for that card reaches the bureaus. Payments timed before the closing date report a full cycle sooner than payments made after it.",
  },
  {
    q: "Should I spread one payment across all cards or pile it onto one?",
    a: "Pile it onto the highest-utilization card first, unless another card is about to cross a threshold like 30 or 50 percent. Concentrated payments clear at least one strained ratio completely, while thin spreading leaves every card elevated and the file still looks stretched.",
  },
];

export default function UtilizationPaydownCalculatorPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd
        title="Credit Utilization Paydown Calculator: Which Card to Pay First | LoanPay Credit"
        description="Use the utilization paydown calculator to rank cards by per-card ratio, plan an extra payment for the fastest reported-ratio drop, and time it before statement dates."
        slug="/credit-utilization-paydown-calculator"
      />
      <FaqJsonLd items={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Cards &middot; Utilization &middot; Paydown planner
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Utilization Paydown Calculator: Which Card to Pay First
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          When cash cannot clear every balance, order matters. Rank your cards by reported ratio,
          aim one focused payment at the worst ratio, and time it before the statement snapshot so
          the bureaus actually see the improvement.
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
            <li>Utilization is reported per card and overall; both ratios feed your score.</li>
            <li>Rank cards by per-card utilization, highest first &mdash; that is your paydown order.</li>
            <li>Pile the extra payment onto the top-ranked card instead of splitting it evenly.</li>
            <li>Pay several days before each card closing date so the low balance is what reports.</li>
            <li>Keep minimums current everywhere; one new late mark erases utilization gains.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Ratio background:{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              credit utilization guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How the calculator ranks your cards</h2>
          <p className="mt-3">
            The ranking rule is deliberately simple: divide each card reported balance by its own
            limit, sort highest first, and send the extra payment down that list until it runs out.
            This works because every dollar aimed at the worst ratio relieves two numbers at once,
            the strained per-card ratio and the overall ratio, while a dollar aimed at an already
            comfortable card only moves the overall number. As our{" "}
            <Link href="/credit-utilization-guide" className="text-amber-200 underline underline-offset-2">
              credit utilization guide
            </Link>{" "}
            explains, scoring models read both ratios, so a file at 15 percent overall with one card
            at 95 percent still shows visible strain on that card. Clearing the worst card first
            removes the ugliest line on the report, which is exactly what underwriters and automated
            models notice.
          </p>
          <p className="mt-3">
            Two guardrails sit underneath the ranking. First, minimum payments on every account come
            before any extra-payment strategy, because payment history outweighs utilization in every
            major model and a single 30-day late mark costs far more than a few ratio points are
            worth. Second, the calculator assumes the balances you type are close to what will
            report; if your statement already closed with higher numbers, the next snapshot is the
            earliest place the improvement can appear. For the full scoring context behind these
            trade-offs, see{" "}
            <Link href="/how-credit-scores-calculated" className="text-amber-200 underline underline-offset-2">
              how credit scores are calculated
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Try it: your paydown order</h2>
          <p className="mt-3">
            Enter your real balances and limits below, plus the extra amount you can pay this month
            on top of minimums. The tool does the sorting math for you and shows the overall ratio
            before and after, so you can test scenarios: what does $500 do, what does $1,500 do, and
            which card deserves each dollar?
          </p>
          <div className="mt-4">
            <PaydownCalculator />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: $1,500 across three cards</h2>
          <p className="mt-3">
            Take Maya, who owes $2,400 on a $3,000-limit card closing on the 12th (80 percent), $900
            on a $5,000-limit card closing on the 20th (18 percent), and $400 on a $2,000-limit card
            closing on the 27th (20 percent). Overall utilization reads 37 percent on $10,000 of
            limits, but the real problem is the first card at 80 percent. Maya finds $1,500 for an
            extra payment. Split evenly at $500 per card, every card improves yet the first still
            reports 63 percent, strained by any standard. Piled utilization-first, the full $1,500
            goes to the first card, dropping it to $900 and 30 percent, while overall utilization
            falls to 22 percent with the same dollars.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Same $1,500, two allocations. Utilization-first clears the worst ratio.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Strategy</th>
                  <th className="px-4 py-3 font-semibold">Card A (80%)</th>
                  <th className="px-4 py-3 font-semibold">Card B (18%)</th>
                  <th className="px-4 py-3 font-semibold">Card C (20%)</th>
                  <th className="px-4 py-3 font-semibold">Overall</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Before</td>
                  <td className="px-4 py-2">80%</td>
                  <td className="px-4 py-2">18%</td>
                  <td className="px-4 py-2">20%</td>
                  <td className="px-4 py-2">37%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Split evenly</td>
                  <td className="px-4 py-2">63%</td>
                  <td className="px-4 py-2">8%</td>
                  <td className="px-4 py-2">0% (paid off)</td>
                  <td className="px-4 py-2">22%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Utilization-first</td>
                  <td className="px-4 py-2">30%</td>
                  <td className="px-4 py-2">18%</td>
                  <td className="px-4 py-2">20%</td>
                  <td className="px-4 py-2">22%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Notice the overall ratio lands at 22 percent either way, yet the utilization-first file
            looks far healthier because no card screams distress. That is the entire logic of
            paydown order: identical overall math, visibly different risk pattern. Maya then pays the
            $900 remainder on the first card several days before its next closing date, so the
            following snapshot shows every card under 20 percent. If an application is coming within
            60 days, this sequencing plus statement timing is the plan our{" "}
            <Link href="/how-to-improve-credit-score-fast" className="text-amber-200 underline underline-offset-2">
              fast score improvement guide
            </Link>{" "}
            recommends for the utilization sprint.
          </p>
        </section>

        <AdSlot format="in-article" slot="TODO-credit-article-mid" />

        <section>
          <h2 className="text-xl font-bold text-white">Utilization-first vs. avalanche vs. snowball</h2>
          <p className="mt-3">
            Utilization-first ordering wins when a score snapshot is imminent, but it is not the
            only valid order. The avalanche method pays the highest interest rate first and saves the
            most money over time, which usually beats utilization-first once no application is on the
            calendar. The snowball method clears the smallest balance first for a fast psychological
            win and one fewer minimum payment to track, at the cost of extra interest versus the
            avalanche. None of these conflict with the calculator: use utilization-first for the two
            cycles before an application, then switch to the avalanche for the long grind. Pure
            interest math and payoff sequencing live on{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            , where you can compare total-cost outcomes side by side.
          </p>
          <p className="mt-3">
            One hybrid deserves mention. If your highest-utilization card is also a high-rate card,
            both methods agree and the choice is trivial. When they disagree, split roles: minimums
            everywhere, the utilization payment to the worst ratio this cycle, and any remaining
            cash to the highest rate. Revisit the ranking monthly, because each payment changes the
            ratios and the next target may be a different card.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Two helpers: timing and limits</h2>
          <p className="mt-3">
            Paydown dollars work harder when paired with calendar timing. Because issuers typically
            report the statement-closing balance, a payment that lands after closing waits a full
            extra cycle to appear, while the same payment made five days before closing shows up on
            the very next snapshot. Set one reminder per card, distinct from the due-date autopay
            that protects your payment history. Borrowers who charge heavily but pay in full should
            treat this as routine hygiene: spend normally, sweep the bulk payment before closing,
            and let a small balance report.
          </p>
          <p className="mt-3">
            The second helper is growing the denominator. A limit increase on a clean, older account
            lowers every future ratio without requiring extra cash, and modest requests often process
            as soft inquiries; our{" "}
            <Link href="/credit-limit-increase-guide" className="text-amber-200 underline underline-offset-2">
              limit-increase guide
            </Link>{" "}
            walks through the ask. Consolidating several strained cards onto one promotional offer
            is a heavier version of the same idea, but the fee and post-transfer discipline decide
            whether it wins, so read our{" "}
            <Link href="/balance-transfer-cards-guide" className="text-amber-200 underline underline-offset-2">
              balance-transfer guide
            </Link>{" "}
            before moving balances. Never close the old cards immediately after consolidating: fewer
            total limits means a higher overall ratio on the same debt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Mistakes that undo a good paydown</h2>
          <p className="mt-3">
            The most common error is pausing minimums on quiet cards to accelerate the target card;
            the resulting late mark costs multiples of whatever the ratio improvement earns. Next is
            paying after the statement closes and wondering why nothing changed; the dollars were
            real but the snapshot already shipped. A third trap is draining emergency savings to
            chase single digits, then charging the same cards when the car breaks down, ending with
            identical ratios and no cushion. Finally, some borrowers open a new card mid-sprint for
            the extra limit, adding a hard inquiry and a young account right before the application
            the sprint was meant to serve. Pay down, time the snapshot, and freeze new applications
            until the score you need is in hand.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            {FAQS.map((item) => (
              <details key={item.q} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <summary className="cursor-pointer font-semibold text-white">{item.q}</summary>
                <p className="mt-2">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <AdSlot format="multiplex" slot="TODO-credit-article-bottom" />

        <OfficialBox
          govHref="https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/"
          govLabel="CFPB — How do I dispute an error on my credit report?"
          govDesc="Federal dispute steps, timelines, and what to include."
        />

        <section aria-label="Related guides" className="glass-card mt-10 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Related guides</h2>
          <nav aria-label="Related guides" className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/credit-utilization-guide" className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm font-semibold text-amber-200 transition hover:border-amber-200/30 hover:text-amber-100">Credit Utilization Guide</Link>
            <Link href="/balance-transfer-cards-guide" className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm font-semibold text-amber-200 transition hover:border-amber-200/30 hover:text-amber-100">Balance Transfer Cards Guide</Link>
            <Link href="/credit-limit-increase-guide" className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm font-semibold text-amber-200 transition hover:border-amber-200/30 hover:text-amber-100">Credit Limit Increase Guide</Link>
            <Link href="/how-to-improve-credit-score-fast" className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm font-semibold text-amber-200 transition hover:border-amber-200/30 hover:text-amber-100">How to Improve Your Score Fast</Link>
          </nav>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Reporting dates and scoring impacts
            vary by issuer and bureau. Read our full{" "}
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
