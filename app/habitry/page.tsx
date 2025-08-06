export default function Habitry() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>Habitry - 習慣管理アプリ</h1>
      <h2 style={{ fontSize: '1.3em', marginBottom: '30px', color: '#555' }}>シンプルで使いやすい習慣管理アプリ</h2>

      <h2 style={{ fontSize: '1.5em', marginTop: '40px', marginBottom: '20px' }}>プライバシーポリシー</h2>
      <p style={{ marginBottom: '10px' }}>最終更新日: 2025年8月1日</p>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>はじめに</h3>
      <p style={{ marginBottom: '20px' }}>
        本プライバシーポリシーは、Habitry（以下、「本アプリ」）におけるユーザー情報の取り扱いについて説明するものです。
      </p>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>収集する情報</h3>
      <h4 style={{ fontSize: '1.1em', marginTop: '20px', marginBottom: '10px' }}>1. ユーザーが直接提供する情報</h4>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li><strong>習慣データ</strong>: 習慣の名前、カテゴリ、頻度、達成状況</li>
        <li><strong>カテゴリ情報</strong>: ユーザーが作成したカスタムカテゴリ</li>
      </ul>

      <h4 style={{ fontSize: '1.1em', marginTop: '20px', marginBottom: '10px' }}>2. 自動的に収集される情報</h4>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li><strong>使用状況データ</strong>: アプリのクラッシュレポート（匿名化されたもの）</li>
        <li><strong>デバイス情報</strong>: デバイスの種類、OSバージョン（診断目的のみ）</li>
      </ul>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>情報の利用目的</h3>
      <p style={{ marginBottom: '10px' }}>収集した情報は以下の目的で利用します：</p>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>アプリの基本機能の提供</li>
        <li>ユーザーエクスペリエンスの向上</li>
        <li>アプリの不具合修正と改善</li>
        <li>カスタマーサポートの提供</li>
      </ul>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>情報の保存と管理</h3>
      <h4 style={{ fontSize: '1.1em', marginTop: '20px', marginBottom: '10px' }}>データの保存場所</h4>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li><strong>ローカルストレージ</strong>: すべての習慣データはユーザーのデバイスに保存されます</li>
        <li><strong>iCloudバックアップ</strong>: プレミアムユーザーのデータは、ユーザー自身のiCloudアカウントに保存されます</li>
      </ul>

      <h4 style={{ fontSize: '1.1em', marginTop: '20px', marginBottom: '10px' }}>データのセキュリティ</h4>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>すべてのデータは暗号化された状態で保存されます</li>
        <li>iCloudバックアップはAppleのセキュリティ基準に準拠します</li>
      </ul>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第三者への情報提供</h3>
      <p style={{ marginBottom: '10px' }}>当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません：</p>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>ユーザーの同意がある場合</li>
        <li>法令に基づく開示請求があった場合</li>
      </ul>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>広告について</h3>
      <p style={{ marginBottom: '10px' }}>本アプリでは、Google AdMobを使用して広告を表示しています（無料版のみ）。</p>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>AdMobは独自のプライバシーポリシーに基づいて動作します</li>
        <li>広告のパーソナライズのために、広告識別子が使用される場合があります</li>
        <li>プレミアムプランでは、すべての広告が非表示になります</li>
      </ul>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>子供のプライバシー</h3>
      <p style={{ marginBottom: '20px' }}>
        本アプリは13歳未満の子供を対象としていません。13歳未満の子供から意図的に個人情報を収集することはありません。
      </p>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>ユーザーの権利</h3>
      <p style={{ marginBottom: '10px' }}>ユーザーは以下の権利を有します：</p>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li><strong>データへのアクセス</strong>: 自身のデータにいつでもアクセスできます</li>
        <li><strong>データの削除</strong>: アプリ内からすべてのデータを削除できます</li>
        <li><strong>データのエクスポート</strong>: CSVファイルとしてデータをエクスポートできます（プレミアム機能）</li>
      </ul>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>プライバシーポリシーの変更</h3>
      <p style={{ marginBottom: '20px' }}>
        本プライバシーポリシーは、必要に応じて更新される場合があります。重要な変更がある場合は、アプリ内でお知らせします。
      </p>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>お問い合わせ</h3>
      <p style={{ marginBottom: '40px' }}>
        プライバシーポリシーについてのご質問やご不明点がある場合は、以下の連絡先までお問い合わせください。<br/>
        <a href="mailto:wtnbkisi@gmail.com">wtnbkisi@gmail.com</a>
      </p>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #ccc' }} />

      <h2 style={{ fontSize: '1.5em', marginTop: '40px', marginBottom: '20px' }}>利用規約</h2>
      <p style={{ marginBottom: '20px' }}>最終更新日: 2025年8月1日</p>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第1条（適用）</h3>
      <ol style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>本規約は、Habitry（以下、「本サービス」）の利用条件を定めるものです。</li>
        <li>ユーザーは、本サービスを利用することで、本規約に同意したものとみなされます。</li>
      </ol>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第2条（定義）</h3>
      <p style={{ marginBottom: '10px' }}>本規約において使用する用語の定義は以下のとおりです：</p>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>「当社」: 本サービスの提供者</li>
        <li>「ユーザー」: 本サービスを利用する個人</li>
        <li>「コンテンツ」: ユーザーが本サービスに記録するデータ</li>
      </ul>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第3条（サービスの利用）</h3>
      <ol style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>ユーザーは、本規約に従って本サービスを利用するものとします。</li>
        <li>ユーザーは、自己の責任において本サービスを利用するものとします。</li>
        <li>ユーザーは、本サービスの利用に必要な機器、通信手段等を自己の責任で準備するものとします。</li>
      </ol>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第4条（アカウント管理）</h3>
      <ol style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>ユーザーは、自己のデータの管理について一切の責任を負います。</li>
        <li>iCloudバックアップ機能を利用する場合、Appleの利用規約も適用されます。</li>
        <li>ユーザーは、第三者に自己のデータを利用させてはなりません。</li>
      </ol>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第5条（プレミアムプラン）</h3>
      <ol style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>プレミアムプランは月額サブスクリプション形式で提供されます。</li>
        <li>プレミアムプランの料金は、予告なく変更される場合があります。</li>
        <li>サブスクリプションの更新と解約は、Appleの規約に従って処理されます。</li>
        <li>返金については、Appleの返金ポリシーに準拠します。</li>
      </ol>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第6条（禁止事項）</h3>
      <p style={{ marginBottom: '10px' }}>ユーザーは、以下の行為を行ってはなりません：</p>
      <ol style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>法令または公序良俗に違反する行為</li>
        <li>本サービスの運営を妨害する行為</li>
        <li>他のユーザーに迷惑をかける行為</li>
        <li>本サービスを不正に利用する行為</li>
        <li>リバースエンジニアリング等の解析行為</li>
      </ol>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第7条（知的財産権）</h3>
      <ol style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>本サービスに関する知的財産権は、当社に帰属します。</li>
        <li>ユーザーが記録したコンテンツの著作権は、ユーザーに帰属します。</li>
      </ol>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第8条（サービスの変更・終了）</h3>
      <ol style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>当社は、ユーザーへの事前通知なく、本サービスの内容を変更できるものとします。</li>
        <li>当社は、30日前の通知をもって、本サービスの提供を終了できるものとします。</li>
        <li>サービス終了時、ユーザーは自己の責任でデータをエクスポートするものとします。</li>
      </ol>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第9条（免責事項）</h3>
      <ol style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>当社は、本サービスの利用によりユーザーに生じた損害について、一切の責任を負いません。</li>
        <li>当社は、本サービスの中断、停止、終了、変更によりユーザーに生じた損害について、責任を負いません。</li>
        <li>当社は、ユーザーのデータの消失、破損について、責任を負いません。</li>
      </ol>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第10条（個人情報の取扱い）</h3>
      <p style={{ marginBottom: '20px' }}>
        個人情報の取扱いについては、別途定めるプライバシーポリシーに従うものとします。
      </p>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第11条（準拠法・管轄裁判所）</h3>
      <ol style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>本規約は、日本法に準拠して解釈されるものとします。</li>
        <li>本サービスに関して生じた紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
      </ol>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第12条（規約の変更）</h3>
      <ol style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li>当社は、必要と判断した場合、ユーザーの同意を得ることなく本規約を変更できるものとします。</li>
        <li>変更後の規約は、アプリ内で通知した時点から効力を生じるものとします。</li>
      </ol>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第13条（分離可能性）</h3>
      <p style={{ marginBottom: '20px' }}>
        本規約のいずれかの条項が無効または執行不能と判断された場合でも、残りの条項は引き続き有効とします。
      </p>

      <h3 style={{ fontSize: '1.2em', marginTop: '25px', marginBottom: '15px' }}>第14条（完全合意）</h3>
      <p style={{ marginBottom: '40px' }}>
        本規約は、本サービスに関する当社とユーザー間の完全な合意を構成し、本サービスに関する従前の合意に優先します。
      </p>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #ccc' }} />

      <p style={{ textAlign: 'center', color: '#666', marginTop: '40px' }}>
        © 2025 Habitry. All rights reserved.
      </p>
    </div>
  );
}