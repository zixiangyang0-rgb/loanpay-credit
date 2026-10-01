import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd, Byline, FaqJsonLd } from "../components/schema";

export const metadata: Metadata = {
  title: "Authorized User Guide: Benefits, Risks & Removal | LoanPay Credit",
  description:
    "How becoming an authorized user builds credit — piggybacking rules, risks for both sides, and how to leave — with examples and FAQs.",
  alternates: { canonical: "https://credit.loanpaylogic.com/authorized-user-guide" },
};

export default function AuthorizedUserPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Authorized User Guide: Benefits, Risks & Removal | LoanPay Credit" description="How becoming an authorized user builds credit — piggybacking rules, risks for both sides, and how to leave — with examples and FAQs." slug="/authorized-user-guide" />
      <FaqJsonLd items={[{"q":"Am I liable for the balance?","a":"Generally no. The primary holder owes the debt. Some issuers allow shared-liability variants, so confirm terms in writing."},{"q":"Can removal hurt me?","a":"Yes, if the tradeline was your oldest or largest limit. Build primary history alongside so departure causes only a mild dip."},{"q":"Do all issuers report authorized users?","a":"No. Most major consumer issuers do, but bureau coverage varies. Confirm reporting to all three bureaus before relying on it."},{"q":"How fast does it appear?","a":"Usually one to two statement cycles after addition, depending on issuer reporting dates and bureau processing."}]} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Building &middot; Tradelines
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Authorized Users: Piggybacking Done Right
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Joining a trusted person card can import years of clean history overnight &mdash; or
          import their missed payments just as fast. Learn the rules, the risks for both sides,
          and the exit path before sharing any account.
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
            <li>The full account history often appears on the authorized user file.</li>
            <li>Choose seasoned, low-utilization, never-late accounts only.</li>
            <li>Authorized users generally are not liable for the debt.</li>
            <li>Primary owners risk their own utilization and exposure from extra cards.</li>
            <li>Removal is free and usually clears the tradeline within a cycle or two.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Compare with joint ownership:{" "}
            <Link href="/joint-account-vs-authorized-user" className="text-amber-200 underline underline-offset-2">
              joint vs. authorized user
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How piggybacking reports</h2>
          <p className="mt-3">
            When a primary cardholder adds an authorized user, most major issuers report the
            account to the authorized user bureau files with its full history: opening date,
            limit, monthly balances, and payment record. A 2016 account with a 15,000-dollar limit
            and perfect payments can therefore hand a beginner eight-plus years of age and a thick
            limit cushion in a single cycle. FICO models include authorized-user tradelines in
            scoring while applying anti-abuse weighting, so seasoned genuine relationships count
            while purchased tradeline schemes are discounted and violate lender and issuer terms.
            Not every issuer reports authorized users to all three bureaus, and a few report only
            limited data, so confirm the issuer reporting policy before counting on the strategy.
            Business cards and some charge products report differently again, covered in our{" "}
            <Link href="/business-credit-cards-basics" className="text-amber-200 underline underline-offset-2">
              business-card basics
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Which host accounts help versus harm an authorized user.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Host account trait</th>
                  <th className="px-4 py-3 font-semibold">Effect</th>
                  <th className="px-4 py-3 font-semibold">Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">5+ years old, under 10% utilization, never late</td><td className="px-4 py-2">Age, limit, clean streak</td><td className="px-4 py-2">Ideal host</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">1 year old, moderate balances</td><td className="px-4 py-2">Mild positive</td><td className="px-4 py-2">Acceptable</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">High utilization host</td><td className="px-4 py-2">Imports high ratios</td><td className="px-4 py-2">Decline</td></tr>
                <tr><td className="px-4 py-2">Any recent late marks</td><td className="px-4 py-2">Imports delinquency</td><td className="px-4 py-2">Hard decline</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Rules for guests and hosts</h2>
          <p className="mt-3">
            Guests should accept only invitations from hosts whose finances they know intimately
            &mdash; typically parents &mdash; inspect the host payment record first, and agree in
            writing whether the physical card will even be issued or held unused by the host. Many
            successful arrangements never cut a guest card at all; reporting flows from the
            tradeline, not the plastic. Hosts should add users only while the account is pristine,
            set a low guest spending cap where the issuer allows, and monitor statements, because
            every guest dollar is legally the host debt and every host late mark lands on the guest
            file. Either party can request removal at any time through the issuer, generally
            without the other consent, and the tradeline typically stops reporting within one to
            two cycles. Never pay a stranger for tradeline rental: issuers close manipulated
            accounts, lenders disregard purchased lines on manual review, and the arrangement can
            constitute fraud.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the graduation gift that works</h2>
          <p className="mt-3">
            A college graduate with a six-month 620 file joins a parent 2017 card with a
            12,000-dollar limit, 800-dollar typical balances, and zero late marks. Next cycle the
            graduate file gains an eight-year tradeline and 6,200 dollars of additional available
            credit, dropping overall utilization from 41 to 17 percent while average age more than
            triples. The score rises from 620 to roughly 668 within two cycles &mdash; not
            mortgage-ready alone, but enough to qualify for a no-fee starter card of her own,
            which she opens and manages independently per our{" "}
            <Link href="/building-credit-from-zero" className="text-amber-200 underline underline-offset-2">
              from-zero plan
            </Link>
            . Eighteen months later she voluntarily leaves the parent card with her own 18-month
            clean tradeline established. Contrast a friend who piggybacks on a maxed 2024 account
            with two recent lates: his file imports 89 percent utilization and fresh delinquency,
            falling 30 points. Same mechanism, opposite host selection.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Limits lenders see through</h2>
          <p className="mt-3">
            Mortgage underwriters in particular discount authorized-user tradelines during manual
            review, sometimes requiring proof the guest actually pays the account or excluding the
            tradeline from qualification calculations. That does not make piggybacking useless
            &mdash; automated approvals, card applications, and insurance scoring generally count
            it &mdash; but it means authorized-user history should be a bridge to primary history,
            never the whole file. Pair it from day one with a secured card or builder loan in your
            own name so removal never collapses the file. Guidance on sequencing primary products
            lives on{" "}
            <a href="https://guides.loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <AdSlot format="in-article" slot="TODO-credit-article-mid" />

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Am I liable for the balance?</summary>
              <p className="mt-2">Generally no. The primary holder owes the debt. Some issuers allow shared-liability variants, so confirm terms in writing.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can removal hurt me?</summary>
              <p className="mt-2">Yes, if the tradeline was your oldest or largest limit. Build primary history alongside so departure causes only a mild dip.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do all issuers report authorized users?</summary>
              <p className="mt-2">No. Most major consumer issuers do, but bureau coverage varies. Confirm reporting to all three bureaus before relying on it.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How fast does it appear?</summary>
              <p className="mt-2">Usually one to two statement cycles after addition, depending on issuer reporting dates and bureau processing.</p>
            </details>
          </div>
        </section>

        <AdSlot format="multiplex" slot="TODO-credit-article-bottom" />

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Issuer reporting policies change;
            verify with the card issuer. Read our full{" "}
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
