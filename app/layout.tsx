import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { cn } from "@/lib/utils"
import { ConvexClientProvider } from "@/components/ConvexClientProvider"
import { getToken } from "@/lib/auth-server"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const token = await getToken()

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
            <ConvexClientProvider initialToken={token}>
              {children}
            </ConvexClientProvider>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
