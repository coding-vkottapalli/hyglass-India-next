import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Send an enquiry to HyGlass & Chemicals for laboratory glassware, chemicals, reagents or equipment, including hard-to-find items.",
};

const points = [
  "Competitive prices with timely supply",
  "Hard-to-find and not-listed items sourced on request",
  "Trusted by labs across India for 45+ years",
];

export default function QuotePage() {
  return (
    <>
      <PageIntro
        eyebrow="Request a Quote"
        title="Tell us what you need"
        subtitle="Share your requirements and our team will get back to you with a quote."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-ink">Why HyGlass</h2>
            <ul className="mt-4 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-slate-700">
                  <svg className="mt-0.5 shrink-0 text-brand-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
