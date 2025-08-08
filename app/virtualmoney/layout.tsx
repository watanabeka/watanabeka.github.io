import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VirtualMoney - プライバシーポリシー及び利用規約',
  description: 'VirtualMoneyのプライバシーポリシー及び利用規約',
}

export default function VirtualMoneyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}