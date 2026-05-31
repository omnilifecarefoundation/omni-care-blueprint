import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
};

// Reusable simple hero for sub-pages — editorial, restrained.
export function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section className="bg-sage border-b border-hairline">
      <div className="container-editorial pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-3xl">
          {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
          <h1 className="display-lg">{title}</h1>
          {lead && <p className="lead mt-5 max-w-2xl">{lead}</p>}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
