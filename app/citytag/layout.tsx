import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '街鬼 - 街中で繰り広げる追いかけっこ',
  description: '街全体、いろいろな場所で鬼ごっこ！子供の頃楽しかった街中の鬼ごっこを再現しました。',
}

export default function CityTagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 