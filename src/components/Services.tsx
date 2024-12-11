import { Plane, RefreshCw, XCircle, PawPrint, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    title: "THY İletişim",
    description: "Türk Hava Yolları iletişim ve destek",
    icon: Phone,
    link: "/contact/thy",
  },
  {
    title: "Pegasus İletişim",
    description: "Pegasus iletişim ve destek",
    icon: Phone,
    link: "/contact/pegasus",
  },
  {
    title: "SunExpress İletişim",
    description: "SunExpress iletişim ve destek",
    icon: Phone,
    link: "/contact/sunexpress",
  },
  {
    title: "AJet İletişim",
    description: "AJet iletişim ve destek",
    icon: Phone,
    link: "/contact/ajet",
  },
  {
    title: "Bilet Satış",
    description: "Tüm havayolları için en uygun fiyatlı biletler",
    icon: Plane,
    link: "/",
  },
  {
    title: "Bilet Değişikliği",
    description: "Mevcut biletlerinizde tarih ve güzergah değişikliği",
    icon: RefreshCw,
    link: "/",
  },
  {
    title: "Bilet İptali",
    description: "İptal ve iade işlemleriniz için destek",
    icon: XCircle,
    link: "/",
  },
  {
    title: "Evcil Hayvan",
    description: "Evcil hayvan taşıma işlemleri ve rezervasyon",
    icon: PawPrint,
    link: "/pet-services",
  },
];

export const Services = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-12">Hizmetlerimiz</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link to={service.link} key={service.title}>
              <Card className="transition-transform hover:-translate-y-1 h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};