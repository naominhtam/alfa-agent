// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alfa Media",
  description:
    "Alfa Media xây hệ thống nội dung & sản phẩm tăng trưởng. Product: Alfa Agent — system-first KOC operation (SOP • Approval • KPI Tracking • Reporting Loop).",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alfa Media",
    description:
      "Company building content systems & growth products. Product: Alfa Agent — system-first KOC operation.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alfa Media — Product: Alfa Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfa Media",
    description:
      "Company building content systems & growth products. Product: Alfa Agent.",
    images: ["/og.png"],
  },
};

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* HERO */}
      <section className="pt-0 sm:pt-2">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgb(var(--surface))] aa-shadow">
          {/* top light */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-white/15 to-transparent" />
          {/* soft glows */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgb(var(--primary))]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[rgb(var(--primary-2))]/10 blur-3xl" />

          <div className="relative p-5 sm:p-10">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="aa-badge">
                <span className="font-medium text-white">Alfa Media</span>
                <span className="mx-2 text-white/30">•</span>
                <span className="text-white/60">Company</span>
              </span>
              <span className="aa-badge">
                <span className="text-white/60">Content systems & growth products</span>
              </span>
            </div>

            {/* Title */}
            <div className="mt-7 sm:mt-8 max-w-3xl">
              <h1 className="text-[32px] leading-[1.08] sm:text-5xl sm:leading-[1.05] font-semibold tracking-tight">
                Chúng tôi xây hệ thống nội dung
                <br className="hidden sm:block" />
                để tăng trưởng bền vững.
              </h1>

              <p className="mt-4 text-[15px] leading-relaxed sm:text-base aa-muted max-w-2xl">
                Alfa Media tập trung vào “system-first”: chuẩn hoá vận hành, kiểm soát chất lượng,
                và dùng dữ liệu để tối ưu vòng lặp. Không chạy theo cảm hứng. Không làm cho xong.
              </p>

              {/* Primary CTA to product */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/alfa-agent"
                  className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
                >
                  Khám phá Alfa Agent (Product)
                </a>
                <a
                  href="/contact"
                  className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
                >
                  Liên hệ hợp tác
                </a>
              </div>
            </div>

            {/* Proof blocks */}
            <div className="mt-7 sm:mt-10 grid gap-3 sm:gap-4 sm:grid-cols-3">
              <Stat
                label="Triết lý"
                value="System-first"
                note="Chuẩn hoá trước, scale sau."
              />
              <Stat
                label="Tập trung"
                value="Quality + Data"
                note="Không làm đẹp bề ngoài."
              />
              <Stat
                label="Sản phẩm"
                value="Alfa Agent"
                note="KOC operation bằng SOP."
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT: ALFA AGENT */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Product</h2>
          <p className="max-w-3xl aa-muted leading-relaxed">
            Alfa Agent là product landing + recruitment funnel của Alfa Media: vận hành KOC bằng SOP,
            duyệt nội dung bắt buộc, tracking KPI tập trung và reporting loop để tối ưu bền vững.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <EntryCard
            badge="Brands"
            title="For Brands"
            desc="Brief → Lọc KOC → Duyệt kịch bản → Tracking KPI → Báo cáo & tối ưu vòng sau."
            href="/alfa-agent/for-brands"
            cta="Gửi brief chiến dịch"
          />
          <EntryCard
            badge="Business"
            title="Build & Run"
            desc="Setup định vị → Lịch vận hành → Template nội dung → Scale có kiểm soát (3 tháng)."
            href="/alfa-agent/solutions/build-and-run"
            cta="Nhận lộ trình 3 tháng"
          />
          <EntryCard
            badge="Talent"
            title="Join KOC"
            desc="Kỷ luật → Template → KPI → Lộ trình. Không phù hợp nếu làm theo cảm hứng."
            href="/alfa-agent/join-koc"
            cta="Ứng tuyển vào hệ thống"
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="/alfa-agent"
            className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
          >
            Vào Alfa Agent
          </a>
          <a
            href="/alfa-agent/for-brands#brief"
            className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
          >
            Gửi brief ngay
          </a>
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <section className="grid gap-4 lg:grid-cols-3">
        <AuthorityCard
          title="Không bán “lượt đăng”"
          desc="Chúng tôi bán hệ thống vận hành: kiểm soát chất lượng, rủi ro nền tảng và dữ liệu tối ưu."
        />
        <AuthorityCard
          title="Không mở rộng vô hạn"
          desc="Scale theo chuẩn: đúng người, đúng format, đúng KPI. Ưu tiên ổn định."
        />
        <AuthorityCard
          title="Không làm xong là hết"
          desc="Giữ tài sản: guideline, template, dữ liệu, bài học — để vòng sau mạnh hơn."
        />
      </section>

      {/* CTA */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight">
              Muốn triển khai nhanh nhưng không muốn loạn?
            </h3>
            <p className="mt-2 aa-muted leading-relaxed">
              Bắt đầu bằng Alfa Agent. Chọn đúng cửa: nhãn hàng, doanh nghiệp nhỏ, hoặc KOC.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/alfa-agent"
              className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
            >
              Vào Alfa Agent
            </a>
            <a
              href="/contact"
              className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
            >
              Liên hệ Alfa Media
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- UI blocks ---------- */

function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="aa-surface p-5 sm:p-6">
      <div className="text-xs text-white/55">{label}</div>
      <div className="mt-2 text-lg font-semibold tracking-tight text-white">
        {value}
      </div>
      <div className="mt-2 text-sm aa-muted leading-relaxed">{note}</div>
    </div>
  );
}

function EntryCard({
  badge,
  title,
  desc,
  href,
  cta,
}: {
  badge: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      className="group aa-surface aa-shadow aa-surface-hover p-6 transition"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/55">{badge}</span>
        <span className="text-xs text-white/25 group-hover:text-white/60 transition">
          →
        </span>
      </div>

      <div className="mt-3 text-lg font-semibold tracking-tight text-white">
        {title}
      </div>
      <p className="mt-3 text-sm aa-muted leading-relaxed">{desc}</p>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--primary-2))]">
        {cta}
        <span className="text-white/25 group-hover:text-[rgb(var(--primary-2))] transition">
          →
        </span>
      </div>
    </a>
  );
}

function AuthorityCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="aa-surface aa-shadow p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-3 text-sm aa-muted leading-relaxed">{desc}</p>
    </div>
  );
}