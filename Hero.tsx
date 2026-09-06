import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Wheat, Sprout, Flame } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";
import { GrowLine } from "@/components/motion/Reveal";

const EASE = [0.22, 0.85, 0.24, 1] as const;

const MARKERS = [
  { icon: Wheat, label: "Massa artesanal" },
  { icon: Sprout, label: "Ingredientes selecionados" },
  { icon: Flame, label: "Forno de alta temperatura" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="inicio" ref={ref} className="relative min-h-[92svh] overflow-hidden">
      <motion.div
        style={reduce ? {} : { scale, opacity }}
        className="relative flex min-h-[92svh] flex-col justify-end"
      >
        <motion.div style={reduce ? {} : { y: imgY }} className="absolute inset-0 -z-10">
          <motion.img
            src={heroPizza}
            alt="Pizza artesanal recém-saída do forno a lenha"
            width={1920}
            height={1088}
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: EASE }}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/25 to-transparent" />
        </motion.div>

        <div className="mx-auto w-full max-w-[1400px] px-5 pt-32 pb-14 md:px-10 md:pt-40 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="eyebrow"
          >
            Bem-vindo
          </motion.p>

          <h1 className="mt-6 max-w-[16ch] font-display text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[5.2rem]">
            {["O", "sabor", "que", "[transforma]", "momentos."].map((raw, i) => {
              const accent = raw.startsWith("[");
              const word = accent ? raw.slice(1, -1) : raw;
              return (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: "70%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.55 + i * 0.11, ease: EASE }}
                    className={`inline-block pr-[0.26em] ${accent ? "text-gold italic" : ""}`}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </h1>

          <GrowLine className="mt-9 w-40" />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.05, ease: EASE }}
            className="mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Pizzas artesanais preparadas com ingredientes selecionados, massa de longa fermentação e
            muito sabor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.25, ease: EASE }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#cardapio" className="btn-gold w-full sm:w-auto">
              Ver Cardápio
            </a>
            <a href="#pedido" className="btn-outline w-full sm:w-auto">
              Fazer Pedido
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 1.5 } } }}
            className="mt-14 grid gap-5 border-t border-border pt-8 sm:grid-cols-3"
          >
            {MARKERS.map(({ icon: Icon, label }) => (
              <motion.li
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
                }}
                className="flex min-w-0 items-center gap-3"
              >
                <Icon className="h-4 w-4 shrink-0 text-copper" strokeWidth={1.4} />
                <span className="truncate text-[0.63rem] tracking-[0.24em] text-muted-foreground uppercase">
                  {label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
