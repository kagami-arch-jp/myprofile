[English](README.en.md) | [中文](README.md)

---

# 個人ポートフォリオサイト

React 19 ベースのサーバーサイドレンダリング（SSR）個人プロフィール・作品展示サイト。

## 技術スタック

- **フレームワーク**: React 19
- **言語**: TypeScript
- **バンドラー**: Webpack 5
- **サーバー**: SPTC
- **スタイル**: SCSS + PostCSS
- **状態管理**: react-cross-component-state
- **国際化**: カスタム i18n ソリューション

## プロジェクト構造

```
├── src/                  # クライアントソース
│   ├── components/       # React コンポーネント
│   │   ├── Hero          # 自己紹介エリア
│   │   ├── TechModules   # 技術モジュール展示
│   │   ├── JourneyTimeline # 経歴タイムライン
│   │   ├── JapaneseLearning # 日本語学習展示
│   │   ├── OpenSourceShowcase # オープンソース作品展示
│   │   ├── ChallengeCards # チャレンジカード
│   │   └── Footer        # フッター
│   ├── i18n/             # 国際化
│   ├── hooks/            # カスタム Hooks
│   ├── store/            # 状態管理
│   └── utils/            # ユーティリティ関数
├── server/               # サーバーサイドソース
│   ├── application/      # サーバーサイドアプリケーションロジック
│   ├── conf/             # 設定ファイル
│   └── public/           # 静的リソース
└── build/                # Webpack 設定
```

## 環境要件

- Node.js v22+

## クイックスタート

```bash
# 依存関係をインストール
npm install

# 開発モード（ホットリロード対応）
npm run dev
# http://127.0.0.1:9090 にアクセス

# 本番ビルド
npm run build

# 本番環境で実行
npm run serve
```

## 機能

- サーバーサイドレンダリング（SSR）とクライアントハイドレーション
- プログレッシブエンハンスメント対応
- レスポンシブデザイン、モバイル対応
- マウス追従光効果とスクロールプログレスバー
- 国際化対応（中/日/英）
- スムーズなアニメーションとトランジション効果
