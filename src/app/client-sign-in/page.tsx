import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClientSignInForm from "./ClientSignInForm";

export const metadata: Metadata = {
  title: "Client Sign In — anymus",
  description: "Sign in to your anymus client portal.",
};

export default function ClientSignInPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: "var(--gradient-hero-bg)" }}
    >
      <Link href="/" className="flex items-center gap-2 mb-8 sm:mb-10">
        <Image src="/final-logo.svg" alt="" width={28} height={28} className="shrink-0" />
        <span className="font-serif text-[20px] font-medium tracking-tight text-black">
          anymus
        </span>
      </Link>

      <div className="w-full max-w-[400px]">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-serif text-[26px] sm:text-[30px] tracking-[-0.02em] text-black mb-2">
            Client Sign In
          </h1>
          <p className="text-[14px] text-ink-500">
            Access your project dashboard
          </p>
        </div>

        <ClientSignInForm />

        <p className="text-center text-[13px] text-ink-500 mt-6">
          Don&apos;t have access?{" "}
          <a href="/schedule-call" className="text-accent-ink hover:underline">
            Schedule a call
          </a>{" "}
          to get started.
        </p>
      </div>
    </main>
  );
}
