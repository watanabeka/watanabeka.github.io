import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'カロパット - 簡単カロリー記録アプリ',
  description: 'カロリーをパッと記録できる超簡単カロリー管理アプリ',
  other: {
    'app-ads.txt': '/calpat/app-ads.txt',
  },
}

export default function CalpatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        <link rel="app-ads.txt" href="/calpat/app-ads.txt" />
      </head>
      {children}
    </>
  )
} 