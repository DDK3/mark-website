import Image from "next/image";
import Link from "next/link";

const heroImageSrc =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80";

const services = [
  {
    id: "shares",
    title: "Shares",
    subtitle: "Demat + IEPF",
    description:
      "Share recovery, demat facilitation, and IEPF claim support so your holdings stay accessible and compliant.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    id: "properties",
    title: "Properties",
    subtitle: "Flats, Lands, Investment",
    description:
      "Residential and land deals plus investment-oriented opportunities, guided end-to-end from shortlist to closure.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008H17.25v-.008zm0 3h.008v.008H17.25v-.008zm0 3h.008v.008H17.25v-.008z" />
      </svg>
    ),
  },
  {
    id: "insurance",
    title: "Postal Insurance",
    subtitle: "Coverage you can rely on",
    description:
      "Postal insurance solutions tailored for individuals and businesses—clear terms, steady support, and prompt assistance.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[min(100svh,52rem)] w-full items-end sm:items-center">
        <Image
          src={heroImageSrc}
          alt="City skyline at dusk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/50 sm:to-black/30"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
            Mark
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-balance text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Mark – Share Recovery, Property Investment &amp; Insurance Services
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            One partner for unclaimed shares, demat and IEPF matters, property investments, and postal
            insurance—structured, transparent, and built around your outcomes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-neutral-900 shadow-lg transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Services */}
        <section id="services" className="scroll-mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What we offer</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
              Three focused practices—each delivered with documentation-first processes and clear communication.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((item) => (
              <li
                key={item.id}
                id={item.id === "properties" ? "properties" : undefined}
                className="group relative flex flex-col rounded-2xl border border-black/10 bg-gradient-to-b from-black/[0.03] to-transparent p-6 shadow-sm transition hover:border-black/15 hover:shadow-md dark:border-white/10 dark:from-white/[0.04] dark:hover:border-white/15 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/8 text-foreground dark:bg-white/10">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/60">{item.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Trust + about anchor for nav */}
        <section
          id="about"
          className="mt-16 scroll-mt-24 rounded-2xl border border-black/10 bg-black/[0.02] px-5 py-10 dark:border-white/10 dark:bg-white/[0.03] sm:mt-20 sm:px-8 sm:py-12 lg:mt-24"
        >
          <h2 className="text-center text-xl font-semibold sm:text-2xl">Trusted &amp; registered</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-foreground/65 sm:text-base">
            Mark operates with recognised credentials so you can engage with confidence.
          </p>
          <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <li className="flex flex-1 items-center gap-4 rounded-xl border border-black/10 bg-background px-4 py-4 dark:border-white/12 sm:flex-col sm:text-center sm:py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </span>
              {/* <div>
                <p className="text-sm font-semibold">RERA Registered Broker</p>
                <p className="mt-1 text-xs text-foreground/60 sm:text-sm">Property transactions aligned with regulatory standards.</p>
              </div> */}
              {/* RERA Card */}
              <div className="p-6 rounded-xl border text-center">
                <h3 className="font-semibold text-lg">RERA Registered Broker</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Property transactions aligned with regulatory standards.
                </p>

                {/* ADD THIS 👇 */}
                <p className="text-xs text-gray-500 mt-2 font-medium">
                  RERA No: PRM/KA/RERA/1251/310/AG/260113/006722
                </p>
              </div>

            </li>
            <li className="flex flex-1 items-center gap-4 rounded-xl border border-black/10 bg-background px-4 py-4 dark:border-white/12 sm:flex-col sm:text-center sm:py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </span>
              {/* <div>
                <p className="text-sm font-semibold">MSME (Udyam) Registered</p>
                <p className="mt-1 text-xs text-foreground/60 sm:text-sm">Recognised micro / small enterprise under Udyam.</p>
              </div> */}

              {/* MSME Card */}
              <div className="p-6 rounded-xl border text-center">
                <h3 className="font-semibold text-lg">MSME (Udyam) Registered</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Recognised micro / small enterprise under Udyam.
                </p>

                {/* ADD THIS 👇 */}
                <p className="text-xs text-gray-500 mt-2 font-medium">
                  Udyam No: KR-03-0645264
                </p>
              </div>

            </li>
          </ul>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="mt-16 scroll-mt-24 sm:mt-20 lg:mt-24"
        >
          <div className="relative overflow-hidden rounded-2xl bg-neutral-900 px-6 py-12 text-center dark:bg-neutral-950 sm:px-10 sm:py-14">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl"
              aria-hidden
            />
            <h2 className="relative text-xl font-semibold text-white sm:text-2xl">Ready to get started?</h2>
            <p className="relative mx-auto mt-3 max-w-lg text-sm text-white/75 sm:text-base">
              Tell us whether it&apos;s shares, property, or insurance—we&apos;ll route you to the right specialist.
            </p>
            <a
              href="mailto:rsn974@gmail.com?subject=Enquiry%20%E2%80%94%20Mark"
              className="relative mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-10 text-sm font-semibold text-neutral-900 transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
