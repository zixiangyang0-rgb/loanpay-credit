import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Do Hard Inquiries Last? Impact & Rate Shopping | LoanPay Credit",
  description:
    "Hard inquiries stay visible 2 years but affect scores ~12 months. Learn soft vs. hard pulls, rate-shopping windows, and application pacing.",
  alternates: { canonical: "https://credit.loanpaylogic.com/how-long-hard-inquiries-last" },
};

export default function HardInquiriesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Reports &middot; Inquiries
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          How Long Do Hard Inquiries Last?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A hard inquiry is a small, temporary footprint &mdash; visible for two years, scored for
          about one. Learn which pulls count, how rate shopping is protected, and how to pace
          applications so inquiries never drive your score.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Hard inquiries appear on reports for 2 years; scoring impact fades after ~12 months.</li>
            <li>Each inquiry typically costs only a few points, less on thick files.</li>
            <li>Soft pulls &mdash; self-checks, preapprovals &mdash; never affect scores.</li>
            <li>Mortgage, auto, and student-loan shopping inside a short window counts once.</li>
            <li>Space card applications months apart; batch rate shopping into days.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Scoring background:{" "}
            <Link href="/how-credit-scores-calculated" className="text-amber-200 underline underline-offset-2">
              how scores are calculated
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Soft versus hard: which pulls count</h2>
          <p className="mt-3">
            Every credit pull is either soft or hard. Soft pulls include your own monitoring,
            preapproved offers, employer background screens with permission, and account reviews by
            existing creditors; they may appear on personal report views but never enter scoring
            and never show to lenders as shopping behavior. Hard pulls occur when you authorize an
            application for new credit &mdash; a card, mortgage, auto loan, or sometimes a lease or
            phone financing &mdash; and they record on the pulled bureau file with date and
            requester. Rental and utility checks vary: some use soft pulls, others hard, so ask
            before authorizing. The practical rule is simple: monitoring infinitely, applying
            deliberately.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Inquiry types and their footprint.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Event</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Scoring effect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Self-check, monitoring app</td><td className="px-4 py-2">Soft</td><td className="px-4 py-2">No effect, unlimited</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Preapproval, rate quote</td><td className="px-4 py-2">Soft</td><td className="px-4 py-2">No effect</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Card application</td><td className="px-4 py-2">Hard</td><td className="px-4 py-2">A few points, ~12 mo</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Mortgage/auto shopping window</td><td className="px-4 py-2">Hard, deduplicated</td><td className="px-4 py-2">Counted once</td></tr>
                <tr><td className="px-4 py-2">Employer screen</td><td className="px-4 py-2">Soft</td><td className="px-4 py-2">No effect</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The two timelines: visible versus scored</h2>
          <p className="mt-3">
            Two clocks start at each hard pull. The visibility clock runs 24 months: any lender
            pulling that bureau sees the inquiry with its date for two full years, and manual
            reviewers on large loans sometimes ask about recent clusters. The scoring clock runs
            roughly 12 months in FICO models: the small point deduction applies during the first
            year and then drops out even while the record remains visible. VantageScore windows are
            similar in spirit. Impact size scales with file depth &mdash; a borrower with fifteen
            years of history may lose under five points per inquiry, while a six-month file may
            lose closer to ten &mdash; and clusters compound, since six inquiries in a month signal
            urgent credit seeking while one signals routine shopping. This asymmetry is why pacing
            matters more than avoidance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Rate-shopping windows that protect comparison</h2>
          <p className="mt-3">
            Scoring models explicitly protect mortgage, auto, and student-loan comparison. Multiple
            pulls for the same loan purpose inside a focused window &mdash; 14 days in older FICO
            versions, up to 45 days in newer ones, with bureaus often describing a 30-day shopping
            period &mdash; are treated as a single inquiry for scoring. The protection is automatic;
            no special code is needed. Practical shopping therefore means compressing lender
            contacts into one to two weeks, authorizing pulls only when quotes require them, and
            keeping card applications out of the same month. Our mortgage-preparation companion on{" "}
            <a href="https://guides.loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              guides.loanpaylogic.com
            </a>{" "}
            sequences the full pre-approval timeline around this window.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: paced versus clustered applications</h2>
          <p className="mt-3">
            Twins Chris and Dana each start at 724 with two-year files. Chris applies for one card
            in January, is approved, waits until July for a second, and shops three auto lenders
            within one February week. His file shows three hard inquiries but scoring counts two
            events; by December the auto inquiry aged ten months and both card inquiries sit past
            six months, leaving him near 731 as utilization improved. Dana applies for four cards
            across three weeks in March, opening two, and each inquiry plus each new account trims
            average age simultaneously. Her score dips to 698 by May and needs nine quiet months to
            recover past 720. Same products, opposite pacing &mdash; inquiries punish clustering,
            not curiosity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Pacing rules and unauthorized pulls</h2>
          <p className="mt-3">
            Follow three pacing rules. First, one card application per three to six months during
            building phases, pausing entirely before mortgages. Second, batch installment shopping
            into days, not months. Third, prequalify with soft-pull tools before any hard
            authorization, so denials cost nothing. If a hard inquiry appears that you never
            authorized, dispute it with the bureau and notify the creditor in writing; unauthorized
            pulls tied to identity theft also warrant a{" "}
            <Link href="/credit-freeze-vs-fraud-alert" className="text-amber-200 underline underline-offset-2">
              freeze plus fraud alert
            </Link>
            . Legitimate inquiries cannot be disputed away &mdash; anyone promising deletion of
            accurate pulls is selling fiction &mdash; but they fade on their own faster than
            anxious borrowers expect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How many points does one inquiry cost?</h3>
              <p className="mt-1">Typically under five on established files and up to about ten on thin files, fading after roughly twelve months.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I remove hard inquiries?</h3>
              <p className="mt-1">Only unauthorized or inaccurate ones via dispute. Accurate inquiries age off automatically after two years.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do preapprovals count?</h3>
              <p className="mt-1">No. Prequalification and preapproval quote tools use soft pulls until you formally apply.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I avoid all applications?</h3>
              <p className="mt-1">No. Needed credit thoughtfully applied for and well managed builds history worth far more than the temporary inquiry cost.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Model windows vary by FICO version;
            lender practice may differ. Read our full{" "}
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
