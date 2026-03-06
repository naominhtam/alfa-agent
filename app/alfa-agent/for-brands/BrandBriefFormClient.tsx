"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  company: string;
  email: string;
  industry: string;
  budget: string;
  goal: string;
  timeline: string;
  note: string;
};

const initialState: FormState = {
  company: "",
  email: "",
  industry: "",
  budget: "",
  goal: "",
  timeline: "",
  note: "",
};

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`
    )
    .join("&");
}

export default function BrandBriefFormClient() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const [form, setForm] = useState<FormState>(initialState);

  const canSubmit = useMemo(() => {
    if (status === "submitting") return false;
    return Boolean(form.company.trim() && form.email.trim());
  }, [form.company, form.email, status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const payload: Record<string, string> = {
        "form-name": "alfa-agent-brand-brief",
        ...form,
      };

      const res = await fetch("/alfa-agent/for-brands", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!res.ok) {
        throw new Error(`Submit failed: ${res.status}`);
      }

      setStatus("success");
      setMessage("Đã nhận brief. Alfa Agent sẽ phản hồi trong 48h.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("Gửi thất bại. Anh thử lại giúp em sau ít phút.");
    }
  }

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="mt-6 sm:mt-8">
      <form
        name="alfa-agent-brand-brief"
        method="POST"
        action="/alfa-agent/for-brands"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
        className="grid gap-4 sm:grid-cols-2"
      >
        {/* Netlify required */}
        <input type="hidden" name="form-name" value="alfa-agent-brand-brief" />
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <Field
          label="Tên công ty / thương hiệu"
          name="company"
          value={form.company}
          onChange={(v) => setField("company", v)}
          placeholder="VD: Alfa Media"
          required
        />
        <Field
          label="Email liên hệ"
          name="email"
          type="email"
          value={form.email}
          onChange={(v) => setField("email", v)}
          placeholder="email@domain.com"
          required
        />
        <Field
          label="Sản phẩm / ngành hàng"
          name="industry"
          value={form.industry}
          onChange={(v) => setField("industry", v)}
          placeholder="VD: Mỹ phẩm / Gia dụng..."
        />
        <Field
          label="Ngân sách dự kiến"
          name="budget"
          value={form.budget}
          onChange={(v) => setField("budget", v)}
          placeholder="VD: 30–100 triệu"
        />
        <Field
          label="Mục tiêu chiến dịch"
          name="goal"
          value={form.goal}
          onChange={(v) => setField("goal", v)}
          placeholder="Awareness / Traffic / Conversion"
        />
        <Field
          label="Thời gian dự kiến triển khai"
          name="timeline"
          value={form.timeline}
          onChange={(v) => setField("timeline", v)}
          placeholder="VD: 2 tuần / 1 tháng"
        />

        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-white">Ghi chú thêm</label>
          <textarea
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 aa-focus"
            rows={5}
            placeholder="Thông điệp chính, tệp khách hàng, kênh đang chạy, yêu cầu đặc biệt..."
            name="note"
            value={form.note}
            onChange={(e) => setField("note", e.target.value)}
          />
        </div>

        <div className="sm:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            *Gửi form là đồng ý để Alfa Agent liên hệ tư vấn. Không spam.
          </p>

          <button
            type="submit"
            disabled={!canSubmit}
            className="aa-btn-primary aa-focus w-full text-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Đang gửi..." : "Gửi Brief"}
          </button>
        </div>

        {message ? (
          <div
            className={`sm:col-span-2 mt-2 rounded-2xl border px-4 py-3 text-sm ${
              status === "success"
                ? "border-emerald-400/20 bg-emerald-400/10 text-white"
                : "border-red-400/20 bg-red-400/10 text-white"
            }`}
          >
            {message}
          </div>
        ) : null}
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-white">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 aa-focus"
      />
    </div>
  );
}