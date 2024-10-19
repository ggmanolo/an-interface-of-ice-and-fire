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
      <body className={`${bodyFont.className}  antialiased`}>{children}</body>
    </html>
  )
}
