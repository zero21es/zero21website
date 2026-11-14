export type Project = {
  id: string
  eyebrow: string
  title: string
  summary: string
  image: string
  alt: string
  tags: string[]
  clientLine: string
  challenge: string
  approach: string
  outcomes: string[]
}

// No email address is published on the site; enquiries go via LinkedIn.
export const linkedInUrl = 'https://www.linkedin.com/in/jamesashton/'

// Engagment attribution matters: Zero21 work is distinguished from earlier career experience.
export const projects: Project[] = [
  {
    id: 'ai-broadcast',
    eyebrow: 'ZERO21 ENGAGEMENT · 2026',
    title: 'AI-Driven Sports Broadcasting Platform',
    summary: 'Architecture and delivery of a production platform combining live sports data, automated programming and generative AI.',
    image: '/images/broadcast-control-room.webp',
    alt: 'Illustrative image of a sports broadcast control room',
    tags: ['Java / Spring Boot', 'Spring AI', 'React', 'FFmpeg'],
    clientLine: 'Independent client engagement · January–September 2026',
    challenge: 'A new sports-broadcasting venture needed a resilient platform for continuous media playout and automated programming around Spain’s La Quiniela football pools competition.',
    approach: 'Designed reusable enterprise foundations for secure Java microservices and modular React applications, including identity, authorisation, scaffolding and AI-assisted development workflows. Built an event-driven broadcast platform combining live sports data, LLMs, generative media and deterministic operational controls.',
    outcomes: [
      'Delivered a production broadcast automation platform.',
      'Established reusable platform capabilities for future applications.',
      'Owned architecture, implementation, deployment and production incident investigation.',
    ],
  },
  {
    id: 'immersive-platform',
    eyebrow: 'PRIOR LEADERSHIP · VEGAS CITY',
    title: 'Real-time Immersive Platform',
    summary: 'A horizontally scalable, multi-tenant platform supporting browser and Unity-based immersive experiences.',
    image: '/images/immersive-platform.svg',
    alt: 'Abstract illustration of an immersive multi-user digital platform',
    tags: ['Java', 'WebSocket', 'Redis', 'Unity', 'Web3'],
    clientLine: 'Platform and engineering leadership · Vegas City · 2020–2026',
    challenge: 'Support diverse client experiences on a reusable real-time platform instead of rebuilding core infrastructure for each project.',
    approach: 'Defined the architecture for a horizontally scalable Java/Spring Boot platform supporting browser and Unity clients. Led delivery across engineering disciplines and developed capabilities for distributed messaging, room management, identity, multi-tenancy, monitoring, cloud automation and CI/CD.',
    outcomes: [
      'Developed a reusable platform for immersive client projects.',
      'Built and led a 20-person specialist production studio.',
      'Combined architecture, engineering leadership and client-facing technical delivery.',
    ],
  },
]
