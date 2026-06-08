import type { MetadataRoute } from "next";

const SITE_URL = "https://aihub.vercel.app"; // ← update to your real domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"], // don't let bots hit the AI API endpoint
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
