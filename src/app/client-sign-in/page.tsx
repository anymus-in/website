import type { Metadata } from "next";
import Link from "next/link";
import SignalTraces from "@/components/motion/SignalTraces";
import ClientSignInForm from "./ClientSignInForm";

export const metadata: Metadata = {
  title: "Client Sign In",
  description: "Sign in to your anymus client portal.",
  alternates: { canonical: "/client-sign-in" },
  robots: { index: false, follow: false },
};

/* A quiet preview of what's behind the door — the project, on the record */
function PortalPreview() {
  return (
    <div className="border border-sheet/20 rounded-[3px] bg-sheet/[0.04] backdrop-blur-sm p-5 max-w-[360px] w-full">
      <div className="flex items-baseline justify-between border-b border-sheet/15 pb-2.5 mb-4">
        <span className="anno !text-sheet/50">Your project</span>
        <span className="anno !text-sheet/50 inline-flex items-center gap-1.5">
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-live live-dot" />
          Live
        </span>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <span className="font-mono text-[10px] text-sheet/70">Build — Wk 03 / 06</span>
            <span className="font-mono text-[10px] text-mark">on schedule</span>
          </div>
          <div className="h-[3px] bg-sheet/15 rounded-full overflow-hidden">
            <div className="h-full w-[55%] bg-mark rounded-full" />
          </div>
        </div>
        <div className="flex items-baseline justify-between border-t border-sheet/10 pt-3">
          <span className="font-mono text-[10px] text-sheet/60">Next milestone</span>
          <span className="font-mono text-[10px] text-sheet/85">Dashboard v1 · Fri</span>
        </div>
        <div className="flex items-baseline justify-between border-t border-sheet/10 pt-3">
          <span className="font-mono text-[10px] text-sheet/60">Updates waiting</span>
          <span className="font-mono text-[10px] text-sheet/85">2 new from Priya</span>
        </div>
      </div>
    </div>
  );
}

export default function ClientSignInPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-[5fr_6fr]">
      {/* Brand panel */}
      <section className="relative bg-inkwarm text-sheet graph-bg-dark overflow-hidden flex flex-col px-6 sm:px-10 py-8 lg:min-h-screen">
        <SignalTraces dark className="absolute inset-0 w-full h-full opacity-60" />

        <div className="relative flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span
              aria-hidden
              className="w-6 h-6 bg-sheet shrink-0"
              style={{
                maskImage: "url(/final-logo.svg)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: "url(/final-logo.svg)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            />
            <span className="font-serif text-[19px] font-medium tracking-tight">anymus</span>
          </Link>
          <span className="anno anno-mark">Client portal</span>
        </div>

        <div className="relative flex-1 flex flex-col justify-center gap-10 py-14 lg:py-0">
          <div>
            <p className="anno !text-sheet/50 mb-5">Doc. 05 — Access</p>
            <h1 className="font-serif font-light text-[clamp(30px,4.5vw,52px)] leading-[1.05] tracking-[-0.025em] max-w-[420px]">
              Your project,
              <br />
              on the <span className="italic text-mark">record</span>.
            </h1>
          </div>
          <PortalPreview />
        </div>

        <div className="relative hidden lg:flex items-baseline justify-between border-t border-sheet/20 pt-3">
          <span className="anno !text-sheet/40">Clients only</span>
          <span className="anno !text-sheet/40">Every deliverable · invoice · decision</span>
        </div>

        {/* Rotated stamp */}
        <div
          aria-hidden
          className="hidden lg:flex absolute right-8 top-20 rotate-[7deg] border-2 border-mark/60 rounded-[2px] px-3.5 py-2 select-none"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mark/75 leading-relaxed text-center">
            Access ✳ granted
            <br />
            by anymus
          </span>
        </div>
      </section>

      {/* Form panel */}
      <section className="flex flex-col justify-center px-6 sm:px-10 py-14 lg:py-8">
        <div className="w-full max-w-[400px] mx-auto">
          <div className="flex items-baseline justify-between border-b rule-strong pb-3 mb-10">
            <span className="anno">Sign in</span>
            <span className="anno hidden sm:block">§ Secure</span>
          </div>

          <h2 className="font-serif font-light text-[30px] sm:text-[34px] leading-none tracking-[-0.02em] text-inkwarm mb-2.5">
            Welcome back.
          </h2>
          <p className="text-[14px] text-inkwarm-soft mb-9">
            Sign in to see where your project stands.
          </p>

          <ClientSignInForm />

          <p className="text-[13px] text-inkwarm-soft mt-8 border-t rule pt-5">
            Don&apos;t have access yet?{" "}
            <a href="/schedule-call" className="u-draw text-mark font-medium">
              Schedule a call
            </a>{" "}
            — client accounts are set up during your first week.
          </p>
        </div>
      </section>
    </main>
  );
}
