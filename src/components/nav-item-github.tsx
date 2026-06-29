import { unstable_cache } from "next/cache"

import { SOURCE_CODE_GITHUB_REPO } from "@/config/site"
import { GitHubStars } from "@/components/github-stars"

const getStargazerCount = unstable_cache(
  async () => {
    try {
      const headers: HeadersInit = {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      }
      // GitHub's REST API works unauthenticated at 60 req/hr per IP — fine
      // for our 1-hour cache. Only add the Authorization header when a real
      // token is available; sending "Bearer undefined" earned 401s and made
      // the count silently fall through to 0.
      if (process.env.GITHUB_API_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_API_TOKEN}`
      }

      const response = await fetch(
        `https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`,
        { headers }
      )

      if (!response.ok) {
        return 0
      }

      const json = (await response.json()) as { stargazers_count?: number }
      return Number(json?.stargazers_count) || 0
    } catch {
      return 0
    }
  },
  ["github-stargazer-count"],
  { revalidate: 3600 } // Cache for 1 hour
)

export async function NavItemGitHub() {
  const stargazersCount = await getStargazerCount()

  return (
    <GitHubStars
      repo={SOURCE_CODE_GITHUB_REPO}
      stargazersCount={stargazersCount}
    />
  )
}
