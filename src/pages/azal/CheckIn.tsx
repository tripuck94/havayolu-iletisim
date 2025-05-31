import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const AzalCheckIn = () => {
  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12">
        <div className="text-center mb-12">
          <img 
            src="https://www.azal.az/media/2021/01/azal-logo.png"
            alt="AZAL Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <CheckCircle className="h-10 w-10 text-azal" />
            AZAL Check-in
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AZAL ile hızlı ve kolay check-in işlemleri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Online Check-in</h3>
              <p className="text-gray-600">
                Sıra beklemeden online check-in yapın.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Havalimanı Check-in</h3>
              <p className="text-gray-600">
                Havalimanında check-in kontuarlarımızdan işlem yapın.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Mobil Check-in</h3>
              <p className="text-gray-600">
                Mobil uygulamamız üzerinden kolay check-in.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className="w-full bg-azal hover:bg-azal/90 text-white text-xl py-6">
            <Phone className="h-5 w-5 mr-2" />
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default AzalCheckIn;
