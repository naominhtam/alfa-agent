import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://alfamedia.vn"),
  title: "Ứng tuyển thành công",
  description:
    "Alfa Agent đã nhận hồ sơ ứng tuyển creator / KOC và sẽ phản hồi sớm.",
  alternates: {
    canonical: "/alfa-agent/join-koc/thanks",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function JoinKocThanksPage() {
  return (
    <div className="space-y-6">
      <div className="aa-surface aa-shadow p-6 sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Đã nhận hồ sơ ứng tuyển.
        </h1>

        <p className="mt-3 leading-relaxed aa-muted">
          Alfa Agent sẽ xem xét thông tin và phản hồi sớm nếu hồ sơ phù hợp với
          tiêu chuẩn vận hành hiện tại.
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
            href="/alfa-agent/join-koc"
            className="aa-btn-outline aa-focus w-full text-center sm:w-auto"
          >
            Gửi lại hồ sơ
          </Link>
        </div>
      </div>
    </div>
  );
}