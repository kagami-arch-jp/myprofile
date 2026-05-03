import type {I18nProfileData} from '@/types/profile'
export const profile: I18nProfileData = {
  hero: {
    nameDisplay: '陈闻高 / チン ブンコウ',
    subtitle: '前端工程师 · 10年以上经验 · 上海 → 大阪',
    backgroundKeywords: [
      'hydrateRoot',
      '观察者模式',
      'webpack 插件',
      '状態管理',
      'モノレポ',
      'FCP',
      'TBT',
      'TTI',
      '高内聚低耦合'
    ],
    ctaText: '向下滚动探索'
  },

  techModules: {
    title: '技术栈',
    cards: [
      {
        id: 'react',
        name: 'React 19',
        icon: '⚛️',
        description: '最新 React 生态、Hooks、并发特性',
        size: 'large'
      },
      {
        id: 'ssr',
        name: 'SSR 架构',
        icon: '🔀',
        description: '服务端渲染与水合、VM 沙箱隔离、CSR 降级容灾',
        size: 'wide'
      },
      {
        id: 'webpack',
        name: 'Webpack 5',
        icon: '📦',
        description: '客户端/服务端双重构建、插件框架开发、代码分割',
        size: 'medium'
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        icon: '🟢',
        description: '服务端运行时、构建工具链、脚本开发',
        size: 'small'
      },
      {
        id: 'rcc-state',
        name: 'react-cross-component-state',
        icon: '📡',
        description: '自研 npm 包，观察者模式 + Hooks，轻量级跨组件状态共享',
        size: 'wide'
      },
      {
        id: 'php',
        name: 'PHP',
        icon: '🐘',
        description: '后端 API 开发、CMS 系统',
        size: 'small'
      },
      {
        id: 'go',
        name: 'Go',
        icon: '🔵',
        description: 'API 服务、高性能后端',
        size: 'small'
      },
      {
        id: 'perf',
        name: '性能优化',
        icon: '⚡',
        description: 'Core Web Vitals: FCP、TBT、TTI 优化，懒加载，代码分割',
        size: 'medium'
      },
      {
        id: 'bash',
        name: 'Bash',
        icon: '🖥️',
        description: 'Shell 脚本、CI/CD 自动化、部署流水线',
        size: 'small'
      },
      {
        id: 'python',
        name: 'Python',
        icon: '🐍',
        description: '数据处理、脚本编写、AI/ML 原型开发',
        size: 'small'
      },
      {
        id: 'tensorflow',
        name: 'TensorFlow.js',
        icon: '🧠',
        description: '浏览器端 ML 推理、设备端 AI',
        size: 'small'
      },
      {
        id: 'vbscript',
        name: 'VBScript',
        icon: '📜',
        description: 'Windows 自动化遗留脚本、早期脚本经验',
        size: 'small'
      }
    ]
  },

  openSourceShowcase: {
    title: '开源项目展示',
    description: '展示我开发的两个开源项目：轻量级跨组件状态库和PHP-like模板引擎',
    sptcMoreFeatures: 'SPTC 还有更多功能：模板语法、HTTP 服务器、异步控制、宏预处理、文件包含等',
    sptcViewDocs: '查看完整文档',
  },

  japaneseLearning: {
    title: '日语学习历程',
    scoreLabel: '分数',
    milestones: [
      {
        id: 'start',
        period: '2023年12月',
        level: '零基础起步',
        description: '从零开始学习日语，制定系统的学习计划',
        details: [
          '选择适合自学者的教材和学习方法',
          '每天坚持学习假名、基础语法',
          '建立学习节奏和复习机制'
        ],
        isStart: true
      },
      {
        id: 'n3',
        period: '2024年12月',
        level: 'JLPT N3 合格',
        score: 150,
        description: '经过一年学习，通过JLPT N3考试，获得150分',
        details: [
          '系统学习N3级别的语法和词汇',
          '大量练习听力和阅读理解',
          '参加模拟考试，熟悉考试形式'
        ]
      },
      {
        id: 'n2',
        period: '2025年7月',
        level: 'JLPT N2 合格',
        score: 155,
        description: '在N3通过后仅7个月，通过JLPT N2考试，获得155分',
        details: [
          '强化商务日语和高级语法',
          '提升阅读速度和听力理解能力',
          '针对N2考试特点进行专项训练'
        ]
      },
      {
        id: 'n1',
        period: '2025年12月',
        level: 'JLPT N1 合格',
        description: '在N2通过后仅5个月，挑战并通过JLPT N1考试',
        details: [
          '攻克N1级别的高难度语法和词汇',
          '大量阅读日文原版材料和新闻',
          '强化听力和快速理解能力',
          '保持高效的学习节奏和复习策略'
        ],
        isN1: true
      },
      {
        id: 'continuing',
        period: '2026年 ~',
        level: '持续学习中',
        description: 'N1合格不是终点，日语学习仍在继续，不断提升语言运用能力',
        details: [
          '阅读日文技术文档和论文',
          '参与日语技术社区交流',
          '持续提升商务日语和表达能力'
        ]
      }
    ]
  },

  journeyTimeline: {
    title: '职业旅程',
    transitionNote: '从中国上海到日本东京 —— 新篇章的开启',
    nodes: [
      {
        id: 'yiban',
        period: '2015–2016',
        company: 'Shanghai Yiban',
        companyLocal: '上海易班发展中心有限公司',
        companyUrl: 'https://www.yiban.cn/',
        location: '中国·上海',
        role: '前端开发',
        tags: ['PHP', 'SeaJS', 'jQuery'],
        description: '职业生涯早期：PHP 开发、SeaJS 模块管理、jQuery 前端'
      },
      {
        id: 'linmi',
        period: '2016–2018',
        company: 'Shanghai Linmi Network Tech',
        companyLocal: '上海领米网络科技',
        location: '中国·上海',
        role: '全栈开发',
        tags: ['PHP', 'Go', 'API', 'CMS'],
        description: '全栈开发：PHP/Go API 服务、CMS 平台开发'
      },
      {
        id: 'jd',
        period: '2018–2025',
        company: 'JD.com',
        companyLocal: '京东',
        companyUrl: 'https://jd.com',
        location: '中国·上海',
        role: '高级前端工程师 / 团队负责人',
        tags: ['React', 'SSR', 'Webpack', 'Monorepo', '团队管理'],
        description: '带领排行榜频道前端团队。设计 Monorepo 架构，多个子项目复用公共组件。通过环境变量区分打包目标。完成 SSR 架构迁移，实现零水合失败。',
        architecture: {
          pattern: 'Monorepo',
          description: '大项目包含多个子项目，通过公共组件库共享代码',
          buildStrategy: '通过环境变量区分开发与发布时的打包目标'
        },
        badges: [
          {
            id: 'page-load',
            icon: '⏱️',
            label: '1秒页面加载',
            description: '京东排行榜频道加载时间优化至约1秒'
          },
          {
            id: 'daily-pv',
            icon: '📊',
            label: '日PV超100万',
            description: '日均百万级页面访问量'
          },
          {
            id: 'zero-incidents',
            icon: '🛡️',
            label: '零事故',
            description: '生产环境零白屏、零 SSR 水合失败'
          },
          {
            id: 'npm-package',
            icon: '📦',
            label: 'npm 包',
            description: '自研 react-cross-component-state 并发布到 npm'
          },
          {
            id: 'performance',
            icon: '🎯',
            label: 'FCP · TBT · TTI',
            description: '极致追求首屏渲染、总阻塞时间和交互时间三大核心指标'
          }
        ]
      },
      {
        id: 'japan',
        period: '2025–现在',
        company: 'FirstStudy日本語学校',
        companyLocal: 'ファーストスタディ日本語学校',
        location: '日本·大阪',
        role: '留学生 / 求职中',
        tags: ['在学中', '日本語', '求职活动'],
        description: '在大阪学习日语，积极寻找日本的前端工程师职位',
        isTransition: true,
        transitionIcon: '⛩️',
        transitionColor: '#FFB7C5'
      }
    ]
  },

  stateEngineDemo: {
    title: '状态架构实验室',
    description: '展示对 React 状态管理的深入理解和高度抽象能力',
    packageName: 'react-cross-component-state',
    packageUrl: 'https://github.com/kagami-arch-jp/react-cross-component-state/',
    architectureDiagram: {
      title: '观察者模式架构',
      nodes: [
        { id: 'observer', label: '观察者（中心枢纽）', type: 'hub' },
        { id: 'comp-a', label: '组件 A', type: 'component' },
        { id: 'comp-b', label: '组件 B', type: 'component' },
        { id: 'comp-c', label: '组件 C', type: 'component' },
        { id: 'comp-d', label: '组件 D', type: 'component' }
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
        title: '观察者模式 + React Hooks',
        description: '将状态同步从组件树中解耦'
      },
      {
        title: '跨组件共享',
        description: '无 Context API 重渲染开销，组件只订阅所需状态'
      },
      {
        title: '轻量级',
        description: '无 Redux/MobX 复杂度，API 简洁，易于接入'
      },
      {
        title: '发布到 npm',
        description: '可复用、版本管理、公开可用：react-cross-component-state'
      }
    ],
    demo: {
      scenarios: [
        {
          id: 'counter',
          name: '共享计数器',
          description: '3 个无父子关系的独立组件共享同一个计数器状态'
        },
        {
          id: 'theme',
          name: '共享主题选择器',
          description: '主题变更后所有订阅组件即时响应'
        }
      ],
      logFormat: '[{time}] {stateName}: {oldValue} → {newValue} (来自 {component})'
    }
  },

  ssrSolution: {
    title: '零改造成本 CSR → SSR 迁移方案',
    subtitle: '让前端代码无需调整即可适配SSR',
    background: '传统SSR迁移需要大量代码适配，容易在技改过程中引入bug',
    solution: '在Node.js运行时中实现浏览器window对象，作为服务端渲染的全局对象',
    advantage: '与其他团队需要区分SSR代码写法的方案相比，本方案规避了由于开发技改引入bug的可能',
    points: [
      { icon: '🔀', title: '零代码改动', description: '前端代码几乎无需调整即可适配SSR' },
      { icon: '🛡️', title: '避免bug', description: '规避因SSR特殊代码写法引入的bug' },
      { icon: '⚡', title: '降低开发成本', description: '后续开发过程无需为SSR场景调整代码' },
      { icon: '🎯', title: '无缝迁移', description: 'CSR到SSR的平滑迁移，最小化摩擦' }
    ]
  },

  challengeCards: {
    title: '实战案例',
    subtitle: '以 SSR 迁移思维解决的实际工程挑战',
    cards: [
      {
        id: 'ssr-hydration',
        icon: '⚡',
        challenge: 'SSR 水合失败导致白屏',
        challengeDetail: '京东排行榜频道 SSR 迁移过程中，偶发的水合不匹配导致生产环境完全白屏。传统 try-catch 无法隔离 VM 级别错误，存在整页崩溃风险。',
        solution: 'VM 沙箱隔离 + 1秒超时降级 CSR',
        solutionDetail: '使用 Node.js vm 模块为每个 SSR 渲染创建隔离执行上下文。增加 1 秒超时保护 —— 若 SSR 失败或超时，自动降级为客户端渲染，不影响用户体验。',
        techStack: ['Node.js vm', '错误边界', 'CSR 降级', '超时控制'],
        result: '生产环境 2 年+ 零白屏事故。SSR 成功率 99.9%，边缘情况无缝降级 CSR。',
        codeSnippet: 'try {\n  const html = pageVm.runInContext(ssrContext, { timeout: 1000 });\n} catch {\n  return renderCSR();\n}'
      },
      {
        id: 'monorepo-build',
        icon: '📦',
        challenge: 'Monorepo 子项目无法跨项目复用代码',
        challengeDetail: '京东排行榜频道演化为多个子项目（ranking、oldrank、活动页）共享公共组件库。但构建工具无法区分目标，导致配置冲突。',
        solution: '环境变量区分打包 + 公共组件按需复用',
        solutionDetail: '设计 Monorepo 架构，包含共享组件库。使用环境变量在编译时动态切换构建目标。每个子项目可独立指定构建环境（test/prod），同时复用同一套组件代码库。',
        techStack: ['Monorepo', 'Webpack 5', '环境变量', '公共库'],
        result: '重复代码减少 60%。构建时间提升 40%。三个子项目无缝共享 50+ 组件。',
        codeSnippet: 'npm run build -- project=ranking env=test\nnpm run build -- project=oldrank env=prod\n// 各项目复用同一套公共组件库'
      },
      {
        id: 'cross-component-state',
        icon: '🔗',
        challenge: '跨组件状态同步困难',
        challengeDetail: '多个无关联的 React 组件需要共享状态（如计数器、主题切换），但不存在父子关系。Redux 太重；Context API 导致整棵树不必要的重渲染。',
        solution: '自研观察者 + Hooks 状态库，发布 npm',
        solutionDetail: '基于观察者模式创建 react-cross-component-state。组件直接订阅特定状态键，绕过 React Context 树。纯 Hooks API，零样板代码。发布到 npm 供公开复用。',
        techStack: ['观察者模式', 'React Hooks', 'npm 包', 'TypeScript'],
        result: '包下载量 500+。零重渲染开销。仅 3KB gzipped。已在京东排行榜频道生产环境使用。',
        codeSnippet: "import { useSharedState } from 'react-cross-component-state';\nconst [count, setCount] = useSharedState('sharedCounter', 0);\n// 组件独立更新，无 Context 重渲染"
      },
      {
        id: 'code-coupling',
        icon: '🏗️',
        challenge: '代码耦合导致维护困难',
        challengeDetail: '随着排行榜频道支持多条业务线，组件高度耦合 —— 业务逻辑与 UI 混杂，状态管理分散，导致新功能开发缓慢且易出 bug。',
        solution: '高内聚低耦合：组件单一职责 + 状态与UI解耦 + 统一接口层',
        solutionDetail: '重构为三层架构：（1）纯业务逻辑的状态层，（2）纯渲染函数的 UI 层，（3）统一接口层用于通信。每个组件单一职责，依赖方向清晰。',
        techStack: ['分层架构', '单一职责', '接口抽象', '代码审查'],
        result: '维护成本降低 50%。新功能开发速度提升 2 倍。Bug 率下降 70%。团队将该模式采纳为标准。',
        codeSnippet: '// 高内聚：相关逻辑集中在状态层\n// 低耦合：UI 依赖接口，不依赖实现\nclass Component {\n  state = separateState();  // 纯业务逻辑\n  render = pureView(state); // 纯 UI，无副作用\n}'
      }
    ]
  },

  footer: {
    title: '连接已建立',
    terminalLines: [
      '> connection.init()',
      '> status: ready',
      '> location: 日本·大阪 🇯🇵',
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
        label: '邮箱',
      }
    }
  }
}

export default profile
