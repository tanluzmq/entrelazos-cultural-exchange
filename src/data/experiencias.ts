import pMuralismo from "@/assets/p-muralismo.jpg";
import pArquitectura from "@/assets/p-arquitectura.jpg";
import pGrabado from "@/assets/p-grabado.jpg";
import pGastronomia from "@/assets/p-gastronomia.jpg";
import pTextil from "@/assets/p-textil.jpg";
import pFotografia from "@/assets/p-fotografia.jpg";
import pCeramica from "@/assets/p-ceramica.jpg";
import pVestuarioMx from "@/assets/p-vestuario-mx.jpg";
import pJardinValdivia from "@/assets/p-jardin-valdivia.jpg";
import pIlustracionMx from "@/assets/p-ilustracion-mx.jpg";

export type Experiencia = {
  img: string;
  titulo: string;
  ciudad: string;
  pais: "Chile" | "México";
  carrera: string;
  duracion: string;
  modalidad: string;
  cupos: number;
  universidad: string;
  descripcion: string;
  reviews: { autor: string; texto: string; rating: number }[];
};

export const experiencias: Experiencia[] = [
  {
    img: pArquitectura,
    titulo: "Arquitectura sustentable",
    ciudad: "Chiloé",
    pais: "Chile",
    carrera: "Arquitectura",
    duracion: "6 semanas",
    modalidad: "Presencial",
    cupos: 8,
    universidad: "Universidad Austral de Chile",
    descripcion: "Construcción en madera nativa, palafitos y bioclimática del sur austral, de la mano de maestros chilotes.",
    reviews: [
      { autor: "Lucía P. · UNAM", texto: "Aprendí a leer el clima como un material más.", rating: 5 },
      { autor: "Diego H. · Tec", texto: "Los palafitos cambiaron mi forma de entender el espacio.", rating: 5 },
    ],
  },
  {
    img: pGrabado,
    titulo: "Taller de grabado experimental",
    ciudad: "Valparaíso",
    pais: "Chile",
    carrera: "Artes visuales",
    duracion: "3 semanas",
    modalidad: "Presencial",
    cupos: 10,
    universidad: "Pontificia Universidad Católica de Valparaíso",
    descripcion: "Xilografía, monotipo y gráfica callejera en los cerros de Valparaíso.",
    reviews: [
      { autor: "Sara M. · Ibero", texto: "El taller huele a tinta y a mar. Inolvidable.", rating: 5 },
    ],
  },
  {
    img: pMuralismo,
    titulo: "Muralismo y gráfica popular",
    ciudad: "Oaxaca",
    pais: "México",
    carrera: "Arte público",
    duracion: "4 semanas",
    modalidad: "Presencial",
    cupos: 12,
    universidad: "Universidad Autónoma Benito Juárez de Oaxaca",
    descripcion: "Intervención de muros junto a colectivos oaxaqueños y la tradición del cartel político.",
    reviews: [
      { autor: "Tani M. · UAM", texto: "El cerro fue mi aula. Mi familia anfitriona, mi maestra.", rating: 5 },
      { autor: "Vicente S. · UC", texto: "Pintar con la comunidad le da otro sentido al oficio.", rating: 5 },
    ],
  },
  {
    img: pGastronomia,
    titulo: "Gastronomía tradicional mexicana",
    ciudad: "CDMX",
    pais: "México",
    carrera: "Gastronomía",
    duracion: "5 semanas",
    modalidad: "Presencial",
    cupos: 14,
    universidad: "Universidad Iberoamericana",
    descripcion: "De la milpa al metate. Cocina de maíz, mole y mercados con cocineras tradicionales.",
    reviews: [
      { autor: "Antonia G. · USACH", texto: "Una clase entera en torno a un comal.", rating: 5 },
    ],
  },
  {
    img: pTextil,
    titulo: "Diseño textil latinoamericano",
    ciudad: "Oaxaca",
    pais: "México",
    carrera: "Diseño",
    duracion: "4 semanas",
    modalidad: "Presencial",
    cupos: 10,
    universidad: "Universidad de Guadalajara",
    descripcion: "Telar de cintura, tintes naturales y diálogo con artesanas zapotecas.",
    reviews: [
      { autor: "Camila R. · UNAM", texto: "Tejer con manos chilenas y zapotecas cambió cómo pienso el oficio.", rating: 5 },
    ],
  },
  {
    img: pFotografia,
    titulo: "Fotografía territorial",
    ciudad: "Atacama",
    pais: "Chile",
    carrera: "Fotografía",
    duracion: "3 semanas",
    modalidad: "Presencial",
    cupos: 9,
    universidad: "Universidad de Chile",
    descripcion: "Expedición fotográfica al desierto más árido del mundo. Paisaje, comunidad y luz.",
    reviews: [
      { autor: "Paulo C. · Anáhuac", texto: "El silencio del desierto educa el ojo.", rating: 5 },
    ],
  },
  {
    img: pCeramica,
    titulo: "Cerámica contemporánea",
    ciudad: "Guadalajara",
    pais: "México",
    carrera: "Diseño",
    duracion: "4 semanas",
    modalidad: "Presencial",
    cupos: 10,
    universidad: "Universidad de Guadalajara",
    descripcion: "Torno, esmaltes y diálogo con la tradición tlaquepaque y de Tonalá.",
    reviews: [
      { autor: "Renata F. · UDP", texto: "El barro tapatío tiene memoria propia.", rating: 5 },
    ],
  },
  {
    img: pVestuarioMx,
    titulo: "Diseño de vestuario artesanal",
    ciudad: "Chiloé",
    pais: "Chile",
    carrera: "Diseño de moda",
    duracion: "4 semanas",
    modalidad: "Presencial",
    cupos: 8,
    universidad: "Universidad Austral de Chile",
    descripcion: "Lana chilota, telar tradicional y patrones contemporáneos para vestuario escénico.",
    reviews: [
      { autor: "Mariana L. · Ibero", texto: "Trabajar lana recién esquilada es otro mundo.", rating: 5 },
    ],
  },
  {
    img: pJardinValdivia,
    titulo: "Narrativas visuales y patrimonio",
    ciudad: "Valdivia",
    pais: "Chile",
    carrera: "Comunicación visual",
    duracion: "4 semanas",
    modalidad: "Presencial",
    cupos: 10,
    universidad: "Universidad Austral de Chile",
    descripcion: "Documentar el jardín botánico y el patrimonio del sur austral con relato visual.",
    reviews: [
      { autor: "Inés V. · UNAM", texto: "Aprendí a contar lugares como si fueran personas.", rating: 5 },
    ],
  },
  {
    img: pIlustracionMx,
    titulo: "Paisaje, color y desierto florido",
    ciudad: "Norte de Chile",
    pais: "Chile",
    carrera: "Ilustración",
    duracion: "3 semanas",
    modalidad: "Presencial",
    cupos: 12,
    universidad: "Universidad Católica del Norte",
    descripcion: "Paleta del desierto en flor, ilustración de campo y bitácora de color.",
    reviews: [
      { autor: "Bruno R. · Anáhuac", texto: "Nunca había visto tantos rosados en un mismo cerro.", rating: 5 },
    ],
  },
];

export const carreras = Array.from(new Set(experiencias.map((e) => e.carrera))).sort();
export const paises = ["Chile", "México"] as const;

export const universidadesChile = [
  "Universidad Andrés Bello",
  "Universidad de Chile",
  "Pontificia Universidad Católica",
  "Universidad de Las Américas",
  "Universidad Diego Portales",
  "Universidad Técnica Federico Santa María",
  "Universidad del Desarrollo",
  "Universidad de Santiago de Chile",
];

export const universidadesMexico = [
  "UNAM",
  "Tecnológico de Monterrey",
  "Universidad Iberoamericana",
  "Universidad Autónoma Metropolitana",
  "Universidad de Guadalajara",
  "Universidad Autónoma de Nuevo León",
  "Universidad de las Américas Puebla",
  "Universidad Anáhuac",
];