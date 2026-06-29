import type { Metadata } from "next"

import { Panel, PanelHeader } from "@/features/portfolio/components/panel"

import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Send Pranay Pazare a message about a project, role, or idea.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <Panel>
        <PanelHeader className="flex flex-col gap-4 px-4 pt-10 pb-8">
          <h1 className="text-5xl font-medium tracking-tight sm:text-6xl">
            Contact
          </h1>
          <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
            Got a project, role, or question in mind? Drop a message below and
            I&apos;ll get back to you.
          </p>
        </PanelHeader>

        <div className="px-4 pb-8">
          <ContactForm />
        </div>
      </Panel>
    </div>
  )
}
