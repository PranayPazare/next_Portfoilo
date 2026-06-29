"use client"

import { useRef, useState } from "react"
import { CheckCircle2Icon, SendIcon, TriangleAlertIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Public Web3Forms access key. Despite the NEXT_PUBLIC_ prefix, it's safe to
 * expose — Web3Forms uses it only to route submissions to the inbox the key
 * was registered to. Get a key for free at https://web3forms.com.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

type SubmitState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, setState] = useState<SubmitState>("idle")
  const [error, setError] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!ACCESS_KEY) {
      setError(
        "Contact form isn't configured yet — set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment to enable it."
      )
      setState("error")
      return
    }

    setState("submitting")
    setError("")

    const payload = new FormData(form)
    payload.append("access_key", ACCESS_KEY)
    payload.append("from_name", "Pranay Pazare portfolio")
    const subjectInput = payload.get("subject")
    payload.set(
      "subject",
      subjectInput ? `Portfolio: ${subjectInput}` : "Portfolio: new message"
    )

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      })
      const data = (await response.json()) as {
        success?: boolean
        message?: string
      }
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Submission failed")
      }
      setState("success")
      form.reset()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not send the message. Try again."
      )
      setState("error")
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Honeypot — bots that fill every field will trip this and Web3Forms
          will drop the submission. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      <Field label="Subject" name="subject" required />

      <Field
        label="Message"
        name="message"
        textarea
        required
        placeholder="What would you like to talk about?"
      />

      <div className="screen-line-top flex flex-wrap items-center gap-x-4 gap-y-3 pt-5">
        <button
          type="submit"
          disabled={state === "submitting"}
          className={cn(
            "inline-flex items-center gap-2 rounded-md border border-line bg-muted/40 px-3.5 py-2 text-sm transition-colors",
            "hover:bg-muted/70 disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          {state === "submitting" ? (
            <span>Sending…</span>
          ) : (
            <>
              <SendIcon className="size-4" aria-hidden />
              <span>Send message</span>
            </>
          )}
        </button>

        {state === "success" && (
          <p className="flex items-center gap-1.5 font-mono text-xs text-emerald-500">
            <CheckCircle2Icon className="size-3.5" aria-hidden />
            Message sent — I&apos;ll reply soon.
          </p>
        )}
        {state === "error" && (
          <p className="flex items-center gap-1.5 font-mono text-xs text-red-500">
            <TriangleAlertIcon className="size-3.5" aria-hidden />
            {error}
          </p>
        )}
      </div>
    </form>
  )
}

type FieldProps = {
  label: string
  name: string
  type?: string
  required?: boolean
  textarea?: boolean
  autoComplete?: string
  placeholder?: string
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  autoComplete,
  placeholder,
}: FieldProps) {
  const inputClass = cn(
    "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/50",
    textarea ? "min-h-32 resize-y px-3.5 py-2.5" : "px-3.5 py-2.5"
  )

  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
        {label}
        {required && <span className="ml-1 text-foreground/70">*</span>}
      </span>
      <div
        className={cn(
          "group/field overflow-hidden rounded-lg border border-line bg-muted/40 transition-colors",
          "focus-within:border-foreground/25 focus-within:bg-muted/60"
        )}
      >
        {textarea ? (
          <textarea
            name={name}
            required={required}
            placeholder={placeholder}
            rows={6}
            className={inputClass}
          />
        ) : (
          <input
            name={name}
            type={type}
            required={required}
            autoComplete={autoComplete}
            placeholder={placeholder}
            className={inputClass}
          />
        )}
      </div>
    </label>
  )
}
