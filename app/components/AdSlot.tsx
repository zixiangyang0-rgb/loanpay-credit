"use client";

import { useEffect, useRef } from "react";

const CLIENT = "ca-pub-4906207495792820";

export type AdFormat = "display" | "in-article" | "multiplex" | "anchor";

type AdSlotProps = {
  format: AdFormat;
  slot: string;
  className?: string;
  minHeight?: number;
  label?: string;
};

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

function isDev(): boolean {
  return process.env.NODE_ENV !== "production";
}

export function isNpa(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem("credit-consent") === "npa";
  } catch {
    return false;
  }
}

export default function AdSlot({ format, slot, className = "", minHeight, label }: AdSlotProps) {
  const ref = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  const height = minHeight ?? (format === "multiplex" ? 250 : format === "in-article" ? 280 : format === "anchor" ? 90 : 250);

  useEffect(() => {
    if (isDev()) return;
    if (pushed.current) return;
    pushed.current = true;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // AdSense push failures must never break the page.
    }
  }, []);

  const insProps =
    format === "display"
      ? { "data-ad-format": "auto", "data-full-width-responsive": "true" }
      : format === "in-article"
        ? { "data-ad-layout": "in-article", "data-ad-format": "fluid" }
        : format === "multiplex"
          ? { "data-ad-format": "autorelaxed" }
          : { "data-ad-format": "anchor" };

  const anchorStyle = format === "anchor" ? { position: "fixed" as const, bottom: 0, left: 0, right: 0, zIndex: 40 } : undefined;

  if (isDev()) {
    return (
      <div
        aria-hidden="true"
        className={`flex items-center justify-center rounded-xl border border-dashed border-amber-200/40 bg-amber-200/5 text-xs text-amber-100/80 ${className}`}
        style={{ minHeight: height }}
      >
        AdSlot · {format} · {slot}
        {label ? ` · ${label}` : ""}
      </div>
    );
  }

  return (
    <div className={`ad-slot ad-slot-${format} ${className}`} style={{ minHeight: height, ...anchorStyle }}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", minHeight: height }}
        data-ad-client={CLIENT}
        data-ad-slot={slot}
        data-npa={isNpa() ? "1" : undefined}
        {...insProps}
      />
    </div>
  );
}
