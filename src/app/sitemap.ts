import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
import { getAllPosts } from "@/features/blog/data/posts"

/**
 * Sitemap entries. Static routes get a high priority + weekly cadence;
 * blog posts get monthly cadence with their `date` as lastModified.
 * Submit `${SITE_INFO.url}/sitemap.xml` in Google Search Console.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const baseUrl = SITE_INFO.url

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
