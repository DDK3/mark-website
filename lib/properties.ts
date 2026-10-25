export type GalleryImage = {
  src: string;
  alt: string;
};

export type PropertyListing = {
  id: string;
  title: string;
  price: string;
  location: string;
  gallery: GalleryImage[];
  description: string;
};

const placeholder = (id: string, alt: string): GalleryImage => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`,
  alt,
});

export const listings: PropertyListing[] = [
  {
    id: "jayanagar-40x60-site",
    title: "40×60 West-Facing Site — Jayanagar",
    price: "₹33,000 per sqft",
    location: "Madhavan Park, Jayanagar, Bangalore",
    gallery: [
      placeholder("photo-1500382017468-90403fed3ef7", "Open residential site in Jayanagar"),
      placeholder("photo-1560518883-ce09059eeffa", "Residential plot overview"),
    ],
    description:
      "Prime 40×60 (2,400 sqft) west-facing residential site in Jayanagar, near Madhavan Park. Ideal for a premium home build in one of Bangalore's most established neighbourhoods.",
  },
  {
    id: "thyagarajnagar-30x65-site",
    title: "30×65 North-Facing Site — Thyagarajnagar",
    price: "₹24,000 per sqft",
    location: "Thyagarajnagar, Bangalore",
    gallery: [
      placeholder("photo-1560518883-ce09059eeffa", "North-facing residential site in Thyagarajnagar"),
      placeholder("photo-1600585154340-be6161a56a0c", "Residential neighbourhood view"),
    ],
    description:
      "30×65 (1,950 sqft) north-facing residential site in Thyagarajnagar, Bangalore. Well-connected location suited for a comfortable family residence.",
  },
  {
    id: "goa-28000-sqft-land",
    title: "28,000 sqft Land — Goa",
    price: "₹10 Cr",
    location: "Goa",
    gallery: [
      placeholder("photo-1559827260-dc66d52bef19", "Coastal land parcel in Goa"),
      placeholder("photo-1506905925346-21bda4d32df4", "Scenic Goa landscape"),
    ],
    description:
      "Spacious 28,000 sqft land parcel in Goa. A rare opportunity for a villa development, resort-style project, or long-term land investment.",
  },
  {
    id: "alur-11-acre-land",
    title: "11 Acre Land — Magadi Highway",
    price: "₹6 Cr per acre",
    location: "Alur, Magadi Highway, near Dobaspet",
    gallery: [
      placeholder("photo-1625246333195-78d9c38ad449", "Expansive farmland along Magadi Highway"),
      placeholder("photo-1500382017468-90403fed3ef7", "Aerial view of large land holding"),
    ],
    description:
      "11-acre land holding at Alur on the Magadi Highway, near Dobaspet. Suited for agricultural use, warehousing, or large-format development with highway access.",
  },
  {
    id: "goa-panjim-commercial",
    title: "Commercial Building — Panjim, Goa",
    price: "₹220 Cr",
    location: "Panjim, Goa",
    gallery: [
      placeholder("photo-1486406146926-c627a92ad1ab", "Commercial building in Panjim"),
      placeholder("photo-1545324418-cc1a3fa10c00", "Modern commercial property exterior"),
    ],
    description:
      "Premium commercial building in Panjim, Goa with 88,000 sqft built-up area. A landmark asset for office, retail, or hospitality use in the state capital.",
  },
  {
    id: "gorguntepalya-industrial",
    title: "Industrial Land — Gorguntepalya",
    price: "₹17,000 per sqft",
    location: "Gorguntepalya, Bangalore",
    gallery: [
      placeholder("photo-1581091226825-a6a2a5aee158", "Industrial land in Gorguntepalya"),
      placeholder("photo-1565688534245-05d6b5be184f", "Industrial zone overview"),
    ],
    description:
      "28,000 sqft industrial land in Gorguntepalya, Bangalore. Strong connectivity and proximity to key industrial corridors make it ideal for manufacturing or logistics.",
  },
  {
    id: "svasa-homes-flat-apartment",
    title: "Svasa Homes — Flat / Apartment",
    price: "₹9.99 Cr",
    location: "Bull Temple Road, Basavanagudi, Bangalore",
    gallery: [
      placeholder("photo-1545324418-cc1a3fa10c00", "Apartment building at Svasa Homes"),
      placeholder("photo-1600585154340-be6161a56a0c", "Premium residential apartment exterior"),
    ],
    description:
      "Flat / apartment at Svasa Homes on Bull Temple Road, Basavanagudi, Bangalore, Karnataka 560004. A premium residential offering in one of South Bangalore's most established neighbourhoods, close to cultural landmarks and city conveniences.",
  },
  {
    id: "svasa-homes-duplex-flat",
    title: "Svasa Homes — Duplex Flat (7,600 sq. ft.)",
    price: "₹21 Cr",
    location: "Bull Temple Road, Basavanagudi, Bangalore",
    gallery: [
      placeholder("photo-1600596542815-ffad4c1539a9", "Spacious duplex residence at Svasa Homes"),
      placeholder("photo-1600607687939-ce8a6c25118c", "Luxury apartment interior living space"),
    ],
    description:
      "Duplex flat spanning 7,600 sq. ft. at Svasa Homes on Bull Temple Road, Basavanagudi, Bangalore, Karnataka 560004. An expansive, premium home in a sought-after Basavanagudi address with generous living space and landmark connectivity.",
  },
];

export function getListingById(id: string): PropertyListing | undefined {
  return listings.find((p) => p.id === id);
}

export function getCoverImage(listing: PropertyListing): GalleryImage {
  return listing.gallery[0]!;
}
