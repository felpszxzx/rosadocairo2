import { useState, useEffect } from "react";
import { whatsappLink, trackEvent } from "@/lib/site";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  // Aparece após 3s de scroll ou 5s de permanência na página
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    const handleScroll = () => {
      if (window.scrollY > 300) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    trackEvent("whatsapp_click", { location: "float_button", label: "Botão flutuante WhatsApp" });
    trackEvent("Contact", {}); // Meta Pixel Contact event
  }

  return (
    <a
      href={whatsappLink("Olá! Vim pelo site da Rosa do Cairo e gostaria de falar com vocês.")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Falar no WhatsApp com a Rosa do Cairo"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[var(--whatsapp)] px-4 py-3 text-white shadow-[0_4px_24px_-4px_color-mix(in_oklab,var(--whatsapp)_60%,transparent)] transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_32px_-4px_color-mix(in_oklab,var(--whatsapp)_70%,transparent)] sm:bottom-7 sm:right-7 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      {/* Indicador de online */}
      <span className="relative flex h-3 w-3" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
      </span>

      {/* Ícone WhatsApp */}
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35zM16.02 6.5c-5.25 0-9.5 4.25-9.5 9.5 0 1.68.44 3.32 1.28 4.76L6 26l5.4-1.77a9.46 9.46 0 0 0 4.62 1.18h.01c5.25 0 9.5-4.25 9.5-9.5 0-2.54-.99-4.92-2.79-6.71a9.4 9.4 0 0 0-6.72-2.7m0 17.4h-.01a7.86 7.86 0 0 1-4-1.1l-.29-.17-2.97.97.99-2.89-.19-.3a7.9 7.9 0 0 1-1.21-4.21c0-4.37 3.55-7.92 7.92-7.92 2.12 0 4.1.83 5.6 2.32a7.86 7.86 0 0 1 2.32 5.6c0 4.37-3.55 7.91-7.92 7.91" />
      </svg>

      {/* Texto */}
      <span className="hidden text-sm font-medium sm:inline">Fale conosco</span>
    </a>
  );
}
