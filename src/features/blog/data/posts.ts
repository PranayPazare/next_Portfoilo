export type BlogPost = {
  slug: string
  title: string
  description: string
  /** ISO date string (YYYY-MM-DD). */
  date: string
  /** Estimated read time, in minutes. */
  readTimeMinutes: number
  tags: string[]
  /** Hero/feature image shown on the list card and at the top of the post. */
  coverImage: {
    src: string
    alt: string
  }
  /** Markdown body. */
  body: string
}

/** Unsplash CDN — public photos. Sizing/quality params keep transfer small. */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const POSTS: BlogPost[] = [
  {
    slug: "erc-4337-smart-wallets-in-production",
    title: "Smart wallets without the gas pain: ERC-4337 in production",
    description:
      "Notes from shipping an account-abstraction stack with Dynamic.xyz, ZeroDev, and paymaster-sponsored gas.",
    date: "2026-06-12",
    readTimeMinutes: 6,
    tags: ["ERC-4337", "Account Abstraction", "Web3"],
    coverImage: {
      src: u("1639762681485-074b7f938ba0", 1600),
      alt: "Abstract blue digital network suggesting a crypto wallet stack",
    },
    body: `Account abstraction is one of those upgrades that sounds incremental on paper and feels transformative the first time a non-crypto user signs up to your app and sends a transaction without ever touching gas. After a few months of shipping a real ERC-4337 stack at Blocsys, here is what I would actually tell another engineer starting today.

## What a "smart wallet" actually buys you

The core unlock is decoupling the **signer** (an EOA, passkey, or social login) from the **account** (a smart contract that holds funds and executes calls). Once you have that split, a lot of UX problems disappear:

- Gas can be paid by a **paymaster**, sponsored by your app or by a third party, instead of forcing the user to hold native tokens.
- A single user operation can **batch** multiple calls, so an approve-then-swap is one signature, not two.
- Recovery, session keys, and per-app spending limits stop being product fiction and become smart-contract policy.

The signer abstraction means a brand-new user can onboard with a passkey or social login, and you can upgrade them to a hardware wallet later without breaking their account address.

![Code on a laptop screen, illustrating the SDK integration surface](${u("1518186285589-2f7649de83e0", 1200)})

## The stack that worked for us

- [Dynamic.xyz](https://www.dynamic.xyz) for embedded wallet + signer flow. Their SDK handles social login + key management cleanly and exposes a viem-style signer.
- [ZeroDev](https://docs.zerodev.app) as the smart-account SDK. It wraps the bundler, paymaster, and account factory in a single client.
- Bundler and paymaster from ZeroDev for staging; we keep our prod paymaster behind our own service so we can apply rate limits.

The mental model: Dynamic gives you a signer, ZeroDev wraps that signer into a smart account with a known address, you submit a \`userOp\` to the bundler, and the paymaster decides whether your app foots the bill.

## The two gotchas that ate real time

**1. Gas estimation in dev vs prod.** The bundler estimates gas, but if your paymaster policy rejects, the userOp silently drops. Always log the paymaster decision and surface a clean error to the user — otherwise you spend a day chasing "why did nothing happen."

**2. Nonce ordering for rapid actions.** If a user fires two userOps inside a second (think auto-trading or claim-all flows), the second one can collide with the first's pending nonce. Use ZeroDev's parallel-nonce helper or queue the calls client-side.

![A token sitting on a circuit-style background, evoking on-chain accounts](${u("1639322537228-f710d846310a", 1200)})

## What's next

The pieces that excite me most: **session keys** for safe one-click trading inside a single session, and **paymaster policies tied to on-chain reputation** so app-sponsored gas isn't a free firehose. Both are real on mainnet today and worth the integration work.
`,
  },
  {
    slug: "polygon-document-anchoring",
    title: "Anchoring document integrity on Polygon",
    description:
      "How we built a tamper-evident document proof system using canonical hashing and on-chain anchors — and the design choices that survived contact with auditors.",
    date: "2026-05-22",
    readTimeMinutes: 5,
    tags: ["Polygon", "Hashing", "Backend"],
    coverImage: {
      src: u("1450101499163-c8848c66ca85", 1600),
      alt: "Stack of documents and papers, the raw material of a proof system",
    },
    body: `One of the systems I built at Blocsys is a tamper-proof document proof service. The pitch is simple: a customer uploads a document, we anchor a proof on Polygon, and anyone can later verify whether a given file matches what was signed. The interesting work is everything between those two sentences.

## Why this is harder than \`sha256(file)\`

A naive design hashes the raw bytes and pushes that hash on-chain. It falls over the first time the file gets re-encoded — a PDF re-saved by Acrobat, a DOCX round-tripped through LibreOffice, an image whose EXIF gets stripped by a CDN. Same content, different bytes, hashes diverge, verification fails. The customer is angry.

The fix is **file canonicalization**: deterministically normalize the file into a form that ignores irrelevant differences, then hash that canonical form. We do this per format:

- PDFs: extract text + structural layout, drop creation-date and producer metadata.
- DOCX/XLSX: unpack the zip, normalize XML whitespace and ordering, drop \`docProps\`.
- Images: re-encode through a fixed pipeline; strip EXIF; resize to a deterministic format-specific shape.

The hash we anchor is over the canonical bytes, not the raw upload. Two files representing the same content now produce the same proof.

![Charts and data: the verifiable side of the proof flow](${u("1456406644174-8ddd4cd52a06", 1200)})

## The on-chain shape

We anchor batches of proofs as Merkle roots, not individual hashes — gas is a real constraint, and Polygon lets us amortize hundreds of proofs per transaction. The verification flow is:

1. Submit document → server canonicalizes and hashes.
2. Server queues the hash for the next batch.
3. Batch worker builds a Merkle tree, anchors the root on Polygon, and stores per-document inclusion proofs.
4. Verifier: re-canonicalize the file the same way → recompute hash → check inclusion proof against the on-chain root.

## What I'd tell my past self

- **Decide the canonicalization rules upfront and freeze them.** Once a customer relies on a proof, you cannot change how you compute the hash without invalidating their record. We versioned the canonicalization scheme from day one and the on-chain anchor records which version was used.
- **Be paranoid about file parsers.** Most CVEs in this space come from PDF/zip libraries with surprising behaviors on malformed input. Hard-cap file sizes, sandbox the canonicalization worker, and treat every file as adversarial.
- **The SDK is the product.** The thing customers actually integrate is the TypeScript SDK that wraps proof submission and verification. Putting effort into the SDK's ergonomics — clear errors, sync + async APIs, a simple verify-from-URL helper — paid off faster than any backend optimization.
`,
  },
  {
    slug: "multi-chain-wallet-ux-evm-solana",
    title: "One UX across EVM and Solana: lessons from a multi-chain wallet flow",
    description:
      "Wallet connection patterns when your users live on both Ethereum-likes and Solana, using Thirdweb and Reown WalletConnect.",
    date: "2026-04-18",
    readTimeMinutes: 4,
    tags: ["Solana", "EVM", "Wallets"],
    coverImage: {
      src: u("1639762681057-408e52192e55", 1600),
      alt: "Abstract tech network, representing a multi-chain wallet flow",
    },
    body: `Multi-chain support is a UX problem before it is a technical one. The mistake I made in an earlier project was treating EVM and Solana as separate flows joined by a tab switch. Users hated it: connecting was confusing, the address shown was sometimes the wrong family, and copy-pasted addresses landed in the wrong network's send screen.

The current design uses **one connect button, one session, and one source of truth** — and the chain-family detection happens transparently.

## The pieces

- [Thirdweb SDK](https://portal.thirdweb.com) for EVM wallet connectors and chain-aware contract calls.
- [Reown WalletConnect](https://reown.com) (formerly WalletConnect) for the actual transport, which now speaks both EVM and Solana out of the box.
- A thin app-side **wallet adapter layer** that exposes a single \`useWallet()\` hook regardless of family.

The hook returns \`{ family, address, chainId, send, sign }\` and the calling code rarely needs to branch on family.

![A coin against a circuit background, evoking the unified wallet primitive](${u("1639322537228-f710d846310a", 1200)})

## The patterns that paid off

**1. Detect family from the connector, not from the address.** Solana addresses and EVM addresses are easy to tell apart visually, but doing that check in app code creates a foot-gun the moment someone pastes an address. Use the connected wallet's declared family.

**2. Network labels in the UI, always.** Every action that touches chain state — send, swap, sign — shows the active network as a small chip. Even when there's nothing the user can do wrong, the chip prevents the "wait, did I just send USDC on the wrong chain?" moment.

**3. Treat balance reads as cheap and reliable, not real-time.** RPCs lie under load. Cache balances aggressively, and only force a re-read after a transaction the app submitted. Polling for "live" balances burns RPC credits and produces flickering UIs.

## What's still annoying

Cross-family signing — a single user action that has to be authorized by both an EVM key and a Solana key — still requires two prompts. That's accurate to the underlying cryptography, but for the user it reads as a bug. We hide it behind a single "Approve" button with a sub-step indicator. Not ideal; the honest answer is the primitive is missing.
`,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}
