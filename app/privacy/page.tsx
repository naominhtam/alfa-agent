import type { Metadata } from "next";

const LAST_UPDATED = "04/03/2026"; // dd/mm/yyyy (cập nhật tay khi cần)

export const metadata: Metadata = {
  metadataBase: new URL("https://alfamedia.vn"),
  title: "Privacy Policy",
  description:
    "Chính sách bảo mật dữ liệu cá nhân của Alfa Media (sở hữu và vận hành Alfa Agent).",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Alfa Media",
    description:
      "Chính sách bảo mật dữ liệu cá nhân của Alfa Media (Company). Alfa Agent là sản phẩm thuộc Alfa Media.",
    url: "/privacy",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy — Alfa Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Alfa Media",
    description:
      "Alfa Media bảo vệ dữ liệu cá nhân theo nguyên tắc minh bạch, tối thiểu hoá và đúng mục đích. Alfa Agent là product của Alfa Media.",
    images: ["/og.png"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">Chính sách Bảo mật</h1>

      <p className="text-sm text-white/60">Cập nhật lần cuối: {LAST_UPDATED}</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Chủ thể chính sách</h2>
        <p className="aa-muted leading-relaxed">
          Chính sách này được ban hành bởi <span className="text-white">Alfa Media</span>{" "}
          (sau đây gọi là “Công ty”, “chúng tôi”). <span className="text-white">Alfa Agent</span>{" "}
          là một <span className="text-white">sản phẩm</span> thuộc Alfa Media.
        </p>
        <p className="aa-muted leading-relaxed">
          Khi bạn truy cập website alfamedia.vn và/hoặc sử dụng các trang liên quan đến Alfa Agent
          (ví dụ: <span className="text-white">/alfa-agent</span>), bạn đồng ý với việc xử lý dữ liệu cá nhân
          theo nội dung tại đây.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Phạm vi dữ liệu chúng tôi thu thập</h2>
        <p className="aa-muted leading-relaxed">
          Khi bạn sử dụng website hoặc gửi biểu mẫu liên hệ/brief, chúng tôi có thể thu thập các thông tin sau:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Họ tên hoặc tên doanh nghiệp</li>
          <li>Email/điện thoại liên hệ (nếu bạn cung cấp)</li>
          <li>Nhu cầu hợp tác, mục tiêu chiến dịch, ngân sách dự kiến</li>
          <li>Ngành hàng/sản phẩm, ghi chú bạn gửi trong form</li>
          <li>Dữ liệu kỹ thuật và phân tích truy cập (ví dụ: trang đã xem, thời gian, nguồn truy cập)</li>
        </ul>

        <p className="aa-muted">
          Chúng tôi <span className="text-white">không chủ động thu thập</span> dữ liệu nhạy cảm
          (ví dụ: thông tin tài chính, mật khẩu, dữ liệu định danh đặc biệt), trừ khi bạn tự cung cấp và việc xử lý là cần thiết
          cho mục đích hợp tác.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Mục đích xử lý dữ liệu</h2>
        <p className="aa-muted leading-relaxed">
          Alfa Media xử lý dữ liệu cá nhân theo nguyên tắc “đúng mục đích – tối thiểu – minh bạch”, nhằm:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Phản hồi yêu cầu tư vấn/hợp tác từ nhãn hàng/doanh nghiệp</li>
          <li>Xử lý đăng ký tham gia hệ thống KOC (nếu có)</li>
          <li>Trao đổi về dịch vụ, đề xuất triển khai, báo giá và điều khoản hợp tác</li>
          <li>Vận hành website, đảm bảo an toàn và chống gian lận</li>
          <li>Đo lường hiệu quả nội dung và cải thiện trải nghiệm người dùng</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Cơ sở pháp lý và tuân thủ</h2>
        <p className="aa-muted leading-relaxed">
          Chúng tôi xử lý dữ liệu cá nhân dựa trên sự đồng ý của bạn, nhu cầu thực hiện/chuẩn bị hợp tác,
          và/hoặc các nghĩa vụ pháp lý có liên quan. Alfa Media hướng tới tuân thủ các quy định hiện hành của Việt Nam
          về bảo vệ dữ liệu cá nhân (bao gồm Nghị định 13/2023/NĐ-CP).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Chia sẻ dữ liệu</h2>
        <p className="aa-muted leading-relaxed">
          Alfa Media không bán hoặc trao đổi dữ liệu cá nhân của bạn. Dữ liệu chỉ có thể được chia sẻ trong các trường hợp:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Nhà cung cấp dịch vụ hạ tầng/đo lường (ví dụ: lưu trữ, email, analytics) để vận hành website</li>
          <li>Khi có yêu cầu hợp pháp từ cơ quan nhà nước có thẩm quyền</li>
          <li>Khi cần thiết để bảo vệ quyền, lợi ích hợp pháp của Alfa Media</li>
        </ul>

        <p className="aa-muted">
          Trong mọi trường hợp, chúng tôi chỉ chia sẻ trong phạm vi cần thiết và áp dụng biện pháp bảo mật phù hợp.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Lưu trữ và thời hạn</h2>
        <p className="aa-muted leading-relaxed">
          Dữ liệu có thể được lưu trữ trên hệ thống máy chủ và dịch vụ điện toán đám mây của Alfa Media/đối tác hạ tầng,
          với các biện pháp bảo vệ phù hợp.
        </p>
        <p className="aa-muted leading-relaxed">
          Chúng tôi lưu trữ dữ liệu trong thời gian cần thiết để đạt mục đích xử lý, hoặc theo yêu cầu của pháp luật.
          Khi không còn cần thiết, dữ liệu sẽ được xoá/ẩn danh hoá theo quy trình nội bộ.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Quyền của bạn</h2>
        <p className="aa-muted leading-relaxed">
          Bạn có thể yêu cầu Alfa Media thực hiện các quyền liên quan đến dữ liệu cá nhân (tuỳ theo quy định pháp luật), bao gồm:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
          <li>Yêu cầu truy cập hoặc nhận bản sao dữ liệu cá nhân</li>
          <li>Yêu cầu chỉnh sửa/cập nhật thông tin không chính xác</li>
          <li>Yêu cầu xoá dữ liệu trong một số trường hợp</li>
          <li>Yêu cầu hạn chế hoặc phản đối việc xử lý dữ liệu</li>
          <li>Rút lại sự đồng ý (nếu việc xử lý dựa trên đồng ý)</li>
        </ul>

        <p className="aa-muted">
          Để thực hiện các quyền này, vui lòng liên hệ theo mục “Thông tin liên hệ”.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Cookies &amp; Analytics</h2>
        <p className="aa-muted leading-relaxed">
          Website có thể sử dụng cookies và/hoặc công cụ đo lường để hiểu cách người dùng tương tác với website
          (ví dụ: số lượt xem trang, nguồn truy cập, hành vi điều hướng). Các dữ liệu này chủ yếu phục vụ mục đích
          vận hành, bảo mật, và cải thiện trải nghiệm.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Bảo mật</h2>
        <p className="aa-muted leading-relaxed">
          Alfa Media áp dụng các biện pháp kỹ thuật và tổ chức hợp lý để bảo vệ dữ liệu khỏi truy cập trái phép,
          mất mát, lạm dụng hoặc tiết lộ không đúng mục đích. Tuy nhiên, không có hệ thống nào an toàn tuyệt đối.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Thay đổi chính sách</h2>
        <p className="aa-muted leading-relaxed">
          Chúng tôi có thể cập nhật chính sách này khi cần để phản ánh thay đổi trong hoạt động, sản phẩm (bao gồm Alfa Agent),
          hoặc yêu cầu pháp lý. Phiên bản mới sẽ được đăng tải trên website và có hiệu lực từ thời điểm công bố.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Thông tin liên hệ</h2>
        <p className="aa-muted leading-relaxed">
          Nếu bạn có câu hỏi về chính sách bảo mật hoặc việc xử lý dữ liệu cá nhân, vui lòng liên hệ:
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