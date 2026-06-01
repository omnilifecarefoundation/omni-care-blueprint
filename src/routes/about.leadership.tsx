import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

const BOARD = [
  { name: "Dr. Anita Deshmukh", role: "Founder & Chairperson", bio: "Public health physician with 25 years of experience in community health systems across South Asia." },
  { name: "Rohan Patil", role: "Trustee", bio: "Former senior advisor on NCD policy, working at the intersection of state health systems and civil society." },
  { name: "Farah Khan", role: "Trustee", bio: "Health economist specialising in cost-effectiveness of community-delivered care." },
  { name: "Suresh Iyer", role: "Trustee", bio: "Career CSR leader with two decades of experience structuring corporate–nonprofit partnerships." },
];

const TEAM = [
  { name: "Dr. Anita Deshmukh", role: "Executive Director" },
  { name: "Meena Joshi", role: "Director, Programmes" },
  { name: "Rajiv Menon", role: "Director, Research & Impact" },
  { name: "Priya Sharma", role: "Head of Partnerships" },
  { name: "Vikram Singh", role: "Head of Finance & Compliance" },
];

export const Route = createFileRoute("/about/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Governance — Omni Life Care Foundation" },
      { name: "description", content: "Our Board of Trustees, Advisory Council, and Executive Team." },
      { property: "og:title", content: "Leadership & Governance — Omni Life Care Foundation" },
      { property: "og:url", content: "/about/leadership" },
    ],
    links: [{ rel: "canonical", href: "/about/leadership" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Leadership & Governance"
        lead="The Foundation is governed by an independent Board of Trustees and led by an executive team drawn from public health, research, and the social sector."
      />
      <section className="container-editorial py-16 lg:py-24">
        <h2 className="display-md mb-8">Board of Trustees</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {BOARD.map((m) => (
            <div key={m.name} className="rounded-xl bg-snow border border-hairline p-6 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_10px_24px_-18px_rgba(28,0,96,0.18)]">
              <h3 className="font-serif text-xl text-balance">{m.name}</h3>
              <div className="eyebrow mt-1">{m.role}</div>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed text-pretty">{m.bio}</p>
            </div>
          ))}
        </div>

        <h2 className="display-md mb-8 mt-20">Executive Team</h2>
        <ul className="divide-y divide-hairline border-y border-hairline">
          {TEAM.map((m) => (
            <li key={m.name} className="flex justify-between py-5">
              <div className="font-serif text-lg">{m.name}</div>
              <div className="text-sm text-ink-muted">{m.role}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
