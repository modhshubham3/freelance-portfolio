import Reveal from "./Reveal";
import { btnDarkGhostCls, btnPrimaryCls, EMAIL_URL, WHATSAPP_URL } from "./ui";
import TrackedLink from "./TrackedLink";

export default function Contact() {
  return (
    <section id="contact" className="px-0 pt-[100px]">
      <div className="dot-grid">
        <Reveal className="mx-auto max-w-[1080px] px-7 pb-[84px] pt-[76px]">
          <div className="font-mono text-[12.5px] uppercase tracking-[0.2em] text-dark-accent">
            Contact
          </div>
          <h2 className="mt-4 max-w-[20ch] text-balance font-display text-[clamp(32px,4.8vw,52px)] font-extrabold leading-[1.08] text-dark-ink">
            Have a project in mind? Let&rsquo;s scope it.
          </h2>
          <p className="mt-5 max-w-[58ch] text-[17.5px] text-dark-muted">
            Send me three things — <strong className="text-dark-ink">what you&rsquo;re building</strong>,{" "}
            <strong className="text-dark-ink">your timeline</strong>, and{" "}
            <strong className="text-dark-ink">your budget range</strong> — and
            you&rsquo;ll have a reply within 24 hours, and a written proposal
            within 48 hours of our discovery call.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <TrackedLink
              event="email_click"
              where="contact"
              href={EMAIL_URL}
              className={btnPrimaryCls}
            >
              Email me →
            </TrackedLink>
            <TrackedLink
              event="whatsapp_click"
              where="contact"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnDarkGhostCls}
            >
              WhatsApp
            </TrackedLink>
            <a
              href="https://www.linkedin.com/in/shubham-modh-26a23021b"
              target="_blank"
              rel="noopener noreferrer"
              className={btnDarkGhostCls}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/modhshubham3"
              target="_blank"
              rel="noopener noreferrer"
              className={btnDarkGhostCls}
            >
              GitHub ↗
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[13px] text-dark-muted">
            <a href="mailto:modhshubham3@gmail.com" className="text-dark-muted hover:text-dark-accent">
              modhshubham3@gmail.com
            </a>
            <a href="tel:+918128027890" className="text-dark-muted hover:text-dark-accent">
              +91 81280 27890
            </a>
            <span>Ahmedabad, India · Remote worldwide</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
