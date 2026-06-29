import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "tamper-proof-doc",
    title: "Tamper-Proof Document Solution",
    period: { start: "01.2025" },
    skills: [
      "Polygon",
      "Solidity",
      "Node.js",
      "TypeScript",
      "SDK",
      "Hashing",
      "REST APIs",
    ],
    description: `Document-integrity platform that anchors verification proofs on Polygon for immutable, auditable records.
- Built a TypeScript SDK so backend and web apps integrate proof submission and verification in a few calls.
- Implemented file canonicalization and consistent hashing across formats.
- Batch/stream processing and robust error handling for production reliability.`,
    isExpanded: true,
  },
  {
    id: "web3-trading-smart-wallet",
    title: "Web3 Trading & Smart Wallet",
    period: { start: "06.2024" },
    skills: [
      "Hyperliquid",
      "ERC-4337",
      "Dynamic.xyz",
      "ZeroDev",
      "Li.Fi",
      "WebSockets",
      "Next.js",
      "TypeScript",
    ],
    description: `Spot + perpetuals trading with account-abstraction smart wallets.
- Integrated Hyperliquid for order routing, position tracking, and margin management.
- Low-latency execution with real-time WebSocket sync for fills, positions, and liquidations.
- Risk engine: leverage validation, collateral checks, margin monitoring, auto-liquidation.
- ERC-4337 smart wallets (Dynamic.xyz + ZeroDev) with paymaster-based gas sponsorship.
- Li.Fi SDK for multi-chain swaps and bridging across EVM and non-EVM chains.`,
  },
  {
    id: "rwa-tokenization",
    title: "RWA Tokenization Platform",
    period: { start: "01.2024" },
    skills: [
      "Solana",
      "Rust",
      "Anchor",
      "Thirdweb",
      "Reown WalletConnect",
      "MoonPay",
      "React.js",
    ],
    description: `Real-world-asset tokenization with multi-chain wallet support and fiat on-ramp.
- Rust smart contracts on Solana for asset creation and secondary-market buy/sell.
- Integrated MoonPay so users can buy crypto with debit/credit cards.
- Thirdweb + Reown WalletConnect for unified EVM and Solana wallet flows.
- React.js frontend providing a single UX across two chain ecosystems.`,
  },
  {
    id: "quest-web3-engagement",
    title: "Quest & Web3 Engagement Platform",
    period: { start: "08.2023" },
    skills: [
      "NestJS",
      "AdminJS",
      "OAuth",
      "Web3",
      "Staking",
      "Wallet Connect",
    ],
    description: `Engagement platform with quest mechanics, social login, and on-chain staking.
- Integrated third-party Quest services and built in-house quests + admin via NestJS and AdminJS.
- OAuth social login and Web3 wallet connection.
- Staking-contract integration on the frontend.`,
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    period: { start: "03.2023" },
    skills: [
      "Vue.js",
      "Moralis",
      "Python",
      "Web3",
      "Smart Contracts",
    ],
    description: `Full-stack NFT marketplace with real-time on-chain event display.
- Vue.js frontend with Web3 wallet flows.
- Moralis for real-time NFT transaction events.
- Python backend for off-chain auth, metadata, and analytics.`,
  },
  {
    id: "staking-farming",
    title: "Staking & Farming Pools",
    period: { start: "10.2023" },
    skills: ["React.js", "Solidity", "Web3.js", "ERC-20"],
    description: `Yield-farming and staking dApp with reward-driven user flows.
- React.js frontend with on-chain staking and farming integration.
- Reward and incentive design to drive engagement.`,
  },
  {
    id: "ido-igo-launchpad",
    title: "IDO / IGO Launchpad",
    period: { start: "06.2023" },
    skills: ["React.js", "Solidity", "Smart Contracts", "Snapshot", "Lottery"],
    description: `Fundraising launchpad for IDO/IGO campaigns.
- Onboarding and management UIs with snapshot/lottery flows.
- Staking pools integrated with on-chain contracts.`,
  },
  {
    id: "telegram-mini-app",
    title: "Telegram Mini-App Bot",
    period: { start: "01.2024" },
    skills: ["Telegram Bot", "Tap-to-Earn", "Real-time", "React.js"],
    description: `Reward-based Telegram bot with Tap-to-Earn, daily check-ins, and social tasks.
- Engaging UI inside the Telegram client with real-time updates.`,
  },
  {
    id: "ai-agents-solana",
    title: "AI-Agent Platform on Solana",
    period: { start: "06.2024" },
    skills: ["Solana", "OpenAI", "Token-Gated", "React.js", "Web3"],
    description: `Multi-purpose AI-agent platform on Solana for on-chain and off-chain tasks.
- OpenAI-powered knowledge retrieval and decision-making components.
- Token-binding flow lets users create unique, token-gated AI personas.`,
  },
  {
    id: "search-pad",
    title: "Search-Pad",
    period: { start: "09.2023" },
    skills: ["OAuth", "X", "Discord", "Telegram", "Airdrop", "ERC Wallets"],
    description: `Airdrop-targeting platform with multi-social login and wallet capture.
- Backend OAuth services for X, Discord, and Telegram authentication.
- Captures ERC wallet addresses and exports CSVs for airdrop processing.`,
  },
]
