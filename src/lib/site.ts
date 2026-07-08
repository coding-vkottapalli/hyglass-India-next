// Central company data. Single source of truth for header/footer/contact/SEO.
// When we add the CMS later, this is what becomes editable content.

export const site = {
  name: "HyGlass & Chemicals",
  tagline: "Laboratory Glassware, Chemicals & Scientific Equipment",
  since: 1979, // ~45+ years as of the old site's copy
  description:
    "A family-owned Hyderabad supplier of laboratory glassware, chemicals & reagents, scientific instruments and general lab consumables — serving research, medical, pharma and educational labs across India for over 45 years.",
  sisterConcerns: ["Pearala Agencies", "Annapurna Scientific & Lab Equipments"],

  address: {
    line1: "Sri Krupa Market, Malakpet",
    city: "Hyderabad",
    pincode: "500036",
    state: "Telangana",
    country: "India",
  },

  phones: ["+91 90109 99909", "+91 98480 47525"],
  emails: ["hyglassindia@gmail.com", "pearalakumar@gmail.com"],

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Brands", href: "/brands" },
    { label: "Clients", href: "/clients" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const categories = [
  {
    slug: "glassware",
    title: "Laboratory Glassware",
    blurb:
      "Borosilicate glassware, volumetric ware and custom fabrication for every lab.",
  },
  {
    slug: "chemicals",
    title: "Chemicals & Reagents",
    blurb:
      "Lab chemicals, bio-chemicals, rare reagents, culture media and indicators.",
  },
  {
    slug: "equipment",
    title: "Instruments & Equipment",
    blurb:
      "Bench-top instruments, analytical and general laboratory equipment.",
  },
  {
    slug: "general",
    title: "General & Consumables",
    blurb:
      "Plasticware, filter papers, membranes, gloves, cleanroom apparel and more.",
  },
] as const;
