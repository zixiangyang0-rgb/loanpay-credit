import type { ReactElement } from "react";

const BASE = "https://credit.loanpaylogic.com";
const ORG_NAME = "LoanPay Credit";

export function SiteOrgJsonLd(): ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: ORG_NAME,
        url: BASE,
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: ORG_NAME,
        publisher: { "@id": `${BASE}/#organization` },
      },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

type ArticleProps = {
  title: string;
  description: string;
  slug: string;
};

export function ArticleJsonLd({ title, description, slug }: ArticleProps): ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Organization", name: ORG_NAME, url: BASE },
    publisher: { "@type": "Organization", name: ORG_NAME, url: BASE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}${slug}` },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export type FaqItem = { q: string; a: string };

export function FaqJsonLd({ items }: { items: FaqItem[] }): ReactElement | null {
  if (items.length === 0) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function Byline({ updated = "October 2026" }: { updated?: string }): ReactElement {
  return (
    <p className="mt-3 text-xs text-slate-500">
      By <span className="font-medium text-slate-300">LoanPay Credit Editorial Team</span>
      <span aria-hidden="true"> · </span>Updated: {updated}
    </p>
  );
}
