"use client";

import { useState, useTransition } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { services } from "@/lib/services";
import { submitDiscoveryCall } from "./actions";

const products = [...services.map((s) => s.name), "Not sure yet"];

const fieldClass =
  "w-full bg-sheet-lift border rounded-[2px] px-3.5 py-2.5 text-sm text-inkwarm placeholder:text-inkwarm-faint outline-none min-h-12 transition-colors border-[rgba(28,24,18,0.16)] hover:border-[rgba(28,24,18,0.42)] focus-visible:border-mark focus-visible:shadow-[2px_2px_0_0_var(--color-mark)] disabled:opacity-50 disabled:cursor-not-allowed";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="anno !text-[11px] sm:!text-[10px] block mb-2">{label}</span>
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
      <div className="plate relative overflow-hidden p-8 sm:p-10 flex flex-col items-center text-center gap-5">
        <span className="absolute top-0 left-0 right-0 h-[2px] bg-mark" />
        <div className="w-14 h-14 rounded-[2px] border rule bg-sheet flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-live" strokeWidth={1.6} />
        </div>
        <div>
          <p className="font-serif font-light text-[26px] text-inkwarm mb-2">Request sent</p>
          <p className="text-[14px] text-inkwarm-soft leading-relaxed max-w-[320px]">
            We&apos;ve received your details and will follow up within 24 hours to
            schedule your call.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="u-draw text-[13px] font-medium text-inkwarm-soft hover:text-inkwarm transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="plate relative overflow-hidden p-6 sm:p-8 space-y-4 sm:space-y-5"
    >
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-mark" />

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
        <div className="flex items-center gap-2.5 rounded-[2px] bg-mark/[0.06] border border-mark/50 px-4 py-3">
          <AlertCircle className="w-4 h-4 text-mark shrink-0" />
          <p className="text-[13px] text-mark-deep">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="btn-stamp w-full px-7 py-3.5 text-[14px] sm:text-[15px] font-medium min-h-12 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Schedule my call
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="anno !text-[11px] sm:!text-[9px] text-center block">We typically respond within 24 hours</p>
    </form>
  );
}
