import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import s1 from "@/assets/student-1.jpg";
import s2 from "@/assets/student-2.jpg";
import s3 from "@/assets/student-3.jpg";
import sTani from "@/assets/student-tani.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/comunidad")({
  component: ComunidadPage,
  head: () => ({
    meta: [
      { title: "Comunidad Entrelazos · Caras reales, historias en proceso" },
      { name: "description", content: "Estudiantes, anfitriones y egresados de la red Entrelazos entre Chile y México." },
      { property: "og:title", content: "Comunidad Entrelazos" },
      { property: "og:description", content: "El intercambio no termina cuando vuelves." },
    ],
  }),
});

const students = [
  { img: s1, nombre: "Camila R.", carrera: "Diseño Textil", uni: "UNAM", lugar: "→ Chiloé", quote: "Tejer con manos chilenas cambió cómo pienso el oficio." },
  { img: s2, nombre: "Tomás V.", carrera: "Arquitectura", uni: "U. de Chile", lugar: "→ Oaxaca", quote: "Aprendí más en una cocina oaxaqueña que en un semestre." },
  { img: sTani, nombre: "Tani M.", carrera: "Artes Visuales", uni: "UAM", lugar: "→ Oaxaca", quote: "El cerro fue mi aula. Mi familia anfitriona, mi maestra." },
];

function ComunidadPage() {
  return (
    <main className="bg-background text-foreground">
      <SiteNav />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Comunidad</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl mb-6">
            Caras reales. <span className="italic text-vino">Historias en proceso.</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mb-16">
            Cada perfil cuenta lo que estudia, dónde estuvo y cómo lo recuerdan quienes le abrieron la puerta.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {students.map((s, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-5 bg-muted">
                  <img src={s.img} alt={s.nombre} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl">{s.nombre}</h3>
                  <span className="text-xs text-petroleo">{s.lugar}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{s.carrera} · {s.uni}</p>
                <p className="font-display text-lg leading-snug italic text-foreground/90">"{s.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-vino text-primary-foreground">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-arena mb-4">Después del intercambio</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">El intercambio no termina cuando vuelves.</h2>
            <p className="text-arena/90 max-w-md mb-8">Foro, encuentros, residencias breves y proyectos colaborativos entre quienes ya pasaron por la red.</p>
            <Link to="/postular" className="inline-block px-6 py-3.5 bg-background text-foreground rounded-full text-sm hover:opacity-90 transition">Unirme a la comunidad</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[s1, s2, s3, g1, g2, g3].map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" className={`rounded-2xl object-cover ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-square mt-8"}`} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}