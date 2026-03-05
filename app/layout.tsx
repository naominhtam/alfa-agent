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
const siteName = "Alfa Agent";
const defaultTitle = "Alfa Agent";
const defaultDescription =
  "Alfa Agent là product của Alfa Media: System-first KOC operation platform (SOP • Approval • KPI Tracking • Reporting Loop).";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: defaultTitle,
    template: "%s | Alfa Agent",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
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
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Alfa Agent" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/twitter-image"],
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
            <div className="mx-auto max-w-6xl px-6 py-12">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}