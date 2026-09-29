import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs — ZAIVIS",
  description: "Learning and training programs in Microsoft technologies, AI, data, and software engineering.",
};

const areas = [
  { number: "01", title: "Microsoft technologies", text: "Practical learning around the Microsoft tools and platforms used in modern work." },
  { number: "02", title: "AI & data", text: "Build understanding of artificial intelligence, data, and how they apply to real problems." },
  { number: "03", title: "Software foundations", text: "Develop the technical foundations behind software, digital products, and connected systems." },
];

export default function ProgramsPage() {
  return (
    <main className="programs-page">
      <header className="site-header contact-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="ZAIVIS home"><Image className="brand-logo" src="/brand/zaivis-white.png" alt="ZAIVIS — Data. Intelligence. Impact." width={220} height={64} priority /></Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link><Link href="/portfolio">Portfolio</Link><Link href="/programs" aria-current="page">Programs</Link><Link href="/about">About</Link>
          </nav>
          <Link className="header-cta" href="/contact">Contact <span aria-hidden="true">↗</span></Link>
        </div>
      </header>
      <section className="programs-hero">
        <div className="programs-hero-copy">
          <p className="eyebrow"><span className="status-dot" /> ZAIVIS / Programs</p>
          <h1>Learning that<br /><span>moves you forward.</span></h1>
          <p>Technology learning and training grounded in practice, shared through classrooms, workshops, and conversation.</p>
          <a className="button button-primary" href="#program-areas">Explore programs <span className="button-arrow" aria-hidden="true">↓</span></a>
        </div>
        <div className="programs-hero-photo"><Image src="/about/Teaching_1.jpg" alt="Teaching a group of students in a classroom" fill priority sizes="(max-width: 760px) 100vw, 50vw" /></div>
      </section>
      <section className="program-areas" id="program-areas">
        <div className="program-area-heading"><div><p className="eyebrow eyebrow-dark">Learning &amp; training</p><h2>Technology,<br /><span>made practical.</span></h2></div><p>Programs are designed to connect core concepts with hands-on learning and the questions learners bring.</p></div>
        <div className="program-area-list">
          {areas.map((area) => <article className="program-area" key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><span className="program-area-arrow" aria-hidden="true">↗</span></article>)}
        </div>
      </section>
      <section className="programs-speaking">
        <Image src="/about/Speaking_1.jpg" alt="Speaking at a technical learning event" fill sizes="100vw" />
        <div className="programs-speaking-overlay" />
        <div className="programs-speaking-copy"><p className="eyebrow">Learning happens together</p><h2>Ideas are better<br />when they’re <span>shared.</span></h2><Link className="button button-primary" href="/contact">Ask about a program <span className="button-arrow" aria-hidden="true">↗</span></Link></div>
      </section>
    </main>
  );
}
