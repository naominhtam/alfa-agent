// app/alfa-agent/join-koc/page.tsx
import type { Metadata } from "next";
import KocApplyFormClient from "./KocApplyFormClient";

export const metadata: Metadata = {
  title: "Join KOC",
  description:
    "Gia nhập Alfa Agent với tiêu chuẩn vận hành: kỷ luật, template, kiểm duyệt trước đăng và KPI rõ ràng. Phù hợp nếu bạn muốn làm KOC như một nghề.",
  alternates: {
    canonical: "/alfa-agent/join-koc",
  },
  openGraph: {
    title: "Join KOC — Alfa Agent",
    description:
      "Talent operating system: Discipline • Template • Approval • KPI. Không làm theo cảm hứng, không tự phát.",
    url: "/alfa-agent/join-koc",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Join KOC — Alfa Agent (Product of Alfa Media)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join KOC — Alfa Agent",
    description: "Discipline → Template → Approval → KPI. Join the system.",
    images: ["/og.png"],
  },
};

export default function JoinKOCPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* HERO */}
      <section className="pt-0 sm:pt-2">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgb(var(--surface))] aa-shadow">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-white/15 to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgb(var(--primary))]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[rgb(var(--primary-2))]/10 blur-3xl" />

          <div className="relative p-5 sm:p-10">
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="aa-badge">
                  <span className="font-medium text-white">Join KOC</span>
                  <span className="mx-2 text-white/30">•</span>
                  <span className="text-white/60">Talent system</span>
                </span>
                <span className="aa-badge">
                  <span className="text-white/60">
                    Discipline → Templates → KPI loop
                  </span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[34px] leading-[1.06] sm:text-5xl sm:leading-[1.05] font-semibold tracking-tight max-w-3xl">
                Vào hệ KOC có kỷ luật.
                <br className="hidden sm:block" />
                Có template. Có KPI. Có lộ trình.
              </h1>

              <p className="max-w-2xl text-[15px] leading-relaxed sm:text-base aa-muted">
                Alfa Agent không tuyển kiểu “thích thì đăng”. Đây là hệ vận hành:
                format chuẩn, checklist, duyệt trước đăng, tracking KPI và tối ưu theo
                vòng lặp. Nếu anh/chị làm theo cảm hứng, trang này không phù hợp.
              </p>

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#apply"
                  className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
                >
                  Ứng tuyển vào hệ thống
                </a>
                <a
                  href="#standards"
                  className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
                >
                  Xem tiêu chuẩn & KPI
                </a>
              </div>

              {/* Proof */}
              <div className="grid gap-3 sm:gap-4 pt-4 sm:pt-6 sm:grid-cols-3">
                <Stat
                  label="Template nội dung"
                  value="Có sẵn"
                  note="Hook/outline/caption."
                />
                <Stat
                  label="Kiểm duyệt"
                  value="Bắt buộc"
                  note="Không duyệt = không đăng."
                />
                <Stat
                  label="KPI tracking"
                  value="Tập trung"
                  note="Tối ưu theo dữ liệu."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIT / NO FIT */}
      <section>
        <div className="grid gap-4 lg:grid-cols-3">
          <FitCard
            title="Phù hợp nếu"
            items={[
              "Sẵn sàng làm theo template + checklist",
              "Muốn phát triển dài hạn, không đánh quả lẻ",
              "Chấp nhận duyệt trước đăng để bảo vệ tài khoản",
              "Muốn đo KPI để cải thiện thật",
            ]}
            tone="good"
          />
          <FitCard
            title="Không phù hợp nếu"
            items={[
              "Chỉ muốn ‘nhận job’ rồi đăng cho xong",
              "Không muốn sửa theo feedback/approval",
              "Không muốn tuân thủ guideline brand/platform",
              "Không muốn tracking KPI",
            ]}
            tone="bad"
          />
          <FitCard
            title="Anh/chị nhận được"
            items={[
              "Lộ trình format + template + brief",
              "Quy trình duyệt & tiêu chuẩn chất lượng",
              "Cơ chế tracking KPI theo nhóm nội dung",
              "Cải thiện tay nghề theo vòng lặp",
            ]}
            tone="neutral"
          />
        </div>
      </section>

      {/* STANDARDS */}
      <section
        id="standards"
        className="scroll-mt-24 aa-surface aa-shadow p-6 sm:p-8"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Tiêu chuẩn bắt buộc (không có ngoại lệ)
          </h2>
          <p className="max-w-3xl aa-muted leading-relaxed">
            Mục tiêu là bảo vệ tài khoản, giữ chất lượng, và giúp anh/chị tăng hiệu
            suất theo dữ liệu. Không chạy theo “đăng nhiều”.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Hook 3 giây đầu"
            desc="Mở bài đúng vấn đề, đúng đối tượng, tránh lan man."
          />
          <Card
            title="Format theo nền tảng"
            desc="TikTok/Reels/Shorts: nhịp nhanh, rõ cảnh, rõ thông điệp."
          />
          <Card
            title="Checklist trước đăng"
            desc="Caption/hashtag/CTA/độ dài/thumbnail — làm đúng mới đăng."
          />
          <Card
            title="Duyệt nội dung"
            desc="Script/angle/phát ngôn nhạy cảm phải qua duyệt."
          />
          <Card
            title="Tuân thủ chính sách"
            desc="Giảm rủi ro gỡ video, hạn chế tài khoản, shadowban."
          />
          <Card
            title="Lưu trữ & bàn giao"
            desc="File & asset đúng chuẩn để tái sử dụng và tối ưu."
          />
        </div>
      </section>

      {/* KPI */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            KPI (đơn giản nhưng đủ lực)
          </h2>
          <p className="max-w-3xl aa-muted leading-relaxed">
            KPI không để “bắt lỗi”, KPI để biết phải tối ưu cái gì. Theo dõi theo
            nhóm nội dung, không đánh giá cảm tính.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-4">
          <Kpi
            title="Hook rate"
            value="3s retention"
            desc="Nếu 3 giây đầu rớt mạnh: sửa hook."
          />
          <Kpi
            title="Watch time"
            value="Avg view duration"
            desc="Tối ưu nhịp dựng, đoạn giữa, payoff."
          />
          <Kpi
            title="CTR / Click"
            value="Link/CTA"
            desc="Tối ưu CTA + placement + offer."
          />
          <Kpi
            title="Consistency"
            value="Cadence"
            desc="Chạy đúng lịch để hệ thống học & tối ưu."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Quy trình vào hệ</h2>
          <p className="max-w-3xl aa-muted leading-relaxed">
            4 bước. Nhanh nhưng rõ ràng. Ai hợp thì vào, ai không hợp thì dừng sớm.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-4">
          <Step n="01" title="Apply" desc="Gửi hồ sơ + kênh + niche." />
          <Step n="02" title="Vetting" desc="Check chất lượng, thái độ, cam kết lịch." />
          <Step n="03" title="Onboarding" desc="Nhận guideline + template + SOP." />
          <Step n="04" title="Run & KPI" desc="Chạy theo cadence + review theo tuần." />
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="scroll-mt-24">
        <div className="aa-surface aa-shadow p-6 sm:p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ứng tuyển vào hệ KOC
            </h2>
            <p className="mt-3 aa-muted leading-relaxed">
              Điền thông tin thật kỹ. Mình ưu tiên người nghiêm túc và có khả năng chạy theo hệ.
            </p>
          </div>

          <KocApplyForm />
        </div>
      </section>

      {/* CTA */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight">
              Muốn vào hệ nhưng chưa chắc mình hợp?
            </h3>
            <p className="mt-2 aa-muted leading-relaxed">
              Xem tiêu chuẩn trước. Nếu anh/chị làm được checklist + KPI, hãy apply.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#standards"
              className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
            >
              Xem tiêu chuẩn
            </a>
            <a
              href="#apply"
              className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
            >
              Ứng tuyển
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- blocks ---------- */

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

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="aa-surface p-5">
      <div className="text-xs text-white/55">{n}</div>
      <div className="mt-2 font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm aa-muted leading-relaxed">{desc}</div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="aa-surface p-6">
      <div className="font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm aa-muted leading-relaxed">{desc}</div>
    </div>
  );
}

function Kpi({
  title,
  value,
  desc,
}: {
  title: string;
  value: string;
  desc: string;
}) {
  return (
    <div className="aa-surface p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="text-sm font-semibold text-white">{title}</div>
        <span className="text-xs text-[rgb(var(--primary-2))]">{value}</span>
      </div>
      <p className="mt-3 text-sm aa-muted leading-relaxed">{desc}</p>
    </div>
  );
}

function FitCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "good" | "bad" | "neutral";
}) {
  const toneLabel = tone === "good" ? "Fit" : tone === "bad" ? "No-fit" : "Result";
  return (
    <div className="aa-surface aa-shadow p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-white">{title}</div>
        <span className="text-xs text-[rgb(var(--primary-2))]">{toneLabel}</span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--primary))]" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Client Form wrapper ---------- */
function KocApplyForm() {
  return <KocApplyFormClient />;
}