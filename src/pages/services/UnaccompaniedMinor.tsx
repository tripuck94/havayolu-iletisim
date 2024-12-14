import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Phone, Plane, Shield, Clock, HeartHandshake, BadgeCheck, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const UnaccompaniedMinor = () => {
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
            <Baby className="h-10 w-10 text-primary" />
            Refakatsiz Çocuk Hizmeti
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Çocuğunuzun güvenli ve konforlu seyahati için özel refakat hizmetimiz ile
            yanınızdayız. Deneyimli ekibimiz, çocuğunuzun tüm seyahati boyunca
            güvende olmasını sağlar.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
            alt="Refakatsiz Çocuk Hizmeti"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Profesyonel Refakat Hizmeti</h2>
              <p className="text-lg">Çocuğunuzun güvenliği bizim önceliğimiz</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Güvenlik Standartları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Uluslararası standartlara uygun refakat hizmeti sunuyoruz. 
                Çocuğunuzun güvenliği için tüm önlemler titizlikle alınmaktadır.
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
                Özel İlgi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Her çocuğun özel ihtiyaçlarını dikkate alıyor, seyahat süresince 
                gerekli tüm ilgi ve bakımı sağlıyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Kapsamlı Refakat Hizmetlerimiz</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1501286353178-1ec881214838"
              alt="Refakat Hizmeti"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Profesyonel Refakat Standartları</h3>
              <p>
                Çocuğunuzun güvenli ve konforlu seyahati için özel eğitimli personelimiz
                eşlik eder. Her refakatçimiz, çocuk psikolojisi ve ilk yardım konularında
                eğitimlidir.
              </p>
              <p>
                Seyahat sürecinde kullanılan tüm ekipmanlar ve hizmetler düzenli olarak
                denetlenmekte ve her seyahat öncesi detaylı kontrolden geçirilmektedir.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Sağlık ve Güvenlik Önlemleri</h3>
              <p>
                Seyahat öncesi gerekli tüm sağlık ve güvenlik önlemleri alınır.
                Çocuğunuzun özel ihtiyaçları ve alerjileri konusunda detaylı bilgi
                alınarak gerekli önlemler planlanır.
              </p>
              <p>
                Özel ihtiyaçları olan çocuklar için ek hizmetler sunuyor, 
                düzenli beslenme ve ilaç takibi yapıyoruz.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
              alt="Çocuk Güvenliği"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Neden Bizi Tercih Etmelisiniz?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Deneyimli ve özel eğitimli refakatçi ekibi</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>7/24 aile iletişim desteği</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Güvenli ve konforlu seyahat garantisi</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Özel ilgi ve bakım hizmeti</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              Refakatsiz çocuk hizmeti ile ilgili tüm sorularınız için çağrı merkezimizi 
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

export default UnaccompaniedMinor;