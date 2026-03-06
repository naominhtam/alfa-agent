// app/alfa-agent/join-koc/page.tsx
import type { Metadata } from "next";
import KocApplyFormClient from "./KocApplyFormClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://alfamedia.vn"),
  title: "Join KOC",
  description:
    "Join KOC là cổng gia nhập creator system của Alfa Agent, thuộc Alfa Media: template, approval, KPI tracking và lộ trình vận hành rõ ràng cho người muốn làm nội dung như một nghề.",
  keywords: [
    "Alfa Media",
    "Alfa Agent",
    "Join KOC",
    "creator system",
    "KOC onboarding",
    "content creator operation",
    "KPI tracking",
    "content SOP",
    "affiliate creator",
    "creator workflow",
  ],
  alternates: {
    canonical: "/alfa-agent/join-koc",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Join KOC — Alfa Agent",
    description:
      "Creator operating system by Alfa Agent (a product of Alfa Media): Discipline • Template • Approval • KPI.",
    url: "/alfa-agent/join-koc",
    siteName: "Alfa Media",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Join KOC — Alfa Agent, a product of Alfa Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join KOC — Alfa Agent",
    description:
      "Discipline → Template → Approval → KPI. Join the system.",
    images: ["/og.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Join KOC",
  serviceType: "Creator Operating System",
  provider: {
    "@type": "Organization",
    name: "Alfa Media",
    url: "https://alfamedia.vn",
  },
  brand: {
    "@type": "Brand",
    name: "Alfa Agent",
    url: "https://alfamedia.vn/alfa-agent",
  },
  url: "https://alfamedia.vn/alfa-agent/join-koc",
  description:
    "Join KOC là cổng gia nhập creator system của Alfa Agent: template, approval, KPI tracking và lộ trình vận hành rõ ràng cho người muốn làm nội dung như một nghề.",
  areaServed: "VN",
};

export default function JoinKOCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="space-y-12 sm:space-y-16">
        {/* HERO */}
        <section className="pt-0 sm:pt-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgb(var(--surface))] aa-shadow">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/15 to-transparent sm:h-44" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgb(var(--primary))]/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[rgb(var(--primary-2))]/10 blur-3xl" />

            <div className="relative p-5 sm:p-10">
              <div className="flex flex-col gap-5 sm:gap-6">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="aa-badge">
                    <span className="font-medium text-white">Join KOC</span>
                    <span className="mx-2 text-white/30">•</span>
                    <span className="text-white/60">Alfa Agent talent system</span>
                  </span>
                  <span className="aa-badge">
                    <span className="text-white/60">
                      Product of Alfa Media • Discipline → Template → KPI
                    </span>
                  </span>
                </div>

                {/* Title */}
                <h1 className="max-w-3xl text-[34px] font-semibold leading-[1.06] tracking-tight sm:text-5xl sm:leading-[1.05]">
                  Vào hệ creator có kỷ luật.
                  <br className="hidden sm:block" />
                  Có template. Có KPI. Có lộ trình.
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl text-[15px] leading-relaxed aa-muted sm:text-base">
                  <span className="text-white">Join KOC</span> là cổng gia nhập hệ creator thuộc{" "}
                  <span className="text-white">Alfa Agent</span>, được phát triển bởi{" "}
                  <span className="text-white">Alfa Media</span>. Đây không phải nơi làm nội dung theo cảm hứng.
                  Mục tiêu là vận hành theo format chuẩn, checklist, approval trước đăng,
                  tracking KPI và tối ưu theo vòng lặp.
                </p>

                {/* CTA */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#apply"
                    className="aa-btn-primary aa-focus w-full text-center sm:w-auto"
                  >
                    Ứng tuyển vào hệ thống
                  </a>
                  <a
                    href="#standards"
                    className="aa-btn-outline aa-focus w-full text-center sm:w-auto"
                  >
                    Xem tiêu chuẩn & KPI
                  </a>
                </div>

                {/* Proof */}
                <div className="grid gap-3 pt-4 sm:grid-cols-3 sm:gap-4 sm:pt-6">
                  <Stat
                    label="Template nội dung"
                    value="Có sẵn"
                    note="Hook / outline / caption."
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
                "Sẵn sàng làm theo template và checklist",
                "Muốn phát triển dài hạn, không đánh quả lẻ",
                "Chấp nhận approval trước đăng để bảo vệ tài khoản",
                "Muốn đo KPI để cải thiện thật",
              ]}
              tone="good"
            />
            <FitCard
              title="Không phù hợp nếu"
              items={[
                "Chỉ muốn nhận job rồi đăng cho xong",
                "Không muốn sửa theo feedback hoặc approval",
                "Không muốn tuân thủ guideline brand / platform",
                "Không muốn tracking KPI",
              ]}
              tone="bad"
            />
            <FitCard
              title="Kết quả nhận được"
              items={[
                "Lộ trình format + template + brief",
                "Quy trình duyệt và tiêu chuẩn chất lượng",
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
              Tiêu chuẩn bắt buộc
            </h2>
            <p className="max-w-3xl leading-relaxed aa-muted">
              Mục tiêu là bảo vệ tài khoản, giữ chất lượng, và giúp creator tăng hiệu
              suất theo dữ liệu. Không chạy theo việc đăng nhiều một cách cảm tính.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            <Card
              title="Hook 3 giây đầu"
              desc="Mở bài đúng vấn đề, đúng đối tượng, tránh lan man."
            />
            <Card
              title="Format theo nền tảng"
              desc="TikTok / Reels / Shorts: nhịp nhanh, rõ cảnh, rõ thông điệp."
            />
            <Card
              title="Checklist trước đăng"
              desc="Caption, hashtag, CTA, độ dài, thumbnail — làm đúng mới đăng."
            />
            <Card
              title="Duyệt nội dung"
              desc="Script, angle, phát ngôn nhạy cảm phải qua duyệt."
            />
            <Card
              title="Tuân thủ chính sách"
              desc="Giảm rủi ro gỡ video, hạn chế tài khoản, shadowban."
            />
            <Card
              title="Lưu trữ & bàn giao"
              desc="File và asset đúng chuẩn để tái sử dụng và tối ưu."
            />
          </div>
        </section>

        {/* KPI */}
        <section className="aa-surface aa-shadow p-6 sm:p-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              KPI
            </h2>
            <p className="max-w-3xl leading-relaxed aa-muted">
              KPI không để bắt lỗi. KPI để biết cần tối ưu điều gì. Tất cả được theo dõi theo
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
              value="Link / CTA"
              desc="Tối ưu CTA, placement và offer."
            />
            <Kpi
              title="Consistency"
              value="Cadence"
              desc="Chạy đúng lịch để hệ thống học và tối ưu."
            />
          </div>
        </section>

        {/* PROCESS */}
        <section className="aa-surface aa-shadow p-6 sm:p-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Quy trình vào hệ
            </h2>
            <p className="max-w-3xl leading-relaxed aa-muted">
              4 bước. Nhanh nhưng rõ ràng. Ai hợp thì vào. Ai không hợp thì dừng sớm.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-4">
            <Step n="01" title="Apply" desc="Gửi hồ sơ + kênh + niche." />
            <Step
              n="02"
              title="Vetting"
              desc="Check chất lượng, thái độ và cam kết lịch."
            />
            <Step
              n="03"
              title="Onboarding"
              desc="Nhận guideline, template và SOP."
            />
            <Step
              n="04"
              title="Run & KPI"
              desc="Chạy theo cadence + review theo tuần."
            />
          </div>
        </section>

        {/* APPLY FORM */}
        <section id="apply" className="scroll-mt-24">
          <div className="aa-surface aa-shadow p-6 sm:p-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Ứng tuyển vào hệ creator
              </h2>
              <p className="mt-3 leading-relaxed aa-muted">
                Điền thông tin kỹ và trung thực. Ưu tiên người nghiêm túc, có khả năng
                chạy theo hệ và muốn phát triển tay nghề dài hạn.
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
              <p className="mt-2 leading-relaxed aa-muted">
                Xem tiêu chuẩn trước. Nếu checklist và KPI là thứ có thể theo được,
                bước tiếp theo là apply.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#standards"
                className="aa-btn-outline aa-focus w-full text-center sm:w-auto"
              >
                Xem tiêu chuẩn
              </a>
              <a
                href="#apply"
                className="aa-btn-primary aa-focus w-full text-center sm:w-auto"
              >
                Ứng tuyển
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
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
      <div className="mt-2 text-sm leading-relaxed aa-muted">{note}</div>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="aa-surface p-5">
      <div className="text-xs text-white/55">{n}</div>
      <div className="mt-2 font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed aa-muted">{desc}</div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="aa-surface p-6">
      <div className="font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed aa-muted">{desc}</div>
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
      <p className="mt-3 text-sm leading-relaxed aa-muted">{desc}</p>
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
  const toneLabel =
    tone === "good" ? "Fit" : tone === "bad" ? "No-fit" : "Result";

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