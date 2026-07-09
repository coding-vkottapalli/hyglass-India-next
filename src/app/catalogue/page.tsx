import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { downloads } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Catalogues & Downloads",
  description:
    "Download the HyGlass laboratory catalogue and brochures — glassware, chemicals, reagents and scientific equipment.",
};

export default function CataloguePage() {
  return (
    <>
      <PageIntro
        eyebrow="Downloads"
        title="Catalogues & downloads"
        subtitle="Browse and download our latest catalogues and brochures. Prefer a printed copy? Just ask."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {downloads.length > 0 ? (
          <ul className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200">
            {downloads.map((d) => (
              <li
                key={d.file}
                className="flex flex-col gap-4 p-4 transition hover:bg-brand-50/40 sm:flex-row sm:items-center sm:gap-5 sm:px-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 3v5h5M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12v5M9.5 14.5 12 17l2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-ink">{d.title}</h2>
                  {d.description && (
                    <p className="mt-0.5 text-sm text-muted">{d.description}</p>
                  )}
                  <p className="mt-1 text-xs text-muted">
                    PDF{d.size ? ` · ${d.size}` : ""}
                    {d.updated ? ` · ${d.updated}` : ""}
                  </p>
                </div>

                <div className="flex shrink-0 gap-2">
                  <a
                    href={d.file}
                    download
                    className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                  >
                    Download
                  </a>
                  <a
                    href={d.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
                  >
                    View
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/60 p-10 text-center">
            <h2 className="text-lg font-bold text-ink">Catalogues coming soon</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              We&rsquo;re preparing our latest catalogues for download. In the
              meantime, send us your requirements and we&rsquo;ll share the
              details you need.
            </p>
            <Link
              href="/quote"
              className="mt-5 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Request a Quote
            </Link>
          </div>
        )}

        <div className="mt-10 rounded-xl border border-brand-100 bg-brand-50 p-6 text-center">
          <p className="text-sm text-brand-800">
            Looking for a specific product line or a printed catalogue?
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
