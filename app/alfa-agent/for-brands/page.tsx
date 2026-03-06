// app/alfa-agent/for-brands/page.tsx
import type { Metadata } from "next";
import BrandBriefFormClient from "./BrandBriefFormClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://alfamedia.vn"),
  title: "For Brands",
  description:
    "For Brands là giải pháp của Alfa Agent, thuộc Alfa Media: triển khai KOC theo SOP, lọc creator phù hợp, duyệt kịch bản bắt buộc, kiểm soát đăng và tracking KPI tập trung để tối ưu vòng sau.",
  keywords: [
    "Alfa Media",
    "Alfa Agent",
    "For Brands",
    "KOC operation",
    "KOC campaign",
    "creator operation",
    "content SOP",
    "KPI tracking",
    "brand campaign system",
    "affiliate operation",
  ],
  alternates: {
    canonical: "/alfa-agent/for-brands",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "For Brands — Alfa Agent",
    description:
      "System-first KOC operation by Alfa Agent (a product of Alfa Media): SOP • Approval • KPI Tracking • Reporting Loop.",
    url: "/alfa-agent/for-brands",
    siteName: "Alfa Media",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "For Brands — Alfa Agent, a product of Alfa Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Brands — Alfa Agent",
    description:
      "System-first KOC operation: SOP • Approval • KPI Tracking • Reporting Loop.",
    images: ["/og.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "For Brands",
  serviceType: "KOC Operation System",
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
  url: "https://alfamedia.vn/alfa-agent/for-brands",
  description:
    "For Brands là giải pháp vận hành KOC theo SOP: lọc creator phù hợp, duyệt kịch bản bắt buộc, kiểm soát đăng và tracking KPI tập trung để tối ưu bền vững.",
  areaServed: "VN",
};

export default function ForBrandsPage() {
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
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[rgb(var(--primary))]/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[rgb(var(--primary-2))]/10 blur-3xl" />

            <div className="relative p-5 sm:p-10">
              <div className="flex flex-col gap-5 sm:gap-6">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="aa-badge">
                    <span className="font-medium text-white">For Brands</span>
                    <span className="mx-2 text-white/30">•</span>
                    <span className="text-white/60">Alfa Agent solution</span>
                  </span>
                  <span className="aa-badge">
                    <span className="text-white/60">
                      Product of Alfa Media • System-first KOC operation
                    </span>
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-[34px] font-semibold leading-[1.06] tracking-tight sm:text-5xl sm:leading-[1.05]">
                  Vận hành KOC bằng SOP.
                  <br className="hidden sm:block" />
                  Không phải booking tự phát.
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl text-[15px] leading-relaxed aa-muted sm:text-base">
                  <span className="text-white">For Brands</span> là giải pháp thuộc{" "}
                  <span className="text-white">Alfa Agent</span>, được phát triển bởi{" "}
                  <span className="text-white">Alfa Media</span>, dành cho nhãn hàng cần
                  cơ chế kiểm duyệt nội dung, phân quyền rõ ràng và tracking KPI tập trung.
                  Nếu mục tiêu chỉ là đăng vài bài cho có, đây không phải hướng phù hợp.
                </p>

                {/* CTA */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#brief"
                    className="aa-btn-primary aa-focus w-full text-center sm:w-auto"
                  >
                    Gửi Brief Chiến Dịch
                  </a>
                  <a
                    href="#process"
                    className="aa-btn-outline aa-focus w-full text-center sm:w-auto"
                  >
                    Xem Quy Trình Triển Khai
                  </a>
                </div>

                {/* Trust line */}
                <div className="flex flex-col gap-2 pt-1 text-xs text-white/55 sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--primary))]" />
                    <span>Kiểm duyệt trước đăng: bắt buộc</span>
                  </div>
                  <div className="hidden h-3 w-px bg-white/10 sm:block" />
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--primary))]" />
                    <span>Tracking KPI theo nhóm nội dung</span>
                  </div>
                  <div className="hidden h-3 w-px bg-white/10 sm:block" />
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--primary))]" />
                    <span>Bảo mật &amp; lưu trữ tài sản nội dung</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid gap-3 pt-4 sm:grid-cols-3 sm:gap-4 sm:pt-6">
                  <Stat label="Kiểm duyệt trước đăng" value="Bắt buộc" />
                  <Stat label="Tracking KPI tập trung" value="Có" />
                  <Stat label="Bảo mật &amp; backup" value="Chuẩn hoá" />
                </div>
              </div>
            </div>
          </div>

          {/* Sticky CTA for mobile */}
          <div className="fixed bottom-3 left-0 right-0 z-40 px-4 sm:hidden">
            <a
              href="#brief"
              className="aa-btn-primary aa-focus aa-shadow w-full text-center"
            >
              Gửi Brief Chiến Dịch
            </a>
          </div>
        </section>

        {/* PROBLEM */}
        <section>
          <div className="grid gap-6 sm:gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Booking thì dễ. Kiểm soát mới khó.
              </h2>
              <p className="mt-3 leading-relaxed aa-muted">
                Phần lớn chiến dịch KOC thất bại không phải vì thiếu creator, mà vì thiếu
                hệ thống kiểm soát. Nội dung lệch thông điệp, chất lượng không đồng đều,
                dữ liệu phân tán, và vòng sau không tối ưu được.
              </p>
              <p className="mt-4 font-medium text-white">
                Alfa Agent không bán lượt đăng. Giải pháp này tập trung vào vận hành hệ thống.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <MiniCard
                  title="Đầu ra đồng đều"
                  desc="Template + kiểm duyệt trước quay/đăng."
                />
                <MiniCard
                  title="Quyết định bằng dữ liệu"
                  desc="Tracking KPI theo nhóm nội dung."
                />
              </div>
            </div>

            <div className="aa-surface aa-shadow p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-white">
                4 lỗi phổ biến của thị trường
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li className="flex gap-3">
                  <Dot />
                  <span>Nội dung lệch định vị thương hiệu, thiếu kiểm duyệt.</span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>Không có format chuẩn, mỗi creator làm một kiểu.</span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>Không có tracking tập trung, khó ra quyết định.</span>
                </li>
                <li className="flex gap-3">
                  <Dot />
                  <span>Chiến dịch xong là hết, không tích luỹ tài sản dữ liệu.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Quy trình triển khai
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed aa-muted">
            Mỗi chiến dịch đều chạy theo SOP. Mục tiêu là giảm rủi ro, tăng chất lượng,
            và giữ dữ liệu để tối ưu vòng lặp tiếp theo.
          </p>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-5">
            <Step
              n="01"
              title="Chốt mục tiêu"
              desc="Xác định KPI chính: awareness / traffic / conversion."
            />
            <Step
              n="02"
              title="Lọc creator phù hợp"
              desc="Chọn theo năng lực và tệp, không chạy theo số lượng."
            />
            <Step
              n="03"
              title="Duyệt kịch bản"
              desc="Kiểm duyệt thông điệp và format trước khi quay."
            />
            <Step
              n="04"
              title="Giám sát & tracking"
              desc="Theo dõi hiệu suất theo nhóm nội dung theo thời gian."
            />
            <Step
              n="05"
              title="Báo cáo & tối ưu"
              desc="Phân tích để tối ưu vòng sau, không chỉ tổng kết."
            />
          </div>
        </section>

        {/* STANDARD */}
        <section>
          <div className="aa-surface aa-shadow p-6 sm:p-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight">
                Tiêu chuẩn nội dung
              </h2>
              <p className="max-w-3xl leading-relaxed aa-muted">
                Creator trong hệ thống không tự do sáng tác theo kiểu ngẫu hứng.
                Họ vận hành theo guideline để đảm bảo chất lượng và hạn chế rủi ro nền tảng.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              <Card title="Hook 3 giây đầu" desc="Mở bài rõ vấn đề, đúng đối tượng." />
              <Card title="Thông điệp thống nhất" desc="Không lệch định vị thương hiệu." />
              <Card
                title="Format theo nền tảng"
                desc="Đúng TikTok/Reels/Shorts, tối ưu watch-time."
              />
              <Card title="Kiểm duyệt trước đăng" desc="Không có duyệt = không đăng." />
              <Card
                title="Tuân thủ chính sách"
                desc="Giảm rủi ro gỡ video / hạn chế tài khoản."
              />
              <Card title="Backup nội dung" desc="Lưu trữ và tái sử dụng tài sản." />
            </div>
          </div>
        </section>

        {/* MINI CASE */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">
            Mini-case
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed aa-muted">
            Tập trung vào cách hệ thống vận hành, không khoe những chỉ số mơ hồ.
          </p>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-2">
            <Case
              title="Mỹ phẩm — thống nhất thông điệp"
              problem="Nội dung rời rạc, mỗi creator nói một kiểu."
              solution="Chuẩn hóa format 45–60s + duyệt script trước quay."
              result="Thông điệp đồng nhất, video ổn định chất lượng và dễ tối ưu vòng sau."
            />
            <Case
              title="Gia dụng — thiếu tracking"
              problem="Nhiều creator nhưng báo cáo phân tán, khó ra quyết định."
              solution="Gắn mã theo nhóm nội dung + tracking tập trung theo phân khúc."
              result="Xác định nhóm nội dung hiệu quả nhất để dồn lực cho vòng tiếp theo."
            />
          </div>
        </section>

        {/* TIMELINE */}
        <section>
          <div className="aa-surface aa-shadow p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Timeline triển khai
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed aa-muted">
              Quy trình rõ, không kéo dài vô hạn và không đẩy đội ngũ vào trạng thái hỗn loạn.
            </p>

            <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-3">
              <Timeline
                title="Tuần 1 — Chuẩn bị"
                items={[
                  "Nhận brief và chốt mục tiêu",
                  "Chọn creator phù hợp",
                  "Chốt format và guideline",
                ]}
              />
              <Timeline
                title="Tuần 2–3 — Sản xuất & đăng"
                items={[
                  "Duyệt kịch bản trước quay",
                  "Sản xuất nội dung theo SOP",
                  "Đăng và theo dõi hiệu suất",
                ]}
              />
              <Timeline
                title="Tuần 4 — Báo cáo & tối ưu"
                items={[
                  "Báo cáo KPI theo nhóm nội dung",
                  "Bài học rút ra",
                  "Kế hoạch tối ưu vòng sau",
                ]}
              />
            </div>
          </div>
        </section>

        {/* FORM */}
        <section id="brief" className="scroll-mt-24">
          <div className="aa-surface aa-shadow p-6 sm:p-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Gửi brief. Nhận đề xuất trong 48h.
              </h2>
              <p className="mt-3 leading-relaxed aa-muted">
                Phản hồi sẽ đi theo kế hoạch cụ thể: KPI, timeline và cơ chế vận hành.
                Không gửi báo giá chung chung.
              </p>
            </div>

            <div className="mt-6 sm:mt-8">
              <BrandBriefFormClient />
            </div>

            <div className="mt-4 text-xs text-white/50">
              *Gửi form là đồng ý để Alfa Agent liên hệ tư vấn. Không spam.
            </div>
          </div>
        </section>

        {/* Bottom spacer to avoid mobile sticky overlap */}
        <div className="h-16 sm:hidden" />
      </div>
    </>
  );
}

/* ---------- small UI blocks ---------- */

function Dot() {
  return (
    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[rgb(var(--primary))]" />
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="aa-surface p-5 sm:p-6">
      <div className="text-xs text-white/55">{label}</div>
      <div className="mt-2 text-lg font-semibold tracking-tight text-white">
        {value}
      </div>
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

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="aa-surface p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed aa-muted">{desc}</div>
    </div>
  );
}

function Case({
  title,
  problem,
  solution,
  result,
}: {
  title: string;
  problem: string;
  solution: string;
  result: string;
}) {
  return (
    <div className="aa-surface aa-shadow p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-4 space-y-3 text-sm text-white/75">
        <p>
          <span className="font-medium text-white">Vấn đề: </span>
          {problem}
        </p>
        <p>
          <span className="font-medium text-white">Giải pháp: </span>
          {solution}
        </p>
        <p>
          <span className="font-medium text-white">Kết quả: </span>
          {result}
        </p>
      </div>
    </div>
  );
}

function Timeline({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="aa-surface p-6">
      <div className="font-semibold text-white">{title}</div>
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