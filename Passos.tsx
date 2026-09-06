import { GrowLine, Reveal, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";

const STEPS = [
  { n: "01", title: "Escolha suas pizzas", text: "Navegue pelo cardápio por categoria." },
  { n: "02", title: "Monte seu pedido", text: "Ajuste quantidades e confira o total." },
  { n: "03", title: "Finalize pelo WhatsApp", text: "Enviamos o resumo completo do pedido." },
  { n: "04", title: "Receba em casa", text: "Entrega quente, embalada com cuidado." },
];

export function Passos() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Como funciona</p>
        </Reveal>
        <WordsReveal
          text="Seu pedido em poucos [passos.]"
          className="mt-5 max-w-[22ch] font-display text-[2.2rem] leading-[1.08] sm:text-5xl"
        />
        <GrowLine className="mt-8 w-32" />

        <Stagger className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <StaggerItem key={s.n} className="min-w-0 bg-background p-8 md:p-10">
              <span className="font-display text-4xl text-gold/70">{s.n}</span>
              <h3 className="mt-6 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                {s.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
