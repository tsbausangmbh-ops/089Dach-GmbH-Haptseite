export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <img src="/favicon.png" alt="089Dach Logo" className="h-14 w-auto flex-shrink-0" width={56} height={56} loading="lazy" decoding="async" />
              <div className="flex flex-col gap-1">
                <span className="font-heading font-bold text-xl leading-none text-white">089Dach GmbH</span>
                <span className="text-sm font-semibold text-primary">Ihr Dachdecker in München</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Meister für Dach- und Spenglerei seit 1998. Über 100+ zufriedene Kunden in München und Umgebung.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="bg-white/10 px-2 py-1 rounded-xl flex items-center gap-1">
                <span className="text-yellow-400">★</span> Meisterbetrieb
              </span>
              <span className="bg-white/10 px-2 py-1 rounded-xl flex items-center gap-1">
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
              <li className="pt-2"><a href="tel:08912621964" className="hover:text-primary transition-colors text-white font-medium" data-testid="link-footer-phone">📞 089 12621964</a></li>
              <li><a href="https://wa.me/498912621964?text=Hallo%20089Dach%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Beratung." target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors text-green-400 font-medium flex items-center gap-2" data-testid="link-footer-whatsapp">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a></li>
              <li><a href="mailto:info@089dach.de" className="hover:text-primary transition-colors" data-testid="link-footer-email">info@089dach.de</a></li>
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

        <div className="border-t border-white/10 mt-6 pt-4 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <span className="text-gray-600">Powered by</span>
            <a 
              href="https://extrucon.de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
              data-testid="link-footer-extrucon"
            >
              ExtruCon GmbH
            </a>
            <span className="text-gray-600">&copy; 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
