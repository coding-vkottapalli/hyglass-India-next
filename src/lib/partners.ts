// Overseas manufacturing partners HyGlass represents / stocks in India.
// Editable source of truth (CMS-friendly). Carried over from the old site's
// partners page — REVIEW for currency: some names may have changed owners or
// the partnership may no longer be active. Trim/update as needed.

export type OverseasPartner = {
  name: string;
  country?: string;
  specialty?: string;
};

export const overseasPartners: OverseasPartner[] = [
  { name: "Thomas Scientific", country: "USA", specialty: "Scientific equipment, apparatus & reagents" },
  { name: "COPE", country: "UK", specialty: "Laboratory equipment & instruments" },
  { name: "US Biological", country: "USA", specialty: "Biochemicals & biologicals" },
  { name: "Hamilton", country: "Switzerland", specialty: "Liquid handling systems" },
  { name: "Orochem Technologies", country: "USA", specialty: "Sample preparation products" },
  { name: "Corning (Costar)", country: "USA", specialty: "Plastic labware" },
  { name: "Bellco Glass", country: "USA", specialty: "Laboratory equipment" },
];
