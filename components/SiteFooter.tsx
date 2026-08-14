import Link from "next/link";

type FooterProductLink = {
  href: string;
  label: string;
};

type SiteFooterProps = {
  productLinks: FooterProductLink[];
};

export function SiteFooter({ productLinks }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#dfe8dc] bg-[#18241d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-block">
            <span className="block text-2xl font-bold tracking-tight">
              ARP Ventures
            </span>
            <span className="mt-1 block text-sm text-[#aebfaa]">
              International Trading, Sourcing & Professional Services
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#c8d7c3]">
            A trading and sourcing company focused on agricultural products,
            clear buyer communication, and reliable commercial inquiry support.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c9902f]">
            Quick Links
          </h2>
          <nav className="mt-4 grid gap-3 text-sm text-[#d9e5d5]">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/products" className="transition hover:text-white">
              Products
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c9902f]">
            Products
          </h2>
          <nav className="mt-4 grid gap-3 text-sm text-[#d9e5d5]">
            <Link href="/products" className="transition hover:text-white">
              All Products
            </Link>
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c9902f]">
            Contact
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-[#d9e5d5]">
            <a
              href="mailto:arpventures.info@gmail.com"
              className="transition hover:text-white"
            >
              arpventures.info@gmail.com
            </a>
            <a href="tel:+60176484306" className="transition hover:text-white">
              +60 17 648 4306
            </a>
            <a
              href="https://wa.me/60176484306?text=Hello%20ARP%20Ventures%2C%20I%20would%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              WhatsApp ARP Ventures
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-[#9cae99]">
        Copyright {year} ARP Ventures. All rights reserved.
      </div>
    </footer>
  );
}

