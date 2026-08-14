import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { ProductImage } from "@/components/ProductImage";
import {
  getProduct,
  getProductCategory,
  getProductsByCategory,
} from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProductsByCategory("agriculture").map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct("agriculture", slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ARP Ventures`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct("agriculture", slug);

  if (!product) {
    notFound();
  }

  const category = getProductCategory(product);

  return (
    <main>
      {/* Breadcrumb */}
      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav
            className="flex flex-wrap items-center gap-2 text-sm text-[#667467]"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="transition hover:text-[#224b2f]"
            >
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/products"
              className="transition hover:text-[#224b2f]"
            >
              Products
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/products/agriculture"
              className="transition hover:text-[#224b2f]"
            >
              Agriculture
            </Link>

            <span aria-hidden="true">/</span>

            <span className="font-medium text-[#18241d]">
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <ProductImage
              product={product}
              className="aspect-[4/3] rounded-lg border border-[#dfe8dc] shadow-sm"
              sizes="(max-width: 1024px) 100vw, 50vw"
              preload
            />

            {product.images && product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((image) => (
                  <div
                    key={image}
                    className="aspect-square overflow-hidden rounded-md border border-[#dfe8dc]"
                  >
                    <ProductImage
                      product={{
                        ...product,
                        image,
                        images: [],
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {category && (
                <span className="rounded-full bg-[#eaf3e8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#2c6a3d]">
                  {category.name}
                </span>
              )}

              {product.tradeSegment && (
                <span className="rounded-full bg-[#f7efe2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a5f18]">
                  {product.tradeSegment}
                </span>
              )}
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#18241d] sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#526158]">
              {product.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={{
                  pathname: "/contact",
                  query: { product: product.name },
                }}
                className="inline-flex items-center justify-center rounded-md bg-[#224b2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f7d44] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
              >
                Request a Quote
              </Link>

              <Link
                href="/products/agriculture"
                className="inline-flex items-center justify-center rounded-md border border-[#cddac8] px-5 py-3 text-sm font-semibold text-[#224b2f] transition hover:border-[#2f7d44] hover:bg-[#f4f8f1] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
              >
                Back to Agriculture
              </Link>
            </div>

            {/* Available Types */}
            {product.types.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-[#18241d]">
                  Available Types
                </h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {product.types.map((type) => (
                    <span
                      key={type}
                      className="rounded-md border border-[#dfe8dc] bg-white px-3 py-2 text-sm font-medium text-[#405249]"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      {/* Sourcing & Delivery */}
      {(product.origins || product.deliveryTerms) && (
        <section className="bg-[#f4f8f1] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
                Global Sourcing
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d]">
                Sourcing & Delivery Options
              </h2>

              <p className="mt-4 leading-7 text-[#526158]">
                Origin and loading port options may vary according to
                supplier availability, product specifications, quantity,
                and destination. Contact ARP Ventures for a current
                quotation.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
              {/* Origins and Ports */}
              {product.origins && product.origins.length > 0 && (
                <div className="rounded-xl border border-[#d9e2d5] bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#c9902f]">
                        Origin & Ports
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-[#18241d]">
                        Available Sourcing Options
                      </h3>
                    </div>

                    <span className="hidden text-2xl sm:block">
                      🌍
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {product.origins.map((origin) => (
                      <div
                        key={origin.country}
                        className="rounded-lg border border-[#dfe8dc] bg-[#fbfcf8] p-5"
                      >
                        <h4 className="font-semibold text-[#18241d]">
                          {origin.country}
                        </h4>

                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#667467]">
                          Loading Ports
                        </p>

                        <ul className="mt-2 space-y-1">
                          {origin.ports.map((port) => (
                            <li
                              key={port}
                              className="text-sm text-[#526158]"
                            >
                              • {port}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-md bg-[#f7efe2] px-4 py-3 text-sm leading-6 text-[#6f5525]">
                    <strong>Note:</strong> Final origin and loading port
                    are confirmed at quotation stage based on supplier
                    availability and buyer requirements.
                  </div>
                </div>
              )}

              {/* Delivery Terms */}
              {product.deliveryTerms &&
                product.deliveryTerms.length > 0 && (
                  <div className="rounded-xl border border-[#d9e2d5] bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#c9902f]">
                      Delivery
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-[#18241d]">
                      Trade Terms
                    </h3>

                    <div className="mt-6 grid gap-3">
                      {product.deliveryTerms.map((term) => (
                        <div
                          key={term}
                          className="rounded-lg border border-[#dfe8dc] bg-[#fbfcf8] px-4 py-4"
                        >
                          <span className="font-bold text-[#224b2f]">
                            {term}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <p className="text-sm font-semibold text-[#18241d]">
                        Destination
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#526158]">
                        Buyer may specify the preferred destination
                        port. Freight and final delivery terms will be
                        quoted accordingly.
                      </p>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </section>
      )}

      {/* Product Overview */}
      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
              Product Overview
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d]">
              About {product.name}
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-base leading-8 text-[#526158]">
              {product.description}
            </p>

            {/* Specifications */}
            {product.specifications &&
              product.specifications.length > 0 && (
                <section>
                  <h3 className="text-xl font-semibold text-[#18241d]">
                    Product Specifications
                  </h3>

                  <dl className="mt-4 divide-y divide-[#dfe8dc] rounded-lg border border-[#dfe8dc] bg-[#fbfcf8]">
                    {product.specifications.map((specification) => (
                      <div
                        key={specification.label}
                        className="grid gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr]"
                      >
                        <dt className="text-sm font-semibold text-[#405249]">
                          {specification.label}
                        </dt>

                        <dd className="text-sm text-[#526158]">
                          {specification.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

            {/* Applications */}
            {product.applications &&
              product.applications.length > 0 && (
                <section>
                  <h3 className="text-xl font-semibold text-[#18241d]">
                    Applications
                  </h3>

                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {product.applications.map((application) => (
                      <li
                        key={application}
                        className="rounded-md border border-[#dfe8dc] bg-[#fbfcf8] px-4 py-3 text-sm font-medium text-[#405249]"
                      >
                        {application}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

            {/* Features */}
            {product.features &&
              product.features.length > 0 && (
                <section>
                  <h3 className="text-xl font-semibold text-[#18241d]">
                    Features
                  </h3>

                  <ul className="mt-4 grid gap-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="border-l-4 border-[#c9902f] bg-[#fbfcf8] px-4 py-3 text-sm text-[#405249]"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Request a quote for ${product.name}`}
        text="Send the product name, quantity, destination, preferred origin if applicable, and delivery term so ARP Ventures can review your requirement."
        primaryHref={`/contact?product=${encodeURIComponent(
          product.name,
        )}`}
        primaryLabel="Request a Quote"
        secondaryHref="/products"
        secondaryLabel="View All Products"
      />
    </main>
  );
}