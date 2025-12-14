export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="bg-primary h-10 w-10 flex items-center justify-center text-white font-heading font-bold text-xl rounded-sm">
                089
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-white">DACH</span>
                <span className="text-[10px] tracking-widest uppercase text-gray-400 font-medium">GmbH München</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Ihr Meisterbetrieb für Bedachungen aller Art in München und Umgebung.
              Qualität, Zuverlässigkeit und Kompetenz seit über 25 Jahren.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Leistungen</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Dachsanierung</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Steildach & Flachdach</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Spenglerarbeiten</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dachfenster</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reparaturservice</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Rechtliches</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Einstellungen</a></li>
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

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} 089Dach GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            {/* Social Icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
