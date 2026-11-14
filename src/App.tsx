import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  Layers3,
  Menu,
  Network,
  Radio,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  X,
} from 'lucide-react'
import { linkedInUrl, projects, type Project } from './data/content'

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Selected Work' },
  { id: 'approach', label: 'Approach' },
  { id: 'contact', label: 'Contact' },
]

const expertise = [
  {
    icon: Layers3,
    title: 'Software Architecture',
    summary: 'System design, platform strategy, distributed systems, security, scalability and modernisation.',
    detail: 'Turning complex requirements into robust technical foundations, from reference architectures to production services.',
  },
  {
    icon: Code2,
    title: 'Full Stack Engineering',
    summary: 'Java, Spring Boot, React, TypeScript, integration, infrastructure and production delivery.',
    detail: 'End-to-end engineering across services, rich web applications, deployment pipelines and operational tooling.',
  },
  {
    icon: Sparkles,
    title: 'AI & Intelligent Systems',
    summary: 'Production AI integration, agentic workflows, automation and deterministic controls.',
    detail: 'Applying modern AI capabilities within maintainable systems, with clear boundaries and human review where appropriate.',
  },
  {
    icon: UsersRound,
    title: 'Technical Leadership',
    summary: 'Technology strategy, multidisciplinary teams, mentoring and delivery ownership.',
    detail: 'Providing senior technical direction while working closely with product, commercial and engineering stakeholders.',
  },
]

const deliverySteps = [
  { step: '01', title: 'Understand', copy: 'Work with stakeholders to define the opportunity, constraints and what successful delivery really means.' },
  { step: '02', title: 'Architect', copy: 'Shape pragmatic system designs and a technical approach that balances ambition with reality.' },
  { step: '03', title: 'Engineer', copy: 'Build and integrate software across the stack, with quality, maintainability and operations in mind.' },
  { step: '04', title: 'Deliver', copy: 'Take solutions through deployment and production, with knowledge transfer or continuing collaboration.' },
]

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand" href="#home" aria-label="Zero21 — back to home">
      <span className="brand-word">Zero<span className="brand-accent">21</span></span>
      {!compact && <span className="brand-descriptor">Software Architecture,<br />Engineering &amp; Consulting</span>}
    </a>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="section-eyebrow"><span>{children}</span><i aria-hidden="true" /></div>
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length) setActive(visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0].target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.5] },
    )
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header ref={headerRef} className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav aria-label="Primary navigation" className="desktop-navigation">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'nav-link active' : 'nav-link'} aria-current={active === item.id ? 'location' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="mobile-menu-button"
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-navigation ${mobileOpen ? 'open' : ''}`} aria-label="Mobile navigation" inert={!mobileOpen}>
        {navigation.map((item) => (
          <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => setMobileOpen(false)}>
            {item.label} <ArrowUpRight size={17} />
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-darken" aria-hidden="true" />
      <div className="hero-dot-field" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="kicker">Technology consulting</span>
          <h1 id="hero-title">Complex software.<br />Clear thinking.<br /><span>Delivered.</span></h1>
          <p className="hero-summary">Senior software architecture, full stack engineering and technology consulting — from strategy and system design through to production delivery.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Discuss a project <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="button button-outline" href="#expertise">Explore expertise <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-footnote"><span className="status-pulse" aria-hidden="true" /> Independent consulting · Spain / International</div>
        </div>
        <div className="hero-float" aria-label="Technical capabilities">
          <span><Layers3 size={20} /> Platform Engineering</span>
          <span><Network size={20} /> Real-time Systems</span>
          <span><Sparkles size={20} /> AI Integration</span>
          <span><Radio size={20} /> Media &amp; Broadcasting</span>
        </div>
      </div>
      <div className="hero-bottom-line" aria-hidden="true" />
    </section>
  )
}

function Expertise() {
  const [expanded, setExpanded] = useState<number | null>(null)
  return (
    <section id="expertise" className="section expertise-section" aria-labelledby="expertise-title">
      <div className="container">
        <div className="expertise-layout">
          <div className="expertise-intro">
            <SectionEyebrow>Core expertise</SectionEyebrow>
            <h2 id="expertise-title">Technology capability for complex, real-world systems.</h2>
          </div>
          <div className="expertise-grid">
            {expertise.map(({ icon: Icon, title, summary, detail }, index) => (
              <div className={`expertise-item ${expanded === index ? 'is-expanded' : ''}`} key={title}>
                <Icon className="expertise-icon" size={34} strokeWidth={1.65} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{summary}</p>
                <button type="button" className="text-disclosure" aria-expanded={expanded === index} onClick={() => setExpanded(expanded === index ? null : index)}>
                  {expanded === index ? 'Less detail' : 'More detail'} <ChevronDown size={14} aria-hidden="true" />
                </button>
                {expanded === index && <p className="expertise-detail">{detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onEscape)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', onEscape)
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
        <div className="modal-image"><img src={project.image} alt={project.alt} /><div className="modal-image-overlay" /></div>
        <button ref={closeRef} type="button" className="modal-close" aria-label="Close case study" onClick={onClose}><X size={21} /></button>
        <div className="modal-content">
          <span className="kicker">{project.eyebrow}</span>
          <h2 id="modal-title">{project.title}</h2>
          <p id="modal-description" className="modal-lead">{project.clientLine}</p>
          <div className="modal-two-col">
            <div><h3>The challenge</h3><p>{project.challenge}</p></div>
            <div><h3>Approach &amp; delivery</h3><p>{project.approach}</p></div>
          </div>
          <h3>Highlights</h3>
          <ul className="highlights-list">
            {project.outcomes.map((outcome) => <li key={outcome}><CheckCircle2 size={17} aria-hidden="true" />{outcome}</li>)}
          </ul>
          <div className="tag-list modal-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <p className="illustration-note">Visualisation is illustrative and not a client product screenshot.</p>
        </div>
      </div>
    </div>
  )
}

function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="container">
        <div className="section-header work-header">
          <div>
            <SectionEyebrow>Selected work</SectionEyebrow>
            <h2 id="work-title">Real projects. Serious delivery.</h2>
          </div>
          <span className="section-context">Consulting engagements &amp; selected career experience</span>
        </div>
        <div className="work-grid">
          {projects.map((project) => (
            <button className="work-card" type="button" key={project.id} onClick={() => setSelectedProject(project)} aria-label={`Read case study: ${project.title}`}>
              <span className="work-image"><img src={project.image} alt="" loading="lazy" /><span className="image-shading" /></span>
              <span className="work-content">
                <span className="work-eyebrow">{project.eyebrow}</span>
                <span className="work-title-row"><strong>{project.title}</strong><ArrowUpRight size={19} aria-hidden="true" /></span>
                <span className="work-summary">{project.summary}</span>
                <span className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="work-footnote"><ShieldCheck size={16} aria-hidden="true" /><span>Case studies distinguish current consulting engagements from earlier career roles. Imagery is illustrative.</span></div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

function Experience() {
  return (
    <section className="experience-section" aria-labelledby="experience-title">
      <div className="container experience-layout">
        <div className="experience-title">
          <SectionEyebrow>Experience &amp; credentials</SectionEyebrow>
          <h2 id="experience-title">A broad and proven technology background.</h2>
        </div>
        <p className="experience-description">Experience across regulated financial technology, enterprise platforms, real-time systems and AI-enabled media. Combining engineering depth with product thinking, stakeholder engagement and technology leadership.</p>
        <div className="experience-categories">
          <div><Building2 size={26} /><span>Banking &amp;<br />Financial Tech</span></div>
          <div><Boxes size={26} /><span>Platform &amp;<br />Product Delivery</span></div>
          <div><Sparkles size={26} /><span>AI, Media &amp;<br />Immersive Tech</span></div>
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section id="approach" className="section approach-section" aria-labelledby="approach-title">
      <div className="container">
        <div className="approach-heading">
          <div>
            <SectionEyebrow>Working approach</SectionEyebrow>
            <h2 id="approach-title">From an unclear problem<br />to a production solution.</h2>
          </div>
          <p>Flexible enough to support an existing engineering team, lead a complex technical workstream or take ownership of an end-to-end delivery.</p>
        </div>
        <div className="steps-grid">
          {deliverySteps.map((item) => (
            <div className="step" key={item.step}>
              <span className="step-number">{item.step}</span>
              <span className="step-line" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
        <div className="engagement-panel">
          <div className="engagement-graphic"><Workflow size={32} strokeWidth={1.3} /></div>
          <div>
            <span className="kicker">Flexible engagement</span>
            <h3>Consulting, contracts or embedded technical leadership.</h3>
            <p>Architecture advisory, full stack engineering, delivery ownership and ongoing collaboration — shaped around the needs of the project and team.</p>
          </div>
          <a href="#contact" className="engagement-link">Let's discuss the fit <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

function AboutStrip() {
  return (
    <section className="about-strip" aria-label="About the consultant">
      <div className="container about-content">
        <div className="about-monogram" aria-hidden="true">JA<span>.</span></div>
        <div className="about-copy">
          <SectionEyebrow>Behind Zero21</SectionEyebrow>
          <h2>Independent expertise, built on decades of delivery.</h2>
          <p>Zero21 is the consulting practice of <strong>James Ashton</strong>, a technology leader, software architect and full stack engineer whose experience spans global banking, enterprise platforms, AI and immersive technology.</p>
        </div>
        <div className="about-credentials"><span>Architecture</span><span>Engineering</span><span>Leadership</span></div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div className="contact-intro">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 id="contact-title">Looking for senior technology expertise?</h2>
          <p>Whether you're shaping a new platform, modernising an existing system or need additional senior engineering capability, let's discuss what you're building.</p>
          <p className="location-note"><span className="status-pulse" aria-hidden="true" /> Based in Spain · Working internationally</p>
        </div>
        <div className="contact-form contact-panel">
          <h3>Start the conversation on LinkedIn</h3>
          <p>Send a message with a few lines about your project, team or opportunity and I'll reply personally.</p>
          <a className="button button-primary" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            Message me on LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand"><Brand compact /><p>Software Architecture, Engineering &amp; Consulting</p></div>
        <span className="footer-copyright">© {new Date().getFullYear()} Zero21 Consulting SL</span>
        <a className="footer-back" href="#home">Back to top <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Expertise />
        <Work />
        <Experience />
        <Approach />
        <AboutStrip />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
