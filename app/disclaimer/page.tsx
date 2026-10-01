import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | LoanPay Credit",
  description:
    "Disclaimer for credit.loanpaylogic.com: educational content only, not professional financial advice.",
  alternates: { canonical: "https://credit.loanpaylogic.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Everything published on credit.loanpaylogic.com is for general education and illustration
        only. It is not financial advice, legal advice, or tax advice, and it does not create a
        professional-client relationship.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Credit scoring, card terms, bureau procedures, and consumer-protection rules change
        frequently and depend on your full profile, income, state, and goals. Our simplified
        guides cannot reflect every issuer exception or scoring-model nuance. Before applying for
        credit, disputing information, or freezing your files, verify the current rules with the
        relevant issuer, bureau, or the Consumer Financial Protection Bureau, or consult a
        qualified professional.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We work to keep guides accurate, but we make no warranty of completeness or timeliness. If
        you spot an error, please tell us at support@loanpaylogic.com so we can correct it.
      </p>
    </div>
  );
}
