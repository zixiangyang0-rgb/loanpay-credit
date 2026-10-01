import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | LoanPay Credit",
  description: "Terms of use for credit.loanpaylogic.com.",
  alternates: { canonical: "https://credit.loanpaylogic.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Terms of Use</h1>
      <p className="mt-2 text-xs text-slate-500">Updated: October 2026</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        By using credit.loanpaylogic.com you agree that all content is for general education
        only and is not financial, legal, or tax advice. You use the site at your own risk and
        agree not to rely on guides as a substitute for professional advice suited to your
        situation.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Content is provided &ldquo;as is&rdquo; without warranties of completeness, accuracy, or
        timeliness. Issuer terms, score models, and bureau procedures change; verify current terms
        with the issuer or bureau before applying. You agree not to misuse the site, attempt to
        disrupt it, or copy content at scale without permission.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Contact support@loanpaylogic.com with questions about these terms.
      </p>
    </div>
  );
}
