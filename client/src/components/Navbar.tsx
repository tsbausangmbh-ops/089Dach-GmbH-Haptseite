import { Link } from "wouter";
import { Phone, Mail, Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Startseite", href: "/" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Bedachungen", href: "/bedachungen" },
    { name: "Spenglerei", href: "/spenglerei" },
    { name: "Ratgeber", href: "/ratgeber" },
    { name: "FAQ", href: "/faq" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border/40">
      {/* Top Bar - Contact Info */}
      <div className="hidden md:block bg-secondary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              089 12621964
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              info@089dach.de
            </span>
          </div>
          <div className="flex gap-4">
            <span>Mo-Fr: 08:00 - 16:30</span>
            <span>München & Umgebung</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img src="/favicon.png" alt="089Dach Logo" className="h-12 w-auto" />
            <div className="flex flex-col gap-0.5">
              <span className="font-heading font-bold text-base leading-none text-secondary">089Dach GmbH</span>
              <span className="text-[9px] tracking-widest uppercase text-muted-foreground font-medium">München</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm">
            Angebot anfordern
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between border-b pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <ChevronRight className="h-4 w-4" />
                </a>
              ))}
              <Button className="mt-4 bg-primary hover:bg-primary/90 w-full rounded-sm">
                Jetzt anrufen
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
