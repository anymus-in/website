"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import ChatPlayer, { type ChatMessage } from "@/components/motion/ChatPlayer";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/* ── Shared ── */
function Chip({ label }: { label: string }) {
  return (
    <span className="w-fit border border-[#F0A23C]/40 bg-[#FFF8F0] rounded-full px-3 py-1 text-[11px] font-semibold text-[#C97A1C] mb-4 sm:mb-5 tracking-wide uppercase">
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

/* ── Mesh card wrapper: square, image fills entirely ── */
function MeshCard({
  src,
  children,
}: {
  src: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center py-2">
      <div className=" relative w-[94%] aspect-square rounded-[20px] sm:rounded-[24px] overflow-hidden">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 55vw"
          priority
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

/* ── Chat card content ── */
const chatScript: ChatMessage[] = [
  {
    from: "agent",
    text: "Are you using some kind of eCommerce platform already?",
  },
  { from: "user", text: "I'm using Shopify" },
  {
    from: "agent",
    text: "Got it! I'll make sure to cover Shopify integration in our demo.",
  },
];

function ChatContent() {
  return (
    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 left-4 sm:left-6">
      <ChatPlayer messages={chatScript} />
      <div className="flex items-center gap-2 bg-white/85 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-2.5 mt-2 sm:mt-3">
        <svg
          className="w-3 sm:w-4 h-3 sm:h-4 text-[#A1A1AA]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>
        <span className="text-xs sm:text-sm text-[#A1A1AA] flex-1">Chat with me...</span>
        <div
          className="w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "#51A0FC" }}
        >
          <ArrowUp className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white" />
        </div>
      </div>
    </div>
  );
}

/* Looping cursor that drifts across a wireframe to imply the agent driving the UI */
function AgentCursor({ path }: { path: { x: number; y: number }[] }) {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none"
      style={{ left: 0, top: 0 }}
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

/* ── Demo card content ── */
function DemoContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pb-6 sm:pb-8">
      <div className="relative w-[72%]">
        <AgentCursor
          path={[
            { x: 20, y: 60 },
            { x: 70, y: 40 },
            { x: 150, y: 110 },
            { x: 40, y: 130 },
            { x: 20, y: 60 },
          ]}
        />
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="h-2.5 bg-gradient-to-r from-[#F5C26B]/40 to-[#F2F1ED] rounded-full mb-3 w-3/4" />
          <div className="grid grid-cols-3 gap-2 mb-2">
            <motion.div
              className="bg-[#E8F4FF] rounded-lg h-20 border-2 border-[#3B82F6]"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59,130,246,0)",
                  "0 0 0 4px rgba(59,130,246,0.25)",
                  "0 0 0 0 rgba(59,130,246,0)",
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="col-span-2 grid grid-cols-2 gap-2">
              <div className="bg-gradient-to-br from-[#F2F1ED] to-[#EAE9E5] rounded-lg h-20" />
              <div className="bg-gradient-to-br from-[#F2F1ED] to-[#EAE9E5] rounded-lg h-20" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-8 bg-gradient-to-r from-[#F2F1ED] to-[#EAE9E5] rounded-lg" />
            ))}
          </div>
        </div>
        {/* Pill below the card, inside the z-10 absolute container */}
        <div className="absolute left-2 -bottom-5 bg-white rounded-full px-3.5 py-2 shadow-md flex items-center gap-2 whitespace-nowrap">
          <span className="text-sm text-[#3F3F46]">✦</span>
          <span className="text-xs text-[#3F3F46]">
            Let me pull up our dashboard...
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Onboarding card content ── */
function OnboardingContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pb-6 sm:pb-8">
      <div className="relative w-[65%]">
        <AgentCursor
          path={[
            { x: 30, y: 50 },
            { x: 120, y: 70 },
            { x: 60, y: 120 },
            { x: 30, y: 50 },
          ]}
        />
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#3F3F46] text-xs font-mono font-bold">
              &lt;/&gt;
            </span>
            <div className="h-2 bg-[#F2F1ED] rounded-full w-16" />
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="h-16 bg-[#F2F1ED] rounded-lg" />
            <div className="h-16 bg-[#F2F1ED] rounded-lg" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-9 bg-[#F2F1ED] rounded-lg" />
            <div className="h-9 bg-[#F2F1ED] rounded-lg" />
            <div className="h-9 bg-[#F2F1ED] rounded-lg" />
          </div>
        </div>
        <div className="absolute left-2 -bottom-5 bg-white rounded-full px-3.5 py-2 shadow-md flex items-center gap-2 whitespace-nowrap">
          <span className="text-base leading-none">🌼</span>
          <span className="text-xs text-[#3F3F46]">Mapping the product...</span>
        </div>
      </div>
    </div>
  );
}

/* ── Feature block layout ── */
interface FeatureData {
  badge: string;
  heading: string;
  bullets: Bullet[];
  visual: React.ReactNode;
  reversed?: boolean;
}

function FeatureBlock({
  badge,
  heading,
  bullets,
  visual,
  reversed,
}: FeatureData) {
  const textCol = (
    <div className="flex flex-col justify-center py-8 sm:py-10 md:py-14">
      <Reveal className="flex flex-col items-start">
        <Chip label={badge} />
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
        <div className="py-6 sm:py-8 md:py-10">{visual}</div>
        {textCol}
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
    badge: "Inbound Q&A agent",
    heading: "Help leads validate with AI chat",
    bullets: [
      {
        title: "Engages visitors and answers their questions",
        description:
          "Discovers what customers are looking for, responds in real time, and turns curiosity into meaningful interactions.",
      },
      { title: "Qualifies leads and nudges them towards next steps" },
      { title: "Retains memory and passes context" },
    ],
    visual: (
      <MeshCard src="/gradient-mesh/golden.png">
        <ChatContent />
      </MeshCard>
    ),
    reversed: false,
  },
  {
    badge: "Demo agent",
    heading: "Give 1:1 demos at scale with an AI expert",
    bullets: [
      {
        title: "Runs deep-dive demo sessions",
        description:
          "Delivers interactive, personalised demos by showing your live product in real time.",
      },
      { title: "Gathers insights from conversations" },
      { title: "Turns visitors into customers" },
    ],
    visual: (
      <MeshCard src="/gradient-mesh/green.png">
        <DemoContent />
      </MeshCard>
    ),
    reversed: true,
  },
  {
    badge: "Onboarding agent",
    heading: "Provide tailored onboarding with an AI guide",
    bullets: [
      {
        title: "Knows your product inside out",
        description:
          "Ingests your knowledge base, indexes your entire product, and keeps itself up to date.",
      },
      { title: "Navigates directly inside your UI" },
      { title: "Helps your users reach their goals" },
    ],
    visual: (
      <MeshCard src="/gradient-mesh/orange.png">
        <OnboardingContent />
      </MeshCard>
    ),
    reversed: false,
  },
];

export default function FeatureBlocks() {
  return (
    <section id="product" className="bg-white">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8">
        <Reveal className="pt-12 sm:pt-16 md:pt-24 pb-2">
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-black mb-3 sm:mb-4 max-w-[440px]">
            Deploy agents across your customer journey
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#52525B] max-w-[460px] leading-relaxed">
            Most buyer journeys are full of hurdles, each contributing to
            drop-off. Let our agents anymus your prospects from intent to
            activation.
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
