"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";

export interface ChatMessage {
  from: "agent" | "user";
  text: string;
}

interface ChatPlayerProps {
  messages: ChatMessage[];
  /** ms the typing indicator shows before each agent message */
  typingMs?: number;
  /** ms between messages */
  gapMs?: number;
  /** ms to hold the full thread before looping */
  holdMs?: number;
  className?: string;
}

/**
 * Self-playing chat thread. Reveals messages one by one with a typing
 * indicator before each agent message, then loops. Pauses while offscreen.
 * Reduced-motion users see the full thread immediately, no looping.
 */
export default function ChatPlayer({
  messages,
  typingMs = 900,
  gapMs = 650,
  holdMs = 2600,
  className,
}: ChatPlayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0); // messages shown
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (reduce) {
      setCount(messages.length);
      return;
    }
    if (!inView) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timers.push(setTimeout(r, ms)));

    (async () => {
      // restart the thread each time it enters view
      setCount(0);
      setTyping(false);
      // eslint-disable-next-line no-constant-condition
      while (!cancelled) {
        for (let i = 0; i < messages.length; i++) {
          if (cancelled) return;
          if (messages[i].from === "agent") {
            setTyping(true);
            await wait(typingMs);
            if (cancelled) return;
            setTyping(false);
          }
          setCount(i + 1);
          await wait(gapMs);
        }
        await wait(holdMs);
        if (cancelled) return;
        setCount(0);
        await wait(500);
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [inView, reduce, messages, typingMs, gapMs, holdMs]);

  return (
    <div ref={ref} className={className}>
      <div className="flex flex-col gap-2.5">
        <AnimatePresence initial={false}>
          {messages.slice(0, count).map((m, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className={m.from === "user" ? "self-end" : "self-start max-w-[85%]"}
            >
              <div
                className={
                  m.from === "user"
                    ? "rounded-2xl px-4 py-2.5 shadow-sm text-sm text-white"
                    : "rounded-2xl px-4 py-2.5 shadow-sm text-sm text-black bg-white"
                }
                style={m.from === "user" ? { background: "#51A0FC" } : undefined}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {typing && (
            <motion.div
              key="typing"
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="self-start bg-white rounded-2xl px-4 py-3 shadow-sm flex items-center gap-1"
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="w-1.5 h-1.5 rounded-full bg-[#A1A1AA]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.18 }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
