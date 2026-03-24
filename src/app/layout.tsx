import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Preloader } from "@/components/preloader";

const metadataBase = new URL("https://dadamjenzi.co.ke");

export const metadata: Metadata = {
  title: "DADA MJENZI | Premium Interior Finishing Services | Nairobi Kenya",
  description:
    "Transform your space with Nairobi's premier interior finishing company. Expert painting, custom cabinetry, professional tiling, furniture restoration & solar installations. 15+ years of craftsmanship excellence. Free consultations available.",
  keywords: [
    "interior finishing Nairobi",
    "women painters Kenya",
    "custom cabinetry Nairobi",
    "professional tiling services",
    "furniture restoration Kenya",
    "home renovation Nairobi",
    "kitchen remodeling",
    "bathroom renovation",
    "solar installations Kenya",
    "interior design Nairobi",
    "house painting services",
    "commercial painting Kenya",
  ].join(", "),
  authors: [{ name: "DADA MJENZI" }],
  creator: "DADA MJENZI",
  publisher: "DADA MJENZI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DADA MJENZI | Premium Interior Finishing Services | Nairobi Kenya",
    description:
      "Transform your space with Nairobi's premier interior finishing company. Expert painting, custom cabinetry, professional tiling & more. 15+ years experience.",
    url: "https://dadamjenzi.co.ke",
    siteName: "DADA MJENZI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DADA MJENZI - Premium Interior Finishing Services in Nairobi",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DADA MJENZI | Premium Interior Finishing Services | Nairobi Kenya",
    description:
      "Transform your space with Nairobi's premier interior finishing company. Expert painting, custom cabinetry, professional tiling & more.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
    generator: 'v0.app'
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Creepster&family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <style>{`
            :root {
              --font-cool-jazz: 'Creepster', cursive;
              --font-luckiest-guy: 'Luckiest Guy', cursive;
            }
          `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "DADA MJENZI",
              description:
                "Premium interior finishing services in Nairobi, Kenya. Expert painting, custom cabinetry, professional tiling, furniture restoration & solar installations.",
              url: "https://dadamjenzi.co.ke",
              telephone: "+254710136798",
              email: "wanguimiro.hellen@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressCountry: "Kenya",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-1.2921",
                longitude: "36.8219",
              },
              openingHours: "Mo-Sa 08:00-18:00",
              priceRange: "KSh 10,000 - KSh 500,000",
              serviceArea: {
                "@type": "City",
                name: "Nairobi",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Interior Finishing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Interior Painting",
                      description: "Professional interior and exterior painting services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Cabinetry",
                      description: "Bespoke cabinet design and installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Professional Tiling",
                      description: "Expert tile installation for floors and walls",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="bg-gray-900 text-white font-body antialiased">
        <Preloader />
        {children}
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
