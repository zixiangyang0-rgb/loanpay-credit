import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LoanPay Credit",
  description:
    "Privacy policy for credit.loanpaylogic.com: what we collect, cookies and AdSense, and your choices.",
  alternates: { canonical: "https://credit.loanpaylogic.com/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-xs text-slate-500">Updated: October 2026</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Credit (credit.loanpaylogic.com) publishes educational credit guides. We collect
        minimal data: basic server logs and, if you email us, your message and address so we can
        reply. We do not sell personal information and do not ask for Social Security numbers or
        card numbers.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We use Google AdSense to support free content. Google may use cookies and similar
        technologies to serve and measure ads, including personalized advertising where permitted.
        You can manage ad personalization in your Google ad settings and browser cookie controls.
        Analytics, if enabled, is used only in aggregate to improve guides.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Contact support@loanpaylogic.com with privacy questions or deletion requests, and we will
        respond within a reasonable time.
      </p>
    </div>
  );
}
