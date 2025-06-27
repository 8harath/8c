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
  title: "8C Studios - Where Sound Meets Soul. Art Lives Here.",
  description:
    "Experimental production house working at the intersection of visual arts and avant-garde sound, creating immersive experiences that transcend traditional boundaries.",
  keywords: "music production, visual arts, experimental sound, avant-garde, Tony Leone, 8C Studios",
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
