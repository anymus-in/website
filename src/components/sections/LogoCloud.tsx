import type { ReactNode } from "react";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/** PLACEHOLDERS — swap `name` and `mark` per entry when real logos are ready */
interface Logo {
  name: string;
  mark: ReactNode;
  wordmark: string;
}

const mk = (children: ReactNode): ReactNode => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const logos: Logo[] = [
  {
    name: "Northwind",
    wordmark: "font-semibold tracking-tight text-[17px]",
    mark: mk(
      <>
        <circle cx="9" cy="12" r="5.5" />
        <circle cx="15" cy="12" r="5.5" />
      </>,
    ),
  },
  {
    name: "LUMEN",
    wordmark: "font-medium uppercase tracking-[0.22em] text-[13px]",
    mark: mk(<path d="M12 3L21 20H3L12 3Z" />),
  },
  {
    name: "Vantage",
    wordmark: "font-serif italic text-[20px]",
    mark: mk(
      <>
        <path d="M3 12A9 9 0 0 0 21 12" />
        <path d="M6.5 12A5.5 5.5 0 0 0 17.5 12" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </>,
    ),
  },
  {
    name: "Meridian",
    wordmark: "font-semibold tracking-tight text-[17px]",
    mark: mk(<path d="M12 2.5l8.7 4.75v9.5L12 21.5l-8.7-4.75v-9.5z" />),
  },
  {
    name: "Forge & Co",
    wordmark: "font-medium tracking-tight text-[16px]",
    mark: mk(
      <>
        <path d="M7 4l5 7.5 5 -7.5" />
        <path d="M4.5 12h15" />
        <path d="M7 20l5 -7.5 5 7.5" />
      </>,
    ),
  },
  {
    name: "Brightside",
    wordmark: "font-semibold tracking-tight text-[17px]",
    mark: mk(
      <>
        <line x1="4" y1="20" x2="4" y2="18" />
        <line x1="9" y1="20" x2="9" y2="13" />
        <line x1="14" y1="20" x2="14" y2="8" />
        <line x1="19" y1="20" x2="19" y2="4" />
      </>,
    ),
  },
];

export default function LogoCloud() {
  return (
    <section className="bg-white border-t border-line">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
        <Reveal>
          <div className="flex items-center gap-5 max-w-[340px] mx-auto mb-10 sm:mb-12">
            <span className="flex-1 h-px bg-line" aria-hidden="true" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-400 whitespace-nowrap">
              Already in good company
            </p>
            <span className="flex-1 h-px bg-line" aria-hidden="true" />
          </div>
        </Reveal>

        <RevealGroup
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 md:gap-x-20"
          stagger={0.08}
        >
          {logos.map((logo) => (
            <RevealItem
              key={logo.name}
              className="group flex items-center gap-3 text-ink-500 hover:text-ink-900 transition-colors duration-300 cursor-default select-none"
            >
              <span className="shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5">
                {logo.mark}
              </span>
              <span className={`leading-none ${logo.wordmark}`}>{logo.name}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
