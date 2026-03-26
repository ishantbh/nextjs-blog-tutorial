import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { cn } from "@/lib/utils"
import { ConvexClientProvider } from "@/components/ConvexClientProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <main className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
