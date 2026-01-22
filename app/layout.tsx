import type { Metadata } from 'next'
import './globals.css'
import { Caveat } from 'next/font/google'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: 'Top 5 Weight-Support Supplements for Women Over 45',
  description: 'Independent review of the most talked-about weight-support supplements for women over 45.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={caveat.variable}>{children}</body>
    </html>
  )
}
