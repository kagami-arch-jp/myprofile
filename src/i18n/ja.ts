import type {I18nProfileData} from '@/types/profile'
export const profile: I18nProfileData = {
  hero: {
    nameDisplay: 'チン ブンコウ / CHEN WENGAO',
    subtitle: 'フロントエンドエンジニア · 10年以上の経験 · 上海 → 大阪',
    backgroundKeywords: [
      'hydrateRoot',
      'オブザーバーパターン',
      'webpack プラグイン',
      '状態管理',
      'モノレポ',
      'FCP',
      'TBT',
      'TTI',
      '高凝集低結合'
    ],
    ctaText: 'スクロールして見る'
  },

  techModules: {
    title: '技術スタック',
    cards: [
      {
        id: 'react',
        name: 'React 19',
        icon: '⚛️',
        description: '最新のReactエコシステム、Hooks、Concurrent Features',
        size: 'large'
      },
      {
        id: 'ssr',
        name: 'SSR アーキテクチャ',
        icon: '🔀',
        description: 'ハイドレーション付きSSR、VMサンドボックス分離、CSRフォールバック',
        size: 'wide'
      },
      {
        id: 'webpack',
        name: 'Webpack 5',
        icon: '📦',
        description: 'クライアント/サーバー二重ビルド、プラグインフレームワーク開発、コード分割',
        size: 'medium'
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        icon: '🟢',
        description: 'サーバーサイドランタイム、ビルドツール、スクリプト',
        size: 'small'
      },
      {
        id: 'rcc-state',
        name: 'react-cross-component-state',
        icon: '📡',
        description: '自作npmパッケージ、オブザーバーパターン + Hooks、軽量なクロスコンポーネント状態共有',
        size: 'wide'
      },
      {
        id: 'php',
        name: 'PHP',
        icon: '🐘',
        description: 'バックエンドAPI開発、CMSシステム',
        size: 'small'
      },
      {
        id: 'go',
        name: 'Go',
        icon: '🔵',
        description: 'APIサービス、ハイパフォーマンスバックエンド',
        size: 'small'
      },
      {
        id: 'perf',
        name: 'パフォーマンス最適化',
        icon: '⚡',
        description: 'Core Web Vitals: FCP、TBT、TTI最適化、遅延ロード、コード分割',
        size: 'medium'
      },
      {
        id: 'bash',
        name: 'Bash',
        icon: '🖥️',
        description: 'シェルスクリプト、CI/CD自動化、デプロイパイプライン',
        size: 'small'
      },
      {
        id: 'python',
        name: 'Python',
        icon: '🐍',
        description: 'データ処理、スクリプト、AI/MLプロトタイピング',
        size: 'small'
      },
      {
        id: 'tensorflow',
        name: 'TensorFlow.js',
        icon: '🧠',
        description: 'ブラウザ上でのML推論、オンデバイスAI',
        size: 'small'
      },
      {
        id: 'vbscript',
        name: 'VBScript',
        icon: '📜',
        description: 'レガシーWindows自動化、初期スクリプト経験',
        size: 'small'
      }
    ]
  },

  openSourceShowcase: {
    title: 'オープンソース・ショーケース',
    description: '自作の2つのオープンソースプロジェクト：軽量クロスコンポーネント状態ライブラリとPHPライクなテンプレートエンジン',
    sptcMoreFeatures: 'SPTCはさらに多機能：テンプレート構文、HTTPサーバー、非同期制御、マクロ前処理、ファイルインクルード等',
    sptcViewDocs: '完全なドキュメントを見る',
  },

  japaneseLearning: {
    title: '日本語学習の軌跡',
    scoreLabel: '点数',
    milestones: [
      {
        id: 'start',
        period: '2023年12月',
        level: 'ゼロからスタート',
        description: '日本語の学習をゼロから開始、体系的な学習計画を策定',
        details: [
          '独習者に適した教材と学習方法を選択',
          '毎日仮名、基礎文法を練習',
          '学習リズムと復習メカニズムを確立'
        ],
        isStart: true
      },
      {
        id: 'n3',
        period: '2024年12月',
        level: 'JLPT N3 合格',
        score: 150,
        description: '1年間の学習後、JLPT N3試験に150点で合格',
        details: [
          'N3レベルの文法と語彙を体系的に学習',
          'リスニングと読解の大量練習',
          '模擬試験を受験し、試験形式に慣れる'
        ]
      },
      {
        id: 'n2',
        period: '2025年7月',
        level: 'JLPT N2 合格',
        score: 155,
        description: 'N3合格からわずか7ヶ月で、JLPT N2試験に155点で合格',
        details: [
          'ビジネス日本語と上級文法を強化',
          '読解速度とリスニング理解力を向上',
          'N2試験の特徴に特化した対策訓練'
        ]
      },
      {
        id: 'n1',
        period: '2025年12月',
        level: 'JLPT N1 合格',
        description: 'N2合格からわずか5ヶ月で、JLPT N1試験に挑戦し合格',
        details: [
          'N1レベルの高難度文法と語彙を習得',
          '日本語のオリジナル材料とニュースを大量に読む',
          'リスニングと迅速な理解能力を強化',
          '効率的な学習ペースと復習戦略を維持'
        ],
        isN1: true
      },
      {
        id: 'continuing',
        period: '2026年 ~',
        level: '学習継続中',
        description: 'N1合格はゴールではない。日本語学習は継続中、言語運用能力を絶えず向上させる',
        details: [
          '日本語の技術文書や論文を読む',
          '日本語技術コミュニティで交流参加',
          'ビジネス日本語と表現力を絶えず向上'
        ]
      }
    ]
  },

  journeyTimeline: {
    title: 'キャリアログ',
    transitionNote: '中国・上海から日本・大阪へ — 新しい章の始まり',
    nodes: [
      {
        id: 'yiban',
        period: '2015–2016',
        company: 'Shanghai Yiban',
        companyLocal: '上海易班发展中心有限公司',
        companyUrl: 'https://www.yiban.cn/',
        location: '中国・上海',
        role: 'フロントエンド開発者',
        tags: ['PHP', 'SeaJS', 'jQuery'],
        description: 'キャリア初期：PHP開発、SeaJSモジュール管理、jQueryベースのフロントエンド'
      },
      {
        id: 'linmi',
        period: '2016–2018',
        company: 'Shanghai Linmi Network Tech',
        companyLocal: '上海领米网络科技',
        location: '中国・上海',
        role: 'フルスタック開発者',
        tags: ['PHP', 'Go', 'API', 'CMS'],
        description: 'フルスタック開発：PHP/Go APIサービス、CMSプラットフォーム開発'
      },
      {
        id: 'jd',
        period: '2018–2025',
        company: 'JD.com',
        companyLocal: '京东',
        companyUrl: 'https://jd.com',
        location: '中国・上海',
        role: 'シニアフロントエンドエンジニア / チームリーダー',
        tags: ['React', 'SSR', 'Webpack', 'Monorepo', 'チームリーダーシップ'],
        description: 'ランキングチャンネルプロジェクトのフロントエンドチームを率いる。複数のサブプロジェクトが共通コンポーネントを共有するモノレポを設計。環境変数でビルドターゲットを区別。SSRアーキテクチャへの移行でハイドレーション失敗ゼロを達成。',
        architecture: {
          pattern: 'Monorepo',
          description: '複数のサブプロジェクトを内包する大規模プロジェクト、共通コンポーネントライブラリで共有',
          buildStrategy: '開発・リリース時に環境変数でビルドターゲットを区別'
        },
        badges: [
          {
            id: 'page-load',
            icon: '⏱️',
            label: '1秒ページロード',
            description: 'JDランキングチャンネルのロード時間を約1秒に最適化'
          },
          {
            id: 'daily-pv',
            icon: '📊',
            label: '1日100万PV以上',
            description: '100万を超える日次ページビュー'
          },
          {
            id: 'zero-incidents',
            icon: '🛡️',
            label: 'インシデントゼロ',
            description: '本番環境でホワイトスクリーン・SSRハイドレーション失敗ゼロ'
          },
          {
            id: 'npm-package',
            icon: '📦',
            label: 'npmパッケージ',
            description: 'react-cross-component-stateを自作しnpmに公開'
          },
          {
            id: 'performance',
            icon: '🎯',
            label: 'FCP · TBT · TTI',
            description: 'First Contentful Paint、Total Blocking Time、Time to Interactiveを徹底追求'
          }
        ]
      },
      {
        id: 'japan',
        period: '2025–現在',
        company: 'FirstStudy日本語学校',
        companyLocal: 'ファーストスタディ日本語学校',
        location: '日本・大阪',
        role: '留学生 / 就職活動中',
        tags: ['在学中', '日本語', '就職活動'],
        description: '大阪で日本語を学びながら、日本のフロントエンドエンジニアの求人を探しています',
        isTransition: true,
        transitionIcon: '⛩️',
        transitionColor: '#FFB7C5'
      }
    ]
  },

  stateEngineDemo: {
    title: '状態アーキテクチャラボ',
    description: 'React状態管理の深い理解と高度な抽象化能力の実演',
    packageName: 'react-cross-component-state',
    packageUrl: 'https://github.com/kagami-arch-jp/react-cross-component-state/',
    architectureDiagram: {
      title: 'オブザーバーパターンアーキテクチャ',
      nodes: [
        { id: 'observer', label: 'オブザーバー（中心ハブ）', type: 'hub' },
        { id: 'comp-a', label: 'コンポーネントA', type: 'component' },
        { id: 'comp-b', label: 'コンポーネントB', type: 'component' },
        { id: 'comp-c', label: 'コンポーネントC', type: 'component' },
        { id: 'comp-d', label: 'コンポーネントD', type: 'component' }
      ],
      connections: [
        { from: 'comp-a', to: 'observer' },
        { from: 'comp-b', to: 'observer' },
        { from: 'comp-c', to: 'observer' },
        { from: 'comp-d', to: 'observer' }
      ]
    },
    designPrinciples: [
      {
        title: 'オブザーバーパターン + React Hooks',
        description: '状態の同期をコンポーネントツリーから分離'
      },
      {
        title: 'クロスコンポーネント共有',
        description: 'Context APIの再レンダリングオーバーヘッドなし、必要な状態だけを購読'
      },
      {
        title: '軽量',
        description: 'Redux/MobXの複雑さなし、最小限のAPI、導入が容易'
      },
      {
        title: 'npm公開',
        description: '再利用可能、バージョン管理済み、公開済み：react-cross-component-state'
      }
    ],
    demo: {
      scenarios: [
        {
          id: 'counter',
          name: '共有カウンター',
          description: '親子関係のない3つの独立コンポーネントがカウンタ状態を共有'
        },
        {
          id: 'theme',
          name: '共有テーマセレクタ',
          description: 'テーマ変更がすべての購読コンポーネントに即座に反映'
        }
      ],
      logFormat: '[{time}] {stateName}: {oldValue} → {newValue} ({component}から)'
    }
  },

  ssrSolution: {
    title: 'ゼロ改修 CSR → SSR 移行ソリューション',
    subtitle: 'フロントエンドコードを変更せずにSSRに対応',
    background: '従来のSSR移行では大量のコード修正が必要で、技術移行プロセスでバグが発生しやすい',
    solution: 'Node.jsランタイムでブラウザのwindowオブジェクトを実装し、サーバーサイドレンダリングのグローバルオブジェクトとして使用',
    advantage: 'SSR用のコード記述が必要な他チームの方式と比較して、開発技術変更によるバグ導入の可能性を回避',
    points: [
      { icon: '🔀', title: 'ゼロコード変更', description: 'フロントエンドコードはほぼ修正なしでSSRに対応可能' },
      { icon: '🛡️', title: 'バグ防止', description: 'SSR特有のコード記述によるバグを回避' },
      { icon: '⚡', title: '開発コスト削減', description: 'その後の開発プロセスでSSR用のコード調整が不要' },
      { icon: '🎯', title: 'シームレス移行', description: 'CSRからSSRへの摩擦を最小化した移行' }
    ]
  },

  challengeCards: {
    title: '実戦ケース',
    subtitle: 'SSR移行の思考様式で解決した実践的エンジニアリング課題',
    cards: [
      {
        id: 'ssr-hydration',
        icon: '⚡',
        challenge: 'SSRハイドレーション失敗によるホワイトスクリーン',
        challengeDetail: 'JD.comランキングチャンネルのSSR移行中、偶発的なハイドレーション不一致により本番環境で完全なホワイトスクリーンが発生。従来のtry-catchではVMレベルのエラーを分離できず、フルページクラッシュのリスクがあった。',
        solution: 'VMサンドボックス分離 + 1秒タイムアウトでCSRにフォールバック',
        solutionDetail: 'Node.js vmモジュールを使用して各SSRレンダリングに隔離された実行コンテキストを作成。1秒のタイムアウト保護を追加 —— SSRが失敗またはタイムアウトした場合、自動的にクライアントサイドレンダリングにフォールバックし、ユーザー体験に影響しない。',
        techStack: ['Node.js vm', 'エラー境界', 'CSRフォールバック', 'タイムアウト制御'],
        result: '本番環境2年+でゼロ白屏事故。99.9%のSSR成功率、エッジケースでもシームレスなCSRフォールバック。',
        codeSnippet: 'try {\n  const html = pageVm.runInContext(ssrContext, { timeout: 1000 });\n} catch {\n  return renderCSR();\n}'
      },
      {
        id: 'monorepo-build',
        icon: '📦',
        challenge: 'モノレポ内のサブプロジェクト間でコード共有が不可能',
        challengeDetail: 'JDランキングチャンネルは複数のサブプロジェクト（ranking、oldrank、活動ページ）に進化し、共通コンポーネントライブラリを共有。しかしビルドツールがターゲットを区別できず、設定の競合が発生。',
        solution: '環境変数でビルドターゲットを区別 + 共通コンポーネントをオンデマンドで再利用',
        solutionDetail: '共有コンポーネントライブラリを備えたモノレポアーキテクチャを設計。環境変数を使用してコンパイル時にビルドターゲットを動的に切り替え。各サブプロジェクトはビルド環境（test/prod）を個別に指定しながら、同じコンポーネントコードベースを再利用可能。',
        techStack: ['Monorepo', 'Webpack 5', 'ENV変数', '共有ライブラリ'],
        result: '重複コードを60%削減。ビルド時間を40%改善。3つのサブプロジェクトが50+コンポーネントをシームレスに共有。',
        codeSnippet: 'npm run build -- project=ranking env=test\nnpm run build -- project=oldrank env=prod\n// 各プロジェクトが同一の共有コンポーネントライブラリを再利用'
      },
      {
        id: 'cross-component-state',
        icon: '🔗',
        challenge: 'クロスコンポーネント状態の同期が困難',
        challengeDetail: '複数の無関係なReactコンポーネントが状態を共有（カウンター、テーマ切替など）する必要があったが、親子関係がない。Reduxは重すぎる。Context APIはツリー全体の不要な再レンダリングを引き起こす。',
        solution: '自作オブザーバー + Hooks状態ライブラリ、npm公開',
        solutionDetail: 'オブザーバーパターンを使用してreact-cross-component-stateを作成。コンポーネントはReactのContextツリーをバイパスして、特定の状態キーを直接購読。純粋なHooks APIでゼロボイラープレート。npmに公開して公開再利用を実現。',
        techStack: ['オブザーバーパターン', 'React Hooks', 'npmパッケージ', 'TypeScript'],
        result: 'パッケージ500+ダウンロード。ゼロ再レンダリングオーバーヘッド。3KB gzipped。JD.comランキングチャンネルの本番環境で使用中。',
        codeSnippet: "import { useSharedState } from 'react-cross-component-state';\nconst [count, setCount] = useSharedState('sharedCounter', 0);\n// コンポーネントは独立して更新、Context再レンダリングなし"
      },
      {
        id: 'code-coupling',
        icon: '🏗️',
        challenge: 'コードの結合度が高くメンテナンスが困難',
        challengeDetail: 'ランキングチャンネルが複数のビジネスラインをサポートするようになるにつれ、コンポーネントが高度に結合 —— ビジネスロジックとUIが混在、状態管理が分散し、新機能開発が遅くバグが発生しやすい。',
        solution: '高凝集低結合：単一責任 + 状態とUIの分離 + 統一インターフェース層',
        solutionDetail: '3層アーキテクチャにリファクタリング：（1）純粋なビジネスロジックの状態層、（2）純粋なレンダリング関数のUI層、（3）通信のための統一インターフェース層。各コンポーネントは単一責任を持ち、依存関係の方向が明確。',
        techStack: ['階層アーキテクチャ', '単一責任', 'インターフェース抽象化', 'コードレビュー'],
        result: 'メンテナンスコストを50%削減。新機能開発速度を2倍に向上。バグ率を70%低下。チームがこのパターンを標準として採用。',
        codeSnippet: '// 高凝集：関連ロジックを状態層に集中\n// 低結合：UIはインターフェースに依存、実装には依存しない\nclass Component {\n  state = separateState();  // 純粋なビジネスロジック\n  render = pureView(state); // 純粋なUI、副作用なし\n}'
      }
    ]
  },

  footer: {
    title: '接続完了',
    terminalLines: [
      '> connection.init()',
      '> status: ready',
      '> location: 日本・大阪 🇯🇵',
      '> seeking: フロントエンドエンジニア求人',
      '> waiting_for_input...'
    ],
    contact: {
      github: {
        url: 'https://github.com/kagami-arch-jp',
        label: 'GitHub'
      },
      email: {
        address: 'jejdkaa12@gmail.com',
        label: 'メール'
      }
    }
  }
}

export default profile
