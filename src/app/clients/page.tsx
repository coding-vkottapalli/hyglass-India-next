import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { clients, clientSectors } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "HyGlass serves leading research institutes, universities, pharma and government laboratories across India, including IICT, CCMB, ICRISAT, NIN, DRDL, Aurobindo Pharma and more.",
};

export default function ClientsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Clients"
        title="Trusted by India's leading laboratories"
        subtitle="For over 45 years, premier research, pharma, agricultural and government institutions have relied on us."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Sectors */}
        <div className="flex flex-wrap gap-2.5">
          {clientSectors.map((s) => (
            <span
              key={s}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Named clients */}
        <h2 className="mt-12 text-xl font-bold text-ink">A few of our valued customers</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <div
              key={c}
              className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white px-4 py-3"
            >
              <svg className="mt-0.5 shrink-0 text-brand-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm text-slate-700">{c}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
