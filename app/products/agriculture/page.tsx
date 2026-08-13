import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { ProductGrid } from "@/components/ProductGrid";
import { getCategoryWithProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Agriculture Products",
  description:
    "Explore ARP Ventures agriculture products including mangoes, rice, maize, palm oil, and palm kernel expeller.",
};

export default function AgricultureProductsPage() {
  const category = getCategoryWithProducts("agriculture");

  if (!category) {
    notFound();
  }

  return (
    <main>
      <section className="bg-[#18241d] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c9902f]">
            Products / Agriculture
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Agriculture Products
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9e5d5]">
            {category.description}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
              Catalog
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d]">
              Current agriculture products
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#526158]">
              Browse currently available agriculture products and open product
              details for inquiry-specific information.
            </p>
          </div>

          <ProductGrid products={category.products} />
        </div>
      </section>

      <CTASection
        title="Need a product-specific quote?"
        text="Open a product page or send the product name, quantity, and destination through the contact form."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        secondaryHref="/products"
        secondaryLabel="All Products"
      />
    </main>
  );
}

