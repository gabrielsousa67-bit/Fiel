import ambiente from "@/assets/ambiente.jpg";
import { GrowLine, Parallax, Reveal, WordsReveal } from "@/components/motion/Reveal";

export function Experiencia() {
  return (
    <section id="reservas" className="relative overflow-hidden">
      <div className="relative min-h-[85svh]">
        <Parallax distance={70} className="absolute inset-0 -z-10 scale-110">
          <img
            src={ambiente}
            alt="Salão da pizzaria à noite com forno a lenha aceso"
            loading="lazy"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/55 to-background" />

        <div className="mx-auto flex min-h-[85svh] max-w-[1400px] flex-col justify-center px-5 py-28 md:px-10">
          <Reveal>
            <p className="eyebrow">Experiência</p>
          </Reveal>
          <WordsReveal
            text="Mais que uma [pizza.]"
            className="mt-5 max-w-[16ch] font-display text-[2.4rem] leading-[1.05] sm:text-6xl lg:text-7xl"
          />
          <GrowLine className="mt-9 w-40" />
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Uma experiência criada para reunir pessoas, sabores e bons momentos.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contato" className="btn-outline w-full sm:w-auto">
                Reservar mesa
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
