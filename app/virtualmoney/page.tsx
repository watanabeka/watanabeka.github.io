'use client'

import React from 'react'

export default function VirtualMoneyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 pb-4 border-b-4 border-blue-500">
          VirtualMoney プライバシーポリシー及び利用規約
        </h1>
        <p className="text-sm text-gray-600 mb-8">最終更新日: 2025年8月8日</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. はじめに</h2>
          <p className="text-gray-600 leading-relaxed">
            このプライバシーポリシー及び利用規約（以下「本規約」）は、VirtualMoney（以下「本サービス」）の利用に関する条件を定めるものです。本サービスをご利用いただく前に、必ず本規約をお読みください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. プライバシーポリシー</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">2.1 収集する情報</h3>
            <p className="text-gray-600 mb-2">本サービスでは、以下の情報を収集する場合があります：</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>アカウント情報（ユーザー名、メールアドレス等）</li>
              <li>取引履歴</li>
              <li>デバイス情報（IPアドレス、ブラウザ情報等）</li>
              <li>サービス利用状況に関する情報</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">2.2 情報の利用目的</h3>
            <p className="text-gray-600 mb-2">収集した情報は以下の目的で利用します：</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>サービスの提供・運営</li>
              <li>ユーザーサポート</li>
              <li>サービスの改善・新機能の開発</li>
              <li>セキュリティの確保</li>
              <li>法令に基づく対応</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">2.3 情報の管理</h3>
            <p className="text-gray-600 leading-relaxed">
              当社は、収集した個人情報を適切に管理し、不正アクセス、紛失、破損、改ざん、漏洩等を防止するため、必要かつ適切な安全管理措置を講じます。
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">2.4 第三者への提供</h3>
            <p className="text-gray-600 mb-2">当社は、以下の場合を除き、個人情報を第三者に提供しません：</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. 利用規約</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">3.1 サービスの利用</h3>
            <p className="text-gray-600 leading-relaxed">
              本サービスは、本規約に同意いただいた方のみご利用いただけます。
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">3.2 アカウント</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>アカウント作成時は正確な情報を提供してください</li>
              <li>アカウント情報の管理責任はユーザーにあります</li>
              <li>第三者へのアカウント譲渡・貸与は禁止です</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">3.3 禁止事項</h3>
            <p className="text-gray-600 mb-2">以下の行為を禁止します：</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>サーバーへの過度な負荷をかける行為</li>
              <li>他のユーザーへの迷惑行為</li>
              <li>不正アクセスやハッキング行為</li>
              <li>虚偽の情報を登録・投稿する行為</li>
              <li>知的財産権を侵害する行為</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">3.4 サービスの変更・中断</h3>
            <p className="text-gray-600 mb-2">当社は、以下の場合、事前の通知なくサービスを変更・中断することがあります：</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>システムのメンテナンス</li>
              <li>不可抗力による障害</li>
              <li>その他運営上必要な場合</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">3.5 免責事項</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>本サービスの利用によって生じた損害について、当社は一切責任を負いません</li>
              <li>本サービスで提供される情報の正確性・完全性を保証しません</li>
              <li>本サービスが常に利用可能であることを保証しません</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-600 mb-3">3.6 VirtualMoneyについて</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>VirtualMoneyは仮想通貨であり、法定通貨ではありません</li>
              <li>VirtualMoneyの価値は保証されません</li>
              <li>VirtualMoneyの換金はサービス内でのみ可能です</li>
              <li>アカウント削除時、保有するVirtualMoneyは失効します</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. 本規約の変更</h2>
          <p className="text-gray-600 leading-relaxed">
            当社は、必要に応じて本規約を変更することがあります。変更後の規約は、本サービス上で公表した時点から効力を生じるものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. 準拠法・管轄裁判所</h2>
          <p className="text-gray-600 leading-relaxed">
            本規約は日本法に準拠し、本規約に関する紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>

        <div className="bg-gray-100 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">お問い合わせ</h2>
          <p className="text-gray-600 mb-2">本規約に関するお問い合わせは、以下までご連絡ください：</p>
          <p className="text-gray-600">メール: support@virtualmoney.example.com</p>
        </div>
      </div>
    </div>
  )
}