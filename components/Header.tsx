"use client";

import Link from "next/link";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-sm font-medium text-neutral-700 hover:text-black transition"
  >
    {label}
  </Link>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">Alfa Agent</span>
          <span className="text-xs text-neutral-500 hidden sm:inline">
            System Website
          </span>
        </Link>

        <nav className="flex items-center gap-5">
          <NavLink href="/for-brands" label="For Brands" />
          <NavLink href="/solutions/build-and-run" label="Build & Run" />
          <NavLink href="/join-koc" label="Join KOC" />
        </nav>
      </div>
    </header>
  );
}