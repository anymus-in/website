"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

function AnymusLogo() {
  return (
    <a href="/" className="flex items-center gap-2 text-black">
      {/* Spark/equalizer glyph */}
      <svg
        width="26"
        height="22"
        viewBox="0 0 26 22"
        fill="none"
        className="shrink-0"
      >
        <rect
          x="0"
          y="6"
          width="4"
          height="10"
          rx="2"
          fill="currentColor"
          opacity="0.9"
        />
        <rect x="6" y="2" width="4" height="18" rx="2" fill="currentColor" />
        <rect x="12" y="0" width="4" height="22" rx="2" fill="currentColor" />
        <rect
          x="18"
          y="4"
          width="4"
          height="14"
          rx="2"
          fill="currentColor"
          opacity="0.85"
        />
        <rect
          x="24"
          y="8"
          width="2"
          height="8"
          rx="1"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
      <span className="font-serif text-[16px] sm:text-[18px] md:text-[22px] font-medium tracking-tight">
        anymus
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300",
        /* sit below 44px announcement bar until scrolled past it */
        scrolled
          ? "top-0 bg-white/95 backdrop-blur-sm border-b border-[#E4E4E1] py-3 sm:py-4"
          : "top-[44px] bg-transparent py-4 sm:py-5",
      )}
    >
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <AnymusLogo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {/* Resources dropdown */}
          <div className="relative">
            <button
              className="focus-accent rounded-md flex items-center gap-1 text-[14px] md:text-[15px] text-black hover:opacity-70 transition-opacity"
              onClick={() => setResourcesOpen((v) => !v)}
            >
              Resources
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  resourcesOpen && "rotate-180",
                )}
              />
            </button>
            {resourcesOpen && (
              <div className="absolute top-full right-0 mt-2 w-44 bg-white border border-[#E4E4E1] rounded-xl shadow-lg py-2 z-50">
                {["Blog", "Docs", "Changelog"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm text-[#18181B] hover:bg-[#F2F1ED] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="focus-accent rounded-md link-underline text-[14px] md:text-[15px] text-black"
          >
            Get started
          </a>
          <a
            href="#"
            className="focus-accent rounded-md link-underline text-[14px] md:text-[15px] text-black"
          >
            Sign in
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 focus-accent rounded-md text-black"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-sm border-t border-[#E4E4E1] mt-2">
          <div className="max-w-[1232px] mx-auto px-4 sm:px-6 py-4 space-y-3">
            <button
              className="focus-accent w-full text-left rounded-md flex items-center gap-1 text-sm text-black hover:opacity-70 transition-opacity py-2 px-3"
              onClick={() => setResourcesOpen((v) => !v)}
            >
              Resources
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200 ml-auto",
                  resourcesOpen && "rotate-180",
                )}
              />
            </button>
            {resourcesOpen && (
              <div className="pl-3 space-y-2 bg-[#F2F1ED] rounded-lg py-2 px-2">
                {["Blog", "Docs", "Changelog"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-2 py-1.5 text-xs text-[#18181B] hover:opacity-70 transition-opacity"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
            <a
              href="#"
              className="focus-accent block rounded-md text-sm text-black hover:opacity-70 transition-opacity py-2 px-3"
            >
              Get started
            </a>
            <a
              href="#"
              className="focus-accent block rounded-md text-sm text-black hover:opacity-70 transition-opacity py-2 px-3"
            >
              Sign in
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
