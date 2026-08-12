import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial",
          background: "#f5f5f5",
          color: "#0f172a",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            background: "#0f172a",
            color: "white",
            padding: "18px 40px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* LOGO */}
            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                }}
              >
                ARP Ventures
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  marginTop: "3px",
                }}
              >
                Global Trading & Professional Services
              </div>
            </Link>

            {/* NAVIGATION */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "22px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>

              <Link
                href="/products"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Products & Services
              </Link>

              <Link
                href="/about"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                About
              </Link>

              <Link
                href="/contact"
                style={{
                  background: "#22c55e",
                  color: "white",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "white",
            minHeight: "calc(100vh - 100px)",
          }}
        >
          {children}
        </div>

        {/* FOOTER */}
        <footer
          style={{
            background: "#0f172a",
            color: "white",
            textAlign: "center",
            padding: "35px 20px",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>
            ARP Ventures
          </h3>

          <p
            style={{
              color: "#94a3b8",
              margin: "5px 0",
            }}
          >
            International Trading, Sourcing & Professional Services
          </p>

          <p
            style={{
              color: "#cbd5e1",
              marginTop: "15px",
            }}
          >
            📧 arpventures.info@gmail.com
          </p>

          <p
            style={{
              color: "#cbd5e1",
            }}
          >
            📱 +60 17 648 4306
          </p>

          <p
            style={{
              marginTop: "25px",
              fontSize: "13px",
              color: "#64748b",
            }}
          >
            © {new Date().getFullYear()} ARP Ventures. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}