import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-300">
      <Button
        asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl rounded-full px-6 py-6 text-base gap-2"
        data-testid="floating-cta-button"
      >
        <a href="/beratung">
          <CalendarClock className="h-5 w-5" />
          24h Online Termine
        </a>
      </Button>
    </div>
  );
}
