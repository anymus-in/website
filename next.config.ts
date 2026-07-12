import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  // The four legacy service slugs were consolidated into three pillars.
  // 308-redirect the old URLs so indexed links and bookmarks don't 404.
  async redirects() {
    return [
      {
        source: "/services/erp-implementation",
        destination: "/services/internal-systems",
        permanent: true,
      },
      {
        source: "/services/crm",
        destination: "/services/automation",
        permanent: true,
      },
      {
        source: "/services/business-automation",
        destination: "/services/automation",
        permanent: true,
      },
      {
        source: "/services/website-design",
        destination: "/services/digital-presence",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
