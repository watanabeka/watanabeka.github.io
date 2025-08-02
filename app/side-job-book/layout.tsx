import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SideBook - 副業収支管理アプリ',
  description: 'シンプルで使いやすい副業の収支記録アプリ。プライバシーポリシーと利用規約',
}

export default function SideJobBookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}