import { whatsappLink, trackEvent } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Você escolhe",
    desc: "Navegue pelo catálogo aqui no site ou mande uma mensagem descrevendo o que está procurando. Temos peças para todos os estilos.",
  },
  {
    n: "02",
    title: "A gente cuida",
    desc: "Nossa equipe te atende no WhatsApp, tira dúvidas, indica a peça certa e faz tudo com carinho. Nada de bot — é gente de verdade.",
  },
  {
    n: "03",
    title: "Chega até você",
    desc: "Sua semijoia embalada com cuidado e enviada para qualquer cidade do Brasil, com rastreio do começo ao fim.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28" aria-label="Como funciona a compra">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Simples assim</span>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight sm:text-5xl">
            Da escolha à sua <em className="not-italic gold-gradient-text">porta</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Compramos com você, não para você. Cada etapa tem um humano do outro lado.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-14 grid gap-8 md:grid-cols-3" role="list">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="rounded-2xl border border-border/70 bg-card p-8 h-full transition-all hover:border-[var(--gold)]/40 hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-4">
                  <span className="font-display text-4xl gold-gradient-text" aria-hidden="true">{s.n}</span>
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-1rem] top-1/2 hidden -translate-y-1/2 text-2xl text-[var(--gold)] md:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* CTA after steps */}
        <div className="mt-12 text-center">
          <a
            href={whatsappLink("Olá! Quero começar minha compra na Rosa do Cairo.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "how_it_works", label: "CTA como funciona" })}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)] px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-primary transition-all hover:bg-[var(--gold)]/10"
          >
            Começar agora pelo WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
