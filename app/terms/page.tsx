import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Điều khoản sử dụng cho Alfa Agent (Product of Alfa Media).",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        Điều khoản Sử dụng
      </h1>

      <p className="text-sm text-white/60">
        Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Giới thiệu</h2>

        <p className="aa-muted leading-relaxed">
          Các điều khoản sử dụng này ("Điều khoản") quy định việc truy cập và
          sử dụng website Alfa Agent – một sản phẩm của Alfa Media.
        </p>

        <p className="aa-muted">
          Khi truy cập hoặc sử dụng website, bạn đồng ý tuân thủ các điều khoản
          được quy định tại đây.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Phạm vi dịch vụ</h2>

        <p className="aa-muted leading-relaxed">
          Alfa Agent cung cấp hệ thống vận hành KOC và affiliate marketing,
          bao gồm:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Triển khai chiến dịch KOC cho nhãn hàng</li>
          <li>Xây dựng hệ thống nội dung và affiliate cho doanh nghiệp</li>
          <li>Kết nối và vận hành mạng lưới KOC</li>
          <li>Quản lý quy trình nội dung theo SOP</li>
          <li>Theo dõi hiệu suất thông qua KPI và báo cáo</li>
        </ul>

        <p className="aa-muted">
          Website này đóng vai trò là cổng thông tin và kênh tiếp nhận yêu cầu
          hợp tác.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Điều kiện sử dụng</h2>

        <p className="aa-muted">
          Khi sử dụng website hoặc gửi thông tin qua các biểu mẫu, bạn đồng ý:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Cung cấp thông tin chính xác và hợp pháp</li>
          <li>Không sử dụng website cho mục đích vi phạm pháp luật</li>
          <li>Không cố gắng truy cập trái phép vào hệ thống</li>
          <li>Không gây gián đoạn hoặc ảnh hưởng đến hoạt động của website</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Quyền sở hữu trí tuệ</h2>

        <p className="aa-muted leading-relaxed">
          Tất cả nội dung trên website bao gồm văn bản, thiết kế, logo, hình ảnh
          và hệ thống vận hành đều thuộc quyền sở hữu của Alfa Media hoặc các
          đối tác liên quan.
        </p>

        <p className="aa-muted">
          Người dùng không được sao chép, phân phối hoặc sử dụng nội dung cho
          mục đích thương mại nếu không có sự cho phép bằng văn bản.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Điều khoản đối với KOC
        </h2>

        <p className="aa-muted">
          Người tham gia hệ thống KOC cần tuân thủ các nguyên tắc sau:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Tuân thủ guideline nội dung của chiến dịch</li>
          <li>Không đăng tải nội dung gây hiểu lầm hoặc vi phạm chính sách nền tảng</li>
          <li>Không làm sai lệch thông tin về sản phẩm</li>
          <li>Tuân thủ quy trình kiểm duyệt trước khi đăng nội dung</li>
        </ul>

        <p className="aa-muted">
          Alfa Agent có quyền từ chối hoặc chấm dứt hợp tác nếu phát hiện hành
          vi vi phạm.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Điều khoản đối với nhãn hàng
        </h2>

        <p className="aa-muted">
          Nhãn hàng khi sử dụng dịch vụ cần đảm bảo:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Cung cấp thông tin sản phẩm trung thực</li>
          <li>Không quảng bá sản phẩm vi phạm pháp luật</li>
          <li>Tuân thủ các quy định quảng cáo của nền tảng</li>
        </ul>

        <p className="aa-muted">
          Alfa Agent có quyền từ chối triển khai chiến dịch nếu nội dung hoặc
          sản phẩm không phù hợp với quy định.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Giới hạn trách nhiệm
        </h2>

        <p className="aa-muted leading-relaxed">
          Alfa Agent cung cấp nền tảng và hệ thống vận hành nội dung. Chúng tôi
          không chịu trách nhiệm đối với các tổn thất phát sinh từ:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Hành vi sử dụng nội dung của bên thứ ba</li>
          <li>Thay đổi chính sách của các nền tảng mạng xã hội</li>
          <li>Gián đoạn kỹ thuật ngoài tầm kiểm soát</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. Chấm dứt dịch vụ
        </h2>

        <p className="aa-muted">
          Alfa Media có quyền tạm ngừng hoặc chấm dứt quyền truy cập của người
          dùng nếu phát hiện hành vi vi phạm các điều khoản này.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Thay đổi điều khoản
        </h2>

        <p className="aa-muted">
          Chúng tôi có thể cập nhật các điều khoản sử dụng khi cần thiết để phản
          ánh thay đổi trong hoạt động hoặc quy định pháp luật.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          10. Thông tin liên hệ
        </h2>

        <p className="aa-muted">
          Nếu bạn có câu hỏi liên quan đến điều khoản sử dụng, vui lòng liên hệ:
        </p>

        <div className="text-sm text-white/80">
          <p>Alfa Media</p>
          <p>Email: contact@alfamedia.vn</p>
          <p>Website: https://alfamedia.vn</p>
        </div>
      </section>
    </div>
  );
}