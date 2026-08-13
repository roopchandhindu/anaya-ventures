import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "ARP Ventures | Agricultural Products & Export Sourcing",
  description:
    "Explore ARP Ventures agricultural products, sourcing support, and quote inquiries for commercial buyers.",
};

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main>
      <section className="bg-[#18241d] px-6 py-20 text-white sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c9902f]">
              Agricultural Trading & Sourcing
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              ARP Ventures
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9e5d5]">
              Connecting commercial buyers with agricultural products through
              professional sourcing, clear communication, and export-oriented
              inquiry support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-[#c9902f] px-5 py-3 text-sm font-semibold text-[#18241d] transition hover:bg-[#e0a842] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#18241d]"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#18241d]"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.categorySlug}/${product.slug}`}
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#c9902f]"
              >
                <span className="block text-sm font-semibold text-[#c9902f]">
                  {product.tradeSegment}
                </span>
                <span className="mt-2 block text-xl font-semibold text-white">
                  {product.name}
                </span>
                <span className="mt-3 block text-sm leading-6 text-[#c8d7c3]">
                  {product.shortDescription}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d] sm:text-4xl">
              Trade-focused support for agricultural product inquiries.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#526158]">
              ARP Ventures works across international trading, sourcing,
              business services, and education. The website now focuses the
              product catalog on agricultural commodities already represented in
              the business content.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Quality-focused sourcing",
                text: "Product inquiries are handled with attention to buyer requirements and available product details.",
              },
              {
                title: "Reliable communication",
                text: "Requests can include product, quantity, destination, and specification needs for clearer follow-up.",
              },
              {
                title: "Export-oriented operations",
                text: "The catalog is structured for commercial and international buyer conversations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#dfe8dc] bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#18241d]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#526158]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
                Explore Our Products
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d] sm:text-4xl">
                Agricultural product catalog
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#526158]">
                Browse current agriculture products and submit an inquiry for
                product-specific quote support.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md border border-[#cddac8] px-5 py-3 text-sm font-semibold text-[#224b2f] transition hover:border-[#2f7d44] hover:bg-[#f4f8f1] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
            >
              View All Products
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
              About ARP Ventures
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d] sm:text-4xl">
              A professional sourcing partner for agricultural buyers.
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-[#526158]">
              ARP Ventures connects buyers, suppliers, businesses, and
              professionals across international markets through trading,
              sourcing, and professional services. The product catalog is built
              to expand as more verified company and product information becomes
              available.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#224b2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f7d44] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for reliable agricultural products?"
        text="Share the product, quantity, destination, and any requirements so ARP Ventures can review your inquiry."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        secondaryHref="/products"
        secondaryLabel="Explore Products"
      />
    </main>
  );
}

