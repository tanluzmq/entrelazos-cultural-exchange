import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/postular")({
  component: PostularPage,
  head: () => ({
    meta: [
      { title: "Postular al programa · Entrelazos" },
      { name: "description", content: "Postula a los programas de intercambio formativo de Entrelazos entre Chile y México." },
    ],
  }),
});

function PostularPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="text-xs uppercase tracking-[0.3em] text-vino hover:opacity-80">← Volver</Link>
        <h1 className="font-display text-5xl md:text-6xl mt-6 mb-4">Postular al programa</h1>
        <p className="text-muted-foreground mb-10">Cuéntanos sobre ti. Te contactaremos en menos de 72 horas.</p>

        {sent ? (
          <div className="rounded-2xl border border-border p-8 bg-arena/40">
            <p className="font-display text-2xl mb-2">¡Postulación recibida!</p>
            <p className="text-sm text-muted-foreground">Pronto recibirás un correo con los próximos pasos.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="grid gap-5"
          >
            <label className="grid gap-2 text-sm">Nombre completo
              <input required className="border border-border rounded-lg px-4 py-3 bg-background" />
            </label>
            <label className="grid gap-2 text-sm">Correo
              <input type="email" required className="border border-border rounded-lg px-4 py-3 bg-background" />
            </label>
            <label className="grid gap-2 text-sm">Universidad y carrera
              <input required className="border border-border rounded-lg px-4 py-3 bg-background" />
            </label>
            <label className="grid gap-2 text-sm">Programa de interés
              <input defaultValue="Jardín Botánico · U. Austral de Chile" className="border border-border rounded-lg px-4 py-3 bg-background" />
            </label>
            <label className="grid gap-2 text-sm">¿Por qué quieres participar?
              <textarea rows={5} required className="border border-border rounded-lg px-4 py-3 bg-background" />
            </label>
            <button className="mt-2 px-6 py-3.5 bg-vino text-primary-foreground rounded-full text-sm hover:opacity-90 transition justify-self-start">
              Enviar postulación
            </button>
          </form>
        )}
      </div>
    </main>
  );
}