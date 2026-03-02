import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { TerminalBackground } from '@/components/background/TerminalBackground'
import { Navbar } from '@/components/layout/Navbar'
import { ConsoleOverlay } from '@/terminal/ConsoleOverlay'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Hrudyansh Kayastha | AI-Driven Cybersecurity Engineer',
  description: 'Building autonomous Linux defense systems powered by automation and AI-assisted correlation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased min-h-screen selection:bg-white/20`}>
        <TerminalBackground />
        <Navbar />
        <ConsoleOverlay />
        <main className="pt-24 pb-16 min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
