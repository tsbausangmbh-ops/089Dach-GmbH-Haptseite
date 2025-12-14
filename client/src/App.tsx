import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Bedachungen from "@/pages/Bedachungen";
import Leistungen from "@/pages/Leistungen";
import Spenglerei from "@/pages/Spenglerei";
import FAQ from "@/pages/FAQ";
import Datenschutz from "@/pages/Datenschutz";
import CookiePolicy from "@/pages/CookiePolicy";
import Referenzen from "@/pages/Referenzen";
import Ratgeber from "@/pages/Ratgeber";
import Impressum from "@/pages/Impressum";
import ContactPage from "@/pages/ContactPage";
import UeberUns from "@/pages/UeberUns";
import Dachsanierung from "@/pages/Dachsanierung";
import Dachfenster from "@/pages/Dachfenster";
import Reparaturservice from "@/pages/Reparaturservice";
import CookieConsent from "@/components/CookieConsent";
import BackgroundLogo from "@/components/BackgroundLogo";
import { LocalBusinessSchema } from "@/components/SEO";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/bedachungen" component={Bedachungen} />
      <Route path="/spenglerei" component={Spenglerei} />
      <Route path="/leistungen" component={Leistungen} />
      <Route path="/referenzen" component={Referenzen} />
      <Route path="/ratgeber" component={Ratgeber} />
      <Route path="/faq" component={FAQ} />
      <Route path="/kontakt" component={ContactPage} />
      <Route path="/ueber-uns" component={UeberUns} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/cookies" component={CookiePolicy} />
      <Route path="/dachsanierung" component={Dachsanierung} />
      <Route path="/dachfenster" component={Dachfenster} />
      <Route path="/reparaturservice" component={Reparaturservice} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LocalBusinessSchema />
        <BackgroundLogo />
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
