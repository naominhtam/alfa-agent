// components/Footer.tsx
import Link from "next/link";

const links = [
  { href: "/for-brands", label: "For Brands" },
  { href: "/solutions/build-and-run", label: "Build & Run" },
  { href: "/join-koc", label: "Join KOC" },
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

const contact = [
  // TODO: thay email thật nếu cần
  { href: "mailto:contact@alfamedia.vn", label: "contact@alfamedia.vn" },
  // TODO: thay link social thật
  { href: "https://www.facebook.com/", label: "Facebook" },
  { href: "https://www.youtube.com/", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[rgb(var(--bg))]/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="text-base font-semibold text-white">Alfa Agent</div>
            <div className="text-sm text-white/60">Product of Alfa Media</div>
            <div className="text-xs text-white/45 leading-relaxed max-w-xs">
              System-first KOC operation platform • SOP • Approval • KPI Tracking
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white/80">Links</div>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white/80">Legal</div>
            <ul className="space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white/80">Contact</div>
            <ul className="space-y-2">
              {contact.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-white/45">
            © {year} Alfa Agent. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}