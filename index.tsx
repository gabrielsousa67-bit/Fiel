import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/components/site/cart";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Historia } from "@/components/site/Historia";
import { Destaques } from "@/components/site/Destaques";
import { Experiencia } from "@/components/site/Experiencia";
import { Passos } from "@/components/site/Passos";
import { Cardapio } from "@/components/site/Cardapio";
import { Galeria } from "@/components/site/Galeria";
import { Localizacao } from "@/components/site/Localizacao";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";
import { FloatingCart } from "@/components/site/FloatingCart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forno Nero — Pizzaria Artesanal em São Paulo" },
      {
        name: "description",
        content:
          "Pizzas artesanais de longa fermentação assadas em forno a lenha. Faça seu pedido pelo WhatsApp ou reserve sua mesa na Vila Madalena.",
      },
      { property: "og:title", content: "Forno Nero — Pizzaria Artesanal" },
      {
        property: "og:description",
        content:
          "Massa de longa fermentação, ingredientes selecionados e forno a lenha. Pizza artesanal na Vila Madalena, São Paulo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <Historia />
        <Destaques />
        <Experiencia />
        <Passos />
        <Cardapio />
        <Galeria />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCart />
      <Toaster />
    </CartProvider>
  );
}
