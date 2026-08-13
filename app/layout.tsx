import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getPopulatedCategories } from "@/lib/products";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ARP Ventures | Agricultural Products & Trading",
    template: "%s | ARP Ventures",
  },
  description:
    "ARP Ventures is an international trading and sourcing company focused on agricultural products and commercial buyer inquiries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const productLinks = getPopulatedCategories().map((category) => ({
    href: `/products/${category.slug}`,
    label: category.name,
  }));

  return (
    <html lang="en">
      <body>
        <SiteHeader productLinks={productLinks} />
        <div className="min-h-screen">{children}</div>
        <SiteFooter productLinks={productLinks} />
      </body>
    </html>
  );
}

