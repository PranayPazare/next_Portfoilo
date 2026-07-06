import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import type { WebSite, WithContext } from "schema-dts"

import { JSON_LD_ID, personJsonLd } from "@/config/json-ld"
import { META_THEME_COLORS, SITE_INFO, X_HANDLE } from "@/config/site"
import { fontVariables } from "@/lib/fonts"
import { JsonLdScript } from "@/lib/json-ld"
import { Providers } from "@/components/providers"
import { USER } from "@/features/portfolio/data/user"

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": JSON_LD_ID.website,
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    author: personJsonLd,
  }
}

// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s — ${SITE_INFO.name}`,
    default: `${USER.displayName} — ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  applicationName: SITE_INFO.name,
  category: "technology",
  authors: [
    {
      name: USER.displayName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.displayName,
  publisher: USER.displayName,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: SITE_INFO.name,
    title: `${USER.displayName} — ${USER.jobTitle}`,
    description: SITE_INFO.description,
    url: "/",
    type: "profile",
    locale: "en_US",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: `${USER.displayName} — ${USER.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${USER.displayName} — ${USER.jobTitle}`,
    description: SITE_INFO.description,
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [
      {
        url: SITE_INFO.ogImage,
        alt: `${USER.displayName} — ${USER.jobTitle}`,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    // Set via env vars on Vercel. Each one renders as a <meta> tag.
    // Leaving the var unset simply omits the tag.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var value = localStorage.getItem('avatarLights');
                document.documentElement.dataset.avatarLights = JSON.parse(value || '"on"');
              } catch(_) {}
            `,
          }}
        />
        <JsonLdScript data={getWebSiteJsonLd()} />
      </head>

      <body>
        <Providers>
          <NuqsAdapter>{children}</NuqsAdapter>
        </Providers>
      </body>
    </html>
  )
}
