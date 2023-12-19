import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My custom sliders',
  description: 'this is page with my custom sliders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
