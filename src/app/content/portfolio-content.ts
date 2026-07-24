export interface NavSection {
  id: string;
  cmd: string;
}

export interface AboutHighlight {
  icon: string;
  value: string;
  label: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  type: string;
  project: string;
  highlights: ReadonlyArray<string>;
}

export interface SelectedContribution {
  context: string;
  contribution: string;
  impact: string;
}

export interface Skill {
  name: string;
  level: number;
  bar: string;
}

export interface SkillCategory {
  name: string;
  command: string;
  skills: ReadonlyArray<Skill>;
}

export interface Project {
  hash: string;
  name: string;
  description: string;
  tech: ReadonlyArray<string>;
  url: string;
  type: string;
}

export interface ContactLink {
  command: string;
  label: string;
  url: string;
}

export const CV_FILE_NAME = 'bruno-ramires-CV.pdf';
export const CV_DOWNLOAD_URL = `uploads/${CV_FILE_NAME}`;
export const NAV_SECTIONS: ReadonlyArray<NavSection> = [
  { id: 'about', cmd: './about' },
  { id: 'experience', cmd: 'cat experience.log' },
  { id: 'skills', cmd: 'ls skills/' },
  { id: 'projects', cmd: 'git log' },
  { id: 'contact', cmd: 'ping bruno' },
];

export const HERO_ROLES: ReadonlyArray<string> = [
  'Senior Frontend Engineer',
  'Angular & React Specialist',
  'AI-First Developer',
  'Design System Architect',
  'Open to Remote',
];

export const HERO_ASCII_NAME = `
 ██████╗ ██████╗ ██╗   ██╗███╗   ██╗ ██████╗ 
 ██╔══██╗██╔══██╗██║   ██║████╗  ██║██╔═══██╗
 ██████╔╝██████╔╝██║   ██║██╔██╗ ██║██║   ██║
 ██╔══██╗██╔══██╗██║   ██║██║╚██╗██║██║   ██║
 ██████╔╝██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝
 ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ 
`.trim();

export const ABOUT_HIGHLIGHTS: ReadonlyArray<AboutHighlight> = [
  { icon: '⚡', value: '7+', label: 'Years' },
  { icon: '🏢', value: '15+', label: 'Clients Served' },
  { icon: '🤖', value: 'AI', label: 'First' },
  { icon: '🌍', value: 'EN/PT', label: 'Bilingual' },
];

export const EXPERIENCES: ReadonlyArray<Experience> = [
  {
    period: 'Jan 2026 – Present',
    role: 'Software Developer',
    company: 'ilegra',
    type: 'Remote',
    project: 'Krutch — BI product with AI capabilities for sales teams',
    highlights: [
      'Defined frontend architecture from scratch (<strong>Angular 19</strong>, standalone, PWA, Clean Architecture + DDD/CQRS)',
      'Built token-based design system with light/dark/high-contrast theming',
      'Integrated <strong>Figma MCP Agent</strong> and configured <strong>GitHub Copilot ecosystem</strong> (custom instructions, agents, skill files)',
      'Applied <strong>Vibe Coding</strong> for rapid prototyping with Copilot Chat + Claude Code',
    ],
  },
  {
    period: 'Jun 2025 – Dec 2025',
    role: 'Software Developer',
    company: 'ilegra',
    type: 'Remote',
    project: 'Thomson Reuters — CPV (Cross Partner Visibility) – Catalyst Team',
    highlights: [
      'Architected project from zero using <strong>Saffron design system</strong>',
      'Achieved <strong>100% unit test coverage</strong>; WCAG accessibility compliance',
      'Used Copilot Chat and Agents for test generation, refactoring, and feature implementation',
    ],
  },
  {
    period: 'Dec 2021 – Jun 2025',
    role: 'Software Developer',
    company: 'ilegra',
    type: 'Remote',
    project: 'Thomson Reuters — Legacy Modernization (3.5 years)',
    highlights: [
      'Modernized legacy frontend systems with <strong>Angular ecosystem</strong>',
      'Built code generators using <strong>Visitor Pattern</strong> (JSON → code pipeline)',
      'Developed Convertible/Non-Convertible screens bridging legacy (CenturAngular) to modern architecture',
      'Pioneered AI adoption by creating Copilot usage guidelines for legacy codebases',
    ],
  },
  {
    period: 'Nov 2020 – Dec 2021',
    role: 'Software Developer PL',
    company: 'ilegra',
    type: 'Hybrid',
    project: 'Banco Agibank — Portal Corban',
    highlights: [
      'Built financial features with <strong>React</strong>, design systems, and third-party libraries',
      'Led frontend feature definition; prototyped in Figma based on UX principles',
      'Scrum/Kanban in cross-functional teams',
    ],
  },
  {
    period: 'Apr 2019 – Nov 2020',
    role: 'Software Developer Intern',
    company: 'ilegra',
    type: 'On-site',
    project: 'Multiple projects — React, Vue.js, Angular',
    highlights: [
      'Worked across React, Vue.js, and Angular on multiple projects',
      'Financial project (Acerta Promotora): React + custom design system',
      'Unit tests (Jest) and integration tests (Cypress)',
    ],
  },
];

export const SELECTED_CONTRIBUTIONS: ReadonlyArray<SelectedContribution> = [
  {
    context: 'Banking portal modules',
    contribution:
      'Implemented targeted React fixes in critical business flows and edge-case validations.',
    impact: 'Stabilized releases in high-traffic user journeys.',
  },
  {
    context: 'Legacy Angular migration tracks',
    contribution:
      'Patched compatibility gaps while modern components replaced legacy screens incrementally.',
    impact: 'Reduced migration risk and avoided delivery freezes.',
  },
  {
    context: 'Design system adoption support',
    contribution:
      'Refined component APIs and token usage across consuming teams during rollout.',
    impact: 'Improved consistency and lowered integration friction.',
  },
  {
    context: 'Accessibility hardening',
    contribution:
      'Delivered focused WCAG fixes in forms, focus states, and keyboard interactions.',
    impact: 'Raised baseline accessibility for production flows.',
  },
  {
    context: 'Performance hot paths',
    contribution:
      'Optimized rendering bottlenecks in specific modules and expensive screens.',
    impact: 'Improved perceived responsiveness for end users.',
  },
  {
    context: 'CI and quality guardrails',
    contribution:
      'Adjusted lint/test pipelines and quality checks in repositories with unstable CI.',
    impact: 'Increased confidence in merges and deploy readiness.',
  },
];

export const SKILL_CATEGORIES: ReadonlyArray<SkillCategory> = [
  {
    name: 'AI & Tooling',
    command: '6 items',
    skills: [
      { name: 'GitHub Copilot', level: 95, bar: '██████████' },
      { name: 'Claude Code', level: 90, bar: '█████████░' },
      { name: 'Cursor', level: 85, bar: '█████████░' },
      { name: 'Figma MCP Agent', level: 90, bar: '█████████░' },
      { name: 'Vibe Coding', level: 92, bar: '█████████░' },
      { name: 'Prompt Engineering', level: 88, bar: '█████████░' },
    ],
  },
  {
    name: 'Angular',
    command: '7 items',
    skills: [
      { name: 'Standalone Components', level: 95, bar: '██████████' },
      { name: 'RxJS', level: 92, bar: '█████████░' },
      { name: 'NgRx / Signals', level: 88, bar: '█████████░' },
      { name: 'Angular Material', level: 90, bar: '█████████░' },
      { name: 'PrimeNG', level: 85, bar: '█████████░' },
      { name: 'CDK', level: 87, bar: '█████████░' },
      { name: 'Angular 19', level: 95, bar: '██████████' },
    ],
  },
  {
    name: 'React',
    command: '6 items',
    skills: [
      { name: 'React 18+', level: 88, bar: '█████████░' },
      { name: 'Next.js', level: 82, bar: '████████░░' },
      { name: 'Redux Toolkit', level: 85, bar: '█████████░' },
      { name: 'Zustand', level: 83, bar: '████████░░' },
      { name: 'React Query', level: 85, bar: '█████████░' },
      { name: 'React Hook Form', level: 87, bar: '█████████░' },
    ],
  },
  {
    name: 'Styling',
    command: '8 items',
    skills: [
      { name: 'SCSS/Sass', level: 95, bar: '██████████' },
      { name: 'Tailwind CSS', level: 92, bar: '█████████░' },
      { name: 'Design Tokens', level: 90, bar: '█████████░' },
      { name: 'Styled Components', level: 85, bar: '█████████░' },
      { name: 'Emotion', level: 82, bar: '████████░░' },
      { name: 'CSS Custom Props', level: 93, bar: '█████████░' },
      { name: 'BEM', level: 90, bar: '█████████░' },
      { name: 'Atomic Design', level: 88, bar: '█████████░' },
    ],
  },
  {
    name: 'Testing',
    command: '6 items',
    skills: [
      { name: 'Jest', level: 92, bar: '█████████░' },
      { name: 'Cypress', level: 88, bar: '█████████░' },
      { name: 'Playwright', level: 85, bar: '█████████░' },
      { name: 'Testing Library', level: 90, bar: '█████████░' },
      { name: 'Jasmine', level: 88, bar: '█████████░' },
      { name: 'Storybook', level: 83, bar: '████████░░' },
    ],
  },
  {
    name: 'Infra & Quality',
    command: '8 items',
    skills: [
      { name: 'Webpack / Vite', level: 88, bar: '█████████░' },
      { name: 'Nx', level: 82, bar: '████████░░' },
      { name: 'Docker', level: 78, bar: '████████░░' },
      { name: 'GitHub Actions', level: 90, bar: '█████████░' },
      { name: 'GitLab CI', level: 85, bar: '█████████░' },
      { name: 'ESLint', level: 93, bar: '█████████░' },
      { name: 'SonarQube', level: 85, bar: '█████████░' },
      { name: 'Husky + Commitlint', level: 90, bar: '█████████░' },
    ],
  },
];

export const PROJECTS: ReadonlyArray<Project> = [
  {
    hash: 'f9c84b1',
    name: 'brunormferreira.github.io',
    description:
      'Terminal-style portfolio built with Angular 19, matrix rain effects, and automated GitHub Pages deployment.',
    tech: ['Angular 19', 'SCSS', 'Canvas API', 'GitHub Actions', 'GitHub Pages'],
    url: 'https://github.com/brunormferreira/brunormferreira.github.io',
    type: 'Featured',
  },
  {
    hash: 'd2a61e9',
    name: 'nodejs-docker',
    description:
      'REST API baseline with Node.js/Express and Docker, emphasizing environment parity and container-first setup.',
    tech: ['Node.js', 'Express', 'Docker', 'REST API'],
    url: 'https://github.com/brunormferreira/nodejs-docker',
    type: 'Backend',
  },
  {
    hash: 'b74ce2d',
    name: 'rxjs-mastering',
    description:
      'Reactive programming lab focused on RxJS operators, observable composition, and event-stream architecture.',
    tech: ['TypeScript', 'RxJS', 'Reactive Patterns'],
    url: 'https://github.com/brunormferreira/rxjs-mastering',
    type: 'Architecture',
  },
  {
    hash: 'a6d19f0',
    name: 'nextjs-jest-cypress-scss-setup',
    description:
      'Production-ready Next.js starter with Jest, Testing Library, Cypress, and SCSS modules for quality-first delivery.',
    tech: ['Next.js', 'TypeScript', 'Jest', 'Cypress', 'SCSS'],
    url: 'https://github.com/brunormferreira/nextjs-jest-cypress-scss-setup',
    type: 'Testing',
  },
  {
    hash: 'c18ea43',
    name: 'swapi.dev',
    description:
      'React Hooks application consuming SWAPI with focused UX and deployed live demo.',
    tech: ['React', 'Hooks', 'API Integration', 'Vercel'],
    url: 'https://github.com/brunormferreira/swapi.dev',
    type: 'Frontend',
  },
];

export const CONTACT_LINKS: ReadonlyArray<ContactLink> = [
  {
    command: 'open linkedin',
    label: 'linkedin.com/in/bruno-ramires',
    url: 'https://www.linkedin.com/in/bruno-ramires-80395517b/',
  },
  {
    command: 'open github',
    label: 'github.com/brunormferreira',
    url: 'https://github.com/brunormferreira',
  },
  {
    command: 'mailto',
    label: 'brunormferreira@hotmail.com',
    url: 'mailto:brunormferreira@hotmail.com',
  },
  {
    command: 'call',
    label: '+55 51 9 8946-7135',
    url: 'tel:+5551989467135',
  },
];
