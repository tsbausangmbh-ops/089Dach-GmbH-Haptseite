import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsOpen(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-white border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Cookie className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-heading font-bold text-secondary">Cookie-Einstellungen</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Wir verwenden Cookies, um Ihnen das beste Nutzungserlebnis zu bieten. Dazu zählen Cookies, die für den 
                Betrieb der Seite notwendig sind, sowie solche, die lediglich zu anonymen Statistikzwecken oder für 
                Komforteinstellungen genutzt werden. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. 
                Weitere Informationen finden Sie in unserer <a href="/cookies" className="text-primary hover:underline">Cookie-Richtlinie</a>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button variant="outline" onClick={() => setShowDetails(true)} className="whitespace-nowrap order-2 sm:order-1">
                Einstellungen
              </Button>
              <Button variant="secondary" onClick={handleAcceptNecessary} className="whitespace-nowrap order-3 sm:order-2">
                Nur Notwendige
              </Button>
              <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap order-1 sm:order-3">
                Alle akzeptieren
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="text-lg font-heading font-bold text-secondary">Cookie-Einstellungen anpassen</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowDetails(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid gap-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-secondary flex items-center gap-2">
                    Notwendig
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Immer aktiv</span>
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <Switch checked={true} disabled />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-secondary">Statistik & Analyse</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt werden.
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-secondary">Marketing</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind.
                  </p>
                </div>
                <Switch />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="outline" onClick={handleAcceptNecessary}>
                Auswahl speichern
              </Button>
              <Button onClick={handleAcceptAll} className="bg-primary text-white hover:bg-primary/90">
                Alle akzeptieren
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
