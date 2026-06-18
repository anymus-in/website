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
      className={cn(
        "bg-white border border-black/[0.06] rounded-2xl transition-shadow",
        className,
      )}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {children}
    </div>
  );
}

/** Shared tab header: eyebrow + title + subtitle, with an optional right-aligned action. */
export function TabHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8">
      <div>
        {eyebrow && (
          <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-ink-500 mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-[24px] sm:text-[28px] text-black mb-1.5 tracking-[-0.01em]">
          {title}
        </h1>
        <p className="text-[13px] sm:text-[14px] text-ink-500">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

/** Small rounded status pill. `tint` is a Tailwind background class. */
export function Badge({
  children,
  tint,
  dot,
}: {
  children: ReactNode;
  tint: string;
  dot?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-medium px-2.5 py-1 rounded-full text-ink-700 shrink-0",
        tint,
      )}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full", dot)} />}
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

/** Initials avatar with a brand gradient fallback. */
export function Avatar({
  name,
  size = 36,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-gradient-to-br from-grad-amber to-grad-blue text-white font-medium shrink-0",
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </span>
  );
}

/** Circular score/health indicator drawn with SVG stroke-dashoffset. */
export function ScoreRing({
  value,
  size = 56,
  stroke = 5,
  label,
}: {
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const color = value >= 80 ? "#1F8A56" : value >= 55 ? "#A35F14" : "#C0392B";

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#F0F0EE"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-[15px] text-black leading-none">{value}</span>
        {label && <span className="text-[8px] text-ink-500 mt-0.5">{label}</span>}
      </div>
    </div>
  );
}
