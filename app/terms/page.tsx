import type { Metadata } from "next";

const LAST_UPDATED = "04/03/2026"; // dd/mm/yyyy (cập nhật tay khi cần)

export const metadata: Metadata = {
  metadataBase: new URL("https://alfamedia.vn"),
  title: "Terms of Service",
  description:
    "Điều khoản sử dụng website của Alfa Media (Company) và các trang sản phẩm Alfa Agent (Product).",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service — Alfa Media",
    description:
      "Điều khoản sử dụng website của Alfa Media. Alfa Agent là sản phẩm thuộc Alfa Media.",
    url: "/terms",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service — Alfa Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Alfa Media",
    description:
      "Điều khoản sử dụng: truy cập website, hợp tác, nội dung, quyền sở hữu, giới hạn trách nhiệm. Alfa Agent là product của Alfa Media.",
    images: ["/og.png"],
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">Điều khoản Sử dụng</h1>

      <p className="text-sm text-white/60">Cập nhật lần cuối: {LAST_UPDATED}</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Chủ thể điều khoản</h2>

        <p className="aa-muted leading-relaxed">
          Điều khoản này được ban hành bởi <span className="text-white">Alfa Media</span>{" "}
          (sau đây gọi là “Công ty”, “chúng tôi”) và áp dụng cho việc truy cập, sử dụng website alfamedia.vn
          và các trang liên quan đến <span className="text-white">Alfa Agent</span> (một sản phẩm thuộc Alfa Media).
        </p>

        <p className="aa-muted leading-relaxed">
          Khi bạn truy cập hoặc sử dụng website, bạn xác nhận đã đọc, hiểu và đồng ý bị ràng buộc bởi Điều khoản này.
          Nếu không đồng ý, vui lòng ngừng sử dụng website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Phạm vi dịch vụ</h2>

        <p className="aa-muted leading-relaxed">
          Alfa Media cung cấp thông tin về công ty, sản phẩm và dịch vụ. Trong đó, Alfa Agent là sản phẩm cung cấp hệ thống
          vận hành KOC và affiliate marketing theo hướng “system-first”, có SOP, kiểm duyệt nội dung và tracking KPI.
        </p>

        <p className="aa-muted leading-relaxed">
          Website có thể đóng vai trò:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Cổng thông tin giới thiệu công ty, sản phẩm và các gói dịch vụ</li>
          <li>Kênh tiếp nhận yêu cầu hợp tác (brief, liên hệ, đăng ký)</li>
          <li>Không gian cập nhật tài liệu/định hướng (khi có)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Điều kiện sử dụng</h2>

        <p className="aa-muted">Khi sử dụng website hoặc gửi thông tin qua các biểu mẫu, bạn đồng ý:</p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Cung cấp thông tin chính xác, hợp pháp, không giả mạo</li>
          <li>Không sử dụng website cho mục đích vi phạm pháp luật hoặc xâm phạm quyền của bên khác</li>
          <li>Không cố gắng truy cập trái phép, quét lỗ hổng, can thiệp hệ thống</li>
          <li>Không gây gián đoạn, tấn công, hoặc làm suy giảm trải nghiệm người dùng khác</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Nội dung và quyền sở hữu trí tuệ</h2>

        <p className="aa-muted leading-relaxed">
          Tất cả nội dung trên website (bao gồm văn bản, thiết kế, logo, hình ảnh, layout, tài liệu, hệ thống vận hành, SOP,
          template, framework) thuộc quyền sở hữu của <span className="text-white">Alfa Media</span> hoặc các bên liên quan
          theo thỏa thuận.
        </p>

        <p className="aa-muted leading-relaxed">
          Bạn không được sao chép, sửa đổi, phân phối, tái xuất bản, hoặc sử dụng cho mục đích thương mại
          nếu không có sự cho phép bằng văn bản từ Alfa Media, trừ khi pháp luật cho phép.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Điều khoản riêng đối với KOC</h2>

        <p className="aa-muted">Người tham gia hệ thống KOC (nếu có) cần tuân thủ tối thiểu:</p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Tuân thủ guideline nội dung theo từng chiến dịch</li>
          <li>Không đăng tải nội dung gây hiểu lầm, sai sự thật hoặc vi phạm chính sách nền tảng</li>
          <li>Không làm sai lệch thông tin về sản phẩm/nhãn hàng</li>
          <li>Tuân thủ quy trình kiểm duyệt trước khi đăng (nếu chiến dịch yêu cầu)</li>
        </ul>

        <p className="aa-muted">
          Alfa Media/Alfa Agent có quyền từ chối, tạm dừng hoặc chấm dứt hợp tác nếu phát hiện vi phạm hoặc rủi ro nghiêm trọng.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Điều khoản riêng đối với nhãn hàng</h2>

        <p className="aa-muted">Nhãn hàng/doanh nghiệp khi hợp tác cần đảm bảo:</p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Cung cấp thông tin sản phẩm/dịch vụ trung thực, có cơ sở</li>
          <li>Không quảng bá sản phẩm vi phạm pháp luật hoặc trái đạo đức xã hội</li>
          <li>Tuân thủ quy định quảng cáo và chính sách nền tảng (TikTok/Meta/YouTube…)</li>
        </ul>

        <p className="aa-muted leading-relaxed">
          Alfa Media có quyền từ chối triển khai nếu sản phẩm/nội dung có dấu hiệu vi phạm, rủi ro cao hoặc không phù hợp định hướng.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Giới hạn trách nhiệm</h2>

        <p className="aa-muted leading-relaxed">
          Website và nội dung được cung cấp theo nguyên tắc “as-is” (tại thời điểm cung cấp). Alfa Media nỗ lực đảm bảo thông tin chính xác,
          tuy nhiên không cam kết tuyệt đối rằng mọi nội dung luôn đầy đủ hoặc không có sai sót.
        </p>

        <p className="aa-muted leading-relaxed">
          Alfa Media không chịu trách nhiệm đối với tổn thất phát sinh từ:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Hành vi hoặc nội dung của bên thứ ba (nền tảng, KOC, đối tác…)</li>
          <li>Thay đổi chính sách/thuật toán của các nền tảng mạng xã hội</li>
          <li>Gián đoạn kỹ thuật ngoài tầm kiểm soát (mạng, thiết bị, dịch vụ hạ tầng…)</li>
          <li>Quyết định kinh doanh của bạn dựa trên thông tin tham khảo từ website</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Tạm ngừng và chấm dứt truy cập</h2>

        <p className="aa-muted leading-relaxed">
          Alfa Media có quyền tạm ngừng hoặc chấm dứt quyền truy cập website của người dùng trong trường hợp phát hiện hành vi
          vi phạm Điều khoản, rủi ro bảo mật, hoặc yêu cầu từ cơ quan có thẩm quyền.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Thay đổi điều khoản</h2>

        <p className="aa-muted leading-relaxed">
          Chúng tôi có thể cập nhật Điều khoản khi cần để phản ánh thay đổi trong hoạt động, sản phẩm (bao gồm Alfa Agent) hoặc yêu cầu pháp lý.
          Phiên bản cập nhật sẽ được đăng tải trên website và có hiệu lực từ thời điểm công bố.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Thông tin liên hệ</h2>

        <p className="aa-muted leading-relaxed">
          Nếu bạn có câu hỏi liên quan đến Điều khoản sử dụng hoặc cần hỗ trợ, vui lòng liên hệ:
        </p>

        <div className="text-sm text-white/80">
          <p>Alfa Media</p>
          <p>Email: admin@alfamedia.vn</p>
          <p>Website: https://alfamedia.vn</p>
        </div>
      </section>
    </div>
  );
}