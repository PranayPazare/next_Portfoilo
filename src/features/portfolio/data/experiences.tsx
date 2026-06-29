import { BriefcaseBusinessIcon, CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "blocsys",
    companyName: "Blocsys Technologies Pvt. Ltd.",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    companyWebsite: "https://blocsys.com",
    location: "Pune, India",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Full Stack Blockchain Developer",
        employmentPeriod: {
          start: "02.2022",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `Driving architecture and development across blockchain platforms — DApps, tokenization, smart-wallet infrastructure, on-chain trading, and AI-agent systems.

**Tamper-Proof Document Solution**
- Built a tamper-evident document proof system anchored on Polygon for immutability and auditability.
- Designed an SDK for proof submission, hash generation, and verification across backend and web apps.
- Implemented file canonicalization and hashing for consistent verification across file formats.
- Improved scalability through batch/stream processing and production-focused error handling.

**Web3 Trading & Smart Wallet Solutions**
- Integrated spot and perpetual trading via Hyperliquid — order routing, position tracking, margin management.
- Built low-latency trade execution with real-time WebSocket sync for fills, position updates, and liquidations.
- Implemented risk management — leverage validation, collateral checks, margin monitoring, auto-liquidation.
- Integrated Li.Fi SDK for multi-chain swaps and bridging across EVM and non-EVM chains.
- Built ERC-4337 smart wallet infrastructure using Dynamic.xyz and ZeroDev for account abstraction.
- Implemented paymaster-based gas sponsorship for gas-less user transactions.

**RWA Tokenization**
- Designed and shipped smart contracts in Rust for a Solana-based decentralized application.
- Integrated MoonPay fiat on-ramp for card-based crypto purchases.
- Implemented Thirdweb SDK and Reown WalletConnect for multi-chain wallet interactions (EVM + Solana).
- Built create-asset / buy-sell flows for a tokenized secondary market.
- Built a React.js frontend unifying Solana (Rust) and EVM smart-contract interactions.

**Quest & Web3 Engagement Platform**
- Integrated third-party Quest services with NestJS; built in-house quests and admin panel using AdminJS.
- Implemented OAuth social login, wallet connection, and staking-contract integration.

**NFT Marketplace, Staking & Farming, IDO/IGO Launchpad**
- Built full-stack NFT marketplace with Vue.js, Moralis real-time events, and Python off-chain services.
- Built React.js frontends and Web3 flows for staking, yield farming, and IDO/IGO fundraising.

**Telegram Mini-App Bot, AI-Agent platform, Search-Pad**
- Built reward-based Telegram bot UI (Tap-to-Earn, daily check-ins, social tasks).
- Built UI for a multi-purpose AI-agent platform on Solana with OpenAI-powered knowledge retrieval.
- Built multi-social OAuth + wallet capture for airdrop targeting.`,
        skills: [
          "Solidity",
          "Rust",
          "Hardhat",
          "Truffle",
          "Ethereum",
          "Polygon",
          "Solana",
          "ERC-4337",
          "Account Abstraction",
          "Dynamic.xyz",
          "ZeroDev",
          "Li.Fi",
          "Thirdweb",
          "Reown WalletConnect",
          "Hyperliquid",
          "Moralis",
          "Chainlink",
          "IPFS",
          "React.js",
          "Next.js",
          "Vue.js",
          "Redux",
          "TypeScript",
          "Node.js",
          "NestJS",
          "Express.js",
          "Python",
          "PHP",
          "MongoDB",
          "MySQL",
          "AWS",
          "Docker",
          "WebSockets",
          "REST APIs",
          "SDK Design",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "zummit",
    companyName: "Zummit Infolabs",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "India",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Web Developer",
        employmentPeriod: {
          start: "06.2021",
          end: "01.2022",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Built login page UI and integrated secure authentication APIs.
- Created interactive pages for users to engage with predefined interview question sets sourced from the backend.`,
        skills: ["HTML", "CSS", "JavaScript", "REST APIs"],
      },
    ],
  },
]
