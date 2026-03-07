import Link from "next/link";

export default function ThanksPage() {
  return (
    <div className="space-y-6">
      <div className="aa-surface aa-shadow p-6 sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Đã nhận brief.
        </h1>

        <p className="mt-3 leading-relaxed aa-muted">
          Alfa Agent sẽ phản hồi trong 48h với đề xuất triển khai gồm KPI,
          timeline và cơ chế vận hành phù hợp.
        </p>

        <p className="mt-2 text-sm text-white/55">
          Alfa Agent là product của Alfa Media.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="aa-btn-primary aa-focus w-full text-center sm:w-auto"
          >
            Về trang chủ
          </Link>

          <Link
            href="/alfa-agent/for-brands"
            className="aa-btn-outline aa-focus w-full text-center sm:w-auto"
          >
            Gửi thêm brief
          </Link>
        </div>
      </div>
    </div>
  );
}