import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Visionairy - Virtual Flight Assistant",
  description: "Virtual flight booking assistance for the visually impaired",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

