# HyGlass & Chemicals — Website

Modern rebuild of the HyGlass & Chemicals site (laboratory glassware, chemicals,
reagents & scientific equipment — Hyderabad).

**Stack:** Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript · static export.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

## Content

- Company data: `src/lib/site.ts`
- Catalog data: `src/data/catalog/*.json` (regenerate from the old site with `node scripts/migrate-catalog.mjs`)
- Brands: `src/lib/brands.ts` · Clients: `src/lib/clients.ts` · Gallery: `src/lib/gallery.ts`

## Integrations (free — activate with keys)

Copy `.env.local.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_WEB3FORMS_KEY` — enquiry/quote forms → email ([web3forms.com](https://web3forms.com))
- `NEXT_PUBLIC_TAWK_ID` — live chat ([tawk.to](https://tawk.to))
- `NEXT_PUBLIC_SITE_URL` — canonical URL for sitemap/robots (e.g. `https://hyglassindia.com`)

## Deploy

Static site — build output is `./out`.

- **Netlify:** connect the repo; config is in `netlify.toml` (build `npm run build`, publish `out`).
- **Cloudflare Pages:** connect the repo; set build command `npm run build`, output dir `out`.

`public/_redirects` maps old `.html` URLs to the new routes (works on both hosts).
