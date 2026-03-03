export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Alfa Agent. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-black" href="/legal/privacy">
              Privacy
            </a>
            <a className="hover:text-black" href="/legal/terms">
              Terms
            </a>
            <a className="hover:text-black" href="/legal/security-policy">
              Security Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}