import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/mobile-nav";

export const metadata: Metadata = {
  title: "About — ZAIVIS",
  description: "Meet the person behind ZAIVIS and explore its teaching, speaking, and academic background.",
};

function Header() {
  return (
    <header className="site-header inner-page-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="ZAIVIS home">
          <Image className="brand-logo" src="/brand/zaivis-white.png" alt="ZAIVIS — Data. Intelligence. Impact." width={220} height={64} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link><Link href="/portfolio">Portfolio</Link><Link href="/programs">Programs</Link><Link href="/about" aria-current="page">About</Link>
        </nav>
        <Link className="header-cta" href="/contact">Contact <span aria-hidden="true">↗</span></Link>
        <MobileNav />
      </div>
    </header>
  );
}

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#about-main">Skip to content</a>
      <Header />
      <main className="about-page" id="about-main">
        <section className="about-hero">
          <div className="about-hero-copy">
            <p className="eyebrow"><span className="status-dot" /> About ZAIVIS</p>
            <h1>Built on curiosity.<br /><span>Grounded in engineering.</span></h1>
            <p>ZAIVIS brings data, AI, and software engineering together to turn complex challenges into useful systems.</p>
            <Link className="button button-primary" href="/programs">Explore programs <span className="button-arrow" aria-hidden="true">↗</span></Link>
          </div>
          <figure className="about-profile">
            <Image src="/about/Profile_pic.png" alt="ZAIVIS founder" width={1079} height={1440} priority />
            <figcaption><span>ZAIVIS</span><span>Data. Intelligence. Impact.</span></figcaption>
          </figure>
        </section>

        <section className="about-education">
          <div className="about-section-label"><span>01</span><span>Education</span></div>
          <div className="education-copy">
            <p className="eyebrow eyebrow-dark">Academic foundation</p>
            <h2>Computer science<br />in <span>Paris.</span></h2>
            <div className="education-credential">
              <span className="education-mark" aria-hidden="true">S</span>
              <div><h3>Sorbonne University</h3><p>Master of Science in Computer Science · Paris</p></div>
            </div>
          </div>
          <div className="education-index" aria-hidden="true">S / 01</div>
        </section>

        <section className="about-teaching">
          <div className="about-teaching-heading">
            <div><p className="eyebrow eyebrow-dark">Knowledge in practice</p><h2>Teaching, speaking<br />&amp; <span>sharing ideas.</span></h2></div>
            <p>Bringing technical ideas into classrooms and conversations.</p>
          </div>
          <div className="about-photo-grid">
            <figure className="about-photo about-photo-speaking">
              <Image src="/about/Speaking_1.jpg" alt="Speaking to an audience at a technical event" width={1600} height={1200} />
              <figcaption><span>Speaking</span><span>01 / 03</span></figcaption>
            </figure>
            <figure className="about-photo about-photo-teaching">
              <Image src="/about/Teaching_1.jpg" alt="Teaching a classroom of students" width={1600} height={1200} />
              <figcaption><span>Teaching</span><span>02 / 03</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="about-bottom-cta">
          <p className="eyebrow"><span className="status-dot" /> Let’s make something useful</p>
          <h2>Have a challenge<br /><span>worth solving?</span></h2>
          <Link className="button button-primary" href="/contact">Start a conversation <span className="button-arrow" aria-hidden="true">↗</span></Link>
        </section>
      </main>
    </>
  );
}
