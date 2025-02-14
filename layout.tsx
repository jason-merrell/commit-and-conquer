import type { Metadata } from "next"
import { Inter, Permanent_Marker } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
})

export const metadata: Metadata = {
  title: "Creature Card Game",
  description: "A game featuring unique creature cards",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${permanentMarker.variable}`}>{children}</body>
    </html>
  )
}

