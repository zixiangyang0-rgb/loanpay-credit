import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd, Byline, FaqJsonLd } from "../components/schema";

export const metadata: Metadata = {
  title: "Cosigner Credit Impact: Risks, Liability & Exit Options | LoanPay Credit",
  description:
    "What cosigning does to your credit — equal liability, late-payment spillover, DTI effects — plus release and exit options, with examples and FAQs.",
  alternates: { canonical: "https://credit.loanpaylogic.com/cosigner-credit-impact" },
};

export default function CosignerPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Cosigner Credit Impact: Risks, Liability & Exit Options | LoanPay Credit" description="What cosigning does to your credit — equal liability, late-payment spillover, DTI effects — plus release and exit options, with examples and FAQs." slug="/cosigner-credit-impact" />
      <FaqJsonLd items={[{"q":"Can I stop being a cosigner anytime?","a":"No. Unilateral exit is generally impossible. Release requires lender approval, refinancing, or full payoff."},{"q":"Does cosigning hurt my DTI?","a":"Yes. The full payment counts in your ratios for mortgages and other loans, even with perfect borrower payments."},{"q":"Cosigner vs. co-borrower?","a":"Functionally similar liability. Co-borrowers typically share account access and benefit; cosigners guarantee without using the asset."},{"q":"What beats cosigning?","a":"Down-payment gifts, secured-card funding, builder-loan sponsorship, or authorized-user history — help that cannot metastasize into your DTI."}]} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Building &middot; Shared liability
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Cosigning: Equal Liability, Real Score Consequences
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A cosigner signature is a full promise to pay &mdash; reported in full on your file,
          counted in full in your debt ratios. Understand the mechanics, the relationship risks,
          and the exit routes before signing anything.
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
            <li>Cosigners owe 100% of the debt and show 100% on their reports.</li>
            <li>Every late mark hits the cosigner file exactly like the borrower file.</li>
            <li>The payment counts in your debt-to-income ratio for your own loans.</li>
            <li>Release usually requires refinancing, sale, or lender-approved release.</li>
            <li>Helping with a down payment or secured card often beats cosigning.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Lighter alternative:{" "}
            <Link href="/authorized-user-guide" className="text-amber-200 underline underline-offset-2">
              authorized users
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What the signature creates</h2>
          <p className="mt-3">
            Cosigning attaches a second fully liable party to one obligation &mdash; common on
            student loans, auto loans, and first apartments where the primary borrower lacks
            history or income. Unlike authorized-user status, cosigner liability is legally equal:
            the lender may pursue either party for the full balance, and most agreements allow
            pursuing the cosigner without exhausting remedies against the borrower. Reporting is
            equally full: balance, payment string, and any derogatory marks appear on both files
            identically, and the monthly obligation enters both debt-to-income calculations for
            future underwriting. A cosigned 25,000-dollar auto loan at 450 dollars monthly can
            therefore erase a cosigner own mortgage eligibility at the margin, even while the
            borrower pays perfectly.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Shared-credit roles compared.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Role</th>
                  <th className="px-4 py-3 font-semibold">Liability</th>
                  <th className="px-4 py-3 font-semibold">Reporting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Cosigner</td><td className="px-4 py-2">Full, equal</td><td className="px-4 py-2">Full tradeline, both files</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Joint holder</td><td className="px-4 py-2">Full, equal</td><td className="px-4 py-2">Full tradeline, both files</td></tr>
                <tr><td className="px-4 py-2">Authorized user</td><td className="px-4 py-2">Generally none</td><td className="px-4 py-2">Tradeline shown, no debt owed</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How borrower behavior reaches your score</h2>
          <p className="mt-3">
            Every reporting event on the shared account posts to both files: on-time streaks help
            both, 30-day marks wound both per our{" "}
            <Link href="/missed-payment-credit-impact" className="text-amber-200 underline underline-offset-2">
              late-payment scale
            </Link>
            , and collections pursue both. Cosigners often learn of trouble from monitoring alerts
            rather than the borrower, since embarrassment delays disclosure; set up independent
            alerts on the account from day one rather than relying on promises to tell you. The
            hard inquiry at origination also lands on the cosigner file. Over the loan life, the
            cosigner debt load suppresses the cosigner own borrowing capacity in ways that surprise
            parents mid-mortgage-refinance. None of this implies cosigning is always wrong &mdash;
            many families use it successfully &mdash; but it must be underwritten like your own
            loan, because legally it is.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the cosigned auto loan</h2>
          <p className="mt-3">
            Robert cosigns a 22,000-dollar auto loan for his son at 9.5 percent over 60 months,
            payment 463 dollars. Year one runs clean and both files gain an installment tradeline.
            In month 14 the son misses two payments during unemployment; both files absorb 30- and
            60-day marks, Robert score falling from 776 to 694. When Robert refinances his own
            mortgage in month 16, the 463-dollar obligation plus the fresh marks cost him roughly
            0.375 points in rate &mdash; about 65 dollars monthly on his balance &mdash; until the
            marks age. Total family cost of two missed 463-dollar payments: thousands in rate
            differential. The alternative &mdash; Robert gifting three payments from savings while
            requiring autopay setup &mdash; would have cost 1,389 dollars once and preserved both
            files. Cosigner protection means monitoring plus a cash reserve, not just good
            intentions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Exits: release, refinance, or pay down</h2>
          <p className="mt-3">
            Cosigner release clauses exist on some private student and auto loans after 24 to 48
            consecutive on-time payments plus a borrower income and credit recheck &mdash; read the
            original note for exact terms, since many loans omit release entirely. Refinancing into
            the borrower name alone is the common exit once the borrower history supports it;
            track progress with our{" "}
            <Link href="/building-credit-from-zero" className="text-amber-200 underline underline-offset-2">
              building timeline
            </Link>
            . Selling the collateral and clearing the loan ends auto cosigning cleanly. Partial
            paydowns help borrowing capacity but never sever liability; only full satisfaction,
            release approval, or refinance ends the obligation. Document every exit in writing and
            verify all three bureaus show the tradeline closed or transferred within 60 days via
            our{" "}
            <Link href="/free-credit-report-guide" className="text-amber-200 underline underline-offset-2">
              report checklist
            </Link>
            . Debt-structure context lives on{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <AdSlot format="in-article" slot="TODO-credit-article-mid" />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I stop being a cosigner anytime?</summary>
              <p className="mt-2">No. Unilateral exit is generally impossible. Release requires lender approval, refinancing, or full payoff.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does cosigning hurt my DTI?</summary>
              <p className="mt-2">Yes. The full payment counts in your ratios for mortgages and other loans, even with perfect borrower payments.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Cosigner vs. co-borrower?</summary>
              <p className="mt-2">Functionally similar liability. Co-borrowers typically share account access and benefit; cosigners guarantee without using the asset.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What beats cosigning?</summary>
              <p className="mt-2">Down-payment gifts, secured-card funding, builder-loan sponsorship, or authorized-user history — help that cannot metastasize into your DTI.</p>
            </details>
          </div>
        </section>

        <AdSlot format="multiplex" slot="TODO-credit-article-bottom" />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Loan terms and release policies vary;
            read the note before signing. Read our full{" "}
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
