// ============================================================
// CONFIGURAÇÃO CENTRAL — Rosa do Cairo Semijoias
// Camada funcional: WhatsApp, rastreamento e catálogo.
// ============================================================

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

// ----------------------------------------------------------
// Dados do negócio / site
// ----------------------------------------------------------
export const BUSINESS_NAME = "Rosa do Cairo Semijoias";
export const SITE_URL = "https://rosadocairo.lovable.app";

// ----------------------------------------------------------
// WhatsApp
// Formato oficial do wa.me: somente DDI + DDD + número, sem +, espaços ou traços.
// ----------------------------------------------------------
export const WHATSAPP_NUMBER = "5516999488593";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Rosa do Cairo e gostaria de conhecer o catálogo de semijoias.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

// ----------------------------------------------------------
// Rastreamento de eventos (GA4 + GTM + Meta Pixel)
// Preencha apenas os IDs que você já tiver.
// Se algum ID ficar vazio, o site continua funcionando normalmente.
// ----------------------------------------------------------
export const TRACKING = {
  GA4_MEASUREMENT_ID: "G-K0KJS4PWS2", // ID da métrica / Measurement ID do GA4
  GA4_STREAM_ID: "14983971222", // Código de fluxo do GA4 — referência interna, não é usado no script
  GTM_CONTAINER_ID: "", // Exemplo: "GTM-XXXXXXX"
  META_PIXEL_ID: "", // Exemplo: "123456789012345"
};

export function hasTrackingId(id?: string) {
  if (!id) return false;
  const invalidValues = [
    "G-XXXXXXXXXX",
    "GTM-XXXXXXX",
    "XXXXXXXXXXXXXXXXX",
    "META_PIXEL_ID",
    "GA4_MEASUREMENT_ID",
    "GTM_CONTAINER_ID",
  ];
  return !invalidValues.includes(id.trim());
}

type TrackingParams = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const META_STANDARD_EVENTS = new Set([
  "AddPaymentInfo",
  "AddToCart",
  "AddToWishlist",
  "CompleteRegistration",
  "Contact",
  "CustomizeProduct",
  "Donate",
  "FindLocation",
  "InitiateCheckout",
  "Lead",
  "Purchase",
  "Schedule",
  "Search",
  "StartTrial",
  "SubmitApplication",
  "Subscribe",
  "ViewContent",
]);

// Helper central para disparar eventos em GA4 / GTM / Meta Pixel.
// Eventos personalizados no Meta usam trackCustom; eventos padrão usam track.
export function trackEvent(eventName: string, params: TrackingParams = {}) {
  if (typeof window === "undefined") return;

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null)
  );

  // GA4 via gtag
  if (window.gtag) {
    window.gtag("event", eventName, cleanParams);
  }

  // GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...cleanParams });

  // Meta Pixel
  if (window.fbq) {
    if (META_STANDARD_EVENTS.has(eventName)) {
      window.fbq("track", eventName, cleanParams);
    } else {
      window.fbq("trackCustom", eventName, cleanParams);
    }
  }
}

// ----------------------------------------------------------
// Catálogo de produtos
// Cada produto: id, código, nome, categoria, preço, imagem
// ----------------------------------------------------------
export interface Product {
  id: string;
  code: string; // código SKU visível na página
  name: string;
  category: string;
  price: string;
  originalPrice?: string; // preço riscado (opcional)
  image: string;
  badge?: string; // ex.: "Mais vendido", "Novidade"
}

// Catálogo estático — preparado para futura integração dinâmica (API/CRM).
export const products: Product[] = [
  {
    id: "1",
    code: "RC-001",
    name: "Colar Coração Dourado",
    category: "Colares",
    price: "R$ 129,90",
    image: product1,
    badge: "Mais vendido",
  },
  {
    id: "2",
    code: "RC-002",
    name: "Argolas Pérola Cairo",
    category: "Brincos",
    price: "R$ 159,90",
    image: product2,
  },
  {
    id: "3",
    code: "RC-003",
    name: "Bracelete Cristal",
    category: "Pulseiras",
    price: "R$ 189,90",
    image: product3,
    badge: "Novidade",
  },
  {
    id: "4",
    code: "RC-004",
    name: "Trio de Anéis Luxe",
    category: "Anéis",
    price: "R$ 149,90",
    image: product4,
  },
  {
    id: "5",
    code: "RC-005",
    name: "Colar Riviera Brilho",
    category: "Colares",
    price: "R$ 249,90",
    originalPrice: "R$ 299,90",
    image: product5,
    badge: "Oferta",
  },
  {
    id: "6",
    code: "RC-006",
    name: "Brincos Gota de Pérola",
    category: "Brincos",
    price: "R$ 139,90",
    image: product6,
  },
];
