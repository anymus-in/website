"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full bg-sheet-lift border rounded-[2px] px-3.5 py-2.5 text-sm text-inkwarm placeholder:text-inkwarm-faint outline-none min-h-[44px] transition-colors border-[rgba(28,24,18,0.16)] hover:border-[rgba(28,24,18,0.42)] focus-visible:border-mark focus-visible:shadow-[2px_2px_0_0_var(--color-mark)]";

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
      className="plate relative overflow-hidden p-6 sm:p-8 space-y-4"
    >
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-mark" />
      <label className="block">
        <span className="anno !text-[11px] sm:!text-[10px] block mb-2">Email</span>
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
        <span className="anno !text-[11px] sm:!text-[10px] block mb-2">Password</span>
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
        <label className="flex items-center gap-2 text-inkwarm-soft">
          <input type="checkbox" className="accent-[#C8391B]" />
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="btn-stamp w-full px-7 py-3.5 text-[14px] sm:text-[15px] font-medium min-h-[48px]"
      >
        Sign in
        <span aria-hidden className="font-mono text-[12px]">→</span>
      </button>
    </form>
  );
}
