import { Banner } from "@/components/Banner";
import { Services } from "@/components/Services";
import { Airlines } from "@/components/Airlines";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Header } from "@/components/Header";

const Index = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <Banner />
      <Services />
      <Airlines />
      <Contact />
      
      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <Button onClick={handleCall} className="w-full bg-primary hover:bg-primary/90 text-white text-lg">
          <Phone className="h-5 w-5 mr-2" />
          Hemen Ara
        </Button>
      </div>
    </div>
  );
};

export default Index;