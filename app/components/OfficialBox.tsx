import type { ReactElement } from "react";

type OfficialBoxProps = {
  govHref?: string;
  govLabel?: string;
  govDesc?: string;
};

const ACR_HREF = "https://www.annualcreditreport.com/index.action";
const DEFAULT_GOV_HREF =
  "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-report-en-309/";

export function OfficialBox({
  govHref = DEFAULT_GOV_HREF,
  govLabel = "CFPB — What is a credit report?",
  govDesc = "Federal explainer on what reports contain and how they are used.",
}: OfficialBoxProps): ReactElement {
  return (
    <section
      aria-label="Official sources"
      className="glass-card rounded-2xl p-6 sm:p-8"
    >
      <h2 className="text-xl font-bold text-white">Official sources</h2>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
        <li>
          <a
            href={govHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-200 underline underline-offset-2 transition hover:text-amber-100"
          >
            {govLabel}
          </a>
          <p className="mt-1 text-xs text-slate-400">{govDesc}</p>
        </li>
        <li>
          <a
            href={ACR_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-200 underline underline-offset-2 transition hover:text-amber-100"
          >
            AnnualCreditReport.com — Request your free reports
          </a>
          <p className="mt-1 text-xs text-slate-400">
            The federally authorized portal for free weekly reports from all
            three bureaus.
          </p>
        </li>
      </ul>
    </section>
  );
}
