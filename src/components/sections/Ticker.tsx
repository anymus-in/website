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
    <div className="flex items-center shrink-0" aria-hidden>
      {TRANSFORMS.map(([from, to]) => (
        <span
          key={from}
          className="flex items-center font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-inkwarm-soft"
        >
          <span className="px-5 sm:px-7">{from}</span>
          <span className="text-mark">→</span>
          <span className="px-5 sm:px-7">{to}</span>
          <span className="text-mark select-none">✳</span>
        </span>
      ))}
    </div>
  );
}

/** Full-bleed strip of before→after transformations. Pauses on hover. */
export default function Ticker() {
  return (
    <div
      className="marquee border-y rule py-3.5 sm:py-4 overflow-hidden bg-sheet-deep/50"
      aria-label="WhatsApp becomes CRM, spreadsheets become dashboards, manual follow-ups become automatic"
    >
      <div className="marquee-track">
        <Run />
        <Run />
      </div>
    </div>
  );
}
