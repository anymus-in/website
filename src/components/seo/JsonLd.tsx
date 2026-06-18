/**
 * Renders a JSON-LD <script> block. Server component — no client JS.
 * Pass any schema.org object (or array of objects) as `data`.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Schema content is build-time constant, not user input — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
