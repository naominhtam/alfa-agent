// app/alfa-agent/solutions/build-and-run/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://alfamedia.vn"),
  title: "Build & Run",
  description:
    "Build & Run là gói vận hành cho doanh nghiệp nhỏ: setup định vị, template nội dung, lịch vận hành, kiểm duyệt và KPI tracking để scale có kiểm soát trong 90 ngày.",
  alternates: {
    canonical: "/alfa-agent/solutions/build-and-run",
  },
  openGraph: {
    title: "Build & Run — Alfa Agent",
    description:
      "90-day operating system: Setup → Operate → Scale. Không chạy theo cảm hứng. Có SOP, kiểm duyệt và dữ liệu tối ưu.",
    url: "/alfa-agent/solutions/build-and-run",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Build & Run — Alfa Agent (Product of Alfa Media)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build & Run — Alfa Agent",
    description: "Setup → Operate → Scale (90 days). Template • Approval • KPI Tracking.",
    images: ["/og.png"],
  },
};

export default function BuildAndRunPage() {
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
                  <span className="font-medium text-white">Build &amp; Run</span>
                  <span className="mx-2 text-white/30">•</span>
                  <span className="text-white/60">For small business teams</span>
                </span>
                <span className="aa-badge">
                  <span className="text-white/60">
                    Positioning → Operating cadence → Templates → KPI loop
                  </span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[34px] leading-[1.06] sm:text-5xl sm:leading-[1.05] font-semibold tracking-tight max-w-3xl">
                Xây hệ vận hành nội dung 90 ngày.
                <br className="hidden sm:block" />
                Có lịch. Có chuẩn. Có KPI.
              </h1>

              {/* Subtitle */}
              <p className="max-w-2xl text-[15px] leading-relaxed sm:text-base aa-muted">
                Build &amp; Run dành cho doanh nghiệp nhỏ muốn “tự chạy” nhưng không muốn
                hỗn loạn. Chúng tôi không làm thay mọi thứ mãi mãi — chúng tôi dựng hệ
                thống để team anh vận hành được và scale được.
              </p>

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#roadmap"
                  className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
                >
                  Xem lộ trình 90 ngày
                </a>
                <a
                  href="#deliverables"
                  className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
                >
                  Xem gói bàn giao
                </a>
              </div>

              {/* Proof */}
              <div className="grid gap-3 sm:gap-4 pt-4 sm:pt-6 sm:grid-cols-3">
                <Stat label="Thời lượng triển khai" value="90 ngày" note="3 pha rõ ràng." />
                <Stat label="Tài sản bàn giao" value="Templates + SOP" note="Team tự chạy." />
                <Stat label="KPI tracking" value="Theo vòng lặp" note="Có report tuần." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section>
        <div className="grid gap-4 lg:grid-cols-3">
          <FitCard
            title="Phù hợp nếu"
            items={[
              "Team nhỏ 2–8 người, cần kỷ luật vận hành nội dung",
              "Muốn scale nhưng không muốn thuê agency đăng bài mãi",
              "Cần template + lịch + checklist để chạy ổn định",
              "Muốn đo KPI rõ để quyết định bằng dữ liệu",
            ]}
            tone="good"
          />
          <FitCard
            title="Không phù hợp nếu"
            items={[
              "Muốn ‘viral nhanh’ nhưng không cần hệ thống",
              "Không có người nội bộ phụ trách triển khai tối thiểu",
              "Không muốn tuân thủ guideline / approval",
              "Chỉ cần làm 1 chiến dịch ngắn hạn",
            ]}
            tone="bad"
          />
          <FitCard
            title="Kết quả anh nhận"
            items={[
              "Bộ hệ vận hành nội dung + lịch chạy 12 tuần",
              "Kho template (hook/format/caption/brief)",
              "Quy trình approval + checklist rủi ro nền tảng",
              "Dashboard KPI + report theo vòng lặp",
            ]}
            tone="neutral"
          />
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="scroll-mt-24 aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Lộ trình 90 ngày</h2>
          <p className="max-w-3xl aa-muted leading-relaxed">
            Triển khai theo 3 pha. Mỗi pha có mục tiêu, đầu ra và KPI rõ. Không kéo dài vô hạn.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-3">
          <Phase
            n="01"
            title="Foundation (Tuần 1–2)"
            desc="Chốt định vị + hệ đo + chuẩn hoá format."
            bullets={[
              "Chốt ICP + thông điệp cốt lõi + offer",
              "Map funnel: view → click → lead/sale",
              "Bộ format trụ cột (3–5 format)",
              "Thiết lập KPI & tracking cơ bản",
            ]}
            outcome="Ra được ‘hệ’ để team chạy đúng hướng."
          />
          <Phase
            n="02"
            title="Build (Tuần 3–6)"
            desc="Dựng template + lịch vận hành + approval."
            bullets={[
              "Kho template hook/outline/caption",
              "SOP sản xuất: kịch bản → quay → edit → duyệt",
              "Lịch vận hành tuần (cadence) + checklist",
              "Chuẩn hoá asset & lưu trữ",
            ]}
            outcome="Team chạy đều, giảm lỗi, giảm rủi ro."
          />
          <Phase
            n="03"
            title="Run & Optimize (Tuần 7–12)"
            desc="Chạy ổn định + tối ưu theo dữ liệu."
            bullets={[
              "Dashboard KPI theo nhóm nội dung",
              "Review tuần: giữ cái thắng, loại cái thua",
              "A/B hook & angle theo format",
              "Báo cáo tổng kết + kế hoạch quý sau",
            ]}
            outcome="Vòng lặp tối ưu rõ ràng, scale có kiểm soát."
          />
        </div>
      </section>

      {/* DELIVERABLES */}
      <section id="deliverables" className="scroll-mt-24">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Gói bàn giao</h2>
          <p className="max-w-3xl aa-muted leading-relaxed">
            Đây là phần “tài sản hệ thống” anh giữ lại. Làm xong không mất hết — team tiếp tục chạy được.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-3">
          <Deliverable
            title="Operating System"
            desc="SOP + checklist + cadence."
            items={[
              "SOP sản xuất nội dung end-to-end",
              "Approval checklist (brand + policy)",
              "Cadence tuần (bảng lịch vận hành)",
              "Quy chuẩn file, folder, naming",
            ]}
          />
          <Deliverable
            title="Template Library"
            desc="Format + hook + outline + caption."
            items={[
              "10–20 hook templates theo ngành",
              "3–5 format chủ lực + outline",
              "Caption & CTA templates",
              "Brief template cho nội bộ/KOC",
            ]}
          />
          <Deliverable
            title="KPI & Reporting"
            desc="Đo – hiểu – tối ưu."
            items={[
              "KPI map theo mục tiêu (awareness/traffic/conversion)",
              "Dashboard theo nhóm nội dung",
              "Report tuần (insights + actions)",
              "Plan tối ưu vòng sau",
            ]}
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Cơ chế vận hành (để không loạn)</h2>
          <p className="max-w-3xl aa-muted leading-relaxed">
            4 bước cố định: mục tiêu → chuẩn hoá → chạy → tối ưu. Không có bước “đăng đại”.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-4">
          <Step n="01" title="Chốt mục tiêu" desc="KPI rõ, chọn đúng cuộc chơi ngay từ đầu." />
          <Step n="02" title="Chuẩn hoá sản xuất" desc="Template + checklist + approval trước đăng." />
          <Step n="03" title="Chạy theo cadence" desc="Lịch tuần cố định, team biết phải làm gì." />
          <Step n="04" title="Tối ưu theo dữ liệu" desc="Giữ cái thắng, loại cái thua. Lặp nhanh." />
        </div>
      </section>

      {/* CTA */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight">
              Muốn team tự chạy được trong 90 ngày?
            </h3>
            <p className="mt-2 aa-muted leading-relaxed">
              Anh xem lộ trình trước. Nếu hợp, mình chốt scope và bắt đầu pha Foundation.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/for-brands"
              className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
            >
              Tôi là Nhãn hàng
            </a>
            <a
              href="#roadmap"
              className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
            >
              Xem Roadmap 90 ngày
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- UI blocks ---------- */

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="aa-surface p-5 sm:p-6">
      <div className="text-xs text-white/55">{label}</div>
      <div className="mt-2 text-lg font-semibold tracking-tight text-white">{value}</div>
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

function Phase({
  n,
  title,
  desc,
  bullets,
  outcome,
}: {
  n: string;
  title: string;
  desc: string;
  bullets: string[];
  outcome: string;
}) {
  return (
    <div className="aa-surface p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-white/55">{n}</div>
        <span className="text-xs text-[rgb(var(--primary-2))]">90-day</span>
      </div>
      <div className="mt-2 text-base font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm aa-muted leading-relaxed">{desc}</p>

      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {bullets.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--primary))]" />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-xs text-white/55">Outcome</div>
        <div className="mt-1 text-sm text-white">{outcome}</div>
      </div>
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