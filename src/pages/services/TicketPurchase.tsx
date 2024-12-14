import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Phone, Shield, Clock, HeartHandshake, BadgeCheck, CreditCard, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CallButton } from "@/components/CallButton";

const TicketPurchase = () => {
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
            <Ticket className="h-10 w-10 text-primary" />
            Bilet Satın Alma
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seyahat planlarınızı kolaylaştırmak için en uygun uçuş biletlerini bulmanıza 
            yardımcı oluyoruz. Uzman ekibimiz, size en uygun fiyatlı ve konforlu uçuş 
            seçeneklerini sunmak için 7/24 hizmetinizdedir.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Bilet Satın Alma"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Profesyonel Biletleme Hizmeti</h2>
              <p className="text-lg">En uygun fiyatlarla güvenli bilet satın alma</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Güvenli Ödeme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                3D Secure ve SSL şifreleme teknolojileri ile güvenli ödeme imkanı sunuyoruz. 
                Kredi kartı bilgileriniz güvende.
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
                Bilet satın alma sürecinin her aşamasında uzman ekibimiz size destek olmak için hazır. 
                Çağrı merkezimiz 7/24 hizmetinizdedir.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="h-6 w-6 text-primary" />
                En İyi Fiyat Garantisi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                En uygun fiyatlı biletleri bulmanıza yardımcı oluyoruz. Fiyat garantisi ile 
                her zaman en iyi teklifleri sunuyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Kapsamlı Bilet Satın Alma Hizmetlerimiz</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Online Bilet Satın Alma"
              className="rounded-lg h-[300px] w-full object-cover"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Online Bilet Satın Alma Avantajları</h3>
              <p>
                Online bilet satın alma ile seyahat planlarınızı kolayca yapabilir, 
                farklı havayollarının fiyatlarını karşılaştırabilir ve size en uygun 
                bileti seçebilirsiniz.
              </p>
              <p>
                Tüm ödeme işlemleriniz güvenli bir şekilde gerçekleştirilir ve biletiniz 
                anında e-posta adresinize gönderilir.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Ödeme Seçenekleri ve Güvenlik</h3>
              <p>
                Kredi kartı, banka kartı ve diğer ödeme yöntemleri ile güvenli bir şekilde 
                ödemenizi yapabilirsiniz. Tüm işlemleriniz SSL sertifikası ile korunmaktadır.
              </p>
              <p>
                Taksit imkanları ve kampanyalar ile bütçenize uygun ödeme seçenekleri sunuyoruz.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Güvenli Ödeme"
              className="rounded-lg h-[300px] w-full object-cover"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Neden Bizi Tercih Etmelisiniz?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>En uygun fiyat garantisi</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>7/24 müşteri desteği</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Güvenli ödeme sistemi</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-6 w-6 text-primary mt-1" />
                <span>Anında bilet teslimatı</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Size Nasıl Yardımcı Olabiliriz?</h3>
            <p className="mb-6">
              Bilet satın alma işleminiz ile ilgili tüm sorularınız için çağrı merkezimizi 
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

export default TicketPurchase;