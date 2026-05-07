import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/experiencias", label: "Experiencias formativas" },
  { to: "/app", label: "App" },
  { to: "/comunidad", label: "Comunidad" },
  { to: "/postular", label: "Postula" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/30">
      <div className="max-w-7xl mx-auto flex min-h-20 items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="flex items-center py-2 pr-4 text-foreground" aria-label="Ir al inicio">
          <img src={logo} alt="Entrelazos" className="h-11 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/postular" className="text-sm bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition">
          Crear perfil
        </Link>
      </div>
    </header>
  );
}