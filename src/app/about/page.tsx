import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A family-owned Hyderabad company supplying laboratory glassware, chemicals, reagents and scientific equipment across India for over 45 years.",
};

const stats = [
  { value: "45+", label: "Years serving labs" },
  { value: "1000s", label: "Products sourced" },
  { value: "Pan-India", label: "Delivery reach" },
  { value: "Trusted", label: "Brand partnerships" },
];

const clientTypes = [
  "Government Organizations",
  "Research Institutions",
  "Medical Colleges & Hospitals",
  "Agricultural & Veterinary Institutions",
  "Pharmaceutical & Biotech Industries",
  "Food & Life-Sciences Industries",
  "Universities & Educational Establishments",
  "Trade Houses",
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About HyGlass"
        title="A single, trusted source for your laboratory"
        subtitle="Family-owned, Hyderabad-based, and serving Indian science for over four decades."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-5 text-slate-700 lg:col-span-2">
            <p>
              <strong className="text-ink">{site.name}</strong> and{" "}
              <strong className="text-ink">Pearala Agencies</strong> is a
              family-owned company situated in Hyderabad with vast experience.
              We are known for globally sourcing and supplying lab needs — from
              laboratory glassware and its fabrication, to chemicals,
              bio-chemicals and rare reagents, culture media, scientific
              equipment, bench-top instruments, a wide range of hi-tech
              disinfectants, teflonware, plasticware, metalware, gloves, filter
              paper, cleanroom &amp; hospital antistatic apparels, membranes and
              lint-free tissues.
            </p>
            <p>
              We cater to customer requirements across India. It is our policy
              to offer quality products that meet the requirements of today&rsquo;s
              scientists — at competitive prices, with timely supply and backed
              by high standards of after-sales service.
            </p>
            <p>
              We also welcome enquiries for products{" "}
              <em>not listed</em> on this site, and we&rsquo;ll try to fulfil them to
              the best of our capabilities. We look forward to partnering with
              you for all your laboratory needs.
            </p>

            <div className="rounded-xl border border-brand-100 bg-brand-50 p-5">
              <p className="text-sm font-semibold text-brand-800">
                Associated companies
              </p>
              <p className="mt-1 text-sm text-slate-700">
                {site.sisterConcerns.join(" · ")}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 text-center"
                >
                  <div className="text-2xl font-extrabold text-brand-600">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="/quote"
              className="block rounded-lg bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Who we serve
          </h2>
          <p className="mt-1 text-muted">
            Valued customers across research, healthcare, industry and education.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {clientTypes.map((c) => (
              <span
                key={c}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
