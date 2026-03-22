"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "@/lib/properties";

type Props = {
  images: GalleryImage[];
  title: string;
};

export function PropertyGallery({ images, title }: Props) {
  const [active, setActive] = useState(0);
  const count = images.length;
  const safeIndex = count ? active % count : 0;
  const current = images[safeIndex];

  const go = useCallback(
    (dir: -1 | 1) => {
      if (!count) return;
      setActive((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!count || !current) return null;

  return (
    <div className="space-y-4">
      <div
        className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} photo gallery`}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-cover transition duration-500 ease-out"
          sizes="(max-width: 1024px) 100vw, min(896px, 70vw)"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md backdrop-blur-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:left-4"
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md backdrop-blur-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-4"
              aria-label="Next image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-3 py-2 backdrop-blur-md">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === safeIndex ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Show image ${i + 1} of ${count}`}
                  aria-current={i === safeIndex ? true : undefined}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl ring-2 ring-offset-2 ring-offset-background transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
                i === safeIndex ? "ring-emerald-500" : "ring-transparent opacity-80 hover:ring-black/20 dark:hover:ring-white/20"
              }`}
              aria-label={`View ${img.alt}`}
              aria-current={i === safeIndex ? true : undefined}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="120px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
