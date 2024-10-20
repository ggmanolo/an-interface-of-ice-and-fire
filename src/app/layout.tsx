import type { Metadata } from "next"
import { Karla, Montserrat } from "next/font/google"
import Link from "next/link"

import "./globals.css"

const bodyFont = Montserrat({ weight: "variable", subsets: ["latin"] })
const titleFont = Karla({ weight: "variable", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "An interface of Ice & Fire",
  description: "Frontend Challenge by Manuel Garcia Genta",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      style={
        {
          "--font-title": titleFont.style.fontFamily,
          "--font-body": bodyFont.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body
        className={`${bodyFont.className}  antialiased flex flex-col items-center relative`}
      >
        <div className="absolute top-0 left-0 h-40 w-screen bg-gradient-to-t from-transparent to-accent opacity-20 -z-10" />
        {children}
        <footer className="p-8">
          <Link
            href="https://github.com/ggmanolo/an-interface-of-ice-and-fire"
            className="underline hover:opacity-70 transition-opacity text-stone-500 dark:text-stone-400 font-medium text-center text-sm flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Check the code!</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="h-4"
            >
              <g clipPath="url(#github)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="github">
                  <path fill="currentColor" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </footer>
      </body>
    </html>
  )
}
