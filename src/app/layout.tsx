import type { Metadata } from "next"
import { Geist, Geist_Mono, Cinzel } from "next/font/google"
import "./globals.css"
import Navbar from "./components/navbar"
import Contact from "./components/contact"
import BFooter from "./components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Ryan’s",
  description: "Your bar & kitchen",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} ${cinzel.variable}
          antialiased
          font-[var(--font-cinzel)]
        `}
      >
        <Navbar />
        <main>{children}</main>
        <Contact />
        <BFooter />
      </body>
    </html>
  )
}
