import margherita from "@/assets/pizza-margherita.jpg";
import calabresa from "@/assets/pizza-calabresa.jpg";
import frango from "@/assets/pizza-frango.jpg";
import queijos from "@/assets/pizza-queijos.jpg";

export type Category = "Tradicionais" | "Especiais" | "Doces" | "Bebidas";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image?: string;
};

export const CATEGORIES: Category[] = ["Tradicionais", "Especiais", "Doces", "Bebidas"];

export const PRODUCTS: Product[] = [
  {
    id: "margherita",
    name: "Margherita Especial",
    description: "Molho artesanal, mozzarella, tomate e manjericão.",
    price: 62,
    category: "Tradicionais",
    image: margherita,
  },
  {
    id: "calabresa",
    name: "Calabresa Premium",
    description: "Calabresa artesanal, cebola roxa e mozzarella.",
    price: 68,
    category: "Tradicionais",
    image: calabresa,
  },
  {
    id: "frango",
    name: "Frango Cremoso",
    description: "Frango temperado, mozzarella e creme especial.",
    price: 71,
    category: "Tradicionais",
    image: frango,
  },
  {
    id: "queijos",
    name: "Quatro Queijos",
    description: "Mozzarella, parmesão, provolone e gorgonzola.",
    price: 74,
    category: "Tradicionais",
    image: queijos,
  },
  {
    id: "napoletana",
    name: "Napoletana",
    description: "Molho de tomate San Marzano, anchovas, orégano e azeite.",
    price: 66,
    category: "Tradicionais",
  },
  {
    id: "portuguesa",
    name: "Portuguesa da Casa",
    description: "Presunto, ovos, cebola, azeitona preta e mozzarella.",
    price: 69,
    category: "Tradicionais",
  },
  {
    id: "burrata",
    name: "Burrata & Pistache",
    description: "Burrata fresca, pesto de pistache e tomatinhos confitados.",
    price: 92,
    category: "Especiais",
  },
  {
    id: "trufa",
    name: "Funghi Trufado",
    description: "Cogumelos salteados, creme de trufa negra e parmesão 24 meses.",
    price: 98,
    category: "Especiais",
  },
  {
    id: "parma",
    name: "Parma & Rúcula",
    description: "Presunto de parma, rúcula selvagem e lascas de grana padano.",
    price: 95,
    category: "Especiais",
  },
  {
    id: "picante",
    name: "Nduja Picante",
    description: "Nduja calabresa, mel de pimenta e stracciatella.",
    price: 89,
    category: "Especiais",
  },
  {
    id: "nutella",
    name: "Avelã & Cacau",
    description: "Creme de avelã, cacau 70% e avelãs caramelizadas.",
    price: 58,
    category: "Doces",
  },
  {
    id: "banana",
    name: "Banana Caramelizada",
    description: "Banana flambada, doce de leite e canela em pau.",
    price: 54,
    category: "Doces",
  },
  {
    id: "frutas",
    name: "Frutas Vermelhas",
    description: "Ricota fresca, geleia de frutas vermelhas e hortelã.",
    price: 60,
    category: "Doces",
  },
  {
    id: "vinho",
    name: "Vinho Tinto da Casa",
    description: "Blend italiano, taça 150ml.",
    price: 34,
    category: "Bebidas",
  },
  {
    id: "chopp",
    name: "Chopp Artesanal",
    description: "Lager de fermentação lenta, 500ml.",
    price: 24,
    category: "Bebidas",
  },
  {
    id: "limonada",
    name: "Limonada Siciliana",
    description: "Limão siciliano, hortelã e água com gás.",
    price: 18,
    category: "Bebidas",
  },
  {
    id: "agua",
    name: "Água Mineral",
    description: "Com ou sem gás, 500ml.",
    price: 9,
    category: "Bebidas",
  },
];

export const FEATURED = ["margherita", "calabresa", "frango", "queijos"]
  .map((id) => PRODUCTS.find((p) => p.id === id)!)
  .filter(Boolean);

export const BRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const CONTACT = {
  name: "Forno Nero",
  phone: "(11) 4002-8922",
  whatsapp: "5511940028922",
  instagram: "@fornonero",
  address: "Rua das Oliveiras, 128 — Vila Madalena, São Paulo",
  hours: "Terça a Domingo · 18h — 00h",
};
