import { Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#18181B] py-2.5 sm:py-3 text-center text-xs sm:text-sm font-medium text-white/80 px-4 flex items-center justify-center gap-2">
      <Sparkles className="w-3 h-3 text-[#F5C26B] shrink-0" />
      We raised €3M to grow your revenue on autopilot.{" "}
      <a
        href="#"
        className="text-[#F5C26B] underline underline-offset-2 decoration-[#F5C26B]/50 hover:decoration-[#F5C26B] hover:text-white transition-colors"
      >
        Read the announcement
      </a>
    </div>
  );
}
