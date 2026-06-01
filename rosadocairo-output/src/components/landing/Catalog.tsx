import { products, whatsappLink, trackEvent } from "@/lib/site";

export function Catalog() {
  function handleProductClick(productName: string, productCode: string) {
    // Evento rastreável — Lead / InitiateCheckout para Meta Pixel
    trackEvent("product_interest", {
      product_name: productName,
      product_code: productCode,
      currency: "BRL",
    });
    trackEvent("InitiateCheckout", { content_name: productName });
  }

  function handleCatalogCTA() {
    trackEvent("whatsapp_click", { location: "catalog", label: "Catálogo completo" });
  }

  return (
    <section id="catalogo" className="py-20 sm:py-28" aria-label="Catálogo de produtos">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Cabeçalho */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Coleção</span>
            <h2 className="mt-3 font-display text-3xl font-light leading-tight sm:text-5xl">
              Peças <em className="not-italic gold-gradient-text">selecionadas</em> para você
            </h2>
            <p className="mt-4 text-muted-foreground">
              Uma curadoria das nossas semijoias mais desejadas. Todas com banho de ouro 18k e garantia.
              Quer ver mais? O catálogo completo está no WhatsApp.
            </p>
          </div>
          <a
            href={whatsappLink("Olá! Quero ver o catálogo completo da Rosa do Cairo.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCatalogCTA}
            className="shrink-0 text-sm font-medium uppercase tracking-wider text-primary underline-offset-4 hover:underline"
            aria-label="Ver catálogo completo via WhatsApp"
          >
            Catálogo completo →
          </a>
        </div>

        {/* Grid de produtos */}
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {products.map((p) => (
            <li key={p.id}>
              <article
                className="group overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-soft)]"
                aria-label={`${p.name} — ${p.price}`}
              >
                {/* Imagem */}
                <div className="relative aspect-square overflow-hidden bg-[var(--sand)]">
                  <img
                    src={p.image}
                    alt={`${p.name} — semijoia com banho de ouro 18k`}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Categoria */}
                  <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/70 backdrop-blur">
                    {p.category}
                  </span>
                  {/* Badge (Mais vendido / Novidade / Oferta) */}
                  {p.badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-primary-foreground">
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Informações */}
                <div className="p-5">
                  {/* Código SKU */}
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-muted-foreground/60">
                    Cód. {p.code}
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg leading-tight text-foreground">{p.name}</h3>
                      <div className="mt-1 flex items-baseline gap-2">
                        <p className="font-display text-xl text-primary">{p.price}</p>
                        {p.originalPrice && (
                          <p className="text-sm text-muted-foreground line-through">{p.originalPrice}</p>
                        )}
                      </div>
                    </div>

                    {/* CTA do produto — WhatsApp com mensagem dinâmica */}
                    <a
                      href={whatsappLink(
                        `Olá! Tenho interesse na peça "${p.name}" (cód. ${p.code}) por ${p.price}. Gostaria de mais informações.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleProductClick(p.name, p.code)}
                      aria-label={`Tenho interesse em ${p.name} — abrir WhatsApp`}
                      className="inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/60 px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary transition-all hover:bg-[var(--gold)]/15 hover:border-[var(--gold)] hover:shadow-sm active:scale-95"
                    >
                      Tenho interesse
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA final — ver mais */}
        <div className="mt-12 text-center">
          <a
            href={whatsappLink("Olá! Quero ver mais peças da Rosa do Cairo. Vocês têm mais opções?")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCatalogCTA}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-luxe)] transition-all hover:translate-y-[-2px] hover:bg-primary/90"
          >
            Ver mais peças no WhatsApp →
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Novidades toda semana. Atendimento humano e rápido.
          </p>
        </div>
      </div>
    </section>
  );
}
