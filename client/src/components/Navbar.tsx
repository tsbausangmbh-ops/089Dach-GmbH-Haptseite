import { Link } from "wouter";
import { Phone, Mail, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);

  const navItems = [
    { name: "Startseite", href: "/" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Tipps & Tricks", href: "/ratgeber" },
    { name: "FAQ", href: "/faq" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const leistungenItems = [
    { name: "Alle Leistungen", href: "/leistungen" },
    { name: "Architektenleistungen", href: "/leistungen/architektenleistungen" },
    { name: "Reparaturservice", href: "/leistungen/reparaturservice" },
    { name: "Energieberatung", href: "/leistungen/energieberatung" },
    { name: "Dachsanierung", href: "/leistungen/dachsanierung" },
    { name: "Dachfenster", href: "/leistungen/dachfenster" },
    { name: "Bedachungen", href: "/leistungen/bedachungen" },
    { name: "Spenglerei", href: "/leistungen/spenglerei" },
    { name: "Gaubenbau", href: "/leistungen/gaubenbau" },
    { name: "Wartung", href: "/leistungen/wartung" },
    { name: "---", href: "#", separator: true },
    { name: "Kostenlose Beratung + Festpreis", href: "/ratgeber/beratung" },
    { name: "Dachsanierung mit Dämmung", href: "/ratgeber/daemmung" },
    { name: "Leckortung & Reparatur", href: "/ratgeber/leckortung" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border/40">
      {/* Top Bar - Contact Info */}
      <div className="hidden md:block bg-secondary text-white py-2">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-sm font-medium">
          <div className="flex gap-6">
            <a href="/ratgeber/daemmung" className="flex items-center gap-2 hover:text-primary transition-colors font-semibold">
              <span className="text-primary">★</span>
              Dachsanierung
            </a>
            <a href="/ratgeber/leckortung" className="flex items-center gap-2 hover:text-primary transition-colors font-semibold">
              <span className="text-primary">★</span>
              Leckortung
            </a>
            <a href="/ratgeber/beratung" className="flex items-center gap-2 hover:text-primary transition-colors font-semibold">
              <span className="text-primary">★</span>
              Kostenlose Beratung
            </a>
            <a href="mailto:info@089dach.de" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary" />
              info@089dach.de
            </a>
          </div>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5">
              <span className="text-primary">★</span> Meister für Dach- und Spenglerei seit 1998
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-primary">✓</span> 10 Jahre Garantie
            </span>
            <span>Mo-Fr: 08:00 - 16:30</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 group cursor-pointer">
            <img src="/favicon.png" alt="089Dach Logo" className="h-14 w-auto" />
            <div className="flex flex-col gap-0.5">
              <span className="font-heading font-bold text-lg leading-none text-secondary">089Dach GmbH</span>
              <span className="text-xs tracking-wide text-primary font-semibold">Ihr Dachdecker in München</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Startseite
          </a>
          <a href="/ueber-uns" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Über uns
          </a>
          
          {/* Leistungen Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-1">
              Leistungen
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white shadow-lg border border-gray-100 rounded-xl py-2 min-w-[260px]">
                {leistungenItems.map((item) => (
                  item.name === "---" ? (
                    <div key="separator" className="border-t border-gray-200 my-2" />
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-secondary hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>

          <a href="/ratgeber" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Tipps & Tricks
          </a>
          <a href="/faq" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="/referenzen" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Referenzen
          </a>
          <a href="/kontakt" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Kontakt
          </a>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold" asChild>
            <a href="/ratgeber/daemmung">Dachsanierung</a>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold" asChild>
            <a href="/beratung">24h Online Termine</a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
            <nav className="flex flex-col gap-4 mt-8">
              <a href="/" className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between border-b pb-2" onClick={() => setIsOpen(false)}>
                Startseite
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="/ueber-uns" className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between border-b pb-2" onClick={() => setIsOpen(false)}>
                Über uns
                <ChevronRight className="h-4 w-4" />
              </a>
              
              {/* Leistungen Accordion */}
              <div className="border-b pb-2">
                <button 
                  onClick={() => setLeistungenOpen(!leistungenOpen)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between w-full"
                >
                  Leistungen
                  <ChevronDown className={`h-4 w-4 transition-transform ${leistungenOpen ? 'rotate-180' : ''}`} />
                </button>
                {leistungenOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {leistungenItems.map((item) => (
                      item.name === "---" ? (
                        <div key="separator" className="border-t border-gray-200 my-2" />
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>

              <a href="/ratgeber" className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between border-b pb-2" onClick={() => setIsOpen(false)}>
                Tipps & Tricks
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="/faq" className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between border-b pb-2" onClick={() => setIsOpen(false)}>
                FAQ
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="/referenzen" className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between border-b pb-2" onClick={() => setIsOpen(false)}>
                Referenzen
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="/kontakt" className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between border-b pb-2" onClick={() => setIsOpen(false)}>
                Kontakt
                <ChevronRight className="h-4 w-4" />
              </a>
              <Button className="mt-4 bg-primary hover:bg-primary/90 w-full" asChild>
                <a href="/beratung" onClick={() => setIsOpen(false)}>24h Online Termine</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
