import { Calendar } from "lucide-react";
import { Link } from "wouter";

export default function FloatingCTA() {
  return (
    <Link
      href="/beratung"
      className="fixed bottom-20 right-3 sm:bottom-24 sm:right-4 z-40 bg-primary hover:bg-primary/90 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 animate-pulse hover:animate-none"
      data-testid="floating-cta-beratung"
    >
      <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="font-semibold text-xs sm:text-sm hidden xs:inline">24h Online Termine</span>
      <span className="font-semibold text-xs sm:hidden">Termin</span>
    </Link>
  );
}
