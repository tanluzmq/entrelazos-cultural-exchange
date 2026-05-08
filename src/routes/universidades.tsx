import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { universidadesChile, universidadesMexico } from "@/data/experiencias";

export const Route = createFileRoute("/universidades")({
  component: UniversidadesPage,
  head: () => ({
    meta: [
      { title: "Universidades asociadas · Entrelazos" },
      { name: "description", content: "Universidades de Chile y México que forman parte de la red Entrelazos." },
      { property: "og:title", content: "Universidades asociadas · Entrelazos" },
      { property: "og:description", content: "Instituciones comprometidas con el intercambio cultural y la formación creativa latinoamericana." },
    ],
  }),
});

function UniversidadesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <SiteNav />

      <section className="pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Red Entrelazos</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[0.95] mb-6">
            Universidades <span className="italic text-vino">asociadas.</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Entrelazos trabaja junto a instituciones comprometidas con el intercambio cultural, la formación creativa y la movilidad estudiantil latinoamericana.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <Columna pais="Chile" lista={universidadesChile} />
          <Columna pais="México" lista={universidadesMexico} />
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto text-center border-t border-border pt-16">
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            ¿Tu universidad está en la lista? Postula al programa y te contactaremos para revisar tu disponibilidad.
          </p>
          <Link to="/postular" className="inline-block px-7 py-4 bg-vino text-primary-foreground rounded-full text-sm hover:opacity-90 transition">
            Postular ahora
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Columna({ pais, lista }: { pais: string; lista: readonly string[] }) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-8 pb-4 border-b border-border">
        <span className="font-display text-3xl text-vino">{pais === "Chile" ? "🇨🇱" : "🇲🇽"}</span>
        <h2 className="font-display text-3xl">{pais}</h2>
      </div>
      <ul className="grid gap-3">
        {lista.map((u) => (
          <li key={u}>
            <Link
              to="/postular"
              className="group block rounded-xl border border-border bg-card px-5 py-4 hover:border-vino transition"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-lg text-foreground/90 group-hover:text-vino transition-colors">{u}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-vino transition-colors">Postular →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
