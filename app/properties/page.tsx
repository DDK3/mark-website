import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getCoverImage, listings } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Properties | Mark & Sell",
  description: "Browse flats, lands, and investment listings from Mark & Sell.",
};

export default function PropertiesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <header className="mx-auto max-w-2xl text-center">
        {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">Mark & Sell</p> */}
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Properties</h1>
        <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
          A sample of current opportunities—flats, land, and investment-oriented assets. Replace with your live
          inventory when ready.
        </p>
        
                        {/* Goa Property PPT */}
            <div className="mt-8 w-full overflow-hidden rounded-2xl border border-black/10 shadow-sm">
              <iframe
                src="/properties/goa-property.pdf"
                className="w-full h-[350px] sm:h-[500px] lg:h-[650px]"
              />
            </div>

            {/* Optional Buttons
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/properties/goa-property.pdf"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/80"
              >
                View Full Property Details
              </a>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold hover:bg-black/5"
              >
                Enquire Now
              </Link>
            </div> */}
            
          
      </header>

      {/* Below code for showing properties list */}

      {/* <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {listings.map((property) => {
          const cover = getCoverImage(property);
          return (
          <li
            key={property.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-background shadow-sm transition hover:border-black/15 hover:shadow-md dark:border-white/10 dark:hover:border-white/15"
          >
            <Link href={`/properties/${property.id}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-black/5">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                className="object-cover transition duration-300 hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Link>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h2 className="text-lg font-semibold leading-snug">{property.title}</h2>
              <p className="mt-2 text-xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
                {property.price}
              </p>
              <p className="mt-2 flex items-start gap-2 text-sm text-foreground/65">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-foreground/45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>{property.location}</span>
              </p>
              <div className="mt-auto pt-5">
                <Link
                  href={`/properties/${property.id}`}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-foreground text-sm font-semibold text-background transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:bg-white dark:text-neutral-900"
                >
                  View Details
                </Link>
              </div>
            </div>
          </li>
          );
        })}
      </ul> */}
    </div>
  );
}
