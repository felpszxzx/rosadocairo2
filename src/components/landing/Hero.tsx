import heroImg from "@/assets/hero-jewelry.jpg";
import { whatsappLink, trackEvent } from "@/lib/site";

export function Hero() {
  function handleWhatsApp() {
    trackEvent("whatsapp_click", { location: "hero", label: "Hero CTA principal" });
  }
  function handleCatalog() {
    trackEvent("cta_click", { location: "hero", label: "Ver catálogo" });
  }

  return (
    <section id="top" className="relative overflow-hidden" aria-label="Apresentação Rosa do Cairo">
      {/* Gradiente decorativo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 60% at 75% 30%, color-mix(in oklab, var(--gold-soft) 55%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        {/* Coluna de texto */}
        <div className="animate-float-in">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Semijoias · Banho de Ouro 18k
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-balance text-4xl font-light leading-[1.05] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Joias que carregam<br />
            <em className="not-italic gold-gradient-text font-medium">a sua história</em>
          </h1>

          {/* Subheadline humanizada */}
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cada peça é escolhida com cuidado. Banho de ouro 18k, acabamento minucioso e garantia real.
            Do catálogo até a sua porta — com atendimento humano pelo WhatsApp, do início ao fim.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-luxe)] transition-all hover:translate-y-[-2px] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Falar com a Rosa do Cairo no WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.998 2C6.475 2 2 6.477 2 12c0 1.76.459 3.477 1.332 4.987L2 22l5.125-1.345A9.952 9.952 0 0011.998 22C17.521 22 22 17.523 22 12c0-2.671-1.04-5.182-2.929-7.071A9.949 9.949 0 0011.998 2zm0 18.314a8.274 8.274 0 01-4.213-1.152l-.301-.179-3.136.822.836-3.06-.197-.315A8.263 8.263 0 013.715 12c0-4.573 3.72-8.293 8.293-8.293 2.217 0 4.3.864 5.867 2.433A8.241 8.241 0 0120.302 12c-.003 4.573-3.723 8.314-8.304 8.314z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="#catalogo"
              onClick={handleCatalog}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--gold)]/60 px-7 py-4 text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-[var(--gold)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              Ver catálogo
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Números de prova social */}
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border/70 pt-8 max-w-md">
            {[
              { value: "+5 mil", label: "clientes" },
              { value: "18k", label: "banho de ouro" },
              { value: "6 meses", label: "de garantia" },
            ].map(({ value, label }) => (
              <div key={label}>
                <dt className="font-display text-2xl text-primary">{value}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Coluna da imagem */}
        <div className="relative animate-float-in [animation-delay:120ms]">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[var(--gold)]/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-luxe)] ring-1 ring-[var(--gold)]/30">
            <img
              src={heroImg}
              alt="Colar dourado com pérola sobre seda bege — Rosa do Cairo Semijoias"
              width={1600}
              height={1280}
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          {/* Badge de garantia */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[var(--gold)]/40 bg-card/95 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur sm:block">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Garantia inclusa</p>
            <p className="font-display text-lg text-primary">6 meses no banho</p>
          </div>
          {/* Badge de avaliação */}
          <div className="absolute -top-4 -right-4 hidden rounded-2xl border border-[var(--gold)]/40 bg-card/95 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur sm:block">
            <div className="flex gap-0.5" aria-label="Avaliação 4.9 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-[var(--gold)]" aria-hidden="true">
                  <path d="M12 2l2.39 6.95H22l-6.2 4.5L18.18 21 12 16.9 5.82 21l2.38-7.55L2 8.95h7.61z" />
                </svg>
              ))}
            </div>
            <p className="mt-1 text-xs font-medium text-foreground">4.9 · +312 avaliações</p>
          </div>
        </div>
      </div>
    </section>
  );
}
