import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

const steps = [
  { n: "01", t: "Crear perfil", d: "Cuenta quién eres, qué estudias y qué te mueve." },
  { n: "02", t: "Elegir experiencia", d: "Talleres y residencias en Chile y México." },
  { n: "03", t: "Match con estudiante", d: "Te conectamos con alguien afín que recibirá lo mismo." },
  { n: "04", t: "Familia anfitriona", d: "Vives con una familia local cuidadosamente seleccionada." },
  { n: "05", t: "Aprender desde la experiencia", d: "Tu universidad, taller y barrio se vuelven uno." },
  { n: "06", t: "Crear comunidad", d: "Tu paso queda en una red latinoamericana viva." },
];

function Thread({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 100" preserveAspectRatio="none" fill="none">
      <path className="thread-line" d="M0,50 C200,10 400,90 600,50 C800,10 1000,90 1200,50" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <img src={hero} alt="Estudiante compartiendo tortillas con familia anfitriona en Oaxaca" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
      <div className="absolute inset-0 grain opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
        <p className="text-xs uppercase tracking-[0.3em] text-white mb-6 reveal">Chile · México</p>
        <h1 className="font-display text-[14vw] md:text-[9vw] leading-[0.9] text-foreground reveal" style={{ animationDelay: "0.1s" }}>
          Entre<span className="italic text-vino">lazos</span>
        </h1>
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-end reveal" style={{ animationDelay: "0.3s" }}>
          <p className="font-display text-3xl md:text-4xl leading-tight max-w-xl">
            Aprender viviendo.
          </p>
          <div>
            <p className="text-base md:text-lg text-muted-foreground max-w-md mb-8 font-bold text-emerald-900">
              Red de intercambio formativo colaborativo entre Chile y México para estudiantes de industrias creativas y culturales.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/experiencias" className="px-6 py-3.5 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition">
                Explorar experiencias
              </Link>
              <Link to="/postular" className="px-6 py-3.5 border border-foreground/30 rounded-full text-sm hover:bg-foreground hover:text-background transition">
                Postular
              </Link>
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
            <h2 className="text-5xl md:text-6xl max-w-2xl">Un lazo que une dos países, con solo seis pasos.</h2>
          </div>
          <p className="text-muted-foreground max-w-xs">Cada nudo es una persona. Cada tramo, una historia que sigue tejiéndose.</p>
        </div>
        <div className="text-vino/70 mb-8"><Thread className="w-full h-12" /></div>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-14">
          {steps.map((s) => (
            <div key={s.n}>
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

function Storytelling() {
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

function MisionVision() {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 text-vino/30">
        <Thread className="w-full h-10" />
      </div>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4 text-center">Manifiesto</p>
        <h2 className="font-display text-4xl md:text-6xl text-center max-w-3xl mx-auto leading-[1.05] mb-24">
          Aprender de otra cultura <span className="italic text-vino">desde dentro.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="relative">
            <span className="absolute -left-2 -top-8 font-display text-7xl text-vino/15 select-none">01</span>
            <p className="text-xs uppercase tracking-[0.3em] text-petroleo mb-5">Misión</p>
            <p className="font-display text-2xl md:text-[1.7rem] leading-snug text-foreground/90">
              Democratizar el acceso a experiencias internacionales formativas entre Chile y México mediante una red colaborativa que conecta estudiantes, universidades y comunidades a través del aprendizaje vivido, el intercambio cultural y la convivencia humana.
            </p>
          </div>
          <div className="relative md:mt-16">
            <span className="absolute -left-2 -top-8 font-display text-7xl text-vino/15 select-none">02</span>
            <p className="text-xs uppercase tracking-[0.3em] text-petroleo mb-5">Visión</p>
            <p className="font-display text-2xl md:text-[1.7rem] leading-snug text-foreground/90">
              Convertirse en la principal red latinoamericana de intercambio formativo colaborativo, impulsando una nueva forma de aprender basada en la conexión humana, la experiencia cultural y el acceso equitativo a oportunidades internacionales.
            </p>
          </div>
        </div>

        <div className="text-vino/30 mt-24"><Thread className="w-full h-10" /></div>
      </div>
    </section>
  );
}

function Teasers() {
  const cards = [
    { to: "/experiencias", label: "Experiencias formativas", desc: "Talleres y residencias en Chile y México." },
    { to: "/app", label: "App Entrelazos", desc: "Chat, matching, calendario y comunidad." },
    { to: "/comunidad", label: "Comunidad", desc: "Caras reales. Historias en proceso." },
  ] as const;
  return (
    <section className="py-32 px-6 bg-arena/40">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-vino mb-4">Recorre Entrelazos</p>
        <h2 className="text-4xl md:text-5xl max-w-2xl mb-14">Tres formas de empezar.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Link key={c.to} to={c.to} className="group block bg-background rounded-2xl p-8 border border-border hover:border-vino transition">
              <h3 className="font-display text-2xl mb-2 group-hover:text-vino transition-colors">{c.label}</h3>
              <p className="text-sm text-muted-foreground mb-6">{c.desc}</p>
              <span className="text-xs uppercase tracking-widest text-vino">Entrar →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-6 bg-petroleo text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20" />
      <div className="max-w-4xl mx-auto text-center relative">
        <p className="text-xs uppercase tracking-[0.3em] text-arena mb-6">Tu intercambio, tu ritmo</p>
        <h2 className="font-display text-5xl md:text-6xl mb-6 leading-tight">
          Da el primer paso <span className="italic text-arena/90">desde donde estás.</span>
        </h2>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Link to="/postular" className="px-7 py-4 bg-background text-foreground rounded-full text-sm hover:opacity-90 transition">
            Postular
          </Link>
          <Link to="/experiencias" className="px-7 py-4 border border-background/40 rounded-full text-sm hover:bg-background hover:text-foreground transition">
            Ver experiencias
          </Link>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <Como />
      <MisionVision />
      <Storytelling />
      <Teasers />
      <CTA />
      <SiteFooter />
    </main>
  );
}