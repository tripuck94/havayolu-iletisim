import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PetServices from "./pages/PetServices";
import AirlinePetServices from "./pages/services/PetServices";
import AirlineContactPage from "./pages/contact/AirlineContactPage";
import TicketPurchase from "./pages/services/TicketPurchase";
import AirlineTicketPurchase from "./pages/services/AirlineTicketPurchase";
import TicketChange from "./pages/services/TicketChange";
import GeneralNameChange from "./pages/services/NameChange";
import GeneralCancelRefund from "./pages/services/CancelRefund";
import AirlineTicketChange from "./pages/TicketChange";
import NameChange from "./pages/NameChange";
import CancelRefund from "./pages/CancelRefund";
import SeatSelection from "./pages/SeatSelection";
import BaggageService from "./pages/BaggageService";
import UnaccompaniedMinor from "./pages/services/UnaccompaniedMinor";
import ClassUpgrade from "./pages/services/ClassUpgrade";
import CheckIn from "./pages/services/CheckIn";
import FlightDelay from "./pages/services/FlightDelay";
import LostBaggage from "./pages/services/LostBaggage";
import ReservationManagement from "./pages/services/ReservationManagement";
import TicketInquiry from "./pages/services/TicketInquiry";
import SpecialAssistance from "./pages/services/SpecialAssistance";
import FAQ from "./pages/services/FAQ";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/evcil-hayvan" element={<PetServices />} />
          <Route path="/thy-evcil-hayvan" element={<AirlinePetServices />} />
          <Route path="/pegasus-evcil-hayvan" element={<AirlinePetServices />} />
          <Route path="/sunexpress-evcil-hayvan" element={<AirlinePetServices />} />
          <Route path="/ajet-evcil-hayvan" element={<AirlinePetServices />} />
          <Route path="/azal-evcil-hayvan" element={<AirlinePetServices />} />
          <Route path="/pet-services" element={<PetServices />} />
          <Route path="/:airline/pet-services" element={<AirlinePetServices />} />
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
          <Route path="/hizmetler/bagaj-ekleme" element={<BaggageService />} />
          <Route path="/hizmetler/evcil-hayvan" element={<PetServices />} />
          <Route path="/hizmetler/refakatsiz-cocuk" element={<UnaccompaniedMinor />} />
          <Route path="/hizmetler/sinif-yukseltme" element={<ClassUpgrade />} />
          <Route path="/hizmetler/check-in" element={<CheckIn />} />
          <Route path="/hizmetler/ucus-gecikmesi" element={<FlightDelay />} />
          <Route path="/hizmetler/kayip-esya" element={<LostBaggage />} />
          <Route path="/hizmetler/rezervasyon-yonetimi" element={<ReservationManagement />} />
          <Route path="/hizmetler/bilet-sorgulama" element={<TicketInquiry />} />
          <Route path="/hizmetler/ozel-yardim" element={<SpecialAssistance />} />
          <Route path="/hizmetler/sik-sorulan-sorular" element={<FAQ />} />
          <Route path="/services/seat-selection" element={<SeatSelection />} />
          <Route path="/services/baggage" element={<BaggageService />} />
          <Route path="/services/unaccompanied-minor" element={<UnaccompaniedMinor />} />
          <Route path="/refakatsiz-cocuk" element={<UnaccompaniedMinor />} />
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
          <Route path="/thy-bagaj-ekleme" element={<BaggageService />} />
          <Route path="/pegasus-bagaj-ekleme" element={<BaggageService />} />
          <Route path="/sunexpress-bagaj-ekleme" element={<BaggageService />} />
          <Route path="/ajet-bagaj-ekleme" element={<BaggageService />} />
          <Route path="/azal-bagaj-ekleme" element={<BaggageService />} />
          <Route path="/bagaj-ekleme/:airline" element={<BaggageService />} />
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
          <Route path="/sunexpress/seat-selection" element={<SeatSelection />} />
          <Route path="/ajet/seat-selection" element={<SeatSelection />} />
          <Route path="/azal/seat-selection" element={<SeatSelection />} />
          <Route path="/thy-refakatsiz-cocuk" element={<UnaccompaniedMinor />} />
          <Route path="/pegasus-refakatsiz-cocuk" element={<UnaccompaniedMinor />} />
          <Route path="/sunexpress-refakatsiz-cocuk" element={<UnaccompaniedMinor />} />
          <Route path="/ajet-refakatsiz-cocuk" element={<UnaccompaniedMinor />} />
          <Route path="/azal-refakatsiz-cocuk" element={<UnaccompaniedMinor />} />
          <Route path="/thy/unaccompanied-minor" element={<UnaccompaniedMinor />} />
          <Route path="/pegasus/unaccompanied-minor" element={<UnaccompaniedMinor />} />
          <Route path="/sunexpress/unaccompanied-minor" element={<UnaccompaniedMinor />} />
          <Route path="/ajet/unaccompanied-minor" element={<UnaccompaniedMinor />} />
          <Route path="/azal/unaccompanied-minor" element={<UnaccompaniedMinor />} />
          <Route path="/thy-sinif-yukseltme" element={<ClassUpgrade />} />
          <Route path="/pegasus-sinif-yukseltme" element={<ClassUpgrade />} />
          <Route path="/sunexpress-sinif-yukseltme" element={<ClassUpgrade />} />
          <Route path="/ajet-sinif-yukseltme" element={<ClassUpgrade />} />
          <Route path="/azal-sinif-yukseltme" element={<ClassUpgrade />} />
          <Route path="/thy/class-upgrade" element={<ClassUpgrade />} />
          <Route path="/pegasus/class-upgrade" element={<ClassUpgrade />} />
          <Route path="/sunexpress/class-upgrade" element={<ClassUpgrade />} />
          <Route path="/ajet/class-upgrade" element={<ClassUpgrade />} />
          <Route path="/azal/class-upgrade" element={<ClassUpgrade />} />
          <Route path="/thy-check-in" element={<CheckIn />} />
          <Route path="/pegasus-check-in" element={<CheckIn />} />
          <Route path="/sunexpress-check-in" element={<CheckIn />} />
          <Route path="/ajet-check-in" element={<CheckIn />} />
          <Route path="/azal-check-in" element={<CheckIn />} />
          <Route path="/thy/check-in" element={<CheckIn />} />
          <Route path="/pegasus/check-in" element={<CheckIn />} />
          <Route path="/sunexpress/check-in" element={<CheckIn />} />
          <Route path="/ajet/check-in" element={<CheckIn />} />
          <Route path="/azal/check-in" element={<CheckIn />} />
          <Route path="/kisisel-verilerin-korunmasi" element={<PrivacyPolicy />} />
          <Route path="/mesafeli-satis-sozlesmesi" element={<PrivacyPolicy />} />
          <Route path="/hakkimizda" element={<PrivacyPolicy />} />
          <Route path="/kullanim-kosullari" element={<TermsOfService />} />
          <Route path="/iptal-iade-sartlari" element={<PrivacyPolicy />} />
          <Route path="/gizlilik-ve-guvenlik" element={<PrivacyPolicy />} />
          <Route path="/iletisim" element={<AirlineContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
