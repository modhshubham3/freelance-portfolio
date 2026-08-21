import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const services: {
  icon: string;
  name: string;
  text: string;
  items: string[];
  featured?: boolean;
}[] = [
  {
    icon: "🧩",
    name: "Full-stack web applications",
    text: "Business applications, portals, and admin panels built end to end — backend, frontend, and database.",
    items: ["ASP.NET Core + Angular", "PostgreSQL schema design", "Auth & role-based access"],
  },
  {
    icon: "🔌",
    name: "REST APIs & integrations",
    text: "Clean, documented APIs — and integrations with payment gateways, vendor systems, and third-party services.",
    items: ["API design & documentation", "Third-party integrations", "JWT / Keycloak security"],
  },
  {
    icon: "📊",
    name: "Dashboards & reporting",
    text: "Operational dashboards and reporting modules your team actually uses — filters, exports, and drill-downs included.",
    items: ["KPI & operations dashboards", "Reporting modules — 50+ reports shipped", "Excel/PDF exports"],
  },
  {
    icon: "⚡",
    name: "Real-time features",
    text: "Live updates without page refresh — tracking views, notifications, alerts, and streaming data pipelines.",
    items: ["SignalR live push", "Kafka / Redis pipelines", "Live maps & status boards"],
  },
  {
    icon: "🛰️",
    name: "GPS, IoT & fleet tracking",
    text: "My specialty: systems that talk to real devices — GPS trackers, on-board units, and sensor streams — on live maps.",
    items: ["Device protocol integration (TCP)", "Geofencing & trip logic", "Google Maps / Tile38 geospatial"],
    featured: true,
  },
  {
    icon: "🚑",
    name: "Rescue & performance tuning",
    text: "Your app is slow, crashing, or stuck with a developer who left? I diagnose and fix — .NET and PostgreSQL.",
    items: ["Slow query & index tuning", "High CPU / memory diagnosis", "Take-over of existing codebases"],
  },
];

export default function Services() {
  return (
    <section id="services" className="pb-4 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead
          label="Services"
          title="What I can build for you."
          sub="Every engagement ends with working software, source code you own, and documentation — not a half-finished repo."
        />
        <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {services.map((s) => (
            <div
              key={s.name}
              className={`lift flex flex-col rounded-2xl border bg-panel p-7 shadow-card ${s.featured ? "border-accent" : "border-line"}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[26px]" aria-hidden="true">
                  {s.icon}
                </span>
                {s.featured ? (
                  <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent">
                    Specialty
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-[20px] font-bold">{s.name}</h3>
              <p className="mt-2 text-[15.5px] text-muted">{s.text}</p>
              <ul className="mt-4 grid list-none gap-1.5 border-t border-line pt-4">
                {s.items.map((i) => (
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
