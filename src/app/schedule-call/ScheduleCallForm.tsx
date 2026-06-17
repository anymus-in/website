"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const CONTACT_EMAIL = "anymus.shared@gmail.com";

const products = [
  "ERP Implementation",
  "CRM Solutions",
  "Business Automation",
  "AI Integrations",
  "Not sure yet",
];

const fieldClass =
  "focus-accent w-full bg-white border border-[#D4D4D1] rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-ink-400 outline-none min-h-[44px]";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium text-ink-700 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function ScheduleCallForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState(products[0]);
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Discovery call request — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Product enquiry: ${product}`,
      `Company: ${company}`,
      "",
      "Description:",
      description,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-black/[0.06] rounded-[24px] p-6 sm:p-8 space-y-4 sm:space-y-5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full name">
          <input
            required
            placeholder="Jane Cooper"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
        </Field>
        <Field label="Work email">
          <input
            required
            type="email"
            placeholder="jane@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
          />
        </Field>
      </div>

      <Field label="Company name">
        <input
          required
          placeholder="Company Inc."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={fieldClass}
        />
      </Field>

      <Field label="What are you interested in?">
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className={fieldClass}
        >
          {products.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us what you need">
        <textarea
          required
          rows={3}
          placeholder="A sentence or two is plenty"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`${fieldClass} resize-none`}
        />
      </Field>

      <button
        type="submit"
        className="cta-lift focus-accent w-full inline-flex items-center justify-center bg-black text-white rounded-xl px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold min-h-[48px]"
      >
        Schedule My Call
      </button>
      <p className="text-[11px] sm:text-[12px] text-ink-500 text-center">
        We typically respond within 24 hours.
      </p>
    </form>
  );
}
