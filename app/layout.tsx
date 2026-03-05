// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const headingFont = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const SITE_URL = "https://alfamedia.vn";
const SITE_NAME = "Alfa Agent";
const DEFAULT_TITLE = "Alfa Agent";
const DEFAULT_DESC =
  "Alfa Agent là product của Alfa Media: hệ thống vận hành KOC/Affiliate theo SOP, kiểm duyệt nội dung và tracking KPI để tối ưu vòng lặp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: "%s · Alfa Agent",
  },
  description: DEFAULT_DESC,

  applicationName: SITE_NAME,
  authors: [{ name: "Alfa Media" }],
  creator: "Alfa Media",
  publisher: "Alfa Media",

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
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "vi_VN",
    type: "website",
    // CHƯA set image ở đây để tránh share bị xấu nếu chưa có OG chuẩn.
    // Khi làm SEO/OG toàn site, mình sẽ thêm images: [{ url, width, height, alt }]
  },

  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    // Khi có OG image chuẩn, mình sẽ set images luôn ở đây.
  },

  icons: {
    // Ưu tiên PNG logo để tab icon đúng như anh muốn
    icon: [{ url: "/alfa-agent-logo.png", type: "image/png" }, { url: "/favicon.ico" }],
    apple: [{ url: "/alfa-agent-logo.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1C30", // navy tone
  colorScheme: "dark",
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
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}