export function SectionHead({
  label,
  title,
  sub,
}: {
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <>
      <div className="mb-4 font-mono text-[13px] uppercase tracking-[0.2em] text-accent">
        {label}
      </div>
      <h2 className="max-w-[24ch] text-balance font-display text-[clamp(30px,4.4vw,48px)] font-bold leading-[1.08]">
        {title}
      </h2>
      {sub ? <p className="mt-4 max-w-[62ch] text-[17.5px] text-muted">{sub}</p> : null}
    </>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-line bg-chip px-3 py-1.5 text-[13.5px] font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent">
      {children}
    </span>
  );
}

export const btnPrimaryCls =
  "inline-flex items-center gap-2 rounded-[10px] bg-accent px-[22px] py-[12px] text-[15px] font-bold text-accent-contrast no-underline transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_28px_rgba(41,70,230,0.35)]";

export const btnGhostCls =
  "inline-flex items-center gap-2 rounded-[10px] border border-line bg-panel px-[22px] py-[12px] text-[15px] font-bold text-ink no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent";

export const btnDarkGhostCls =
  "inline-flex items-center gap-2 rounded-[10px] border border-dark-line px-[22px] py-[12px] text-[15px] font-bold text-dark-ink no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-dark-accent hover:text-dark-accent";

export const WHATSAPP_URL =
  "https://wa.me/918128027890?text=Hi%20Shubham%2C%20I%20found%20your%20portfolio%20and%20have%20a%20project%20to%20discuss.";

export const EMAIL_URL =
  "mailto:modhshubham3@gmail.com?subject=Project%20inquiry";
