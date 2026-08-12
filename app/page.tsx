import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", padding: "20px" }}>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "70px 20px",
          background: "#0f172a",
          color: "white",
          borderRadius: "12px",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "15px",
          }}
        >
          ARP Ventures
        </h1>

        <h2
          style={{
            fontSize: "26px",
            fontWeight: "normal",
            color: "#22c55e",
          }}
        >
          International Trading, Sourcing & Professional Services
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "25px auto",
            fontSize: "19px",
            lineHeight: "1.7",
            color: "#e2e8f0",
          }}
        >
          Connecting buyers, suppliers, businesses and professionals
          across international markets through trusted trading,
          sourcing and professional services.
        </p>

        <div style={{ marginTop: "35px" }}>

          <Link
            href="/products"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "#22c55e",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              margin: "8px",
            }}
          >
            View Products & Services
          </Link>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "white",
              color: "#0f172a",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              margin: "8px",
            }}
          >
            Request a Quote
          </Link>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ fontSize: "32px" }}>
          What We Do
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "20px auto",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#555",
          }}
        >
          ARP Ventures works across international trading, sourcing,
          business services and education. We aim to connect
          reliable suppliers with buyers while helping businesses
          and professionals access suitable opportunities and
          knowledge.
        </p>
      </section>


      {/* BUSINESS AREAS */}
      <section>

        <div
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >

          {/* AGRICULTURE */}
          <div
            style={{
              width: "250px",
              padding: "30px",
              background: "#f8fafc",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "50px" }}>
              🌾
            </div>

            <h3>
              Commodity Trading
            </h3>

            <p
              style={{
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Mangoes, rice, grains, palm oil and Palm Kernel
              Expeller (PKE).
            </p>
          </div>


          {/* TEXTILES */}
          <div
            style={{
              width: "250px",
              padding: "30px",
              background: "#f8fafc",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "50px" }}>
              🧵
            </div>

            <h3>
              Textile & General Trading
            </h3>

            <p
              style={{
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Towels, textiles and selected general commodities
              based on buyer requirements.
            </p>
          </div>


          {/* FINANCE */}
          <div
            style={{
              width: "250px",
              padding: "30px",
              background: "#f8fafc",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "50px" }}>
              💼
            </div>

            <h3>
              Finance & Business Services
            </h3>

            <p
              style={{
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Financial analysis, trade finance advisory and
              investment research.
            </p>
          </div>


          {/* EDUCATION */}
          <div
            style={{
              width: "250px",
              padding: "30px",
              background: "#f8fafc",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "50px" }}>
              🎓
            </div>

            <h3>
              Education & Training
            </h3>

            <p
              style={{
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Business, finance and international trade education
              and professional training.
            </p>
          </div>

        </div>

      </section>


      {/* WHY ARP */}
      <section
        style={{
          marginTop: "70px",
          padding: "55px 30px",
          background: "#f8fafc",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px" }}>
          Why ARP Ventures?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >

          <div>
            <h3>🌍 Global Perspective</h3>
            <p>Connecting opportunities across international markets.</p>
          </div>

          <div>
            <h3>🤝 Reliable Partnerships</h3>
            <p>Building long-term relationships with buyers and suppliers.</p>
          </div>

          <div>
            <h3>📊 Professional Approach</h3>
            <p>Focused on research, communication and informed decisions.</p>
          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section
        style={{
          marginTop: "60px",
          padding: "60px 30px",
          background: "#0f172a",
          color: "white",
          textAlign: "center",
          borderRadius: "12px",
        }}
      >

        <h2 style={{ fontSize: "32px" }}>
          Let's Work Together
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "20px auto",
            lineHeight: "1.7",
            color: "#cbd5e1",
          }}
        >
          Whether you are looking for agricultural commodities,
          sourcing opportunities, business services or professional
          education, contact ARP Ventures to discuss your requirements.
        </p>

        <Link
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "14px 30px",
            background: "#22c55e",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          Contact ARP Ventures
        </Link>

      </section>

    </main>
  );
}