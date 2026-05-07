import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import s3 from "@/assets/student-3.jpg";

export const Route = createFileRoute("/app")({
  component: AppPage,
  head: () => ({
    meta: [
      { title: "App Entrelazos · Tu intercambio en una sola pantalla" },
      { name: "description", content: "Chat, matching, calendario, videollamadas y comunidad. La app de Entrelazos para vivir tu intercambio acompañado." },
      { property: "og:title", content: "App Entrelazos" },
      { property: "og:description", content: "Tu intercambio también se construye desde la comunidad." },
    ],
  }),
});

const features = [
  { t: "Chat interno", d: "Habla con tu match y tu anfitrión antes de viajar." },
  { t: "Matching", d: "Te conectamos con un estudiante afín en tu destino." },
  { t: "Calendario", d: "Cohortes, talleres y entregas en un solo lugar." },
  { t: "Videollamadas", d: "Conoce a tu familia anfitriona antes de partir." },
  { t: "Notificaciones", d: "Avisos cálidos, no spam: lo importante a tiempo." },
  { t: "Mapa", d: "Tu barrio, tus talleres, tus rincones favoritos." },
  { t: "Comunidad", d: "Foro, encuentros y residencias de quienes ya pasaron." },
];

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="aspect-[3/4] w-full max-w-xs bg-foreground rounded-[2.5rem] p-3 shadow-2xl">
      <div className="bg-background h-full rounded-[2rem] p-5 flex flex-col">
        <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
          <span>9:41</span>
          <span>Entrelazos</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function FakeQR({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-32 h-32 rounded-xl border border-border bg-background"
        style={{
          backgroundImage:
            "linear-gradient(45deg,var(--foreground) 25%,transparent 25%,transparent 75%,var(--foreground) 75%),linear-gradient(45deg,var(--foreground) 25%,transparent 25%,transparent 75%,var(--foreground) 75%)",
          backgroundSize: "12px 12px",
          backgroundPosition: "0 0, 6px 6px",
        }}
        aria-hidden
      />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

function AppPage() {
  return (
    <main className="bg-background text-foreground">
      <SiteNav />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">App Entrelazos</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
              Tu intercambio también se construye <span className="italic text-vino">desde la comunidad.</span>
            </h1>
            <p className="text-muted-foreground max-w-md mb-10">
              Diseñada con estudiantes, no para ellos. Sin formularios fríos, sin trámites opacos.
            </p>
            <div className="flex gap-8">
              <FakeQR label="App Store" />
              <FakeQR label="Google Play" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <PhoneFrame>
              <h4 className="font-display text-2xl mb-1">Chat</h4>
              <p className="text-xs text-muted-foreground mb-4">María Pérez · Oaxaca</p>
              <div className="space-y-2 text-xs">
                <div className="bg-arena/60 rounded-2xl px-3 py-2 max-w-[80%]">¡Hola Camila! Te dejamos lista la pieza azul.</div>
                <div className="bg-vino text-primary-foreground rounded-2xl px-3 py-2 max-w-[80%] ml-auto">Gracias, llego el martes ✨</div>
                <div className="bg-arena/60 rounded-2xl px-3 py-2 max-w-[80%]">Hacemos mole para celebrar.</div>
              </div>
            </PhoneFrame>
            <PhoneFrame>
              <h4 className="font-display text-2xl mb-1">Matching</h4>
              <p className="text-xs text-muted-foreground mb-4">2 personas afines</p>
              <div className="space-y-3">
                {[1,2].map((i) => (
                  <div key={i} className="flex items-center gap-3 bg-arena/50 rounded-2xl p-3">
                    <img src={s3} alt="" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1">
                      <p className="text-sm">Tani M.</p>
                      <p className="text-xs text-muted-foreground">UAM → Chiloé</p>
                    </div>
                    <div className="w-2 h-2 bg-vino rounded-full" />
                  </div>
                ))}
              </div>
            </PhoneFrame>
            <PhoneFrame>
              <h4 className="font-display text-2xl mb-1">Calendario</h4>
              <p className="text-xs text-muted-foreground mb-4">Marzo · 2026</p>
              <div className="grid grid-cols-7 gap-1 text-[10px] text-center">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div key={i} className={`py-1 rounded ${[6,13,20].includes(i) ? "bg-vino text-primary-foreground" : "text-muted-foreground"}`}>{i+1}</div>
                ))}
              </div>
              <p className="mt-3 text-xs text-petroleo">14 mar · Inicio textil Oaxaca</p>
            </PhoneFrame>
            <PhoneFrame>
              <h4 className="font-display text-2xl mb-1">Mapa</h4>
              <p className="text-xs text-muted-foreground mb-3">Oaxaca centro</p>
              <div className="flex-1 rounded-2xl bg-arena/60 relative overflow-hidden">
                <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-vino rounded-full -translate-x-1/2" />
                <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-petroleo rounded-full" />
                <div className="absolute bottom-3 right-3 text-[10px] text-muted-foreground">3 puntos</div>
              </div>
            </PhoneFrame>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-arena/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-12 max-w-2xl">Todo lo que necesitas, en una sola pantalla cálida.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {features.map((f) => (
              <div key={f.t}>
                <h3 className="text-xl mb-1">{f.t}</h3>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}