import type { Person } from "schema-dts"

import { SITE_INFO } from "@/config/site"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

/**
 * Stable @id anchors so Google can merge JSON-LD nodes across separate
 * <script> blocks (and pages) into a single entity in the Knowledge Graph.
 * The "#fragment" keeps each node id distinct from the page URL itself.
 */
export const JSON_LD_ID = {
  website: `${SITE_INFO.url}/#website`,
  person: `${SITE_INFO.url}/#person`,
} as const

export const personJsonLd: Person = {
  "@type": "Person",
  "@id": JSON_LD_ID.person,
  name: USER.displayName,
  givenName: USER.firstName,
  familyName: USER.lastName,
  alternateName: [USER.username, "PranayPazare"],
  identifier: USER.username,
  jobTitle: USER.jobTitle,
  description: USER.bio,
  image: USER.avatar,
  url: SITE_INFO.url,
  gender: USER.gender,
  knowsAbout: [
    "Blockchain",
    "Smart Contracts",
    "Solidity",
    "Rust",
    "Web3",
    "Ethereum",
    "Polygon",
    "Solana",
    "ERC-4337 Account Abstraction",
    "DeFi",
    "NFT",
    "RWA Tokenization",
    "Full-Stack Development",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "AWS",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Blocsys Technologies",
    url: "https://blocsys.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  // Public profiles opt in via their `sameAs` flag (Knowledge Graph).
  sameAs: SOCIAL_LINKS.filter((link) => link.sameAs).map((link) => link.href),
}
