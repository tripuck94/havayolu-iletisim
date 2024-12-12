import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

const airlines = [
  {
    name: "Türk Hava Yolları",
    description: "Evcil hayvan taşıma prosedürleri ve kuralları için bizimle iletişime geçin.",
    requirements: [
      "Kabin içi taşıma için maksimum 8 kg",
      "Kargo bölümünde taşıma için veteriner raporu",
      "Önceden rezervasyon yapılması zorunludur",
    ],
  },
  {
    name: "Pegasus",
    description: "Evcil hayvanınızla seyahat için gerekli bilgiler ve destek.",
    requirements: [
      "Kabin içi taşıma için maksimum 7 kg",
      "Taşıma kafesi zorunludur",
      "24 saat önceden bildirim gereklidir",
    ],
  },
  {
    name: "SunExpress",
    description: "Evcil hayvan taşıma hizmetleri ve kuralları hakkında bilgi alın.",
    requirements: [
      "Kabin içi ve kargo taşıma seçenekleri",
      "Uluslararası uçuşlarda ek belgeler gereklidir",
      "Özel taşıma kafesi şartları",
    ],
  },
  {
    name: "AJet",
    description: "Evcil hayvanınızla güvenli seyahat için bizimle iletişime geçin.",
    requirements: [
      "Sadece kargo bölümünde taşıma",
      "Sağlık belgesi zorunludur",
      "Rezervasyon sırasında bildirim gereklidir",
    ],
  },
];

const PetServices = () => {
  const handleCall = () => {
    window.location.href = "tel:+905555555555";
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <PawPrint className="h-10 w-10 text-primary" />
            Evcil Hayvan Taşıma Hizmetleri
          </h1>
          <p className="text-lg text-gray-600">
            Türkiye'deki tüm havayolları için evcil hayvan taşıma işlemlerinizi güvenle gerçekleştiriyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {airlines.map((airline) => (
            <Card key={airline.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-6 w-6 text-primary" />
                  {airline.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">{airline.description}</p>
                <ul className="list-disc list-inside mb-6 space-y-2 text-sm text-gray-600">
                  {airline.requirements.map((req) => (
                    <li key={req}>{req}</li>
                  ))}
                </ul>
                <Button onClick={handleCall} className="w-full gap-2">
                  <PawPrint className="h-4 w-4" />
                  Rezervasyon Yap
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetServices;
