import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const faqs = [
  {
    q: "You have a full-time job — will you have time for my project?",
    a: "Fair question, and the honest answer: I take one freelance project at a time, in dedicated personal hours (IST evenings and weekends). The committed hours per week go into the written proposal before we start — and if I can't meet your timeline, I'll tell you before taking the work, not after.",
  },
  {
    q: "Can you take over an existing project?",
    a: "Yes — that's one of my main services. I start with a paid audit: I read the code, map what exists, and give you a written report of what's broken, what's risky, and what fixing it costs. Then you decide.",
  },
  {
    q: "Do you work with agencies as a subcontractor?",
    a: "Yes — white-label is fine. I work in your repo, follow your code standards and git workflow, join your stand-ups or async check-ins, and sign an NDA before anything is shared.",
  },
  {
    q: "How do contracts and payments work?",
    a: "A written proposal you sign off on, milestone payments for fixed-price work, and an NDA whenever you want one. Indian clients pay in INR, international clients in USD by bank transfer — and I'm happy to work on your contract paper or mine.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — fully remote. I'm in India (IST, UTC+5:30): my working window covers the full European afternoon and US East Coast mornings. Calls go in your working hours; everything else is written-first (email/WhatsApp/Slack).",
  },
  {
    q: "What's your main stack?",
    a: "ASP.NET Core (C#) backends, Angular frontends, PostgreSQL databases — with Kafka, Redis, SignalR, and geospatial tooling for real-time work, and Docker/Linux for deployment. If your project needs something adjacent, I'll tell you honestly whether I'm the right fit.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do. Ownership of delivered work transfers to you, and it's written into the proposal — no lock-in, no held-hostage repos.",
  },
  {
    q: "How do we start?",
    a: "Email or WhatsApp me three things: what you're building, your rough timeline, and your budget range. You'll get a reply within 24 hours — and after a short discovery call, a written proposal within 48 hours.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="pb-4 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead label="FAQ" title="Questions clients usually ask." />
        <div className="mt-10 grid max-w-[820px] gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-line bg-panel px-6 py-1 shadow-card open:pb-5"
            >
              <summary className="cursor-pointer list-none py-4 font-display text-[17.5px] font-bold marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="mr-3 font-mono text-accent group-open:hidden">+</span>
                <span className="mr-3 hidden font-mono text-accent group-open:inline">−</span>
                {f.q}
              </summary>
              <p className="pl-7 text-[15.5px] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
