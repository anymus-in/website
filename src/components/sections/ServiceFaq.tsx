"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import type { ServiceFaqItem } from "@/lib/services";

export default function ServiceFaq({ faqs }: { faqs: ServiceFaqItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <RevealGroup stagger={0.04}>
        {faqs.map((faq, i) => (
          <RevealItem key={faq.question} className="border-t border-line">
            <Accordion.Item value={`item-${i}`}>
              <Accordion.Header>
                <Accordion.Trigger className="group w-full flex items-center justify-between py-4 sm:py-5 text-left">
                  <h3 className="font-serif font-normal text-[17px] sm:text-[19px] text-inkwarm group-hover:opacity-70 transition-opacity pr-4 sm:pr-8 flex-1">
                    {faq.question}
                  </h3>
                  <span
                    className={cn(
                      "w-8 h-8 rounded-[2px] border flex items-center justify-center shrink-0 transition-colors min-h-[44px] min-w-[44px]",
                      "data-[state=open]:bg-mark/[0.08] data-[state=open]:border-mark bg-sheet-lift rule",
                    )}
                  >
                    <Plus className="w-4 h-4 text-inkwarm group-data-[state=open]:hidden" />
                    <Minus className="w-4 h-4 text-mark hidden group-data-[state=open]:block" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="text-[13px] sm:text-[14px] text-inkwarm-soft leading-relaxed max-w-2xl pb-4 sm:pb-5 border-l-2 border-mark pl-3">
                  {faq.answer}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          </RevealItem>
        ))}
        <div className="border-t border-line" />
      </RevealGroup>
    </Accordion.Root>
  );
}
