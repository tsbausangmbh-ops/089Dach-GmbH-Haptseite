import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Seite nicht gefunden - 089Dach GmbH"
        description="Diese Seite existiert nicht. Finden Sie hier unsere Dachdecker-Leistungen in München."
        canonical="https://089dach.de/404"
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-8xl font-bold text-amber-500 mb-4">404</div>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            Seite nicht gefunden
          </h1>
          <p className="text-slate-600 mb-8">
            Die gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
          
          <div className="space-y-3">
            <Link href="/">
              <a className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors" data-testid="link-home">
                Zur Startseite
              </a>
            </Link>
            
            <Link href="/leistungen">
              <a className="block w-full border border-slate-300 hover:border-amber-500 text-slate-700 font-medium py-3 px-6 rounded-lg transition-colors" data-testid="link-services">
                Unsere Leistungen
              </a>
            </Link>
            
            <Link href="/kontakt">
              <a className="block w-full border border-slate-300 hover:border-amber-500 text-slate-700 font-medium py-3 px-6 rounded-lg transition-colors" data-testid="link-contact">
                Kontakt aufnehmen
              </a>
            </Link>
          </div>
          
          <p className="text-sm text-slate-500 mt-8">
            Dachdecker-Meisterbetrieb München | Tel: 089 / 126 219 64
          </p>
        </div>
      </div>
    </>
  );
}
