import { cn } from "@/lib/utils";

/**
 * Vertical spine layout for step sequences — the hairline thread with dot
 * nodes used by service/solution procedures and the run-log figures.
 * Pure layout (server-safe); pair each row with a <TimelineDot>.
 */
export function Timeline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px bg-hairline" />
      {children}
    </div>
  );
}

/**
 * A node on the spine. Position the parent row `relative` with left padding
 * (pl-6 / pl-10); the dot sits on the thread.
 *
 * - "mark": open red ring (procedure steps)
 * - "done" / "run" / "wait": run-log states; "run" pulses via .live-dot
 */
export function TimelineDot({
  state = "mark",
  className,
}: {
  state?: "mark" | "done" | "run" | "wait";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute left-0 rounded-full",
        state === "mark" &&
          "top-[4px] w-[11px] h-[11px] border-2 border-mark bg-sheet",
        state === "done" && "top-[8px] w-[11px] h-[11px] border bg-live/80 border-live",
        state === "run" &&
          "top-[8px] w-[11px] h-[11px] border bg-mark border-mark live-dot",
        state === "wait" &&
          "top-[8px] w-[11px] h-[11px] border bg-sheet border-hairline-strong",
        className,
      )}
    />
  );
}
