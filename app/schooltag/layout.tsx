import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '学校鬼ごっこ - 学校中で鬼ごっこ！ハンターからの逃走！',
  description: '学校中で鬼ごっこ！時間内、最後に一人になるまでハンターから逃走する鬼ごっこゲーム',
}

export default function SchoolTagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 