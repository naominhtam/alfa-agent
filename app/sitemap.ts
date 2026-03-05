// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://alfamedia.vn";
  const now = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    // Company pages
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },

    // Legal
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },

    // Product funnel
    { path: "/alfa-agent", changeFrequency: "weekly", priority: 0.9 },
    { path: "/alfa-agent/for-brands", changeFrequency: "weekly", priority: 0.8 },
    {
      path: "/alfa-agent/solutions/build-and-run",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { path: "/alfa-agent/join-koc", changeFrequency: "weekly", priority: 0.8 },

    // Optional: thank-you page (thường vẫn cho index, tuỳ anh)
    { path: "/alfa-agent/for-brands/thanks", changeFrequency: "yearly", priority: 0.1 },
  ];

  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}