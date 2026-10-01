import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Dispute Credit Report Errors: FCRA Rights & Letters | LoanPay Credit",
  description:
    "Your FCRA dispute rights explained — how to spot errors, write bureau disputes, track the 30-day investigation, and escalate — with tables and FAQs.",
  alternates: { canonical: "https://credit.loanpaylogic.com/how-to-dispute-credit-report-errors" },
};

export default function DisputeErrorsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Reports &middot; FCRA rights
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          How to Dispute Credit Report Errors
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Federal law gives you the right to dispute inaccurate information and generally get an
          investigation within 30 days &mdash; free. Learn what qualifies, how to document it, and
          how to escalate when bureaus get it wrong.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Pull all three reports free and line-compare every account.</li>
            <li>Dispute only genuinely inaccurate items, with evidence, to each bureau reporting them.</li>
            <li>Bureaus generally must investigate within 30 days under the FCRA.</li>
            <li>Also dispute directly with the furnisher for stubborn errors.</li>
            <li>Escalate to the CFPB with your paper trail if investigations fail.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            First pull your files:{" "}
            <Link href="/free-credit-report-guide" className="text-amber-200 underline underline-offset-2">
              free report guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What counts as disputable</h2>
          <p className="mt-3">
            The Fair Credit Reporting Act requires bureaus and furnishers to maintain reasonable
            procedures for maximum possible accuracy, and gives consumers the right to dispute
            incomplete or inaccurate information. Qualifying errors include accounts that are not
            yours, including mixed files and identity-theft tradelines; wrong payment status such
            as a late mark on a never-late account; stale balances already paid to zero; duplicated
            collections listed twice for one debt; incorrect dates that extend negative history;
            and accounts discharged in bankruptcy still reporting as active delinquencies. What does
            not qualify is accurate negative history you wish were absent &mdash; a correctly
            reported late payment, collection, or bankruptcy stays for its full reporting window,
            generally seven years for most negatives and up to ten for Chapter 7. Disputing
            accurate data as not mine is a misuse of the process that bureaus may dismiss as
            frivolous and that can draw fraud scrutiny.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Common findings and the correct response.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Finding</th>
                  <th className="px-4 py-3 font-semibold">Action</th>
                  <th className="px-4 py-3 font-semibold">Evidence</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Unknown account</td><td className="px-4 py-2">Dispute +possible fraud alert</td><td className="px-4 py-2">ID affidavit, police/FTC report if theft</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Paid balance still showing owed</td><td className="px-4 py-2">Dispute with bureau + furnisher</td><td className="px-4 py-2">Payoff letter, statements</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Wrong late mark</td><td className="px-4 py-2">Dispute with payment proof</td><td className="px-4 py-2">Bank records, autopay logs</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Duplicated collection</td><td className="px-4 py-2">Dispute duplicate entry</td><td className="px-4 py-2">Both listings highlighted</td></tr>
                <tr><td className="px-4 py-2">Accurate old late mark</td><td className="px-4 py-2">No dispute; goodwill request</td><td className="px-4 py-2">Goodwill letter, not dispute</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The dispute sequence step by step</h2>
          <p className="mt-3">
            Start with documentation: circle each error on printed or saved reports, gather
            statements, payoff letters, or court papers proving the correct facts, and note which
            bureaus show each error since files differ. File with each affected bureau &mdash;
            Equifax, Experian, and TransUnion each run online portals plus mailed dispute addresses
            &mdash; identifying the account precisely and stating the correction in one sentence
            with exhibits attached. Mailed disputes via certified mail create the cleanest paper
            trail for escalation, while online portals resolve fastest for simple fixes. The bureau
            forwards your claim to the furnisher, which must investigate and report back;
            investigations generally conclude within 30 days, extendable to 45 if you submit
            additional information mid-cycle. Outcomes arrive in writing: corrected, verified as
            accurate, or updated with an explanatory note, and corrected reports flow to recent
            recipients in many cases.
          </p>
          <p className="mt-3">
            If a bureau verifies an item you can prove wrong, dispute directly with the furnisher
            &mdash; the bank, collector, or servicer &mdash; at its designated dispute address,
            attaching the same evidence plus the bureau response. Furnishers face independent
            accuracy duties and sometimes fix what bureaus rubber-stamped. Keep a log of every
            confirmation number, date, and name. If both layers fail on a genuinely inaccurate
            item, file a Consumer Financial Protection Bureau complaint attaching the full trail;
            CFPB referrals historically produce executive-level reviews that front-line portals do
            not. Throughout, protect yourself with a{" "}
            <Link href="/credit-freeze-vs-fraud-alert" className="text-amber-200 underline underline-offset-2">
              freeze or fraud alert
            </Link>{" "}
            if identity theft is involved.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the duplicated late mark</h2>
          <p className="mt-3">
            Elena finds a 60-day late from March 2025 on her auto loan appearing twice on Experian
            &mdash; once under the lender and once under a servicing-transfer duplicate &mdash;
            suppressing her score roughly 25 points. On October 6 she mails a certified dispute
            identifying both tradelines by account number, attaching the lender letter confirming a
            single account and twelve months of on-time bank records. Experian investigates,
            contacts the servicer, and deletes the duplicate on October 28, day 22. Her file now
            shows one late mark instead of two, recovering about 15 points at the next refresh.
            She then disputes directly with the servicer for the remaining mark documentation and
            files the outcome letter for a future mortgage file. Total cost: certified mail and
            two evenings. Contrast disputes of accurate data, which return verified with zero gain
            and a frivolous-dispute notation after repeats &mdash; precision beats volume.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">After the win: monitoring and goodwill</h2>
          <p className="mt-3">
            Recheck all three reports 45 to 60 days after corrections to confirm the fix persisted
            across bureaus, since furnishers update each bureau separately and lags happen. For
            accurate negatives that remain, the honest tool is a goodwill request &mdash; a polite
            letter to the creditor asking for removal after sustained clean history &mdash; which
            sometimes succeeds and costs nothing, unlike pay dispute mills. Long-term, free weekly
            monitoring via AnnualCreditReport.com plus a standing freeze blocks most recurrence of
            identity-driven errors. Broader borrowing context, including how lenders read corrected
            files, is covered on{" "}
            <a href="https://guides.loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How long do investigations take?</h3>
              <p className="mt-1">Generally 30 days from receipt, up to 45 if you add information mid-investigation. You receive written results.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do disputes hurt my score?</h3>
              <p className="mt-1">Filing has no direct scoring penalty. Some mortgage underwriting pauses while disputes are open, so time disputes before rate shopping.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I use a repair company?</h3>
              <p className="mt-1">No company has special deletion powers. They file the same free disputes you can file, and upfront-fee promises violate federal rules.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What if the bureau says verified?</h3>
              <p className="mt-1">Dispute directly with the furnisher, then escalate to the CFPB with your paper trail. Consider legal consultation for willful inaccuracies.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Procedures follow the FCRA and bureau
            practices as of October 2026. Read our full{" "}
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
