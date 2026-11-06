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
      <h2 className="mt-8 text-xl font-bold text-white">What to include so we can act fast</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        The reports we resolve fastest all contain three facts: the exact page URL, the sentence
        or number you believe is wrong, and what your own statement or the bureau shows instead.
        A message like &ldquo;the utilization example on /credit-utilization says 30% of a $1,000
        limit is $300 — my statement rounds differently&rdquo; gets verified the same week. A
        message that only says &ldquo;credit info wrong&rdquo; starts a long round of guessing.
        Screenshots with personal details blacked out are welcome and used only for verification.
      </p>
      <h2 className="mt-8 text-xl font-bold text-white">What happens after you write</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Senior Editor Sarah Mitchell triages the inbox each weekday. Factual corrections go to
        Reviewer David Chen, CPA, for same-week verification against issuer pages and CFPB
        publications; confirmed errors are fixed and re-stamped within days. Managing Editor
        Emily Roberts oversees the reply queue and the update cycle, so no correction sits
        longer than a week. Topic requests join
        the planning backlog — reader mail has seeded several of our most-read guides. We aim to
        reply to every substantive message within five business days. We never sell links, sell
        placement, or publish sponsored comparisons; advertising runs through Google AdSense under
        our <Link href="/privacy-policy" className="underline underline-offset-2">privacy policy</Link>.
        <span className="text-slate-400"> Updated: November 2026.</span>
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
