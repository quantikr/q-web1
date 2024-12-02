import { ThemeProvider } from '../components/theme-provider'
import { ThemeToggle } from '../components/theme-toggle'
import { Header } from '../components/ui/header'
import { Footer } from '../components/ui/footer'
import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Quantikr - Advanced Digital Solutions',
  description:
    'Transform your digital future with Quantikr. Innovative solutions powered by expertise and deep industry knowledge.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
