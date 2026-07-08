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
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-ink group-hover:text-brand-700">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Capability band */}
      <section className="border-t border-slate-200">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200">
            <Image
              src="/lab/cellculture.png"
              alt="Laboratory flasks, culture media and instruments"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Sourcing and supply you can rely on
            </h2>
            <p className="mt-3 text-muted">
              From everyday consumables to hard-to-find reagents and instruments,
              we source globally and deliver across India, backed by four decades
              of experience and dependable after-sales support.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Learn about us →
            </Link>
          </div>
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
