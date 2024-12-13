import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const handleCall = () => {
    window.location.href = "tel:+905555555555"; // Telefon numaranızı buraya ekleyin
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">İletişime Geçin</h2>
          <p className="text-lg text-white/90">
            7/24 hizmetinizdeyiz. Bize ulaşın, size yardımcı olalım.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Phone className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <p className="mb-4">0850 242 81 17</p>
            <Button
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={handleCall}
            >
              Hemen Ara
            </Button>
          </div>

          <div className="flex flex-col items-center text-center">
            <Mail className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">E-posta</h3>
            <p>info@firmaniz.com</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <MapPin className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Adres</h3>
            <p>İstanbul, Türkiye</p>
          </div>
        </div>
      </div>
    </section>
  );
};