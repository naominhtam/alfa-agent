// app/alfa-agent/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://alfamedia.vn"),
  title: "Alfa Agent",
  description:
    "Alfa Agent là product của Alfa Media: system-first operation cho KOC, creator workflow, content SOP, approval và KPI tracking để tăng trưởng có kiểm soát.",
  keywords: [
    "Alfa Media",
    "Alfa Agent",
    "KOC system",
    "creator operation",
    "content SOP",
    "approval workflow",
    "KPI tracking",
    "affiliate operation",
    "brand campaign system",
    "content operating system",
  ],
  alternates: {
    canonical: "/alfa-agent",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Alfa Agent — Product of Alfa Media",
    description:
      "System-first operation cho nhãn hàng, creator và đội ngũ nội bộ: SOP • Approval • KPI Tracking • Reporting Loop.",
    url: "/alfa-agent",
    siteName: "Alfa Media",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alfa Agent — Product of Alfa Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfa Agent — Product of Alfa Media",
    description:
      "System-first operation: SOP • Approval • KPI Tracking • Reporting Loop.",
    images: ["/og.png"],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Alfa Agent",
  brand: {
    "@type": "Brand",
    name: "Alfa Agent",
  },
  category: "Content Operation System",
  description:
    "Alfa Agent là product của Alfa Media, tập trung vào system-first operation cho KOC, creator workflow, content SOP, approval và KPI tracking.",
  url: "https://alfamedia.vn/alfa-agent",
  manufacturer: {
    "@type": "Organization",
    name: "Alfa Media",
    url: "https://alfamedia.vn",
  },
};

export default function AlfaAgentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
                    <span className="font-medium text-white">Alfa Agent</span>
                    <span className="mx-2 text-white/30">•</span>
                    <span className="text-white/60">Product of Alfa Media</span>
                  </span>
                  <span className="aa-badge">
                    <span className="text-white/60">
                      SOP → Approval → KPI → Reporting loop
                    </span>
                  </span>
                </div>

                {/* Title */}
                <h1 className="max-w-4xl text-[34px] font-semibold leading-[1.06] tracking-tight sm:text-5xl sm:leading-[1.05]">
                  Xây hệ vận hành nội dung
                  <br className="hidden sm:block" />
                  để tăng trưởng bền vững.
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl text-[15px] leading-relaxed aa-muted sm:text-base">
                  <span className="text-white">Alfa Agent</span> là product thuộc{" "}
                  <span className="text-white">Alfa Media</span>, tập trung vào
                  tư duy <span className="text-white">system-first</span>: chuẩn
                  hoá vận hành, kiểm soát chất lượng, approval trước đăng và dùng
                  dữ liệu để tối ưu vòng lặp. Không chạy theo cảm hứng. Không làm
                  cho xong.
                </p>

                {/* CTA */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/alfa-agent/for-brands"
                    className="aa-btn-primary aa-focus w-full text-center sm:w-auto"
                  >
                    Tôi là Nhãn hàng
                  </Link>
                  <Link
                    href="/alfa-agent/join-koc"
                    className="aa-btn-outline aa-focus w-full text-center sm:w-auto"
                  >
                    Tôi là Creator / KOC
                  </Link>
                </div>

                {/* Proof */}
                <div className="grid gap-3 pt-4 sm:grid-cols-3 sm:gap-4 sm:pt-6">
                  <Stat
                    label="Core logic"
                    value="System-first"
                    note="Chuẩn hoá trước, scale sau."
                  />
                  <Stat
                    label="Vận hành"
                    value="SOP + Approval"
                    note="Giảm lỗi, giảm hỗn loạn."
                  />
                  <Stat
                    label="Tối ưu"
                    value="KPI tracking"
                    note="Ra quyết định bằng dữ liệu."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section>
          <div className="grid gap-4 lg:grid-cols-3">
            <FitCard
              title="Dành cho nhãn hàng"
              items={[
                "Cần hệ vận hành KOC có kiểm soát",
                "Muốn approval rõ trước khi đăng",
                "Muốn tracking KPI tập trung",
                "Muốn chiến dịch không dừng ở mức booking tự phát",
              ]}
              tone="good"
            />
            <FitCard
              title="Dành cho đội ngũ nội bộ"
              items={[
                "Cần lịch chạy + checklist + SOP rõ ràng",
                "Muốn team nhỏ nhưng vẫn vận hành được",
                "Muốn có template để không làm lại từ đầu mỗi lần",
                "Muốn scale dựa trên dữ liệu thay vì cảm tính",
              ]}
              tone="neutral"
            />
            <FitCard
              title="Dành cho creator / KOC"
              items={[
                "Muốn làm nội dung như một nghề",
                "Sẵn sàng làm theo guideline và approval",
                "Muốn cải thiện tay nghề theo KPI",
                "Không muốn chạy job ngắn hạn kiểu tự phát",
              ]}
              tone="good"
            />
          </div>
        </section>

        {/* CORE SOLUTIONS */}
        <section>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              3 cửa vào chính của Alfa Agent
            </h2>
            <p className="max-w-3xl leading-relaxed aa-muted">
              Alfa Agent không phải một lời hứa chung chung. Product này được chia
              thành 3 hướng triển khai rõ ràng, tuỳ theo vai trò và mục tiêu.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-3">
            <SolutionCard
              title="For Brands"
              desc="Dành cho nhãn hàng cần hệ vận hành KOC: lọc creator phù hợp, duyệt kịch bản bắt buộc, kiểm soát đăng và tracking KPI."
              href="/alfa-agent/for-brands"
              cta="Xem giải pháp cho nhãn hàng"
            />
            <SolutionCard
              title="Build & Run"
              desc="Dành cho doanh nghiệp nhỏ cần dựng hệ vận hành nội dung 90 ngày: positioning, template, cadence, approval và reporting loop."
              href="/alfa-agent/solutions/build-and-run"
              cta="Xem lộ trình Build & Run"
            />
            <SolutionCard
              title="Join KOC"
              desc="Dành cho creator / KOC muốn vào hệ có kỷ luật: template, checklist, approval trước đăng và KPI tracking."
              href="/alfa-agent/join-koc"
              cta="Xem điều kiện gia nhập"
            />
          </div>
        </section>

        {/* OPERATING PRINCIPLES */}
        <section className="aa-surface aa-shadow p-6 sm:p-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Cách Alfa Agent vận hành
            </h2>
            <p className="max-w-3xl leading-relaxed aa-muted">
              Đây là product được xây để giảm hỗn loạn trong vận hành nội dung.
              Logic cốt lõi luôn giữ nguyên: chuẩn, duyệt, đo, tối ưu.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-4">
            <Step
              n="01"
              title="Chuẩn hoá"
              desc="Format, template, checklist và naming được thống nhất."
            />
            <Step
              n="02"
              title="Approval"
              desc="Nội dung qua duyệt trước khi đăng để giảm rủi ro."
            />
            <Step
              n="03"
              title="Tracking"
              desc="Hiệu suất được theo dõi theo nhóm nội dung và mục tiêu."
            />
            <Step
              n="04"
              title="Optimize"
              desc="Giữ cái thắng, loại cái thua, lặp nhanh và rõ."
            />
          </div>
        </section>

        {/* WHAT IT DELIVERS */}
        <section>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Alfa Agent tạo ra điều gì?
            </h2>
            <p className="max-w-3xl leading-relaxed aa-muted">
              Không chỉ là content. Không chỉ là booking. Giá trị thật nằm ở hệ
              vận hành có thể lặp lại và cải thiện theo thời gian.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-3">
            <Deliverable
              title="Operating Clarity"
              desc="Ai làm gì, theo chuẩn nào, ở nhịp nào."
              items={[
                "Lịch vận hành rõ",
                "Checklist trước đăng",
                "Approval flow rõ vai trò",
                "Giảm lệch định vị và lệch thông điệp",
              ]}
            />
            <Deliverable
              title="Reusable Assets"
              desc="Mỗi vòng chạy để lại tài sản dùng lại được."
              items={[
                "Template hook / outline / caption",
                "Brief mẫu cho nội bộ / creator",
                "SOP sản xuất nội dung",
                "Quy chuẩn lưu trữ asset",
              ]}
            />
            <Deliverable
              title="Decision by Data"
              desc="Không tối ưu bằng cảm giác."
              items={[
                "KPI theo nhóm nội dung",
                "Review theo tuần / vòng lặp",
                "Report có action",
                "Biết nên dồn lực vào đâu",
              ]}
            />
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="aa-surface aa-shadow p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Triết lý nền của Alfa Agent
              </h2>
              <p className="mt-3 leading-relaxed aa-muted">
                Content không nên phụ thuộc vào hứng. Creator không nên phụ thuộc
                vào cảm giác. Team không nên phụ thuộc vào vài cá nhân nhớ việc.
                Muốn scale bền, phải có hệ.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <MiniCard
                title="System-first"
                desc="Chuẩn hoá trước, scale sau."
              />
              <MiniCard
                title="Quality control"
                desc="Approval để bảo vệ brand và tài khoản."
              />
              <MiniCard
                title="Reporting loop"
                desc="Mỗi vòng chạy phải để lại insight."
              />
              <MiniCard
                title="Long-term fit"
                desc="Không chọn cách chạy nhanh nhưng vỡ hệ."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="aa-surface aa-shadow p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight">
                Chọn đúng cửa vào của Alfa Agent
              </h3>
              <p className="mt-2 leading-relaxed aa-muted">
                Nếu cần hệ vận hành cho nhãn hàng, đi vào For Brands. Nếu cần dựng
                hệ nội dung cho đội ngũ, đi vào Build & Run. Nếu muốn vào hệ creator,
                đi vào Join KOC.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/alfa-agent/for-brands"
                className="aa-btn-outline aa-focus w-full text-center sm:w-auto"
              >
                For Brands
              </Link>
              <Link
                href="/alfa-agent/solutions/build-and-run"
                className="aa-btn-primary aa-focus w-full text-center sm:w-auto"
              >
                Build &amp; Run
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
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
      <div className="mt-2 text-sm leading-relaxed aa-muted">{note}</div>
    </div>
  );
}

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="aa-surface p-5">
      <div className="text-xs text-white/55">{n}</div>
      <div className="mt-2 font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed aa-muted">{desc}</div>
    </div>
  );
}

function Deliverable({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="aa-surface aa-shadow p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="mt-1 text-sm aa-muted">{desc}</div>
        </div>
        <span className="text-xs text-[rgb(var(--primary-2))]">Deliverable</span>
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
    tone === "good" ? "Fit" : tone === "bad" ? "No-fit" : "Role";

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

function SolutionCard({
  title,
  desc,
  href,
  cta,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="aa-surface aa-shadow p-6">
      <div className="text-base font-semibold text-white">{title}</div>
      <p className="mt-3 text-sm leading-relaxed aa-muted">{desc}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center text-sm font-semibold text-[rgb(var(--primary-2))] transition hover:opacity-90"
      >
        {cta} <span className="ml-2">→</span>
      </Link>
    </div>
  );
}

function MiniCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="aa-surface p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed aa-muted">{desc}</div>
    </div>
  );
}