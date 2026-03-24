import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services | Mark & Sell",
  description:
    "Shares (Demat & IEPF), properties (flats, lands, investments), and postal insurance plans from Mark & Sell.",
};

const iconClass = "h-6 w-6";
const stroke = { strokeWidth: 1.5 as const };

function IconShares() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...stroke} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...stroke} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...stroke} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008H17.25v-.008zm0 3h.008v.008H17.25v-.008zm0 3h.008v.008H17.25v-.008z" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...stroke} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function IconLand() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...stroke} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function IconTrend() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...stroke} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function IconPostal() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...stroke} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...stroke} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...stroke} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-black/10 bg-background/80 p-4 dark:border-white/10 sm:p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
        {description ? (
          <p className="mt-1 text-xs leading-relaxed text-foreground/65 sm:text-sm">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <header className="mx-auto max-w-2xl text-center">
        {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">Mark & Sell</p> */}
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Services</h1>
        <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
          Structured support across shares, real estate, and postal insurance—clear scope, documented steps, and
          responsive follow-through.
        </p>
      </header>

      <div className="mt-14 flex flex-col gap-10 sm:mt-16 lg:gap-12">
        {/* Shares */}
        <section
          id="shares"
          aria-labelledby="services-shares-heading"
          className="scroll-mt-24 rounded-3xl border border-black/10 bg-gradient-to-b from-black/[0.02] to-transparent p-6 shadow-sm dark:border-white/10 dark:from-white/[0.03] sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-700 dark:text-violet-300">
              <IconShares />
            </div>
            <div className="min-w-0 flex-1">
              <h2 id="services-shares-heading" className="text-xl font-semibold sm:text-2xl">
                Shares
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-foreground/70 sm:text-base">
                From legacy certificates to demat accounts and IEPF recovery—we help you navigate paperwork,
                timelines, and regulator-facing submissions.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <FeatureCard
              icon={<IconDocument />}
              title="Physical share to Demat conversion"
              description="End-to-end assistance with company / RTA coordination, form filings, and status tracking until units reflect in your demat."
            />
            <FeatureCard
              icon={<IconClipboard />}
              title="IEPF claim services"
              description="Claim preparation for unclaimed shares and dividends transferred to the IEPF, including supporting documents and follow-ups."
            />
          </div>
        </section>

        {/* Properties */}
        <section
          id="properties"
          aria-labelledby="services-properties-heading"
          className="scroll-mt-24 rounded-3xl border border-black/10 bg-gradient-to-b from-black/[0.02] to-transparent p-6 shadow-sm dark:border-white/10 dark:from-white/[0.03] sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-800 dark:text-amber-300">
              <IconBuilding />
            </div>
            <div className="min-w-0 flex-1">
              <h2 id="services-properties-heading" className="text-xl font-semibold sm:text-2xl">
                Properties
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-foreground/70 sm:text-base">
                Buy, sell, or build a portfolio with guidance on shortlisting, diligence, and transaction closure—
                aligned with RERA expectations where applicable.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<IconHome />}
              title="Flats"
              description="Residential apartments and layouts matched to budget, location, and lifestyle—rent or purchase."
            />
            <FeatureCard
              icon={<IconLand />}
              title="Lands"
              description="Plots and land parcels with title and zoning considerations explained before you commit."
            />
            <FeatureCard
              icon={<IconTrend />}
              title="Investments"
              description="Investment-oriented picks with cash-flow or appreciation angles, framed for your risk horizon."
            />
          </div>
        </section>

        {/* Postal Insurance */}
        <section
          id="postal-insurance"
          aria-labelledby="services-postal-heading"
          className="scroll-mt-24 rounded-3xl border border-black/10 bg-gradient-to-b from-black/[0.02] to-transparent p-6 shadow-sm dark:border-white/10 dark:from-white/[0.03] sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 dark:text-sky-300">
              <IconPostal />
            </div>
            <div className="min-w-0 flex-1">
              <h2 id="services-postal-heading" className="text-xl font-semibold sm:text-2xl">
                Postal Insurance
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-foreground/70 sm:text-base">
                Postal-linked insurance products suited for steady, long-horizon planning—explained in plain language
                before you enroll.
              </p>
            </div>
          </div>
          <div className="mt-8 max-w-2xl">
            <FeatureCard
              icon={<IconClock />}
              title="Long-term investment plans"
              description="Disciplined, long-duration options designed for goals such as education, retirement, or wealth accumulation—with clarity on premiums and benefits."
            />
          </div>
        </section>
      </div>

      <p className="mt-12 text-center text-sm text-foreground/60">
        Questions?{" "}
        <Link href="/#contact" className="font-medium text-foreground underline-offset-4 hover:underline">
          Contact us
        </Link>
        .
      </p>
    </div>
  );
}
