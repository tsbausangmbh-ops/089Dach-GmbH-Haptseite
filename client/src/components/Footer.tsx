export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <img src="/favicon.png" alt="089Dach Logo" className="h-14 w-auto flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="font-heading font-bold text-xl leading-none text-white">089Dach GmbH</span>
                <span className="text-sm font-semibold text-primary">Ihr Dachdecker in München</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Meister für Dach- und Spenglerei seit 1998. Über 100 zufriedene Kunden in München und Umgebung.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="bg-white/10 px-2 py-1 rounded-sm flex items-center gap-1">
                <span className="text-yellow-400">★</span> Meisterbetrieb
              </span>
              <span className="bg-white/10 px-2 py-1 rounded-sm flex items-center gap-1">
                <span className="text-green-400">✓</span> 10 Jahre Garantie
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Leistungen</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/leistungen/bedachungen" className="hover:text-primary transition-colors">Steildach & Flachdach</a></li>
              <li><a href="/leistungen/spenglerei" className="hover:text-primary transition-colors">Spenglerarbeiten</a></li>
              <li><a href="/leistungen/reparaturservice" className="hover:text-primary transition-colors">Reparaturservice</a></li>
              <li><a href="/ratgeber" className="hover:text-primary transition-colors">Tipps & Tricks</a></li>
              <li><a href="/leistungen/dachsanierung" className="hover:text-primary transition-colors">Dachsanierung</a></li>
              <li><a href="/leistungen/dachfenster" className="hover:text-primary transition-colors">Dachfenster</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Unternehmen</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/cookies" className="hover:text-primary transition-colors">Cookie Einstellungen</a></li>
              <li><a href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</a></li>
              <li><a href="/referenzen" className="hover:text-primary transition-colors">Referenzen</a></li>
              <li><a href="/impressum" className="hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="/ueber-uns" className="hover:text-primary transition-colors">Über uns</a></li>
              <li><a href="/agb" className="hover:text-primary transition-colors">AGB</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Kontakt</h4>
            <ul className="space-y-3 text-gray-400">
              <li>089Dach GmbH</li>
              <li>Thuillestr. 20</li>
              <li>81247 München-Obermenzing</li>
              <li className="pt-2"><a href="tel:08912621964" className="hover:text-primary transition-colors text-white">089 12621964</a></li>
              <li><a href="mailto:info@089dach.de" className="hover:text-primary transition-colors">info@089dach.de</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} 089Dach GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="text-gray-500 text-sm flex flex-wrap items-center gap-2">
            <span><span className="font-medium text-gray-400">Öffnungszeiten:</span> Mo - Fr: 08:00 - 16:30 | Sa - So: geschlossen</span>
            <span className="text-gray-600">|</span>
            <a href="/rueckruf" className="text-primary hover:text-primary/80 font-medium transition-colors" data-testid="link-footer-rueckruf">Rückruf anfordern</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
