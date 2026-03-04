"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/for-brands", label: "For Brands" },
  { href: "/solutions/build-and-run", label: "Build & Run" },
  { href: "/join-koc", label: "Join KOC" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll when menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgb(var(--bg))]/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-base sm:text-lg font-semibold tracking-tight text-white">
            Alfa Agent
          </span>
          <span className="text-[11px] sm:text-xs text-white/60">
            Product of Alfa Media
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-white transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="sm:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white aa-focus"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-[rgb(var(--bg))] aa-shadow">
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <div className="text-sm font-semibold text-white">Navigation</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white aa-focus"
              >
                Close
              </button>
            </div>

            <div className="p-4 space-y-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
                >
                  {l.label}
                </Link>
              ))}

              <div className="pt-4 text-xs text-white/60">
                Alfa Agent • Product of Alfa Media
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}