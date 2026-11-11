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
  title: "Stress Free Move Limited | Professional Removals & Moving Services",
  description:
    "Stress Free Move Limited provides reliable, professional house removals, office relocations, storage solutions, and man and van moving services across London and nationwide in the UK.",
  keywords: [
    "house removals",
    "office removals",
    "man and van moving",
    "stress free move",
    "storage solutions",
    "croydon removals",
    "london moving company",
  ],
  icons: {
    icon: "/images/logo.png",
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
