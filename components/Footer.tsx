import Link from "next/link";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const productLinks = [
  { href: "/alfa-agent", label: "Alfa Agent" },
  { href: "/alfa-agent/for-brands", label: "For Brands" },
  { href: "/alfa-agent/solutions/build-and-run", label: "Build & Run" },
  { href: "/alfa-agent/join-koc", label: "Join KOC" },
];

const utilityLinks = [
  { href: "/sitemap.xml", label: "Sitemap" },
  { href: "/robots.txt", label: "Robots" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alfa Media",
  url: "https://alfamedia.vn",
  logo: "https://alfamedia.vn/og.png",
  description:
    "Alfa Media là công ty xây hệ thống nội dung, tăng trưởng và vận hành sản phẩm số. Alfa Agent là một sản phẩm thuộc Alfa Media.",
  email: "admin@alfamedia.vn",
  brand: [
    {
      "@type": "Brand",
      name: "Alfa Agent",
      url: "https://alfamedia.vn/alfa-agent",
    },
  ],
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alfa Media",
  url: "https://alfamedia.vn",
  description:
    "Website chính thức của Alfa Media. Alfa Agent là product thuộc Alfa Media.",
  publisher: {
    "@type": "Organization",
    name: "Alfa Media",
    url: "https://alfamedia.vn",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://alfamedia.vn/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="border-t border-white/10 bg-[rgb(var(--bg))]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
            {/* Brand / company intro */}
            <div className="space-y-4">
              <div>
                <div className="text-xl font-semibold tracking-tight text-white">
                  Alfa Media
                </div>
                <div className="mt-1 text-sm text-white/55">
                  Company • Content systems &amp; growth products
                </div>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-white/65">
                Alfa Media tập trung vào tư duy system-first: chuẩn hoá vận hành,
                kiểm soát chất lượng và dùng dữ liệu để tối ưu vòng lặp.{" "}
                <span className="text-white">Alfa Agent</span> là một sản phẩm thuộc
                Alfa Media.
              </p>

              <div className="space-y-1 text-sm text-white/55">
                <div>
                  Email:{" "}
                  <a
                    href="mailto:admin@alfamedia.vn"
                    className="text-white/80 transition hover:text-white"
                  >
                    admin@alfamedia.vn
                  </a>
                </div>
                <div>
                  Website:{" "}
                  <a
                    href="https://alfamedia.vn"
                    className="text-white/80 transition hover:text-white"
                  >
                    alfamedia.vn
                  </a>
                </div>
              </div>
            </div>

            {/* Company */}
            <FooterColumn title="Company" links={companyLinks} />

            {/* Product */}
            <FooterColumn title="Product" links={productLinks} />

            {/* Utility */}
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Utility
              </div>

              <div className="space-y-2">
                {utilityLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-wider text-white/40">
                  Philosophy
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  System-first
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/60">
                  Chuẩn hoá trước, scale sau.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5">
            <div className="flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
              <div>© {year} Alfa Media. All rights reserved.</div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link href="/privacy" className="transition hover:text-white/80">
                  Privacy
                </Link>
                <Link href="/terms" className="transition hover:text-white/80">
                  Terms
                </Link>
                <a href="/sitemap.xml" className="transition hover:text-white/80">
                  Sitemap
                </a>
                <a href="/robots.txt" className="transition hover:text-white/80">
                  Robots
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* SEO schema: Organization + WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <div className="space-y-4">
      <div className="text-sm font-semibold uppercase tracking-wider text-white/40">
        {title}
      </div>

      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block text-sm text-white/65 transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}