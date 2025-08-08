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

**重要**: このプロジェクトは `main` ブランチと `gh-pages` ブランチの両方を使用しています。

## 🚀 新しいアプリを追加して公開する手順

### 1. アプリページの作成（mainブランチ）

```bash
# 1. 新しいアプリのディレクトリを作成
mkdir app/your-app-name

# 2. page.tsxとlayout.tsxを作成
# app/your-app-name/page.tsx - アプリのコンテンツ
# app/your-app-name/layout.tsx - メタデータ（タイトル、説明）
```

### 2. ビルドの実行

```bash
# Next.jsのビルドを実行
npm run build

# ビルドが成功したか確認
ls out/your-app-name/
# index.html と index.txt が生成されているはずです
```

### 3. 静的ファイルをルートにコピー

```bash
# outディレクトリの内容をルートにコピー
cp -r out/* .
```

### 4. mainブランチにコミット・プッシュ

```bash
# 変更をステージング
git add -A

# コミット
git commit -m "Add your-app-name page"

# mainブランチにプッシュ
git push origin main
```

### 5. gh-pagesブランチの更新

```bash
# 変更を一時保存
git stash

# gh-pagesブランチに切り替え
git checkout gh-pages

# mainブランチから必要なファイルを取得
git checkout main -- your-app-name _next/static

# 追加・コミット・プッシュ
git add -A
git commit -m "Add your-app-name page to gh-pages"
git push origin gh-pages

# mainブランチに戻る
git checkout main

# 一時保存した変更を復元（必要な場合）
git stash pop
```

### 6. 公開の確認

- 数分待ってから `https://watanabeka.github.io/your-app-name/` にアクセス
- 404エラーが表示される場合は、キャッシュをクリアして再度アクセス

## トラブルシューティング

### ページが404になる場合

1. gh-pagesブランチに必要なファイルがあるか確認：
```bash
git checkout gh-pages
ls your-app-name/
# index.html が存在するか確認
```

2. 静的アセット（CSS/JS）が正しくコピーされているか確認：
```bash
ls _next/static/
# 必要なファイルが存在するか確認
```

### ビルドIDの不一致エラー

mainブランチとgh-pagesブランチでビルドIDが異なる場合があります。その場合：

```bash
# gh-pagesブランチで
git checkout main -- _next/static/[新しいビルドID]
```

### .nojekyllファイルの確認

ルートディレクトリに `.nojekyll` ファイルがあることを確認してください。これがないと `_next` ディレクトリが正しく配信されません。

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