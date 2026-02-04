import AIBeraterSection from "./AIBeraterSection";

interface FooterProps {
  showAIBerater?: boolean;
}

export default function Footer({ showAIBerater = false }: FooterProps) {
  return (
    <>
      {showAIBerater && <AIBeraterSection />}
      <footer className="bg-secondary text-white py-6 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Main Grid - 4 gleichmäßige Spalten */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            
            {/* Spalte 1: Firma */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <img src="/assets/logo.png" alt="089Dach Logo" className="h-8 w-auto flex-shrink-0 rounded-md" width={32} height={32} loading="lazy" decoding="async" />
                <div>
                  <span className="font-heading font-bold text-base text-white block leading-tight">089Dach GmbH</span>
                  <span className="text-xs text-primary">Meisterbetrieb seit 1998</span>
                </div>
              </div>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>Thuillestr. 20, 81247 München</li>
                <li><a href="mailto:info@089dach.de" className="hover:text-primary transition-colors">info@089dach.de</a></li>
                <li>Mo-Fr: 08:00-16:30 Uhr</li>
                <li>Sa-So: geschlossen</li>
              </ul>
            </div>

            {/* Spalte 2: Leistungen */}
            <div>
              <h4 className="font-heading font-bold text-sm mb-3 text-white">Leistungen</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li><a href="/leistungen/dachsanierung/" className="hover:text-primary transition-colors">Dachsanierung</a></li>
                <li><a href="/leistungen/flachdach/" className="hover:text-primary transition-colors">Flachdach</a></li>
                <li><a href="/leistungen/bedachungen/" className="hover:text-primary transition-colors">Steildach</a></li>
                <li><a href="/leistungen/spenglerei/" className="hover:text-primary transition-colors">Spenglerei</a></li>
                <li><a href="/leistungen/notdienst/" className="hover:text-primary transition-colors">Notdienst 24/7</a></li>
              </ul>
            </div>

            {/* Spalte 3: Stadtteile */}
            <div>
              <h4 className="font-heading font-bold text-sm mb-3 text-white">Stadtteile</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li><a href="/dachdecker-obermenzing" className="hover:text-primary transition-colors">Obermenzing</a></li>
                <li><a href="/dachdecker-pasing" className="hover:text-primary transition-colors">Pasing</a></li>
                <li><a href="/dachdecker-schwabing" className="hover:text-primary transition-colors">Schwabing</a></li>
                <li><a href="/dachdecker-sendling" className="hover:text-primary transition-colors">Sendling</a></li>
                <li><a href="/stadtteile" className="hover:text-primary transition-colors text-primary font-medium">→ Alle Stadtteile</a></li>
              </ul>
            </div>

            {/* Spalte 4: Kontakt */}
            <div>
              <h4 className="font-heading font-bold text-sm mb-3 text-white">Kontakt</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li><a href="/rueckruf/" className="hover:text-primary transition-colors text-white font-medium">Rückruf anfordern</a></li>
                <li><a href="/beratung/" className="hover:text-primary transition-colors">Kostenlose Beratung</a></li>
                <li><a href="/kontakt/" className="hover:text-primary transition-colors">Kontaktformular</a></li>
                <li><a href="/faq/" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="/ratgeber/foerderung/" className="hover:text-primary transition-colors">Förderung</a></li>
              </ul>
            </div>

          </div>

          {/* SEO Links - kompakt */}
          <div className="border-t border-white/10 py-3">
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 justify-center">
              <a href="/dachdecker-muenchen" className="hover:text-primary transition-colors">Dachdecker München</a>
              <a href="/dachdecker-muenchen-kosten" className="hover:text-primary transition-colors">Kosten</a>
              <a href="/dachdecker-preise-muenchen" className="hover:text-primary transition-colors">Preise</a>
              <a href="/dachdecker-germering" className="hover:text-primary transition-colors">Germering</a>
              <a href="/dachdecker-starnberg" className="hover:text-primary transition-colors">Starnberg</a>
              <a href="/dachdecker-dachau" className="hover:text-primary transition-colors">Dachau</a>
              <a href="/dachdecker-fuerstenfeldbruck" className="hover:text-primary transition-colors">FFB</a>
              <a href="/dachdecker-freising" className="hover:text-primary transition-colors">Freising</a>
            </div>
          </div>

          {/* Bottom Bar - kompakt und einheitlich */}
          <div className="border-t border-white/10 pt-3">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/impressum/" className="hover:text-primary transition-colors">Impressum</a>
                <a href="/datenschutz/" className="hover:text-primary transition-colors">Datenschutz</a>
                <a href="/agb/" className="hover:text-primary transition-colors">AGB</a>
                <a href="/barrierefreiheit/" className="hover:text-primary transition-colors">Barrierefreiheit</a>
              </div>
              <div className="text-center md:text-right">
                <span>&copy; {new Date().getFullYear()} 089Dach GmbH</span>
                <span className="mx-2">·</span>
                <span>Webdesign: <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">ExtruCon</a> & <a href="https://kshwmont.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">KSHWmont</a></span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
