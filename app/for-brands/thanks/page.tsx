export default function ThanksPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-tight">Đã nhận brief.</h1>
      <p className="mt-3 text-neutral-600 leading-relaxed">
        Cảm ơn anh/chị. Alfa Agent sẽ phản hồi bằng đề xuất triển khai trong 48 giờ.
      </p>

      <div className="mt-8 flex gap-3">
        <a
          href="/for-brands"
          className="rounded-xl border border-neutral-200 px-5 py-3 text-sm font-semibold hover:border-neutral-400 transition"
        >
          Quay lại For Brands
        </a>
        <a
          href="/"
          className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition"
        >
          Về trang chủ
        </a>
      </div>
    </div>
  );
}