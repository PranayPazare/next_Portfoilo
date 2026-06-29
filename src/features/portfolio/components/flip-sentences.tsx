"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

export function FlipSentences({
  className,
  children,
}: {
  className?: string
  children: string[]
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (children.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % children.length)
    }, 3500)
    return () => window.clearInterval(id)
  }, [children.length])

  return (
    <div
      className={cn(
        "flex items-center font-mono text-sm text-muted-foreground",
        className
      )}
    >
      <span
        key={index}
        className="block animate-in fade-in slide-in-from-bottom-1 duration-500"
      >
        {children[index]}
      </span>
    </div>
  )
}
