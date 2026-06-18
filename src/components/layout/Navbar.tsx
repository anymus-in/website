"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogIn, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

function AnymusLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-black">
      <Image
        src="/final-logo.svg"
        alt="anymus"
        width={28}
        height={28}
        className="shrink-0"
        priority
      />
      <span className="font-serif text-[16px] sm:text-[18px] md:text-[22px] font-medium tracking-tight">
        anymus
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white border-b border-[#E4E4E1] py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-5",
      )}
    >
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <AnymusLogo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-4">
          <Link
            href="/services"
            className="focus-accent text-[13px] md:text-[14px] font-medium text-ink-700 hover:text-black transition-colors px-2"
          >
            Services
          </Link>
          <a
            href="/client-sign-in"
            className="focus-accent inline-flex items-center gap-1.5 border border-[#D4D4D1] text-black rounded-full px-4 py-2.5 text-[13px] md:text-[14px] font-medium tracking-[-0.01em] hover:bg-[#F2F1ED] transition-colors min-h-[40px]"
          >
            <LogIn className="w-3.5 h-3.5" />
            Client Sign In
          </a>
          <a
            href="/schedule-call"
            className="cta-lift focus-accent inline-flex items-center bg-black text-white rounded-full px-5 py-2.5 text-[13px] md:text-[14px] font-medium tracking-[-0.01em] min-h-[40px]"
          >
            Schedule Call
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 focus-accent rounded-md text-black"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
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
        <nav className="md:hidden bg-white border-t border-[#E4E4E1] mt-2">
          <div className="max-w-[1232px] mx-auto px-4 sm:px-6 py-4 space-y-3">
            <Link
              href="/services"
              className="focus-accent block w-full text-center text-sm font-medium text-ink-700 py-2.5 px-3 min-h-[44px]"
            >
              Services
            </Link>
            <a
              href="/client-sign-in"
              className="focus-accent inline-flex items-center justify-center gap-1.5 w-full border border-[#D4D4D1] text-black rounded-full text-sm font-medium py-2.5 px-3 min-h-[44px]"
            >
              <LogIn className="w-4 h-4" />
              Client Sign In
            </a>
            <a
              href="/schedule-call"
              className="cta-lift focus-accent inline-flex items-center justify-center w-full bg-black text-white rounded-full text-sm font-medium py-2.5 px-3 min-h-[44px]"
            >
              Schedule Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
