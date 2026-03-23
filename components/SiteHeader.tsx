"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/80 backdrop-blur-md dark:border-white/10">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="/logo.svg"
              alt="Mark Logo"
              className="w-10 h-10"
            />
            <span className="text-lg font-semibold">
              Mark
            </span>
        </Link>
        

        <nav
          className="hidden flex-wrap items-center justify-end gap-x-5 gap-y-2 md:flex lg:gap-x-7"
          aria-label="Main"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href + label}
              href={href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-black/10 text-foreground md:hidden dark:border-white/15"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-black/5 dark:border-white/10 md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6"
          aria-label="Mobile"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href + label}
              href={href}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
