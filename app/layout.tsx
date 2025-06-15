import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Malone Electric LLC',
  description: 'Licensed and insured electrical contractor offering residential, commercial, marine, and industrial services. Call now: 231-818-1401.',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
