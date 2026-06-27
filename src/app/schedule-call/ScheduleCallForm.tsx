"use client";

import { useState, useTransition } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { services } from "@/lib/services";
import { submitDiscoveryCall } from "./actions";

const products = [...services.map((s) => s.name), "Not sure yet"];

const fieldClass =
  "focus-accent w-full bg-white border border-[#D4D4D1] rounded-md px-3.5 py-2.5 text-sm text-black placeholder:text-ink-400 outline-none min-h-12 transition-colors hover:border-ink-400 disabled:opacity-50 disabled:cursor-not-allowed";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium text-ink-700 mb-1.5">{label}</span>
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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");

    startTransition(async () => {
      const result = await submitDiscoveryCall({
        name,
        email,
        company,
        product,
        description,
      });

      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setCompany("");
        setDescription("");
        setProduct(products[0]);
      } else {
        setStatus("error");
        setErrorMsg(result.error ?? "Something went wrong.");
      }
    });
  }

  if (status === "success") {
    return (
      <div
        className="relative bg-white border border-black/6 rounded-[18px] overflow-hidden p-8 sm:p-10 flex flex-col items-center text-center gap-5"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <span className="absolute top-0 left-0 right-0 h-0.75 bg-grad-amber" />
        <div className="w-14 h-14 rounded-full bg-grad-green/10 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-[#1F8A56]" strokeWidth={1.8} />
        </div>
        <div>
          <p className="font-serif text-[22px] text-black mb-2">Request sent</p>
          <p className="text-[14px] text-ink-600 leading-relaxed max-w-[320px]">
            We&apos;ve received your details and will follow up within 24 hours to
            schedule your call.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-[13px] font-medium text-ink-500 hover:text-black transition-colors underline underline-offset-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-white border border-black/6 rounded-[18px] overflow-hidden p-6 sm:p-8 space-y-4 sm:space-y-5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <span className="absolute top-0 left-0 right-0 h-0.75 bg-grad-amber" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full name">
          <input
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isPending}
            className={fieldClass}
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
            className={fieldClass}
          />
        </Field>
      </div>

      <Field label="Company name">
        <input
          required
          placeholder="Your company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          disabled={isPending}
          className={fieldClass}
        />
      </Field>

      <Field label="What are you interested in?">
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          disabled={isPending}
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
          placeholder="What's your business and what are you trying to fix or build?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isPending}
          className={`${fieldClass} resize-none`}
        />
      </Field>

      {status === "error" && (
        <div className="flex items-center gap-2.5 rounded-lg bg-red-50 border border-red-200 px-4 py-3">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
          <p className="text-[13px] text-red-700">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="cta-lift focus-accent w-full inline-flex items-center justify-center gap-2 bg-black text-white rounded-md px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold min-h-12 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Schedule My Call
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] sm:text-[12px] text-ink-500 text-center">
        We typically respond within 24 hours.
      </p>
    </form>
  );
}
