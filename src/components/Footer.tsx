import Link from "next/link";
import { site, categories } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-brand-950 text-brand-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px 300px at 12% -30%, var(--color-brand-700), transparent), radial-gradient(520px 320px at 100% 130%, var(--color-brand-800), transparent)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-extrabold text-white">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-brand-200">{site.shortDescription}</p>
          <p className="mt-4 text-xs text-brand-300">
            Also: {site.sisterConcerns.join(" · ")}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Products</p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products/${c.slug}`}
                  className="text-brand-200 transition hover:text-white"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-200">
            <li>
              {site.address.line1}, {site.address.city} - {site.address.pincode}
            </li>
            {site.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`} className="transition hover:text-white">
                  {p}
                </a>
              </li>
            ))}
            {site.emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="transition hover:text-white">
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-brand-300 sm:px-6">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
