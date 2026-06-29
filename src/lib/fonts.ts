import { IBM_Plex_Serif, Press_Start_2P } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"

const fontSans = GeistSans
const fontMono = GeistMono

const fontSerif = IBM_Plex_Serif({
  weight: ["400"],
  display: "swap",
  fallback: ["serif"],
  variable: "--font-serif",
})

/**
 * Pixel-art display font used by the brand mark and the footer wordmark.
 * Closest open-source match to chanhdai.com's chunky hand-drawn letterforms.
 */
const fontPixel = Press_Start_2P({
  weight: ["400"],
  display: "swap",
  fallback: ["monospace"],
  variable: "--font-pixel",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
  fontPixel.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-geist-mono)]"
)
