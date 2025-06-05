import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const airlines = [
  {
    name: "Türk Hava Yolları",
    description: "İletişim ve müşteri hizmetleri için bizimle iletişime geçin.",
    requirements: [
      "7/24 müşteri hizmetleri desteği",
      "Online destek kanalları",
      "Sosyal medya üzerinden iletişim",
    ],
  },
  {
    name: "Pegasus",
    description: "Müşteri hizmetleri ve destek için iletişime geçin.",
    requirements: [
      "Çağrı merkezi desteği",
      "WhatsApp üzerinden iletişim",
      "E-posta desteği",
    ],
  },
  {
    name: "SunExpress",
    description: "Her türlü soru ve talebiniz için iletişime geçebilirsiniz.",
    requirements: [
      "Telefon ile destek",
      "Online chat desteği",
      "E-posta ile iletişim",
    ],
  },
  {
    name: "AJet",
    description: "Müşteri hizmetleri ve destek için bize ulaşın.",
    requirements: [
      "Çağrı merkezi hizmeti",
      "Online destek",
      "Sosyal medya desteği",
    ],
  },
];

const ContactServices = () => {
  const handleCall = () => {
    window.location.href = "tel:+905555555555";
  };

  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
          <Phone className="h-10 w-10 text-primary" />
          İletişim Hizmetleri
        </h1>
        <p className="text-lg text-gray-600">
          Tüm havayolları için iletişim ve destek hizmetlerimiz.
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
                <Phone className="h-4 w-4" />
                İletişime Geç
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactServices;
