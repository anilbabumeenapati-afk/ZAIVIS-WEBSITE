import Image from "next/image";
import BrandMarquee from "@/components/brand-marquee";

const pillars = [
  {
    number: "01",
    title: "Data",
    verb: "Make it useful.",
    items: ["Capture", "Connect", "Structure"],
  },
  {
    number: "02",
    title: "Intelligence",
    verb: "Make it think.",
    items: ["Understand", "Reason", "Predict"],
  },
  {
    number: "03",
    title: "Impact",
    verb: "Make it matter.",
    items: ["Transform", "Automate", "Scale"],
  },
];

function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <a className="brand" href="#top" aria-label="ZAIVIS home">
      <Image
        className="brand-logo"
        src={dark ? "/brand/zaivis-ink.png" : "/brand/zaivis-white.png"}
        alt="ZAIVIS — Data. Intelligence. Impact."
        width={220}
        height={64}
        priority
      />
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#what-we-build">What we build</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/programs">Programs</a>
          <a href="#approach">Our approach</a>
          <a href="/about">About</a>
        </nav>
        <a className="header-cta" href="/contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <video className="hero-video" autoPlay muted loop playsInline preload="none" poster="/video/hero-poster.svg" aria-hidden="true" tabIndex={-1}>
        <source src="/video/hero.mp4.mp4" type="video/mp4" />
      </video>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow"><span className="status-dot" /> Independent data &amp; AI engineering</p>
        <h1 id="hero-title">Intelligence,<br /><span>engineered.</span></h1>
        <p className="hero-subtitle">Data. AI. Software.<br />Built for what’s next.</p>
        <a className="button button-primary" href="#what-we-build">
          Explore what we build <span className="button-arrow" aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-side-note" aria-hidden="true">
        <span>From raw signal</span><i /><span>to real-world impact</span>
      </div>
      <div className="hero-bottom" aria-hidden="true">
        <span>01 / 03</span><span className="hero-progress"><i /></span><span>Scroll to explore</span>
      </div>
    </section>
  );
}

function Framework() {
  return (
    <section className="framework section-pad" id="what-we-build" aria-labelledby="framework-title">
      <div className="section-intro">
        <p className="eyebrow eyebrow-dark">A connected way forward</p>
        <h2 id="framework-title">From raw potential<br />to <span>real-world progress.</span></h2>
        <p className="section-description">We bring data, intelligence and software together to solve the problems that matter.</p>
      </div>
      <div className="pillar-list">
        {pillars.map((pillar) => (
          <article className="pillar" key={pillar.title}>
            <div className="pillar-top"><span>{pillar.number}</span><span className="pillar-mark" aria-hidden="true">↗</span></div>
            <h3>{pillar.title}</h3>
            <p className="pillar-verb">{pillar.verb}</p>
            <ul>{pillar.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach section-pad" id="approach" aria-labelledby="approach-title">
      <div className="approach-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="approach-copy">
        <p className="eyebrow"><span className="status-dot" /> Built for the real world</p>
        <h2 id="approach-title">Good ideas deserve<br />great <span>engineering.</span></h2>
        <p>We take ambitious ideas all the way to dependable systems. Thoughtfully designed, production-ready and made to evolve.</p>
        <div className="approach-steps" aria-label="Our process">
          <span>Understand</span><i>→</i><span>Architect</span><i>→</i><span>Build</span><i>→</i><span>Deploy</span><i>→</i><span>Evolve</span>
        </div>
      </div>
      <div className="approach-index" aria-hidden="true">ZA<span> / </span>01</div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="footer-main">
        <div>
          <p className="eyebrow">Have a problem worth solving?</p>
          <h2>Let’s build the<br /><span>intelligence behind it.</span></h2>
        </div>
        <a className="button button-light" href="/contact">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-bottom">
        <Brand dark />
        <span>Independent thinking. Production-grade engineering.</span>
        <span>© {new Date().getFullYear()} ZAIVIS</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Hero /><BrandMarquee /><Framework /><Approach /></main><Footer /></>;
}
