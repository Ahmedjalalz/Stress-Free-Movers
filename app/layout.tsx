import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stressfreemoveltd.co.uk"),
  title: {
    default: "Stress Free Move Limited | Professional Removals & Moving Services",
    template: "%s | Stress Free Move Limited",
  },
  description:
    "Stress Free Move Limited provides reliable, fully insured house removals, office relocations, storage solutions, and man & van moving services across London and nationwide in the UK. Rated 4.9★ on Trustpilot.",
  keywords: [
    "house removals",
    "office removals",
    "man and van moving",
    "stress free move",
    "storage solutions",
    "croydon removals",
    "london moving company",
    "uk removals",
    "packing services",
  ],
  authors: [{ name: "Stress Free Move Limited", url: "https://stressfreemoveltd.co.uk" }],
  creator: "Stress Free Move Limited",
  publisher: "Stress Free Move Limited",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stress Free Move Limited | Professional Removals & Moving Services",
    description:
      "Reliable, fully insured house removals, office relocations, storage solutions, and man & van services across London and nationwide in the UK. Rated 4.9★ on Trustpilot.",
    url: "https://stressfreemoveltd.co.uk",
    siteName: "Stress Free Move Limited",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1080,
        height: 1350,
        type: "image/jpeg",
        alt: "Stress Free Move Limited - Stress-Free Moves, Handled With Care",
      },
      {
        url: "/images/og-image.png",
        width: 1080,
        height: 1350,
        type: "image/png",
        alt: "Stress Free Move Limited - Stress-Free Moves, Handled With Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stress Free Move Limited | Professional Removals & Moving Services",
    description:
      "Reliable, fully insured house removals, office relocations, storage solutions, and man & van services across London and nationwide in the UK.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased text-navy-800 bg-white`}>
        {children}
      </body>
    </html>
  );
}
