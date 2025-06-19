import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'カロパット - 簡単カロリー記録アプリ',
  description: 'カロリーをパッと記録できる超簡単カロリー管理アプリ',
}

export default function CalpatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 