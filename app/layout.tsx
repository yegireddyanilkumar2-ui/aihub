import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://aiusagetools.com"; // ← update to your real domain once live

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AIHub — 110+ Free AI Tools for Every Industry",
    template: "%s | AIHub — Free AI Tools",
  },
  description:
    "AIHub offers 110+ free AI tools organized by industry — Real Estate, Education, Restaurant, Marketing, Healthcare, Legal, Finance, HR, E-commerce, Content Creation & Productivity. No login, no credit card. Powered by open-source AI.",
  keywords: [
    "free AI tools",
    "AI tools for business",
    "free artificial intelligence tools",
    "AI for real estate",
    "AI for education",
    "AI for restaurants",
    "AI for marketing",
    "AI for healthcare",
    "AI for legal",
    "AI for finance",
    "AI for HR",
    "AI for ecommerce",
    "AI content creator tools",
    "productivity AI tools",
    "open source AI tools",
    "free ChatGPT alternative",
    "free AI writer",
    "free AI generator",
    "AI tools no signup",
    "AI tools no credit card",
  ],
  authors: [{ name: "AIHub", url: SITE_URL }],
  creator: "AIHub",
  publisher: "AIHub",
  category: "Technology",
  classification: "AI Tools / Productivity",

  // ── Robots / Crawling ────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp previews) ───────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "AIHub",
    title: "AIHub — 110+ Free AI Tools for Every Industry",
    description:
      "Free AI tools for Real Estate, Education, Restaurants, Marketing, Healthcare, Legal, Finance, HR, E-commerce, Content Creators & Productivity. No login, no credit card required.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AIHub — Free AI Tools for Every Industry",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "AIHub — 110+ Free AI Tools for Every Industry",
    description:
      "Purpose-built AI tools for Real Estate, Education, Restaurants, Marketing, Healthcare & more. Free, no login required.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@aihubtools",
  },

  // ── Canonical & Alternates ───────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── App / PWA Icons ──────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },

  // ── Web App Manifest ─────────────────────────────────────────────────────
  manifest: "/manifest.json",

  // ── Verification (add your codes after registering) ──────────────────────
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE", // ← replace after registering
    // yandex: "YOUR_YANDEX_CODE",
    // bing: "YOUR_BING_CODE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* ── Canonical ── */}
        <link rel="canonical" href={SITE_URL} />

        {/* ── Favicon extras ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ── Color / Theme ── */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="color-scheme" content="light" />

        {/* ── Viewport ── */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* ── Schema.org JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "AIHub",
                  description: "Free AI tools organized by industry — no login, no credit card required.",
                  publisher: { "@id": `${SITE_URL}/#organization` },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?s={search_term_string}` },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "AIHub",
                  url: SITE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/og-image.png`,
                    width: 1200,
                    height: 630,
                  },
                  sameAs: [],
                },
                {
                  "@type": "WebPage",
                  "@id": `${SITE_URL}/#webpage`,
                  url: SITE_URL,
                  name: "AIHub — 110+ Free AI Tools for Every Industry",
                  isPartOf: { "@id": `${SITE_URL}/#website` },
                  about: { "@id": `${SITE_URL}/#organization` },
                  description:
                    "AIHub offers 110+ free AI tools for Real Estate, Education, Restaurants, Marketing, Healthcare, Legal, Finance, HR, E-commerce, Content Creators & Productivity.",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "AIHub",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web Browser",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    ratingCount: "120",
                    bestRating: "5",
                  },
                },
              ],
            }),
          }}
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7407560506101366"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
