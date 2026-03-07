import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://alfamedia.vn"),
  title: "Liên hệ thành công",
  description:
    "Alfa Media đã nhận thông tin liên hệ và sẽ phản hồi sớm.",
  alternates: {
    canonical: "/contact/thanks",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactThanksPage() {
  return (
    <div className="space-y-6">
      <div className="aa-surface aa-shadow p-6 sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Đã nhận thông tin liên hệ.
        </h1>

        <p className="mt-3 leading-relaxed aa-muted">
          Alfa Media sẽ phản hồi sớm theo thông tin anh/chị đã cung cấp.
        </p>

        <p className="mt-2 text-sm text-white/55">
          Nếu nội dung cần xử lý nhanh, vui lòng theo dõi email trong thời gian gần nhất.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="aa-btn-primary aa-focus w-full text-center sm:w-auto"
          >
            Về trang chủ
          </Link>

          <Link
            href="/contact"
            className="aa-btn-outline aa-focus w-full text-center sm:w-auto"
          >
            Gửi thêm liên hệ
          </Link>
        </div>
      </div>
    </div>
  );
}