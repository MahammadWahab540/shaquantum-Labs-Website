import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ShaQuantum Labs — Digital Ecosystems for Sectors That Matter",
    template: "%s | ShaQuantum Labs",
  },
  description:
    "ShaQuantum Labs builds commercially scalable digital ecosystems for education, MSMEs, agriculture, and healthcare. Starting with Pathwisse.com.",
  keywords: [
    "ShaQuantum Labs",
    "Pathwisse",
    "education career pathways platform",
    "employability readiness platform",
    "digital ecosystem for education",
    "AI product innovation company India",
    "MSME digital ecosystem",
    "agriculture technology platform India",
    "healthcare digital product ecosystem",
  ],
  authors: [{ name: "ShaQuantum Labs" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ShaQuantum Labs",
    title: "ShaQuantum Labs — Digital Ecosystems for Sectors That Matter",
    description:
      "Building commercially scalable products for education, MSMEs, agriculture, and healthcare.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShaQuantum Labs",
    description: "Digital ecosystems for sectors that matter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
