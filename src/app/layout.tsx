import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RestroKhata – Smart Restaurant & Cafe Management Software",
  description:
    "RestroKhata is a complete cloud-based restaurant management platform. Manage staff, take orders, track inventory, send WhatsApp invoices, generate QR menus, and grow your business — all in one place.",
  keywords: [
    "restaurant management software",
    "cafe management app",
    "digital menu QR code",
    "WhatsApp invoice restaurant",
    "restaurant billing software India",
    "POS system India",
    "restaurant staff management",
    "cloud restaurant software",
    "RestroKhata",
  ],
  authors: [{ name: "RestroKhata" }],
  creator: "RestroKhata",
  openGraph: {
    title: "RestroKhata – Smart Restaurant & Cafe Management",
    description:
      "Complete cloud-based restaurant management: orders, staff, QR menus, WhatsApp invoices & more. Try free for 3 months.",
    url: "https://restrokhata.com",
    siteName: "RestroKhata",
    images: [{ url: "/icons/og-image-1200x630.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RestroKhata – Smart Restaurant & Cafe Management",
    description:
      "Complete cloud-based restaurant management: orders, staff, QR menus, WhatsApp invoices & more.",
    images: ["/icons/og-image-1200x630.png"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#FF6B00",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
