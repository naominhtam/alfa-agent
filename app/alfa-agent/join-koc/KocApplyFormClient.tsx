"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function KocApplyFormClient() {
  const [state, setState] = useState<FormState>("idle");
  const [err, setErr] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErr("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, String(value));
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (!res.ok) {
        throw new Error(`Submit failed: ${res.status}`);
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErr("Gửi không thành công. Vui lòng thử lại sau hoặc reload trang.");
    }
  }

  return (
    <form
      name="alfa-agent-koc-apply"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2"
      onSubmit={onSubmit}
    >
      {/* Netlify required hidden fields */}
      <input type="hidden" name="form-name" value="alfa-agent-koc-apply" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <Field label="Họ tên" name="name" placeholder="VD: Nguyễn A" required />
      <Field
        label="Email"
        name="email"
        placeholder="email@domain.com"
        type="email"
        required
      />
      <Field
        label="Số điện thoại"
        name="phone"
        placeholder="VD: 09xxxxxxxx"
        required
      />
      <Field
        label="Kênh chính"
        name="platform"
        placeholder="TikTok / Reels / Shorts"
        required
      />

      <Field
        label="Link kênh"
        name="channel"
        placeholder="https://tiktok.com/@... hoặc https://youtube.com/@..."
        required
      />
      <Field
        label="Niche/ngành"
        name="niche"
        placeholder="Beauty / Gia dụng / Food /..."
        required
      />

      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-white">
          Số follower (ước lượng)
        </label>
        <input
          name="followers"
          placeholder="VD: 10k / 50k / 200k..."
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 aa-focus"
        />
      </div>

      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-white">
          Cam kết cadence (lịch đăng)
        </label>
        <select
          name="cadence"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none aa-focus"
          defaultValue="3-5"
        >
          <option value="1-2">1–2 video/tuần</option>
          <option value="3-5">3–5 video/tuần</option>
          <option value="6-7">6–7 video/tuần</option>
        </select>
        <p className="mt-2 text-xs text-white/55">
          Hệ ưu tiên người chạy được lịch ổn định.
        </p>
      </div>

      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-white">Ghi chú thêm</label>
        <textarea
          name="note"
          rows={5}
          placeholder="Bạn đã từng làm affiliate/booking chưa? Điểm mạnh? Thiết bị quay/dựng?"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 aa-focus"
        />
      </div>

      <div className="sm:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/55">
          *Gửi form là đồng ý để Alfa Agent liên hệ. Không spam.
        </p>

        <button
          type="submit"
          className="aa-btn-primary aa-focus w-full text-center disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "Đang gửi..." : "Gửi ứng tuyển"}
        </button>
      </div>

      {state === "success" && (
        <div className="sm:col-span-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-white">
          ✅ Đã gửi thành công. Alfa Agent sẽ phản hồi sớm.
        </div>
      )}

      {state === "error" && (
        <div className="sm:col-span-2 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-white">
          ❌ {err || "Có lỗi xảy ra."}
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-white">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 aa-focus"
      />
    </div>
  );
}