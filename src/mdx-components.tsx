import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Global MDX element mapping — required by @next/mdx with App Router.
 * Maps markdown elements to the site's editorial type system (serif
 * statements, mono annotations, hairline rules) so blog posts read as
 * part of the same technical document as the rest of the site.
 */
const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-serif font-light text-[clamp(32px,5vw,52px)] leading-[1.06] tracking-[-0.025em] text-inkwarm mt-14 mb-6"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-serif font-light text-[clamp(26px,4vw,38px)] leading-[1.08] tracking-[-0.02em] text-inkwarm mt-12 mb-5 border-t rule pt-8"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-serif font-normal text-[clamp(20px,3vw,26px)] leading-snug text-inkwarm mt-10 mb-4"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-[15.5px] sm:text-[16.5px] text-inkwarm-soft leading-[1.75] mb-5"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="space-y-2.5 mb-6 pl-1 list-none [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-mark [&>li]:before:font-mono [&>li]:before:text-[13px]"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="space-y-2.5 mb-6 pl-1 list-none [counter-reset:item] [&>li]:pl-8 [&>li]:before:[counter-increment:item] [&>li]:before:content-[counter(item,decimal-leading-zero)] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-mark [&>li]:before:font-mono [&>li]:before:text-[11px]"
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="relative text-[15px] sm:text-[16px] text-inkwarm-soft leading-relaxed"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link
        href={href}
        className="u-draw text-inkwarm font-medium underline decoration-mark/50 underline-offset-[3px] hover:decoration-mark transition-colors"
        {...props}
      />
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-inkwarm font-medium underline decoration-mark/50 underline-offset-[3px] hover:decoration-mark transition-colors"
        {...props}
      />
    ),
  strong: (props) => <strong className="font-semibold text-inkwarm" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-mark pl-5 my-8 [&>p]:font-serif [&>p]:text-[19px] sm:[&>p]:text-[22px] [&>p]:leading-snug [&>p]:text-inkwarm"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-[13px] text-inkwarm bg-sheet-deep/80 border rule rounded-[2px] px-1.5 py-0.5"
      {...props}
    />
  ),
  hr: () => (
    <div className="flex items-center gap-3 my-10" aria-hidden>
      <span className="anno anno-mark">✳</span>
      <span className="flex-1 border-t rule" />
    </div>
  ),
  table: (props) => (
    <div className="overflow-x-auto my-8 border rule rounded-[2px]">
      <table className="w-full text-[14px] text-inkwarm-soft" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="anno text-left px-4 py-3 border-b rule-strong bg-sheet-deep/50"
      {...props}
    />
  ),
  td: (props) => <td className="px-4 py-3 border-b rule align-top" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
