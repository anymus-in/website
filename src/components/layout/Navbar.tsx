"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { index: "01", label: "Services", href: "/services" },
  { index: "02", label: "Client sign-in", href: "/client-sign-in" },
  { index: "03", label: "Contact", href: "/contact" },
];

function Wordmark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-inkwarm focus-visible:outline-2 focus-visible:outline-mark focus-visible:outline-offset-4"
    >
      <Image
        src="/final-logo.svg"
        alt=""
        width={24}
        height={24}
        className="shrink-0"
        priority
      />
      <span className="font-serif text-[19px] sm:text-[21px] font-medium tracking-tight leading-none">
        anymus
      </span>
      <span className="anno hidden lg:inline-flex items-center gap-2 pl-3 border-l rule leading-none pt-px">
        <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-live live-dot" />
        Systems for operations
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled && !open
          ? "bg-sheet/90 backdrop-blur-md border-b rule"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 flex items-center justify-between h-[62px] sm:h-[70px]">
        <Wordmark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group inline-flex items-baseline gap-1.5 focus-visible:outline-2 focus-visible:outline-mark focus-visible:outline-offset-4"
            >
              <span className="anno !text-[9px] text-mark">{l.index}</span>
              <span className="u-draw text-[13px] font-medium tracking-[-0.01em] text-inkwarm-soft group-hover:text-inkwarm transition-colors">
                {l.label}
              </span>
            </Link>
          ))}
          <a
            href="/schedule-call"
            className="btn-stamp px-5 py-2.5 text-[13px] font-medium tracking-[-0.01em]"
          >
            Start a project
            <span aria-hidden className="font-mono text-[11px]">→</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center gap-2 py-2 pl-3 text-inkwarm focus-visible:outline-2 focus-visible:outline-mark"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="anno !text-[10px] text-inkwarm">
            {open ? "Close" : "Menu"}
          </span>
          <span className="relative w-5 h-3 block" aria-hidden>
            <span
              className={cn(
                "absolute left-0 right-0 top-0 h-px bg-inkwarm transition-transform duration-300",
                open && "translate-y-[5.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 right-0 bottom-0 h-px bg-inkwarm transition-transform duration-300",
                open && "-translate-y-[5.5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu — full-screen sheet */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-[62px] bg-sheet z-40 flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-6">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={reduce ? {} : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t rule"
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-5"
                  >
                    <span className="anno text-mark">{l.index}</span>
                    <span className="font-serif text-[34px] leading-none text-inkwarm">
                      {l.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? {} : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="border-t rule pt-8"
              >
                <a
                  href="/schedule-call"
                  onClick={() => setOpen(false)}
                  className="btn-stamp w-full py-4 text-[15px] font-medium"
                >
                  Start a project
                  <span aria-hidden className="font-mono text-[12px]">→</span>
                </a>
              </motion.div>
            </div>
            <div className="px-6 pb-8 flex items-center justify-between">
              <span className="anno">anymus — est. 2025</span>
              <span className="anno anno-mark">Reply &lt; 24h</span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
