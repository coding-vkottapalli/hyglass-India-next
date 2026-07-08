import chemicals from "@/data/catalog/chemicals.json";
import glassware from "@/data/catalog/glassware.json";
import equipment from "@/data/catalog/equipment.json";
import general from "@/data/catalog/general.json";

export type Product = { name: string; description?: string };

// Category slug -> migrated product data.
export const catalog: Record<string, Product[]> = {
  chemicals,
  glassware,
  equipment,
  general,
};

export function getCatalog(slug: string): Product[] {
  return catalog[slug] ?? [];
}
