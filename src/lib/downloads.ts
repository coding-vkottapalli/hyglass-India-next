// Downloadable catalogues, brochures and price lists.
// Single source of truth for the /catalogue page. This is designed to become
// CMS-editable later, so staff can upload/replace PDFs without touching code:
// drop a file in public/downloads/ and add an entry here (or via the CMS).

export type DownloadItem = {
  title: string;
  description?: string;
  file: string; // path under /public, e.g. "/downloads/hyglass-catalogue.pdf"
  size?: string; // human-readable hint, e.g. "317 KB"
  updated?: string; // optional freshness label, e.g. "2024"
};

export const downloads: DownloadItem[] = [
  {
    title: "HyGlass Product Catalogue",
    description:
      "Our range of laboratory glassware, chemicals, reagents and scientific equipment, and the brands we stock as authorised distributors.",
    file: "/downloads/hyglass-catalogue.pdf",
    size: "317 KB",
  },
];
