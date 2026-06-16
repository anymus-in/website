const logos = [
  {
    name: "aikido",
    svg: (
      <svg viewBox="0 0 110 28" className="h-6 w-auto" fill="currentColor">
        <polygon points="0,22 12,4 24,22" opacity="0.9" />
        <text x="30" y="20" fontFamily="Inter,sans-serif" fontSize="16" fontWeight="600">aikido</text>
      </svg>
    ),
  },
  {
    name: "Parim",
    svg: (
      <svg viewBox="0 0 100 28" className="h-6 w-auto" fill="currentColor">
        <rect x="0" y="4" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="1" y="18" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700">≡</text>
        <text x="24" y="20" fontFamily="Inter,sans-serif" fontSize="15" fontWeight="500">Parim</text>
      </svg>
    ),
  },
  {
    name: "LIVEFORCE",
    svg: (
      <svg viewBox="0 0 130 24" className="h-5 w-auto" fill="currentColor">
        <text x="0" y="18" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="800" letterSpacing="1.5">LIVEFORCE</text>
      </svg>
    ),
  },
  {
    name: "finbite",
    svg: (
      <svg viewBox="0 0 104 28" className="h-6 w-auto" fill="currentColor">
        <g opacity="0.85">
          <rect x="2" y="5"  width="3" height="3" rx="0.5" />
          <rect x="7" y="5"  width="3" height="3" rx="0.5" />
          <rect x="2" y="11" width="3" height="3" rx="0.5" />
          <rect x="7" y="11" width="3" height="3" rx="0.5" />
          <rect x="2" y="17" width="3" height="3" rx="0.5" />
          <rect x="7" y="17" width="3" height="3" rx="0.5" />
        </g>
        <text x="18" y="20" fontFamily="Inter,sans-serif" fontSize="15" fontWeight="500">finbite</text>
      </svg>
    ),
  },
  {
    name: "ParcelTracker",
    svg: (
      <svg viewBox="0 0 148 28" className="h-6 w-auto" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" d="M0 8 L8 4 L16 8 L16 20 L8 24 L0 20 Z" />
        <path strokeWidth="1.5" d="M0 8 L8 12 L16 8" />
        <path strokeWidth="1.5" d="M8 12 L8 24" />
        <text x="22" y="20" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" stroke="none" fill="currentColor">ParcelTracker</text>
      </svg>
    ),
  },
];

import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export default function LogoCloud() {
  return (
    <section className="bg-white pt-4 pb-16">
      <div className="max-w-[1232px] mx-auto px-8">
        <p className="eyebrow text-center mb-8">Trusted by teams at</p>
        <RevealGroup className="flex items-center justify-between gap-8" stagger={0.07}>
          {logos.map((logo) => (
            <RevealItem
              key={logo.name}
              className="flex h-6 items-center text-black opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
            >
              {logo.svg}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
