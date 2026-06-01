import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { whatsappLink, trackEvent } from "@/lib/site";

const faqs = [
  {
    q: "As peças têm garantia?",
    a: "Sim, todas têm garantia de 6 meses no banho de ouro. Se a peça apresentar qualquer problema nesse período, é só nos chamar no WhatsApp e a gente resolve — sem burocracia.",
  },
  {
    q: "Como funciona o atendimento?",
    a: "É tudo pelo WhatsApp, mas com pessoas de verdade. Nenhum robô, nenhum script. Você fala com quem entende de semijoias e te ajuda a escolher a peça certa para o seu momento.",
  },
  {
    q: "Vocês entregam para minha cidade?",
    a: "Sim! Enviamos para qualquer cidade do Brasil pelos Correios e transportadoras parceiras, com código de rastreio completo enviado assim que seu pedido sair.",
  },
  {
    q: "Qual é a qualidade do banho de ouro?",
    a: "Trabalhamos exclusivamente com fornecedores certificados, banho de ouro 18k em base de qualidade selecionada. Cada peça passa por curadoria antes de entrar no catálogo.",
  },
  {
    q: "Como faço para comprar?",
    a: "É simples: você escolhe a peça aqui no site (ou pede sugestão), chama a gente no WhatsApp e finalizamos juntos o pagamento e a entrega. Pode parcelar no cartão, pagar via Pix ou boleto.",
  },
  {
    q: "Posso comprar de presente? Tem embalagem especial?",
    a: "Claro! Todas as peças vêm em embalagem premium, perfeita para presente. Se quiser uma mensagem personalizada ou embalagem extra especial, é só avisar no WhatsApp.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28" aria-label="Perguntas frequentes">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        {/* Cabeçalho */}
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Ficou com dúvida?</span>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight sm:text-5xl">
            Perguntas <em className="not-italic gold-gradient-text">frequentes</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            As dúvidas mais comuns — respondidas com honestidade.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-border/70 bg-card px-5 transition-colors hover:border-[var(--gold)]/40"
            >
              <AccordionTrigger
                className="py-5 text-left font-display text-lg text-foreground hover:no-underline"
                onClick={() => trackEvent("faq_click", { question: f.q })}
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA FAQ — captura quem não encontrou a resposta */}
        <div className="mt-10 rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-6 text-center">
          <p className="text-sm font-medium text-foreground">Não encontrou o que procurava?</p>
          <p className="mt-1 text-sm text-muted-foreground">Nossa equipe responde em minutos, de verdade.</p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida que não encontrei no FAQ do site.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "faq", label: "Dúvida FAQ" })}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Perguntar no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
