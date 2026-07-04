import { WhatsAppIcon } from "@/components/icons";

const TRANSFORMS = [
  ["WhatsApp", "CRM"],
  ["Spreadsheet", "Dashboard"],
  ["Enquiry", "Invoice"],
  ["Manual follow-up", "Automatic"],
  ["Ten apps", "One system"],
  ["Gut feel", "Live numbers"],
  ["Someone's memory", "A record"],
];

function Run() {
  return (
    <div className="flex items-baseline shrink-0" aria-hidden>
      {TRANSFORMS.map(([from, to], i) => (
        <span key={from} className="flex items-baseline whitespace-nowrap">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sheet/50 px-6 sm:px-10">
            {`№ ${String(i + 1).padStart(2, "0")}`}
          </span>
          {from === "WhatsApp" && (
            <WhatsAppIcon className="w-[0.62em] h-[0.62em] text-sheet/75 self-center mr-[0.18em] text-[clamp(26px,3.8vw,52px)]" />
          )}
          <span className="font-serif font-light text-[clamp(26px,3.8vw,52px)] leading-none tracking-[-0.02em] text-sheet/75">
            {from}
          </span>
          <span className="font-serif font-light text-[clamp(26px,3.8vw,52px)] leading-none px-4 sm:px-6 text-sheet">
            →
          </span>
          <span className="font-serif italic text-[clamp(26px,3.8vw,52px)] leading-none tracking-[-0.02em] text-sheet">
            {to}
          </span>
        </span>
      ))}
    </div>
  );
}

/** The red band — everything the system turns into something better. */
export default function Ticker() {
  return (
    <div
      className="marquee relative bg-mark border-y border-mark-deep overflow-hidden"
      aria-label="WhatsApp becomes CRM, spreadsheets become dashboards, manual follow-ups become automatic"
    >
      <div className="ruler-ticks absolute top-1 left-0 right-0 h-[8px] opacity-30 invert" aria-hidden />
      <div className="py-7 sm:py-10">
        <div className="marquee-track items-baseline">
          <Run />
          <Run />
        </div>
      </div>
      <div className="ruler-ticks absolute bottom-1 left-0 right-0 h-[8px] opacity-30 invert rotate-180" aria-hidden />
    </div>
  );
}
