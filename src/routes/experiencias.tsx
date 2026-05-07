import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { experiencias, carreras, paises } from "@/data/experiencias";

export const Route = createFileRoute("/experiencias")({
  component: ExperienciasPage,
  head: () => ({
    meta: [
      { title: "Experiencias formativas · Entrelazos" },
      { name: "description", content: "Talleres y residencias formativas en Chile y México: arquitectura, textil, gastronomía, fotografía, muralismo y más." },
      { property: "og:title", content: "Experiencias formativas · Entrelazos" },
      { property: "og:description", content: "Talleres y residencias complementarias al intercambio universitario entre Chile y México." },
    ],
  }),
});

function ExperienciasPage() {
  const [carrera, setCarrera] = useState<string>("");
  const [pais, setPais] = useState<string>("");

  const filtradas = useMemo(
    () =>
      experiencias.filter(
        (e) => (!carrera || e.carrera === carrera) && (!pais || e.pais === pais),
      ),
    [carrera, pais],
  );

  return (
    <main className="bg-background text-foreground">
      <SiteNav />
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Catálogo</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl mb-6">
            Experiencias formativas <span className="italic text-vino">disponibles</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mb-12">
            Talleres y residencias breves que complementan tu intercambio universitario. Vives donde aprendes.
          </p>

          <div className="flex flex-wrap gap-4 items-end mb-12 p-5 bg-arena/40 rounded-2xl border border-border">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">País</label>
              <select
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                className="bg-background border border-border rounded-full px-4 py-2 text-sm min-w-44"
              >
                <option value="">Todos</option>
                {paises.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Carrera</label>
              <select
                value={carrera}
                onChange={(e) => setCarrera(e.target.value)}
                className="bg-background border border-border rounded-full px-4 py-2 text-sm min-w-56"
              >
                <option value="">Todas</option>
                {carreras.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <p className="ml-auto text-sm text-muted-foreground">{filtradas.length} experiencias</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtradas.map((e) => (
              <article key={e.titulo} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted mb-5">
                  <img
                    src={e.img}
                    alt={e.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs">
                    {e.ciudad} · {e.pais}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-vino text-primary-foreground px-3 py-1 rounded-full text-xs">
                    {e.cupos} cupos
                  </div>
                </div>
                <h3 className="font-display text-2xl mb-1 group-hover:text-vino transition-colors">{e.titulo}</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {e.carrera} · {e.duracion} · {e.modalidad}
                </p>
                <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{e.descripcion}</p>
                <p className="text-xs text-petroleo mb-4">{e.universidad}</p>
                <div className="border-t border-border pt-3 space-y-2">
                  {e.reviews.slice(0, 1).map((r, i) => (
                    <div key={i} className="text-xs text-muted-foreground">
                      <span className="text-vino">{"★".repeat(r.rating)}</span>{" "}
                      <span className="italic">"{r.texto}"</span>
                      <span className="block mt-0.5 not-italic">— {r.autor}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}