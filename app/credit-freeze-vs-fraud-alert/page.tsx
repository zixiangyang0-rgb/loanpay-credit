import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd, Byline, FaqJsonLd } from "../components/schema";

export const metadata: Metadata = {
  title: "Credit Freeze vs. Fraud Alert: Which Protection Fits? | LoanPay Credit",
  description:
    "Compare credit freezes and fraud alerts — duration, cost, setup, and when to use each — with a side-by-side table and worked scenarios.",
  alternates: { canonical: "https://credit.loanpaylogic.com/credit-freeze-vs-fraud-alert" },
};

export default function FreezeVsAlertPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Credit Freeze vs. Fraud Alert: Which Protection Fits? | LoanPay Credit" description="Compare credit freezes and fraud alerts — duration, cost, setup, and when to use each — with a side-by-side table and worked scenarios." slug="/credit-freeze-vs-fraud-alert" />
      <FaqJsonLd items={[{"q":"Does freezing hurt my score?","a":"No. Freezes and alerts change file access, not file contents, so scoring is unaffected."},{"q":"Can I have both at once?","a":"Yes, and confirmed victims should. The freeze blocks pulls; the alert adds verification where pulls still occur."},{"q":"How fast do lifts work?","a":"Often within an hour online, but plan a full day before applications in case of credential or caching delays."},{"q":"Should children be frozen?","a":"Parents can generally freeze a child file where one exists. A file existing for a young child warrants scrutiny for misuse."}]} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Reports &middot; Protection
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Credit Freeze vs. Fraud Alert: Choosing Your Shield
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Both tools are free and both fight identity theft &mdash; but they work differently. A
          freeze locks the file; an alert flags it. Compare duration, setup, and daily impact, then
          pick the right shield for your situation.
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
            <li>Freezes block most new-credit pulls until you lift them; strongest default.</li>
            <li>Initial fraud alerts last one year; extended alerts last seven with a police or FTC report.</li>
            <li>Freeze each bureau separately; one alert call notifies all three.</li>
            <li>Frozen files need temporary lifts before applications &mdash; plan a day ahead.</li>
            <li>After confirmed theft, use both plus disputes and a CFPB trail.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Spot theft first:{" "}
            <Link href="/free-credit-report-guide" className="text-amber-200 underline underline-offset-2">
              free report guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What each tool does</h2>
          <p className="mt-3">
            A security freeze restricts access to your bureau file so most lenders cannot pull it
            to open new credit &mdash; and without a pull, most fraudulent applications die
            immediately. Federal law makes freezes free to place, lift, and remove, and they stay
            until you remove them. Existing creditors, debt collectors on your accounts, and certain
            government uses can still access frozen files, and your own monitoring continues
            normally. A fraud alert instead attaches a notice asking potential creditors to take
            extra verification steps before opening accounts. Initial alerts last one year and suit
            suspected exposure; extended alerts last seven years and require an identity-theft
            report, suiting confirmed victims. Active-duty military members have a dedicated alert
            lasting twelve months, renewable during deployment.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Freeze versus alert, side by side.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Credit freeze</th>
                  <th className="px-4 py-3 font-semibold">Fraud alert</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Cost</td><td className="px-4 py-2">Free, all bureaus</td><td className="px-4 py-2">Free</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Duration</td><td className="px-4 py-2">Until removed</td><td className="px-4 py-2">1 yr initial; 7 yr extended</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Setup</td><td className="px-4 py-2">Contact each bureau</td><td className="px-4 py-2">One call notifies all three</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Strength</td><td className="px-4 py-2">Blocks most pulls</td><td className="px-4 py-2">Requests verification</td></tr>
                <tr><td className="px-4 py-2">Daily friction</td><td className="px-4 py-2">Lift before applications</td><td className="px-4 py-2">Possible verification calls</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Setup walkthrough</h2>
          <p className="mt-3">
            Freezing means three separate placements &mdash; Equifax, Experian, and TransUnion each
            host online freeze portals plus phone and mail options &mdash; with PIN or account
            credentials to manage later. Store those credentials in a password manager; losing them
            turns a two-minute lift into a mailed-identity ordeal. Thawing offers two modes: a
            temporary lift for a date range when rate shopping, or a lift for a specific creditor.
            Allow at least a day before applications, since lifts can take effect within an hour
            but creditor systems cache statuses. Fraud alerts need only one bureau call, as that
            bureau must notify the other two; keep the confirmation letter as proof. Extended
            alerts require attaching the FTC identity-theft report from IdentityTheft.gov or a
            police report. Innovis and ChexSystems, smaller agencies lenders and banks also use,
            deserve parallel freezes for thorough coverage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked scenarios: three situations</h2>
          <p className="mt-3">
            Situation one: data-breach notice, no fraud yet. Dana places freezes at all three
            bureaus in 25 minutes, keeps credentials stored, and adds calendar lifts only when
            refinancing a year later. Cost: zero. Fraudulent applications: none possible without
            lifts. Situation two: wallet stolen with cards and license. Marcus freezes everything,
            places an initial one-year alert, and files disputes under our{" "}
            <Link href="/how-to-dispute-credit-report-errors" className="text-amber-200 underline underline-offset-2">
              dispute process
            </Link>{" "}
            for the two unfamiliar inquiries that appear. Situation three: confirmed account
            takeover with a police report. Elena upgrades to a seven-year extended alert, keeps
            freezes permanent with targeted lifts, and routes mortgage shopping through a one-week
            lift window coordinated with her loan officer &mdash; preparation our mortgage-linked
            guide on{" "}
            <a href="https://guides.loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              guides.loanpaylogic.com
            </a>{" "}
            details. Each tier matches protection to evidence without paying for monitoring that
            freezes already outperform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Living with a freeze</h2>
          <p className="mt-3">
            Daily life on a frozen file feels identical: existing cards work, autopay runs,
            monitoring updates, and scores calculate normally. Friction appears only at new-credit
            moments &mdash; card applications, auto loans, mortgages, apartment leases, some job
            screens, and utility setups &mdash; where a forgotten freeze produces a denied pull and
            a wasted hard inquiry, as our{" "}
            <Link href="/how-long-hard-inquiries-last" className="text-amber-200 underline underline-offset-2">
              inquiry guide
            </Link>{" "}
            explains. The routine is simple: ask which bureau the creditor pulls, lift exactly
            that file for the application week, and refreeze after approval. Landlords and insurers
            adapt readily when told a lift is coming. The minor planning overhead buys the
            strongest free identity protection available.
          </p>
        </section>

        <AdSlot format="in-article" slot="TODO-credit-article-mid" />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does freezing hurt my score?</summary>
              <p className="mt-2">No. Freezes and alerts change file access, not file contents, so scoring is unaffected.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I have both at once?</summary>
              <p className="mt-2">Yes, and confirmed victims should. The freeze blocks pulls; the alert adds verification where pulls still occur.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How fast do lifts work?</summary>
              <p className="mt-2">Often within an hour online, but plan a full day before applications in case of credential or caching delays.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should children be frozen?</summary>
              <p className="mt-2">Parents can generally freeze a child file where one exists. A file existing for a young child warrants scrutiny for misuse.</p>
            </details>
          </div>
        </section>

        <AdSlot format="multiplex" slot="TODO-credit-article-bottom" />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Bureau procedures change; verify
            current freeze portals before acting. Read our full{" "}
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
