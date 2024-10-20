import type { Metadata } from "next"
import { Karla, Montserrat } from "next/font/google"
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
      </body>
    </html>
  )
}
