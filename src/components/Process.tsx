import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const steps = [
  {
    n: "01",
    name: "Discovery — free",
    text: "A 30-minute call or a written brief. I ask questions until the scope is genuinely clear — vague scope is where freelance projects die.",
  },
  {
    n: "02",
    name: "Proposal — 48h after discovery",
    text: "A written plan within 48 hours of our discovery call: what gets built, in which milestones, for what price — fixed-price for defined scope, hourly for evolving work.",
  },
  {
    n: "03",
    name: "Build in the open",
    text: "Weekly demos or written updates, a staging link you can click, and work delivered as reviewable pull requests — in your repo and code standards if you have them. Honest flags the moment anything threatens the timeline.",
  },
  {
    n: "04",
    name: "Launch & handover",
    text: "Deployed to your infrastructure — your cloud, VPS, or CI pipeline — or handed to your team as a documented build. You own the source code, and we agree a post-launch support window before the project starts.",
  },
];

export default function Process() {
  return (
    <section id="process" className="pb-4 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead
          label="Process"
          title="No surprises, from brief to handover."
          sub="The process is designed around the two things clients fear most: unclear pricing and developers who vanish."
        />
        <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-5">
          {steps.map((s) => (
            <div key={s.n} className="lift rounded-2xl border border-line bg-panel p-7 shadow-card">
              <div className="font-display text-[30px] font-extrabold text-accent">{s.n}</div>
              <h3 className="mt-3 font-display text-[19px] font-bold">{s.name}</h3>
              <p className="mt-2 text-[15px] text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
