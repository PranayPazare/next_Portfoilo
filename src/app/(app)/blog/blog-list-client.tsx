"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import type { BlogPost } from "@/features/blog/data/posts"

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-")
  return `${d}.${m}.${y}`
}

export function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return posts
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }, [posts, query])

  // Pad to even count so the 2-col grid keeps its visual rhythm, and ensure
  // at least 3 rows of cells render so the grid lines stay visible.
  const slots: (BlogPost | null)[] = [...filtered]
  if (slots.length % 2 === 1) slots.push(null)
  while (slots.length < 6) slots.push(null)

  return (
    <>
      <div className="screen-line-top screen-line-bottom px-4 py-4">
        <label className="group/search flex items-center gap-2.5 rounded-lg border border-line bg-muted/40 px-3.5 py-2.5 text-sm transition-colors focus-within:border-foreground/25 focus-within:bg-muted/60">
          <SearchIcon
            className="size-4 shrink-0 text-muted-foreground"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blog…"
            className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
            aria-label="Search blog"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="px-4 py-10 text-center text-sm text-muted-foreground">
          No posts match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {slots.map((post, i) =>
            post ? (
              <BlogCard key={post.slug} post={post} index={i} />
            ) : (
              <div
                key={`empty-${i}`}
                className={cn(
                  "min-h-72 border-b border-line",
                  i % 2 === 0 && "sm:border-r"
                )}
                aria-hidden
              />
            )
          )}
        </div>
      )}
    </>
  )
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group/post flex flex-col border-b border-line p-6 transition-colors hover:bg-accent/30",
        index % 2 === 0 && "sm:border-r"
      )}
    >
      <div className="aspect-video overflow-hidden rounded-md bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 group-hover/post:scale-[1.02]"
        />
      </div>

      <h3 className="mt-5 text-base font-medium leading-snug text-balance">
        {post.title}
      </h3>

      <p className="mt-2 font-mono text-xs text-muted-foreground">
        {formatDate(post.date)}
      </p>
    </Link>
  )
}
