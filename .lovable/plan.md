# Omni Lifecare Foundation — Launch Site Revision Plan

## My read of the reviewer's notes

The reviewer is right about one big thing: the current site sounds like a mature NGO with a track record it hasn't earned yet. Quarterly ledgers, "publish the failures", governance scorecards, salary bands, and named statistics make promises a year-one foundation can't honour. That's the gap to close.

The reviewer is wrong on three things: stripping governance entirely, deleting transparency language, and removing the crisis/help-routing block. Donors, CSR teams, and families in distress all look for exactly those signals. We keep them — softened, not deleted.

---

## Reviewer comments — accept / reject

| # | Reviewer note | Decision | Why |
|---|---|---|---|
| OF1 | Soften hero description to "bridge between people and support" | **Accept (partial)** | Use as supporting line; keep a stronger Ogilvy-style headline above it. |
| OF2 | Replace "reported in the open" with "delivered with transparency" | **Accept** | More honest for year one. |
| OF3 | Remove unsourced stats (70–80%, 1 in 2, etc.) | **Accept** | Replace with qualitative framing of the gap. |
| OF4 | Reframe "Five programmes" as integrated model | **Accept** | Combine with focus-areas rename. |
| OF5 | Remove "publish the same six lines every quarter" promise | **Accept** | Replace with a softer commitment to share progress as we grow. |
| OF6 | Remove quarterly ledger six-line table | **Accept** | Operationally unrealistic to commit to publicly on day one. |
| OF7 | Remove "three commitments we'll be judged by" | **Accept (partial)** | Replace with the 5 operational commitments you've defined. |
| OF8 | Rename pillars; "Social Growth" → "Community Development"; add "& Leadership" to Human Potential | **Accept** | Cleaner naming. |
| — | Remove "Publish everything including failures" | **Accept** | Replace with "share progress, learnings, and impact as we grow." |
| — | Remove Impact section (newly started) | **Accept (partial)** | Replace Impact with "Our Vision for Impact" — intent, not claims. |
| — | Remove salary, hiring, open positions | **Accept** | Keep only Volunteer / Internship / Partnership. |
| — | Remove governance scorecards, trustee KPIs, open-seats table | **Accept** | But keep concise Leadership & Governance section. |
| OF16 | Remove crisis helpline / "Need help now" block | **Reject** | Trust + duty-of-care signal. Keep but reframe as "We'll help you find the right door" without promising to be a 24/7 service ourselves. |

---

## Revised site structure

```
/                      Home (new flow, below)
/about                 About (vision, mission, story)
/about/values          Five operational commitments
/about/governance      Concise governance & leadership (NEW, replaces scorecards)
/about/compliance      Registrations & compliance
/focus-areas           Index of 5 focus areas (renamed from /programs)
  /mental-wellbeing
  /preventive-health-community-outreach
  /inclusive-care
  /womens-wellbeing
  /human-development-community-support
/get-involved          Volunteer · Intern · Partner (no jobs/salaries)
  /volunteer
  /partner
/newsroom              Updates (keep, lightweight)
/contact               Contact
/get-help              Reframed as "Find the right support" navigator
/donate                Donate
```

Pages removed/redirected: `/about/careers` (or stripped to "no current openings"), `/impact/*` → folded into About, `/programs/*` slugs → redirect to matching `/focus-areas/*`, all the deep programme pages (chw-development, training-capacity-building, research-impact-assessment, scholarships-education, womens-health-lifecycle, etc.) collapsed into the 5 focus-area pages.

Nav: About · Focus Areas · Get Involved · Newsroom · Get Help · Donate

---

## Home page flow (new)

1. **Hero** — Headline: "Building care that reaches the people India's systems still miss." Sub: bridge-between-people line (OF1). Two CTAs: *Partner with us* · *Volunteer*.
2. **Who we are** — One paragraph. New Mumbai foundation. What we exist to do.
3. **Why this work** — Qualitative framing of the gap (no fabricated stats). Three short cards: *Mental health is still out of reach for most*, *Women's care is episodic, not lifelong*, *Care is delivered in silos*.
4. **The OLCF Framework** — Four pillars: Mental Wellbeing · Community Development · Inclusive Care · Human Potential & Leadership.
5. **Our Five Focus Areas** — The five focus areas as cards (not "programmes").
6. **Five operational commitments** — Community First · Inclusion · Transparency · Accountability · Sustainable Impact.
7. **Leadership & Governance (short)** — Who leads, how decisions are made, transparency commitment. Link to full page.
8. **Our vision for impact** — Forward-looking, no metrics.
9. **Get involved band** — Donate · Partner · Volunteer.
10. **Footer** with compliance links.

---

## Copy rewrites (key blocks)

- **Hero subhead**: "Omni Lifecare Foundation is a Mumbai-based non-profit working across mental wellbeing, inclusive care, community support and human development. We connect people with the care, resources and opportunities they need to thrive."
- **Transparency commitment**: "We are committed to sharing our progress, learnings and impact as the foundation grows — through annual reports, open communication with our partners, and independent audits from year one."
- **Governance (short)**: "Omni Lifecare Foundation is governed by a board of trustees that includes independent members. The board sets strategy, reviews finances, and holds the executive accountable. Conflicts of interest are declared in writing. We are committed to publishing audited accounts annually."
- **Get Involved**: replace job listings with: "We are not actively recruiting paid staff at this stage. We welcome volunteers, interns, and partners who want to help build the foundation from the ground up."

---

## Technical scope

- Edit ~20 route files; delete or stub ~8 deep programme/career pages; add 5 focus-area pages and 1 governance page; update `MEGA_NAV` and `PROGRAMS` data in `src/lib/site.ts`; update footer; keep design tokens and component library untouched.
- Set up redirects from old `/programs/*` and `/impact/*` URLs to new equivalents so external links and SEO don't break.
- No backend or schema changes. Forms continue routing to info@omnilifecare.org.

---

## What I need from you before building

1. **Approve the structure above** (especially: collapse 9 programme pages into 5 focus-area pages, remove careers/impact, keep governance light).
2. **Pillar naming**: confirm "Human Potential & Leadership" (vs "Human Development & Leadership"). The focus-area list uses "Human Development & Community Support" — should the pillar match?
3. **Crisis block**: OK to keep "Find the right support" as a soft navigator (not a 24/7 helpline)?

Once you confirm, I'll implement in one pass.
