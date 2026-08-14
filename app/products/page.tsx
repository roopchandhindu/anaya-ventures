import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductGrid } from "@/components/ProductGrid";
import { getPopulatedCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "International Trade | ARP Ventures",
  description:
    "Browse ARP Ventures agricultural product catalog for commercial and international buyer inquiries.",
};

export default function Products() {
  const populatedCategories = getPopulatedCategories();

  return (
    <main>
      <section className="bg-[#18241d] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c9902f]">
            Import & Export
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            International Trade Products
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9e5d5]">
            Import and export solutions connecting quality products from global sources with buyers and markets worldwide.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
                Trade Catalogue
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d]">
                Our Core Products
              </h2>
            </div>
            <Link
              href="/products/agriculture"
              className="inline-flex items-center justify-center rounded-md border border-[#cddac8] px-5 py-3 text-sm font-semibold text-[#224b2f] transition hover:border-[#2f7d44] hover:bg-[#f4f8f1] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
            >
              View All Trade Products
            </Link>
          </div><div className="mb-14">
  <div className="mb-6">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9902f]">
      Featured Commodities
    </p>

    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d]">
      Our Core Trade Products
    </h2>

    <p className="mt-3 max-w-3xl leading-7 text-[#526158]">
      Our primary trading focus includes Palm Kernel Expeller (PKE) and Palm
Oil, supported by a growing portfolio of agricultural and commodity
products sourced from trusted suppliers across global markets.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-[#d9dfd5] bg-[#f4f8f1] p-7 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-[#c9902f] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          #1 Priority
        </span>

        <span className="text-sm font-semibold text-[#2f7d44]">
          Global Markets
        </span>
      </div>

      <h3 className="text-2xl font-bold text-[#18241d]">
        Palm Kernel Expeller (PKE)
      </h3>

      <p className="mt-3 leading-7 text-[#526158]">
        Commercial PKE supply for animal feed manufacturers, distributors,
        and international commodity buyers.
      </p>

      <Link
        href="/products/agriculture/palm-kernel-expeller"
        className="mt-6 inline-flex rounded-md bg-[#2f7d44] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#245f34]"
      >
        View PKE
      </Link>
    </div>

    <div className="rounded-2xl border border-[#d9dfd5] bg-[#fffaf0] p-7 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-[#c9902f] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          #2 Priority
        </span>

        <span className="text-sm font-semibold text-[#2f7d44]">
          Global Markets
        </span>
      </div>

      <h3 className="text-2xl font-bold text-[#18241d]">
        Palm Oil
      </h3>

      <p className="mt-3 leading-7 text-[#526158]">
        Commercial palm oil supply for food, manufacturing, distribution,
        and international markets.
      </p>

      <Link
        href="/products/agriculture/palm-oil"
        className="mt-6 inline-flex rounded-md bg-[#2f7d44] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#245f34]"
      >
        View Palm Oil
      </Link>
    </div>
  </div>
</div>

          <div className="grid gap-12">
            {populatedCategories.map((category) => (
              <section key={category.slug}>
                <div className="mb-6 flex flex-col gap-3 border-l-4 border-[#c9902f] pl-5">
                  <h3 className="text-2xl font-semibold text-[#18241d]">
                    {category.name}
                  </h3>
                  <p className="max-w-2xl leading-7 text-[#526158]">
                    {category.description}
                  </p>
                </div>
                <ProductGrid products={category.products} />
              </section>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for a reliable trading partner?"
        text="Tell us which product you need, the approximate quantity, and destination so the inquiry can be reviewed clearly."
        primaryHref="/contact"
        primaryLabel="Contact Us"
      />
    </main>
  );
}

