import { Plus } from "lucide-react";
import { toast } from "sonner";
import { FEATURED } from "@/lib/menu";
import { useCart } from "@/components/site/cart";
import { AnimatedPrice } from "@/components/motion/AnimatedPrice";
import { GrowLine, Reveal, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";

export function Destaques() {
  const { add } = useCart();

  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Pizzas em destaque</p>
        </Reveal>
        <WordsReveal
          text="Sabores que [conquistam.]"
          className="mt-5 max-w-[20ch] font-display text-[2.2rem] leading-[1.08] sm:text-5xl"
        />
        <GrowLine className="mt-8 w-32" />

        <Stagger
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4"
          step={0.14}
        >
          {FEATURED.map((p) => (
            <StaggerItem
              key={p.id}
              className="group w-[78vw] shrink-0 snap-start border border-border bg-card/60 transition-colors duration-500 hover:border-gold/40 sm:w-[60vw] md:w-auto"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                  <h3 className="truncate font-display text-xl">{p.name}</h3>
                  <AnimatedPrice value={p.price} className="text-sm text-gold" />
                </div>
                <p className="mt-3 min-h-[3rem] text-xs leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    add(p);
                    toast.success(`${p.name} adicionada ao pedido`);
                  }}
                  className="mt-6 flex w-full items-center justify-between border-t border-border pt-4 text-[0.63rem] tracking-[0.24em] text-muted-foreground uppercase transition-colors duration-300 hover:text-gold"
                >
                  Adicionar ao pedido
                  <Plus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                </button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center md:justify-start">
            <a href="#cardapio" className="btn-outline">
              Ver cardápio completo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
