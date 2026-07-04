import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClientSignInForm from "./ClientSignInForm";

export const metadata: Metadata = {
  title: "Client Sign In",
  description: "Sign in to your anymus client portal.",
  alternates: { canonical: "/client-sign-in" },
  robots: { index: false, follow: false },
};

export default function ClientSignInPage() {
  return (
    <main className="min-h-screen graph-bg flex flex-col items-center justify-center px-4 py-16">
      <Link href="/" className="flex items-center gap-2 mb-8 sm:mb-10">
        <Image src="/final-logo.svg" alt="" width={28} height={28} className="shrink-0" />
        <span className="font-serif text-[20px] font-medium tracking-tight text-inkwarm">
          anymus
        </span>
      </Link>

      <div className="w-full max-w-[400px]">
        <div className="text-center mb-6 sm:mb-8">
          <p className="anno anno-mark mb-3">Client portal</p>
          <h1 className="font-serif font-light text-[28px] sm:text-[32px] tracking-[-0.02em] text-inkwarm mb-2">
            Sign in
          </h1>
          <p className="text-[14px] text-inkwarm-soft">
            Access your project dashboard
          </p>
        </div>

        <ClientSignInForm />

        <p className="text-center text-[13px] text-inkwarm-soft mt-6">
          Don&apos;t have access?{" "}
          <a href="/schedule-call" className="u-draw text-mark">
            Schedule a call
          </a>{" "}
          to get started.
        </p>
      </div>
    </main>
  );
}
