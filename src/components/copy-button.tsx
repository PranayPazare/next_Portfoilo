"use client"

import { useState, type ReactElement } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type CopyButtonProps = {
  className?: string
  value?: string
  text?: () => string
  variant?: "ghost" | "outline" | "default"
  size?: string
  idleIcon?: ReactElement
  copiedIcon?: ReactElement
  onCopySuccess?: () => void
  "aria-label"?: string
}

export function CopyButton({
  className,
  value,
  text,
  idleIcon,
  copiedIcon,
  onCopySuccess,
  "aria-label": ariaLabel = "Copy to clipboard",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      const payload = text ? text() : value ?? ""
      await navigator.clipboard.writeText(payload)
      setCopied(true)
      onCopySuccess?.()
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignore
    }
  }

  const idle = idleIcon ?? <CopyIcon className="size-3.5" aria-hidden />
  const done = copiedIcon ?? <CheckIcon className="size-3.5" aria-hidden />

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex size-6 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
        className
      )}
    >
      {copied ? done : idle}
    </button>
  )
}

export default CopyButton
