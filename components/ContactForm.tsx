"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  initialProduct?: string;
};

const inputClass =
  "mt-2 w-full rounded-md border border-[#cddac8] bg-white px-4 py-3 text-[#18241d] outline-none transition placeholder:text-[#8a998d] focus:border-[#2f7d44] focus:ring-2 focus:ring-[#c9902f]/35";

const labelClass = "text-sm font-semibold text-[#29372e]";

export function ContactForm({ initialProduct = "" }: ContactFormProps) {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      country: formData.get("country"),
      product: formData.get("product"),
      quantity: formData.get("quantity"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Thank you. Your request has been sent successfully.");
        form.reset();
      } else {
        setStatus(result.message || "Unable to send your request.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
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
            placeholder="Company name"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
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
            placeholder="+60 12 345 6789"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Your country"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="product" className={labelClass}>
            Product / Service Required
          </label>
          <input
            id="product"
            name="product"
            type="text"
            placeholder="Mangoes, rice, PKE, palm oil, etc."
            defaultValue={initialProduct}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="quantity" className={labelClass}>
          Quantity / Requirement
        </label>
        <textarea
          id="quantity"
          name="quantity"
          placeholder="Example: 20 metric tons"
          rows={4}
          className={`${inputClass} resize-y`}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your requirements, destination, specifications, etc."
          rows={5}
          required
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-[#224b2f] px-5 py-3.5 text-base font-semibold text-white transition hover:bg-[#2f7d44] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
      >
        Send Request
      </button>

      {status && (
        <p
          className="rounded-md bg-[#eef6ec] px-4 py-3 text-center text-sm font-semibold text-[#224b2f]"
          role="status"
        >
          {status}
        </p>
      )}
    </form>
  );
}

