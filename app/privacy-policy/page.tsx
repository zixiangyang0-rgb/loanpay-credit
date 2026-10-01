import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | LoanPay Credit",
  description:
    "Privacy policy for credit.loanpaylogic.com: what we collect, cookies and Google AdSense, consent choices (including non-personalized ads), and contact.",
  alternates: { canonical: "https://credit.loanpaylogic.com/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-xs text-slate-500">Updated: October 2026</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Credit (credit.loanpaylogic.com) publishes free educational credit guides. This
        policy explains what we collect, how cookies and Google AdSense advertising work on this
        site, and the choices you have. General education only — see our{" "}
        <Link href="/disclaimer" className="underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>

      <h2 className="mt-8 text-xl font-bold text-white">1. What we collect</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
        <li>
          Basic server and security logs (e.g. requested pages, timestamps, coarse
          technical data) used to operate, secure, and debug the site.
        </li>
        <li>
          Messages you send to support@loanpaylogic.com (your address and message content) so we
          can reply and fix errors.
        </li>
        <li>
          Consent preference stored locally in your browser (<code>credit-consent</code>:
          accepted / npa / rejected) so we remember your ads choice.
        </li>
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We do not ask for Social Security numbers or card numbers, do not run accounts or
        sign-ups, and do not sell personal information.
      </p>

      <h2 className="mt-8 text-xl font-bold text-white">2. Cookies &amp; Google AdSense</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Free content is supported by Google AdSense (publisher ID ca-pub-4906207495792820).
        Google and its partners may use cookies and similar technologies to serve, measure, and
        improve ads — including personalized advertising where you permit it. Non-personalized
        ads (npa) may still use coarse context such as the page topic, but not interest-based
        profiling.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
        <li>
          How Google uses data when you use partner sites:{" "}
          <a
            href="https://business.safety.google/partners/"
            className="underline underline-offset-2"
            rel="noopener"
          >
            business.safety.google/partners
          </a>
          .
        </li>
        <li>
          Manage ad personalization:{" "}
          <a
            href="https://adssettings.google.com/"
            className="underline underline-offset-2"
            rel="noopener"
          >
            Google Ad Settings
          </a>{" "}
          and your browser cookie controls.
        </li>
        <li>
          EU/UK/CH visitors: consent is collected through Google Funding Choices (our certified
          CMP) where deployed, supplemented by the on-site preference banner.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-white">3. Your choices</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
        <li>Use the on-site banner: Accept, Non-personalized only (npa), or Reject.</li>
        <li>
          Change your mind anytime by clearing the <code>credit-consent</code> site-data entry
          in your browser and reloading — the banner will reappear.
        </li>
        <li>Block or delete cookies in your browser settings; the site remains readable.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-white">4. Data sharing &amp; retention</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        We share data only as needed to run the site (hosting/security providers) and with
        Google for ad delivery/measurement as described above. Server logs rotate routinely;
        support emails are kept only as long as needed to respond and maintain quality records.
      </p>

      <h2 className="mt-8 text-xl font-bold text-white">5. Contact</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Privacy questions or deletion requests: support@loanpaylogic.com. We respond within a
        reasonable time.
      </p>
    </div>
  );
}
