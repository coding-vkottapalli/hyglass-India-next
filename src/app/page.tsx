import Link from "next/link";
import Image from "next/image";
import { site, categories } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(600px 300px at 80% -10%, var(--color-brand-500), transparent), radial-gradient(500px 300px at 0% 110%, var(--color-brand-700), transparent)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-brand-100 ring-1 ring-white/20">
              Serving Indian laboratories for 45+ years
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-100">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-brand-500"
              >
                Browse Products
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Laboratory bench with glassware, reagents and instruments"
                width={914}
                height={558}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              What we supply
            </h2>
            <p className="mt-1 text-muted">
              Everything a modern laboratory needs, from a single trusted source.
            </p>
          </div>
          <Link href="/products" className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:block">
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 3h6M10 3v6l-4.5 8A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 9V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-ink group-hover:text-brand-700">
                {c.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Can&rsquo;t find a product? Just ask.
            </h2>
            <p className="mt-1 text-muted">
              We source hard-to-find items too. Send an enquiry and we&rsquo;ll get back with a quote.
            </p>
          </div>
          <Link
            href="/quote"
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
