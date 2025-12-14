import { Calendar } from "lucide-react";
import { Link } from "wouter";

export default function FloatingCTA() {
  return (
    <Link href="/beratung">
      <a
        className="fixed bottom-24 right-4 z-40 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 animate-pulse hover:animate-none"
        data-testid="floating-cta-beratung"
      >
        <Calendar className="h-5 w-5" />
        <span className="font-semibold text-sm">24h Online Termine</span>
      </a>
    </Link>
  );
}
