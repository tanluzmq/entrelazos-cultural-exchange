import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import pMuralismo from "@/assets/p-muralismo.jpg";
import pArquitectura from "@/assets/p-arquitectura.jpg";
import pGrabado from "@/assets/p-grabado.jpg";
import pGastronomia from "@/assets/p-gastronomia.jpg";
import pTextil from "@/assets/p-textil.jpg";
import pFotografia from "@/assets/p-fotografia.jpg";
import pCeramica from "@/assets/p-ceramica.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import s1 from "@/assets/student-1.jpg";
import s2 from "@/assets/student-2.jpg";
import s3 from "@/assets/student-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const programs = [
  { img: pMuralismo, ciudad: "Oaxaca, MX", titulo: "Bootcamp de muralismo", disciplina: "Arte público", duracion: "4 semanas", modalidad: "Presencial", cupos: 12 },
  { img: pArquitectura, ciudad: "Chiloé, CL", titulo: "Arquitectura sustentable", disciplina: "Arquitectura", duracion: "6 semanas", modalidad: "Inmersión", cupos: 8 },
  { img: pGrabado, ciudad: "Valparaíso, CL", titulo: "Grabado experimental", disciplina: "Artes gráficas", duracion: "3 semanas", modalidad: "Taller", cupos: 10 },
  { img: pGastronomia, ciudad: "CDMX, MX", titulo: "Gastronomía tradicional mexicana", disciplina: "Gastronomía", duracion: "5 semanas", modalidad: "Presencial", cupos: 14 },
  { img: pTextil, ciudad: "Oaxaca, MX", titulo: "Diseño textil latinoamericano", disciplina: "Diseño", duracion: "4 semanas", modalidad: "Inmersión", cupos: 10 },
  { img: pArquitectura, ciudad: "Chiloé, CL", titulo: "Vestuario artesanal", disciplina: "Diseño de moda", duracion: "4 semanas", modalidad: "Taller", cupos: 8 },
  { img: pFotografia, ciudad: "Atacama, CL", titulo: "Fotografía territorial", disciplina: "Fotografía", duracion: "3 semanas", modalidad: "Expedición", cupos: 9 },
  { img: pMuralismo, ciudad: "CDMX, MX", titulo: "Ilustración y gráfica popular", disciplina: "Ilustración", duracion: "4 semanas", modalidad: "Taller", cupos: 12 },
  { img: pCeramica, ciudad: "Guadalajara, MX", titulo: "Cerámica contemporánea", disciplina: "Cerámica", duracion: "5 semanas", modalidad: "Inmersión", cupos: 8 },
  { img: pGrabado, ciudad: "Valdivia, CL", titulo: "Narrativas visuales y patrimonio", disciplina: "Comunicación visual", duracion: "4 semanas", modalidad: "Mixto", cupos: 10 },
];

const steps = [
  { n: "01", t: "Crear perfil", d: "Cuenta quién eres, qué estudias y qué te mueve." },
  { n: "02", t: "Elegir programa", d: "Bootcamps, talleres y residencias en ambos países." },
  { n: "03", t: "Match con estudiante", d: "Te conectamos con alguien afín que recibirá lo mismo." },
  { n: "04", t: "Familia anfitriona", d: "Vives con una familia local cuidadosamente seleccionada." },
  { n: "05", t: "Aprender desde la experiencia", d: "Tu universidad, taller y barrio se vuelven uno." },
  { n: "06", t: "Crear comunidad", d: "Tu paso queda en una red latinoamericana viva." },
];

const students = [
  { img: s1, nombre: "Camila R.", carrera: "Diseño Textil", uni: "UNAM", lugar: "→ Chiloé", quote: "Tejer con manos chilenas cambió cómo pienso el oficio." },
  { img: s2, nombre: "Tomás V.", carrera: "Arquitectura", uni: "U. de Chile", lugar: "→ Oaxaca", quote: "Aprendí más en una cocina oaxaqueña que en un semestre." },
  { img: s3, nombre: "Itzel M.", carrera: "Artes Visuales", uni: "UAM", lugar: "→ Valparaíso", quote: "El cerro fue mi aula. Mi familia anfitriona, mi maestra." },
];

function Thread({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 100" preserveAspectRatio="none" fill="none">
      <path
        className="thread-line"
        d="M0,50 C200,10 400,90 600,50 C800,10 1000,90 1200,50"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function EntrelazosLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 420 132" fill="none" aria-label="Entrelazos" role="img">
      <path
        d="M8 55H58C63 55 67 51 67 46V36C67 30 72 25 78 25H93C99 25 104 20 104 14C104 8 109 4 115 4H150C156 4 161 8 161 14V18C161 24 166 29 172 29H185C191 29 196 34 196 40V48C196 52 199 55 203 55H216C227 55 237 48 243 39C248 31 253 29 258 38C264 48 271 58 285 58H309C313 58 316 55 316 51V34L354 20C357 19 361 19 364 20L406 34V56H412"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M250 34C250 54 239 68 224 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M250 34C250 54 261 68 276 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M121 24V42M112 33H130" stroke="var(--vino)" strokeWidth="7" strokeLinecap="round" />
      <path d="M91 50C91 42 98 36 106 36C114 36 121 42 121 50V68H91V50Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="79" cy="51" r="10" stroke="currentColor" strokeWidth="5" />
      <circle cx="139" cy="51" r="10" stroke="currentColor" strokeWidth="5" />
      <path d="M337 48H357M373 48H393M339 66V86M365 66V86M391 66V86" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M26 101H394" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <text x="210" y="120" textAnchor="middle" fill="currentColor" fontFamily="var(--font-display)" fontSize="36" fontWeight="500" letterSpacing="3">
        ENTRELAZOS
      </text>
    </svg>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/30">
      <div className="max-w-7xl mx-auto flex min-h-20 items-center justify-between gap-6 px-6 py-3">
        <a href="#top" className="flex items-center py-2 pr-4 text-foreground" aria-label="Ir al inicio">
          <EntrelazosLogo className="h-11 w-auto" />
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <a href="#programas" className="hover:text-foreground">Programas</a>
          <a href="#como" className="hover:text-foreground">Cómo funciona</a>
          <a href="#comunidad" className="hover:text-foreground">Comunidad</a>
          <a href="#becas" className="hover:text-foreground">Becas</a>
        </nav>
        <button className="text-sm bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition">
          Crear perfil
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <img
        src={hero}
        alt="Estudiante compartiendo tortillas con familia anfitriona en Oaxaca"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
      <div className="absolute inset-0 grain opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
        <p className="text-xs uppercase tracking-[0.3em] text-vino mb-6 reveal">Chile · México · Latinoamérica</p>
        <h1 className="font-display text-[14vw] md:text-[9vw] leading-[0.9] text-foreground reveal" style={{ animationDelay: "0.1s" }}>
          Entre<span className="italic text-vino">lazos</span>
        </h1>
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-end reveal" style={{ animationDelay: "0.3s" }}>
          <p className="font-display text-3xl md:text-4xl leading-tight max-w-xl">
            Aprender viviendo.
          </p>
          <div>
            <p className="text-base md:text-lg text-muted-foreground max-w-md mb-8">
              Red de intercambio formativo colaborativo entre Chile y México para estudiantes de industrias creativas y culturales.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#programas" className="px-6 py-3.5 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition">
                Explorar programas
              </a>
              <a href="#" className="px-6 py-3.5 border border-foreground/30 rounded-full text-sm hover:bg-foreground hover:text-background transition">
                Crear perfil
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Como() {
  return (
    <section id="como" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Cómo funciona</p>
            <h2 className="text-5xl md:text-6xl max-w-2xl">Un hilo que une dos países, seis pasos.</h2>
          </div>
          <p className="text-muted-foreground max-w-xs">Cada nudo es una persona. Cada tramo, una historia que sigue tejiéndose.</p>
        </div>

        <div className="text-vino/70 mb-8">
          <Thread className="w-full h-12" />
        </div>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-14">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="font-display text-5xl text-vino mb-4">{s.n}</div>
              <h3 className="text-2xl mb-2">{s.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programas() {
  return (
    <section id="programas" className="py-32 px-6 bg-arena/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Programas disponibles</p>
            <h2 className="text-5xl md:text-6xl max-w-3xl">Diez maneras de habitar otro territorio.</h2>
          </div>
          <a href="#" className="text-sm underline underline-offset-4 hover:text-vino">Ver todos →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted mb-4">
                <img
                  src={p.img}
                  alt={p.titulo}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs">
                  {p.ciudad}
                </div>
                <div className="absolute bottom-4 right-4 bg-vino text-primary-foreground px-3 py-1 rounded-full text-xs">
                  {p.cupos} cupos
                </div>
              </div>
              <h3 className="text-xl mb-1 group-hover:text-vino transition-colors">{p.titulo}</h3>
              <div className="flex gap-3 text-xs text-muted-foreground">
                <span>{p.disciplina}</span>
                <span>·</span>
                <span>{p.duracion}</span>
                <span>·</span>
                <span>{p.modalidad}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comunidad() {
  return (
    <section id="comunidad" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Estudiantes y comunidad</p>
            <h2 className="text-5xl md:text-6xl">Caras reales. Historias en proceso.</h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-muted-foreground self-end">
            Cada perfil cuenta lo que estudia, lo que busca, dónde estuvo y cómo lo recuerdan quienes le abrieron la puerta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {students.map((s, i) => (
            <div key={i} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-5 bg-muted">
                <img src={s.img} alt={s.nombre} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl">{s.nombre}</h3>
                <span className="text-xs text-petroleo">{s.lugar}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{s.carrera} · {s.uni}</p>
              <p className="font-display text-lg leading-snug italic text-foreground/90">"{s.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experiencia() {
  return (
    <section className="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <h2 className="lg:col-span-8 text-5xl md:text-7xl leading-[1.05]">
            No vienes solo a estudiar.<br />
            <span className="italic text-arena/90">Vienes a vivir otra cultura desde dentro.</span>
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <img src={g1} alt="Sketchbook" loading="lazy" className="col-span-12 md:col-span-5 aspect-[4/5] object-cover rounded-2xl" />
          <img src={g2} alt="Familia anfitriona" loading="lazy" className="col-span-12 md:col-span-7 aspect-[4/5] md:aspect-auto md:h-full object-cover rounded-2xl" />
          <img src={g3} alt="Valparaíso" loading="lazy" className="col-span-12 aspect-[16/7] object-cover rounded-2xl mt-4" />
        </div>
      </div>
    </section>
  );
}

function Plataforma() {
  const features = [
    { t: "Chat interno", d: "Habla con tu match y tu anfitrión antes de viajar." },
    { t: "Videollamadas", d: "Conoce a tu familia, recorre tu cuarto, pierde el miedo." },
    { t: "Calendario", d: "Cohortes, talleres y entregas en un solo lugar." },
    { t: "Postulaciones", d: "Un solo formulario, todos los programas." },
    { t: "Becas", d: "Filtra apoyos según tu carrera y origen." },
    { t: "Matching", d: "Algoritmo + curaduría humana. Nunca solo automático." },
  ];
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Plataforma & app</p>
          <h2 className="text-5xl md:text-6xl mb-6">Todo lo que necesitas, en una sola pantalla cálida.</h2>
          <p className="text-muted-foreground max-w-md mb-10">Diseñada con estudiantes, no para ellos. Sin formularios fríos, sin trámites opacos.</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {features.map((f) => (
              <div key={f.t}>
                <h3 className="text-lg mb-1">{f.t}</h3>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[3/4] max-w-sm mx-auto bg-foreground rounded-[2.5rem] p-3 shadow-2xl float-slow">
            <div className="bg-background h-full rounded-[2rem] p-5 flex flex-col">
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                <span>9:41</span>
                <span>Entrelazos</span>
              </div>
              <h4 className="font-display text-2xl mb-1">Hola, Camila</h4>
              <p className="text-xs text-muted-foreground mb-5">Tu próximo paso: videollamada con la familia Pérez.</p>
              <div className="bg-arena/60 rounded-2xl p-4 mb-3">
                <div className="flex items-center gap-3">
                  <img src={s3} alt="" className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <p className="text-sm">María Pérez</p>
                    <p className="text-xs text-muted-foreground">Oaxaca · anfitriona</p>
                  </div>
                  <div className="w-2 h-2 bg-vino rounded-full" />
                </div>
              </div>
              <div className="bg-petroleo/10 rounded-2xl p-4 mb-3">
                <p className="text-xs text-petroleo mb-1">Próximo programa</p>
                <p className="text-sm">Diseño textil — Oaxaca</p>
                <p className="text-xs text-muted-foreground mt-1">Inicia 14 mar · 4 semanas</p>
              </div>
              <div className="mt-auto bg-vino text-primary-foreground rounded-full text-center py-2.5 text-xs">Confirmar viaje</div>
            </div>
          </div>
          <div className="absolute -z-10 inset-0 blur-3xl bg-vino/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function Becas() {
  return (
    <section id="becas" className="py-32 px-6 bg-arena/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Financiamiento & becas</p>
            <h2 className="text-5xl md:text-6xl">Sí es posible. <span className="italic">Lo hacemos posible.</span></h2>
          </div>
          <p className="lg:col-span-4 text-muted-foreground">Trabajamos con universidades, fundaciones y municipios para reducir hasta un 80% el costo real de un intercambio.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "−65%", d: "Promedio de reducción de costos por convivencia con familia anfitriona" },
            { n: "+24", d: "Becas activas entre Chile y México este semestre" },
            { n: "100%", d: "Acompañamiento desde la postulación hasta el regreso" },
          ].map((c) => (
            <div key={c.n} className="bg-background rounded-2xl p-8 border border-border">
              <div className="font-display text-6xl text-vino mb-3">{c.n}</div>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonios() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-vino mb-6">Testimonios</p>
        <blockquote className="font-display text-4xl md:text-6xl leading-tight">
          "Volví distinta. No por lo que aprendí en clase, sino por la mesa donde lo conversaba cada noche."
        </blockquote>
        <p className="mt-8 text-sm text-muted-foreground">Camila R. · Diseño Textil · UNAM → Chiloé</p>
      </div>
    </section>
  );
}

function ComunidadEntrelazos() {
  return (
    <section className="py-32 px-6 bg-vino text-primary-foreground">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-arena mb-4">Comunidad Entrelazos</p>
          <h2 className="text-5xl md:text-6xl mb-6">El intercambio no termina cuando vuelves.</h2>
          <p className="text-arena/90 max-w-md mb-8">Foro, encuentros, residencias breves y proyectos colaborativos entre quienes ya pasaron por la red.</p>
          <a href="#" className="inline-block px-6 py-3.5 bg-background text-foreground rounded-full text-sm hover:opacity-90 transition">Unirme a la comunidad</a>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[s1, s2, s3, g1].map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" className={`rounded-2xl object-cover ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-square mt-8"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <EntrelazosLogo className="mb-6 h-16 w-auto text-background" />
            <p className="font-display text-3xl max-w-md leading-tight">Tejer Latinoamérica con quienes la habitan.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-background/50 mb-4">Aliados</p>
            <ul className="space-y-2 text-sm text-background/80">
              <li>UNAM</li><li>Universidad de Chile</li><li>UDLA Chile</li><li>UAM</li><li>UC Chile</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-background/50 mb-4">Síguenos</p>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background">Instagram</a></li>
              <li><a href="#" className="hover:text-background">TikTok</a></li>
              <li><a href="#" className="hover:text-background">hola@entrelazos.lat</a></li>
            </ul>
          </div>
        </div>
        <div className="text-vino/80">
          <Thread className="w-full h-8" />
        </div>
        <div className="flex justify-between items-center pt-8 text-xs text-background/50 border-t border-background/10">
          <span>© 2026 Entrelazos · Chile ↔ México</span>
          <span>Hecho a mano en Latinoamérica</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Como />
      <Programas />
      <Comunidad />
      <Experiencia />
      <Plataforma />
      <Becas />
      <Testimonios />
      <ComunidadEntrelazos />
      <Footer />
    </main>
  );
}
