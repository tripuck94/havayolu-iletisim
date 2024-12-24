import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PetServices from "./pages/PetServices";
import ThyContactPage from "./pages/contact/ThyContactPage";
import PegasusContactPage from "./pages/contact/PegasusContactPage";
import SunexpressContactPage from "./pages/contact/SunexpressContactPage";
import AjetContactPage from "./pages/contact/AjetContactPage";
import TicketPurchase from "./pages/services/TicketPurchase";
import TicketChange from "./pages/services/TicketChange";
import SeatSelection from "./pages/services/SeatSelection";
import BaggageService from "./pages/services/BaggageService";
import UnaccompaniedMinor from "./pages/services/UnaccompaniedMinor";
import ClassUpgrade from "./pages/services/ClassUpgrade";
import CheckIn from "./pages/services/CheckIn";
import ThyTicketPurchase from "./pages/thy/TicketPurchase";
import PegasusTicketPurchase from "./pages/pegasus/TicketPurchase";
import SunExpressTicketPurchase from "./pages/sunexpress/TicketPurchase";
import AjetTicketPurchase from "./pages/ajet/TicketPurchase";
import ThyTicketChange from "./pages/thy/TicketChange";
import PegasusTicketChange from "./pages/pegasus/TicketChange";
import SunExpressTicketChange from "./pages/sunexpress/TicketChange";
import AjetTicketChange from "./pages/ajet/TicketChange";
import ThySeatSelection from "./pages/thy/SeatSelection";
import PegasusSeatSelection from "./pages/pegasus/SeatSelection";
import SunExpressSeatSelection from "./pages/sunexpress/SeatSelection";
import AjetSeatSelection from "./pages/ajet/SeatSelection";

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
          <Route path="/thy/contact" element={<ThyContactPage />} />
          <Route path="/pegasus/contact" element={<PegasusContactPage />} />
          <Route path="/sunexpress/contact" element={<SunexpressContactPage />} />
          <Route path="/ajet/contact" element={<AjetContactPage />} />
          <Route path="/services/ticket-purchase" element={<TicketPurchase />} />
          <Route path="/services/ticket-change" element={<TicketChange />} />
          <Route path="/services/seat-selection" element={<SeatSelection />} />
          <Route path="/services/baggage" element={<BaggageService />} />
          <Route path="/services/unaccompanied-minor" element={<UnaccompaniedMinor />} />
          <Route path="/services/class-upgrade" element={<ClassUpgrade />} />
          <Route path="/services/check-in" element={<CheckIn />} />
          <Route path="/thy/ticket-purchase" element={<ThyTicketPurchase />} />
          <Route path="/pegasus/ticket-purchase" element={<PegasusTicketPurchase />} />
          <Route path="/sunexpress/ticket-purchase" element={<SunExpressTicketPurchase />} />
          <Route path="/ajet/ticket-purchase" element={<AjetTicketPurchase />} />
          <Route path="/thy/ticket-change" element={<ThyTicketChange />} />
          <Route path="/pegasus/ticket-change" element={<PegasusTicketChange />} />
          <Route path="/sunexpress/ticket-change" element={<SunExpressTicketChange />} />
          <Route path="/ajet/ticket-change" element={<AjetTicketChange />} />
          <Route path="/thy/seat-selection" element={<ThySeatSelection />} />
          <Route path="/pegasus/seat-selection" element={<PegasusSeatSelection />} />
          <Route path="/sunexpress/seat-selection" element={<SunExpressSeatSelection />} />
          <Route path="/ajet/seat-selection" element={<AjetSeatSelection />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;