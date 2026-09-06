import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { BRL, CATEGORIES, PRODUCTS, type Category } from "@/lib/menu";
import { buildWhatsAppLink, useCart } from "@/components/site/cart";
import { GrowLine, Reveal, WordsReveal } from "@/components/motion/Reveal";

const PAYMENTS = ["Pix", "Cartão na entrega", "Dinheiro"];

export function Cardapio() {
  const [category, setCategory] = useState<Category>("Tradicionais");
  const { lines, add, setQty, remove, subtotal, delivery, total, clear } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState<string>("Pix");
  const [notes, setNotes] = useState("");

  const items = PRODUCTS.filter((p) => p.category === category);

  const finalize = () => {
    if (!lines.length) {
      toast.error("Seu pedido está vazio.");
      return;
    }
    if (!name.trim() || !address.trim()) {
      toast.error("Preencha nome e endereço para continuar.");
      return;
    }
    const url = buildWhatsAppLink(lines, { subtotal, delivery, total }, {
      name: name.trim(),
      address: address.trim(),
      payment,
      notes: notes.trim(),
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cardapio" className="relative border-y border-border py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Cardápio</p>
        </Reveal>
        <WordsReveal
          text="Monte seu [pedido.]"
          className="mt-5 font-display text-[2.2rem] leading-[1.08] sm:text-5xl"
        />
        <GrowLine className="mt-8 w-32" />

        <div id="pedido" className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <div className="-mx-5 flex gap-6 overflow-x-auto px-5 pb-3 md:mx-0 md:px-0">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`shrink-0 border-b pb-3 text-[0.65rem] tracking-[0.24em] uppercase transition-colors duration-300 ${
                    category === c
                      ? "border-gold text-gold"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={category}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 0.85, 0.24, 1] }}
                className="mt-8 divide-y divide-border border-t border-border"
              >
                {items.map((p) => (
                  <li
                    key={p.id}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 py-6"
                  >
                    <div className="min-w-0">
                      <h3 className="font-display text-lg leading-tight">{p.name}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-3">
                      <span className="text-sm text-gold">{BRL(p.price)}</span>
                      <button
                        type="button"
                        aria-label={`Adicionar ${p.name}`}
                        onClick={() => {
                          add(p);
                          toast.success(`${p.name} adicionada`);
                        }}
                        className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
                      >
                        <Plus className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          <div className="min-w-0">
            <div className="border border-border bg-card/50 p-6 md:p-8 lg:sticky lg:top-28">
              <h3 className="font-display text-2xl">Seu pedido</h3>
              <div className="hairline mt-5" />

              {lines.length === 0 ? (
                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                  Nenhum item ainda. Escolha suas pizzas para começar.
                </p>
              ) : (
                <ul className="mt-6 space-y-5">
                  <AnimatePresence initial={false}>
                    {lines.map((l) => (
                      <motion.li
                        key={l.product.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm">{l.product.name}</p>
                          <p className="mt-1 text-[0.7rem] text-muted-foreground">
                            {BRL(l.product.price)} · un
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <button
                            type="button"
                            aria-label="Diminuir"
                            onClick={() => setQty(l.product.id, l.qty - 1)}
                            className="flex h-9 w-9 items-center justify-center border border-border hover:border-gold"
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="w-6 text-center text-sm">{l.qty}</span>
                          <button
                            type="button"
                            aria-label="Aumentar"
                            onClick={() => setQty(l.product.id, l.qty + 1)}
                            className="flex h-9 w-9 items-center justify-center border border-border hover:border-gold"
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                          <button
                            type="button"
                            aria-label="Remover"
                            onClick={() => remove(l.product.id)}
                            className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:border-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}

              <div className="mt-8 space-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{BRL(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Entrega</span>
                  <span>{BRL(delivery)}</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4 text-foreground">
                  <span className="text-[0.65rem] tracking-[0.24em] uppercase">Total</span>
                  <motion.span
                    key={total}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-display text-2xl text-gold"
                  >
                    {BRL(total)}
                  </motion.span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full border border-input bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                />
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Endereço de entrega"
                  className="w-full border border-input bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                />
                <div className="flex flex-wrap gap-2">
                  {PAYMENTS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPayment(p)}
                      className={`border px-4 py-2 text-[0.6rem] tracking-[0.18em] uppercase transition-colors duration-300 ${
                        payment === p
                          ? "border-gold text-gold"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Observações (opcional)"
                  className="w-full resize-none border border-input bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                />
              </div>

              <button type="button" onClick={finalize} className="btn-gold mt-6 w-full">
                <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
                Finalizar pelo WhatsApp
              </button>
              {lines.length > 0 && (
                <button
                  type="button"
                  onClick={clear}
                  className="mt-4 w-full text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase hover:text-foreground"
                >
                  Limpar pedido
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
