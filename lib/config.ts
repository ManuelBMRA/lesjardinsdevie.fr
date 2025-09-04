export const siteConfig = {
  name: "Les jardins de vie",
  siret: "99031558200017",
  baseCity: "Balaruc-les-Bains",
  basePostal: "34540",
  targetArea: [
    "Sète",
    "Frontignan", 
    "Balaruc-les-Bains",
    "Balaruc-le-Vieux",
    "Bouzigues",
    "Mèze",
    "Loupian",
    "Gigean",
    "Poussan",
    "Marseillan",
    "Villeveyrac"
  ],
  tel: "+33683771497", // TODO: remplacer
  email: "laurent@lesjardinsdevie.fr", // TODO: remplacer
  address: "1 Rue des Nymphes 34540 Balaruc-les-Bains", // TODO: remplacer
  lat: 43.44, // TODO: préciser
  lng: 3.68, // TODO: préciser
  hours: "Mo-Fr 08:00-18:00",
  sameAs: [], // liens GBP/FB si disponibles
  url: "https://lesjardinsdevie.fr",
  
  // Contenu SEO
  h1: "Jardinier & petits travaux près de Sète et autour du Bassin de Thau",
  accroche: "Élagage, tonte, haies, débroussaillage, petits travaux — intervention rapide depuis Balaruc-les-Bains, devis gratuit.",
  badges: ["Déplacement gratuit", "Assuré & déclaré"],
  
  // Templates SEO
  titleTemplate: "Les jardins de vie | Jardinier à {ville} – Bassin de Thau",
  descriptionTemplate: "Entretien jardin (élagage, tonte, haies, débroussaillage) et petits travaux à {ville}. Devis gratuit, intervention rapide.",
} as const

export type SiteConfig = typeof siteConfig
