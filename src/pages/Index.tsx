import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Mail, ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero-jewelry.jpg";
import historiaImg from "@/assets/historia.jpg";
import artisanImg from "@/assets/artisan-hands.jpg";

import pAretesAzalea from "@/assets/products/aretes-azalea.jpg";
import pAretesBrisa from "@/assets/products/aretes-brisa.jpg";
import pAretesGota from "@/assets/products/aretes-gota.jpg";
import pAnilloAurea from "@/assets/products/anillo-aurea.jpg";
import pAnilloAlba from "@/assets/products/anillo-alba.jpg";
import pSetVuelo from "@/assets/products/set-vuelo.jpg";
import pCadenaEstela from "@/assets/products/cadena-estela.jpg";

const products = [
  { name: "Topos Azalea", price: "$96.000", img: pAretesAzalea, cat: "Topos" },
  { name: "Aretes Brisa", price: "$119.000", img: pAretesBrisa, cat: "Aretes" },
  { name: "Aretes Gota", price: "$93.000", img: pAretesGota, cat: "Aretes" },
  { name: "Anillo Aurea", price: "$155.000", img: pAnilloAurea, cat: "Anillos" },
  { name: "Anillo Alba", price: "$119.000", img: pAnilloAlba, cat: "Anillos" },
  { name: "Set Vuelo", price: "$198.000", img: pSetVuelo, cat: "Sets" },
];

const categories = [
  "Topos", "Aretes", "Dijes", "Sets", "Cadenas y Pulseras", "Anillos", "Earcuffs",
];

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
};

const Monogram = () => (
  <span className="font-serif-display text-silver-gradient text-2xl tracking-[0.3em]">V</span>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-navy-darker/60 border-b border-border/40">
        <div className="container flex items-center justify-between h-20">
          <a href="#top" className="flex items-baseline gap-4">
            <img
              src="/logo-viktoria.svg" 
              alt="Viktoria" 
              className="h-10" />
            <span className="font-serif-display text-xl tracking-[0.4em] text-silver-bright">VIKTORIA</span>
          </a>
          <nav className="hidden md:flex gap-10 text-xs tracking-[0.25em] uppercase text-silver-muted">
            <a href="#coleccion" className="hover:text-silver-bright transition-colors">Colección</a>
            <a href="#historia" className="hover:text-silver-bright transition-colors">Historia</a>
            <a href="#categorias" className="hover:text-silver-bright transition-colors">Categorías</a>
            <a href="#contacto" className="hover:text-silver-bright transition-colors">Contacto</a>
          </nav>
          <a href="#coleccion" className="hidden md:inline-flex text-xs tracking-[0.25em] uppercase text-silver-bright/80 hover:text-silver-bright">Tienda →</a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-screen min-h-[680px] w-full flex items-center justify-center">
        <img src={heroImg} alt="Joyería en filigrana de plata 970 sobre terciopelo azul oscuro" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-navy-darker/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="animate-fade-in-slow text-[10px] md:text-xs tracking-[0.5em] uppercase text-silver mb-8">
            Filigrana Artesanal · Plata 970
          </p>
          <h1 className="animate-fade-up font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-silver-bright">
            Joyería en <em className="italic text-silver-gradient">filigrana</em>
          </h1>
          <p className="animate-fade-up delay-200 mt-8 text-base md:text-lg text-silver/90 font-light tracking-wide max-w-xl mx-auto">
            Piezas únicas hechas a mano en Colombia, donde cada hilo de plata teje una historia.
          </p>
          <div className="animate-fade-up delay-300 mt-12 flex justify-center">
            <Button asChild variant="ghost" size="lg" className="group rounded-none border border-silver/60 bg-transparent text-silver-bright hover:bg-silver hover:text-navy-darker px-10 py-7 tracking-[0.3em] uppercase text-xs transition-all duration-500">
              <a href="#coleccion">
                Ver colección
                <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-fade-in-slow delay-400">
          <span className="text-[10px] tracking-[0.4em] uppercase text-silver/60">Descubre</span>
          <div className="w-px h-12 bg-silver/40" />
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="coleccion" className="py-28 md:py-40 bg-navy-darker">
        <div className="container">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-[10px] tracking-[0.5em] uppercase text-silver-muted mb-5">Selección</p>
              <h2 className="font-serif-display text-4xl md:text-6xl text-silver-bright">
                Piezas <em className="italic">destacadas</em>
              </h2>
              <div className="hairline w-24 mx-auto mt-8" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <article className="group cursor-pointer">
                  <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-darker aspect-[4/5] mb-4">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full max-h-[320px] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                      
                    />
                    <div className="absolute inset-0 bg-navy-darker/0 group-hover:bg-navy-darker/30 transition-colors duration-700" />
                    <div className="absolute bottom-0 inset-x-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-[10px] tracking-[0.4em] uppercase text-silver-bright border border-silver/60 px-4 py-2 backdrop-blur-sm">
                        Ver pieza
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="text-[10px] tracking-[0.4em] uppercase text-silver-muted mb-2">{p.cat}</p>
                      <h3 className="font-serif-display text-xl text-silver-bright">{p.name}</h3>
                    </div>
                    <p className="text-sm tracking-wider text-silver">{p.price}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section id="historia" className="py-28 md:py-40 bg-navy">
        <div className="container grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal className="order-2 md:order-1">
            <p className="text-[10px] tracking-[0.5em] uppercase text-silver-muted mb-6">Nuestra historia</p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-silver-bright leading-[1.1]">
              Tradición tejida <em className="italic">a mano</em>
            </h2>
            <div className="hairline w-20 my-8" />
            <p className="text-silver/85 font-light leading-relaxed text-lg">
              Viktoria nace del amor por la joyería artesanal, la tradición y el deseo de preservar una de las técnicas más representativas de Colombia: la filigrana.
            </p>
            <p className="text-silver-muted font-light leading-relaxed mt-6">
              Cada pieza está elaborada con plata 970 por manos colombianas expertas, transformando el metal en diseños delicados llenos de significado.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="font-serif-display text-3xl text-silver-bright">970</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-silver-muted mt-1">Plata pura</p>
              </div>
              <div className="w-px h-10 bg-silver/30" />
              <div>
                <p className="font-serif-display text-3xl text-silver-bright">100%</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-silver-muted mt-1">Hecho a mano</p>
              </div>
              <div className="w-px h-10 bg-silver/30" />
              <div>
                <p className="font-serif-display text-3xl text-silver-bright">CO</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-silver-muted mt-1">Colombia</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden bg-navy-darker">
                <img src={historiaImg} alt="Aretes de filigrana en plata Viktoria" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-52 hidden md:block overflow-hidden border-4 border-navy">
                <img src={artisanImg} alt="Manos artesanas trabajando filigrana" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias" className="py-28 md:py-40 bg-navy-darker relative">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-[0.5em] uppercase text-silver-muted mb-5">Explora</p>
              <h2 className="font-serif-display text-4xl md:text-6xl text-silver-bright">
                Nuestras <em className="italic">categorías</em>
              </h2>
              <div className="hairline w-24 mx-auto mt-8" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border/50 border border-border/50">
            {categories.map((c, i) => (
              <Reveal key={c} delay={i * 60}>
                <a
                  href="#coleccion"
                  className="group relative flex items-center justify-center aspect-square bg-navy-darker hover:bg-navy transition-colors duration-700 p-6"
                >
                  <span className="absolute top-4 left-5 text-[10px] tracking-[0.3em] text-silver-muted">0{i + 1}</span>
                  <span className="font-serif-display text-2xl md:text-3xl text-silver-bright text-center transition-transform duration-700 group-hover:-translate-y-1">
                    {c}
                  </span>
                  <ArrowRight className="absolute bottom-5 right-5 h-4 w-4 text-silver-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-28 md:py-36 bg-navy">
        <div className="container text-center">
          <Reveal>
            <Instagram className="h-8 w-8 text-silver mx-auto mb-8" strokeWidth={1} />
            <h2 className="font-serif-display text-3xl md:text-5xl text-silver-bright leading-tight">
              Síguenos en <em className="italic">Instagram</em>
            </h2>
            <a
              href="https://instagram.com/viktoria_filigrana"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 text-silver tracking-[0.3em] uppercase text-sm border-b border-silver/40 hover:border-silver-bright hover:text-silver-bright pb-1 transition-colors"
            >
              @viktoria_filigrana
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-navy-darker border-t border-border/50 py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-baseline gap-3 mb-6">
                <Monogram />
                <span className="font-serif-display text-xl tracking-[0.5em] text-silver-bright">VIKTORIA</span>
              </div>
              <p className="text-silver-muted font-light leading-relaxed text-sm">
                Joyería artesanal en filigrana, hecha a mano en Colombia con plata 970.
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-silver-muted mb-5">Contacto</p>
              <ul className="space-y-3 text-silver/90 text-sm">
                <li>
                  <a href="https://wa.me/573108917952" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-silver-bright transition-colors">
                    <MessageCircle className="h-4 w-4" strokeWidth={1.2} />
                    +57 310 891 7952
                  </a>
                </li>
                <li>
                  <a href="mailto:joyeriaviktoria@gmail.com" className="flex items-center gap-3 hover:text-silver-bright transition-colors">
                    <Mail className="h-4 w-4" strokeWidth={1.2} />
                    joyeriaviktoria@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/viktoria_filigrana" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-silver-bright transition-colors">
                    <Instagram className="h-4 w-4" strokeWidth={1.2} />
                    @viktoria_filigrana
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-silver-muted mb-5">Cuidado</p>
              <ul className="space-y-2 text-silver-muted text-sm font-light">
                <li>Evita el contacto con agua</li>
                <li>Guarda cada pieza por separado</li>
                <li>Limpia con paño suave</li>
              </ul>
            </div>
          </div>

          <div className="hairline" />
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.2em] uppercase text-silver-muted">
            <p>© {new Date().getFullYear()} Viktoria · Filigrana Colombiana</p>
            <p>Plata 970 · Hecho a mano</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
