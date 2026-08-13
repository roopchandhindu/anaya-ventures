import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ARP Ventures",
  description:
    "Learn about ARP Ventures, its trading and sourcing focus, mission, vision, and agriculture product inquiry approach.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#18241d] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c9902f]">
            Company
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            About ARP Ventures
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d9e5d5]">
            ARP Ventures connects buyers, suppliers, businesses, and
            professionals across international markets through trading,
            sourcing, and professional services.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
              Company Overview
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d]">
              Professional trading and sourcing support.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#526158]">
            <p>
              The company works across international trading, sourcing,
              business services, and education. Its current website focus is a
              structured agricultural product catalog for commercial product
              inquiries.
            </p>
            <p>
              ARP Ventures aims to connect reliable suppliers with buyers while
              helping businesses and professionals access suitable opportunities
              and knowledge. Product information is kept data-driven so new
              verified categories and details can be added without rebuilding
              the site.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-[#dfe8dc] bg-[#fbfcf8] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
              Mission
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#18241d]">
              Clear sourcing support for commercial buyers.
            </h2>
            <p className="mt-4 leading-7 text-[#526158]">
              To support buyer and supplier connections through professional
              communication, quality-focused sourcing, and practical trade
              inquiry handling.
            </p>
          </div>

          <div className="rounded-lg border border-[#dfe8dc] bg-[#fbfcf8] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
              Vision
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#18241d]">
              A trusted path for agricultural product inquiries.
            </h2>
            <p className="mt-4 leading-7 text-[#526158]">
              To become a dependable trading and sourcing partner for
              businesses seeking consistent, well-communicated agricultural
              supply options.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18241d]">
              Built around clarity, quality, and reliable follow-up.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Quality-focused sourcing",
              "Reliable supply conversations",
              "Export-oriented operations",
              "Customer-focused service",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#dfe8dc] bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#18241d]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#18241d] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Looking for reliable agricultural products?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#d9e5d5]">
              Explore the current catalog or send a product-specific inquiry to
              ARP Ventures.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
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
      </section>
    </main>
  );
}

