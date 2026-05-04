import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, ArrowRight, Phone } from "lucide-react";

import heroImg from "@/assets/hero-jewelry.jpg";
import historiaImg from "@/assets/proceso2.png";
import artisanImg from "@/assets/proceso1.png";

import { products } from "@/data/products";


const categories = [
  "Topos", "Aretes", "Dijes", "Sets", "Cadenas", "Pulseras", "Anillos", "Earcuffs",
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
  const [showPromo, setShowPromo] = useState(true);
  const grouped = products.reduce((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p);
  return acc;
}, {} as Record<string, typeof products>);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {showPromo && (
    <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center">

      <div className="relative max-w-md w-full mx-4">

        {/* BOTÓN CERRAR */}
        <button
          onClick={() => setShowPromo(false)}
          className="absolute top-3 right-3 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          ✕
        </button>

        {/* IMAGEN */}
        <img
          src="/madre.jpg"
          alt="Promo Día de la Madre"
          className="w-full rounded-lg"
        />

      </div>
    </div>
  )}
{/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-navy-darker/60 border-b border-border/40">
        <div className="container flex items-center justify-between h-20">
          <a href="#top" className="flex items-baseline gap-3">
            <img
              src="/logo-viktoria.png" 
              alt="Viktoria" 
              className="h-10 md:h-12 object-contain" />
            <span className="font-serif-display text-lg md:text-xl tracking-[0.25em] text-silver-bright leading-none -translate-y-[6px] -translate-x-[24px]">
              IKTORIA
            </span>
            
          </a>
          <nav className="hidden md:flex gap-10 text-xs tracking-[0.25em] uppercase text-silver-muted">
            <a href="#coleccion" className="hover:text-silver-bright transition-colors">Colección</a>
            <a href="#historia" className="hover:text-silver-bright transition-colors">Historia</a>
            <a href="#categorias" className="hover:text-silver-bright transition-colors">Categorías</a>
            <a href="#contacto" className="hover:text-silver-bright transition-colors">Contacto</a>
          </nav>
          
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
    
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.5em] uppercase text-silver-muted mb-5">
              Colección
            </p>
            <h2 className="font-serif-display text-4xl md:text-6xl text-silver-bright">
              Nuestras <em className="italic">piezas</em>
            </h2>
            <div className="hairline w-24 mx-auto mt-8" />
          </div>

          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="mb-20">
              <h3 className="text-xl mb-8 tracking-[0.2em] uppercase text-silver-bright">
                {category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {items.map((p) => (
                  <div key={p.name} className="group">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full max-h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-3 text-sm tracking-wide text-silver-bright">
                      {p.name}
                    </h3>

                    <p className="text-silver-muted">
                      {p.price
                        ? `$${p.price.toLocaleString("es-CO")}`
                        : "Bajo pedido"}
                    </p>
                                       
                  </div>
                ))}
              </div>
            </div>
          ))}

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
            
            <div className="grid grid-rows-2 gap-4 h-[500px]">

              {/* Imagen grande arriba */}
              <img 
                src="/proceso3.png"
                alt="Filigrana Viktoria"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Dos imágenes abajo */}
              <div className="grid grid-cols-2 gap-4">
                
                <img 
                  src="/proceso2.png"
                  alt="Detalle artesanal"
                  className="w-full h-full object-cover rounded-lg"
                />

                <img 
                  src="/proceso1.png"
                  alt="Proceso de filigrana"
                  className="w-full h-full object-cover rounded-lg"
                />

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
                <img
                  src="/logo-viktoria.png" 
                  alt="Viktoria" 
                  className="h-10 md:h-12 object-contain" />
                <span className="font-serif-display text-lg md:text-xl tracking-[0.25em] text-silver-bright leading-none -translate-y-[6px] -translate-x-[24px]">
                  IKTORIA
                </span>
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
                    <Phone className="h-4 w-4" strokeWidth={1.2} />
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
