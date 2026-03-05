import type { MetadataRoute } from "next";

const baseUrl = "https://alfamedia.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/for-brands",
    "/solutions/build-and-run",
    "/join-koc",
    "/privacy",
    "/terms",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}