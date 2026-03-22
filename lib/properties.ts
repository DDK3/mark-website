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

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const listings: PropertyListing[] = [
  {
    id: "skyline-residency",
    title: "Skyline Residency",
    price: "₹ 1.25 Cr",
    location: "Whitefield, Bengaluru",
    gallery: [
      { src: u("photo-1545324418-cc1a3fa10c00"), alt: "Modern apartment tower exterior" },
      { src: u("photo-1600607687920-4e2a09cf159d"), alt: "Open-plan living and dining area" },
      { src: u("photo-1600566753190-17f0baa2a6c3"), alt: "Kitchen with island and lighting" },
      { src: u("photo-1600585154340-be6161a56a0c"), alt: "Bedroom with large windows" },
    ],
    description:
      "Corner 3 BHK with cross-ventilation, two covered car parks, and full access to clubhouse, pool, and indoor games. The tower is RERA-registered with OC in place—ideal for end-use or rental income in a high-demand micro-market.",
  },
  {
    id: "lakeside-plots",
    title: "Lakeside Plots",
    price: "₹ 48 L / cent",
    location: "Near Sarjapur Road, Bengaluru",
    gallery: [
      { src: u("photo-1500382017468-9049fed747ef"), alt: "Green land parcel at sunset" },
      { src: u("photo-1501594907352-04cda38ebc29"), alt: "Open field and distant hills" },
      { src: u("photo-1464226184884-fa280b87c399"), alt: "Rural road alongside farmland" },
      { src: u("photo-1441974231531-c6227db76b6e"), alt: "Sunlight through forest trees" },
    ],
    description:
      "Gated plotted development with 30′ internal roads, underground electrical ducting, and clear title chain. Suited for bespoke villas or holding land with appreciation potential along the Sarjapur growth corridor.",
  },
  {
    id: "metro-heights",
    title: "Metro Heights",
    price: "₹ 89 L",
    location: "Kukatpally, Hyderabad",
    gallery: [
      { src: u("photo-1512917774080-9991f1c4c750"), alt: "Contemporary house at dusk" },
      { src: u("photo-1600210492486-724fe5c67fb0"), alt: "Minimal living room interior" },
      { src: u("photo-1600047509807-ba8f99d2cdde"), alt: "Balcony view over city" },
      { src: u("photo-1600573472550-8090b5e0745e"), alt: "Modern bathroom design" },
    ],
    description:
      "Ready-to-move 2 BHK with metro connectivity within walking distance, semi-modular kitchen, and dedicated storage. Strong rental comparables in the neighbourhood—compact footprint with efficient space planning.",
  },
  {
    id: "coastal-vista",
    title: "Coastal Vista",
    price: "₹ 2.40 Cr",
    location: "ECR, Chennai",
    gallery: [
      { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Luxury home with swimming pool" },
      { src: u("photo-1600585154526-990dced4db0d"), alt: "Spacious living room with ocean tones" },
      { src: u("photo-1600566752355-35792bedcfea"), alt: "Outdoor deck and landscaping" },
      { src: u("photo-1600047509358-9dc75507daeb"), alt: "Master suite with natural light" },
    ],
    description:
      "Duplex residence oriented for sea breeze, featuring private terrace, premium flooring, and smart-home wiring. Low-density community with 24×7 security—suited for families seeking a primary coastal home.",
  },
  {
    id: "industrial-land",
    title: "Industrial Land Parcel",
    price: "₹ 3.8 Cr (total)",
    location: "Sri City corridor, AP",
    gallery: [
      { src: u("photo-1582407947304-fd86f028f716"), alt: "Aerial view of industrial zone" },
      { src: u("photo-1497366216548-37526070297c"), alt: "Warehouse and logistics buildings" },
      { src: u("photo-1504307651254-35680f356dfd"), alt: "Highway and open development land" },
      { src: u("photo-1489515217757-5fd1be406fef"), alt: "Construction and infrastructure site" },
    ],
    description:
      "Approximately 2.5 acres with highway frontage and proximity to established industrial parks. Zoning and approvals to be verified with local authorities—well suited for logistics, warehousing, or phased commercial rollout.",
  },
  {
    id: "urban-loft",
    title: "Urban Loft",
    price: "₹ 1.05 Cr",
    location: "Banjara Hills, Hyderabad",
    gallery: [
      { src: u("photo-1600607687939-ce8a6c25118c"), alt: "Bright loft living space" },
      { src: u("photo-1600210491892-03d3c28da9eb"), alt: "High ceilings and staircase detail" },
      { src: u("photo-1600121848594-d8644e57abab"), alt: "Dining area with designer lighting" },
      { src: u("photo-1600585154084-4e5fe7c39198"), alt: "Study nook with city view" },
    ],
    description:
      "Loft-style 2 BHK in a boutique tower—double-height living, imported fittings, and provisions for home automation. Quiet cul-de-sac positioning within Banjara Hills while staying minutes from retail and healthcare.",
  },
];

export function getListingById(id: string): PropertyListing | undefined {
  return listings.find((p) => p.id === id);
}

export function getCoverImage(listing: PropertyListing): GalleryImage {
  return listing.gallery[0]!;
}
