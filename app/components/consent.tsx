"use client";

import { useEffect, useState } from "react";

const KEY = "credit-consent";

type Choice = "accepted" | "npa" | "rejected" | null;

export function getConsent(): Choice {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "accepted" || v === "npa" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

export default function ConsentBanner() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChoice(getConsent());
    setReady(true);
  }, []);

  function save(next: Exclude<Choice, null>) {
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      // storage unavailable — still hide banner for this session
    }
    setChoice(next);
  }

  if (!ready || choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Privacy and ads consent"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-3xl px-4 pb-4"
    >
      <div className="rounded-2xl border border-white/10 bg-slate-900/95 p-5 text-sm text-slate-200 shadow-2xl">
        <p className="font-semibold text-white">We use cookies &amp; Google AdSense ads</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-400">
          Free guides are supported by ads. Choose personalized ads, non-personalized ads (npa),
          or reject. Details in our <a href="/privacy-policy" className="underline underline-offset-2">privacy policy</a>.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => save("accepted")}
            className="rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-amber-200"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => save("npa")}
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-white/30"
          >
            Non-personalized only
          </button>
          <button
            type="button"
            onClick={() => save("rejected")}
            className="rounded-full border border-white/15 px-4 py-2 text-xs text-slate-300 hover:border-white/30"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
