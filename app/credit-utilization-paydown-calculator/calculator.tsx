"use client";

import { useMemo, useState } from "react";

type CardInput = {
  name: string;
  balance: number;
  limit: number;
};

const DEFAULT_CARDS: CardInput[] = [
  { name: "Card A", balance: 2400, limit: 3000 },
  { name: "Card B", balance: 900, limit: 5000 },
  { name: "Card C", balance: 400, limit: 2000 },
];

function pct(balance: number, limit: number): number {
  if (limit <= 0) return 0;
  return (balance / limit) * 100;
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export default function PaydownCalculator() {
  const [cards, setCards] = useState<CardInput[]>(DEFAULT_CARDS);
  const [payment, setPayment] = useState<number>(1000);

  const overall = useMemo(() => {
    const bal = cards.reduce((s, c) => s + Math.max(0, c.balance), 0);
    const lim = cards.reduce((s, c) => s + Math.max(0, c.limit), 0);
    return { balance: bal, limit: lim, utilization: pct(bal, lim) };
  }, [cards]);

  const plan = useMemo(() => {
    let remaining = Math.max(0, payment);
    const ranked = cards
      .map((c, i) => ({ ...c, index: i, utilization: pct(c.balance, c.limit) }))
      .sort((a, b) => b.utilization - a.utilization);
    const after = ranked.map((c) => {
      const pay = Math.min(remaining, Math.max(0, c.balance));
      remaining -= pay;
      const newBalance = Math.max(0, c.balance) - pay;
      return { ...c, pay, newBalance, newUtilization: pct(newBalance, c.limit) };
    });
    const newTotal = after.reduce((s, c) => s + c.newBalance, 0);
    return { ranked: after, leftover: remaining, newTotal, newOverall: pct(newTotal, overall.limit) };
  }, [cards, payment, overall.limit]);

  function updateCard(index: number, field: "balance" | "limit", value: string) {
    const num = Math.max(0, Number(value) || 0);
    setCards((prev) => prev.map((c, i) => (i === index ? { ...c, [field]: num } : c)));
  }

  function updateName(index: number, value: string) {
    setCards((prev) => prev.map((c, i) => (i === index ? { ...c, name: value || `Card ${i + 1}` } : c)));
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
      <h3 className="text-lg font-bold text-white">Paydown order calculator</h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-400">
        Edit your balances and limits, enter the extra payment you can make this month, and the
        tool ranks cards by per-card utilization so the highest ratio gets paid first.
      </p>

      <div className="mt-5 space-y-4">
        {cards.map((card, i) => (
          <div key={i} className="grid grid-cols-1 gap-3 rounded-xl border border-white/10 p-4 sm:grid-cols-3">
            <label className="block text-xs text-slate-400">
              Card name
              <input
                value={card.name}
                onChange={(e) => updateName(i, e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white"
              />
            </label>
            <label className="block text-xs text-slate-400">
              Balance ($)
              <input
                type="number"
                min={0}
                value={card.balance}
                onChange={(e) => updateCard(i, "balance", e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white"
              />
            </label>
            <label className="block text-xs text-slate-400">
              Credit limit ($)
              <input
                type="number"
                min={0}
                value={card.limit}
                onChange={(e) => updateCard(i, "limit", e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white"
              />
            </label>
          </div>
        ))}
      </div>

      <label className="mt-5 block text-xs text-slate-400">
        Extra payment available this month ($)
        <input
          type="number"
          min={0}
          value={payment}
          onChange={(e) => setPayment(Math.max(0, Number(e.target.value) || 0))}
          className="mt-1 w-full max-w-xs rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white"
        />
      </label>

      <div className="mt-5 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
        Current overall utilization: ${fmt(overall.balance)} / ${fmt(overall.limit)} ={" "}
        <strong>{overall.utilization.toFixed(1)}%</strong>
        {" · "}After a ${fmt(payment)} utilization-first paydown: ${fmt(plan.newTotal)} / $
        {fmt(overall.limit)} = <strong>{plan.newOverall.toFixed(1)}%</strong>
        {plan.leftover > 0 ? ` (with $${fmt(plan.leftover)} left over after clearing listed balances)` : ""}
      </div>

      <ol className="mt-5 space-y-2 text-xs sm:text-sm">
        {plan.ranked.map((c, rank) => (
          <li key={c.index} className="rounded-lg border border-white/10 p-3">
            <span className="font-semibold text-white">
              Step {rank + 1}: pay ${fmt(c.pay)} to {c.name}
            </span>{" "}
            (was {c.utilization.toFixed(1)}%, becomes {c.newUtilization.toFixed(1)}% on a $
            {fmt(c.limit)} limit)
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs text-slate-500">
        Educational estimate only. It ignores interest accrual, fees, and statement timing; minimum
        payments on every card still come first.
      </p>
    </div>
  );
}
