import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://ghicitincarti.ro";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cătălina Verinceanu — Ghicit în Cărți",
  alternateName: "Ghicit în Cărți",
  description:
    "Consultanță spirituală online: Tarot, Cartomanție și Ghicit în Cafea, cu peste 30 de ani de experiență în psihologie și ghidare intuitivă. Sesiuni individuale de la 500 la 1200 RON.",
  url: siteUrl,
  email: "programari@ghicitincarti.ro",
  image: `${siteUrl}/catalina.jpg`,
  areaServed: {
    "@type": "Country",
    name: "România",
  },
  availableLanguage: ["ro"],
  priceRange: "500-1200 RON",
  founder: {
    "@type": "Person",
    name: "Cătălina Verinceanu",
    jobTitle: "Consilier Spiritual",
  },
  knowsAbout: [
    "Tarot",
    "Cartomanție",
    "Ghicit în cafea",
    "Psihologie",
    "Consultanță spirituală",
    "Ghidare intuitivă",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pachete de consultanță spirituală",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Sesiune Cartomanție",
        description:
          "Citire în cărți tradiționale pentru claritate imediată în decizii concrete.",
        price: "500",
        priceCurrency: "RON",
        url: `${siteUrl}/pachete`,
      },
      {
        "@type": "Offer",
        name: "Sesiune Tarot",
        description:
          "Ghidare arhetipală și analiză intuitivă pentru evoluție personală și relațională.",
        price: "500",
        priceCurrency: "RON",
        url: `${siteUrl}/pachete`,
      },
      {
        "@type": "Offer",
        name: "Sesiune Tarot + Cartomanție",
        description:
          "Analiză extinsă ce îmbină Tarotul cu detaliile pragmatice ale cartomanției.",
        price: "666",
        priceCurrency: "RON",
        url: `${siteUrl}/pachete`,
      },
      {
        "@type": "Offer",
        name: "Experiența Supremă: Tarot + Cartomanție + Ghicit în Cafea",
        description:
          "Sesiune completă de decodare ritualică pentru claritate asupra iubirii, banilor și destinului.",
        price: "1200",
        priceCurrency: "RON",
        url: `${siteUrl}/pachete`,
      },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Cătălina Verinceanu | Tarot, Cartomanție & Ghicit în Cafea — Rezervă Online",
    template: "%s | Ghicit în Cărți",
  },
  description:
    "Obține claritate asupra viitorului tău cu Cătălina Verinceanu. Sesiuni online de Tarot, Cartomanție și Ghicit în Cafea, susținute de peste 30 de ani de expertiză psihologică. Rezervă de la 500 RON.",
  keywords: [
    "tarot online",
    "cartomanție",
    "ghicit în cafea",
    "consultanță spirituală",
    "ghicit în cărți",
    "citire tarot România",
    "Cătălina Verinceanu",
    "previziuni iubire bani destin",
    "sesiuni tarot online",
  ],
  authors: [{ name: "Cătălina Verinceanu" }],
  creator: "Cătălina Verinceanu",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: siteUrl,
    siteName: "Ghicit în Cărți",
    title:
      "Cătălina Verinceanu | Tarot, Cartomanție & Ghicit în Cafea — Rezervă Online",
    description:
      "Claritate spirituală și ghidare intuitivă online. Tarot, Cartomanție și Ghicit în Cafea cu expertiză psihologică. Programează sesiunea ta acum.",
    images: [
      {
        url: "/tarot.jpg",
        width: 1200,
        height: 630,
        alt: "Sesiuni de Tarot, Cartomanție și Ghicit în Cafea — Cătălina Verinceanu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cătălina Verinceanu | Tarot, Cartomanție & Ghicit în Cafea",
    description:
      "Sesiuni online de consultanță spirituală. Claritate pentru iubire, bani și destin.",
    images: ["/tarot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
