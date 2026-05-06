
export type Product = {
  name: string;
  price?: number;
  image: string;
  category: string;
  status?: "disponible" | "bajo_pedido";
};

export const products: Product[] = [

  // ===== TOPOS =====
  { name: "Topos Azalea", price: 96000, image: "/products/topos-azalea.webp", category: "Topos" }, 
  { name: "Topos Magnolia", price: 115000, image: "/products/topos-magnolia.webp", category: "Topos" },
  { name: "Topos Estela", price: 46000, image: "/products/topos-estela.webp", category: "Topos" },
  { name: "Topos Alba", image: "/products/topos-alba.webp", category: "Topos" },
  { name: "Topos Isla", image: "/products/topos-isla.webp", category: "Topos" },

  { name: "Topos Lira", image: "/products/topos-lira.webp", category: "Topos" },
  { name: "Topos Camelia", image: "/products/topos-camelia.webp", category: "Topos" },
  { name: "Topos Aura", image: "/products/topos-aura.webp", category: "Topos" },
 { name: "Topos Clover", image: "/products/topos-clover.webp", category: "Topos" },

  { name: "Topos Elara", price: 23000, image: "/products/topos-elara.webp", category: "Topos" },


  { name: "Topos Perla", price: 36000, image: "/products/topos-perla.webp", category: "Topos" },
  { name: "Topos Perla Mini", price: 15000, image: "/products/topos-perla-mini.webp", category: "Topos" },
  { name: "Topos Dalia x3", price: 30000, image: "/products/topos-dalia-x3.webp", category: "Topos" },
  { name: "Topos Celestia", price: 112000, image: "/products/topos-celestia.webp", category: "Topos" },

  { name: "Topos Vida", image: "/products/topos-vida.webp", category: "Topos" },
  { name: "Topos Dalia x4", image: "/products/topos-dalia-x4.webp", category: "Topos" },
  { name: "Topos Roselle", image: "/products/topos-roselle.webp", category: "Topos" },
  { name: "Topos Aveline", image: "/products/topos-aveline.webp", category: "Topos" },


  { name: "Topos Colibrí", price: 86000, image: "/products/topos-colibri.webp", category: "Topos" },

  { name: "Candongas Siena", price: 56000, image: "/products/candongas-siena.webp", category: "Topos" },  
  { name: "Candongas Roma", price: 56000, image: "/products/candongas-roma.webp", category: "Topos" },
  { name: "Candongas Laurel", price: 86000, image: "/products/candongas-laurel.webp", category: "Topos" },

  { name: "Topos Serena", image: "/products/topos-serena.webp", category: "Topos" },
  { name: "Topos Libélula Celeste", image: "/products/topos-libelula-celeste.webp", category: "Topos" },
  { name: "Topos Mariposa", image: "/products/topos-mariposa.webp", category: "Topos" },
  { name: "Topos Nala", image: "/products/topos-nala.webp", category: "Topos" },
  { name: "Topos Libélula Aurea", image: "/products/topos-libelula-aurea.webp", category: "Topos" },


  { name: "Topos Largos Eva", price: 182000, image: "/products/topos-largos-eva.webp", category: "Topos" },
  { name: "Topos Largos Aveline", price: 264000, image: "/products/topos-largos-aveline.webp", category: "Topos" },
  { name: "Topos Largos Dalia", price: 400000, image: "/products/topos-largos-dalia.webp", category: "Topos" },
  { name: "Topos Imperiale", price: 70000, image: "/products/topos-imperiale.webp", category: "Topos" },
  { name: "Topos Valence", price: 122000, image: "/products/topos-valence.webp", category: "Topos" },

  { name: "Topos Sombrero Vueltiao", image: "/products/topos-sombrero-vueltiao.webp", category: "Topos" },

  // ===== ARETES =====
  { name: "Aretes Brisa", price: 119000, image: "/products/aretes-brisa.webp", category: "Aretes" },
  { name: "Aretes Gota", price: 93000, image: "/products/aretes-gota.webp", category: "Aretes" },
  { name: "Aretes Azalea", price: 195000, image: "/products/aretes-azalea.webp", category: "Aretes" },
  { name: "Aretes Cruz Viktoria Mini", price: 59000, image: "/products/aretes-cruz-viktoria-mini.webp", category: "Aretes" },
  { name: "Aretes Verana", price: 96000, image: "/products/aretes-verana.webp", category: "Aretes" },
  { name: "Aretes Siena", price: 112000, image: "/products/aretes-siena.webp", category: "Aretes" },
  { name: "Aretes Oliva", price: 112000, image: "/products/aretes-oliva.webp", category: "Aretes" },

  { name: "Aretes Laurel", image: "/products/aretes-laurel.webp", category: "Aretes" },
  { name: "Aretes Dalia", image: "/products/aretes-dalia.webp", category: "Aretes" },


  { name: "Aretes Perla X3", image: "/products/aretes-perla-x3.webp", category: "Aretes" },
  { name: "Aretes Blanca", image: "/products/aretes-blanca.webp", category: "Aretes" },
  { name: "Aretes Caracol", image: "/products/aretes-caracol.webp", category: "Aretes" },
  { name: "Aretes Ezia", image: "/products/aretes-ezia.webp", category: "Aretes" },

  // ===== DIJES =====
  { name: "Dije Trebol", price: 33000, image: "/products/dije-trebol.webp", category: "Dijes" },
  { name: "Dije Inicial J", price: 33000, image: "/products/dije-inicial-j.webp", category: "Dijes" },
  { name: "Dije Cruz Viktoria", price: 49000, image: "/products/dije-cruz-viktoria.webp", category: "Dijes" },
  { name: "Dije Imperiale", price: 47000, image: "/products/dije-imperiale.webp", category: "Dijes" },
  { name: "Dije Delfín", price: 71000, image: "/products/dije-delfin.webp", category: "Dijes" },
  { name: "Dije Sorelle", price: 56000, image: "/products/dije-sorelle.webp", category: "Dijes" },
  { name: "Dije Estrella Alba", price: 30000, image: "/products/dije-estrella-alba.webp", category: "Dijes" },
  { name: "Dije Rayito", price: 17000, image: "/products/dije-rayito.webp", category: "Dijes" },
  { name: "Dije Sombrero Vueltiao", price: 112000, image: "/products/dije-sombrero-vueltiao.webp", category: "Dijes" },

  // ===== SETS =====
  { name: "Set Vuelo", price: 198000, image: "/products/set-vuelo.webp", category: "Sets" },
  { name: "Set Cruz Viktoria", price: 145000, image: "/products/set-cruz-viktoria.webp", category: "Sets" },
  { name: "Set Sorelle", price: 180000, image: "/products/set-sorelle.webp", category: "Sets" },
  { name: "Set Imperiale", price: 115000, image: "/products/set-imperiale.webp", category: "Sets" },

  { name: "Set Nerea", price: 280000, image: "/products/set-nerea.webp", category: "Sets" },  
  { name: "Set Novara", image: "/products/set-novara.webp", category: "Sets" },
  { name: "Set Gatos", image: "/products/set-gatos.webp", category: "Sets" },
  { name: "Set Aveline", image: "/products/set-aveline.webp", category: "Sets" },


  // ===== CADENAS Y PULSERAS =====
  { name: "Cadena Nacar", price: 225000, image: "/products/cadena-nacar.webp", category: "Cadenas" },
  { name: "Cadena Estela", price: 320000, image: "/products/cadena-estela.webp", category: "Cadenas" },
  { name: "Cadena Duna", price: 254000, image: "/products/cadena-duna.webp", category: "Cadenas" },
  { name: "Cadena Nova", price: 122000, image: "/products/cadena-nova.webp", category: "Cadenas" },

  { name: "Cadena Prisma", price: 465000, image: "/products/cadena-prisma.webp", category: "Cadenas" },
  { name: "Cadena Nudo Grande", price: 1230000, image: "/products/cadena-nudo-grande.webp", category: "Cadenas" },
  { name: "Cadena Sueños Mujer", image: "/products/cadena-sueños-mujer.webp", category: "Cadenas" },
  { name: "Cadena Tres Flores", image: "/products/cadena-tres-flores.webp", category: "Cadenas" },
  
  { name: "Cadena Brillo", price: 235000, image: "/products/cadena-brillo.webp", category: "Cadenas" },
  { name: "Cadena Brillo Niño", price: 160000, image: "/products/cadena-brillo-niño.webp", category: "Cadenas" },


  { name: "Pulsera Brillo", price: 130000, image: "/products/pulsera-brillo.webp", category: "Pulseras" },
  { name: "Pulsera Entrelazos", price: 370000, image: "/products/pulsera-entrelazos.webp", category: "Pulseras" },
  { name: "Pulsera Jazmín", price: 346000, image: "/products/pulsera-jazmin.webp", category: "Pulseras" },

  { name: "Pulsera Ensueño", image: "/products/pulsera-ensueño.webp", category: "Pulseras" },
  { name: "Pulsera Gardenia", image: "/products/pulsera-gardenia.webp", category: "Pulseras" },

  // ===== ANILLOS =====
  { name: "Anillo Alba", price: 119000, image: "/products/anillo-alba.webp", category: "Anillos" },
  { name: "Anillo Aurea", price: 155000, image: "/products/anillo-aurea.webp", category: "Anillos" },
  { name: "Anillo Círculos Eternos", price: 126000, image: "/products/anillo-circulos-eternos.webp", category: "Anillos" },
  { name: "Anillo Serena", price: 160000, image: "/products/anillo-serena.webp", category: "Anillos" },
  { name: "Anillo Nerea", price: 182000, image: "/products/anillo-nerea.webp", category: "Anillos" },
  { name: "Anillo Elysia", price: 162000, image: "/products/anillo-elysia.webp", category: "Anillos" },  
  { name: "Anillo Ateliar", price: 75000, image: "/products/anillo-ateliar.webp", category: "Anillos" },
  { name: "Anillo Virel", price: 86000, image: "/products/anillo-virel.webp", category: "Anillos" },
  { name: "Anillo Maelis", price: 109000, image: "/products/anillo-maelis.webp", category: "Anillos" },

  { name: "Anillo Aurelia", image: "/products/anillo-aurelia.webp", category: "Anillos" },
  { name: "Anillo Elara", image: "/products/anillo-elara.webp", category: "Anillos" },
  { name: "Anillo Liora", image: "/products/anillo-liora.webp", category: "Anillos" },      
  // ===== EARCUFFS =====

  { name: "Earcuff Flor de Nácar", price: 53000, image: "/products/earcuff-flor-de-nacar.webp", category: "Earcuffs" },
  { name: "Earcuff Azalea", price: 40000, image: "/products/earcuff-azalea.webp", category: "Earcuffs" },
  { name: "Earcuff Raiz", price: 33000, image: "/products/earcuff-raiz.webp", category: "Earcuffs" },
  { name: "Earcuff Malla", image: "/products/earcuff-malla.webp", category: "Earcuffs" },

  { name: "Earcuff Encaje Real", image: "/products/earcuff-encaje-real.webp", category: "Earcuffs" },
  { name: "Earcuff Lazo de Plata", image: "/products/earcuff-lazo-de-plata.webp", category: "Earcuffs" },
  { name: "Earcuff Trenza", image: "/products/earcuff-trenza.webp", category: "Earcuffs" },
];