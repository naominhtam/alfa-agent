// app/for-brands/page.tsx
export default function ForBrandsPage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="pt-2">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
            <span className="font-medium text-neutral-900">For Brands</span>
            <span className="text-neutral-400">•</span>
            <span>System-first KOC operation</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Alfa Agent vận hành KOC bằng SOP.
            <br className="hidden sm:block" />
            Không phải booking tự phát.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
            Chúng tôi triển khai chiến dịch đa kênh với cơ chế kiểm duyệt nội dung,
            phân quyền rõ ràng và tracking KPI tập trung. Nếu anh chỉ cần “đăng vài
            bài cho có”, Alfa Agent không phù hợp.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#brief"
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition"
            >
              Gửi Brief Chiến Dịch
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-900 hover:border-neutral-400 transition"
            >
              Xem Quy Trình Triển Khai
            </a>
          </div>

          <div className="grid gap-3 pt-6 sm:grid-cols-3">
            <Stat label="Kiểm duyệt trước đăng" value="Bắt buộc" />
            <Stat label="Tracking KPI tập trung" value="Có" />
            <Stat label="Bảo mật & backup" value="Chuẩn hoá" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Booking thì dễ. Kiểm soát mới khó.
            </h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Phần lớn chiến dịch KOC thất bại không phải vì thiếu KOC, mà vì thiếu
              hệ thống kiểm soát. Nội dung lệch thông điệp, chất lượng không đồng đều,
              dữ liệu phân tán, vòng sau không tối ưu được.
            </p>
            <p className="mt-4 text-neutral-900 font-medium">
              Alfa Agent không bán “lượt đăng”. Chúng tôi vận hành hệ thống.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-sm font-semibold text-neutral-900">
              4 lỗi phổ biến của thị trường
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              <li className="flex gap-3">
                <Dot />
                <span>Nội dung lệch định vị thương hiệu, thiếu kiểm duyệt.</span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>Không có format chuẩn, mỗi KOC làm một kiểu.</span>
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
          Quy trình triển khai (không có ngoại lệ)
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-600 leading-relaxed">
          Mỗi chiến dịch đều chạy theo SOP. Mục tiêu là giảm rủi ro, tăng chất lượng,
          và giữ dữ liệu để tối ưu vòng lặp tiếp theo.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          <Step
            n="01"
            title="Chốt mục tiêu"
            desc="Xác định KPI chính: awareness / traffic / conversion."
          />
          <Step
            n="02"
            title="Lọc KOC phù hợp"
            desc="Chọn theo năng lực & tệp, không chạy theo số lượng."
          />
          <Step
            n="03"
            title="Duyệt kịch bản"
            desc="Kiểm duyệt thông điệp & format trước khi quay."
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
        <div className="rounded-2xl border border-neutral-200 p-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              Tiêu chuẩn nội dung (để ngân sách không bị đốt)
            </h2>
            <p className="text-neutral-600 leading-relaxed max-w-3xl">
              KOC trong hệ thống không “tự do sáng tác”. Họ vận hành theo guideline để
              đảm bảo chất lượng và hạn chế rủi ro nền tảng.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Hook 3 giây đầu" desc="Mở bài rõ vấn đề, đúng đối tượng." />
            <Card
              title="Thông điệp thống nhất"
              desc="Không lệch định vị thương hiệu."
            />
            <Card
              title="Format theo nền tảng"
              desc="Đúng TikTok/Reels/Shorts, tối ưu watch-time."
            />
            <Card
              title="Kiểm duyệt trước đăng"
              desc="Không có duyệt = không đăng."
            />
            <Card
              title="Tuân thủ chính sách"
              desc="Giảm rủi ro gỡ video / hạn chế tài khoản."
            />
            <Card title="Backup nội dung" desc="Lưu trữ & tái sử dụng tài sản." />
          </div>
        </div>
      </section>

      {/* MINI CASE */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">
          Mini-case (tập trung vào quy trình, không khoe mơ hồ)
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Case
            title="Mỹ phẩm — thống nhất thông điệp"
            problem="Nội dung rời rạc, mỗi KOC nói một kiểu."
            solution="Chuẩn hóa format 45–60s + duyệt script trước quay."
            result="Thông điệp đồng nhất, video ổn định chất lượng và dễ tối ưu vòng sau."
          />
          <Case
            title="Gia dụng — thiếu tracking"
            problem="Nhiều KOC nhưng báo cáo phân tán, khó ra quyết định."
            solution="Gắn mã theo nhóm nội dung + tracking tập trung theo phân khúc."
            result="Xác định nhóm nội dung hiệu quả nhất để dồn lực vòng tiếp theo."
          />
        </div>
      </section>

      {/* TIMELINE */}
      <section>
        <div className="rounded-2xl border border-neutral-200 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Timeline triển khai (rõ, không kéo dài vô hạn)
          </h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <Timeline
              title="Tuần 1 — Chuẩn bị"
              items={[
                "Nhận brief & chốt mục tiêu",
                "Chọn KOC phù hợp",
                "Chốt format & guideline",
              ]}
            />
            <Timeline
              title="Tuần 2–3 — Sản xuất & đăng"
              items={[
                "Duyệt kịch bản trước quay",
                "Sản xuất nội dung theo SOP",
                "Đăng & theo dõi hiệu suất",
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
      <section
        id="brief"
        className="scroll-mt-24 rounded-2xl border border-neutral-200 p-8"
      >
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Gửi brief. Nhận đề xuất trong 48h.
          </h2>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            Chúng tôi phản hồi bằng kế hoạch cụ thể (KPI, timeline, cơ chế vận hành),
            không gửi báo giá chung chung.
          </p>
        </div>

        {/* NOTE: Server Component - no onClick. We'll wire up Netlify Forms next. */}
        <form action="#" method="post" className="mt-8 grid gap-4 sm:grid-cols-2">
          <Field label="Tên công ty / thương hiệu" placeholder="VD: Alfa Media" />
          <Field label="Email liên hệ" placeholder="email@domain.com" type="email" />
          <Field label="Sản phẩm / ngành hàng" placeholder="VD: Mỹ phẩm / Gia dụng..." />
          <Field label="Ngân sách dự kiến" placeholder="VD: 30–100 triệu" />
          <Field
            label="Mục tiêu chiến dịch"
            placeholder="Awareness / Traffic / Conversion"
          />
          <Field
            label="Thời gian dự kiến triển khai"
            placeholder="VD: 2 tuần / 1 tháng"
          />
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-neutral-900">
              Ghi chú thêm
            </label>
            <textarea
              className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-neutral-400"
              rows={5}
              placeholder="Thông điệp chính, tệp khách hàng, kênh đang chạy, yêu cầu đặc biệt..."
              name="note"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
            <p className="text-xs text-neutral-500">
              *Gửi form là đồng ý để Alfa Agent liên hệ tư vấn. Không spam.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition"
            >
              Gửi Brief
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

/* ---------- small UI blocks (keep inside this file for now) ---------- */

function Dot() {
  return <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5">
      <div className="text-xs text-neutral-500">{label}</div>
      <div className="mt-2 text-lg font-semibold tracking-tight">{value}</div>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5">
      <div className="text-xs text-neutral-500">{n}</div>
      <div className="mt-2 font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-600 leading-relaxed">{desc}</div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-600 leading-relaxed">{desc}</div>
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
    <div className="rounded-2xl border border-neutral-200 p-6">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-4 space-y-3 text-sm text-neutral-700">
        <p>
          <span className="font-medium text-neutral-900">Vấn đề: </span>
          {problem}
        </p>
        <p>
          <span className="font-medium text-neutral-900">Giải pháp: </span>
          {solution}
        </p>
        <p>
          <span className="font-medium text-neutral-900">Kết quả: </span>
          {result}
        </p>
      </div>
    </div>
  );
}

function Timeline({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6">
      <div className="font-semibold">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  const name = label
    .toLowerCase()
    .replaceAll("/", " ")
    .replaceAll("  ", " ")
    .trim()
    .replaceAll(" ", "_");

  return (
    <div>
      <label className="text-sm font-medium text-neutral-900">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-neutral-400"
      />
    </div>
  );
}