import { AnimatePresence, motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { BRL } from "@/lib/menu";
import { useCart } from "@/components/site/cart";

export function FloatingCart() {
  const { count, total } = useCart();

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.a
          href="#pedido"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 0.85, 0.24, 1] }}
          className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between gap-4 border border-gold/40 bg-ink/95 px-5 py-4 backdrop-blur-md sm:inset-x-auto sm:right-6 sm:bottom-6 sm:min-w-[18rem]"
        >
          <span className="flex min-w-0 items-center gap-3">
            <ShoppingBag className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
            <span className="truncate text-[0.65rem] tracking-[0.22em] uppercase">
              {count} {count === 1 ? "item" : "itens"}
            </span>
          </span>
          <span className="shrink-0 text-sm text-gold">{BRL(total)}</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
