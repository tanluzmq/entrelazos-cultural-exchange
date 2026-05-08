import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { testimoniosComunidad } from "@/data/experiencias";

export const Route = createFileRoute("/comunidad")({
  component: ComunidadPage,
  head: () => ({
    meta: [
      { title: "Comunidad Entrelazos · Historias entre Chile y México" },
      { name: "description", content: "Estudiantes chilenas y mexicanas comparten su paso por la red Entrelazos." },
      { property: "og:title", content: "Comunidad Entrelazos" },
      { property: "og:description", content: "Caras reales, historias en proceso entre Chile y México." },
    ],
  }),
});

function PhotoPlaceholder({ nombre, foto }: { nombre: string; foto?: string }) {
  if (foto) {
    return (
      <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-arena/60 border border-border">
        <img src={foto} alt={nombre} className="w-full h-full object-cover" loading="lazy" />
      </div>
    );
  }
  const inicial = nombre.charAt(0);
  return (
    <div className="aspect-[4/5] w-full rounded-2xl bg-arena/60 border border-border flex flex-col items-center justify-center text-muted-foreground">
      <span className="font-display text-6xl text-vino/40 mb-2">{inicial}</span>
      <span className="text-[10px] uppercase tracking-[0.3em]">Foto pendiente</span>
    </div>
  );
}

function ComunidadPage() {
  const chilenas = testimoniosComunidad.filter((t) => t.pais === "Chile");
  const mexicanas = testimoniosComunidad.filter((t) => t.pais === "México");

  return (
    <main className="bg-background text-foreground">
      <SiteNav />

      <section className="pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Comunidad</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl mb-6">
            Caras reales. <span className="italic text-vino">Historias en proceso.</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Una red viva entre Chile y México. Cada testimonio es de una estudiante que cruzó la frontera para aprender desde otra cultura, otra cocina, otro barrio.
          </p>
        </div>
      </section>

      <Bloque titulo="De Chile a México" subtitulo="Estudiantes chilenas que vivieron su intercambio en México." gente={chilenas} />
      <Bloque titulo="De México a Chile" subtitulo="Estudiantes mexicanas que vivieron su intercambio en Chile." gente={mexicanas} tono="petroleo" />

      <section className="py-24 px-6 bg-vino text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-arena mb-4">Después del intercambio</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">El intercambio no termina cuando vuelves.</h2>
          <p className="text-arena/90 mb-8">Foro, encuentros, residencias breves y proyectos colaborativos entre quienes ya pasaron por la red.</p>
          <Link to="/postular" className="inline-block px-6 py-3.5 bg-background text-foreground rounded-full text-sm hover:opacity-90 transition">
            Unirme a la comunidad
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Bloque({ titulo, subtitulo, gente, tono }: { titulo: string; subtitulo: string; gente: typeof testimoniosComunidad; tono?: "petroleo" }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className={`text-xs uppercase tracking-[0.3em] mb-3 ${tono === "petroleo" ? "text-petroleo" : "text-vino"}`}>{titulo}</p>
            <h2 className="font-display text-3xl md:text-4xl max-w-2xl">{subtitulo}</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {gente.map((t) => (
            <article key={t.nombre} className="group">
              <PhotoPlaceholder nombre={t.nombre} foto={t.foto} />
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{t.nombre}</h3>
                <span className="text-xs text-petroleo">{t.pais} → {t.destino}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{t.carrera} · {t.universidad}</p>
              <p className="text-xs uppercase tracking-widest text-vino mt-1">{t.ciudad}</p>
              <p className="font-display text-lg leading-snug italic text-foreground/90 mt-4">"{t.resena}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
