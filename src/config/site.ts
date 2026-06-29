import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

/**
 * SEO-optimized description (~155 chars, the sweet spot for Google snippets).
 * Includes high-intent terms — role, location, chains, frameworks — without
 * keyword-stuffing.
 */
const SEO_DESCRIPTION =
  "Pranay Pazare — Blockchain and Full Stack Developer in Pune, India. 4+ years shipping Web3 dApps, ERC-4337 smart wallets, and RWA tokenization on Ethereum, Polygon, and Solana."

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://next-portfoilo.vercel.app",
  ogImage: USER.ogImage,
  description: SEO_DESCRIPTION,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/PranayPazare/next_Portfoilo/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Resume",
    href: "/resume" as Route,
  },
  {
    title: "Contact",
    href: "/contact" as Route,
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = ""
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "PranayPazare/next_Portfoilo"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/PranayPazare/next_Portfoilo"

export const SPONSORSHIP_URL = "https://github.com/PranayPazare"

export const UTM_PARAMS = {
  utm_source: "pranaypazare.dev",
}
