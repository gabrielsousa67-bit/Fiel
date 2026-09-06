import ctaPizza from "@/assets/cta-pizza.jpg";
import { Parallax, Reveal, WordsReveal } from "@/components/motion/Reveal";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[80svh]">
        <Parallax distance={60} className="absolute inset-0 -z-10 scale-110">
          <img
            src={ctaPizza}
            alt="Mesa compartilhada com pizzas artesanais à luz de velas"
            loading="lazy"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 -z-10 bg-ink/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background" />

        <div className="mx-auto flex min-h-[80svh] max-w-[1400px] flex-col items-center justify-center px-5 py-28 text-center md:px-10">
          <WordsReveal
            text="Hoje é dia de [pizza.]"
            className="max-w-[18ch] font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Escolha seu sabor favorito e faça seu pedido.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="w-full sm:w-auto">
            <a href="#cardapio" className="btn-gold mt-10 w-full px-12 py-5 sm:w-auto">
              Fazer pedido agora
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
