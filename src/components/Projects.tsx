import Reveal from "./Reveal";
import { Chip, SectionHead } from "./ui";

const projects: {
  tag: string;
  name: string;
  status: string;
  text: string;
  points: string[];
  chips: string[];
}[] = [
  {
    tag: "Marketing agency website",
    name: "Hive Media",
    status: "Launch page live · full site in progress",
    text: "Website for a digital marketing agency: services, brand story, and lead capture, built on the agency's own colour palette and logo.",
    points: [
      "Fast static site, every route prerendered",
      "Brand colours checked for WCAG AA text contrast",
      "Deployed on Cloudflare, auto-deploy on every push",
    ],
    chips: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
  },
  {
    tag: "Mobile app · AI · PWA",
    name: "FitFam — fitness & nutrition app",
    status: "Built & running — web app and Android app",
    text: "A fitness app for a group of users: food and activity logging, a chat assistant that reads a meal photo and estimates the nutrition, shared leaderboards, and reminders.",
    points: [
      "AI chat that logs food from photos (Gemini, API key kept server-side)",
      "English, Hindi, and Gujarati interface",
      "Installable web app plus an Android build with push notifications",
      "Data synced across devices through Redis",
    ],
    chips: ["JavaScript", "PWA", "Android", "Gemini API", "Redis", "Vercel"],
  },
  {
    tag: "Full-stack · .NET + Angular",
    name: "Music player — streaming from my own server",
    status: "Built & running — web app and Android app",
    text: "A personal music app that streams my own library to laptop and phone: search, queue, seeking, and an in-app update check for the Android build.",
    points: [
      "HTTP range-request streaming, so seeking works",
      "PostgreSQL schema written as SQL migrations, queried through plain ADO.NET",
      "Automated tests: xUnit against a real database, Vitest, and end-to-end",
      "Docker setup that starts the whole stack in one command",
    ],
    chips: ["ASP.NET Core", "Angular", "PostgreSQL", "Docker", "xUnit"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pb-4 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead
          label="Projects I've built"
          title="Things I've built outside my day job."
          sub="Websites and apps I built end to end myself, from database to deployment. Source code is shared privately on request — happy to walk through any of them on a call."
        />
        <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
          {projects.map((p) => (
            <article
              key={p.name}
              className="lift flex flex-col rounded-2xl border border-line bg-panel p-7 shadow-card"
            >
              <div className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent">
                {p.tag}
              </div>
              <h3 className="mt-2.5 font-display text-[21px] font-bold leading-tight">
                {p.name}
              </h3>
              <div className="mt-2 font-mono text-[11.5px] text-ok">{p.status}</div>
              <p className="mt-3 text-[15.5px] text-muted">{p.text}</p>
              <ul className="mt-4 grid list-none gap-1.5 border-t border-line pt-4">
                {p.points.map((pt) => (
                  <li key={pt} className="text-[14.5px] text-muted">
                    <span className="mr-2 text-ok">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {p.chips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
