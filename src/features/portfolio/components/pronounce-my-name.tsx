"use client"

import { cn } from "@/lib/utils"

export function PronounceMyName({
  className,
}: {
  className?: string
  namePronunciationUrl: string
}) {
  return (
    <span
      className={cn("hidden", className)}
      aria-hidden
    />
  )
}
