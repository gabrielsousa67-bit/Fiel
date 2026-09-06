import forno from "@/assets/galeria-forno.jpg";
import ingredientes from "@/assets/galeria-ingredientes.jpg";
import fatia from "@/assets/galeria-fatia.jpg";
import ambiente from "@/assets/ambiente.jpg";
import pizzaiolo from "@/assets/pizzaiolo.jpg";
import { GrowLine, Parallax, Reveal, RevealImage, WordsReveal } from "@/components/motion/Reveal";

export function Galeria() {
  return (
    <section id="galeria" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Galeria</p>
        </Reveal>
        <WordsReveal
          text="A casa por [dentro.]"
          className="mt-5 font-display text-[2.2rem] leading-[1.08] sm:text-5xl"
        />
        <GrowLine className="mt-8 w-32" />

        <div className="mt-14 grid gap-4 sm:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <RevealImage
              src={forno}
              alt="Forno a lenha com pizza sendo assada"
              width={1024}
              height={1280}
              className="aspect-4/5 w-full sm:aspect-3/2 lg:aspect-4/5"
            />
          </div>

          <div className="grid gap-4 sm:gap-6 lg:col-span-5 lg:mt-16">
            <Parallax distance={18}>
              <RevealImage
                src={ingredientes}
                alt="Ingredientes frescos sobre pedra escura"
                width={1280}
                height={1024}
                className="aspect-3/2 w-full"
              />
            </Parallax>
            <RevealImage
              src={fatia}
              alt="Fatia de pizza com queijo derretido"
              width={1024}
              height={1024}
              className="aspect-square w-full"
            />
          </div>

          <div className="lg:col-span-5 lg:-mt-10">
            <RevealImage
              src={pizzaiolo}
              alt="Pizzaiolo trabalhando a massa"
              width={1024}
              height={1280}
              className="aspect-4/5 w-full"
            />
          </div>

          <div className="lg:col-span-7">
            <Parallax distance={22}>
              <RevealImage
                src={ambiente}
                alt="Salão da pizzaria iluminado por velas"
                width={1920}
                height={1088}
                className="aspect-3/2 w-full lg:aspect-16/10"
              />
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
}
