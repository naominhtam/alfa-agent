// app/contact/page.tsx
import type { Metadata } from "next";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Liên hệ Alfa Media / Alfa Agent: nhận tư vấn triển khai hệ thống SOP, kiểm duyệt, tracking KPI và reporting loop.",
};

export default function ContactPage() {
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
                  <span className="font-medium text-white">Contact</span>
                  <span className="mx-2 text-white/30">•</span>
                  <span className="text-white/60">Alfa Media / Alfa Agent</span>
                </span>
                <span className="aa-badge">
                  <span className="text-white/60">Business inquiries only</span>
                </span>
              </div>

              <h1 className="text-[34px] leading-[1.06] sm:text-5xl sm:leading-[1.05] font-semibold tracking-tight max-w-3xl">
                Liên hệ đúng kênh.
                <br className="hidden sm:block" />
                Nhận phản hồi rõ ràng.
              </h1>

              <p className="max-w-3xl text-[15px] leading-relaxed sm:text-base aa-muted">
                Nếu anh/chị là nhãn hàng hoặc doanh nghiệp muốn triển khai hệ thống
                nội dung/KOC theo SOP + kiểm duyệt + KPI tracking, hãy đi theo
                funnel để nhận đề xuất đúng.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/alfa-agent"
                  className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
                >
                  Vào Alfa Agent (Funnel)
                </a>
                <a
                  href="/alfa-agent/for-brands#brief"
                  className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
                >
                  Gửi brief chiến dịch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="grid gap-4 lg:grid-cols-3">
        {/* Left: info + form */}
        <div className="aa-surface aa-shadow p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Thông tin liên hệ
          </h2>
          <p className="mt-3 aa-muted leading-relaxed">
            Ưu tiên: đi qua funnel để nhận kế hoạch triển khai cụ thể. Nếu cần
            trao đổi nhanh, dùng thông tin bên dưới hoặc gửi form để Alfa Media
            phản hồi theo chuẩn.
          </p>

          <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
            <Info
              label="Email"
              value="admin@alfamedia.vn"
              hint="Gửi brief/đề xuất hợp tác."
            />
            <Info
              label="Business hours"
              value="Mon–Fri • 09:00–18:00"
              hint="GMT+7 (Vietnam)."
            />
            <Info
              label="Social"
              value="TikTok"
              hint="https://www.tiktok.com/@alfa_agent"
            />
            <Info
              label="Address"
              value="Vietnam"
              hint="Liên hệ qua email hoặc form. Văn phòng hiện tại ở Việt Nam."
            />
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold text-white">
              Lưu ý để phản hồi nhanh
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li className="flex gap-3">
                <Dot />
                <span>Ghi rõ mục tiêu (awareness / traffic / conversion).</span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>Ngành hàng + budget dự kiến + timeline triển khai.</span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>Kênh đang chạy và KPI kỳ vọng (nếu có).</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="mt-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight text-white">
                Gửi yêu cầu liên hệ
              </h3>
              <p className="text-sm aa-muted leading-relaxed">
                Form này gửi về hệ thống Netlify Forms. Alfa Media sẽ phản hồi theo
                thông tin anh/chị cung cấp.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* Right: funnel */}
        <aside className="aa-surface aa-shadow p-6">
          <h3 className="text-lg font-semibold tracking-tight text-white">
            Đi đúng funnel
          </h3>
          <p className="mt-3 text-sm aa-muted leading-relaxed">
            Alfa Agent là product landing + recruitment funnel. Đi theo đúng cửa
            để nhận lộ trình/brief form chuẩn.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="/alfa-agent/for-brands"
              className="block aa-btn-primary aa-focus text-center"
            >
              For Brands
            </a>
            <a
              href="/alfa-agent/solutions/build-and-run"
              className="block aa-btn-outline aa-focus text-center"
            >
              Build &amp; Run
            </a>
            <a
              href="/alfa-agent/join-koc"
              className="block aa-btn-outline aa-focus text-center"
            >
              Join KOC
            </a>
          </div>

          <div className="mt-6 text-xs text-white/55">
            Alfa Agent • Product of Alfa Media
          </div>
        </aside>
      </section>

      {/* CTA STRIP */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight">
              Muốn triển khai nhanh nhưng không muốn loạn?
            </h3>
            <p className="mt-2 aa-muted leading-relaxed">
              Vào Alfa Agent để chọn đúng cửa: nhãn hàng, doanh nghiệp nhỏ, hoặc
              KOC. Mỗi cửa có SOP và KPI riêng.
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
              href="/alfa-agent/for-brands#brief"
              className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
            >
              Gửi brief
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- UI blocks ---------- */

function Dot() {
  return (
    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--primary))]" />
  );
}

function Info({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs text-white/55">{label}</div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm aa-muted leading-relaxed">{hint}</div>
    </div>
  );
}

/* ---------- Contact Form (Client) ---------- */
function ContactForm() {
  return <ContactFormClient />;
}