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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;