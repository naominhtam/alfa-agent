// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alfa Media là công ty vận hành hệ thống nội dung & KOC theo hướng SOP, kiểm duyệt và KPI tracking. Alfa Agent là product funnel chính.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* HERO */}
      <section className="pt-0 sm:pt-2">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgb(var(--surface))] aa-shadow">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-white/15 to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgb(var(--primary))]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[rgb(var(--primary-2))]/10 blur-3xl" />

          <div className="relative p-6 sm:p-10">
            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="aa-badge">
                  <span className="font-medium text-white">Alfa Media</span>
                  <span className="mx-2 text-white/30">•</span>
                  <span className="text-white/60">Company</span>
                </span>
                <span className="aa-badge">
                  <span className="text-white/60">Luxury Navy / Gold system</span>
                </span>
              </div>

              <h1 className="text-[34px] leading-[1.06] sm:text-5xl sm:leading-[1.05] font-semibold tracking-tight max-w-3xl">
                Alfa Media xây hệ thống
                <br className="hidden sm:block" />
                để vận hành nội dung & KOC như một “product”.
              </h1>

              <p className="max-w-3xl text-[15px] leading-relaxed sm:text-base aa-muted">
                Chúng tôi không đi theo kiểu “booking tự phát”. Alfa Media tập trung
                vào vận hành: SOP, kiểm duyệt, tracking KPI và reporting loop — để
                tăng chất lượng, giảm rủi ro nền tảng và tạo vòng lặp tối ưu dài hạn.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/alfa-agent"
                  className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
                >
                  Xem Alfa Agent (Product)
                </a>
                <a
                  href="/contact"
                  className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
                >
                  Liên hệ Alfa Media
                </a>
              </div>

              <div className="grid gap-3 sm:gap-4 pt-2 sm:pt-4 sm:grid-cols-3">
                <Stat
                  label="Operating System"
                  value="SOP + QC"
                  note="Chuẩn hoá quy trình & kiểm duyệt."
                />
                <Stat
                  label="Performance Layer"
                  value="KPI Tracking"
                  note="Ra quyết định bằng dữ liệu."
                />
                <Stat
                  label="Retention Asset"
                  value="Reporting Loop"
                  note="Tích luỹ tài sản cho vòng sau."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="grid gap-4 lg:grid-cols-3">
        <Card
          title="Company-first, product-driven"
          desc="Alfa Media là entity chính; Alfa Agent là sản phẩm triển khai. Cấu trúc này giúp trust & SEO sạch khi share link."
        />
        <Card
          title="Không bán “lượt đăng”"
          desc="Chúng tôi bán hệ thống vận hành: checklist, duyệt nội dung, tracking KPI và cơ chế tối ưu."
        />
        <Card
          title="Scale có kiểm soát"
          desc="Mở rộng theo chuẩn: đúng KOC, đúng format, đúng KPI. Ưu tiên ổn định và hiệu quả dài hạn."
        />
      </section>

      {/* WHAT WE BUILD */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Chúng tôi xây gì?</h2>
          <p className="max-w-3xl aa-muted leading-relaxed">
            Alfa Media xây “hệ vận hành” cho nội dung và KOC. Alfa Agent là nơi hệ
            thống này được đóng gói thành product funnel rõ ràng.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Module title="Guideline & Template" desc="Chuẩn hoá format theo nền tảng để nội dung không lệch định vị." />
          <Module title="Approval Gate" desc="Kiểm duyệt trước đăng để giảm rủi ro gỡ video / hạn chế tài khoản." />
          <Module title="KPI Dashboard" desc="Tracking tập trung theo nhóm nội dung để tối ưu nhanh." />
          <Module title="Talent Operating" desc="Vận hành KOC theo tiêu chuẩn: kỷ luật, lịch, và KPI rõ." />
          <Module title="Campaign SOP" desc="Quy trình triển khai chiến dịch có checklist, timeline, report." />
          <Module title="Reporting Loop" desc="Tích luỹ dữ liệu & bài học để vòng sau hiệu quả hơn." />
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight">
              Muốn xem hệ thống chạy như product?
            </h3>
            <p className="mt-2 aa-muted leading-relaxed">
              Đi thẳng vào Alfa Agent — nơi Alfa Media triển khai SOP, kiểm duyệt và KPI tracking
              thành funnel rõ ràng cho Brands / Business / KOC.
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
              href="/alfa-agent/for-brands"
              className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
            >
              For Brands
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

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="aa-surface aa-shadow p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-3 text-sm aa-muted leading-relaxed">{desc}</p>
    </div>
  );
}

function Module({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="aa-surface p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="text-sm font-semibold text-white">{title}</div>
        <span className="text-xs text-[rgb(var(--primary-2))]">Module</span>
      </div>
      <p className="mt-3 text-sm aa-muted leading-relaxed">{desc}</p>
    </div>
  );
}