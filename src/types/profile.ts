export interface Badge {
  id: string
  icon: string
  label: string
  description: string
}

export interface TechCard {
  id: string
  name: string
  icon: string
  description: string
  size: 'large' | 'wide' | 'medium' | 'small'
}

export interface TimelineNode {
  id: string
  period: string
  company: string
  companyLocal: string
  companyUrl?: string
  location: string
  role: string
  tags: string[]
  description: string
  architecture?: {
    pattern: string
    description: string
    buildStrategy: string
  }
  badges?: Badge[]
  isTransition?: boolean
  transitionIcon?: string
  transitionColor?: string
}

export interface ArchitectureNode {
  id: string
  label: string
  type: 'hub' | 'component'
}

export interface ArchitectureConnection {
  from: string
  to: string
}

export interface DesignPrinciple {
  title: string
  description: string
}

export interface DemoScenario {
  id: string
  name: string
  description: string
}

export interface ChallengeCardData {
  id: string
  icon: string
  challenge: string
  challengeDetail: string
  solution: string
  solutionDetail: string
  techStack: string[]
  result: string
  codeSnippet: string
}

export interface ContactLink {
  url: string
  label: string
}

export interface ProfileData {
  personal: {
    name: {
      chinese: string
      pinyin: string
      japanese: string
    }
    title: string
    yearsOfExperience: number
    birthDate: string
    location: {
      from: string
      to: string
      current: string
    }
    summary: string
  }
  education: Array<{
    period: string
    institution: string
    major: string
    degree: string
  }>
  hero: {
    nameDisplay: string
    subtitle: string
    backgroundKeywords: string[]
    ctaText: string
  }
  techModules: {
    title: string
    cards: TechCard[]
  }
  journeyTimeline: {
    title: string
    transitionNote: string
    nodes: TimelineNode[]
  }
  stateEngineDemo: {
    title: string
    description: string
    packageName: string
    packageUrl: string
    architectureDiagram: {
      title: string
      nodes: ArchitectureNode[]
      connections: ArchitectureConnection[]
    }
    designPrinciples: DesignPrinciple[]
    demo: {
      scenarios: DemoScenario[]
      logFormat: string
    }
  }
  challengeCards: {
    title: string
    subtitle: string
    cards: ChallengeCardData[]
  }
  footer: {
    title: string
    terminalLines: string[]
    contact: {
      github: ContactLink
      email: {
        address: string
        label: string
      }
    }
  }
}

export interface JapaneseMilestone {
  id: string
  period: string
  level: string
  score?: number
  description: string
  details?: string[]
  isStart?: boolean
  isN1?: boolean
}

export interface JapaneseLearningData {
  title: string
  scoreLabel: string
  milestones: JapaneseMilestone[]
}

export interface OpenSourceShowcaseData {
  title: string
  description: string
  sptcMoreFeatures: string
  sptcViewDocs: string
}

export interface SSRSolutionPoint {
  icon: string
  title: string
  description: string
}

export interface SSRSchemaData {
  title: string
  subtitle: string
  background: string
  solution: string
  advantage: string
  points: SSRSolutionPoint[]
}

export interface I18nProfileData {
  hero: ProfileData['hero']
  techModules: ProfileData['techModules']
  journeyTimeline: ProfileData['journeyTimeline']
  japaneseLearning: JapaneseLearningData
  openSourceShowcase: OpenSourceShowcaseData
  stateEngineDemo: ProfileData['stateEngineDemo']
  challengeCards: ProfileData['challengeCards']
  ssrSolution: SSRSchemaData
  footer: ProfileData['footer']
}
