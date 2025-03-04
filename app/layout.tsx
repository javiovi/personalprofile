import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JO Builds",
  description: "Creating digital solutions with more than just Code",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.svg',
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'