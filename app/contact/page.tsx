import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

type ContactPageProps = {
  searchParams: Promise<{
    product?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Contact ARP Ventures for agricultural product inquiries, quantities, destinations, and quote requests.",
};

export default async function Contact({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const productParam = Array.isArray(params.product)
    ? params.product[0]
    : params.product;
  const initialProduct = productParam ?? "";

  return (
    <main>
      <section className="bg-[#18241d] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c9902f]">
            Contact
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Request a Quote
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9e5d5]">
            Tell ARP Ventures what agricultural products you are looking for,
            including quantity, destination, and requirement details.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <div className="rounded-lg border border-[#dfe8dc] bg-white p-6 shadow-sm sm:p-8">
            <ContactForm initialProduct={initialProduct} />
          </div>

          <aside className="rounded-lg border border-[#dfe8dc] bg-[#fbfcf8] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#18241d]">
              Contact ARP Ventures
            </h2>
            <p className="mt-4 leading-7 text-[#526158]">
              Use the form for product-specific inquiries or contact ARP
              Ventures directly.
            </p>

            <div className="mt-6 grid gap-4 text-sm">
              <a
                href="mailto:arpventures.info@gmail.com"
                className="rounded-md border border-[#dfe8dc] bg-white px-4 py-3 font-semibold text-[#224b2f] transition hover:border-[#2f7d44]"
              >
                arpventures.info@gmail.com
              </a>
              <a
                href="tel:+60176484306"
                className="rounded-md border border-[#dfe8dc] bg-white px-4 py-3 font-semibold text-[#224b2f] transition hover:border-[#2f7d44]"
              >
                +60 17 648 4306
              </a>
              <a
                href="https://wa.me/60176484306?text=Hello%20ARP%20Ventures%2C%20I%20would%20like%20to%20make%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#1f8f52] px-5 py-3 font-semibold text-white transition hover:bg-[#187744] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
              >
                WhatsApp ARP Ventures
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

