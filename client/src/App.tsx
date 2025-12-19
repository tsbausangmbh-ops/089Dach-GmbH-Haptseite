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
import RatgeberSturmschaden from "@/pages/RatgeberSturmschaden";
import RatgeberKosten from "@/pages/RatgeberKosten";
import RatgeberFoerderung from "@/pages/RatgeberFoerderung";
import RatgeberMaterialien from "@/pages/RatgeberMaterialien";
import Heizkostenrechner from "@/pages/Heizkostenrechner";
import DaemmungInfo from "@/pages/DaemmungInfo";
import Stadtteile from "@/pages/Stadtteile";
import StadtteilPasing from "@/pages/StadtteilPasing";
import StadtteilLaim from "@/pages/StadtteilLaim";
import StadtteilSchwabing from "@/pages/StadtteilSchwabing";
import StadtteilSendling from "@/pages/StadtteilSendling";
import StadtteilGraefelfing from "@/pages/StadtteilGraefelfing";
import StadtteilBogenhausen from "@/pages/StadtteilBogenhausen";
import StadtteilNymphenburg from "@/pages/StadtteilNymphenburg";
import StadtteilHarlaching from "@/pages/StadtteilHarlaching";
import StadtteilTrudering from "@/pages/StadtteilTrudering";
import StadtteilMoosach from "@/pages/StadtteilMoosach";
import StadtteilAllach from "@/pages/StadtteilAllach";
import StadtteilKarlsfeld from "@/pages/StadtteilKarlsfeld";
import StadtteilFasanerie from "@/pages/StadtteilFasanerie";
import StadtteilFeldmoching from "@/pages/StadtteilFeldmoching";
import StadtteilNeuhausen from "@/pages/StadtteilNeuhausen";
import StadtteilObermenzing from "@/pages/StadtteilObermenzing";
import StadtteilSolln from "@/pages/StadtteilSolln";
import StadtteilGiesing from "@/pages/StadtteilGiesing";
import UmlandGermering from "@/pages/UmlandGermering";
import UmlandStarnberg from "@/pages/UmlandStarnberg";
import UmlandDachau from "@/pages/UmlandDachau";
import UmlandFreising from "@/pages/UmlandFreising";
import UmlandErding from "@/pages/UmlandErding";
import UmlandUnterschleissheim from "@/pages/UmlandUnterschleissheim";
import UmlandFuerstenfeldbruck from "@/pages/UmlandFuerstenfeldbruck";
import UmlandOttobrunn from "@/pages/UmlandOttobrunn";
import StadtteilRamersdorf from "@/pages/StadtteilRamersdorf";
import StadtteilHaidhausen from "@/pages/StadtteilHaidhausen";
import StadtteilMilbertshofen from "@/pages/StadtteilMilbertshofen";
import StadtteilMaxvorstadt from "@/pages/StadtteilMaxvorstadt";
import StadtteilLehel from "@/pages/StadtteilLehel";
import StadtteilThalkirchen from "@/pages/StadtteilThalkirchen";
import StadtteilHadern from "@/pages/StadtteilHadern";
import StadtteilWestend from "@/pages/StadtteilWestend";
import StadtteilBergAmLaim from "@/pages/StadtteilBergAmLaim";
import StadtteilAltstadt from "@/pages/StadtteilAltstadt";
import StadtteilIsarvorstadt from "@/pages/StadtteilIsarvorstadt";
import StadtteilSchwanthalerhoehe from "@/pages/StadtteilSchwanthalerhoehe";
import StadtteilSendlingWestpark from "@/pages/StadtteilSendlingWestpark";
import StadtteilFreimann from "@/pages/StadtteilFreimann";
import StadtteilHasenbergl from "@/pages/StadtteilHasenbergl";
import StadtteilOberfoehring from "@/pages/StadtteilOberfoehring";
import StadtteilAubing from "@/pages/StadtteilAubing";
import Flachdach from "@/pages/Flachdach";
import Sturmschaden from "@/pages/Sturmschaden";
import Dachbeschichtung from "@/pages/Dachbeschichtung";
import Dachrinnenreinigung from "@/pages/Dachrinnenreinigung";
import Notdienst from "@/pages/Notdienst";
import CookieConsent from "@/components/CookieConsent";
import BackgroundLogo from "@/components/BackgroundLogo";
import { LocalBusinessSchema } from "@/components/SEO";
import ChatWidget from "@/components/ChatWidget";
import FloatingCTA from "@/components/FloatingCTA";
import ChristmasPopup from "@/components/ChristmasPopup";
import NewYearPopup from "@/components/NewYearPopup";

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
      <Route path="/ratgeber/sturmschaden" component={RatgeberSturmschaden} />
      <Route path="/ratgeber/kosten" component={RatgeberKosten} />
      <Route path="/ratgeber/foerderung" component={RatgeberFoerderung} />
      <Route path="/ratgeber/materialien" component={RatgeberMaterialien} />
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
      <Route path="/dachdecker-bogenhausen" component={StadtteilBogenhausen} />
      <Route path="/dachdecker-nymphenburg" component={StadtteilNymphenburg} />
      <Route path="/dachdecker-harlaching" component={StadtteilHarlaching} />
      <Route path="/dachdecker-trudering" component={StadtteilTrudering} />
      <Route path="/dachdecker-moosach" component={StadtteilMoosach} />
      <Route path="/dachdecker-allach" component={StadtteilAllach} />
      <Route path="/dachdecker-karlsfeld" component={StadtteilKarlsfeld} />
      <Route path="/dachdecker-fasanerie" component={StadtteilFasanerie} />
      <Route path="/dachdecker-feldmoching" component={StadtteilFeldmoching} />
      <Route path="/dachdecker-neuhausen" component={StadtteilNeuhausen} />
      <Route path="/dachdecker-obermenzing" component={StadtteilObermenzing} />
      <Route path="/dachdecker-solln" component={StadtteilSolln} />
      <Route path="/dachdecker-giesing" component={StadtteilGiesing} />
      <Route path="/dachdecker-germering" component={UmlandGermering} />
      <Route path="/dachdecker-starnberg" component={UmlandStarnberg} />
      <Route path="/dachdecker-dachau" component={UmlandDachau} />
      <Route path="/dachdecker-freising" component={UmlandFreising} />
      <Route path="/dachdecker-erding" component={UmlandErding} />
      <Route path="/dachdecker-unterschleissheim" component={UmlandUnterschleissheim} />
      <Route path="/dachdecker-fuerstenfeldbruck" component={UmlandFuerstenfeldbruck} />
      <Route path="/dachdecker-ottobrunn" component={UmlandOttobrunn} />
      <Route path="/dachdecker-ramersdorf-perlach" component={StadtteilRamersdorf} />
      <Route path="/dachdecker-au-haidhausen" component={StadtteilHaidhausen} />
      <Route path="/dachdecker-milbertshofen" component={StadtteilMilbertshofen} />
      <Route path="/dachdecker-maxvorstadt" component={StadtteilMaxvorstadt} />
      <Route path="/dachdecker-lehel" component={StadtteilLehel} />
      <Route path="/dachdecker-thalkirchen" component={StadtteilThalkirchen} />
      <Route path="/dachdecker-hadern" component={StadtteilHadern} />
      <Route path="/dachdecker-westend" component={StadtteilWestend} />
      <Route path="/dachdecker-berg-am-laim" component={StadtteilBergAmLaim} />
      <Route path="/dachdecker-altstadt" component={StadtteilAltstadt} />
      <Route path="/dachdecker-ludwigsvorstadt-isarvorstadt" component={StadtteilIsarvorstadt} />
      <Route path="/dachdecker-schwanthalerhoehe" component={StadtteilSchwanthalerhoehe} />
      <Route path="/dachdecker-sendling-westpark" component={StadtteilSendlingWestpark} />
      <Route path="/dachdecker-freimann" component={StadtteilFreimann} />
      <Route path="/dachdecker-hasenbergl" component={StadtteilHasenbergl} />
      <Route path="/dachdecker-oberfoehring" component={StadtteilOberfoehring} />
      <Route path="/dachdecker-aubing-lochhausen-langwied" component={StadtteilAubing} />
      <Route path="/leistungen/flachdach" component={Flachdach} />
      <Route path="/leistungen/sturmschaden" component={Sturmschaden} />
      <Route path="/leistungen/dachbeschichtung" component={Dachbeschichtung} />
      <Route path="/leistungen/dachrinnenreinigung" component={Dachrinnenreinigung} />
      <Route path="/leistungen/notdienst" component={Notdienst} />
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
        <NewYearPopup />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
