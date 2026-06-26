import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "anymus — Services";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage("Websites, Automation & Internal Systems");
}
