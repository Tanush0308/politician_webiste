import { MetadataRoute } from "next";
import { getInitiatives } from "@/data/initiatives";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kailaspatil.com";

  const initiatives = getInitiatives();
  
  const initiativeUrls = initiatives.map((initiative) => ({
    url: `${baseUrl}/initiatives/${initiative.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticRoutes = [
    "",
    "/journey",
    "/initiatives",
    "/constituency",
    "/assembly",
    "/media",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...staticRoutes, ...initiativeUrls];
}
