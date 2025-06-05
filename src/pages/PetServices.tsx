import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Phone, Plane, Shield, Clock, HeartHandshake, Scale, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const PetServices = () => {
  const handleCall = () => {
    window.location.href = "tel:+905555555555";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Header />
      <div className="container py-12 md:py-16 space-y-16 mb-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <PawPrint className="h-10 w-10 text-primary" />
            Evcil Hayvan Taşıma Hizmetleri
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sevgili dostlarınızın güvenli ve konforlu seyahati için özel çözümler sunuyoruz. 
            Deneyimli ekibimiz, evcil hayvanınızın ihtiyaçlarına uygun en iyi hizmeti almanız için 
            7/24 yanınızda.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/v1749081995/images/call-center/content/unsplash-1450778869180-41d0601e046e.jpg"
            alt="Evcil Hayvan Taşıma"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Profesyonel Taşıma Hizmeti</h2>
              <p className="text-lg">Evcil hayvanınızın konforu bizim önceliğimiz</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Güvenlik Standartları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Uluslararası standartlara uygun taşıma kafesleri ve ekipmanlar kullanıyoruz. 
                Evcil hayvanınızın güvenliği için tüm önlemler titizlikle alınmaktadır.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                7/24 Destek
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Seyahat sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır. 
                Çağrı merkezimiz 7/24 hizmetinizdedir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-primary" />
                Özel Bakım
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Her evcil hayvanın özel ihtiyaçlarını dikkate alıyor, seyahat süresince 
                gerekli tüm bakım hizmetlerini sağlıyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none space-y-12">
          <h2 className="text-3xl font-bold mb-6">Kapsamlı Evcil Hayvan Taşıma Hizmetlerimiz</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/v1749081995/images/call-center/content/unsplash-1596394516093-501ba68a0ba6.jpg"
              alt="Evcil Hayvan Bakımı"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Profesyonel Taşıma Standartları</h3>
              <p>
                Evcil hayvanınızın güvenli ve konforlu seyahati için uluslararası standartlara 
                uygun özel taşıma kafesleri kullanıyoruz. Her kafes, hayvanınızın türüne ve 
                boyutuna göre özel olarak seçilmektedir.
              </p>
              <p>
                Taşıma sürecinde kullanılan tüm ekipmanlar düzenli olarak dezenfekte edilmekte 
                ve her seyahat öncesi detaylı kontrolden geçirilmektedir.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Sağlık ve Güvenlik Önlemleri</h3>
              <p>
                Seyahat öncesi veteriner kontrolü ve gerekli sağlık belgelerinin temini 
                konusunda rehberlik sağlıyoruz. Evcil hayvanınızın sağlığı bizim için 
                en önemli öncelik.
              </p>
              <p>
                Özel ihtiyaçları olan evcil hayvanlar için ek hizmetler sunuyor, 
                düzenli beslenme ve ilaç takibi yapıyoruz.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/gidasta/image/upload/f_auto,fl_lossy,q_auto,w_auto,dpr_auto/v1749081995/images/call-center/content/unsplash-1566454544259-f4b94c3d758c.jpg"
              alt="Evcil Hayvan Sağlığı"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Neden Bizi Tercih Etmelisiniz?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Deneyimli ve uzman ekip</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>7/24 müşteri desteği</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Güvenli ve konforlu taşıma hizmeti</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Özel bakım ve beslenme takibi</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              Evcil hayvanınızın taşınması ile ilgili tüm sorularınız için çağrı merkezimizi 
              7/24 arayabilirsiniz. Uzman ekibimiz size en uygun çözümü sunmak için hazır bekliyor.
            </p>
            <Button 
              onClick={handleCall} 
              variant="secondary"
              className="gap-2"
            >
              <Phone className="h-4 w-4" />
              Hemen Arayın
            </Button>
          </div>
        </div>
      </div>
      <CallButton />
    </div>
  );
};

export default PetServices;
