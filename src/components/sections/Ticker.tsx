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
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-inkwarm-faint px-6 sm:px-10">
            {`№ ${String(i + 1).padStart(2, "0")}`}
          </span>
          <span className="font-serif font-light text-[clamp(24px,3.4vw,44px)] leading-none tracking-[-0.02em] text-inkwarm/70">
            {from}
          </span>
          <span className="font-serif font-light text-[clamp(24px,3.4vw,44px)] leading-none px-4 sm:px-6 text-mark">
            →
          </span>
          <span className="font-serif italic text-[clamp(24px,3.4vw,44px)] leading-none tracking-[-0.02em] text-inkwarm">
            {to}
          </span>
        </span>
      ))}
    </div>
  );
}

/** Oversized editorial strip — everything the system turns into something better. */
export default function Ticker() {
  return (
    <div
      className="marquee border-y rule py-6 sm:py-8 overflow-hidden"
      aria-label="WhatsApp becomes CRM, spreadsheets become dashboards, manual follow-ups become automatic"
    >
      <div className="marquee-track items-baseline">
        <Run />
        <Run />
      </div>
    </div>
  );
}
