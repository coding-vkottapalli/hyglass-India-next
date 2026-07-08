import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { CatalogSearch } from "@/components/CatalogSearch";
import { categories } from "@/lib/site";
import { getCatalog } from "@/lib/catalog";

// Pre-render one static page per category (required for static export).
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  return {
    title: cat ? cat.title : "Products",
    description: cat?.blurb,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const items = getCatalog(cat.slug);

  return (
    <>
      <PageIntro eyebrow="Products" title={cat.title} subtitle={cat.blurb} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {items.length > 0 ? (
          <>
            <div className="mb-6 rounded-lg border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-800">
              Browsing our {cat.title.toLowerCase()} range. Prices on request:
              tap <strong>Enquire</strong> on any item or{" "}
              <Link href="/quote" className="font-semibold underline">
                request a full quote
              </Link>
              .
            </div>
            <CatalogSearch items={items} categoryTitle={cat.title} />
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/60 p-10 text-center">
            <h2 className="text-lg font-bold text-ink">
              Tell us what you need
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Send your requirements for {cat.title.toLowerCase()} and we&rsquo;ll
              respond with a quote, including items not listed.
            </p>
            <Link
              href="/quote"
              className="mt-6 inline-block rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Request a Quote
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
