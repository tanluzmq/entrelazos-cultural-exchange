import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { universidadesChile, universidadesMexico } from "@/data/experiencias";

export const Route = createFileRoute("/postular")({
  component: PostularPage,
  head: () => ({
    meta: [
      { title: "Postula a Entrelazos" },
      { name: "description", content: "Postula al programa Entrelazos. Te contactaremos pronto." },
    ],
  }),
});

function PostularPage() {
  const [pais, setPais] = useState<"" | "Chile" | "México">("");
  const [sent, setSent] = useState(false);

  const universidades = pais === "Chile" ? universidadesChile : pais === "México" ? universidadesMexico : [];

  return (
    <main className="bg-background text-foreground min-h-screen">
      <SiteNav />
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Postula</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[0.95] mb-6">
            Cuéntanos <span className="italic text-vino">de ti.</span>
          </h1>
          <p className="text-muted-foreground mb-12 max-w-lg">
            No es un trámite, es el principio de una conversación. Lee con calma, responde con calma. Te escribimos pronto.
          </p>

          <div className="rounded-2xl border border-border bg-arena/40 p-8 mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-vino mb-3">Universidades asociadas</p>
            <h2 className="font-display text-2xl md:text-3xl leading-snug mb-4">
              Carreras del área <span className="italic text-vino">artística y cultural.</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Actualmente Entrelazos se encuentra enfocado en carreras del área artística y cultural. Trabajamos junto a universidades e instituciones de Chile y México para generar experiencias de intercambio académico y formación extracurricular en disciplinas creativas. Revisa si tu universidad es parte del programa.
            </p>
            <Link to="/universidades" className="inline-block px-5 py-3 border border-foreground/30 rounded-full text-sm hover:bg-foreground hover:text-background transition">
              Ver universidades asociadas
            </Link>
          </div>

          {sent ? (
            <div className="rounded-2xl border border-border p-10 bg-arena/40">
              <p className="font-display text-3xl mb-3">Gracias por tu interés.</p>
              <p className="text-muted-foreground">Te contactaremos pronto.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid gap-6"
            >
              <Field label="Nombre completo">
                <input required className="form-input" />
              </Field>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="País">
                  <select required value={pais} onChange={(e) => setPais(e.target.value as "Chile" | "México" | "")} className="form-input">
                    <option value="">Selecciona…</option>
                    <option value="Chile">Chile</option>
                    <option value="México">México</option>
                  </select>
                </Field>
                <Field label="Número de teléfono">
                  <input required type="tel" placeholder="+56 9 …" className="form-input" />
                </Field>
              </div>
              <Field label="Correo">
                <input required type="email" className="form-input" />
              </Field>
              <Field label="Universidad">
                <select required disabled={!pais} className="form-input disabled:opacity-50">
                  <option value="">{pais ? "Selecciona tu universidad" : "Elige primero un país"}</option>
                  {universidades.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
              </Field>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Carrera">
                  <input required className="form-input" />
                </Field>
                <Field label="Semestre actual">
                  <input required type="number" min={1} max={12} className="form-input" />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Duración del intercambio">
                  <select required className="form-input">
                    <option value="">Selecciona…</option>
                    <option>1 mes</option>
                    <option>3 meses</option>
                    <option>6 meses</option>
                    <option>1 año</option>
                  </select>
                </Field>
                <Field label="Disponibilidad">
                  <select required className="form-input">
                    <option value="">Selecciona…</option>
                    <option>Próximo semestre</option>
                    <option>Próximo año</option>
                    <option>Cuando haya cupo</option>
                  </select>
                </Field>
              </div>
              <button className="mt-2 px-7 py-4 bg-vino text-primary-foreground rounded-full text-sm hover:opacity-90 transition justify-self-start">
                Enviar postulación
              </button>
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}