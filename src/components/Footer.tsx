import Link from "next/link";
import { site, categories } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-extrabold text-ink">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">{site.shortDescription}</p>
          <p className="mt-4 text-xs text-muted">
            Also: {site.sisterConcerns.join(" · ")}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Products</p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}`} className="text-muted hover:text-brand-700">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              {site.address.line1}, {site.address.city} – {site.address.pincode}
            </li>
            {site.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand-700">{p}</a>
              </li>
            ))}
            {site.emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="hover:text-brand-700">{e}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
