import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Cinzel } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "8C RECORDS - NO EGO WHEN WE GO",
  description:
    "8C RECORDS is a rising powerhouse in India's independent music scene, spearheaded by 8C TONY, 8C SAM, and ADIPETTI. Known for raw, boundary-pushing artistry and bold aesthetics. bcity, southside.",
  keywords: "8C RECORDS, hip-hop, drill, experimental, bcity, southside, 8C TONY, 8C SAM, ADIPETTI, music label, India, underground, wolf, guns, war weapons, nike sneakers, diamond jewellery, iced out",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${cinzel.variable}`}>
      <body className="font-inter bg-[#0a0a0a] text-white">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
