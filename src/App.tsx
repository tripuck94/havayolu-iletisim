import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PetServices from "./pages/PetServices";
import ThyPetServices from "./pages/thy/PetServices";
import PegasusPetServices from "./pages/pegasus/PetServices";
import SunExpressPetServices from "./pages/sunexpress/PetServices";
import AjetPetServices from "./pages/ajet/PetServices";
import AzalPetServices from "./pages/azal/PetServices";
import AirlineContactPage from "./pages/contact/AirlineContactPage";
import TicketPurchase from "./pages/services/TicketPurchase";
import AirlineTicketPurchase from "./pages/services/AirlineTicketPurchase";
import TicketChange from "./pages/services/TicketChange";
import GeneralNameChange from "./pages/services/NameChange";
import GeneralCancelRefund from "./pages/services/CancelRefund";
import AirlineTicketChange from "./pages/TicketChange";
import NameChange from "./pages/NameChange";
import CancelRefund from "./pages/CancelRefund";
import SeatSelection from "./pages/services/SeatSelection";
import BaggageService from "./pages/services/BaggageService";
import UnaccompaniedMinor from "./pages/services/UnaccompaniedMinor";
import ClassUpgrade from "./pages/services/ClassUpgrade";
import CheckIn from "./pages/services/CheckIn";
import ThySeatSelection from "./pages/thy/SeatSelection";
import PegasusSeatSelection from "./pages/pegasus/SeatSelection";
import SunExpressSeatSelection from "./pages/sunexpress/SeatSelection";
import AjetSeatSelection from "./pages/ajet/SeatSelection";
import AzalSeatSelection from "./pages/azal/SeatSelection";
import ThyBaggageService from "./pages/thy/BaggageService";
import PegasusBaggageService from "./pages/pegasus/BaggageService";
import SunExpressBaggageService from "./pages/sunexpress/BaggageService";
import AjetBaggageService from "./pages/ajet/BaggageService";
import AzalBaggageService from "./pages/azal/BaggageService";
import ThyUnaccompaniedMinor from "./pages/thy/UnaccompaniedMinor";
import PegasusUnaccompaniedMinor from "./pages/pegasus/UnaccompaniedMinor";
import SunExpressUnaccompaniedMinor from "./pages/sunexpress/UnaccompaniedMinor";
import AjetUnaccompaniedMinor from "./pages/ajet/UnaccompaniedMinor";
import AzalUnaccompaniedMinor from "./pages/azal/UnaccompaniedMinor";
import ThyClassUpgrade from "./pages/thy/ClassUpgrade";
import PegasusClassUpgrade from "./pages/pegasus/ClassUpgrade";
import SunExpressClassUpgrade from "./pages/sunexpress/ClassUpgrade";
import AjetClassUpgrade from "./pages/ajet/ClassUpgrade";
import AzalClassUpgrade from "./pages/azal/ClassUpgrade";
import ThyCheckIn from "./pages/thy/CheckIn";
import PegasusCheckIn from "./pages/pegasus/CheckIn";
import SunExpressCheckIn from "./pages/sunexpress/CheckIn";
import AjetCheckIn from "./pages/ajet/CheckIn";
import AzalCheckIn from "./pages/azal/CheckIn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pet-services" element={<PetServices />} />
          <Route path="/thy/pet-services" element={<ThyPetServices />} />
          <Route path="/pegasus/pet-services" element={<PegasusPetServices />} />
          <Route path="/sunexpress/pet-services" element={<SunExpressPetServices />} />
          <Route path="/ajet/pet-services" element={<AjetPetServices />} />
          <Route path="/azal/pet-services" element={<AzalPetServices />} />
          <Route path="/thy-iletisim" element={<AirlineContactPage />} />
          <Route path="/pegasus-iletisim" element={<AirlineContactPage />} />
          <Route path="/sunexpress-iletisim" element={<AirlineContactPage />} />
          <Route path="/ajet-iletisim" element={<AirlineContactPage />} />
          <Route path="/azal-iletisim" element={<AirlineContactPage />} />
          <Route path="/hizmetler/bilet-satin-alma" element={<TicketPurchase />} />
          <Route path="/hizmetler/bilet-degisikligi" element={<TicketChange />} />
          <Route path="/hizmetler/isim-degisikligi" element={<GeneralNameChange />} />
          <Route path="/hizmetler/iptal-iade" element={<GeneralCancelRefund />} />
          <Route path="/hizmetler/koltuk-secimi" element={<SeatSelection />} />
          <Route path="/services/seat-selection" element={<SeatSelection />} />
          <Route path="/services/baggage" element={<BaggageService />} />
          <Route path="/services/unaccompanied-minor" element={<UnaccompaniedMinor />} />
          <Route path="/services/class-upgrade" element={<ClassUpgrade />} />
          <Route path="/services/check-in" element={<CheckIn />} />
          <Route path="/thy-bilet-satin-alma" element={<AirlineTicketPurchase />} />
          <Route path="/pegasus-bilet-satin-alma" element={<AirlineTicketPurchase />} />
          <Route path="/sunexpress-bilet-satin-alma" element={<AirlineTicketPurchase />} />
          <Route path="/ajet-bilet-satin-alma" element={<AirlineTicketPurchase />} />
          <Route path="/azal-bilet-satin-alma" element={<AirlineTicketPurchase />} />
          <Route path="/thy-bilet-degisikligi" element={<AirlineTicketChange />} />
          <Route path="/pegasus-bilet-degisikligi" element={<AirlineTicketChange />} />
          <Route path="/sunexpress-bilet-degisikligi" element={<AirlineTicketChange />} />
          <Route path="/ajet-bilet-degisikligi" element={<AirlineTicketChange />} />
          <Route path="/azal-bilet-degisikligi" element={<AirlineTicketChange />} />
          <Route path="/bilet-degisikligi/:airline" element={<AirlineTicketChange />} />
          <Route path="/thy-koltuk-secimi" element={<SeatSelection />} />
          <Route path="/pegasus-koltuk-secimi" element={<SeatSelection />} />
          <Route path="/sunexpress-koltuk-secimi" element={<SeatSelection />} />
          <Route path="/ajet-koltuk-secimi" element={<SeatSelection />} />
          <Route path="/azal-koltuk-secimi" element={<SeatSelection />} />
          <Route path="/koltuk-secimi/:airline" element={<SeatSelection />} />
          <Route path="/thy-isim-degisikligi" element={<NameChange />} />
          <Route path="/pegasus-isim-degisikligi" element={<NameChange />} />
          <Route path="/sunexpress-isim-degisikligi" element={<NameChange />} />
          <Route path="/ajet-isim-degisikligi" element={<NameChange />} />
          <Route path="/azal-isim-degisikligi" element={<NameChange />} />
          <Route path="/isim-degisikligi/:airline" element={<NameChange />} />
          <Route path="/thy-iptal-iade" element={<CancelRefund />} />
          <Route path="/pegasus-iptal-iade" element={<CancelRefund />} />
          <Route path="/sunexpress-iptal-iade" element={<CancelRefund />} />
          <Route path="/ajet-iptal-iade" element={<CancelRefund />} />
          <Route path="/azal-iptal-iade" element={<CancelRefund />} />
          <Route path="/iptal-iade/:airline" element={<CancelRefund />} />
          <Route path="/thy/seat-selection" element={<ThySeatSelection />} />
          <Route path="/pegasus/seat-selection" element={<PegasusSeatSelection />} />
          <Route path="/sunexpress/seat-selection" element={<SunExpressSeatSelection />} />
          <Route path="/ajet/seat-selection" element={<AjetSeatSelection />} />
          <Route path="/azal/seat-selection" element={<AzalSeatSelection />} />
          <Route path="/thy/baggage" element={<ThyBaggageService />} />
          <Route path="/pegasus/baggage" element={<PegasusBaggageService />} />
          <Route path="/sunexpress/baggage" element={<SunExpressBaggageService />} />
          <Route path="/ajet/baggage" element={<AjetBaggageService />} />
          <Route path="/azal/baggage" element={<AzalBaggageService />} />
          <Route path="/thy/unaccompanied-minor" element={<ThyUnaccompaniedMinor />} />
          <Route path="/pegasus/unaccompanied-minor" element={<PegasusUnaccompaniedMinor />} />
          <Route path="/sunexpress/unaccompanied-minor" element={<SunExpressUnaccompaniedMinor />} />
          <Route path="/ajet/unaccompanied-minor" element={<AjetUnaccompaniedMinor />} />
          <Route path="/azal/unaccompanied-minor" element={<AzalUnaccompaniedMinor />} />
          <Route path="/thy/class-upgrade" element={<ThyClassUpgrade />} />
          <Route path="/pegasus/class-upgrade" element={<PegasusClassUpgrade />} />
          <Route path="/sunexpress/class-upgrade" element={<SunExpressClassUpgrade />} />
          <Route path="/ajet/class-upgrade" element={<AjetClassUpgrade />} />
          <Route path="/azal/class-upgrade" element={<AzalClassUpgrade />} />
          <Route path="/thy/check-in" element={<ThyCheckIn />} />
          <Route path="/pegasus/check-in" element={<PegasusCheckIn />} />
          <Route path="/sunexpress/check-in" element={<SunExpressCheckIn />} />
          <Route path="/ajet/check-in" element={<AjetCheckIn />} />
          <Route path="/azal/check-in" element={<AzalCheckIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
