import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HyGlass & Chemicals at Sri Krupa Market, Malakpet, Hyderabad. Phone, email and enquiry form.",
};

const mapQuery = encodeURIComponent(
  `${site.address.line1}, ${site.address.city}, ${site.address.pincode}`
);

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Talk to us"
        subtitle="Questions, quotes or hard-to-find items? We&rsquo;re happy to help."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Details + map */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-brand-700">Address</p>
                <p className="mt-1 text-slate-700">
                  {site.name}
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.city} – {site.address.pincode},{" "}
                  {site.address.state}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-brand-700">Phone</p>
                <ul className="mt-1 space-y-1">
                  {site.phones.map((p) => (
                    <li key={p}>
                      <a
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="text-slate-700 hover:text-brand-700"
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold text-brand-700">Email</p>
                <ul className="mt-1 space-y-1">
                  {site.emails.map((e) => (
                    <li key={e}>
                      <a
                        href={`mailto:${e}`}
                        className="text-slate-700 hover:text-brand-700"
                      >
                        {e}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="HyGlass location map"
                src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Enquiry form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">Send an enquiry</h2>
            <p className="mt-1 text-sm text-muted">
              Fill this in and we&rsquo;ll get back to you shortly.
            </p>
            <div className="mt-6">
              <QuoteForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
