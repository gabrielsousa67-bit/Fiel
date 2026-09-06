import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Flame } from "lucide-react";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Reservas", href: "#reservas" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" className="flex min-w-0 items-center gap-3">
      <Flame className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
      <span className="min-w-0">
        <span className="block font-display text-xl leading-none tracking-[0.18em] text-foreground">
          FORNO NERO
        </span>
        {!compact && (
          <span className="mt-1 block text-[0.55rem] tracking-[0.4em] text-muted-foreground">
            PIZZA ARTESANAL
          </span>
        )}
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 60));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        solid ? "border-b border-border bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10 md:py-5">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors duration-300 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a href="#cardapio" className="btn-outline">
            Fazer Pedido
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="justify-self-end p-2 text-foreground lg:hidden"
        >
          <Menu className="h-6 w-6" strokeWidth={1.4} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-ink lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Logo />
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="p-2 text-foreground"
              >
                <X className="h-6 w-6" strokeWidth={1.4} />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
              className="mt-8 flex flex-col gap-2 px-6"
            >
              {LINKS.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="border-b border-border py-5 font-display text-3xl text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#cardapio"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="btn-gold mt-8 w-full"
              >
                Fazer Pedido
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
