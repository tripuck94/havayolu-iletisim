import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Shield, Clock, HeartHandshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";
import { useLocation, Navigate } from "react-router-dom";
import { getAirlineData } from "@/data/airlineData";
import { useEffect } from "react";

const AirlineTicketPurchase = () => {
  const location = useLocation();
  
  // Extract airline ID from path like /thy-bilet-satin-alma -> thy
  const airlineId = location.pathname.replace('/', '').replace('-bilet-satin-alma', '');
  const airlineData = getAirlineData(airlineId);

  const handleCall = () => {
    window.location.href = "tel:08502428117";
  };

  // If airline not found, redirect to home
  if (!airlineData) {
    return <Navigate to="/" replace />;
  }

  // Preload critical LCP image
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto,w_1920,h_400,c_fill/v1749081995/images/call-center/content/unsplash-1436491865332-7a61a109cc05.jpg';
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const getSpecialProgram = (id: string) => {
    switch (id) {
      case 'thy': return 'Miles&Smiles';
      case 'pegasus': return 'BolBol';
      case 'sunexpress': return 'SunExpress Plus';
      case 'ajet': return 'AJet Avantaj';
      case 'azal': return 'AZAL Miles';
      default: return 'Sadakat Programı';
    }
  };

  const getSpecialFeature = (id: string) => {
    switch (id) {
      case 'thy': return 'Dünya çapında 340+ destinasyon';
      case 'pegasus': return 'Ekonomik fiyatlar ve BolBol avantajları';
      case 'sunexpress': return 'Avrupa\'ya direkt uçuşlar';
      case 'ajet': return 'Yeni nesil uçak filosu';
      case 'azal': return 'Azerbaycan\'a özel uçuşlar';
      default: return 'Özel avantajlar';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <img 
            src={airlineData.logo}
            alt={`${airlineData.name} Logo`} 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <ShoppingCart className={`h-10 w-10 text-${airlineData.primaryColor}`} />
            {airlineData.name.replace(' İletişim', '')} Bilet Satın Alma
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {airlineData.name.replace(' İletişim', '')}'in geniş uçuş ağı ve avantajlı fiyatlarıyla seyahatinizi planlayın. 
            Size en uygun bilet seçeneklerini sunmak için uzman ekibimiz 7/24 hizmetinizdedir.
          </p>
        </div>

        {/* Main Image Section - LCP Critical */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto,w_1920,h_400,c_fill/v1749081995/images/call-center/content/unsplash-1436491865332-7a61a109cc05.jpg"
            alt={`${airlineData.name} Bilet Satın Alma`}
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{airlineData.name.replace(' İletişim', '')} Biletleme Hizmeti</h2>
              <p className="text-lg">En uygun fiyatlarla güvenli bilet satın alma</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className={`h-6 w-6 text-${airlineData.primaryColor}`} />
                {getSpecialProgram(airlineData.id)} Avantajları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {airlineData.name.replace(' İletişim', '')} ile bilet alımlarınızda özel avantajlardan yararlanın ve 
                konforlu bir seyahat deneyimi yaşayın.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className={`h-6 w-6 text-${airlineData.primaryColor}`} />
                7/24 Destek
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Bilet satın alma sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır. 
                Çağrı merkezimiz 7/24 hizmetinizdedir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className={`h-6 w-6 text-${airlineData.primaryColor}`} />
                Özel Kampanyalar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {airlineData.name.replace(' İletişim', '')}'in özel kampanyaları ve indirimli biletleri hakkında bilgi alın. 
                Size en uygun fırsatları sunuyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">{airlineData.name.replace(' İletişim', '')} Bilet Satın Alma Avantajları</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1521727857535-28d2047cf0f9"
              alt={`${airlineData.name} Uçuş Deneyimi`}
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{airlineData.name.replace(' İletişim', '')} ile Seyahat</h3>
              <p>
                {airlineData.name.replace(' İletişim', '')}, Türkiye'nin önde gelen havayolu şirketlerinden biridir. 
                Modern filosu ve kaliteli hizmet anlayışıyla yolcularına konforlu 
                bir seyahat deneyimi sunar.
              </p>
              <p>
                {getSpecialFeature(airlineData.id)} ile bilet alabilir, 
                seyahatinizi daha ekonomik hale getirebilirsiniz.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">{airlineData.name.replace(' İletişim', '')} Bilet Satın Alma Seçenekleri</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineData.primaryColor} mt-1`} />
                <span>Yurt içi ve yurt dışı uçuşlar</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineData.primaryColor} mt-1`} />
                <span>Esnek tarih değişikliği imkanı</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineData.primaryColor} mt-1`} />
                <span>Online check-in ve koltuk seçimi</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className={`h-6 w-6 text-${airlineData.primaryColor} mt-1`} />
                <span>{getSpecialProgram(airlineData.id)} puan kazanma fırsatı</span>
              </li>
            </ul>
          </div>

          <div className={`text-center bg-${airlineData.primaryColor} text-white p-8 rounded-lg`}>
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              {airlineData.name.replace(' İletişim', '')} bilet satın alma işleminiz ile ilgili tüm sorularınız için çağrı merkezimizi 
              7/24 arayabilirsiniz. Uzman ekibimiz size en uygun çözümü sunmak için hazır bekliyor.
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

        {/* Fixed Bottom Button */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
          <Button onClick={handleCall} className={`w-full bg-${airlineData.primaryColor} hover:bg-${airlineData.hoverColor} text-white text-xl py-6`}>
            Hemen Ara
          </Button>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default AirlineTicketPurchase; 
