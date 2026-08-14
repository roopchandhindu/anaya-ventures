"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type HeaderProductLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  productLinks: HeaderProductLink[];
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function navClass(active: boolean) {
  return [
    "rounded-md px-3 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2 focus:ring-offset-white",
    active
      ? "bg-[#eaf3e8] text-[#224b2f]"
      : "text-[#405249] hover:bg-[#f2f6ef] hover:text-[#224b2f]",
  ].join(" ");
}

export function SiteHeader({ productLinks }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const tradeActive = isActive(pathname, "/products");

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe8dc] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="shrink-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
          onClick={() => setMenuOpen(false)}
        >
          <span className="block text-xl font-bold tracking-tight text-[#18241d]">
            ARP Ventures
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-[#6b7d70] sm:block">
            Global Trading & Sourcing
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navClass(isActive(pathname, link.href))}
            >
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className={navClass(tradeActive)}
              aria-haspopup="true"
              aria-expanded="false"
            >
              trade
            </button>
            <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-lg border border-[#dfe8dc] bg-white p-2 opacity-0 shadow-xl transition duration-150 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
              <Link
                href="/products"
                className="block rounded-md px-3 py-2 text-sm font-semibold text-[#405249] transition hover:bg-[#f2f6ef] hover:text-[#224b2f] focus:outline-none focus:ring-2 focus:ring-[#c9902f]"
              >
                Trade Catalogue
              </Link>
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-[#405249] transition hover:bg-[#f2f6ef] hover:text-[#224b2f] focus:outline-none focus:ring-2 focus:ring-[#c9902f]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className={navClass(isActive(pathname, "/contact"))}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-md bg-[#224b2f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2f7d44] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#cddac8] text-[#224b2f] transition hover:bg-[#f2f6ef] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
          <span className="flex h-5 w-5 flex-col justify-center gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-[#dfe8dc] bg-white px-6 py-4 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="grid gap-2" aria-label="Mobile primary">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navClass(isActive(pathname, link.href))}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="rounded-lg bg-[#f6f8f3] p-2">
            <Link
              href="/products"
              className={navClass(tradeActive)}
              onClick={() => setMenuOpen(false)}
            >
              Trade
            </Link>
            <div className="mt-2 grid gap-1 border-l border-[#cddac8] pl-3">
              <Link
                href="/products"
                className="rounded-md px-3 py-2 text-sm font-semibold text-[#526158] transition hover:bg-white hover:text-[#224b2f]"
                onClick={() => setMenuOpen(false)}
              >
                Trade Catalogue
              </Link>
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-[#526158] transition hover:bg-white hover:text-[#224b2f]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className={navClass(isActive(pathname, "/contact"))}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center rounded-md bg-[#224b2f] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2f7d44] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
            onClick={() => setMenuOpen(false)}
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

