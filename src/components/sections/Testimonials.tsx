import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

/* ⚠ PLACEHOLDER CONTENT — sample names, photos, and quotes.
   Replace with real client testimonials (with written permission)
   before publishing. Photos are Unsplash stock portraits. */
const REPORTS = [
  {
    quote:
      "We used to lose two or three enquiries a week somewhere between WhatsApp and someone's memory. Now every single one lands in the CRM before I've finished reading it — and the follow-ups happen without me.",
    name: "Ravi Mehta",
    role: "Mehta Textiles",
    place: "Surat",
    photo: "/images/testimonial-1.jpg",
    tilt: "lg:-rotate-[0.7deg]",
  },
  {
    quote:
      "Month-end used to be four days of compiling spreadsheets that never quite agreed. Now I open one dashboard at 8 a.m. and the numbers just… agree.",
    name: "Ananya Rao",
    role: "Rao Diagnostics",
    place: "Hyderabad",
    photo: "/images/testimonial-2.jpg",
    tilt: "lg:rotate-[0.6deg] lg:mt-14",
  },
  {
    quote:
      "They didn't ask us to change how we work — they built around it. Six weeks in, it feels like the system was always here. My sons run half the business off their phones now.",
    name: "Rajesh Nair",
    role: "Nair & Sons Distribution",
    place: "Kochi",
    photo: "/images/testimonial-3.jpg",
    tilt: "lg:-rotate-[0.5deg] lg:mt-5",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t rule bg-sheet-deep/40 graph-bg overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-28">
        <Reveal>
          <div className="flex items-baseline justify-between border-b rule-strong pb-3">
            <span className="anno">Sec. 03.1 — Field reports</span>
            <span className="anno hidden sm:block">Taken down, word for word</span>
          </div>
        </Reveal>

        <div className="pt-12 sm:pt-16 pb-12 sm:pb-16">
          <LineReveal
            as="h2"
            className="font-serif font-light text-[clamp(30px,5vw,56px)] leading-[1.04] tracking-[-0.025em] text-inkwarm"
            lines={[
              <span key="1">What it sounds like when the</span>,
              <span key="2" className="sm:pl-[5vw]">
                system is <span className="italic text-mark">running</span>.
              </span>,
            ]}
          />
        </div>

        <RevealGroup
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-start"
          stagger={0.12}
        >
          {REPORTS.map((r, i) => (
            <RevealItem key={r.name}>
              <figure
                className={`relative border rule bg-sheet-lift rounded-[2px] px-6 sm:px-7 pt-8 pb-6 shadow-[4px_4px_0_0_rgba(28,24,18,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0_0_rgba(200,57,27,0.85)] hover:border-mark ${r.tilt}`}
              >
                {/* Pin */}
                <span
                  aria-hidden
                  className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-mark/85 border-2 border-sheet shadow-sm"
                />

                <blockquote>
                  <span
                    aria-hidden
                    className="block font-serif text-[44px] leading-[0.4] text-mark mb-4 select-none"
                  >
                    “
                  </span>
                  <p className="font-serif text-[16.5px] sm:text-[17.5px] leading-[1.5] text-inkwarm">
                    {r.quote}
                  </p>
                </blockquote>

                <figcaption className="mt-7 border-t rule pt-4 flex items-center gap-3.5">
                  <span className="relative w-11 h-11 rounded-[2px] overflow-hidden border rule shrink-0">
                    <Image
                      src={r.photo}
                      alt={`Portrait of ${r.name}`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13.5px] font-semibold text-inkwarm leading-tight">
                      {r.name}
                    </span>
                    <span className="block font-mono text-[10px] text-inkwarm-faint uppercase tracking-[0.1em] mt-1 truncate">
                      {r.role} · {r.place}
                    </span>
                  </span>
                  <span className="anno !text-[9px] ml-auto shrink-0 hidden sm:block">{`№ ${
                    i + 1
                  }`}</span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
