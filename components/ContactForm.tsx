"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  initialProduct?: string;
};

export function ContactForm({
  initialProduct = "",
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error || "Unable to send your inquiry.",
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-md border border-[#cddac8] bg-white px-4 py-3 text-sm text-[#18241d] outline-none transition focus:border-[#2f7d44] focus:ring-2 focus:ring-[#c9902f]/30";

  const labelClass =
    "block text-sm font-semibold text-[#405249]";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* Buyer Information */}
      <section>
        <h2 className="text-xl font-semibold text-[#18241d]">
          Buyer Information
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">

          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name *
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              Company
            </label>

            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone / WhatsApp
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+92 / +60 / +971"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="country" className={labelClass}>
              Buyer Country *
            </label>

            <input
              id="country"
              name="country"
              type="text"
              required
              autoComplete="country-name"
              placeholder="Pakistan, UAE, Indonesia, etc."
              className={inputClass}
            />
          </div>

        </div>
      </section>

      {/* Trade Requirement */}
      <section className="border-t border-[#dfe8dc] pt-7">

        <h2 className="text-xl font-semibold text-[#18241d]">
          Trade Requirement
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">

          <div>
            <label htmlFor="product" className={labelClass}>
              Product *
            </label>

            <input
              id="product"
              name="product"
              type="text"
              required
              defaultValue={initialProduct}
              placeholder="Palm Kernel Expeller (PKE)"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="quantity" className={labelClass}>
              Quantity *
            </label>

            <input
              id="quantity"
              name="quantity"
              type="text"
              required
              placeholder="10 FCL / 250 MT"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="destination"
              className={labelClass}
            >
              Destination / Port *
            </label>

            <input
              id="destination"
              name="destination"
              type="text"
              required
              placeholder="Karachi Port, Pakistan"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="deliveryTerm"
              className={labelClass}
            >
              Delivery Term *
            </label>

            <select
              id="deliveryTerm"
              name="deliveryTerm"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select delivery term
              </option>

              <option value="FOB">
                FOB
              </option>

              <option value="CFR / CNF">
                CFR / CNF
              </option>

              <option value="CIF">
                CIF
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="packaging"
              className={labelClass}
            >
              Packaging
            </label>

            <select
              id="packaging"
              name="packaging"
              defaultValue=""
              className={inputClass}
            >
              <option value="">
                Select packaging
              </option>

              <option value="Bulk">
                Bulk
              </option>

              <option value="Jumbo Bags">
                Jumbo Bags
              </option>

              <option value="25kg Bags">
                25kg Bags
              </option>

              <option value="50kg Bags">
                50kg Bags
              </option>

              <option value="Buyer Specification">
                Buyer Specification
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="paymentTerm"
              className={labelClass}
            >
              Payment Preference
            </label>

            <select
              id="paymentTerm"
              name="paymentTerm"
              defaultValue=""
              className={inputClass}
            >
              <option value="">
                Select if known
              </option>

              <option value="LC">
                Letter of Credit (LC)
              </option>

              <option value="TT">
                Telegraphic Transfer (TT)
              </option>

              <option value="LC / TT">
                LC / TT
              </option>

              <option value="To be discussed">
                To be discussed
              </option>
            </select>
          </div>

        </div>
      </section>

      {/* Additional Requirements */}
      <section className="border-t border-[#dfe8dc] pt-7">

        <label
          htmlFor="message"
          className={labelClass}
        >
          Additional Requirements
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Include grade, specifications, target price, certifications, shipment requirements, or any other details."
          className={
            inputClass + " resize-y"
          }
        />

        <p className="mt-2 text-xs leading-5 text-[#7a867d]">
          The more information you provide, the more accurately
          we can prepare your quotation.
        </p>
      </section>

      {/* Submit */}
      <section className="border-t border-[#dfe8dc] pt-7">

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-md bg-[#224b2f] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2f7d44] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Sending Inquiry..."
            : "Submit Quote Request"}
        </button>

        <p className="mt-3 text-center text-xs leading-5 text-[#667467]">
          By submitting this form, you are requesting a
          commercial quotation. Final pricing and terms are
          subject to product availability and confirmation.
        </p>
      </section>

      {/* Success */}
      {submitted && (
        <div
          role="status"
          className="rounded-md border border-[#b8d5bd] bg-[#edf7ef] px-4 py-4 text-sm font-medium text-[#245f34]"
        >
          Thank you. Your quote request has been received.
          ARP Ventures will review your requirement and contact
          you shortly.
        </div>
      )}

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="rounded-md border border-[#e4b9b9] bg-[#fff3f3] px-4 py-4 text-sm font-medium text-[#9b3535]"
        >
          {error}
        </div>
      )}

    </form>
  );
}