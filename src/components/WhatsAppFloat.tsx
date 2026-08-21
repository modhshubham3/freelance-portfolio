import { WHATSAPP_URL } from "./ui";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 hidden h-[54px] w-[54px] items-center justify-center rounded-full bg-[#25D366] text-[26px] shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105 max-[640px]:flex"
    >
      <span aria-hidden="true">💬</span>
    </a>
  );
}
