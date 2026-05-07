import logo from "@/assets/logo.png";

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

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img src={logo} alt="Entrelazos" className="mb-6 h-16 w-auto" />
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