import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <section className="py-3 bg-white border-b">
      <div className="container mx-auto px-6 lg:px-12">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-muted-foreground hover:text-secondary" 
          onClick={handleBack}
          data-testid="button-back"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück
        </Button>
      </div>
    </section>
  );
}
