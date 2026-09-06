import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { BRL, CONTACT, PRODUCTS, type Product } from "@/lib/menu";

export type CartLine = { product: Product; qty: number };

type CartCtx = {
  lines: CartLine[];
  add: (product: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  delivery: number;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);

export const DELIVERY_FEE = 12;

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const value = useMemo<CartCtx>(() => {
    const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
    const delivery = lines.length ? DELIVERY_FEE : 0;
    return {
      lines,
      add: (product, qty = 1) =>
        setLines((prev) => {
          const found = prev.find((l) => l.product.id === product.id);
          if (found) {
            return prev.map((l) => (l.product.id === product.id ? { ...l, qty: l.qty + qty } : l));
          }
          return [...prev, { product, qty }];
        }),
      setQty: (id, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.product.id !== id)
            : prev.map((l) => (l.product.id === id ? { ...l, qty } : l)),
        ),
      remove: (id) => setLines((prev) => prev.filter((l) => l.product.id !== id)),
      clear: () => setLines([]),
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal,
      delivery,
      total: subtotal + delivery,
    };
  }, [lines]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function buildWhatsAppLink(
  lines: CartLine[],
  totals: { subtotal: number; delivery: number; total: number },
  customer: { name: string; address: string; payment: string; notes?: string },
) {
  const items = lines
    .map((l) => `• ${l.qty}x ${l.product.name} — ${BRL(l.product.price * l.qty)}`)
    .join("\n");

  const message = [
    `*Novo pedido — ${CONTACT.name}*`,
    "",
    "*Itens*",
    items,
    "",
    `Subtotal: ${BRL(totals.subtotal)}`,
    `Entrega: ${BRL(totals.delivery)}`,
    `*Total: ${BRL(totals.total)}*`,
    "",
    "*Cliente*",
    `Nome: ${customer.name}`,
    `Endereço: ${customer.address}`,
    `Pagamento: ${customer.payment}`,
    customer.notes ? `Observações: ${customer.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const ALL_PRODUCTS = PRODUCTS;
