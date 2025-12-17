import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, Phone } from "lucide-react";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50">
      <SEO 
        title="Seite nicht gefunden | 089Dach GmbH München"
        description="Die gesuchte Seite wurde nicht gefunden. Besuchen Sie unsere Startseite oder kontaktieren Sie uns für Dachdecker-Leistungen in München."
        canonical="https://089dach.de/404"
      />
      <BackButton />
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Did you forget to add the page to the router?
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
