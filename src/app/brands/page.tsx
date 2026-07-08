import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { brands } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Brands & Partners",
  description:
    "HyGlass is an authorised stockist and agent for leading laboratory brands including Borosil, Sartorius, Qualigens, HiMedia, REMI, Microlit and many more.",
};

export default function BrandsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Brands & Partners"
        title="Authorised stockist for trusted names"
        subtitle="We represent and stock leading Indian and overseas laboratory brands across glassware, chemicals, instruments and consumables."
      />

      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <div className="relative h-56 overflow-hidden rounded-2xl border border-slate-200 sm:h-72">
          <Image
            src="/banners/warehouse.png"
            alt="HyGlass warehouse stocked with laboratory supplies"
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
            className="object-cover"
          />
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-200 hover:shadow-sm"
            >
              <div className="flex h-16 items-center justify-center">
                <Image
                  src={`/logos/${b.logo}`}
                  alt={`${b.name} logo`}
                  width={140}
                  height={56}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-ink">
                {b.name}
              </p>
              {b.description && (
                <p className="mt-1 text-center text-xs text-muted">
                  {b.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-brand-100 bg-brand-50 p-6 text-center">
          <p className="text-sm text-brand-800">
            Looking for a specific brand or product line?
          </p>
          <Link
            href="/quote"
            className="mt-3 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Ask us
          </Link>
        </div>
      </section>
    </>
  );
}
