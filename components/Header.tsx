"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

type NavLink = { href: string; label: string };

const companyLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const productLinks: NavLink[] = [
  { href: "/alfa-agent", label: "Alfa Agent" },
  { href: "/alfa-agent/for-brands", label: "For Brands" },
  { href: "/alfa-agent/solutions/build-and-run", label: "Build & Run" },
  { href: "/alfa-agent/join-koc", label: "Join KOC" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/alfa-agent") {
    return pathname === "/alfa-agent" || pathname.startsWith("/alfa-agent/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const mounted = useMounted();

  const productActive = useMemo(
    () => productLinks.some((l) => isActivePath(pathname, l.href)),
    [pathname]
  );

  // Lock scroll + ESC to close (iOS-safe)
  useEffect(() => {
    if (!open) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgb(var(--bg))]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          {/* Brand */}
          <Link href="/" className="group flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
              Alfa Media
            </span>
            <span className="text-[11px] text-white/55 sm:text-xs">
              Company • Content systems &amp; products
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {/* Product cluster */}
            <div className="flex items-center gap-4">
              <Link
                href="/alfa-agent"
                className={[
                  "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition",
                  productActive
                    ? "bg-white/10 text-white ring-1 ring-white/15"
                    : "bg-white/5 text-white/85 ring-1 ring-white/10 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                Alfa Agent
                <span className="ml-2 text-[11px] font-medium text-[rgb(var(--primary-2))]">
                  Product
                </span>
              </Link>

              <div className="hidden items-center gap-5 lg:flex">
                {productLinks.slice(1).map((l) => {
                  const active = isActivePath(pathname, l.href);
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={[
                        "text-sm font-medium transition",
                        active ? "text-white" : "text-white/70 hover:text-white",
                      ].join(" ")}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Company cluster */}
            <div className="flex items-center gap-5 border-l border-white/10 pl-6">
              {companyLinks.map((l) => {
                const active = isActivePath(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={[
                      "text-sm font-medium transition",
                      active ? "text-white" : "text-white/70 hover:text-white",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white aa-focus"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu-drawer"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile drawer rendered in Portal (prevents hero stacking issues) */}
      {mounted && open
        ? createPortal(
            <MobileMenu
              pathname={pathname}
              onClose={() => setOpen(false)}
            />,
            document.body
          )
        : null}
    </>
  );
}

function MobileMenu({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) {
  return (
    <div className="md:hidden fixed inset-0 z-[9999]">
      <div
        className="absolute inset-0 bg-black/65 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-menu-drawer"
        className="absolute right-0 top-0 z-[10000] flex h-full w-[88%] max-w-sm flex-col border-l border-white/10 bg-[rgb(var(--bg))] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="shrink-0 border-b border-white/10 px-4 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-1">
              <div className="text-sm font-semibold text-white">Alfa Media</div>
              <div className="text-xs text-white/55">
                Product:{" "}
                <span className="text-[rgb(var(--primary-2))]">Alfa Agent</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white aa-focus"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            {/* Product */}
            <div className="space-y-2">
              <div className="px-1 text-xs uppercase tracking-wider text-white/40">
                Product
              </div>

              {productLinks.map((l) => {
                const active = isActivePath(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={onClose}
                    className={[
                      "block rounded-2xl border px-4 py-3 text-base font-semibold transition",
                      active
                        ? "border-white/15 bg-white/10 text-white"
                        : "border-white/10 bg-white/5 text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span>{l.label}</span>
                      <span className="text-xs text-white/35">→</span>
                    </div>

                    {l.href === "/alfa-agent" && (
                      <div className="mt-1 text-xs font-medium text-white/55">
                        Landing • chọn đúng cửa funnel
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Company */}
            <div className="space-y-2">
              <div className="px-1 text-xs uppercase tracking-wider text-white/40">
                Company
              </div>

              {companyLinks.map((l) => {
                const active = isActivePath(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={onClose}
                    className={[
                      "block rounded-2xl border px-4 py-3 text-base font-semibold transition",
                      active
                        ? "border-white/15 bg-white/10 text-white"
                        : "border-white/10 bg-white/5 text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span>{l.label}</span>
                      <span className="text-xs text-white/35">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 text-xs text-white/45">
              Alfa Agent • Product of Alfa Media
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}