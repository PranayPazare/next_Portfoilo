"use client"

import { motion } from "motion/react"

/**
 * Decorative isometric mark shown in the profile-header figure.
 * Replaced from the original "CD" wordmark with a neutral abstract grid
 * + "PP" monogram so the personalization doesn't carry over the original
 * author's brand identity.
 */
export function ChanhDaiMarkIsometric() {
  return (
    <motion.svg
      className="h-auto w-full overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g
        className="stroke-line"
        strokeWidth="1"
        strokeDasharray="4 2"
      >
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      <g
        className="fill-foreground/8 stroke-foreground/25"
        strokeWidth="1.5"
      >
        <path d="M120 200 L210 148 L300 200 L210 252 Z" />
        <path d="M300 200 L390 148 L480 200 L390 252 Z" />
        <path d="M210 148 L210 60 L300 8 L300 96" />
        <path d="M390 148 L390 60 L480 8 L480 96" />
        <path d="M210 252 L210 340 L300 292 L300 200" />
        <path d="M390 252 L390 340 L480 292 L480 200" />
      </g>

      <g
        className="fill-foreground"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="46"
        fontWeight="600"
      >
        <text x="245" y="190">PP</text>
      </g>
    </motion.svg>
  )
}
