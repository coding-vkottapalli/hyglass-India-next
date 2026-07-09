import type { MetadataRoute } from "next";
import { categories } from "@/lib/site";

export const dynamic = "force-static";

const base =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.hyglassindia.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about/",
    "/products/",
    "/catalogue/",
    "/brands/",
    "/clients/",
    "/gallery/",
    "/contact/",
    "/quote/",
  ];
  const cats = categories.map((c) => `/products/${c.slug}/`);
  const now = new Date();
  return [...routes, ...cats].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
