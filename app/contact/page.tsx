import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — ZAIVIS",
  description: "Tell ZAIVIS what you are building. Start a conversation about data, AI, and software engineering.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="site-header contact-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="ZAIVIS home">
            <Image className="brand-logo" src="/brand/zaivis-white.png" alt="ZAIVIS — Data. Intelligence. Impact." width={220} height={64} priority />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link><Link href="/portfolio">Portfolio</Link><Link href="/programs">Programs</Link><Link href="/about">About</Link>
          </nav>
          <Link className="header-cta" href="/contact" aria-current="page">Contact <span aria-hidden="true">↗</span></Link>
        </div>
      </header>
      <div className="contact-layout">
        <section className="contact-intro">
          <p className="eyebrow"><span className="status-dot" /> Contact / ZAIVIS</p>
          <h1>Let’s get<br /><span>started.</span></h1>
          <p>Tell us a little about yourself and your organization. We’ll get back to you at the email address you provide.</p>
          <div className="contact-direct">
            <span>General enquiries</span>
            <a href="mailto:contact@zaivis.co.in">contact@zaivis.co.in</a>
          </div>
          <span className="contact-coordinate" aria-hidden="true">DATA. INTELLIGENCE. IMPACT.</span>
        </section>
        <section className="contact-form-panel" aria-labelledby="contact-form-heading">
          <p className="eyebrow eyebrow-dark">A good place to begin</p>
          <h2 id="contact-form-heading">Tell us who you are.</h2>
          <ContactForm />
        </section>
      </div>
      <footer className="contact-footer"><Link href="/">← Back to ZAIVIS</Link><span>© {new Date().getFullYear()} ZAIVIS</span></footer>
    </main>
  );
}
