import { Link } from "wouter";
import { Phone, Mail, Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Startseite", href: "/" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Bedachungen", href: "/bedachungen" },
    { name: "Spenglerei", href: "/spenglerei" },
    { name: "FAQ", href: "/faq" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Kontakt", href: "/#contact" },
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
            <div className="bg-primary h-10 w-10 flex items-center justify-center text-white font-heading font-bold text-xl rounded-sm">
              089
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-secondary">DACH</span>
              <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium">GmbH München</span>
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
