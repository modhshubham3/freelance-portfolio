import MobileMenu from "./MobileMenu";

const sections = [
  { no: "", label: "Services", href: "#services" },
  { no: "", label: "Work", href: "#work" },
  { no: "", label: "Process", href: "#process" },
  { no: "", label: "Ways to work", href: "#engagement" },
  { no: "", label: "FAQ", href: "#faq" },
];

export default function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-[10px]"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:rounded-lg focus:border focus:border-line focus:bg-panel focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[64px] max-w-[1080px] items-center gap-6 px-7 max-[380px]:gap-3">
        <a href="#main" className="font-display text-[20px] font-bold text-ink no-underline">
          Shubham Modh<span className="text-accent">.</span>
        </a>
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
          <span className="h-2 w-2 rounded-full bg-ok motion-safe:animate-pulse-dot" />
          <span className="max-[640px]:hidden">Available for projects</span>
          <span className="hidden max-[640px]:inline">Available</span>
        </span>
        <div className="ml-auto flex items-center gap-[20px] max-[380px]:gap-2.5">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="text-[14.5px] font-medium text-ink no-underline transition-colors duration-200 hover:text-accent max-[860px]:hidden"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-[18px] py-[9px] text-[14px] font-bold text-accent-contrast no-underline transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            Start a project
          </a>
          <MobileMenu sections={sections} />
        </div>
      </div>
    </nav>
  );
}
