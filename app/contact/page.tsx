import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | LoanPay Credit",
  description: "Contact LoanPay Credit with corrections, questions, or feedback.",
  alternates: { canonical: "https://credit.loanpaylogic.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Questions, corrections, or feedback about credit.loanpaylogic.com? Email us at
        support@loanpaylogic.com. We read every message and prioritize factual corrections.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Please do not send account numbers, Social Security numbers, or full card details. We
        cannot give personalized financial advice, but we can fix errors and consider topic
        requests for future guides.
      </p>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        This is general education, not financial advice. See our{" "}
        <Link href="/disclaimer" className="underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
