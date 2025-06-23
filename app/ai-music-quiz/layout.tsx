import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI画像の曲名クイズ - 曲名からAI画像が生成したイラストを曲名を当てよう！',
  description: 'AI画像・AIイラストで遊ぶ、これまでにない楽曲クイズアプリ。1980年代から最新ヒットまで、各年代の名曲をAIがイラスト化。',
}

export default function AiMusicQuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 