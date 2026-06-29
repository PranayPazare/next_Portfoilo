#!/usr/bin/env node
/**
 * Capture screenshots of the running dev server (http://localhost:3000) for
 * the README. Outputs to docs/screenshots/.
 *
 * Run with the dev server already up:
 *   pnpm dev &
 *   node scripts/capture-screenshots.mjs
 */

import puppeteer from "puppeteer"
import path from "node:path"
import { mkdirSync } from "node:fs"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.resolve(__dirname, "..", "docs", "screenshots")
mkdirSync(OUT_DIR, { recursive: true })

const BASE = process.env.SCREENSHOT_BASE_URL || "http://localhost:3000"

const PAGES = [
  { path: "/", file: "home.png" },
  { path: "/blog", file: "blog.png" },
  {
    path: "/blog/erc-4337-smart-wallets-in-production",
    file: "blog-post.png",
  },
  { path: "/resume", file: "resume.png" },
  { path: "/contact", file: "contact.png" },
]

const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 2 }

const browser = await puppeteer.launch({
  headless: "new",
  defaultViewport: VIEWPORT,
})

try {
  for (const { path: route, file } of PAGES) {
    const page = await browser.newPage()
    await page.setViewport(VIEWPORT)
    const url = BASE + route
    console.log(`▶ ${url}`)
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60_000 })
    // Give animations + lazy images a tick to settle.
    await new Promise((r) => setTimeout(r, 800))
    const out = path.join(OUT_DIR, file)
    await page.screenshot({ path: out, fullPage: true })
    console.log(`✓ ${out}`)
    await page.close()
  }
} finally {
  await browser.close()
}
