import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Bal Niketan Sr. Sec. School, Pilani",
    template: "%s | Bal Niketan School Pilani",
  },
  description:
    "Bal Niketan Sr. Sec. School, Pilani offers quality education with modern facilities, experienced faculty, smart classes, science labs, and co-curricular activities for holistic student development.",

  keywords: [
    "Bal Niketan School Pilani",
    "Best school in Pilani",
    "Senior Secondary School Pilani",
    "CBSE School Pilani",
    "Top school in Jhunjhunu",
    "School admission Pilani Rajasthan",
    "Bal Niketan Pilani"
  ],

  authors: [{ name: "Bal Niketan School" }],
  creator: "Bal Niketan School",
  publisher: "Bal Niketan School",

  metadataBase: new URL("https://www.balniketan.ind.in"),

  openGraph: {
    title: "Bal Niketan Sr. Sec. School, Pilani",
    description:
      "Discover excellence in education at Bal Niketan School Pilani.",
    url: "https://www.balniketan.ind.in",
    siteName: "Bal Niketan School Pilani",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bal Niketan School Pilani",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bal Niketan School Pilani",
    description: "Best school in Pilani with modern facilities.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2d5a8c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification (ADD YOUR CODE) */}
        {/* <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        /> */}

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.balniketan.ind.in" />

        {/* ✅ Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              // School Schema
              {
                "@context": "https://schema.org",
                "@type": "School",
                name: "Bal Niketan Sr. Sec. School",
                url: "https://www.balniketan.ind.in",
                logo: "https://www.balniketan.ind.in/logo.png",
                description:
                  "Top senior secondary school in Pilani offering modern education and facilities.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Pilani",
                  addressRegion: "Rajasthan",
                  addressCountry: "IN",
                },
              },

              // Organization Schema
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Bal Niketan School",
                url: "https://www.balniketan.ind.in",
                logo: "https://www.balniketan.ind.in/logo.png",
              },

              // Website Schema
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: "https://www.balniketan.ind.in",
                name: "Bal Niketan School Pilani",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://www.balniketan.ind.in/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />

        {/* ✅ Breadcrumb Schema (Optional but powerful) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.balniketan.ind.in",
                },
              ],
            }),
          }}
        />

        {/* ✅ Theme Color */}
        <meta name="theme-color" content="#2d5a8c" />
      </head>

      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}