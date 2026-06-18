import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_TAGLINE } from "@/lib/site";

export const alt = "anymus — Custom ERP, CRM & Automation Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Fetch a Google Font as an ArrayBuffer for Satori. Returns null on any
 * failure so image generation falls back to the default font rather than
 * breaking the build.
 */
async function loadGoogleFont(
  family: string,
  text: string,
): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(
      text,
    )}`;
    const css = await (await fetch(url)).text();
    const resource = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
    );
    if (resource) {
      const res = await fetch(resource[1]);
      if (res.ok) return await res.arrayBuffer();
    }
  } catch {
    // ignore — fall back to default font
  }
  return null;
}

export default async function Image() {
  const wordmark = "anymus";

  const [serifFont, logoData] = await Promise.all([
    loadGoogleFont("Newsreader:wght@500", wordmark),
    readFile(join(process.cwd(), "public/final-logo.svg")).catch(() => null),
  ]);

  const logoSrc = logoData
    ? `data:image/svg+xml;base64,${logoData.toString("base64")}`
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F0F10",
          padding: "72px 80px",
        }}
      >
        {/* top gradient accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 12,
            background:
              "linear-gradient(90deg, #F5C26B 0%, #F08A3C 50%, #3B82F6 100%)",
          }}
        />

        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {logoSrc && <img src={logoSrc} width={72} height={72} alt="" />}
          <span
            style={{
              fontSize: 64,
              color: "#FFFFFF",
              fontFamily: serifFont ? "Newsreader" : "serif",
              letterSpacing: "-0.02em",
            }}
          >
            {wordmark}
          </span>
        </div>

        {/* headline + url */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <span
            style={{
              fontSize: 76,
              color: "#FFFFFF",
              fontFamily: serifFont ? "Newsreader" : "serif",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            {SITE_TAGLINE}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 9999,
                background:
                  "linear-gradient(135deg, #F5C26B 0%, #3B82F6 100%)",
              }}
            />
            <span style={{ fontSize: 30, color: "#A1A1AA" }}>anymus.in</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      ...(serifFont
        ? {
            fonts: [
              {
                name: "Newsreader",
                data: serifFont,
                style: "normal" as const,
                weight: 500 as const,
              },
            ],
          }
        : {}),
    },
  );
}
