import { Link } from "@tanstack/react-router";
import { Logo } from "./Header";
import { COMPLIANCE, SITE } from "@/lib/site";

const COLUMNS = [
  {
    title: "About",
    links: [
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Compliance", href: "/about/compliance" },
      { label: "Careers", href: "/about/careers" },
      { label: "Our Story", href: "/about/our-story" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Mental Wellbeing", href: "/what-we-do/mental-wellbeing" },
      { label: "Social Growth", href: "/what-we-do/social-growth" },
      { label: "Inclusive Care", href: "/what-we-do/inclusive-care" },
      { label: "Human Potential", href: "/what-we-do/human-potential" },
      { label: "All Programs", href: "/programs" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Partner (CSR)", href: "/partner/csr" },
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Donate", href: "/donate" },
      { label: "Research collab", href: "/programs/research-impact-assessment" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Impact", href: "/impact" },
      { label: "Stories", href: "/impact/stories" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-canvas mt-24">
      <div className="container-editorial py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo />
              <div>
                <div className="font-serif text-lg text-canvas">Omni Life Care</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-canvas/60">Foundation</div>
              </div>
            </div>
            <p className="text-sm text-canvas/70 max-w-xs leading-relaxed">
              {SITE.tagline} An India-based foundation strengthening community health and wellbeing.
            </p>
            <address className="not-italic text-sm text-canvas/70 mt-4">
              {SITE.address}
              <br />
              <a href={`mailto:${SITE.email}`} className="hover:text-canvas">{SITE.email}</a>
            </address>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-[12px] uppercase tracking-[0.12em] text-canvas/50 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-sm text-canvas/85 hover:text-canvas transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance row */}
        <div className="mt-12 pt-8 border-t border-canvas/15">
          <div className="font-sans text-[12px] uppercase tracking-[0.12em] text-canvas/50 mb-4">
            Compliance & Registrations
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {COMPLIANCE.map((c) => (
              <div key={c.label}>
                <div className="text-canvas font-semibold">{c.label}</div>
                <div className="text-canvas/60 text-xs">{c.desc}</div>
                <div className="font-mono text-[11px] text-canvas/50 tabular mt-1">{c.id}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-canvas/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-canvas/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-canvas">Privacy</Link>
            <Link to="/terms" className="hover:text-canvas">Terms</Link>
            <Link to="/donation-policy" className="hover:text-canvas">Donation Policy</Link>
            <Link to="/safeguarding-policy" className="hover:text-canvas">Safeguarding</Link>
            <Link to="/accessibility" className="hover:text-canvas">Accessibility</Link>
            <Link to="/sitemap" className="hover:text-canvas">Sitemap</Link>
          </nav>
          <span>Made in India</span>
        </div>
      </div>
    </footer>
  );
}
