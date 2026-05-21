import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WG Wien – Zimmer frei | 15 m², Parkett, 396 €/Mo",
  description:
    "Wir suchen eine neue Mitbewohnerin / einen neuen Mitbewohner für unsere 3er-WG in Wien. 15,11 m², Parkettboden, ruhig und hell. Gesamtkosten 396 €/Monat all-in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
