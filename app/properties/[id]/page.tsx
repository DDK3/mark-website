import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyGallery } from "@/components/PropertyGallery";
import { getListingById, listings } from "@/lib/properties";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return listings.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const property = getListingById(params.id);
  if (!property) return { title: "Property | Mark" };
  return {
    title: `${property.title} | Mark`,
    description: `${property.price} — ${property.location}. ${property.description.slice(0, 140)}${property.description.length > 140 ? "…" : ""}`,
  };
}

const mailto = (title: string) =>
  `mailto:hello@mark.example?subject=${encodeURIComponent(`Property: ${title}`)}`;

export default function PropertyDetailPage({ params }: Props) {
  const property = getListingById(params.id);
  if (!property) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50/80 to-background dark:from-neutral-950/50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition hover:text-foreground"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 dark:bg-white/10">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          Back to listings
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_min(22rem,100%)] lg:items-start lg:gap-12">
          <div className="min-w-0 space-y-8">
            <PropertyGallery images={property.gallery} title={property.title} />

            <div className="rounded-2xl border border-black/10 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/40 sm:p-8">
              <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
                {property.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-foreground/75 sm:text-lg">{property.description}</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-background shadow-lg shadow-black/5 ring-1 ring-black/5 dark:border-white/10 dark:bg-neutral-900 dark:ring-white/10">
              <div className="border-b border-black/10 bg-gradient-to-br from-emerald-500/12 via-transparent to-sky-500/10 px-6 py-6 dark:border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Asking price</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
                  {property.price}
                </p>
                <div className="mt-5 flex gap-3 rounded-xl bg-black/[0.03] px-4 py-3 dark:bg-white/[0.06]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-foreground/45">Location</p>
                    <p className="mt-0.5 text-sm font-medium leading-snug text-foreground">{property.location}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 p-6">
                <a
                  href={mailto(property.title)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:from-emerald-500 hover:to-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:from-emerald-500 dark:to-emerald-600 dark:hover:from-emerald-400 dark:hover:to-emerald-500"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Contact us
                </a>
                <a
                  href="tel:+15550000000"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-transparent text-sm font-semibold text-foreground transition hover:bg-black/[0.03] dark:border-white/15 dark:hover:bg-white/[0.06]"
                >
                  <svg className="h-5 w-5 text-foreground/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.964 3.102c-.125-.5-.625-.852-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Call +1 (555) 000-0000
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
