import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { Link } from "react-router-dom";
import { BadgeCheck, Armchair } from "lucide-react";
import { Button } from "@/components/ui/button";

const SeatSelection = () => {
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
            <Armchair className="h-10 w-10 text-primary" />
            Koltuk Seçimi Hizmeti
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uçuş deneyiminizi kişiselleştirmek ve daha konforlu hale getirmek için koltuk 
            seçimi hizmetimizden yararlanabilirsiniz. Size en uygun koltuğu seçmenize 
            yardımcı olmak için buradayız.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="/lovable-uploads/5bc51257-584d-4039-b174-07ba6c2b1766.png"
            alt="Koltuk Seçimi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Konforlu Seyahat</h2>
              <p className="text-lg">Size özel koltuk seçimi imkanı</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-primary/5 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Koltuk Seçimi Avantajları</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Daha fazla bacak mesafesi için ön sıra koltukları</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Hızlı iniş için koridor koltukları</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Manzara için pencere kenarı koltukları</span>
            </li>
            <li className="flex items-start gap-2">
              <BadgeCheck className="h-6 w-6 text-primary mt-1" />
              <span>Ailece seyahat için yan yana koltuklar</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
          <p className="mb-6">
            Koltuk seçimi ile ilgili tüm sorularınız için çağrı merkezimizi 7/24 
            arayabilirsiniz. Uzman ekibimiz size en uygun koltuğu bulmanızda yardımcı 
            olmak için hazır bekliyor.
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

export default SeatSelection;