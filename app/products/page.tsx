import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductGrid } from "@/components/ProductGrid";
import { getPopulatedCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Agricultural Products",
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
            Product Catalog
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Agricultural Products
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9e5d5]">
            Premium agricultural products sourced with a focus on quality,
            consistency, and reliable international supply.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
                Current Categories
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d]">
                Products available for inquiry
              </h2>
            </div>
            <Link
              href="/products/agriculture"
              className="inline-flex items-center justify-center rounded-md border border-[#cddac8] px-5 py-3 text-sm font-semibold text-[#224b2f] transition hover:border-[#2f7d44] hover:bg-[#f4f8f1] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
            >
              View Agriculture
            </Link>
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

