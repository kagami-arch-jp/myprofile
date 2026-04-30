[English](README.en.md) | [日本語](README.ja.md)

---

# 个人作品集网站

基于 React 19 的服务端渲染（SSR）个人资料与作品展示网站。

## 技术栈

- **框架**: React 19
- **语言**: TypeScript
- **打包工具**: Webpack 5
- **服务端**: SPTC
- **样式**: SCSS + PostCSS
- **状态管理**: react-cross-component-state
- **国际化**: 自定义 i18n 方案

## 项目结构

```
├── src/                  # 客户端源码
│   ├── components/       # React 组件
│   │   ├── Hero          # 个人介绍区域
│   │   ├── TechModules   # 技术模块展示
│   │   ├── JourneyTimeline # 历程时间线
│   │   ├── JapaneseLearning # 日语学习展示
│   │   ├── OpenSourceShowcase # 开源作品展示
│   │   ├── ChallengeCards # 挑战卡片
│   │   └── Footer        # 页脚
│   ├── i18n/             # 国际化
│   ├── hooks/            # 自定义 Hooks
│   ├── store/            # 状态管理
│   └── utils/            # 工具函数
├── server/               # 服务端源码
│   ├── application/      # 服务端应用逻辑
│   ├── conf/             # 配置文件
│   └── public/           # 静态资源
└── build/                # Webpack 配置
```

## 环境要求

- Node.js v22+

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式（支持热更新）
npm run dev
# 访问 http://127.0.0.1:9090

# 生产构建
npm run build

# 生产环境运行
npm run serve
```

## 特性

- 服务端渲染（SSR）与客户端水合（Hydration）
- 渐进式增强支持
- 响应式设计，移动端适配
- 鼠标跟随光效与滚动进度条
- 国际化支持（中/日/英）
- 平滑的动画与过渡效果
