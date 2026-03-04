// app/page.tsx
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
                <span className="font-medium text-white">Alfa Agent</span>
                <span className="mx-2 text-white/30">•</span>
                <span className="text-white/60">Product of Alfa Media</span>
              </span>
              <span className="aa-badge">
                <span className="text-white/60">System-first KOC operation</span>
              </span>
            </div>

            {/* Title */}
            <div className="mt-7 sm:mt-8 max-w-3xl">
              <h1 className="text-[32px] leading-[1.08] sm:text-5xl sm:leading-[1.05] font-semibold tracking-tight max-w-[18ch] sm:max-w-none">
                Một hệ thống vận hành KOC
                <br className="hidden sm:block" />
                để tạo và giữ dòng tiền.
              </h1>

              {/* Sub-brand line (premium, rõ “product”) */}
              <p className="mt-3 text-sm sm:text-base text-white/70">
                System-first KOC operation platform • SOP • Approval • KPI Tracking
              </p>

              <p className="mt-4 text-[15px] leading-relaxed sm:text-base aa-muted max-w-2xl">
                Alfa Agent không phải “agency đăng bài”. Đây là hệ thống triển khai nội dung
                có SOP, kiểm duyệt, bảo mật và tracking KPI để tối ưu vòng lặp.
                Làm nhanh nhưng không loạn.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/for-brands"
                  className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
                >
                  Tôi là Nhãn hàng
                </a>
                <a
                  href="/solutions/build-and-run"
                  className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
                >
                  Tôi là Doanh nghiệp nhỏ
                </a>
                <a
                  href="/join-koc"
                  className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
                >
                  Tôi là KOC
                </a>
              </div>
            </div>

            {/* Proof blocks */}
            <div className="mt-7 sm:mt-10 grid gap-3 sm:gap-4 sm:grid-cols-3">
              <Stat
                label="SOP vận hành"
                value="Chuẩn hoá"
                note="Không chạy theo cảm hứng."
              />
              <Stat
                label="Kiểm duyệt nội dung"
                value="Bắt buộc"
                note="Không duyệt = không đăng."
              />
              <Stat
                label="KPI tracking"
                value="Tập trung"
                note="Ra quyết định bằng dữ liệu."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ENTRY */}
      <section>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Chọn đúng cửa. Đi đúng hướng.
          </h2>
          <p className="max-w-2xl aa-muted leading-relaxed">
            Website được thiết kế để phân luồng ngay từ đầu: nhãn hàng, doanh nghiệp nhỏ,
            và KOC. Mỗi nhóm có SOP, KPI và cách triển khai riêng.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 grid gap-4 lg:grid-cols-3">
          <EntryCard
            badge="Brands"
            title="For Brands"
            desc="Brief → Lọc KOC → Duyệt kịch bản → Tracking KPI → Báo cáo & tối ưu vòng sau."
            href="/for-brands"
            cta="Gửi brief chiến dịch"
          />
          <EntryCard
            badge="Business"
            title="Build & Run"
            desc="Setup định vị → Lịch vận hành → Template nội dung → Scale có kiểm soát (3 tháng)."
            href="/solutions/build-and-run"
            cta="Nhận lộ trình 3 tháng"
          />
          <EntryCard
            badge="Talent"
            title="Join KOC"
            desc="Kỷ luật → Template → KPI → Lộ trình. Không phù hợp nếu làm theo cảm hứng."
            href="/join-koc"
            cta="Ứng tuyển vào hệ thống"
          />
        </div>
      </section>

      {/* SYSTEM MODULES (product feel) */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            System Modules
          </h2>
          <p className="max-w-3xl aa-muted leading-relaxed">
            Alfa Agent là một “hệ vận hành”. Mỗi chiến dịch/KOC chạy trong module rõ ràng,
            để scale mà không đánh đổi chất lượng.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Module
            title="Content SOP"
            desc="Chuẩn hoá format theo nền tảng, tránh lệch định vị."
          />
          <Module
            title="KOC Vetting"
            desc="Chọn theo năng lực & tệp, không chạy theo số lượng."
          />
          <Module
            title="Script Approval"
            desc="Duyệt thông điệp & cấu trúc trước quay, giảm rủi ro."
          />
          <Module
            title="Publishing Control"
            desc="Quy trình đăng & checklist tuân thủ, không “thả trôi”."
          />
          <Module
            title="KPI Tracking"
            desc="Theo dõi tập trung theo nhóm nội dung, ra quyết định nhanh."
          />
          <Module
            title="Reporting Loop"
            desc="Báo cáo + bài học + cải tiến SOP để vòng sau mạnh hơn."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Hệ thống vận hành như thế nào?
          </h2>
          <p className="max-w-3xl aa-muted leading-relaxed">
            Alfa Agent tập trung vào 3 thứ: giảm rủi ro, tăng chất lượng, và giữ dữ liệu để tối ưu vòng lặp.
            Không “làm cho xong”.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-4">
          <Step
            n="01"
            title="Định mục tiêu"
            desc="Chốt KPI ngay từ đầu: awareness / traffic / conversion."
          />
          <Step
            n="02"
            title="Chuẩn hoá sản xuất"
            desc="Template + guideline + kiểm duyệt trước đăng."
          />
          <Step
            n="03"
            title="Vận hành & tracking"
            desc="Theo dõi theo nhóm nội dung, ra quyết định bằng dữ liệu."
          />
          <Step
            n="04"
            title="Tối ưu vòng lặp"
            desc="Báo cáo + cải thiện SOP để vòng sau mạnh hơn vòng trước."
          />
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <section className="grid gap-4 lg:grid-cols-3">
        <AuthorityCard
          title="Không bán “lượt đăng”"
          desc="Alfa Agent bán hệ thống: kiểm soát chất lượng, rủi ro nền tảng và dữ liệu tối ưu."
        />
        <AuthorityCard
          title="Không mở rộng vô hạn"
          desc="Scale theo chuẩn: chọn đúng KOC, đúng format, đúng KPI. Ưu tiên ổn định."
        />
        <AuthorityCard
          title="Không làm xong là hết"
          desc="Giữ tài sản: guideline, template, dữ liệu, bài học để vòng sau hiệu quả hơn."
        />
      </section>

      {/* CTA */}
      <section className="aa-surface aa-shadow p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight">
              Muốn chạy nhanh nhưng không muốn loạn?
            </h3>
            <p className="mt-2 aa-muted leading-relaxed">
              Bắt đầu từ đúng cửa: nhãn hàng gửi brief, doanh nghiệp nhỏ nhận lộ trình,
              KOC ứng tuyển theo tiêu chuẩn.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/for-brands"
              className="aa-btn-primary aa-focus w-full sm:w-auto text-center"
            >
              For Brands
            </a>
            <a
              href="/join-koc"
              className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
            >
              Join KOC
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

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="aa-surface p-5">
      <div className="text-xs text-white/55">{n}</div>
      <div className="mt-2 font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm aa-muted leading-relaxed">{desc}</div>
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