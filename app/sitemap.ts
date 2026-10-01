import type { MetadataRoute } from "next";

const BASE = "https://credit.loanpaylogic.com";

const ROUTES: { url: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  // Scores
  { url: "/credit-score-basics", priority: 0.9, changeFrequency: "monthly" },
  { url: "/how-credit-scores-calculated", priority: 0.9, changeFrequency: "monthly" },
  { url: "/how-to-improve-credit-score-fast", priority: 0.9, changeFrequency: "monthly" },
  { url: "/fico-vs-vantagescore", priority: 0.8, changeFrequency: "monthly" },
  { url: "/how-often-credit-score-updates", priority: 0.8, changeFrequency: "monthly" },
  { url: "/credit-score-home-buying-link", priority: 0.8, changeFrequency: "monthly" },
  // Cards
  { url: "/secured-credit-cards-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/starter-credit-cards-guide-2026", priority: 0.9, changeFrequency: "monthly" },
  { url: "/balance-transfer-cards-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/cash-back-vs-travel-rewards", priority: 0.8, changeFrequency: "monthly" },
  { url: "/store-credit-cards-pros-cons", priority: 0.8, changeFrequency: "monthly" },
  { url: "/business-credit-cards-basics", priority: 0.8, changeFrequency: "monthly" },
  { url: "/credit-utilization-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/credit-limit-increase-guide", priority: 0.8, changeFrequency: "monthly" },
  // Reports & protection
  { url: "/free-credit-report-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/how-to-dispute-credit-report-errors", priority: 0.9, changeFrequency: "monthly" },
  { url: "/credit-freeze-vs-fraud-alert", priority: 0.8, changeFrequency: "monthly" },
  { url: "/how-long-hard-inquiries-last", priority: 0.8, changeFrequency: "monthly" },
  { url: "/missed-payment-credit-impact", priority: 0.8, changeFrequency: "monthly" },
  { url: "/collections-debt-credit-report", priority: 0.8, changeFrequency: "monthly" },
  // Building credit
  { url: "/building-credit-from-zero", priority: 0.9, changeFrequency: "monthly" },
  { url: "/credit-builder-loans-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/authorized-user-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/joint-account-vs-authorized-user", priority: 0.8, changeFrequency: "monthly" },
  { url: "/cosigner-credit-impact", priority: 0.8, changeFrequency: "monthly" },
  // Legal
  { url: "/about", priority: 0.5, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { url: "/privacy-policy", priority: 0.4, changeFrequency: "monthly" },
  { url: "/terms", priority: 0.4, changeFrequency: "monthly" },
  { url: "/disclaimer", priority: 0.4, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-01");
  return ROUTES.map((route) => ({
    url: `${BASE}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
