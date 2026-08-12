"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
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
        setStatus("Thank you! Your request has been sent successfully.");
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
    <main
      style={{
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <section
        style={{
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
          Request a Quote
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#555",
          }}
        >
          Tell ARP Ventures what agricultural products or services
          you are looking for and our team will get back to you.
        </p>
      </section>

      <section
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          padding: "35px",
          background: "#f8fafc",
          borderRadius: "12px",
        }}
      >
        <form onSubmit={handleSubmit}>

          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Your full name"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          />

          <label>Company</label>
          <input
            name="company"
            type="text"
            placeholder="Company name"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          />

          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          />

          <label>Phone / WhatsApp</label>
          <input
            name="phone"
            type="tel"
            placeholder="+60 12 345 6789"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          />

          <label>Country</label>
          <input
            name="country"
            type="text"
            placeholder="Your country"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          />

          <label>Product / Service Required</label>
          <input
            name="product"
            type="text"
            placeholder="Mangoes, rice, PKE, palm oil, towels, etc."
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          />

          <label>Quantity / Requirement</label>
          <textarea
            name="quantity"
            placeholder="Example: 20 metric tons"
            rows={4}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
              resize: "vertical",
            }}
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Tell us about your requirements, destination, specifications, etc."
            rows={5}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "#0f172a",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Send Request
          </button>

          {status && (
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {status}
            </p>
          )}

        </form>
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h2>Contact ARP Ventures</h2>

        <p
          style={{
            fontSize: "17px",
            color: "#555",
          }}
        >
          Email us directly at:
        </p>

        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          arpventures.info@gmail.com
        </p>
        <a
  href="https://wa.me/60176484306?text=Hello%20ARP%20Ventures%2C%20I%20would%20like%20to%20make%20an%20enquiry."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginTop: "15px",
    padding: "14px 28px",
    background: "#25D366",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  }}
>
  WhatsApp ARP Ventures
</a>
      </section>
    </main>
  );
}