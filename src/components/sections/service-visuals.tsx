"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { accentTile, type ServiceAccent, type ServiceVisualKey } from "@/lib/services";

/** Small branded tag in the top-left of a mock card, naming the system it depicts. */
function CardTag({ label, accent }: { label: string; accent: ServiceAccent }) {
  const a = accentTile[accent];
  return (
    <span
      className={`absolute top-2.5 left-2.5 z-10 ${a.tile} ${a.text} text-[9px] font-semibold uppercase tracking-wide rounded-full px-2 py-1`}
    >
      {label}
    </span>
  );
}

/** Floating status pill with an accent-colored pulsing dot, personalized per service. */
function StatusPill({ text, accent }: { text: string; accent: ServiceAccent }) {
  const a = accentTile[accent];
  return (
    <div className="absolute left-2 -bottom-5 bg-white rounded-full px-3.5 py-2 shadow-md flex items-center gap-2 whitespace-nowrap">
      <span className="relative flex w-2 h-2">
        <motion.span
          className={`absolute inline-flex h-full w-full rounded-full ${a.bar} opacity-60`}
          animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${a.bar}`} />
      </span>
      <span className="text-xs text-[#3F3F46]">{text}</span>
    </div>
  );
}

/* ── Mesh card wrapper: square, gradient-mesh image fills entirely ── */
export function MeshCard({
  src,
  priority,
  children,
}: {
  src: string;
  priority?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center py-2">
      <div className="relative w-[94%] aspect-square rounded-[20px] sm:rounded-[24px] overflow-hidden">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 55vw"
          priority={priority}
          style={{ opacity: 0.8 }}
        />
        {/* white overlay to soften brightness */}
        <div className="absolute inset-0 bg-white/12" />
        {/* content on top */}
        <div className="absolute inset-0 z-10">{children}</div>
      </div>
    </div>
  );
}

/* Looping cursor that drifts across a wireframe to imply the system actively working */
function CursorTrail({ path }: { path: { x: number; y: number }[] }) {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none"
      style={{ left: 0, top: 0 }}
      aria-hidden="true"
      animate={{
        x: path.map((p) => p.x),
        y: path.map((p) => p.y),
      }}
      transition={{
        duration: path.length * 1.1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="drop-shadow"
      >
        <path
          d="M5 3l14 8-6 1.5L9.5 19 5 3z"
          fill="#18181B"
          stroke="white"
          strokeWidth="1.2"
        />
      </svg>
    </motion.div>
  );
}

/* ── ERP card content: inventory & operations ── */
export function ErpContent({ accent }: { accent: ServiceAccent }) {
  const a = accentTile[accent];
  return (
    <div className="absolute inset-0 flex items-center justify-center pb-6 sm:pb-8">
      <div className="relative w-[72%]">
        <CursorTrail
          path={[
            { x: 20, y: 20 },
            { x: 80, y: 15 },
            { x: 110, y: 80 },
            { x: 40, y: 95 },
            { x: 20, y: 20 },
          ]}
        />
        <div className="relative bg-white rounded-2xl shadow-lg p-4">
          <CardTag label="ERP" accent={accent} />
          <div className="flex items-center justify-between mb-3 pl-12">
            <div className="h-2 bg-paper rounded-full w-20" />
            <div className="h-2 bg-paper rounded-full w-10" />
          </div>
          {/* Stock-level bars */}
          <div className="flex items-end gap-1.5 sm:gap-2 h-14 mb-3">
            {[40, 65, 50, 80, 35, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-paper to-[#EAE9E5]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          {/* Order rows */}
          <div className="space-y-1.5">
            {[60, 75, 45].map((w, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-[#F7F7F5] rounded-md px-2 py-1.5"
              >
                <div className="h-1.5 bg-[#D4D4D1] rounded-full" style={{ width: `${w}%` }} />
                <div className={`h-3.5 w-9 rounded-full ${a.tile} shrink-0`} />
              </div>
            ))}
          </div>
        </div>
        <StatusPill text="Updating stock levels..." accent={accent} />
      </div>
    </div>
  );
}

/* ── CRM card content: contact record + pipeline ── */
export function CrmContent({ accent }: { accent: ServiceAccent }) {
  const a = accentTile[accent];
  return (
    <div className="absolute inset-0 flex items-center justify-center pb-6 sm:pb-8">
      <div className="relative w-[72%]">
        <CursorTrail
          path={[
            { x: 20, y: 15 },
            { x: 60, y: 20 },
            { x: 95, y: 70 },
            { x: 50, y: 90 },
            { x: 20, y: 15 },
          ]}
        />
        <div className="relative bg-white rounded-2xl shadow-lg p-4">
          <CardTag label="CRM" accent={accent} />
          {/* Contact record header */}
          <div className="flex items-center gap-2 mb-3 pl-12">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-paper to-[#EAE9E5] shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="h-2 bg-paper rounded-full w-20 mb-1.5" />
              <div className="h-1.5 bg-paper rounded-full w-14" />
            </div>
          </div>
          {/* Kanban-style pipeline stages */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-2">
              <div className="bg-gradient-to-br from-paper to-[#EAE9E5] rounded-lg h-8" />
              <div className="bg-gradient-to-br from-paper to-[#EAE9E5] rounded-lg h-8" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <div className={`${a.tile} rounded-lg h-8 border-2 ${a.bar.replace("bg-", "border-")}`} />
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{ boxShadow: "0 0 0 4px rgba(0,0,0,0.08)" }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <div className="bg-gradient-to-br from-paper to-[#EAE9E5] rounded-lg h-8" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-gradient-to-br from-paper to-[#EAE9E5] rounded-lg h-8" />
            </div>
          </div>
        </div>
        <StatusPill text="Syncing contact record..." accent={accent} />
      </div>
    </div>
  );
}

/* ── Workflow automation card content ── */
export function WorkflowContent({ accent }: { accent: ServiceAccent }) {
  const a = accentTile[accent];
  const dotColor = a.bar.includes("amber")
    ? "#F5C26B"
    : a.bar.includes("green")
      ? "#3FBF7F"
      : "#3B82F6";
  return (
    <div className="absolute inset-0 flex items-center justify-center pb-6 sm:pb-8">
      <div className="relative w-[72%]">
        <div className="relative bg-white rounded-2xl shadow-lg p-4">
          <CardTag label="Automation" accent={accent} />
          <svg viewBox="0 0 180 120" className="w-full h-auto mt-7" fill="none">
            {/* connectors */}
            <line x1="28" y1="24" x2="140" y2="20" className="stroke-line" strokeWidth="1.5" />
            <line x1="140" y1="20" x2="150" y2="96" className="stroke-line" strokeWidth="1.5" />
            <line x1="28" y1="24" x2="36" y2="92" className="stroke-line" strokeWidth="1.5" />
            <line x1="36" y1="92" x2="150" y2="96" className="stroke-line" strokeWidth="1.5" />
            {/* dot flowing through the automation */}
            <motion.circle
              r="3.5"
              fill={dotColor}
              animate={{ cx: [28, 140], cy: [24, 20] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* nodes */}
            <rect x="14" y="10" width="28" height="28" rx="8" className="fill-paper stroke-line" />
            <rect x="126" y="6" width="28" height="28" rx="8" className="fill-paper stroke-line" />
            <rect x="22" y="78" width="28" height="28" rx="8" className="fill-paper stroke-line" />
            <rect
              x="136"
              y="82"
              width="28"
              height="28"
              rx="8"
              fill={dotColor}
              fillOpacity="0.18"
              stroke={dotColor}
              strokeWidth="2"
            />
          </svg>
        </div>
        <StatusPill text="Routing to your CRM..." accent={accent} />
      </div>
    </div>
  );
}

/* ── Website build card content: browser chrome + homepage wireframe ── */
export function WebsiteContent({ accent }: { accent: ServiceAccent }) {
  const a = accentTile[accent];
  return (
    <div className="absolute inset-0 flex items-center justify-center pb-6 sm:pb-8">
      <div className="relative w-[72%]">
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          <CardTag label="Website" accent={accent} />
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-line">
            <span className="w-2 h-2 rounded-full bg-[#E4E4E1]" />
            <span className="w-2 h-2 rounded-full bg-[#E4E4E1]" />
            <span className="w-2 h-2 rounded-full bg-[#E4E4E1]" />
            <div className="flex-1 flex items-center justify-center pl-12">
              <div className="flex items-center gap-1.5 bg-paper rounded-full px-3 py-1">
                <Globe className="w-2.5 h-2.5 text-ink-500" />
                <span className="h-1.5 bg-[#D4D4D1] rounded-full w-16" />
              </div>
            </div>
          </div>
          {/* Homepage wireframe */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="h-2.5 bg-paper rounded-full w-12" />
              <div className="flex items-center gap-2">
                <div className="h-1.5 bg-paper rounded-full w-6" />
                <div className="h-1.5 bg-paper rounded-full w-6" />
                <div className={`h-4 w-12 rounded-full ${a.tile}`} />
              </div>
            </div>
            <div className="h-3 bg-gradient-to-r from-paper to-[#EAE9E5] rounded-full w-3/4 mb-2" />
            <div className="h-3 bg-gradient-to-r from-paper to-[#EAE9E5] rounded-full w-1/2 mb-3" />
            <div className="h-6 w-20 rounded-full bg-black/90 mb-4" />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-gradient-to-br from-paper to-[#EAE9E5]"
                />
              ))}
            </div>
          </div>
        </div>
        <StatusPill text="Publishing your new site..." accent={accent} />
      </div>
    </div>
  );
}

/** Maps a service's visualKey to its animated mock-UI content + gradient-mesh background. */
const serviceVisuals: Record<
  ServiceVisualKey,
  { Content: (props: { accent: ServiceAccent }) => React.JSX.Element; src: string }
> = {
  erp: { Content: ErpContent, src: "/gradient-mesh/golden.webp" },
  crm: { Content: CrmContent, src: "/gradient-mesh/orange.webp" },
  automation: { Content: WorkflowContent, src: "/gradient-mesh/green.webp" },
  website: { Content: WebsiteContent, src: "/gradient-mesh/golden.webp" },
};

/** Renders the right animated mock-UI visual for a service, wrapped in its MeshCard and tinted to its accent. */
export function ServiceVisual({
  visualKey,
  accent,
  priority,
}: {
  visualKey: ServiceVisualKey;
  accent: ServiceAccent;
  priority?: boolean;
}) {
  const { Content, src } = serviceVisuals[visualKey];
  return (
    <MeshCard src={src} priority={priority}>
      <Content accent={accent} />
    </MeshCard>
  );
}
