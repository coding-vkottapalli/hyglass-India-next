import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { categories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Laboratory glassware, chemicals & reagents, scientific instruments and general lab consumables — browse HyGlass product categories.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="Everything your laboratory needs"
        subtitle="Browse by category, or send an enquiry for anything you can&rsquo;t find — we source hard-to-find items too."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 3h6M10 3v6l-4.5 8A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 9V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-bold text-ink group-hover:text-brand-700">
                {c.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted">{c.blurb}</p>
              <span className="mt-4 text-sm font-semibold text-brand-700">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
