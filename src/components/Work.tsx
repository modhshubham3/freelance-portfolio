import Reveal from "./Reveal";
import { Chip, SectionHead } from "./ui";

const cases: {
  tag: string;
  name: string;
  problem: string;
  built: string;
  chips: string[];
}[] = [
  {
    tag: "Real-time · Geospatial",
    name: "Live fleet-tracking platform",
    problem:
      "A city transport authority needs to see every bus — position, trip status, delays, and incidents — in real time.",
    built:
      "The live tracking module for ~700 buses: map with positions and trails, trip start/close and schedule adherence, geofence-based stop detection, ETAs, and a control-room alert panel covering overspeed, route violations, and emergency panic events.",
    chips: ["ASP.NET Core", "Angular", "PostgreSQL", "Kafka", "Redis", "Tile38", "SignalR"],
  },
  {
    tag: "Data pipeline · IoT",
    name: "GPS device ingestion at ~6M packets/day",
    problem:
      "GPS trackers from multiple hardware vendors speak different binary protocols — and none of that data is useful until it becomes clean, queryable records.",
    built:
      "The ingestion pipeline that parses vendor protocol frames over raw TCP across firmware variants, publishes to Kafka, and feeds PostgreSQL, Redis, and a geospatial index — with thread-safe processing and TCP framing that survives split and merged packets.",
    chips: [".NET", "TCP sockets", "Kafka", "PostgreSQL", "Tile38"],
  },
  {
    tag: "Dashboards · Revenue",
    name: "Booking, refunds & 50+ revenue reports",
    problem:
      "A state transport operator needs the full money trail — bookings, refunds, collections — visible and auditable.",
    built:
      "The reports module of an online passenger revenue system: 50+ transactional reports across sales, collections, refunds, and service-wise revenue, plus full-stack features on the booking and refund workflows themselves.",
    chips: ["ASP.NET Core", "Angular", "PostgreSQL", "Stored procedures"],
  },
];

export default function Work() {
  return (
    <section id="work" className="pb-4 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead
          label="Proof of work"
          title="Systems I build at production scale."
          sub="Built in my role on enterprise transit platforms for Indian transport authorities — shown here as capability. Client work stays confidential, and I bring the same standard to freelance projects. Happy to walk through real code and architecture on a discovery call."
        />
        <div className="mt-11 grid gap-5">
          {cases.map((c) => (
            <article
              key={c.name}
              className="lift grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 rounded-2xl border border-line bg-panel p-8 shadow-card max-[800px]:grid-cols-1 max-[800px]:gap-4"
            >
              <div>
                <div className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent">
                  {c.tag}
                </div>
                <h3 className="mt-2.5 font-display text-[23px] font-bold leading-tight">
                  {c.name}
                </h3>
                <p className="mt-3 text-[15px] italic text-muted">{c.problem}</p>
              </div>
              <div>
                <p className="text-[15.5px] text-muted">
                  <span className="font-bold text-ink">What I built: </span>
                  {c.built}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.chips.map((ch) => (
                    <Chip key={ch}>{ch}</Chip>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
