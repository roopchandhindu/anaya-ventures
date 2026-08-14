import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductGrid } from "@/components/ProductGrid";
import { getPopulatedCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Trade Catalogue | ARP Ventures",
  description:
    "Explore ARP Ventures international trade catalogue, including agricultural commodities, food products, textiles, and other commercially sourced products.",
};

export default function Products() {
  const populatedCategories = getPopulatedCategories();

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#18241d] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c9902f]">
            Trade Catalogue
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            International Trade & Sourcing
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d9e5d5]">
            ARP Ventures connects international buyers with reliable
            suppliers across agricultural commodities, food products,
            animal feed, textiles, and other traded goods.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#c9902f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#b27c25] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2 focus:ring-offset-[#18241d]"
            >
              Request a Quote
            </Link>

            <Link
              href="#products"
              className="inline-flex items-center justify-center rounded-md border border-[#607466] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2 focus:ring-offset-[#18241d]"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-[#fafcf8] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9902f]">
              Featured Commodities
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d] sm:text-4xl">
              Our Core Trade Products
            </h2>

            <p className="mt-4 leading-7 text-[#526158]">
              Our current trading focus includes Palm Kernel Expeller (PKE)
              and Palm Oil, supported by a growing portfolio of agricultural,
              food, and commodity products sourced through trusted supply
              networks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* PKE */}
            <div className="overflow-hidden rounded-2xl border border-[#d9dfd5] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-2 bg-[#c9902f]" />

              <div className="p-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#c9902f] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Priority Product
                  </span>

                  <span className="text-sm font-semibold text-[#2f7d44]">
                    Global Sourcing
                  </span>
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b7d70]">
                  Animal Feed
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#18241d]">
                  Palm Kernel Expeller (PKE)
                </h3>

                <p className="mt-4 leading-7 text-[#526158]">
                  Commercial PKE supply for animal feed manufacturers,
                  distributors, commodity traders, and international buyers.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/products/agriculture/palm-kernel-expeller"
                    className="inline-flex items-center justify-center rounded-md bg-[#224b2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f7d44]"
                  >
                    View PKE
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-[#cddac8] px-5 py-3 text-sm font-semibold text-[#224b2f] transition hover:bg-[#f2f6ef]"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* PALM OIL */}
            <div className="overflow-hidden rounded-2xl border border-[#d9dfd5] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-2 bg-[#2f7d44]" />

              <div className="p-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#2f7d44] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Priority Product
                  </span>

                  <span className="text-sm font-semibold text-[#c9902f]">
                    Global Sourcing
                  </span>
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b7d70]">
                  Edible & Industrial Oils
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#18241d]">
                  Palm Oil
                </h3>

                <p className="mt-4 leading-7 text-[#526158]">
                  Commercial palm oil supply for food manufacturers,
                  distributors, industrial users, and international markets.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/products/agriculture/palm-oil"
                    className="inline-flex items-center justify-center rounded-md bg-[#224b2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f7d44]"
                  >
                    View Palm Oil
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-[#cddac8] px-5 py-3 text-sm font-semibold text-[#224b2f] transition hover:bg-[#f2f6ef]"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL CATALOGUE */}
      <section id="products" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
              Full Catalogue
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d] sm:text-4xl">
              Products We Trade
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-[#526158]">
              Browse our current product range. Availability, specifications,
              quantities, packaging, origin, destination, and commercial
              terms can be discussed according to buyer requirements.
            </p>
          </div>

          <div className="grid gap-14">
            {populatedCategories.map((category) => (
              <section key={category.slug}>
                <div className="mb-7 border-l-4 border-[#c9902f] pl-5">
                  <h3 className="text-2xl font-semibold text-[#18241d]">
                    {category.name}
                  </h3>

                  <p className="mt-2 max-w-3xl leading-7 text-[#526158]">
                    {category.description}
                  </p>
                </div>

                <ProductGrid products={category.products} />
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS CTA */}
      <CTASection
        title="Looking for a reliable trading partner?"
        text="Tell us the product you need, approximate quantity, destination, and preferred delivery terms. Our team can review the requirement and coordinate the sourcing process."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
      />
    </main>
  );
}