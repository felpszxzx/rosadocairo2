import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Benefits } from "@/components/landing/Benefits";
import { Catalog } from "@/components/landing/Catalog";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

// ── SEO ────────────────────────────────────────────────────
const TITLE = "Rosa do Cairo Semijoias · Banho de Ouro 18k com Garantia";
const DESCRIPTION =
  "Semijoias femininas com banho de ouro 18k, garantia de 6 meses e curadoria exclusiva. Atendimento humano no WhatsApp e envio para todo o Brasil.";
const SITE_URL = "https://www.rosadocairo.com.br"; // ← Atualize com seu domínio real

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "semijoias, brincos dourados, colar ouro 18k, pulseira dourada, anéis dourados, semijoias femininas, banho de ouro, Rosa do Cairo" },
      // Open Graph
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Rosa do Cairo Semijoias" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      // Twitter/X Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          name: "Rosa do Cairo Semijoias",
          description: DESCRIPTION,
          url: SITE_URL,
          telephone: "+55-16-99948-8593",
          areaServed: "BR",
          priceRange: "R$129 – R$299",
          currenciesAccepted: "BRL",
          paymentAccepted: "Pix, cartão de crédito, boleto",
          sameAs: [
            "https://www.instagram.com/rosadocairosemijoias/",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Catálogo Rosa do Cairo",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Semijoias com banho de ouro 18k" } },
            ],
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "312",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <TrustBar />
        <Benefits />
        <Catalog />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
