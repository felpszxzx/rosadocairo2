import { whatsappLink, trackEvent } from "@/lib/site";

const items = [
  {
    name: "Mariana S.",
    city: "São Paulo, SP",
    date: "há 2 semanas",
    text: "Recebi meu colar lindamente embalado. A qualidade do banho é impecável — parece joia de ouro mesmo. E o atendimento? Top demais. Fizeram questão de acompanhar até a entrega.",
    stars: 5,
  },
  {
    name: "Camila R.",
    city: "Belo Horizonte, MG",
    date: "há 1 mês",
    text: "Já é a terceira compra e cada vez me surpreendo mais. As peças são lindas, o acabamento é de outro nível. A garantia que oferecem é real — precisei acionar uma vez e foi resolvido sem estresse.",
    stars: 5,
  },
  {
    name: "Juliana M.",
    city: "Recife, PE",
    date: "há 3 semanas",
    text: "Tudo pelo WhatsApp, super fácil. Chegou antes do prazo, embalagem impecável e exatamente como nas fotos. Já recomendei pra minha mãe e minhas amigas. Apaixonada!",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[var(--cream)]/60 py-20 sm:py-28 border-y border-border/60" aria-label="Depoimentos de clientes">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Quem usa, aprova</span>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight sm:text-5xl">
            Mais de <em className="not-italic gold-gradient-text">5.000 clientes</em> satisfeitas
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Lemos cada mensagem e guardamos cada elogio. Esses são reais — de clientes que voltam.
          </p>
        </div>

        {/* Cards de depoimento */}
        <ul className="mt-14 grid gap-6 md:grid-cols-3" role="list">
          {items.map((t) => (
            <li
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              {/* Estrelas */}
              <div className="flex gap-1 text-[var(--gold)]" aria-label={`${t.stars} de 5 estrelas`} role="img">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M12 2l2.39 6.95H22l-6.2 4.5L18.18 21 12 16.9 5.82 21l2.38-7.55L2 8.95h7.61z" />
                  </svg>
                ))}
              </div>

              {/* Depoimento */}
              <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-foreground/85">
                "{t.text}"
              </blockquote>

              {/* Rodapé */}
              <footer className="mt-6 border-t border-border/60 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{t.name}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.city}</p>
                  </div>
                  <p className="text-xs text-muted-foreground/70">{t.date}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>

        {/* Prova social + CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Veja mais avaliações no{" "}
            <a
              href="https://www.instagram.com/rosadocairosemijoias/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Instagram @rosadocairosemijoias
            </a>
          </p>
          <a
            href={whatsappLink("Olá! Vi os depoimentos e quero conhecer melhor as peças da Rosa do Cairo.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "testimonials", label: "CTA depoimentos" })}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-luxe)] transition-all hover:translate-y-[-2px] hover:bg-primary/90"
          >
            Quero ser a próxima cliente →
          </a>
        </div>
      </div>
    </section>
  );
}
