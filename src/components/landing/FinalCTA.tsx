import { whatsappLink, trackEvent } from "@/lib/site";

export function FinalCTA() {
  function handleClick() {
    trackEvent("whatsapp_click", { location: "final_cta", label: "CTA final página" });
    trackEvent("Lead", { content_name: "FinalCTA" }); // Meta Pixel Lead event
  }

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      aria-label="Fale com a Rosa do Cairo"
    >
      {/* Gradiente decorativo */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--gold-soft) 60%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        {/* Eyebrow */}
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Pronta para brilhar?</span>

        {/* Headline */}
        <h2 className="mt-4 font-display text-4xl font-light leading-tight text-foreground sm:text-6xl">
          A próxima peça favorita<br />está a{" "}
          <em className="not-italic gold-gradient-text">uma mensagem</em> de distância
        </h2>

        {/* Humanização */}
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Manda uma mensagem agora. Vamos te ajudar a escolher a peça perfeita — seja para você,
          para presentear ou para um momento especial.
        </p>

        {/* Sinais de confiança */}
        <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            "Resposta em minutos",
            "Garantia de 6 meses",
            "Atendimento humano",
          ].map((s) => (
            <span key={s} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" aria-hidden="true" />
              {s}
            </span>
          ))}
        </div>

        {/* CTA principal */}
        <div className="mt-10">
          <a
            href={whatsappLink("Olá! Vim pelo site e quero conhecer as joias da Rosa do Cairo. Podem me ajudar?")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-5 text-sm font-medium uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-luxe)] transition-all hover:translate-y-[-3px] hover:bg-primary/90 hover:shadow-[0_20px_40px_-10px_color-mix(in_oklab,var(--rose)_35%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Falar com a Rosa do Cairo no WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.998 2C6.475 2 2 6.477 2 12c0 1.76.459 3.477 1.332 4.987L2 22l5.125-1.345A9.952 9.952 0 0011.998 22C17.521 22 17.521 22 22 12c0-2.671-1.04-5.182-2.929-7.071A9.949 9.949 0 0011.998 2zm0 18.314a8.274 8.274 0 01-4.213-1.152l-.301-.179-3.136.822.836-3.06-.197-.315A8.263 8.263 0 013.715 12c0-4.573 3.72-8.293 8.293-8.293 2.217 0 4.3.864 5.867 2.433A8.241 8.241 0 0120.302 12c-.003 4.573-3.723 8.314-8.304 8.314z" />
            </svg>
            Quero falar no WhatsApp
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Atendimento de segunda a sábado · Resposta rápida garantida
        </p>
      </div>
    </section>
  );
}
