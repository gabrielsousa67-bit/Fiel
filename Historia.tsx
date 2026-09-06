import { Clock3, Leaf, HandPlatter } from "lucide-react";
import pizzaiolo from "@/assets/pizzaiolo.jpg";
import { GrowLine, Parallax, Reveal, RevealImage, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";

const PILLARS = [
  {
    icon: Clock3,
    title: "Massa de longa fermentação",
    text: "Até 48 horas de descanso para uma massa leve, aerada e fácil de digerir.",
  },
  {
    icon: Leaf,
    title: "Ingredientes selecionados",
    text: "Tomates italianos, mozzarella fresca e produtores que conhecemos pelo nome.",
  },
  {
    icon: HandPlatter,
    title: "Preparação artesanal",
    text: "Cada disco é aberto à mão e assado à vista, em forno a lenha de pedra.",
  },
];

export function Historia() {
  return (
    <section id="sobre" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <Parallax distance={26} className="order-1">
          <div className="relative">
            <RevealImage
              src={pizzaiolo}
              alt="Pizzaiolo abrindo a massa de longa fermentação"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full"
              imgClassName="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 border border-gold/20" />
          </div>
        </Parallax>

        <div className="order-2 min-w-0">
          <Reveal>
            <p className="eyebrow">Nossa história</p>
          </Reveal>

          <WordsReveal
            text="Paixão em cada [detalhe.]"
            className="mt-5 font-display text-[2.2rem] leading-[1.08] sm:text-5xl"
          />

          <GrowLine className="mt-8 w-28" />

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              O Forno Nero nasceu de uma obsessão simples: fazer a melhor pizza possível com o menor
              número de ingredientes. Trabalhamos com fermentação lenta, farinhas nobres e um forno
              a lenha que chega a 450°C — o suficiente para selar o sabor em pouco mais de noventa
              segundos.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              O salão foi pensado para a noite: luz baixa, madeira, cobre e o brilho constante do
              fogo. Um lugar para ficar mais tempo do que o previsto.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-8 sm:grid-cols-3" delay={0.1}>
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} className="min-w-0">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.3} />
                <h3 className="mt-4 text-[0.68rem] font-semibold tracking-[0.2em] text-foreground uppercase">
                  {title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
