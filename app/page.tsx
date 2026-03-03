export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Alfa Agent</h1>
      <p className="mt-3 text-neutral-600">
        System website scaffold is ready.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <a
          href="/for-brands"
          className="rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 transition"
        >
          <div className="text-sm text-neutral-500">Entry</div>
          <div className="mt-2 font-semibold">For Brands</div>
          <div className="mt-2 text-sm text-neutral-600">
            Brief → SOP → KPI tracking
          </div>
        </a>

        <a
          href="/solutions/build-and-run"
          className="rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 transition"
        >
          <div className="text-sm text-neutral-500">Service</div>
          <div className="mt-2 font-semibold">Build & Run</div>
          <div className="mt-2 text-sm text-neutral-600">
            Setup → Operate → Scale
          </div>
        </a>

        <a
          href="/join-koc"
          className="rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 transition"
        >
          <div className="text-sm text-neutral-500">Talent</div>
          <div className="mt-2 font-semibold">Join KOC</div>
          <div className="mt-2 text-sm text-neutral-600">
            Discipline → Template → KPI
          </div>
        </a>
      </div>
    </div>
  );
}