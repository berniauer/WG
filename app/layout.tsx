import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  title: "WG Graz - Zimmer frei | 15 m², Parkett, 405 €/Mo",
  description:
    "Wir suchen eine neue Mitbewohnerin / einen neuen Mitbewohner für unsere 3er-WG in Graz. Bergmanngasse 45/5, 15,11 m², Parkettboden, 2. OG, Balkon und 404,64 €/Monat all-in.",
};

const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        {umamiScriptUrl && umamiWebsiteId ? (
          <Script
            src={umamiScriptUrl}
            data-website-id={umamiWebsiteId}
            data-domains="wg.auerlytics.at"
            data-do-not-track="true"
            data-performance="true"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
