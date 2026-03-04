import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Alfa Agent. All rights reserved.</p>

          <div className="flex gap-4">
            <Link className="hover:text-white transition" href="/legal/privacy">
              Privacy
            </Link>
            <Link className="hover:text-white transition" href="/legal/terms">
              Terms
            </Link>
            <Link
              className="hover:text-white transition"
              href="/legal/security-policy"
            >
              Security Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}