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
          <Route path="/contact/thy" element={<ThyContactPage />} />
          <Route path="/contact/pegasus" element={<PegasusContactPage />} />
          <Route path="/contact/sunexpress" element={<SunexpressContactPage />} />
          <Route path="/contact/ajet" element={<AjetContactPage />} />
          <Route path="/services/ticket-purchase" element={<TicketPurchase />} />
          <Route path="/services/ticket-change" element={<TicketChange />} />
          <Route path="/services/seat-selection" element={<SeatSelection />} />
          <Route path="/services/baggage" element={<BaggageService />} />
          <Route path="/services/unaccompanied-minor" element={<UnaccompaniedMinor />} />
          <Route path="/services/class-upgrade" element={<ClassUpgrade />} />
          <Route path="/services/check-in" element={<CheckIn />} />
          <Route path="/thy/ticket-purchase" element={<ThyTicketPurchase />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;