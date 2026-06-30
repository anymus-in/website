"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

const fieldClass =
  "focus-accent w-full bg-white border border-[#D4D4D1] rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-ink-400 outline-none min-h-[44px]";

export default function ClientSignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    router.push("/client-portal");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-black/[0.06] rounded-[24px] p-6 sm:p-8 space-y-4"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <label className="block">
        <span className="block text-[13px] font-medium text-ink-700 mb-1.5">
          Email
        </span>
        <input
          required
          type="email"
          placeholder="jane@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className="block text-[13px] font-medium text-ink-700 mb-1.5">
          Password
        </span>
        <input
          required
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={fieldClass}
        />
      </label>

      <div className="flex items-center text-[13px]">
        <label className="flex items-center gap-2 text-ink-700">
          <input type="checkbox" className="focus-accent rounded accent-black" />
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="cta-lift focus-accent w-full inline-flex items-center justify-center bg-black text-white rounded-xl px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold min-h-[48px]"
      >
        Sign In
      </button>
    </form>
  );
}
