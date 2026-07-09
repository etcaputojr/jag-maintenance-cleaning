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
  title: "JAG Maintenance & Cleaning LLC | NYC Street Cleaning & Power Washing",
  description:
    "Brooklyn-based street cleaning, power washing, and window cleaning serving NYC's five boroughs since 1999. Trusted by Business Improvement Districts across New York City.",
  openGraph: {
    title: "JAG Maintenance & Cleaning LLC",
    description:
      "Brooklyn-based street cleaning, power washing, and window cleaning serving NYC's five boroughs since 1999.",
    type: "website",
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
