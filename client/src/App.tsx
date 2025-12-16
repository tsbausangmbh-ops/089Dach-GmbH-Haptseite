import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
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
import Energieberatung from "@/pages/Energieberatung";
import Architektenleistungen from "@/pages/Architektenleistungen";
import Gaubenbau from "@/pages/Gaubenbau";
import Wartung from "@/pages/Wartung";
import Rueckruf from "@/pages/Rueckruf";
import KostenloseBeratung from "@/pages/KostenloseBeratung";
import AGB from "@/pages/AGB";
import RatgeberDaemmung from "@/pages/RatgeberDaemmung";
import RatgeberLeckortung from "@/pages/RatgeberLeckortung";
import RatgeberBeratung from "@/pages/RatgeberBeratung";
import Heizkostenrechner from "@/pages/Heizkostenrechner";
import DaemmungInfo from "@/pages/DaemmungInfo";
import Stadtteile from "@/pages/Stadtteile";
import StadtteilPasing from "@/pages/StadtteilPasing";
import StadtteilLaim from "@/pages/StadtteilLaim";
import StadtteilSchwabing from "@/pages/StadtteilSchwabing";
import StadtteilSendling from "@/pages/StadtteilSendling";
import StadtteilGraefelfing from "@/pages/StadtteilGraefelfing";
import CookieConsent from "@/components/CookieConsent";
import BackgroundLogo from "@/components/BackgroundLogo";
import { LocalBusinessSchema } from "@/components/SEO";
import ChatWidget from "@/components/ChatWidget";
import FloatingCTA from "@/components/FloatingCTA";
import ChristmasPopup from "@/components/ChristmasPopup";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
    <ScrollToTop />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/leistungen" component={Leistungen} />
      <Route path="/leistungen/bedachungen" component={Bedachungen} />
      <Route path="/leistungen/spenglerei" component={Spenglerei} />
      <Route path="/leistungen/dachsanierung" component={Dachsanierung} />
      <Route path="/leistungen/dachfenster" component={Dachfenster} />
      <Route path="/leistungen/reparaturservice" component={Reparaturservice} />
      <Route path="/leistungen/energieberatung" component={Energieberatung} />
      <Route path="/leistungen/architektenleistungen" component={Architektenleistungen} />
      <Route path="/leistungen/gaubenbau" component={Gaubenbau} />
      <Route path="/leistungen/wartung" component={Wartung} />
      <Route path="/referenzen" component={Referenzen} />
      <Route path="/ratgeber" component={Ratgeber} />
      <Route path="/ratgeber/daemmung" component={RatgeberDaemmung} />
      <Route path="/ratgeber/leckortung" component={RatgeberLeckortung} />
      <Route path="/ratgeber/beratung" component={RatgeberBeratung} />
      <Route path="/faq" component={FAQ} />
      <Route path="/kontakt" component={ContactPage} />
      <Route path="/ueber-uns" component={UeberUns} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/cookies" component={CookiePolicy} />
      <Route path="/agb" component={AGB} />
      <Route path="/rueckruf" component={Rueckruf} />
      <Route path="/beratung" component={KostenloseBeratung} />
      <Route path="/heizkostenrechner" component={Heizkostenrechner} />
      <Route path="/daemmung-info" component={DaemmungInfo} />
      <Route path="/stadtteile" component={Stadtteile} />
      <Route path="/dachdecker-pasing" component={StadtteilPasing} />
      <Route path="/dachdecker-laim" component={StadtteilLaim} />
      <Route path="/dachdecker-schwabing" component={StadtteilSchwabing} />
      <Route path="/dachdecker-sendling" component={StadtteilSendling} />
      <Route path="/dachdecker-graefelfing" component={StadtteilGraefelfing} />
      <Route component={NotFound} />
    </Switch>
    </>
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
        <ChatWidget />
        <CookieConsent />
        <ChristmasPopup />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
