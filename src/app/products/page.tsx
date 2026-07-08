import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { categories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Laboratory glassware, chemicals & reagents, scientific instruments and general lab consumables. Browse HyGlass product categories.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="Everything your laboratory needs"
        subtitle="Browse by category, or send an enquiry for anything you can&rsquo;t find. We source hard-to-find items too."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="text-lg font-bold text-ink group-hover:text-brand-700">
                  {c.title}
                </h2>
                <p className="mt-1.5 text-sm text-muted">{c.blurb}</p>
                <span className="mt-4 text-sm font-semibold text-brand-700">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
