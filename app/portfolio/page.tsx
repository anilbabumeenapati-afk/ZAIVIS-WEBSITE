import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/mobile-nav";

export const metadata: Metadata = {
  title: "Portfolio — ZAIVIS",
  description:
    "Explore ZAIVIS platforms across learning intelligence, machine-readable compliance, SME liquidity, and enterprise AI controls.",
};

const projects = [
  {
    number: "01",
    name: "Mishkal AI",
    category: "Learning Intelligence",
    description: "An AI platform for learning and training.",
    className: "project-learning",
    mark: "M/",
  },
  {
    number: "02",
    name: "REGADAPT",
    category: "Regulatory technology",
    description: "Machine-readable compliance infrastructure for regulated institutions.",
    className: "project-compliance",
    mark: "R",
  },
  {
    number: "03",
    name: "CAPFIX",
    category: "SME liquidity intelligence",
    description:
      "A real-time SME liquidity intelligence infrastructure: an autonomous financial operations layer that analyzes operational, transactional, and behavioral signals to predict and manage liquidity risk before financial distress occurs.",
    className: "project-liquidity",
    mark: "C/",
  },
  {
    number: "04",
    name: "AGENTLE",
    category: "Enterprise AI accounting & control",
    description:
      "Visibility, governance, accountability, and optimization across AI activity. Every action is recorded from request and policy decision through execution, cost, evidence, outcome, and ledger entry.",
    className: "project-governance",
    mark: "A",
  },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="ZAIVIS home">
      <Image
        className="brand-logo"
        src="/brand/zaivis-white.png"
        alt="ZAIVIS — Data. Intelligence. Impact."
        width={220}
        height={64}
        priority
      />
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <a className="skip-link" href="#portfolio-main">Skip to content</a>
      <header className="site-header portfolio-header">
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/#what-we-build">What we build</Link>
            <Link href="/portfolio" aria-current="page">Portfolio</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/about">About</Link>
          </nav>
          <Link className="header-cta" href="/contact">Contact <span aria-hidden="true">↗</span></Link>
          <MobileNav />
        </div>
      </header>
      <main className="portfolio-page" id="portfolio-main">
        <section className="portfolio-intro">
          <div className="portfolio-intro-inner">
            <p className="eyebrow"><span className="status-dot" /> Portfolio / 2026</p>
            <h1>Ideas, built<br />into <span>infrastructure.</span></h1>
            <p className="portfolio-lede">
              A portfolio of intelligent platforms designed to make complex work more clear,
              connected, and accountable.
            </p>
            <a className="portfolio-scroll" href="#platforms"><span>Explore the platforms</span><i aria-hidden="true">↓</i></a>
          </div>
          <div className="portfolio-intro-art" aria-hidden="true">
            <div className="portfolio-ring ring-one" />
            <div className="portfolio-ring ring-two" />
            <div className="portfolio-ring ring-three" />
            <span className="portfolio-art-core">ZA<span>·</span>IVIS</span>
            <span className="portfolio-art-coordinate">17° 26′ N<br />78° 21′ E</span>
          </div>
        </section>
        <section className="portfolio-projects" id="platforms" aria-labelledby="platforms-title">
          <div className="portfolio-section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">A growing body of work</p>
              <h2 id="platforms-title">Platforms with<br /><span>a point of view.</span></h2>
            </div>
            <p>Each platform starts with a specific problem and is shaped around the systems needed to solve it.</p>
          </div>
          <div className="portfolio-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.name}>
                <div className="project-art" aria-hidden="true">
                  <span className="project-art-number">{project.number} / ZAIVIS</span>
                  <span className="project-art-mark">{project.mark}</span>
                  <span className="project-art-orbit orbit-a" />
                  <span className="project-art-orbit orbit-b" />
                  <span className="project-art-orbit orbit-c" />
                  <span className="project-art-axis" />
                </div>
                <div className="project-copy">
                  <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span className="project-status">ZAIVIS platform</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="portfolio-cta">
          <p className="eyebrow"><span className="status-dot" /> Have a challenge in mind?</p>
          <h2>Let’s build what<br /><span>comes next.</span></h2>
          <Link className="button button-primary" href="/contact">Start a conversation <span className="button-arrow" aria-hidden="true">↗</span></Link>
        </section>
      </main>
    </>
  );
}
