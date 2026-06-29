"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import type { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

export function SiteHeaderNav({ items }: { items: NavItem<string>[] }) {
  const pathname = usePathname()

  if (!items.length) return null

  return (
    <nav
      aria-label="Primary"
      className="hidden items-center gap-5 sm:flex"
    >
      {items.map((item) => {
        const isActive =
          !item.external &&
          (pathname === item.href ||
            (item.href !== "/" && pathname?.startsWith(item.href)))

        const baseClass = cn(
          "text-sm text-muted-foreground transition-colors hover:text-foreground",
          isActive && "text-foreground"
        )

        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener"
              className={baseClass}
            >
              {item.title}
            </a>
          )
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={baseClass}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
