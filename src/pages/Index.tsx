import { Banner } from "@/components/Banner";
import { Services } from "@/components/Services";
import { Airlines } from "@/components/Airlines";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/MetaTags";

const Index = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <MetaTags 
        title="Havayolu İletişim - Uçak Bileti Rezervasyonu"
        description="THY, Pegasus, SunExpress ve AJet için bilet satış, değişiklik ve iptal işlemleri"
        path="/"
        keywords="uçak bileti, havayolu, THY, Pegasus, SunExpress, AJet, bilet rezervasyonu, uçuş iptal"
      />
      <Header />
      <Banner />
      <Services />
      <Airlines />
      <Contact />
      <Footer />
      
      {/* Fixed Bottom Button - Sadece Mobilde Görünür */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <Button onClick={handleCall} className="w-full bg-primary hover:bg-primary/90 text-white text-xl py-6 font-bold">
          <Phone className="h-6 w-6 mr-3" />
          Hemen Ara
        </Button>
      </div>
    </div>
  );
};

export default Index;
