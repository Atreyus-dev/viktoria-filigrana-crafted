
export type Product = {
  name: string;
  price?: number;
  image: string;
  category: string;
  status?: "disponible" | "bajo_pedido";
};

export const products: Product[] = [

  // ===== TOPOS =====
  { name: "Topos Azalea", price: 96000, image: "/products/topos-azalea.jpg", category: "Topos" }, 
  { name: "Topos Magnolia", price: 115000, image: "/products/topos-magnolia.jpg", category: "Topos" },
  { name: "Topos Estela", price: 46000, image: "/products/topos-estela.jpg", category: "Topos" },
  { name: "Topos Alba", image: "/products/topos-alba.jpg", category: "Topos" },
  { name: "Topos Isla", image: "/products/topos-isla.jpg", category: "Topos" },

  { name: "Topos Lira", image: "/products/topos-lira.jpg", category: "Topos" },
  { name: "Topos Camelia", image: "/products/topos-camelia.jpg", category: "Topos" },
  { name: "Topos Aura", image: "/products/topos-aura.jpg", category: "Topos" },
 { name: "Topos Clover", image: "/products/topos-clover.jpg", category: "Topos" },

  { name: "Topos Elara", price: 23000, image: "/products/topos-elara.jpg", category: "Topos" },


  { name: "Topos Perla", price: 36000, image: "/products/topos-perla.jpg", category: "Topos" },
  { name: "Topos Perla Mini", price: 15000, image: "/products/topos-perla-mini.jpg", category: "Topos" },
  { name: "Topos Dalia x3", price: 30000, image: "/products/topos-dalia-x3.jpg", category: "Topos" },
  { name: "Topos Celestia", price: 112000, image: "/products/topos-celestia.jpg", category: "Topos" },

  { name: "Topos Vida", image: "/products/topos-vida.jpg", category: "Topos" },
  { name: "Topos Dalia x4", image: "/products/topos-dalia-x4.jpg", category: "Topos" },
  { name: "Topos Roselle", image: "/products/topos-roselle.jpg", category: "Topos" },
  { name: "Topos Aveline", image: "/products/topos-aveline.jpg", category: "Topos" },


  { name: "Topos Colibrí", price: 86000, image: "/products/topos-colibri.jpg", category: "Topos" },

  { name: "Candongas Siena", price: 56000, image: "/products/candongas-siena.jpg", category: "Topos" },  
  { name: "Candongas Roma", price: 56000, image: "/products/candongas-roma.jpg", category: "Topos" },
  { name: "Candongas Laurel", price: 86000, image: "/products/candongas-laurel.jpg", category: "Topos" },

  { name: "Topos Serena", image: "/products/topos-serena.jpg", category: "Topos" },
  { name: "Topos Libélula Celeste", image: "/products/topos-libelula-celeste.jpg", category: "Topos" },
  { name: "Topos Mariposa", image: "/products/topos-mariposa.jpg", category: "Topos" },
  { name: "Topos Nala", image: "/products/topos-nala.jpg", category: "Topos" },
  { name: "Topos Libélula Aurea", image: "/products/topos-libelula-aurea.jpg", category: "Topos" },


  { name: "Topos Largos Eva", price: 182000, image: "/products/topos-largos-eva.jpg", category: "Topos" },
  { name: "Topos Largos Aveline", price: 264000, image: "/products/topos-largos-aveline.jpg", category: "Topos" },
  { name: "Topos Largos Dalia", price: 400000, image: "/products/topos-largos-dalia.jpg", category: "Topos" },
  { name: "Topos Imperiale", price: 70000, image: "/products/topos-imperiale.jpg", category: "Topos" },
  { name: "Topos Valence", price: 122000, image: "/products/topos-valence.jpg", category: "Topos" },

  { name: "Topos Sombrero Vueltiao", image: "/products/topos-sombrero-vueltiao.jpg", category: "Topos" },

  // ===== ARETES =====
  { name: "Aretes Brisa", price: 119000, image: "/products/aretes-brisa.jpg", category: "Aretes" },
  { name: "Aretes Gota", price: 93000, image: "/products/aretes-gota.jpg", category: "Aretes" },
  { name: "Aretes Azalea", price: 195000, image: "/products/aretes-azalea.jpg", category: "Aretes" },
  { name: "Aretes Cruz Viktoria Mini", price: 59000, image: "/products/aretes-cruz-viktoria-mini.jpg", category: "Aretes" },
  { name: "Aretes Verana", price: 96000, image: "/products/aretes-verana.jpg", category: "Aretes" },
  { name: "Aretes Siena", price: 112000, image: "/products/aretes-siena.jpg", category: "Aretes" },
  { name: "Aretes Oliva", price: 112000, image: "/products/aretes-oliva.jpg", category: "Aretes" },

  { name: "Aretes Laurel", image: "/products/aretes-laurel.jpg", category: "Aretes" },
  { name: "Aretes Dalia", image: "/products/aretes-dalia.jpg", category: "Aretes" },


  { name: "Aretes Perla X3", image: "/products/aretes-perla-x3.jpg", category: "Aretes" },
  { name: "Aretes Blanca", image: "/products/aretes-blanca.jpg", category: "Aretes" },
  { name: "Aretes Caracol", image: "/products/aretes-caracol.jpg", category: "Aretes" },
  { name: "Aretes Ezia", image: "/products/aretes-ezia.jpg", category: "Aretes" },

  // ===== DIJES =====
  { name: "Dije Trebol", price: 33000, image: "/products/dije-trebol.jpg", category: "Dijes" },
  { name: "Dije Inicial J", price: 33000, image: "/products/dije-inicial-j.jpg", category: "Dijes" },
  { name: "Dije Cruz Viktoria", price: 49000, image: "/products/dije-cruz-viktoria.jpg", category: "Dijes" },
  { name: "Dije Imperiale", price: 47000, image: "/products/dije-imperiale.jpg", category: "Dijes" },
  { name: "Dije Delfín", price: 71000, image: "/products/dije-delfin.jpg", category: "Dijes" },
  { name: "Dije Sorelle", price: 56000, image: "/products/dije-sorelle.jpg", category: "Dijes" },
  { name: "Dije Estrella Alba", price: 30000, image: "/products/dije-estrella-alba.jpg", category: "Dijes" },
  { name: "Dije Rayito", price: 17000, image: "/products/dije-rayito.jpg", category: "Dijes" },
  { name: "Dije Sombrero Vueltiao", price: 112000, image: "/products/dije-sombrero-vueltiao.jpg", category: "Dijes" },

  // ===== SETS =====
  { name: "Set Vuelo", price: 198000, image: "/products/set-vuelo.jpg", category: "Sets" },
  { name: "Set Cruz Viktoria", price: 145000, image: "/products/set-cruz-viktoria.jpg", category: "Sets" },
  { name: "Set Sorelle", price: 180000, image: "/products/set-sorelle.jpg", category: "Sets" },
  { name: "Set Imperiale", price: 115000, image: "/products/set-imperiale.jpg", category: "Sets" },

  { name: "Set Nerea", price: 280000, image: "/products/set-nerea.jpg", category: "Sets" },  
  { name: "Set Novara", image: "/products/set-novara.jpg", category: "Sets" },
  { name: "Set Gatos", image: "/products/set-gatos.jpg", category: "Sets" },
  { name: "Set Aveline", image: "/products/set-aveline.jpg", category: "Sets" },
  { name: "Set Cruz Viktoria Mini", image: "/products/set-cruz-viktoria-mini.jpg", category: "Sets" },

  // ===== CADENAS Y PULSERAS =====
  { name: "Cadena Nacar", price: 225000, image: "/products/cadena-nacar.jpg", category: "Cadenas" },
  { name: "Cadena Estela", price: 320000, image: "/products/cadena-estela.jpg", category: "Cadenas" },
  { name: "Cadena Duna", price: 254000, image: "/products/cadena-duna.jpg", category: "Cadenas" },
  { name: "Cadena Nova", price: 122000, image: "/products/cadena-nova.jpg", category: "Cadenas" },

  { name: "Cadena Prisma", price: 465000, image: "/products/cadena-prisma.jpg", category: "Cadenas" },
  { name: "Cadena Nudo Grande", price: 1230000, image: "/products/cadena-nudo-grande.jpg", category: "Cadenas" },
  { name: "Cadena Sueños Mujer", image: "/products/cadena-sueños-mujer.jpg", category: "Cadenas" },
  { name: "Cadena Tres Flores", image: "/products/cadena-tres-flores.jpg", category: "Cadenas" },
  
  { name: "Cadena Brillo", price: 235000, image: "/products/cadena-brillo.jpg", category: "Cadenas" },
  { name: "Cadena Brillo Niño", price: 160000, image: "/products/cadena-brillo-niño.jpg", category: "Cadenas" },


  { name: "Pulsera Brillo", price: 130000, image: "/products/pulsera-brillo.jpg", category: "Pulseras" },
  { name: "Pulsera Entrelazos", price: 370000, image: "/products/pulsera-entrelazos.jpg", category: "Pulseras" },
  { name: "Pulsera Jazmín", price: 346000, image: "/products/pulsera-jazmin.jpg", category: "Pulseras" },

  { name: "Pulsera Ensueño", image: "/products/pulsera-ensueño.jpg", category: "Pulseras" },
  { name: "Pulsera Gardenia", image: "/products/pulsera-gardenia.jpg", category: "Pulseras" },

  // ===== ANILLOS =====
  { name: "Anillo Alba", price: 119000, image: "/products/anillo-alba.jpg", category: "Anillos" },
  { name: "Anillo Aurea", price: 155000, image: "/products/anillo-aurea.jpg", category: "Anillos" },
  { name: "Anillo Círculos Eternos", price: 126000, image: "/products/anillo-circulos-eternos.jpg", category: "Anillos" },
  { name: "Anillo Serena", price: 160000, image: "/products/anillo-serena.jpg", category: "Anillos" },
  { name: "Anillo Nerea", price: 182000, image: "/products/anillo-nerea.jpg", category: "Anillos" },
  { name: "Anillo Elysia", price: 162000, image: "/products/anillo-elysia.jpg", category: "Anillos" },  
  { name: "Anillo Ateliar", price: 75000, image: "/products/anillo-ateliar.jpg", category: "Anillos" },
  { name: "Anillo Virel", price: 86000, image: "/products/anillo-virel.jpg", category: "Anillos" },
  { name: "Anillo Maelis", price: 109000, image: "/products/anillo-maelis.jpg", category: "Anillos" },

  { name: "Anillo Aurelia", image: "/products/anillo-aurelia.jpg", category: "Anillos" },
  { name: "Anillo Elara", image: "/products/anillo-elara.jpg", category: "Anillos" },
  { name: "Anillo Liora", image: "/products/anillo-liora.jpg", category: "Anillos" },      
  // ===== EARCUFFS =====

  { name: "Earcuff Flor de Nácar", price: 53000, image: "/products/earcuff-flor-de-nacar.jpg", category: "Earcuffs" },
  { name: "Earcuff Azalea", price: 40000, image: "/products/earcuff-azalea.jpg", category: "Earcuffs" },
  { name: "Earcuff Raiz", price: 33000, image: "/products/earcuff-raiz.jpg", category: "Earcuffs" },
  { name: "Earcuff Malla", image: "/products/earcuff-malla.jpg", category: "Earcuffs" },

  { name: "Earcuff Encaje Real", image: "/products/earcuff-encaje-real.jpg", category: "Earcuffs" },
  { name: "Earcuff Lazo de Plata", image: "/products/earcuff-lazo-de-plata.jpg", category: "Earcuffs" },
  { name: "Earcuff Trenza", image: "/products/earcuff-trenza.jpg", category: "Earcuffs" },
];