import { useState, useEffect } from "react";
import logoAsset from "@/assets/logo.asset.json";
import { whatsappLink, trackEvent } from "@/lib/site";

const links = [
  { href: "#beneficios", label: "Diferenciais" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function handleWhatsAppClick() {
    // Evento rastreável — capturado pelo GA4 / GTM / Meta Pixel
    trackEvent("whatsapp_click", { location: "navbar", label: "Navbar WhatsApp" });
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/95 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "border-transparent bg-background/80 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2" aria-label="Rosa do Cairo Semijoias — Voltar ao topo">
          <img src={logoAsset.url} alt="Rosa do Cairo Semijoias" className="h-10 w-auto sm:h-12" loading="eager" />
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="hidden items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md sm:inline-flex"
          aria-label="Falar no WhatsApp com a Rosa do Cairo"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M11.998 2.004C6.475 2.004 2 6.479 2 12.002c0 1.76.459 3.476 1.332 4.985L2.045 21.98l5.125-1.344A9.959 9.959 0 0011.998 22c5.523 0 9.998-4.477 9.998-9.998 0-2.671-1.04-5.183-2.929-7.071A9.951 9.951 0 0011.998 2.004zm0 18.313a8.27 8.27 0 01-4.213-1.152l-.302-.179-3.136.823.836-3.062-.197-.314a8.269 8.269 0 01-1.272-4.431c0-4.573 3.72-8.293 8.293-8.293 2.217 0 4.3.864 5.867 2.432a8.24 8.24 0 012.428 5.864c-.003 4.573-3.723 8.312-8.304 8.312z" />
          </svg>
          WhatsApp
        </a>

        {/* Botão menu mobile */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-[var(--gold)]/10 hover:text-primary lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="border-t border-border/60 bg-background/98 px-4 pb-4 backdrop-blur-md lg:hidden">
          <nav aria-label="Menu mobile" className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/75 transition-colors hover:bg-[var(--gold)]/10 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { setMenuOpen(false); handleWhatsAppClick(); }}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] py-3 text-sm font-medium text-white"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
