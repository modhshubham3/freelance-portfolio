import { btnDarkGhostCls, btnPrimaryCls, WHATSAPP_URL } from "./ui";

const stats = [
  { value: "~700", label: "vehicles live-tracked on a platform I develop" },
  { value: "~6M", label: "GPS packets ingested every day" },
  { value: "3", label: "government transport authorities served" },
  { value: "2.5+", label: "years shipping production code" },
];

export default function Hero() {
  return (
    <header className="dot-grid">
      <div className="mx-auto grid max-w-[1080px] grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center gap-12 px-7 pb-[76px] pt-[84px] max-[900px]:grid-cols-1">
        <div>
          <div className="rise rise-1 font-mono text-[12.5px] uppercase tracking-[0.2em] text-dark-accent">
            Freelance .NET &amp; Full-Stack Developer · Ahmedabad, India · Remote worldwide
          </div>
          <h1 className="rise rise-2 mt-6 text-balance font-display text-[clamp(38px,5.6vw,64px)] font-extrabold leading-[1.06] text-dark-ink">
            Web apps, APIs, and dashboards that ship on time —{" "}
            <span className="text-dark-accent">and stay fast after launch.</span>
          </h1>
          <p className="rise rise-3 mt-6 max-w-[56ch] text-[18px] text-dark-muted">
            I&rsquo;m Shubham, a full-stack developer from India. By day I keep a
            live platform tracking ~700 city buses running in production — your
            project gets the same discipline: clear scope, weekly demos, and
            code that doesn&rsquo;t fall over after handover.
          </p>
          <div className="rise rise-4 mt-9 flex flex-wrap gap-3.5">
            <a href="#contact" className={btnPrimaryCls}>
              Start a project →
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnDarkGhostCls}
            >
              WhatsApp me
            </a>
            <a href="#services" className={btnDarkGhostCls}>
              See services
            </a>
          </div>
          <div className="rise rise-4 mt-10 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[12.5px] text-dark-muted">
            <span>✓ Replies within 24 hours</span>
            <span>✓ IST — overlaps EU afternoons &amp; US East mornings</span>
            <span>✓ Fixed-price or hourly</span>
          </div>
        </div>

        <aside className="rise rise-3 rounded-2xl border border-dark-line bg-dark-panel p-7 max-[900px]:max-w-[440px]">
          <div className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-dark-accent">
            Production background — my day job
          </div>
          <dl className="mt-5 grid gap-5">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="min-w-[86px] font-display text-[30px] font-bold tabular-nums text-dark-ink">
                  {s.value}
                </dd>
                <dd className="text-[14.5px] leading-snug text-dark-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 border-t border-dark-line pt-4 text-[13px] text-dark-muted">
            Enterprise transit platforms (ITMS) for Indian transport authorities
            — shown as background; client work stays confidential.{" "}
            <a
              href="https://www.linkedin.com/in/shubham-modh-26a23021b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-accent underline-offset-2 hover:underline"
            >
              Verify me on LinkedIn ↗
            </a>
          </p>
        </aside>
      </div>
    </header>
  );
}
