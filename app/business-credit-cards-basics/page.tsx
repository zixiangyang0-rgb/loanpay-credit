import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Credit Cards Basics: EIN, Reporting & Liability | LoanPay Credit",
  description:
    "Business credit cards explained — EIN vs. SSN applications, personal guarantees, bureau reporting quirks, and separating business spend — with examples.",
  alternates: { canonical: "https://credit.loanpaylogic.com/business-credit-cards-basics" },
};

export default function BusinessCardsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Cards &middot; Business
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Business Credit Cards: What Owners Must Know First
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Business cards separate spending, earn category rewards, and usually hide balances from
          personal reports &mdash; but the personal guarantee means your own file still rides
          along. Learn the application, reporting, and liability mechanics.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 60-second version</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Sole proprietors can apply with just an SSN; EINs help but are rarely mandatory.</li>
            <li>Almost all small-business cards require a personal guarantee.</li>
            <li>Most issuers report only to business bureaus unless you default &mdash; policies vary.</li>
            <li>Separate all business spend for clean books and defensible deductions.</li>
            <li>Employee cards centralize control but extend your liability to their charges.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Rewards refresher:{" "}
            <Link href="/cash-back-vs-travel-rewards" className="text-amber-200 underline underline-offset-2">
              cash vs. travel rewards
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Applying without a corporation</h2>
          <p className="mt-3">
            Issuers define business broadly: freelancers, gig workers, landlords, resellers, and
            pre-revenue founders generally qualify as sole proprietors using their SSN and doing
            business under their own name. Applications ask for business revenue, years in
            operation, and monthly spend &mdash; honest estimates are expected, including zero for
            brand-new ventures where permitted. An Employer Identification Number from the IRS,
            free in minutes, strengthens the application and separates tax identity but seldom
            decides approval alone. Underwriting weights personal scores heavily, typically
            670-plus for mainstream business products, because the personal guarantee makes the
            owner the ultimate collateral. One hard inquiry generally lands on the personal file
            per our{" "}
            <Link href="/how-long-hard-inquiries-last" className="text-amber-200 underline underline-offset-2">
              inquiry timeline
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Business versus personal card mechanics.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Business card</th>
                  <th className="px-4 py-3 font-semibold">Personal card</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Applicant identity</td><td className="px-4 py-2">Business + personal guarantor</td><td className="px-4 py-2">Individual</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Personal-bureau reporting</td><td className="px-4 py-2">Often only negatives; varies</td><td className="px-4 py-2">Full monthly reporting</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Protections</td><td className="px-4 py-2">Weaker CARD Act coverage</td><td className="px-4 py-2">Full CARD Act protections</td></tr>
                <tr><td className="px-4 py-2">Expense tooling</td><td className="px-4 py-2">Employee cards, integrations</td><td className="px-4 py-2">Basic categories</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The reporting quirk that cuts both ways</h2>
          <p className="mt-3">
            Most major issuers report business-card activity to commercial bureaus such as Dun
            and Bradstreet while omitting routine balances from personal files &mdash; a genuine
            advantage for owners carrying large inventory floats that would otherwise spike personal
            utilization. Capital One is the notable exception historically reporting business
            activity to personal bureaus, and Discover similar, so verify current policy before
            assuming invisibility. The shield is one-directional: delinquencies, defaults, and
            personal-guarantee collections reach personal files reliably, and some issuers report
            everything upon any derogatory event. Never run balances on a business card expecting
            personal-file immunity while missing payments; the worst data crosses over first.
            Business credit files themselves build through DUNS numbers, trade lines, and timely
            vendor payments &mdash; a parallel universe worth cultivating once revenue stabilizes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the freelance designer</h2>
          <p className="mt-3">
            Maya, a sole-proprietor designer billing 90,000 dollars yearly, routes 2,500 dollars of
            monthly software, ads, and travel through a no-fee business card earning 2 points per
            dollar on ads plus 1 elsewhere, paying in full. Personal utilization stays untouched by
            the 2,500-dollar float, books reconcile in one export, and yearly rewards near 700
            dollars offset a 95-dollar fee. When a client pays 60 days late, she carries 4,000
            dollars one cycle at 27 percent &mdash; about 90 dollars in interest &mdash; then
            restores full-payment discipline. The card earned its keep through separation and
            rewards, but the guarantee meant her personal score absorbed the higher-balance month
            at issuers that report it. Her rule afterward: an operating buffer covering six weeks
            of card float, so the business card never becomes an emergency loan. Cash-flow planning
            context lives on{" "}
            <a href="https://loanpaylogic.com" className="text-amber-200 underline underline-offset-2">
              loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Liability, employees, and protections gap</h2>
          <p className="mt-3">
            The personal guarantee makes the owner liable for all charges, including employee-card
            spending, which demands caps, category locks, and monthly audits rather than trust
            alone. Business cards also sit partly outside the CARD Act: issuers may change terms
            with less notice and offer narrower dispute windows, so read agreements as contracts
            rather than consumer protections. Keep business and personal spending strictly
            separated &mdash; commingling complicates deductions, pierces liability separation for
            entities, and muddies warranty and return claims. Close unneeded employee cards
            immediately upon role changes rather than at the next review.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can freelancers get business cards?</h3>
              <p className="mt-1">Yes. Sole proprietors with any self-employment income generally qualify using their SSN, with honest revenue estimates.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do balances affect personal utilization?</h3>
              <p className="mt-1">Usually not while current, at most issuers — but delinquencies cross over. Verify the issuer policy since exceptions exist.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are rewards taxable?</h3>
              <p className="mt-1">Rebates on spending are generally treated as discounts, not income, but business-specific situations vary. Confirm with a tax professional.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should startups get the premium card?</h3>
              <p className="mt-1">Rarely at first. Match the fee to proven spend; upgrade once a year of statements shows the break-even clearly.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Issuer reporting and guarantee terms
            change; verify with the card agreement. Read our full{" "}
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
