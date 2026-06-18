"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import Highlight from "@/components/motion/Highlight";

/* ── Shared ── */
const chipTints = {
  amber: "border-grad-amber/40 bg-grad-amber/10",
  green: "border-grad-green/30 bg-grad-green/10",
  blue: "border-grad-blue/30 bg-grad-blue/10",
};

function Chip({
  label,
  tint,
}: {
  label: string;
  tint: keyof typeof chipTints;
}) {
  return (
    <span
      className={`w-fit border ${chipTints[tint]} rounded-full px-3 py-1 text-[11px] font-semibold text-accent-ink mb-4 sm:mb-5 tracking-wide uppercase`}
    >
      {label}
    </span>
  );
}

interface Bullet {
  title: string;
  description?: string;
}

function BulletList({ items }: { items: Bullet[] }) {
  return (
    <RevealGroup className="mt-4 sm:mt-6" stagger={0.1}>
      {items.map((item, i) => (
        <RevealItem key={i} className="border-t border-[#E4E4E1] py-3 sm:py-4">
          <p className="text-sm font-semibold text-black mb-1">{item.title}</p>
          {item.description && (
            <p className="text-[13px] sm:text-[14px] text-[#52525B] leading-relaxed">
              {item.description}
            </p>
          )}
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

/* ── Mesh card wrapper: square, gradient-mesh image fills entirely ── */
function MeshCard({
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
function ErpContent() {
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
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="flex items-center justify-between mb-3">
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
                <div className="h-3.5 w-9 rounded-full bg-grad-green/20 shrink-0" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-2 -bottom-5 bg-white rounded-full px-3.5 py-2 shadow-md flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm text-[#3F3F46]">✦</span>
          <span className="text-xs text-[#3F3F46]">Updating stock levels...</span>
        </div>
      </div>
    </div>
  );
}

/* ── CRM card content: contact record + pipeline ── */
function CrmContent() {
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
        <div className="bg-white rounded-2xl shadow-lg p-4">
          {/* Contact record header */}
          <div className="flex items-center gap-2 mb-3">
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
                <div className="bg-[#E8F4FF] rounded-lg h-8 border-2 border-grad-blue" />
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{ boxShadow: "0 0 0 4px rgba(59,130,246,0.25)" }}
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
        <div className="absolute left-2 -bottom-5 bg-white rounded-full px-3.5 py-2 shadow-md flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm text-[#3F3F46]">✦</span>
          <span className="text-xs text-[#3F3F46]">
            Syncing contact record...
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Workflow automation card content ── */
function WorkflowContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pb-6 sm:pb-8">
      <div className="relative w-[72%]">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <svg viewBox="0 0 180 120" className="w-full h-auto" fill="none">
            {/* connectors */}
            <line x1="28" y1="24" x2="140" y2="20" className="stroke-line" strokeWidth="1.5" />
            <line x1="140" y1="20" x2="150" y2="96" className="stroke-line" strokeWidth="1.5" />
            <line x1="28" y1="24" x2="36" y2="92" className="stroke-line" strokeWidth="1.5" />
            <line x1="36" y1="92" x2="150" y2="96" className="stroke-line" strokeWidth="1.5" />
            {/* dot flowing through the automation */}
            <motion.circle
              r="3.5"
              className="fill-grad-green"
              animate={{ cx: [28, 140], cy: [24, 20] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* nodes */}
            <rect x="14" y="10" width="28" height="28" rx="8" className="fill-paper stroke-line" />
            <rect x="126" y="6" width="28" height="28" rx="8" className="fill-paper stroke-line" />
            <rect x="22" y="78" width="28" height="28" rx="8" className="fill-paper stroke-line" />
            <rect x="136" y="82" width="28" height="28" rx="8" fill="#E8F4FF" className="stroke-grad-blue" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute left-2 -bottom-5 bg-white rounded-full px-3.5 py-2 shadow-md flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm text-[#3F3F46]">✦</span>
          <span className="text-xs text-[#3F3F46]">Routing to your CRM...</span>
        </div>
      </div>
    </div>
  );
}

/* ── Website build card content: browser chrome + homepage wireframe ── */
function WebsiteContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pb-6 sm:pb-8">
      <div className="relative w-[72%]">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-line">
            <span className="w-2 h-2 rounded-full bg-[#E4E4E1]" />
            <span className="w-2 h-2 rounded-full bg-[#E4E4E1]" />
            <span className="w-2 h-2 rounded-full bg-[#E4E4E1]" />
            <div className="flex-1 flex items-center justify-center">
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
                <div className="h-4 w-12 rounded-full bg-grad-blue/20" />
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
        <div className="absolute left-2 -bottom-5 bg-white rounded-full px-3.5 py-2 shadow-md flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm text-[#3F3F46]">✦</span>
          <span className="text-xs text-[#3F3F46]">Publishing your new site...</span>
        </div>
      </div>
    </div>
  );
}

/* ── Feature block layout ── */
interface FeatureData {
  badge: string;
  tint: keyof typeof chipTints;
  heading: React.ReactNode;
  bullets: Bullet[];
  visual: React.ReactNode;
  reversed?: boolean;
}

function FeatureBlock({
  badge,
  tint,
  heading,
  bullets,
  visual,
  reversed,
}: FeatureData) {
  const textCol = (
    <div className="flex flex-col justify-center py-8 sm:py-10 md:py-14">
      <Reveal className="flex flex-col items-start">
        <Chip label={badge} tint={tint} />
        <h3 className="font-serif text-[22px] sm:text-[26px] md:text-[30px] leading-[1.2] tracking-tight text-black max-w-[340px]">
          {heading}
        </h3>
      </Reveal>
      <BulletList items={bullets} />
    </div>
  );

  if (reversed) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 sm:gap-8 md:gap-10 items-center">
        {textCol}
        <div className="py-6 sm:py-8 md:py-10 lg:order-first">{visual}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 sm:gap-8 md:gap-10 items-center">
      {textCol}
      <div className="py-6 sm:py-8 md:py-10">{visual}</div>
    </div>
  );
}

const features: FeatureData[] = [
  {
    badge: "ERP Implementation",
    tint: "amber",
    heading: (
      <>
        An <Highlight color="var(--color-grad-amber)">ERP</Highlight> that
        finally matches how you operate
      </>
    ),
    bullets: [
      {
        title: "Inventory, orders, and operations in one connected system",
        description:
          "Configured around your real processes, not a generic out-of-the-box template.",
      },
      { title: "Real-time visibility into stock, costs, and fulfillment" },
      { title: "Built to grow with you, not be replaced in two years" },
    ],
    visual: (
      <MeshCard src="/gradient-mesh/golden.webp">
        <ErpContent />
      </MeshCard>
    ),
    reversed: false,
  },
  {
    badge: "CRM Solutions",
    tint: "amber",
    heading: (
      <>
        A <Highlight color="var(--color-grad-amber)">CRM</Highlight> your
        sales team actually uses
      </>
    ),
    bullets: [
      {
        title: "Pipelines, fields, and reporting built around how you sell",
        description:
          "We implement and configure your CRM around real pipelines, fields, permissions, and reporting — not a generic template.",
      },
      { title: "No more leads lost in spreadsheets or inboxes" },
      { title: "Every rep sees the same, trusted customer record" },
    ],
    visual: (
      <MeshCard src="/gradient-mesh/orange.webp">
        <CrmContent />
      </MeshCard>
    ),
    reversed: true,
  },
  {
    badge: "Business Automation",
    tint: "green",
    heading: (
      <>
        <Highlight color="var(--color-grad-green)">Workflows</Highlight> that
        run themselves
      </>
    ),
    bullets: [
      {
        title: "Replaces busywork with workflows that run themselves",
        description:
          "Manual data entry, handoffs, and status updates — automated between the tools you already use, so nothing depends on someone remembering to do it.",
      },
      { title: "Triggers the right action the moment something changes" },
      { title: "Flags exceptions instead of letting them slip through" },
    ],
    visual: (
      <MeshCard src="/gradient-mesh/green.webp">
        <WorkflowContent />
      </MeshCard>
    ),
    reversed: false,
  },
  {
    badge: "Website Design & Development",
    tint: "blue",
    heading: (
      <>
        A <Highlight color="var(--color-grad-blue)">website   </Highlight> when
        you don&apos;t have one yet
      </>
    ),
    bullets: [
      {
        title: "A fast, professional site built and launched for you",
        description:
          "No website, an outdated one, or just a Google Business listing? We design, build, and ship a site that actually represents the business.",
      },
      { title: "Connected to the same CRM and systems we set up for you" },
      { title: "Ready in weeks, not months — content, copy, and all" },
    ],
    visual: (
      <MeshCard src="/gradient-mesh/golden.webp">
        <WebsiteContent />
      </MeshCard>
    ),
    reversed: true,
  },
];

export default function FeatureBlocks() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8">
        <Reveal className="pt-12 sm:pt-16 md:pt-24 pb-2">
          <p className="eyebrow mb-3 sm:mb-4">Services</p>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-black mb-3 sm:mb-4 max-w-[440px]">
            Four services. One connected system.
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] max-w-[460px] leading-relaxed">
            Most agencies pick one piece. We build the whole stack —
            systems, workflows, and the automation that connects them.
          </p>
        </Reveal>

        {features.map((feat) => (
          <div key={feat.badge} className="border-t border-[#E4E4E1] mt-2">
            <FeatureBlock {...feat} />
          </div>
        ))}
      </div>
    </section>
  );
}
