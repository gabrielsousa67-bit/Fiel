import { MapPin, Clock3, Phone, MessageCircle, Instagram } from "lucide-react";
import { CONTACT } from "@/lib/menu";
import { GrowLine, Reveal, Stagger, StaggerItem, WordsReveal } from "@/components/motion/Reveal";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`;

export function Localizacao() {
  const info = [
    { icon: MapPin, label: "Endereço", value: CONTACT.address },
    { icon: Clock3, label: "Horário", value: CONTACT.hours },
    { icon: Phone, label: "Telefone", value: CONTACT.phone },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: CONTACT.phone,
      href: `https://wa.me/${CONTACT.whatsapp}`,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: CONTACT.instagram,
      href: "https://instagram.com",
    },
  ];

  return (
    <section id="contato" className="relative border-t border-border py-20 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow">Localização</p>
          </Reveal>
          <WordsReveal
            text="Venha nos [visitar.]"
            className="mt-5 font-display text-[2.2rem] leading-[1.08] sm:text-5xl"
          />
          <GrowLine className="mt-8 w-32" />

          <Stagger className="mt-12 divide-y divide-border border-t border-border">
            {info.map(({ icon: Icon, label, value, href }) => (
              <StaggerItem key={label} className="min-w-0 py-5">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                  <Icon className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
                  <div className="min-w-0">
                    <p className="text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block text-sm hover:text-gold"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-10 w-full sm:w-auto"
            >
              Como chegar
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="min-w-0">
          <div className="relative aspect-square w-full border border-border lg:aspect-4/5">
            <iframe
              title="Mapa da localização do Forno Nero"
              src={MAPS_EMBED}
              loading="lazy"
              className="h-full w-full opacity-80 grayscale"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
