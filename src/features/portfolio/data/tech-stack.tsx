import {
  BoxIcon,
  CloudIcon,
  CoinsIcon,
  DatabaseIcon,
  HexagonIcon,
  LinkIcon,
  ServerIcon,
} from "lucide-react"

import {
  ClaudeIcon,
  CursorIcon,
  GitHubIcon,
  JsIcon,
  OpenAIIcon,
  ReactIcon,
  TailwindCssIcon,
  TsIcon,
  VercelIcon,
} from "@/components/icons"

import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: <TsIcon />,
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <JsIcon />,
    categories: ["Language"],
  },
  {
    key: "solidity",
    title: "Solidity",
    href: "https://soliditylang.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12.039 0H7.054l4.99 8.731L17.033 0zM6.946 24l5.014-8.736L6.946 6.526 1.957 15.262zm10.087-8.738L12.041 24h4.992l4.992-8.738zM6.967 8.726L11.96 0H6.967L1.974 8.726z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Language", "Blockchain"],
  },
  {
    key: "rust",
    title: "Rust",
    href: "https://www.rust-lang.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M23.836 11.703 22.79 11.05a13.93 13.93 0 0 0-.025-.305l.9-.81a.319.319 0 0 0-.104-.55l-1.123-.42a8.587 8.587 0 0 0-.083-.298l.6-1.054a.319.319 0 0 0-.21-.474l-1.158-.214a8.78 8.78 0 0 0-.137-.275l.262-1.166a.319.319 0 0 0-.32-.391l-1.213.04a8.96 8.96 0 0 0-.183-.234l.04-1.213a.319.319 0 0 0-.391-.32l-1.166.262a8.78 8.78 0 0 0-.275-.137l-.214-1.158a.319.319 0 0 0-.474-.21l-1.054.6a8.587 8.587 0 0 0-.298-.083l-.42-1.123a.319.319 0 0 0-.55-.104l-.81.9a13.93 13.93 0 0 0-.305-.025L12.297.164a.319.319 0 0 0-.595 0L11.05 1.21a13.93 13.93 0 0 0-.305.025l-.81-.9a.319.319 0 0 0-.55.104l-.42 1.123a8.587 8.587 0 0 0-.298.083L7.612 1.045a.319.319 0 0 0-.474.21l-.214 1.158a8.78 8.78 0 0 0-.275.137l-1.166-.262a.319.319 0 0 0-.391.32l.04 1.213a8.96 8.96 0 0 0-.183.234L3.745 3.81a.319.319 0 0 0-.32.391l.262 1.166a8.78 8.78 0 0 0-.137.275l-1.158.214a.319.319 0 0 0-.21.474l.6 1.054a8.587 8.587 0 0 0-.083.298l-1.123.42a.319.319 0 0 0-.104.55l.9.81a13.93 13.93 0 0 0-.025.305L.164 11.703a.319.319 0 0 0 0 .595L1.21 12.95a13.93 13.93 0 0 0 .025.305l-.9.81a.319.319 0 0 0 .104.55l1.123.42a8.587 8.587 0 0 0 .083.298l-.6 1.054a.319.319 0 0 0 .21.474l1.158.214a8.78 8.78 0 0 0 .137.275l-.262 1.166a.319.319 0 0 0 .32.391l1.213-.04a8.96 8.96 0 0 0 .183.234l-.04 1.213a.319.319 0 0 0 .391.32l1.166-.262a8.78 8.78 0 0 0 .275.137l.214 1.158a.319.319 0 0 0 .474.21l1.054-.6a8.587 8.587 0 0 0 .298.083l.42 1.123a.319.319 0 0 0 .55.104l.81-.9a13.93 13.93 0 0 0 .305.025l.652 1.046a.319.319 0 0 0 .595 0l.652-1.046a13.93 13.93 0 0 0 .305-.025l.81.9a.319.319 0 0 0 .55-.104l.42-1.123a8.587 8.587 0 0 0 .298-.083l1.054.6a.319.319 0 0 0 .474-.21l.214-1.158a8.78 8.78 0 0 0 .275-.137l1.166.262a.319.319 0 0 0 .391-.32l-.04-1.213a8.96 8.96 0 0 0 .183-.234l1.213.04a.319.319 0 0 0 .32-.391l-.262-1.166a8.78 8.78 0 0 0 .137-.275l1.158-.214a.319.319 0 0 0 .21-.474l-.6-1.054a8.587 8.587 0 0 0 .083-.298l1.123-.42a.319.319 0 0 0 .104-.55l-.9-.81a13.93 13.93 0 0 0 .025-.305l1.046-.652a.319.319 0 0 0 0-.595z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Language", "Blockchain"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org",
    icon: <CoinsIcon strokeWidth={1.6} />,
    categories: ["Language"],
  },
  {
    key: "ethereum",
    title: "Ethereum",
    href: "https://ethereum.org",
    icon: <HexagonIcon strokeWidth={1.6} />,
    categories: ["Blockchain"],
  },
  {
    key: "polygon",
    title: "Polygon",
    href: "https://polygon.technology",
    icon: <HexagonIcon strokeWidth={1.6} />,
    categories: ["Blockchain"],
  },
  {
    key: "solana",
    title: "Solana",
    href: "https://solana.com",
    icon: <HexagonIcon strokeWidth={1.6} />,
    categories: ["Blockchain"],
  },
  {
    key: "hardhat",
    title: "Hardhat",
    href: "https://hardhat.org",
    icon: <BoxIcon strokeWidth={1.6} />,
    categories: ["Blockchain"],
  },
  {
    key: "erc-4337",
    title: "ERC-4337 / Account Abstraction",
    href: "https://eips.ethereum.org/EIPS/eip-4337",
    icon: <LinkIcon strokeWidth={1.6} />,
    categories: ["Blockchain"],
  },
  {
    key: "ipfs",
    title: "IPFS",
    href: "https://ipfs.tech",
    icon: <CloudIcon strokeWidth={1.6} />,
    categories: ["Blockchain"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev",
    icon: <ReactIcon />,
    categories: ["Frontend"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Frontend"],
  },
  {
    key: "vuejs",
    title: "Vue.js",
    href: "https://vuejs.org",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Frontend"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    icon: <TailwindCssIcon />,
    categories: ["Frontend"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org",
    icon: <ServerIcon strokeWidth={1.6} />,
    categories: ["Backend"],
  },
  {
    key: "nestjs",
    title: "NestJS",
    href: "https://nestjs.com",
    icon: <ServerIcon strokeWidth={1.6} />,
    categories: ["Backend"],
  },
  {
    key: "express",
    title: "Express",
    href: "https://expressjs.com",
    icon: <ServerIcon strokeWidth={1.6} />,
    categories: ["Backend"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com",
    icon: <DatabaseIcon strokeWidth={1.6} />,
    categories: ["Database"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com",
    icon: <DatabaseIcon strokeWidth={1.6} />,
    categories: ["Database"],
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com",
    icon: <CloudIcon strokeWidth={1.6} />,
    categories: ["Cloud & DevOps"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com",
    icon: <BoxIcon strokeWidth={1.6} />,
    categories: ["Cloud & DevOps"],
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com",
    icon: <VercelIcon />,
    categories: ["Cloud & DevOps"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Workflow"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com",
    icon: <GitHubIcon />,
    categories: ["Workflow"],
  },
  {
    key: "cursor",
    title: "Cursor",
    href: "https://cursor.com",
    icon: <CursorIcon />,
    categories: ["Workflow & AI"],
  },
  {
    key: "claude",
    title: "Claude",
    href: "https://claude.ai",
    icon: <ClaudeIcon />,
    categories: ["Workflow & AI"],
  },
  {
    key: "chatgpt",
    title: "ChatGPT",
    href: "https://chatgpt.com",
    icon: <OpenAIIcon />,
    categories: ["Workflow & AI"],
  },
]
