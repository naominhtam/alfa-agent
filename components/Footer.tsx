import Link from "next/link";

const productLinks = [
  { href: "/alfa-agent/for-brands", label: "For Brands" },
  { href: "/alfa-agent/solutions/build-and-run", label: "Build & Run" },
  { href: "/alfa-agent/join-koc", label: "Join KOC" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

const companyLinks = [
  { href: "/about", label: "About Alfa Media" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[rgb(var(--bg))]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand line */}
          <div className="space-y-3">
            <div className="text-base font-semibold tracking-tight text-white">
              Alfa Agent
            </div>
            <div className="text-sm text-white/60">Product of Alfa Media</div>

            <div className="pt-3">
              <Link
                href="/alfa-agent"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--primary-2))] hover:text-[rgb(var(--primary))] transition"
              >
                Open Alfa Agent <span className="text-white/30">→</span>
              </Link>
            </div>

            <div className="pt-2 text-xs text-white/45 leading-relaxed">
              System-first KOC operation: SOP • Approval • KPI Tracking • Reporting
              loop.
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-white/45">
              Links
            </div>
            <ul className="space-y-2 text-sm">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-white/45">
              Legal
            </div>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-white/45">
              Contact
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:admin@alfamedia.vn"
                  className="text-white/70 hover:text-white transition"
                >
                  admin@alfamedia.vn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/61587712543254"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@alfa_agent"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  TikTok
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <div className="text-xs text-white/45">Company</div>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {companyLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-white/70 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-white/45">
            © {year} Alfa Media. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/45">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}