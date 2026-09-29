import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#what-we-build", label: "What we build" },
  { href: "/#approach", label: "Our approach" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  return (
    <details className="mobile-nav">
      <summary aria-label="Toggle site navigation">
        <span />
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation">
        {links.map(({ href, label }) => (
          <Link href={href} key={label}>{label}</Link>
        ))}
      </nav>
    </details>
  );
}
