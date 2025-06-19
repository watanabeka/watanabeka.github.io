import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'アプリ',
  description: 'develop page',
  other: {
    'app-ads.txt': '/app-ads.txt',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
} 