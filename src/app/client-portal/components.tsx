import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared white card surface used across every portal tab. */
export function PortalCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("bg-white border border-black/[0.06] rounded-2xl", className)}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {children}
    </div>
  );
}

/** Shared tab header: title + subtitle, with an optional right-aligned action. */
export function TabHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8">
      <div>
        <h1 className="font-serif text-[24px] sm:text-[28px] text-black mb-1">{title}</h1>
        <p className="text-[13px] sm:text-[14px] text-ink-500">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

/** Small rounded status pill. `tint` is a Tailwind background class. */
export function Badge({ children, tint }: { children: ReactNode; tint: string }) {
  return (
    <span
      className={cn(
        "text-[11px] sm:text-[12px] font-medium px-2.5 py-1 rounded-full text-ink-700 shrink-0",
        tint,
      )}
    >
      {children}
    </span>
  );
}

/** Pill-style filter/segmented control button. */
export function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "focus-accent shrink-0 px-3 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-colors",
        active ? "bg-black text-white" : "bg-[#F2F1ED] text-ink-700 hover:bg-[#E4E4E1]",
      )}
    >
      {children}
    </button>
  );
}
