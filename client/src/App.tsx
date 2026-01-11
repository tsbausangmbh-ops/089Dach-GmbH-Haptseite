import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, Suspense, lazy, Component, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CookieConsent from "@/components/CookieConsent";
import BackgroundLogo from "@/components/BackgroundLogo";
import { LocalBusinessSchema } from "@/components/SEO";
import FloatingCTA from "@/components/FloatingCTA";
import Redirect from "@/components/Redirect";

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background" role="alert">
          <div className="text-center p-8 max-w-md">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-foreground mb-2">Seite konnte nicht geladen werden</h1>
            <p className="text-muted-foreground mb-6">
              Es gab ein Problem beim Laden dieser Seite. Bitte versuchen Sie es erneut.
            </p>
            <button
              onClick={this.handleRetry}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              data-testid="button-retry-load"
            >
              Seite neu laden
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy-loaded pages for better performance (Code-Splitting)
const Bedachungen = lazy(() => import("@/pages/Bedachungen"));
const Leistungen = lazy(() => import("@/pages/Leistungen"));
const Spenglerei = lazy(() => import("@/pages/Spenglerei"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Datenschutz = lazy(() => import("@/pages/Datenschutz"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const Referenzen = lazy(() => import("@/pages/Referenzen"));
const Ratgeber = lazy(() => import("@/pages/Ratgeber"));
const Impressum = lazy(() => import("@/pages/Impressum"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const UeberUns = lazy(() => import("@/pages/UeberUns"));
const Dachsanierung = lazy(() => import("@/pages/Dachsanierung"));
const Dachfenster = lazy(() => import("@/pages/Dachfenster"));
const Reparaturservice = lazy(() => import("@/pages/Reparaturservice"));
const Energieberatung = lazy(() => import("@/pages/Energieberatung"));
const Architektenleistungen = lazy(() => import("@/pages/Architektenleistungen"));
const Gaubenbau = lazy(() => import("@/pages/Gaubenbau"));
const Wartung = lazy(() => import("@/pages/Wartung"));
const Rueckruf = lazy(() => import("@/pages/Rueckruf"));
const KostenloseBeratung = lazy(() => import("@/pages/KostenloseBeratung"));
const AGB = lazy(() => import("@/pages/AGB"));
const RatgeberDaemmung = lazy(() => import("@/pages/RatgeberDaemmung"));
const RatgeberLeckortung = lazy(() => import("@/pages/RatgeberLeckortung"));
const RatgeberBeratung = lazy(() => import("@/pages/RatgeberBeratung"));
const RatgeberSturmschaden = lazy(() => import("@/pages/RatgeberSturmschaden"));
const RatgeberKosten = lazy(() => import("@/pages/RatgeberKosten"));
const RatgeberFoerderung = lazy(() => import("@/pages/RatgeberFoerderung"));
const RatgeberMaterialien = lazy(() => import("@/pages/RatgeberMaterialien"));
const Heizkostenrechner = lazy(() => import("@/pages/Heizkostenrechner"));
const DaemmungInfo = lazy(() => import("@/pages/DaemmungInfo"));
const Stadtteile = lazy(() => import("@/pages/Stadtteile"));
const StadtteilPasing = lazy(() => import("@/pages/StadtteilPasing"));
const StadtteilLaim = lazy(() => import("@/pages/StadtteilLaim"));
const StadtteilSchwabing = lazy(() => import("@/pages/StadtteilSchwabing"));
const StadtteilSendling = lazy(() => import("@/pages/StadtteilSendling"));
const StadtteilGraefelfing = lazy(() => import("@/pages/StadtteilGraefelfing"));
const StadtteilBogenhausen = lazy(() => import("@/pages/StadtteilBogenhausen"));
const StadtteilNymphenburg = lazy(() => import("@/pages/StadtteilNymphenburg"));
const StadtteilHarlaching = lazy(() => import("@/pages/StadtteilHarlaching"));
const StadtteilTrudering = lazy(() => import("@/pages/StadtteilTrudering"));
const StadtteilMoosach = lazy(() => import("@/pages/StadtteilMoosach"));
const StadtteilAllach = lazy(() => import("@/pages/StadtteilAllach"));
const StadtteilKarlsfeld = lazy(() => import("@/pages/StadtteilKarlsfeld"));
const StadtteilFasanerie = lazy(() => import("@/pages/StadtteilFasanerie"));
const StadtteilFeldmoching = lazy(() => import("@/pages/StadtteilFeldmoching"));
const StadtteilNeuhausen = lazy(() => import("@/pages/StadtteilNeuhausen"));
const StadtteilObermenzing = lazy(() => import("@/pages/StadtteilObermenzing"));
const StadtteilSolln = lazy(() => import("@/pages/StadtteilSolln"));
const StadtteilGiesing = lazy(() => import("@/pages/StadtteilGiesing"));
const UmlandGermering = lazy(() => import("@/pages/UmlandGermering"));
const UmlandStarnberg = lazy(() => import("@/pages/UmlandStarnberg"));
const UmlandDachau = lazy(() => import("@/pages/UmlandDachau"));
const UmlandFreising = lazy(() => import("@/pages/UmlandFreising"));
const UmlandErding = lazy(() => import("@/pages/UmlandErding"));
const UmlandUnterschleissheim = lazy(() => import("@/pages/UmlandUnterschleissheim"));
const UmlandFuerstenfeldbruck = lazy(() => import("@/pages/UmlandFuerstenfeldbruck"));
const UmlandOttobrunn = lazy(() => import("@/pages/UmlandOttobrunn"));
const UmlandGroebenzell = lazy(() => import("@/pages/UmlandGroebenzell"));
const UmlandPuchheim = lazy(() => import("@/pages/UmlandPuchheim"));
const UmlandOlching = lazy(() => import("@/pages/UmlandOlching"));
const UmlandEching = lazy(() => import("@/pages/UmlandEching"));
const StadtteilRamersdorf = lazy(() => import("@/pages/StadtteilRamersdorf"));
const StadtteilHaidhausen = lazy(() => import("@/pages/StadtteilHaidhausen"));
const StadtteilMilbertshofen = lazy(() => import("@/pages/StadtteilMilbertshofen"));
const StadtteilMaxvorstadt = lazy(() => import("@/pages/StadtteilMaxvorstadt"));
const StadtteilLehel = lazy(() => import("@/pages/StadtteilLehel"));
const StadtteilThalkirchen = lazy(() => import("@/pages/StadtteilThalkirchen"));
const StadtteilHadern = lazy(() => import("@/pages/StadtteilHadern"));
const StadtteilWestend = lazy(() => import("@/pages/StadtteilWestend"));
const StadtteilBergAmLaim = lazy(() => import("@/pages/StadtteilBergAmLaim"));
const StadtteilAltstadt = lazy(() => import("@/pages/StadtteilAltstadt"));
const StadtteilIsarvorstadt = lazy(() => import("@/pages/StadtteilIsarvorstadt"));
const StadtteilSchwanthalerhoehe = lazy(() => import("@/pages/StadtteilSchwanthalerhoehe"));
const StadtteilSendlingWestpark = lazy(() => import("@/pages/StadtteilSendlingWestpark"));
const StadtteilFreimann = lazy(() => import("@/pages/StadtteilFreimann"));
const StadtteilHasenbergl = lazy(() => import("@/pages/StadtteilHasenbergl"));
const StadtteilOberfoehring = lazy(() => import("@/pages/StadtteilOberfoehring"));
const StadtteilAubing = lazy(() => import("@/pages/StadtteilAubing"));
const Flachdach = lazy(() => import("@/pages/Flachdach"));
const Sturmschaden = lazy(() => import("@/pages/Sturmschaden"));
const Dachbeschichtung = lazy(() => import("@/pages/Dachbeschichtung"));
const Dachrinnenreinigung = lazy(() => import("@/pages/Dachrinnenreinigung"));
const Notdienst = lazy(() => import("@/pages/Notdienst"));
const Dachreparatur = lazy(() => import("@/pages/Dachreparatur"));
const Flachdachsanierung = lazy(() => import("@/pages/Flachdachsanierung"));
const DachUndicht = lazy(() => import("@/pages/DachUndicht"));
const DachziegelAustauschen = lazy(() => import("@/pages/DachziegelAustauschen"));
const Dachdaemmung = lazy(() => import("@/pages/Dachdaemmung"));
const Dachinspektion = lazy(() => import("@/pages/Dachinspektion"));
const SturmschadenDach = lazy(() => import("@/pages/SturmschadenDach"));
const DachrinneReparieren = lazy(() => import("@/pages/DachrinneReparieren"));
const SchimmelDach = lazy(() => import("@/pages/SchimmelDach"));
const EternitDach = lazy(() => import("@/pages/EternitDach"));
const DachpfannenAbdichten = lazy(() => import("@/pages/DachpfannenAbdichten"));
const DachAbdichten = lazy(() => import("@/pages/DachAbdichten"));
const DachNeuEindecken = lazy(() => import("@/pages/DachNeuEindecken"));
const Dachdecker = lazy(() => import("@/pages/Dachdecker"));
const SEODachdeckerMuenchen = lazy(() => import("@/pages/SEODachdeckerMuenchen"));
const SEODachdeckerUmgebung = lazy(() => import("@/pages/SEODachdeckerUmgebung"));
const SEODachdeckerSpengler = lazy(() => import("@/pages/SEODachdeckerSpengler"));
const SEODachdeckerKosten = lazy(() => import("@/pages/SEODachdeckerKosten"));
const SEODachdeckerNotdienst = lazy(() => import("@/pages/SEODachdeckerNotdienst"));
const DachDecken = lazy(() => import("@/pages/DachDecken"));
const DachsanierungKosten = lazy(() => import("@/pages/DachsanierungKosten"));
const DachdeckerPreise = lazy(() => import("@/pages/DachdeckerPreise"));
const DachUndichtWasTun = lazy(() => import("@/pages/DachUndichtWasTun"));
const FlachdachAbdichten = lazy(() => import("@/pages/FlachdachAbdichten"));
const DachgaubeKosten = lazy(() => import("@/pages/DachgaubeKosten"));
const DachfensterEinbauen = lazy(() => import("@/pages/DachfensterEinbauen"));
const DachrinneErneuern = lazy(() => import("@/pages/DachrinneErneuern"));
const BlechdachKosten = lazy(() => import("@/pages/BlechdachKosten"));
const CarportDach = lazy(() => import("@/pages/CarportDach"));
const GartenhausDach = lazy(() => import("@/pages/GartenhausDach"));
const TerrassendachMuenchen = lazy(() => import("@/pages/TerrassendachMuenchen"));
const VordachMontage = lazy(() => import("@/pages/VordachMontage"));
const DachbodenAusbauen = lazy(() => import("@/pages/DachbodenAusbauen"));
const SchornsteinAbdichten = lazy(() => import("@/pages/SchornsteinAbdichten"));
const Dachentmoosung = lazy(() => import("@/pages/Dachentmoosung"));
const SchneefanggitterMontage = lazy(() => import("@/pages/SchneefanggitterMontage"));
const DachstuhlErneuern = lazy(() => import("@/pages/DachstuhlErneuern"));
const FirstziegelAustauschen = lazy(() => import("@/pages/FirstziegelAustauschen"));
const KehleDachReparieren = lazy(() => import("@/pages/KehleDachReparieren"));
const DachuebertandVerkleiden = lazy(() => import("@/pages/DachuebertandVerkleiden"));
const OrtgangErneuern = lazy(() => import("@/pages/OrtgangErneuern"));
const TraufblechMontieren = lazy(() => import("@/pages/TraufblechMontieren"));
const SolaranlageDach = lazy(() => import("@/pages/SolaranlageDach"));
const DachbegruenungKosten = lazy(() => import("@/pages/DachbegruenungKosten"));
const AsbestDachSanieren = lazy(() => import("@/pages/AsbestDachSanieren"));
const DachgeschossDaemmen = lazy(() => import("@/pages/DachgeschossDaemmen"));
const WalmdachKosten = lazy(() => import("@/pages/WalmdachKosten"));
const SatteldachKosten = lazy(() => import("@/pages/SatteldachKosten"));
const DachziegelKaufen = lazy(() => import("@/pages/DachziegelKaufen"));
const DachbeschichtungKosten = lazy(() => import("@/pages/DachbeschichtungKosten"));
const FoerderungRechner = lazy(() => import("@/pages/FoerderungRechner"));
const Cookies = lazy(() => import("@/pages/Cookies"));

// Loading component for Suspense
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background" role="status" aria-busy="true">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" aria-hidden="true"></div>
        <p className="text-muted-foreground">Wird geladen...</p>
      </div>
    </div>
  );
}

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
    <ErrorBoundary>
    <Suspense fallback={<PageLoader />}>
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
      <Route path="/cookies" component={Cookies} />
      <Route path="/cookie-richtlinie" component={CookiePolicy} />
      <Route path="/agb" component={AGB} />
      <Route path="/rueckruf" component={Rueckruf} />
      <Route path="/beratung" component={KostenloseBeratung} />
      <Route path="/heizkostenrechner" component={Heizkostenrechner} />
      <Route path="/foerderung-rechner" component={FoerderungRechner} />
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
      <Route path="/dachdecker-groebenzell" component={UmlandGroebenzell} />
      <Route path="/dachdecker-puchheim" component={UmlandPuchheim} />
      <Route path="/dachdecker-olching" component={UmlandOlching} />
      <Route path="/dachdecker-eching" component={UmlandEching} />
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
      <Route path="/dachdecker-muenchen" component={SEODachdeckerMuenchen} />
      <Route path="/dachdecker-muenchen-umgebung" component={SEODachdeckerUmgebung} />
      <Route path="/dachdecker-spengler-muenchen" component={SEODachdeckerSpengler} />
      <Route path="/dachdecker-muenchen-kosten" component={SEODachdeckerKosten} />
      <Route path="/dachdecker-notdienst-muenchen" component={SEODachdeckerNotdienst} />
      <Route path="/leistungen/flachdach" component={Flachdach} />
      <Route path="/leistungen/sturmschaden" component={Sturmschaden} />
      <Route path="/leistungen/dachbeschichtung" component={Dachbeschichtung} />
      <Route path="/leistungen/dachrinnenreinigung" component={Dachrinnenreinigung} />
      <Route path="/leistungen/notdienst" component={Notdienst} />
      <Route path="/dachreparatur-muenchen" component={Dachreparatur} />
      <Route path="/flachdachsanierung-muenchen" component={Flachdachsanierung} />
      <Route path="/dach-undicht-muenchen" component={DachUndicht} />
      <Route path="/dachziegel-austauschen-muenchen" component={DachziegelAustauschen} />
      <Route path="/dachdaemmung-muenchen" component={Dachdaemmung} />
      <Route path="/dachinspektion-muenchen" component={Dachinspektion} />
      <Route path="/sturmschaden-dach-muenchen" component={SturmschadenDach} />
      <Route path="/dachrinne-reparieren-muenchen" component={DachrinneReparieren} />
      <Route path="/schimmel-dach-muenchen" component={SchimmelDach} />
      <Route path="/eternit-dach-muenchen" component={EternitDach} />
      <Route path="/dachpfannen-abdichten-muenchen" component={DachpfannenAbdichten} />
      <Route path="/dach-abdichten-muenchen" component={DachAbdichten} />
      <Route path="/dach-neu-eindecken-muenchen" component={DachNeuEindecken} />
      <Route path="/dachdecker" component={Dachdecker} />
      <Route path="/dach-decken-muenchen" component={DachDecken} />
      <Route path="/dachsanierung-kosten-muenchen" component={DachsanierungKosten} />
      <Route path="/dachdecker-preise-muenchen" component={DachdeckerPreise} />
      <Route path="/dach-undicht-was-tun" component={DachUndichtWasTun} />
      <Route path="/flachdach-abdichten-muenchen" component={FlachdachAbdichten} />
      <Route path="/dachgaube-kosten-muenchen" component={DachgaubeKosten} />
      <Route path="/dachfenster-einbauen-muenchen" component={DachfensterEinbauen} />
      <Route path="/dachrinne-erneuern-muenchen" component={DachrinneErneuern} />
      <Route path="/blechdach-kosten-muenchen" component={BlechdachKosten} />
      <Route path="/carport-dach-muenchen" component={CarportDach} />
      <Route path="/gartenhaus-dach-muenchen" component={GartenhausDach} />
      <Route path="/terrassendach-muenchen" component={TerrassendachMuenchen} />
      <Route path="/vordach-montage-muenchen" component={VordachMontage} />
      <Route path="/dachboden-ausbauen-muenchen" component={DachbodenAusbauen} />
      <Route path="/schornstein-abdichten-muenchen" component={SchornsteinAbdichten} />
      <Route path="/dachentmoosung-muenchen" component={Dachentmoosung} />
      <Route path="/schneefanggitter-montage-muenchen" component={SchneefanggitterMontage} />
      <Route path="/dachstuhl-erneuern-muenchen" component={DachstuhlErneuern} />
      <Route path="/firstziegel-austauschen-muenchen" component={FirstziegelAustauschen} />
      <Route path="/kehle-dach-reparieren-muenchen" component={KehleDachReparieren} />
      <Route path="/dachueberstand-verkleiden-muenchen" component={DachuebertandVerkleiden} />
      <Route path="/ortgang-erneuern-muenchen" component={OrtgangErneuern} />
      <Route path="/traufblech-montieren-muenchen" component={TraufblechMontieren} />
      <Route path="/solaranlage-dach-muenchen" component={SolaranlageDach} />
      <Route path="/dachbegruenung-kosten-muenchen" component={DachbegruenungKosten} />
      <Route path="/asbest-dach-sanieren-muenchen" component={AsbestDachSanieren} />
      <Route path="/dachgeschoss-daemmen-muenchen" component={DachgeschossDaemmen} />
      <Route path="/walmdach-kosten-muenchen" component={WalmdachKosten} />
      <Route path="/satteldach-kosten-muenchen" component={SatteldachKosten} />
      <Route path="/dachziegel-kaufen-muenchen" component={DachziegelKaufen} />
      <Route path="/dachbeschichtung-kosten-muenchen" component={DachbeschichtungKosten} />
      
      {/* Redirects for old URLs */}
      <Route path="/leistungen/dachdecker-muenchen"><Redirect to="/dachdecker-muenchen" /></Route>
      <Route path="/dachdecker-muenchen-preise"><Redirect to="/dachdecker-preise-muenchen" /></Route>
      
      <Route component={NotFound} />
    </Switch>
    </Suspense>
    </ErrorBoundary>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LocalBusinessSchema />
        <BackgroundLogo />
        <Router />
        <FloatingCTA />
        <CookieConsent />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
