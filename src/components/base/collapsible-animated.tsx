"use client"

import { ChevronsUpDownIcon, ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Collapsible as CollapsibleRoot } from "@/components/base/ui/collapsible"

export function Collapsible(
  props: React.ComponentProps<typeof CollapsibleRoot>
) {
  return <CollapsibleRoot {...props} />
}

export function CollapsibleChevronsUpDownIcon({
  className,
  // Swallow non-standard animation props the original component accepted.
  duration: _duration,
  ...props
}: React.ComponentProps<typeof ChevronsUpDownIcon> & { duration?: number }) {
  return (
    <ChevronsUpDownIcon
      className={cn("size-4 text-muted-foreground", className)}
      {...props}
    />
  )
}

export function CollapsibleChevronDownIcon({
  className,
  duration: _duration,
  ...props
}: React.ComponentProps<typeof ChevronDownIcon> & { duration?: number }) {
  return (
    <ChevronDownIcon
      className={cn("size-4 text-muted-foreground", className)}
      {...props}
    />
  )
}
