import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://credit.loanpaylogic.com"),
  title: {
    default: "LoanPay Credit | Credit Scores, Cards & Reports Explained",
    template: "%s | LoanPay Credit",
  },
  description:
    "LoanPay Credit offers plain-English United States guides to credit scores, credit cards, credit reports, and building credit — educational content for smarter borrowing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LoanPay Credit | Credit Scores, Cards & Reports Explained",
    description:
      "Understand credit scores, compare card types, read your reports, and build credit step by step with free educational guides.",
    url: "https://credit.loanpaylogic.com",
    siteName: "LoanPay Credit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Credit | Credit Scores, Cards & Reports Explained",
    description:
      "Understand credit scores, compare card types, read your reports, and build credit step by step with free educational guides.",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
      <Link href="/" className="text-lg font-bold tracking-tight">
        LoanPay <span className="text-gradient">Credit</span>
      </Link>
      <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 pb-10 pt-6 text-sm text-slate-400">
      <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
      <p className="mt-4">
        &copy; {new Date().getFullYear()} credit.loanpaylogic.com. General education only, not
        financial advice.
      </p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
