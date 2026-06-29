import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "lucide-react"

import { Markdown } from "@/components/markdown"
import { Prose } from "@/components/ui/typography"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { getAllPosts, getPostBySlug } from "@/features/blog/data/posts"

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.coverImage.src, alt: post.coverImage.alt }],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="[--separator-height:--spacing(8)] mx-auto md:max-w-3xl">
      <Panel>
        <PanelHeader className="flex items-center justify-between gap-2">
          <PanelTitle>{post.title}</PanelTitle>
          <Link
            href="/blog"
            className="flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="size-3.5" aria-hidden />
            <span>All posts</span>
          </Link>
        </PanelHeader>

        <PanelContent className="py-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              className="size-full object-cover"
            />
          </div>

          <div className="py-6">
            <div className="mb-6 flex flex-wrap items-center gap-3 px-4 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="size-3" aria-hidden />
                <time dateTime={post.date}>{post.date}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <ClockIcon className="size-3" aria-hidden />
                {post.readTimeMinutes} min read
              </span>
              <span className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-line px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </span>
            </div>

            <Prose className="prose-img:rounded-md prose-img:border prose-img:border-line px-4">
              <Markdown>{post.body}</Markdown>
            </Prose>
          </div>
        </PanelContent>
      </Panel>
    </div>
  )
}
