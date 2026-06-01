import { whatsappLink, trackEvent } from "@/lib/site";

const items = [
  {
    title: "Garantia real, não promessa",
    desc: "6 meses de garantia no banho de ouro. Se acontecer qualquer problema, a gente resolve. Simples assim.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
  {
    title: "Ouro 18k selecionado",
    desc: "Trabalhamos só com fornecedores certificados. Cada peça passa por curadoria antes de chegar até você.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    ),
  },
  {
    title: "Atendimento com quem entende",
    desc: "Nada de bot. Você fala com a gente direto pelo WhatsApp — para tirar dúvidas, pedir sugestão ou acompanhar o pedido.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    ),
  },
  {
    title: "Do Brasil para o Brasil",
    desc: "Enviamos para qualquer cidade, com rastreio e embalagem que preserva cada detalhe até a sua porta.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    ),
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="border-y border-border/60 bg-[var(--cream)]/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Por que Rosa do Cairo</span>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight sm:text-5xl">
            Mais do que joia.<br />
            <em className="not-italic gold-gradient-text">Uma experiência.</em>
          </h2>
          <div className="mx-auto mt-6 gold-divider w-32" aria-hidden="true" />
          <p className="mt-6 text-muted-foreground">
            Somos uma marca real, com pessoas reais por trás de cada peça e cada atendimento.
          </p>
        </div>

        {/* Cards */}
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {items.map((it) => (
            <li
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-soft)]"
            >
              {/* Ícone */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] transition-colors group-hover:bg-[var(--gold)]/25">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
                  {it.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </li>
          ))}
        </ul>

        {/* CTA inline — mid-page conversion */}
        <div className="mt-14 rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-8 text-center">
          <p className="font-display text-xl text-foreground sm:text-2xl">
            Ficou com dúvida? Nossa equipe responde em minutos.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Sem robôs. Sem script. Só uma conversa real sobre a peça que você quer.
          </p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida sobre os produtos da Rosa do Cairo.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "benefits", label: "Dúvida diferenciais" })}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)] px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary transition-all hover:bg-[var(--gold)]/10"
          >
            Tirar dúvida pelo WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
