import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";
import { BadgeCheck, ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClassUpgrade = () => {
  const handleCall = () => {
    window.location.href = "tel:+905555555555";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <ArrowUpCircle className="h-10 w-10 text-primary" />
            Sınıf Yükseltme Hizmeti
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seyahat deneyiminizi daha konforlu hale getirmek için sınıf yükseltme 
            hizmetimizden yararlanabilirsiniz. Size özel fırsatlar ve avantajlar için 
            çağrı merkezimizi arayabilirsiniz.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/f510d99a-f3fd-490e-9038-ad0aeefb14b0.png"
            alt="Sınıf Yükseltme"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Premium Seyahat Deneyimi</h2>
              <p className="text-lg">Daha fazla konfor için sınıf yükseltme</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-primary/5 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Sınıf Yükseltme Avantajları</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Daha geniş koltuk ve bacak mesafesi</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Özel ikram hizmetleri</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Özel check-in kontuarları</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Lounge erişimi</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
          <p className="mb-6">
            Sınıf yükseltme ile ilgili tüm sorularınız için çağrı merkezimizi 7/24 
            arayabilirsiniz. Uzman ekibimiz size en uygun seçeneği sunmak için hazır bekliyor.
          </p>
          <Button 
            onClick={handleCall} 
            variant="secondary"
            className="gap-2"
          >
            Hemen Arayın
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default ClassUpgrade;
