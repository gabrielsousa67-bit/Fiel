import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

const EASE = [0.22, 0.85, 0.24, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: reduce ? 0.4 : 1, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  step = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  step?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: step, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 32,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.4 : 0.95, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Reveals a headline word by word. Words wrapped in [] render in gold. */
export function WordsReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: delay } } }}
    >
      {words.map((raw, i) => {
        const accent = raw.startsWith("[") && raw.endsWith("]");
        const word = accent ? raw.slice(1, -1) : raw;
        return (
          <span key={`${raw}-${i}`} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className={
                accent ? "inline-block italic text-gold pr-[0.28em]" : "inline-block pr-[0.28em]"
              }
              variants={{
                hidden: reduce ? { opacity: 0 } : { opacity: 0, y: "62%" },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduce ? 0.4 : 1.05, ease: EASE },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.h2>
  );
}

/** Fade + slight zoom-out image reveal. */
export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reduce ? 0.5 : 1.5, ease: EASE }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        className={imgClassName ?? "h-full w-full object-cover"}
      />
    </motion.div>
  );
}

/** Grows a thin decorative line as it enters the viewport. */
export function GrowLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={`hairline origin-left ${className ?? ""}`}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: EASE }}
    />
  );
}

/** Very soft vertical parallax. */
export function Parallax({
  children,
  distance = 60,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? {} : { y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
