import { Link } from "@tanstack/react-router";
import { COMPLIANCE, SITE } from "@/lib/site";
const footerLogo = { url: "/omni-logo-footer.png" };

const COLUMNS = [
  {
    title: "About",
    links: [
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Leadership & Governance", href: "/about/leadership" },
      { label: "Compliance", href: "/about/compliance" },
      { label: "Work with us", href: "/about/careers" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Mental Wellbeing", href: "/what-we-do/mental-wellbeing" },
      { label: "Community Development", href: "/what-we-do/social-growth" },
      { label: "Inclusive Care", href: "/what-we-do/inclusive-care" },
      { label: "Human Potential & Leadership", href: "/what-we-do/human-potential" },
      { label: "All Focus Areas", href: "/programs" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Partner (CSR)", href: "/partner/csr" },
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Donate", href: "/donate" },
      { label: "Get Help", href: "/get-help" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Newsroom", href: "/newsroom" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];


function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center text-sm text-canvas/75 hover:text-canvas transition-colors duration-200"
    >
      <span className="relative">
        {children}
        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-canvas/60 transition-[width] duration-300 ease-out group-hover:w-full" />
      </span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-canvas mt-24 relative overflow-hidden">
      {/* subtle top hairline accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-canvas/20 to-transparent" />

      <div className="container-editorial py-16 lg:py-24">
        {/* Top grid: brand + nav columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-10">
          {/* Brand block */}
          <div className="md:col-span-2 lg:col-span-4 lg:pr-8">
            <Link
              to="/"
              aria-label={`${SITE.name} - home`}
              className="inline-block transition-transform duration-200 active:scale-[0.97]"
            >
              <img
                src={footerLogo.url}
                alt={SITE.name}
                className="h-32 sm:h-40 lg:h-48 w-auto object-contain select-none"
                draggable={false}
              />
            </Link>

            <p
              className="mt-6 text-sm text-canvas/70 max-w-sm leading-relaxed"
              style={{ textWrap: "pretty" } as React.CSSProperties}
            >
              {SITE.tagline} An India-based foundation strengthening community health and wellbeing.
            </p>

            <address className="not-italic mt-6 space-y-1.5 text-sm text-canvas/70">
              <div>{SITE.address}</div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-canvas/85 hover:text-canvas transition-colors"
                >
                  {SITE.email}
                </a>
                <span aria-hidden className="hidden sm:inline text-canvas/30">·</span>
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="text-canvas/85 hover:text-canvas transition-colors tabular-nums"
                >
                  {SITE.phone}
                </a>
              </div>
            </address>
          </div>

          {/* Nav columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="font-sans text-[11px] uppercase tracking-[0.16em] text-canvas/45 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <FooterLink to={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance row */}
        <div className="mt-16 pt-10 border-t border-canvas/10">
          <div className="font-sans text-[11px] uppercase tracking-[0.16em] text-canvas/45 mb-6">
            Compliance & Registrations
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {COMPLIANCE.map((c) => (
              <div key={c.label}>
                <div className="text-canvas font-semibold leading-tight">{c.label}</div>
                <div className="text-canvas/55 text-xs mt-1 leading-snug">{c.desc}</div>
                <div className="font-mono text-[11px] text-canvas/50 tabular-nums mt-1.5">
                  {c.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-12 pt-6 border-t border-canvas/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-canvas/55">
          <p className="tabular-nums">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { to: "/privacy-policy", label: "Privacy" },
              { to: "/terms", label: "Terms" },
              { to: "/donation-policy", label: "Donation Policy" },
              { to: "/safeguarding-policy", label: "Safeguarding" },
              { to: "/accessibility", label: "Accessibility" },
              { to: "/sitemap", label: "Sitemap" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-canvas transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <span className="text-canvas/45">Made in India</span>
        </div>
      </div>
    </footer>
  );
}
