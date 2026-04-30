[日本語](README.ja.md) | [中文](README.md)

---

# Personal Portfolio Website

A React 19-based Server-Side Rendering (SSR) personal profile and portfolio showcase website.

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Bundler**: Webpack 5
- **Server**: SPTC
- **Styling**: SCSS + PostCSS
- **State Management**: react-cross-component-state
- **Internationalization**: Custom i18n solution

## Project Structure

```
├── src/                  # Client source code
│   ├── components/       # React components
│   │   ├── Hero          # Personal introduction section
│   │   ├── TechModules   # Tech modules showcase
│   │   ├── JourneyTimeline # Career journey timeline
│   │   ├── JapaneseLearning # Japanese learning showcase
│   │   ├── OpenSourceShowcase # Open source works showcase
│   │   ├── ChallengeCards # Challenge cards
│   │   └── Footer        # Footer
│   ├── i18n/             # Internationalization
│   ├── hooks/            # Custom Hooks
│   ├── store/            # State management
│   └── utils/            # Utility functions
├── server/               # Server-side source code
│   ├── application/      # Server-side application logic
│   ├── conf/             # Configuration files
│   └── public/           # Static resources
└── build/                # Webpack configuration
```

## Requirements

- Node.js v22+

## Quick Start

```bash
# Install dependencies
npm install

# Development mode (with hot reload)
npm run dev
# Visit http://127.0.0.1:9090

# Production build
npm run build

# Run in production
npm run serve
```

## Features

- Server-Side Rendering (SSR) with client-side hydration
- Progressive enhancement support
- Responsive design with mobile adaptation
- Mouse-following glow effect and scroll progress bar
- Internationalization support (zh/ja/en)
- Smooth animations and transitions
