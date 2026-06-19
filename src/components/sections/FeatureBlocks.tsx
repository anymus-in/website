"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import Highlight from "@/components/motion/Highlight";
import {
  MeshCard,
  ErpContent,
  CrmContent,
  WorkflowContent,
  WebsiteContent,
} from "@/components/sections/service-visuals";

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

/* ── Feature block layout ── */
interface FeatureData {
  badge: string;
  slug: string;
  tint: keyof typeof chipTints;
  heading: React.ReactNode;
  bullets: Bullet[];
  visual: React.ReactNode;
  reversed?: boolean;
}

function FeatureBlock({
  badge,
  slug,
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
      <Link
        href={`/services/${slug}`}
        className="focus-accent inline-flex items-center gap-1.5 mt-5 sm:mt-6 text-[13px] sm:text-[14px] font-medium text-accent-ink hover:gap-2.5 transition-all"
      >
        Learn more about {badge}
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
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
    slug: "erp-implementation",
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
        <ErpContent accent="amber" />
      </MeshCard>
    ),
    reversed: false,
  },
  {
    badge: "CRM Solutions",
    slug: "crm",
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
        <CrmContent accent="blue" />
      </MeshCard>
    ),
    reversed: true,
  },
  {
    badge: "Business Automation",
    slug: "business-automation",
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
        <WorkflowContent accent="green" />
      </MeshCard>
    ),
    reversed: false,
  },
  {
    badge: "Website Design & Development",
    slug: "website-design",
    tint: "blue",
    heading: (
      <>
        A <Highlight color="var(--color-grad-blue)">website</Highlight>{" "}
        when you don&apos;t have one yet
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
        <WebsiteContent accent="amber" />
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
