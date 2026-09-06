import { Instagram, MessageCircle, Facebook } from "lucide-react";
import { CONTACT } from "@/lib/menu";
import { Logo } from "@/components/site/Header";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-3 md:px-10 md:py-20">
        <div className="min-w-0">
          <Logo />
          <p className="mt-6 max-w-xs text-xs leading-relaxed text-muted-foreground">
            Massa de longa fermentação, forno a lenha e uma sala pensada para a noite.
          </p>
          <div className="mt-7 flex gap-3">
            {[
              { icon: MessageCircle, href: `https://wa.me/${CONTACT.whatsapp}`, label: "WhatsApp" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>

        <nav className="min-w-0">
          <p className="text-[0.6rem] tracking-[0.28em] text-gold uppercase">Navegação</p>
          <ul className="mt-6 space-y-3">
            {NAV.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0">
          <p className="text-[0.6rem] tracking-[0.28em] text-gold uppercase">Contato</p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>{CONTACT.address}</li>
            <li>{CONTACT.hours}</li>
            <li>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} className="hover:text-foreground">
                WhatsApp {CONTACT.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-6 text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Forno Nero. Todos os direitos reservados.</p>
          <p>Vila Madalena · São Paulo</p>
        </div>
      </div>
    </footer>
  );
}
