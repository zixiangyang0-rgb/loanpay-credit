import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Credit Report Guide: Weekly Reports & Reading Checklist | LoanPay Credit",
  description:
    "How to get free weekly credit reports from AnnualCreditReport.com, read each section, and spot errors — with a checklist table and worked review.",
  alternates: { canonical: "https://credit.loanpaylogic.com/free-credit-report-guide" },
};

export default function FreeReportGuidePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Reports &middot; Free access
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Free Credit Reports: Getting and Reading All Three Files
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          You can check Equifax, Experian, and TransUnion reports free every week through the
          official portal. Learn the safe request path, the section-by-section reading method, and
          the error patterns worth disputing.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Request at AnnualCreditReport.com, the only federally authorized source.</li>
            <li>Reports are free weekly; scores may cost extra or come free from card apps.</li>
            <li>Read identity, accounts, inquiries, and negative sections on each bureau file.</li>
            <li>Line-compare all three bureaus; files legitimately differ.</li>
            <li>Dispute genuine errors free; checking yourself never hurts scores.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Found an error? See{" "}
            <Link href="/how-to-dispute-credit-report-errors" className="text-amber-200 underline underline-offset-2">
              disputing errors
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The safe request path</h2>
          <p className="mt-3">
            AnnualCreditReport.com is the official portal created under federal law, jointly
            operated with the three bureaus. Weekly free reports from each bureau became the
            standing policy after the pandemic-era expansion was made permanent, replacing the old
            one-per-year rhythm. Request online with identity verification questions drawn from
            your file, by phone at 1-877-322-8228, or by mail to the Annual Credit Report Request
            Service in Atlanta. Impostor sites with similar names sell monitoring bundled around a
            nominally free report &mdash; check the address bar character by character and never
            pay for the report itself through the official channel. Staggering requests across the
            year, once the standard advice, matters less now that weekly access is free; instead
            pull all three at once when preparing applications, disputes, or an annual audit, and
            spot-check one bureau monthly in between.
          </p>
          <p className="mt-3">
            Reports and scores are different products. The free report contains tradelines,
            balances, limits, payment history, inquiries, collections, and public records &mdash;
            everything needed to verify accuracy. It does not necessarily include a score; bureaus
            may offer scores for a fee or trial at checkout, which you can decline. Free scores
            from card issuers, Credit Karma with VantageScore, or bank dashboards suffice for
            monitoring direction. What matters for approvals is the underlying data accuracy, which
            the free report reveals completely.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Reading checklist: four sections, three files</h2>
          <p className="mt-3">
            Work bureau by bureau with a highlighter. First, identity and employer sections: flag
            unfamiliar names, addresses, or employers suggesting mixed files, while ignoring minor
            formatting variants. Second, account tradelines: verify each account is yours, balances
            and limits match statements, payment status reads current where you paid on time, and
            dates opened are correct. Third, inquiries: confirm every hard inquiry traces to an
            application you authorized, since unfamiliar ones can indicate fraud. Fourth,
            collections and public records: match each entry to a real obligation, watching for
            duplicates from servicing transfers and paid medical collections that newer models
            ignore but older reports still display.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Section checklist applied to each bureau file.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Section</th>
                  <th className="px-4 py-3 font-semibold">Verify</th>
                  <th className="px-4 py-3 font-semibold">Red flag</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Identity</td><td className="px-4 py-2">Names, addresses, SSN digits, employers</td><td className="px-4 py-2">Unknown person data; mixed file</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Accounts</td><td className="px-4 py-2">Ownership, balance, limit, status, dates</td><td className="px-4 py-2">Stale balances, wrong lates</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Inquiries</td><td className="px-4 py-2">Each hard pull matches an application</td><td className="px-4 py-2">Unfamiliar pulls; fraud sign</td></tr>
                <tr><td className="px-4 py-2">Collections/public records</td><td className="px-4 py-2">One entry per debt; correct dates</td><td className="px-4 py-2">Duplicates; zombie debts</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: a 40-minute annual audit</h2>
          <p className="mt-3">
            Marcus blocks 40 minutes each October. Minutes zero to ten: he requests all three
            reports, saves the PDFs, and confirms no unfamiliar identity data. Minutes ten to
            twenty-five: he line-compares five tradelines across bureaus against his card apps,
            catching a 2,100-dollar balance on TransUnion already paid to 300 dollars &mdash; a
            reporting lag he notes to recheck in 30 days rather than dispute immediately. Minutes
            twenty-five to thirty-five: he finds a duplicated 340-dollar collection on Equifax from
            a servicing transfer and drafts a dispute with both listings highlighted, following our{" "}
            <Link href="/how-to-dispute-credit-report-errors" className="text-amber-200 underline underline-offset-2">
              dispute sequence
            </Link>
            . Final minutes: he confirms two authorized hard inquiries, freezes all three files as
            routine hygiene per our{" "}
            <Link href="/credit-freeze-vs-fraud-alert" className="text-amber-200 underline underline-offset-2">
              freeze comparison
            </Link>
            , and calendars a mid-year single-bureau spot check. One focused session covers
            accuracy, fraud, and protection for the year.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Cadence and special situations</h2>
          <p className="mt-3">
            A practical cadence is a full three-bureau audit yearly, a single-bureau spot check
            mid-year, and fresh pulls before mortgages, auto loans, or apartment applications so no
            surprise derails timing &mdash; mortgage preparation specifics live on{" "}
            <a href="https://guides.loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              guides.loanpaylogic.com
            </a>
            ./divorce, fraud, and active-duty military situations deserve extra pulls: separated
            joint accounts must show closed status, fraud victims should verify freeze coverage and
            alert placement, and servicemembers can use active-duty alerts plus free monitoring
            rights. Parents should consider checking whether children have files at all &mdash; a
            file existing for a young child often signals synthetic identity misuse worth
            addressing early.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How often are reports free?</h3>
              <p className="mt-1">Weekly from each bureau through AnnualCreditReport.com — the standing policy as of 2026.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does requesting hurt my score?</h3>
              <p className="mt-1">Never. Your own requests are soft inquiries with zero scoring impact, no matter how often you check.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Why do my three reports differ?</h3>
              <p className="mt-1">Furnishers report on different schedules and some skip bureaus. Small balance and timing differences are normal; structural contradictions are not.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are free scores accurate?</h3>
              <p className="mt-1">They are real scores from real models, often VantageScore. Lenders may pull different FICO versions, so use free scores for direction and reports for fixes.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Access policies reflect bureau
            practice as of October 2026. Read our full{" "}
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
