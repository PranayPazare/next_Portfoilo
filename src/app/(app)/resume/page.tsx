import type { Metadata } from "next"
import { DownloadIcon, ExternalLinkIcon } from "lucide-react"

import { Panel, PanelHeader } from "@/features/portfolio/components/panel"
import { USER } from "@/features/portfolio/data/user"

const RESUME_PATH = "/Pranay_Pazare_Resume.pdf"

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${USER.displayName} — ${USER.jobTitle}.`,
  alternates: { canonical: "/resume" },
}

export default function ResumePage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <Panel>
        <PanelHeader className="flex flex-col gap-5 px-4 pt-10 pb-8">
          <h1 className="text-5xl font-medium tracking-tight sm:text-6xl">
            Resume
          </h1>

          <div className="inline-flex w-fit items-center gap-2 rounded-md border border-line bg-muted/40 px-2.5 py-1 text-sm">
            <span className="font-medium">{USER.displayName}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{USER.jobTitle}</span>
          </div>

          <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
            Full-Stack &amp; Blockchain Developer with 4+ years of experience
            shipping production Web3 applications, smart contracts, and scalable
            backends. Most comfortable in TypeScript, Solidity, Rust, and
            Node.js, with deep work across Ethereum, Polygon, and Solana
            ecosystems.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line bg-muted/40 px-3.5 py-2 text-sm transition-colors hover:bg-muted/70"
            >
              <DownloadIcon className="size-4" aria-hidden />
              Download
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-muted/40 px-3.5 py-2 text-sm transition-colors hover:bg-muted/70"
            >
              <ExternalLinkIcon className="size-4" aria-hidden />
              Open
            </a>
          </div>
        </PanelHeader>

        <div className="px-4 pb-8">
          <object
            data={`${RESUME_PATH}#view=FitH`}
            type="application/pdf"
            aria-label={`${USER.displayName} resume`}
            className="block aspect-[8.5/11] w-full overflow-hidden rounded-md border border-line bg-muted"
          >
            <iframe
              src={`${RESUME_PATH}#view=FitH`}
              title={`${USER.displayName} resume`}
              className="block aspect-[8.5/11] w-full"
            >
              <p className="px-6 py-12 text-center text-sm text-muted-foreground">
                Inline PDF preview isn&apos;t supported in this browser.{" "}
                <a href={RESUME_PATH} className="underline">
                  Download the resume
                </a>{" "}
                instead.
              </p>
            </iframe>
          </object>
        </div>
      </Panel>
    </div>
  )
}
