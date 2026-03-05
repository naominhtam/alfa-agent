// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const headingFont = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const siteUrl = "https://alfamedia.vn";
const siteName = "Alfa Media";
const defaultTitle = "Alfa Media";
const defaultDescription =
  "Alfa Media — company building content systems & products. Product: Alfa Agent (system-first KOC operation).";

// ✅ Put a real OG image here (create later): /public/og.png (1200×630)
const ogImage = "/og.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: "%s | Alfa Media",
  },

  description: defaultDescription,
  applicationName: siteName,

  // Better index control (safe default)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Optional but nice for trust/SEO
  keywords: [
    "Alfa Media",
    "Alfa Agent",
    "KOC",
    "Affiliate",
    "Content system",
    "SOP",
    "KPI tracking",
  ],
  authors: [{ name: "Alfa Media", url: siteUrl }],
  creator: "Alfa Media",
  publisher: "Alfa Media",

  // ⚠️ Do NOT hardcode canonical to root for all pages.
  // Each page can define its own canonical if needed.
  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Alfa Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${headingFont.variable} min-h-screen antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}