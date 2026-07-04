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
import SpreadVisual from "@/components/sections/SpreadVisuals";
import { services, type Service } from "@/lib/services";

const FIG_CAPTIONS = {
  website: "The moment an enquiry becomes a record",
  automation: "One run of one workflow, unattended",
  internal: "The 8 a.m. view — no compiling required",
} as const;

/* One service = one editorial spread. Alternating asymmetry, a giant
   cropped numeral as the anchor, and a living product scene set on a
   drafting plate. The middle spread shifts ground for rhythm. */
function ServiceSpread({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const flipped = index % 2 === 1;

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
    <article
      ref={ref}
      className={`relative border-t rule overflow-hidden ${
        flipped ? "graph-bg bg-sheet-deep/60" : ""
      }`}
    >
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

      <div className="relative max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
        {/* Text column */}
        <div
          className={`lg:col-span-5 ${
            flipped ? "lg:order-2 lg:col-start-8 lg:pl-6" : "lg:pr-6"
          }`}
        >
          <p className="anno anno-mark mb-6">{`Sec. 01.${index + 1} — ${service.serviceType}`}</p>
          <Link
            href={`/services/${service.slug}`}
            className="group inline-block focus-visible:outline-2 focus-visible:outline-mark focus-visible:outline-offset-4"
          >
            <LineReveal
              as="div"
              className="font-serif font-light text-[clamp(40px,7vw,84px)] leading-[0.98] tracking-[-0.025em] text-inkwarm"
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
            <span className="u-draw mt-5 inline-block font-serif text-[17px] sm:text-[19px] text-inkwarm">
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
                  <p className="text-[14px] font-semibold text-inkwarm leading-snug mb-1">
                    {o.title}
                  </p>
                  <p className="text-[12.5px] text-inkwarm-soft leading-relaxed max-w-[420px]">
                    {o.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Pinned note — the symptom, tacked into the margin */}
          <Reveal delay={0.15}>
            <div className="mt-8 max-w-[380px] -rotate-[0.6deg] border rule bg-sheet-lift px-5 py-4 shadow-[3px_3px_0_0_rgba(28,24,18,0.08)] relative">
              <span
                aria-hidden
                className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-mark/80 border-2 border-sheet shadow-sm"
              />
              <p className="font-mono text-[11px] text-inkwarm-soft leading-relaxed">
                <span className="text-mark">Sounds familiar? </span>
                “{service.signs[0]}”
              </p>
            </div>
          </Reveal>
        </div>

        {/* Figure plate — larger, deeper, annotated */}
        <div className={`lg:col-span-7 ${flipped ? "lg:order-1" : ""}`}>
          <motion.div
            style={reduce ? undefined : { y: plateY }}
            className={`relative ${flipped ? "lg:mr-6" : "lg:ml-6"}`}
          >
            {/* Backing plate for depth */}
            <div
              aria-hidden
              className={`absolute inset-0 border rule bg-sheet-deep/80 rounded-[3px] ${
                flipped ? "-translate-x-3 translate-y-3" : "translate-x-3 translate-y-3"
              }`}
            />
            <figure
              className={`reg-marks plate relative aspect-[4/3] overflow-hidden ${
                flipped ? "lg:-rotate-[0.6deg]" : "lg:rotate-[0.6deg]"
              }`}
            >
              <span aria-hidden className="reg reg-tl" />
              <span aria-hidden className="reg reg-tr" />
              <span aria-hidden className="reg reg-bl" />
              <span aria-hidden className="reg reg-br" />
              <SpreadVisual visualKey={service.visualKey} />
            </figure>
            {/* Dimension caption */}
            <p className="anno relative mt-8">{`Fig. 0${index + 2} — ${FIG_CAPTIONS[service.visualKey]}`}</p>
          </motion.div>
        </div>
      </div>
    </article>
  );
}

export default function ServiceIndex() {
  return (
    <section id="index" className="pt-20 sm:pt-28">
      {/* Centered chapter opening — a deliberate change of rhythm */}
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-baseline justify-between border-b rule-strong pb-3">
            <span className="anno">Sec. 01 — The index</span>
            <span className="anno hidden sm:block">Three disciplines / one system</span>
          </div>
        </Reveal>

        <div className="py-16 sm:py-24 text-center flex flex-col items-center">
          <LineReveal
            as="h2"
            className="font-serif font-light text-[clamp(34px,6.5vw,84px)] leading-[1.0] tracking-[-0.025em] text-inkwarm"
            lines={[
              <span key="1">Everything a business runs on,</span>,
              <span key="2">
                built as <span className="italic text-mark">one</span> thing.
              </span>,
            ]}
          />
          <Reveal delay={0.25}>
            <p className="mt-8 text-[14px] sm:text-[15px] text-inkwarm-soft leading-relaxed max-w-[480px] mx-auto">
              Most firms hand you one piece and leave you to wire it together.
              We build the site out front, the automations behind it, and the
              tools you run on — nothing stitched together after the fact.
            </p>
          </Reveal>
        </div>
      </div>

      <div>
        {services.map((s, i) => (
          <ServiceSpread key={s.slug} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
