import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fixit - Africa\'s Smartest Technician-Matching Platform',
  description: 'Africa\'s smartest technician-matching platform that connects you with verified, professional technicians for all your home and business repair needs.',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
