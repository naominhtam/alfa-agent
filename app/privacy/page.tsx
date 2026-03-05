import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Chính sách bảo mật dữ liệu cá nhân của Alfa Agent (Product of Alfa Media).",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        Chính sách Bảo mật
      </h1>

      <p className="text-sm text-white/60">
        Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Giới thiệu</h2>
        <p className="aa-muted leading-relaxed">
          Alfa Agent là một sản phẩm của Alfa Media, cung cấp hệ thống vận hành
          KOC và affiliate marketing dựa trên quy trình SOP, kiểm duyệt nội dung
          và theo dõi KPI. Chúng tôi cam kết tôn trọng và bảo vệ dữ liệu cá nhân
          của người dùng theo quy định của pháp luật Việt Nam, bao gồm Nghị định
          13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          2. Thông tin chúng tôi thu thập
        </h2>

        <p className="aa-muted leading-relaxed">
          Khi bạn sử dụng website hoặc gửi biểu mẫu trên website, chúng tôi có
          thể thu thập các loại thông tin sau:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Họ tên hoặc tên công ty</li>
          <li>Email liên hệ</li>
          <li>Thông tin sản phẩm hoặc ngành hàng</li>
          <li>Ngân sách hoặc mục tiêu chiến dịch</li>
          <li>Nội dung ghi chú bạn cung cấp trong form</li>
          <li>Dữ liệu phân tích truy cập website (analytics)</li>
        </ul>

        <p className="aa-muted">
          Chúng tôi không thu thập thông tin nhạy cảm như thông tin tài chính,
          mật khẩu, hoặc dữ liệu định danh cá nhân đặc biệt.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Mục đích sử dụng dữ liệu
        </h2>

        <p className="aa-muted leading-relaxed">
          Thông tin được thu thập nhằm các mục đích sau:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Phản hồi yêu cầu tư vấn từ nhãn hàng hoặc doanh nghiệp</li>
          <li>Xử lý đơn đăng ký tham gia hệ thống KOC</li>
          <li>Liên hệ về dịch vụ hoặc cơ hội hợp tác</li>
          <li>Cải thiện trải nghiệm và hiệu quả hoạt động của website</li>
          <li>Phân tích dữ liệu để tối ưu sản phẩm và dịch vụ</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Chia sẻ dữ liệu cá nhân
        </h2>

        <p className="aa-muted leading-relaxed">
          Chúng tôi không bán hoặc trao đổi dữ liệu cá nhân của bạn cho bên thứ
          ba. Dữ liệu chỉ được chia sẻ trong các trường hợp sau:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Phục vụ việc cung cấp dịch vụ hoặc xử lý yêu cầu của bạn</li>
          <li>Khi có yêu cầu hợp pháp từ cơ quan nhà nước</li>
          <li>Khi cần thiết để bảo vệ quyền lợi hợp pháp của Alfa Media</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Lưu trữ dữ liệu</h2>

        <p className="aa-muted leading-relaxed">
          Dữ liệu cá nhân được lưu trữ trong hệ thống máy chủ và dịch vụ điện
          toán đám mây được bảo vệ bằng các biện pháp bảo mật phù hợp.
        </p>

        <p className="aa-muted">
          Chúng tôi chỉ lưu trữ dữ liệu trong thời gian cần thiết để phục vụ mục
          đích thu thập hoặc theo yêu cầu của pháp luật.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Quyền của người dùng</h2>

        <p className="aa-muted">
          Theo quy định của pháp luật Việt Nam, bạn có quyền:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Yêu cầu truy cập dữ liệu cá nhân của mình</li>
          <li>Yêu cầu chỉnh sửa thông tin không chính xác</li>
          <li>Yêu cầu xóa dữ liệu cá nhân trong một số trường hợp</li>
          <li>Hạn chế hoặc phản đối việc xử lý dữ liệu</li>
        </ul>

        <p className="aa-muted">
          Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi theo thông
          tin bên dưới.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Cookies và Analytics</h2>

        <p className="aa-muted leading-relaxed">
          Website có thể sử dụng cookies hoặc công cụ phân tích để hiểu cách
          người dùng tương tác với website. Những dữ liệu này chỉ được dùng để
          cải thiện sản phẩm và trải nghiệm người dùng.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Bảo mật dữ liệu</h2>

        <p className="aa-muted leading-relaxed">
          Alfa Media áp dụng các biện pháp bảo mật kỹ thuật và tổ chức nhằm bảo
          vệ dữ liệu cá nhân khỏi truy cập trái phép, mất mát hoặc lạm dụng.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Thay đổi chính sách
        </h2>

        <p className="aa-muted">
          Chính sách bảo mật này có thể được cập nhật khi cần thiết để phản ánh
          thay đổi trong hoạt động của chúng tôi hoặc yêu cầu pháp lý.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Thông tin liên hệ</h2>

        <p className="aa-muted">
          Nếu bạn có câu hỏi về chính sách bảo mật hoặc việc xử lý dữ liệu cá
          nhân, vui lòng liên hệ:
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