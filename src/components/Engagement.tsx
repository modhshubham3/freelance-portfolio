import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const models = [
  {
    name: "Fixed-price project",
    fit: "Best when the scope is clear",
    text: "One agreed price for an agreed scope, split into milestones. You know the cost before a line of code is written.",
    items: ["Written scope & milestones", "Pay per milestone delivered", "Change requests quoted separately"],
  },
  {
    name: "Hourly / ongoing",
    fit: "Best for evolving products",
    text: "For products that grow feature by feature, or when you need a reliable developer on tap without hiring full-time.",
    items: ["Weekly time reports", "Priorities set by you", "Pause or stop anytime"],
  },
  {
    name: "Rescue & audit",
    fit: "Best when something is broken",
    text: "A focused engagement on an existing .NET / PostgreSQL system: find what is slow or failing, fix it, document it.",
    items: ["Diagnosis report first", "Fixes quoted before work starts", "Knowledge handover included"],
  },
];

export default function Engagement() {
  return (
    <section id="engagement" className="pb-4 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead
          label="Engagement & pricing"
          title="Pick the model that fits — a written quote within 48 hours of discovery."
          sub="No rate-card games: tell me what you're building and your budget range, and you'll get an honest quote — or an honest 'this needs less than you think.'"
        />
        <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
          {models.map((m) => (
            <div key={m.name} className="lift flex flex-col rounded-2xl border border-line bg-panel p-7 shadow-card">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ok">{m.fit}</div>
              <h3 className="mt-2 font-display text-[21px] font-bold">{m.name}</h3>
              <p className="mt-2 text-[15.5px] text-muted">{m.text}</p>
              <ul className="mt-4 grid list-none gap-1.5 border-t border-line pt-4">
                {m.items.map((i) => (
                  <li key={i} className="text-[14.5px] text-muted">
                    <span className="mr-2 text-ok">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
