import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jagmaintenance.com"),
  title: "NYC Street Cleaning & Power Washing | JAG Maintenance",
  description:
    "Brooklyn-based street cleaning, power washing, and window cleaning serving NYC's five boroughs since 1999. Trusted by Business Improvement Districts across New York City.",
  alternates: {
    canonical: "/",
  },
  applicationName: "JAG Maintenance & Cleaning LLC",
  openGraph: {
    title: "NYC Street Cleaning & Power Washing | JAG Maintenance",
    description:
      "Brooklyn-based street cleaning, power washing, and window cleaning serving NYC's five boroughs since 1999.",
    url: "/",
    siteName: "JAG Maintenance & Cleaning LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Street Cleaning & Power Washing | JAG Maintenance",
    description:
      "Street cleaning, power washing, and window cleaning for Business Improvement Districts across New York City.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-surface-dark text-ink">{children}</body>
    </html>
  );
}
