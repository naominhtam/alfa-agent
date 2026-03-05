"use client";

import { useMemo, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactFormClient() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // IMPORTANT:
  // - File static để Netlify scan form nằm trong /public
  // - Anh đang có tab "_forms.html" => dùng đúng path này
  const FORMS_STATIC_TARGET = "/_forms.html";

  const disabled = state === "submitting";

  const buttonLabel = useMemo(() => {
    if (state === "submitting") return "Đang gửi...";
    if (state === "success") return "Đã gửi ✓";
    return "Gửi liên hệ";
  }, [state]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    setState("submitting");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Netlify Forms cần x-www-form-urlencoded
      const body = new URLSearchParams();
      formData.forEach((value, key) => {
        // FormData value có thể là File | string; ở đây ta chỉ dùng text input/textarea
        body.append(key, String(value));
      });

      const res = await fetch(FORMS_STATIC_TARGET, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (!res.ok) {
        throw new Error(`Submit failed: ${res.status}`);
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Gửi không thành công. Vui lòng thử lại."
      );
    }
  }

  return (
    <div className="mt-6 sm:mt-8">
      <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
        {/* Netlify needs this exact hidden field */}
        <input type="hidden" name="form-name" value="alfa-media-contact" />

        {/* Honeypot */}
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <Field
          label="Họ và tên"
          name="name"
          placeholder="VD: Nguyễn Văn A"
          required
          disabled={disabled}
        />
        <Field
          label="Email"
          name="email"
          placeholder="email@domain.com"
          type="email"
          required
          disabled={disabled}
        />
        <Field
          label="Công ty / Thương hiệu"
          name="company"
          placeholder="VD: Alfa Media"
          disabled={disabled}
        />
        <Field
          label="Chủ đề"
          name="subject"
          placeholder="VD: Hợp tác / Tư vấn / Tuyển dụng..."
          required
          disabled={disabled}
        />

        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-white">Nội dung</label>
          <textarea
            name="message"
            rows={6}
            required
            disabled={disabled}
            placeholder="Anh/chị cần Alfa Media hỗ trợ gì? Mục tiêu, timeline, kênh đang chạy, ngân sách dự kiến..."
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 aa-focus disabled:opacity-60"
          />
        </div>

        {/* Status */}
        <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
          <div className="text-xs text-white/55">
            {state === "success" ? (
              <span className="text-[rgb(var(--primary-2))]">
                Đã nhận thông tin. Alfa Media sẽ phản hồi sớm.
              </span>
            ) : state === "error" ? (
              <span className="text-red-300">
                Lỗi: {errorMsg || "Không gửi được. Thử lại giúp anh."}
              </span>
            ) : (
              <span>*Gửi form là đồng ý để Alfa Media liên hệ. Không spam.</span>
            )}
          </div>

          <button
            type="submit"
            disabled={disabled}
            className="aa-btn-primary aa-focus w-full sm:w-auto text-center disabled:opacity-70"
          >
            {buttonLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
  disabled,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-white">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 aa-focus disabled:opacity-60"
      />
    </div>
  );
}