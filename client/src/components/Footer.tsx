import AIBeraterSection from "./AIBeraterSection";

interface FooterProps {
  showAIBerater?: boolean;
}

export default function Footer({ showAIBerater = false }: FooterProps) {
  return (
    <>
      {showAIBerater && <AIBeraterSection />}
      <footer className="bg-secondary text-white py-4 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          
          <div className="space-y-2">
            <div className="flex items-start gap-2 group">
              <img src="/favicon.png" alt="089Dach Logo" className="h-10 w-auto flex-shrink-0" width={40} height={40} loading="lazy" decoding="async" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none text-white">089Dach GmbH</span>
                <span className="text-xs font-semibold text-primary">Ihr Dachdecker in München</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-snug">
              Meister für Dach- und Spenglerei seit 1998.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-white/10 px-2 py-0.5 rounded-xl flex items-center gap-1">
                <span className="text-yellow-400">★</span> Meisterbetrieb
              </span>
              <span className="bg-white/10 px-2 py-0.5 rounded-xl flex items-center gap-1">
                <span className="text-green-400">✓</span> 10 Jahre Garantie
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-2 text-white">Leistungen</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="/leistungen/dachsanierung" className="hover:text-primary transition-colors">Dachsanierung</a></li>
              <li><a href="/leistungen/flachdach" className="hover:text-primary transition-colors">Flachdach</a></li>
              <li><a href="/leistungen/bedachungen" className="hover:text-primary transition-colors">Steildach</a></li>
              <li><a href="/leistungen/spenglerei" className="hover:text-primary transition-colors">Spenglerei</a></li>
              <li><a href="/leistungen/notdienst" className="hover:text-primary transition-colors">🚨 Notdienst 24/7</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-2 text-white">Stadtteile</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="/dachdecker-pasing" className="hover:text-primary transition-colors">Pasing</a></li>
              <li><a href="/dachdecker-schwabing" className="hover:text-primary transition-colors">Schwabing</a></li>
              <li><a href="/dachdecker-sendling" className="hover:text-primary transition-colors">Sendling</a></li>
              <li><a href="/dachdecker-bogenhausen" className="hover:text-primary transition-colors">Bogenhausen</a></li>
              <li><a href="/stadtteile" className="hover:text-primary transition-colors text-primary font-medium">→ Alle</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-2 text-white">Kontakt</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Thuillestr. 20, 81247 München</li>
              <li><a href="/rueckruf" className="hover:text-primary transition-colors text-white font-medium" data-testid="link-footer-phone">📞 Rückruf anfordern</a></li>
              <li><a href="https://wa.me/498912621964" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors text-green-400 font-medium" data-testid="link-footer-whatsapp">WhatsApp</a></li>
              <li><a href="mailto:info@089dach.de" className="hover:text-primary transition-colors" data-testid="link-footer-email">info@089dach.de</a></li>
            </ul>
          </div>

        </div>

        {/* SEO + Umland Links combined */}
        <div className="border-t border-white/10 pt-3 mb-3">
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
            <a href="/ratgeber/kosten" className="hover:text-primary transition-colors">Kosten</a>
            <a href="/ratgeber/foerderung" className="hover:text-primary transition-colors">Förderung</a>
            <a href="/faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="/referenzen" className="hover:text-primary transition-colors">Referenzen</a>
            <span className="text-gray-600">|</span>
            <a href="/dachdecker-germering" className="hover:text-primary transition-colors">Germering</a>
            <a href="/dachdecker-starnberg" className="hover:text-primary transition-colors">Starnberg</a>
            <a href="/dachdecker-dachau" className="hover:text-primary transition-colors">Dachau</a>
            <a href="/dachdecker-freising" className="hover:text-primary transition-colors">Freising</a>
            <a href="/dachdecker-fuerstenfeldbruck" className="hover:text-primary transition-colors">FFB</a>
          </div>
        </div>

        {/* KI-Hinweis + Legal */}
        <div className="border-t border-white/10 pt-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs text-gray-500">
          <div className="flex flex-wrap gap-3">
            <a href="/impressum" className="hover:text-primary transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</a>
            <a href="/agb" className="hover:text-primary transition-colors">AGB</a>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="hidden md:inline">KI-Hinweis gem. EU AI Act</span>
          </div>
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary font-medium transition-colors">ExtruCon GmbH</a></span>
            <span className="text-gray-600">|</span>
            <span>Mo-Fr 08-16:30</span>
          </div>
        </div>

      </div>
    </footer>
    </>
  );
}
