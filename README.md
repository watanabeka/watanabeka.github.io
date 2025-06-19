# アプリ紹介ページ（シンプル版）

このリポジトリは、GitHub Pagesを使用してアプリの紹介ページを公開するためのシンプルなテンプレートです。

## ディレクトリ構造

```
watanabeka.github.io/
├── app/
│   ├── page.tsx          # メインページ（サンプルアプリ）
│   ├── app1/
│   │   └── page.tsx      # アプリ1の紹介ページ
│   └── app2/
│       └── page.tsx      # アプリ2の紹介ページ
├── app-ads.txt           # AdMob設定ファイル（ルート）
└── README.md
```

## アクセスURL

- **メインページ**: https://watanabeka.github.io/
- **アプリ1**: https://watanabeka.github.io/app1/
- **アプリ2**: https://watanabeka.github.io/app2/
- **app-ads.txt**: https://watanabeka.github.io/app-ads.txt

## セットアップ手順

### 1. アプリ情報の設定

各アプリの `page.tsx` ファイルを編集して、アプリの情報を設定してください：

```typescript
// app/app1/page.tsx の例
<h1>アプリ1</h1>
<p>アプリ1の説明文をここに記載します。ストア掲載分をそのままコピペしてください。</p>
```

### 2. 新しいアプリの追加

新しいアプリを追加する場合：

1. `app/` ディレクトリに新しいフォルダを作成（例：`app3/`）
2. `page.tsx` ファイルを作成
3. 既存のテンプレートをコピーして内容を編集

### 3. AdMob設定

`app-ads.txt` ファイルを編集して、あなたのAdMob情報を設定してください：

```
google.com, pub-xxxxxxxxxxxxxxxx, DIRECT, f08c47fec0942fa0
```

### 4. デプロイ

```bash
npm run deploy
```

## 特徴

- **シンプルなテキストベース** - 画像なしで軽量
- **複数アプリ対応** - ディレクトリ分けで管理
- **AdMob対応** - app-ads.txtでルート配置
- **レスポンシブ** - モバイル・デスクトップ対応
- **SEO対応** - 検索エンジン最適化

## app-ads.txtについて

app-ads.txtはルートディレクトリ（`https://watanabeka.github.io/app-ads.txt`）に配置されているため、AdMobの審査に問題ありません。サブディレクトリにアプリを配置しても影響しません。

## マーケティングURL設定

各アプリのマーケティングURLには、それぞれのURLを設定してください：

- アプリ1: `https://watanabeka.github.io/app1/`
- アプリ2: `https://watanabeka.github.io/app2/`

## ライセンス

MIT License 