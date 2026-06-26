/**
 * FAQ content — shared between the visible FAQ section and the FAQPage
 * JSON-LD so the two can never drift out of sync.
 */
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How long does an implementation take?",
    answer:
      "Most engagements run 4-12 weeks depending on scope — we'll give you a clear timeline after the discovery call, not a generic estimate.",
  },
  {
    question: "Which platforms and tools do you work with?",
    answer:
      "We work with the major website, automation, and CRM platforms growing businesses rely on — and build custom where they fit better. The right setup depends on your existing tools; book a call and we'll scope it with you directly.",
  },
  {
    question: "Do you build custom systems or use existing platforms?",
    answer:
      "Both — we configure proven platforms where they fit your business, and build custom where they don't.",
  },
  {
    question: "What does the automation actually connect?",
    answer:
      "Whatever's currently manual between your tools — data entry, approvals, handoffs, status updates — replaced with workflows that run on their own, triggered by activity in your systems.",
  },
  {
    question: "Do you provide training for our team?",
    answer:
      "Yes — training is part of every engagement, not an afterthought. Your team learns the system hands-on before launch.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay involved for support and iteration. Systems evolve as your business does, and we're around for that.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Project-based and scoped after discovery — no surprise hourly billing or vague monthly retainers.",
  },
  {
    question: "Do I need to replace my existing tools?",
    answer:
      "Not necessarily. We often integrate what's already working before replacing anything.",
  },
];
