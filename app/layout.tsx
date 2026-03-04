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

export const metadata: Metadata = {
  metadataBase: new URL("https://alfamedia.vn"),
  title: {
    default: "Alfa Agent",
    template: "%s | Alfa Agent",
  },
  description: "System-based KOC & Affiliate Operation",
  openGraph: {
    title: "Alfa Agent",
    description: "System-based KOC & Affiliate Operation",
    url: "https://alfamedia.vn",
    siteName: "Alfa Agent",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfa Agent",
    description: "System-based KOC & Affiliate Operation",
  },
  icons: { icon: "/favicon.ico" },
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