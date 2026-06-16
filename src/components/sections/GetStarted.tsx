import { Copy } from "lucide-react";

const steps = [
  { num: "1.", label: "Link your website & knowledge base" },
  {
    num: "2.",
    label: "anymus generates the agents, you refine their goals and messaging",
  },
  { num: "3.", label: "Deploy with a simple code snippet" },
];

function DashboardMock() {
  return (
    /* Outer paper wrapper — matches screenshot beige rounded card */
    <div
      className="relative rounded-[24px] bg-[#F2F1ED] border border-black/[0.06] p-6 pt-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Inner dashboard card */}
      <div
        className="rounded-[16px] overflow-hidden border border-[#E4E4E1] shadow-sm flex"
        style={{ minHeight: 360 }}
      >
        {/* Sidebar */}
        <div className="w-40 bg-[#18181B] shrink-0 flex flex-col p-4">
          {/* Logo */}
          <div className="flex items-center gap-1.5 mb-6">
            <div className="flex items-end gap-[2px]">
              {[3, 5, 7, 5, 3].map((h, i) => (
                <div
                  key={i}
                  className="w-[2px] rounded-full bg-white"
                  style={{ height: h * 2.2 }}
                />
              ))}
            </div>
            <span className="text-white text-[11px] font-serif">anymus</span>
          </div>
          {["Visitors", "Agents", "Knowledge", "Customisation"].map(
            (item, i) => (
              <div
                key={item}
                className={`flex items-center gap-2 px-2 py-2 rounded-lg mb-0.5 text-[11px] ${i === 2 ? "bg-zinc-700 text-white" : "text-zinc-500"}`}
              >
                <div
                  className={`w-1 h-1 rounded-full ${i === 2 ? "bg-white" : "bg-zinc-600"}`}
                />
                {item}
              </div>
            ),
          )}
        </div>

        {/* Main panel */}
        <div className="flex-1 bg-white p-5 min-w-0">
          <h3 className="text-[13px] font-semibold text-black mb-4">
            Knowledge &amp; assets
          </h3>
          <div className="flex gap-4 border-b border-[#E4E4E1] mb-4">
            <button className="text-[11px] font-medium text-black border-b-2 border-black pb-1.5">
              Knowledge sources
            </button>
            <button className="text-[11px] text-[#71717A] pb-1.5">
              Asset library
            </button>
          </div>
          <p className="text-[11px] font-semibold text-black mb-1">Website</p>
          <p className="text-[10px] text-[#71717A] mb-3 leading-relaxed">
            Add your website so the agents can use it as a knowledge source
          </p>
          <div className="flex items-center gap-2 bg-[#F7F7F5] rounded-lg px-3 py-2 mb-2">
            <div className="w-4 h-4 rounded bg-[#D4D4D1] flex items-center justify-center shrink-0">
              <span className="text-[7px] text-[#71717A] font-bold">W</span>
            </div>
            <div>
              <p className="text-[10px] font-medium text-black">
                www.anymus.io
              </p>
              <p className="text-[9px] text-[#A1A1AA]">
                Last scraped 2 days ago
              </p>
            </div>
          </div>
          <p className="text-[10px] text-[#3F3F46] mb-4 flex items-center gap-1 cursor-pointer hover:opacity-70">
            <span>+</span> Add website
          </p>
          <p className="text-[11px] font-semibold text-black mb-1">
            Integrations
          </p>
          <p className="text-[10px] text-[#71717A] mb-3 leading-relaxed">
            Connect your knowledge base from a third-party platform
          </p>
          <div className="flex items-center gap-2 bg-[#F7F7F5] rounded-lg px-3 py-2">
            <div className="w-4 h-4 rounded bg-[#DDEEFF] flex items-center justify-center shrink-0">
              <span className="text-[7px] text-[#3B82F6] font-bold">I</span>
            </div>
            <div>
              <p className="text-[10px] font-medium text-black">Intercom</p>
              <p className="text-[9px] text-[#A1A1AA]">
                Last synced 2 days ago
              </p>
            </div>
          </div>
          <p className="text-[10px] text-[#3F3F46] mt-2 flex items-center gap-1 cursor-pointer hover:opacity-70">
            <span>+</span> Add integration
          </p>
        </div>
      </div>

      {/* Embed code card — overlaps dashboard to the right */}
      <div
        className="absolute right-3 top-3 w-60 bg-white rounded-[14px] shadow-md border border-[#E4E4E1] p-4 z-10"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
      >
        <pre className="font-mono text-[9.5px] text-[#71717A] leading-[1.6] whitespace-pre-wrap break-all">
          {`<iframe
  src="https://anymus.io/demo/
  019d0675-acf1-763c-93fb...
  embedded?theme=dark"
  allow="autoplay"
  style="width:100%;height:100%;
  overflow:hidden;border:none;
  border-radius:12px;">
</iframe>

<script src="https://
  anymus.io/demo/embed.js">
</script>`}
        </pre>
        <div className="border-t border-[#E4E4E1] mt-2.5 pt-2.5">
          <button className="flex items-center gap-1.5 text-[10px] text-[#3F3F46] hover:opacity-70">
            <Copy className="w-3 h-3" /> Copy embed code
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GetStarted() {
  return (
    <section id="get-started" className="bg-white border-t border-[#E4E4E1]">
      <div className="max-w-[1232px] mx-auto px-8 py-24">
        <h2 className="font-serif text-[40px] leading-[1.1] tracking-[-0.02em] text-black mb-16">
          Get started in minutes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">
          {/* Steps */}
          <div>
            {steps.map((s, i) => (
              <div key={i} className="border-t border-[#E4E4E1] py-8">
                <p className="font-serif text-[28px] text-[#C97A1C] mb-2">
                  {s.num}
                </p>
                <p className="text-[15px] text-[#3F3F46] leading-relaxed max-w-[260px]">
                  {s.label}
                </p>
              </div>
            ))}
            <div className="mt-8">
              <a
                href="#"
                className="cta-lift inline-flex items-center bg-black text-white rounded-full px-7 py-3.5 text-[15px] font-medium tracking-[-0.01em] shadow-[var(--shadow-card)]"
              >
                Get started
              </a>
              <p className="text-[12px] text-[#71717A] mt-3">
                First version ready in minutes, go live in 1-3 days
              </p>
            </div>
          </div>

          {/* Dashboard mock */}
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
