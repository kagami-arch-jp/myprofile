import type {I18nProfileData} from '@/types/profile'
export const profile: I18nProfileData = {
  hero: {
    nameDisplay: 'CHEN WENGAO / チン ブンコウ',
    subtitle: 'Frontend Engineer · 10+ Years · Shanghai → Osaka',
    backgroundKeywords: [
      'hydrateRoot',
      'observer pattern',
      'webpack plugin',
      '状態管理',
      'モノレポ',
      'FCP',
      'TBT',
      'TTI',
      '高内聚低耦合'
    ],
    ctaText: 'Scroll to explore'
  },

  techModules: {
    title: 'Tech Stack',
    cards: [
      {
        id: 'react',
        name: 'React 19',
        icon: '⚛️',
        description: 'Latest React ecosystem, Hooks, Concurrent Features',
        size: 'large'
      },
      {
        id: 'ssr',
        name: 'SSR Architecture',
        icon: '🔀',
        description: 'Server-Side Rendering with hydration, VM sandbox isolation, CSR fallback',
        size: 'wide'
      },
      {
        id: 'webpack',
        name: 'Webpack 5',
        icon: '📦',
        description: 'Dual compilation (client/server), plugin framework development, code splitting',
        size: 'medium'
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        icon: '🟢',
        description: 'Server-side runtime, build tooling, scripting',
        size: 'small'
      },
      {
        id: 'rcc-state',
        name: 'react-cross-component-state',
        icon: '📡',
        description: 'Self-built npm package, Observer Pattern + Hooks, lightweight cross-component state sharing',
        size: 'wide'
      },
      {
        id: 'php',
        name: 'PHP',
        icon: '🐘',
        description: 'Backend API development, CMS systems',
        size: 'small'
      },
      {
        id: 'go',
        name: 'Go',
        icon: '🔵',
        description: 'API services, high-performance backend',
        size: 'small'
      },
      {
        id: 'perf',
        name: 'Performance Optimization',
        icon: '⚡',
        description: 'Core Web Vitals: FCP, TBT, TTI optimization, lazy loading, code splitting',
        size: 'medium'
      },
      {
        id: 'bash',
        name: 'Bash',
        icon: '🖥️',
        description: 'Shell scripting, CI/CD automation, deployment pipelines',
        size: 'small'
      },
      {
        id: 'python',
        name: 'Python',
        icon: '🐍',
        description: 'Data processing, scripting, AI/ML prototyping',
        size: 'small'
      },
      {
        id: 'tensorflow',
        name: 'TensorFlow.js',
        icon: '🧠',
        description: 'Browser-based ML inference, on-device AI',
        size: 'small'
      },
      {
        id: 'vbscript',
        name: 'VBScript',
        icon: '📜',
        description: 'Legacy Windows automation, early scripting experience',
        size: 'small'
      }
    ]
  },

  openSourceShowcase: {
    title: 'Open Source Showcase',
    description: 'Showcasing two open-source projects I built: a lightweight cross-component state library and a PHP-like template engine',
    sptcMoreFeatures: 'SPTC has more features: template syntax, HTTP server, async control, macro preprocessing, file includes, and more',
    sptcViewDocs: 'View full documentation',
  },

  japaneseLearning: {
    title: 'Japanese Learning Journey',
    scoreLabel: 'Score',
    milestones: [
      {
        id: 'start',
        period: 'Dec 2023',
        level: 'Zero to Start',
        description: 'Started learning Japanese from zero, established systematic study plan',
        details: [
          'Selected suitable textbooks and learning methods for self-study',
          'Daily practice of kana, basic grammar',
          'Established study rhythm and review mechanism'
        ],
        isStart: true
      },
      {
        id: 'n3',
        period: 'Dec 2024',
        level: 'JLPT N3 Passed',
        score: 150,
        description: 'After one year of study, passed JLPT N3 with score 150',
        details: [
          'Systematically learned N3 level grammar and vocabulary',
          'Extensive listening and reading comprehension practice',
          'Took mock exams to familiarize with test format'
        ]
      },
      {
        id: 'n2',
        period: 'Jul 2025',
        level: 'JLPT N2 Passed',
        score: 155,
        description: 'Only 7 months after N3, passed JLPT N2 with score 155',
        details: [
          'Strengthened business Japanese and advanced grammar',
          'Improved reading speed and listening comprehension',
          'Targeted training for N2 exam characteristics'
        ]
      },
      {
        id: 'n1',
        period: 'Dec 2025',
        level: 'JLPT N1 Passed',
        description: 'Only 5 months after N2, challenged and passed JLPT N1',
        details: [
          'Mastered N1 level high-difficulty grammar and vocabulary',
          'Extensive reading of Japanese original materials and news',
          'Enhanced listening and rapid comprehension skills',
          'Maintained efficient study pace and review strategy'
        ],
        isN1: true
      },
      {
        id: 'continuing',
        period: '2026 ~',
        level: 'Continuing Study',
        description: 'N1 is not the end. Japanese learning continues, constantly improving language proficiency',
        details: [
          'Reading Japanese technical docs and papers',
          'Participating in Japanese tech community discussions',
          'Continuously improving business Japanese and communication skills'
        ]
      }
    ]
  },

  journeyTimeline: {
    title: 'Journey Log',
    transitionNote: 'From Shanghai, China to Osaka, Japan — a new chapter begins',
    nodes: [
      {
        id: 'yiban',
        period: '2015–2016',
        company: 'Shanghai Yiban',
        companyLocal: '上海易班发展中心有限公司',
        companyUrl: 'https://www.yiban.cn/',
        location: 'Shanghai, China',
        role: 'Frontend Developer',
        tags: ['PHP', 'SeaJS', 'jQuery'],
        description: 'Early career: PHP development, SeaJS module management, jQuery-based frontend'
      },
      {
        id: 'linmi',
        period: '2016–2018',
        company: 'Shanghai Linmi Network Tech',
        companyLocal: '上海领米网络科技',
        location: 'Shanghai, China',
        role: 'Full Stack Developer',
        tags: ['PHP', 'Go', 'API', 'CMS'],
        description: 'Full stack development: PHP/Go API services, CMS platform development'
      },
      {
        id: 'jd',
        period: '2018–2025',
        company: 'JD.com',
        companyLocal: '京东',
        companyUrl: 'https://jd.com',
        location: 'Shanghai, China',
        role: 'Senior Frontend Engineer / Team Leader',
        tags: ['React', 'SSR', 'Webpack', 'Monorepo', 'Team Leadership'],
        description: 'Led frontend team for ranking channel projects. Architected Monorepo with multiple sub-projects sharing public components. Used environment variables to differentiate build targets. Migrated to SSR architecture with zero hydration failures.',
        architecture: {
          pattern: 'Monorepo',
          description: 'Large project wrapping multiple sub-projects with shared public component library',
          buildStrategy: 'Environment variables to distinguish build targets during development and release'
        },
        badges: [
          {
            id: 'page-load',
            icon: '⏱️',
            label: '1s Page Load',
            description: 'Optimized JD ranking channel load time to ~1 second'
          },
          {
            id: 'daily-pv',
            icon: '📊',
            label: '1M+ Daily PV',
            description: 'Daily page views exceeding one million'
          },
          {
            id: 'zero-incidents',
            icon: '🛡️',
            label: 'Zero Incidents',
            description: 'Zero white screens, zero SSR hydration failures in production'
          },
          {
            id: 'npm-package',
            icon: '📦',
            label: 'npm Package',
            description: 'Authored react-cross-component-state, published to npm'
          },
          {
            id: 'performance',
            icon: '🎯',
            label: 'FCP · TBT · TTI',
            description: 'Relentless focus on First Contentful Paint, Total Blocking Time, and Time to Interactive'
          }
        ]
      },
      {
        id: 'japan',
        period: '2025–Now',
        company: 'FirstStudy Japanese Language School',
        companyLocal: 'ファーストスタディ日本語学校',
        location: 'Osaka, Japan',
        role: 'International Student / Job Seeker',
        tags: ['在学中', '日本語', '求职活动'],
        description: 'Studying Japanese in Osaka, actively seeking frontend engineering opportunities in Japan',
        isTransition: true,
        transitionIcon: '⛩️',
        transitionColor: '#FFB7C5'
      }
    ]
  },

  stateEngineDemo: {
    title: 'State Architecture Lab',
    description: 'Demonstrating deep understanding of React state management and high-level abstraction capabilities',
    packageName: 'react-cross-component-state',
    packageUrl: 'https://github.com/kagami-arch-jp/react-cross-component-state/',
    architectureDiagram: {
      title: 'Observer Pattern Architecture',
      nodes: [
        { id: 'observer', label: 'Observer (Center Hub)', type: 'hub' },
        { id: 'comp-a', label: 'Component A', type: 'component' },
        { id: 'comp-b', label: 'Component B', type: 'component' },
        { id: 'comp-c', label: 'Component C', type: 'component' },
        { id: 'comp-d', label: 'Component D', type: 'component' }
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
        title: 'Observer Pattern + React Hooks',
        description: 'Decouples state synchronization from the component tree'
      },
      {
        title: 'Cross-Component Sharing',
        description: 'No Context API re-render overhead, components subscribe only to needed state'
      },
      {
        title: 'Lightweight',
        description: 'No Redux/MobX complexity, minimal API surface, easy to adopt'
      },
      {
        title: 'Published to npm',
        description: 'Reusable, versioned, and publicly available: react-cross-component-state'
      }
    ],
    demo: {
      scenarios: [
        {
          id: 'counter',
          name: 'Shared Counter',
          description: '3 independent components sharing a counter state without parent-child relationship'
        },
        {
          id: 'theme',
          name: 'Shared Theme Selector',
          description: 'Theme changes propagate across all subscribed components instantly'
        }
      ],
      logFormat: '[{time}] {stateName}: {oldValue} → {newValue} (triggered by {component})'
    }
  },

  ssrSolution: {
    title: 'Zero-Change CSR → SSR Migration',
    subtitle: 'Migrating CSR projects to SSR without code changes',
    background: 'Traditional SSR migration requires extensive code adaptation, easily introducing bugs during tech transformation',
    solution: 'Implemented browser window object in Node.js runtime as the global object for server-side rendering',
    advantage: 'Compared to other teams\' SSR patterns that require code adjustments, this solution avoids bugs introduced by development tech changes',
    points: [
      { icon: '🔀', title: 'Zero Code Change', description: 'Frontend code requires almost no adjustment to adapt to SSR' },
      { icon: '🛡️', title: 'Bug Prevention', description: 'Avoids bugs introduced by SSR-specific code patterns' },
      { icon: '⚡', title: 'Low Development Cost', description: 'Subsequent development requires no SSR-specific code adjustments' },
      { icon: '🎯', title: 'Seamless Migration', description: 'CSR to SSR migration with minimal friction' }
    ]
  },

  challengeCards: {
    title: 'Real-World Cases',
    subtitle: 'Practical challenges solved with SSR migration mindset',
    cards: [
      {
        id: 'ssr-hydration',
        icon: '⚡',
        challenge: 'SSR Hydration Failure Causing White Screen',
        challengeDetail: 'During JD.com ranking channel SSR migration, occasional hydration mismatches caused complete white screens in production. Traditional try-catch could not isolate VM-level errors, risking full page crashes.',
        solution: 'VM Sandbox Isolation + 1s Timeout Fallback to CSR',
        solutionDetail: 'Implemented Node.js vm module to create isolated execution context for each SSR render. Added 1-second timeout protection — if SSR fails or times out, automatically falls back to client-side rendering without affecting user experience.',
        techStack: ['Node.js vm', 'Error Boundaries', 'CSR Fallback', 'Timeout Control'],
        result: 'Zero white screen incidents in 2+ years of production. 99.9% SSR success rate with seamless CSR fallback for edge cases.',
        codeSnippet: 'try {\n  const html = pageVm.runInContext(ssrContext, { timeout: 1000 });\n} catch {\n  return renderCSR();\n}',
      },
      {
        id: 'monorepo-build',
        icon: '📦',
        challenge: 'Cross-Project Code Reuse Blocked in Monorepo',
        challengeDetail: 'JD ranking channel evolved into multiple sub-projects (ranking, oldrank, activity pages) sharing a common component library. But build tools could not differentiate targets, causing configuration conflicts.',
        solution: 'Environment Variables for Build Targets + On-demand Public Component Reuse',
        solutionDetail: 'Designed a Monorepo architecture with shared component library. Used environment variables to dynamically switch build targets at compile time. Each sub-project can independently specify its build environment (test/prod) while reusing the same component codebase.',
        techStack: ['Monorepo', 'Webpack 5', 'ENV Variables', 'Shared Lib'],
        result: 'Reduced duplicate code by 60%. Build time improved by 40%. Three sub-projects now share 50+ components seamlessly.',
        codeSnippet: 'npm run build -- project=ranking env=test\nnpm run build -- project=oldrank env=prod\n// Each project reuses shared component library'
      },
      {
        id: 'cross-component-state',
        icon: '🔗',
        challenge: 'Cross-Component State Synchronization',
        challengeDetail: 'Multiple unrelated React components needed to share state (e.g., counters, theme switches) without parent-child relationships. Redux was too heavy; Context API caused unnecessary re-renders across the entire tree.',
        solution: 'Self-built Observer + Hooks State Library, Published to npm',
        solutionDetail: 'Created react-cross-component-state using Observer pattern. Components subscribe to specific state keys directly, bypassing React\'s Context tree. Pure Hooks API with zero boilerplate. Published to npm for public reuse.',
        techStack: ['Observer Pattern', 'React Hooks', 'npm Package', 'TypeScript'],
        result: 'Package downloaded 500+ times. Zero re-render overhead. 3KB gzipped. Used in production at JD.com ranking channel.',
        codeSnippet: "import { useSharedState } from 'react-cross-component-state';\nconst [count, setCount] = useSharedState('sharedCounter', 0);\n// Components update independently, no Context re-renders"
      },
      {
        id: 'code-coupling',
        icon: '🏗️',
        challenge: 'Code Coupling Causing Maintenance Difficulty',
        challengeDetail: 'As the ranking channel grew to support multiple business lines, components became tightly coupled — business logic mixed with UI, state management scattered, making new feature development slow and bug-prone.',
        solution: 'High Cohesion Low Coupling: Single Responsibility + State/UI Decoupling + Unified Interface Layer',
        solutionDetail: 'Refactored to three-layer architecture: (1) State layer with pure business logic, (2) UI layer as pure render functions, (3) Unified interface layer for communication. Each component has single responsibility with clear dependency direction.',
        techStack: ['Layered Architecture', 'Single Responsibility', 'Interface Abstraction', 'Code Review'],
        result: 'Maintenance cost reduced by 50%. New feature development speed increased 2x. Bug rate dropped 70%. Team adopted pattern as standard.',
        codeSnippet: '// High cohesion: related logic grouped in state layer\n// Low coupling: UI depends on interface, not implementation\nclass Component {\n  state = separateState();  // pure business logic\n  render = pureView(state); // pure UI, no side effects\n}'
      }
    ]
  },

  footer: {
    title: 'Connection Established',
    terminalLines: [
      '> connection.init()',
      '> status: ready',
      '> location: Osaka, Japan 🇯🇵',
      '> seeking: Frontend Engineering Opportunities',
      '> waiting_for_input...'
    ],
    contact: {
      github: {
        url: 'https://github.com/kagami-arch-jp',
        label: 'GitHub'
      },
      email: {
        address: 'jejdkaa12@gmail.com',
        label: 'Email'
      }
    }
  }
}

export default profile
