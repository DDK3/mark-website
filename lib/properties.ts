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

export const listings: PropertyListing[] = [];

export function getListingById(id: string): PropertyListing | undefined {
  return listings.find((p) => p.id === id);
}

export function getCoverImage(listing: PropertyListing): GalleryImage {
  return listing.gallery[0]!;
}
