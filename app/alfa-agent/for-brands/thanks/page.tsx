import Link from "next/link";

export default function ThanksPage() {
  return (
    <div className="space-y-6">
      <div className="aa-surface aa-shadow p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Đã nhận brief.
        </h1>
        <p className="mt-3 aa-muted leading-relaxed">
          Alfa Agent sẽ phản hồi trong 48h với kế hoạch triển khai (KPI, timeline, cơ chế vận hành).
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="aa-btn-primary aa-focus w-full sm:w-auto text-center">
            Về trang chủ
          </Link>
          <Link
            href="/for-brands"
            className="aa-btn-outline aa-focus w-full sm:w-auto text-center"
          >
            Gửi thêm brief
          </Link>
        </div>
      </div>
    </div>
  );
}