import type { Metadata } from "next"

import {
  Panel,
  PanelHeader,
} from "@/features/portfolio/components/panel"
import { getAllPosts } from "@/features/blog/data/posts"
import { BlogListClient } from "./blog-list-client"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about blockchain, Web3, and the systems behind them.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="[--separator-height:--spacing(8)] mx-auto md:max-w-3xl">
      <Panel>
        <PanelHeader className="px-4 pt-6 pb-7">
          <p className="text-xs text-muted-foreground">Blog</p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-balance sm:text-[2.25rem]/[1.1]">
            Writing about blockchain, Web3,
            <br className="hidden sm:inline" /> and the systems behind them.
          </h1>
        </PanelHeader>

        <BlogListClient posts={posts} />
      </Panel>
    </div>
  )
}
