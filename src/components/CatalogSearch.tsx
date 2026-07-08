"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";

const RENDER_CAP = 150; // keep the DOM light for large lists

export function CatalogSearch({
  items,
  categoryTitle,
}: {
  items: Product[];
  categoryTitle: string;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.description ?? "").toLowerCase().includes(q)
    );
  }, [items, query]);

  const shown = filtered.slice(0, RENDER_CAP);

  return (
    <div>
      {/* Search bar */}
      <div className="sticky top-16 z-10 -mx-4 bg-white/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:px-0">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${items.length.toLocaleString()} ${categoryTitle.toLowerCase()}…`}
            className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            aria-label={`Search ${categoryTitle}`}
          />
        </div>
        <p className="mt-2 text-xs text-muted">
          {filtered.length.toLocaleString()}{" "}
          {filtered.length === 1 ? "result" : "results"}
          {filtered.length > RENDER_CAP && ` — showing first ${RENDER_CAP}, refine to narrow`}
        </p>
      </div>

      {/* Results */}
      {shown.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-10 text-center">
          <p className="text-sm text-muted">
            No matches for &ldquo;{query}&rdquo;. We source items not listed too —{" "}
            <Link href="/quote" className="font-semibold text-brand-700 hover:text-brand-800">
              send an enquiry
            </Link>
            .
          </p>
        </div>
      ) : (
        <ul className="mt-4 divide-y divide-slate-100 rounded-xl border border-slate-200">
          {shown.map((p, i) => (
            <li
              key={`${p.name}-${i}`}
              className="flex items-center justify-between gap-4 px-4 py-3 transition hover:bg-brand-50/50"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{p.name}</p>
                {p.description && (
                  <p className="truncate text-xs text-muted">{p.description}</p>
                )}
              </div>
              <Link
                href="/quote"
                className="shrink-0 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
              >
                Enquire
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
