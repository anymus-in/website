"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";
import {
  ErpContent,
  WorkflowContent,
  WebsiteContent,
} from "@/components/sections/service-visuals";
import { services, type Service } from "@/lib/services";

const VISUALS = {
  website: WebsiteContent,
  automation: WorkflowContent,
  internal: ErpContent,
} as const;

const FIG_CAPTIONS = {
  website: "A site wired straight into the pipeline",
  automation: "A workflow, running unattended",
  internal: "Operations on one screen",
} as const;

/* One service = one editorial spread. Alternating asymmetry, a giant
   cropped numeral as the visual anchor, and the live mock-UI mounted
   on a paper plate with registration marks. */
function ServiceSpread({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const flipped = index % 2 === 1;
  const Visual = VISUALS[service.visualKey];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const plateY = useSpring(useTransform(scrollYProgress, [0, 1], [56, -56]), {
    stiffness: 70,
    damping: 22,
  });
  const numeralY = useTransform(scrollYProgress, [0, 1], [40, -80]);

  return (
    <article ref={ref} className="relative border-t rule overflow-hidden">
      {/* Giant cropped numeral — the spread's anchor */}
      <motion.span
        aria-hidden
        style={reduce ? undefined : { y: numeralY }}
        className={`text-hollow pointer-events-none select-none absolute -top-[0.16em] font-serif font-light leading-none text-[clamp(200px,30vw,460px)] tracking-[-0.04em] ${
          flipped ? "left-[-0.06em]" : "right-[-0.06em]"
        }`}
      >
        {`0${index + 1}`}
      </motion.span>

      <div
        className={`relative max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center`}
      >
        {/* Text column */}
        <div
          className={`lg:col-span-6 ${
            flipped ? "lg:order-2 lg:col-start-7 lg:pl-10" : "lg:pr-10"
          }`}
        >
          <p className="anno anno-mark mb-6">{`Sec. 01.${index + 1} — ${service.serviceType}`}</p>
          <Link
            href={`/services/${service.slug}`}
            className="group inline-block focus-visible:outline-2 focus-visible:outline-mark focus-visible:outline-offset-4"
          >
            <LineReveal
              as="div"
              className="font-serif font-light text-[clamp(38px,6.5vw,76px)] leading-[1.0] tracking-[-0.025em] text-inkwarm"
              lines={
                service.name.includes(" ")
                  ? service.name.split(" ").map((w, i) => (
                      <span key={i} className={i === 1 ? "italic" : undefined}>
                        {w}
                      </span>
                    ))
                  : [service.name]
              }
            />
            <span className="u-draw mt-4 inline-block text-[14px] font-medium text-inkwarm">
              {service.intro}
              <span aria-hidden className="text-mark"> →</span>
            </span>
          </Link>

          <RevealGroup className="mt-10" stagger={0.09}>
            {service.outcomes.map((o, j) => (
              <RevealItem
                key={o.title}
                className="group/row border-t rule py-4 grid grid-cols-[44px_1fr] gap-x-4"
              >
                <span className="anno pt-0.5 group-hover/row:text-mark transition-colors duration-300">{`${
                  index + 1
                }.${j + 1}`}</span>
                <div>
                  <p className="text-[14px] font-medium text-inkwarm leading-snug mb-1">
                    {o.title}
                  </p>
                  <p className="text-[12.5px] text-inkwarm-soft leading-relaxed max-w-[420px]">
                    {o.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15}>
            <p className="mt-6 border-l-2 border-mark pl-4 font-mono text-[11px] text-inkwarm-faint leading-relaxed max-w-[420px]">
              <span className="text-mark">Sounds familiar?</span>{" "}
              “{service.signs[0]}”
            </p>
          </Reveal>
        </div>

        {/* Figure plate */}
        <div className={`lg:col-span-6 ${flipped ? "lg:order-1" : ""}`}>
          <motion.figure
            style={reduce ? undefined : { y: plateY }}
            className={`reg-marks plate relative aspect-square max-w-[560px] mx-auto lg:mx-0 ${
              flipped ? "lg:ml-4 lg:-rotate-[0.8deg]" : "lg:ml-auto lg:mr-4 lg:rotate-[0.8deg]"
            }`}
          >
            <span aria-hidden className="reg reg-tl" />
            <span aria-hidden className="reg reg-tr" />
            <span aria-hidden className="reg reg-bl" />
            <span aria-hidden className="reg reg-br" />
            <div className="absolute inset-0 bg-sheet-deep/50" />
            <Visual accent={service.accent} />
            <figcaption className="absolute -bottom-8 left-0 right-0 flex items-baseline justify-between">
              <span className="anno">{`Fig. 0${index + 2} — ${FIG_CAPTIONS[service.visualKey]}`}</span>
              <span className="anno hidden sm:block">{`Plate ${index + 1}/3`}</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </article>
  );
}

export default function ServiceIndex() {
  return (
    <section id="index" className="pt-16 sm:pt-24">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-baseline justify-between border-b rule-strong pb-3">
            <span className="anno">Sec. 01 — The index</span>
            <span className="anno hidden sm:block">Three disciplines / one system</span>
          </div>
        </Reveal>
        <div className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <LineReveal
            as="h2"
            className="lg:col-span-8 font-serif font-light text-[clamp(32px,5.8vw,64px)] leading-[1.02] tracking-[-0.025em] text-inkwarm"
            lines={[
              <span key="1">Everything a business runs on,</span>,
              <span key="2" className="sm:pl-[6vw]">
                built as <span className="italic text-mark">one</span> thing.
              </span>,
            ]}
          />
          <Reveal delay={0.2} className="lg:col-span-4 lg:pt-3 flex lg:justify-end">
            <p className="text-[13.5px] text-inkwarm-soft leading-relaxed max-w-[300px]">
              Most firms hand you one piece and leave you to wire it together.
              We build the site out front, the automations behind it, and the
              tools you run on — so nothing is stitched together after the fact.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="pb-8">
        {services.map((s, i) => (
          <ServiceSpread key={s.slug} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
