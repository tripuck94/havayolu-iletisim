import { Plane, RefreshCw, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Bilet Satış",
    description: "Tüm havayolları için en uygun fiyatlı biletler",
    icon: Plane,
  },
  {
    title: "Bilet Değişikliği",
    description: "Mevcut biletlerinizde tarih ve güzergah değişikliği",
    icon: RefreshCw,
  },
  {
    title: "Bilet İptali",
    description: "İptal ve iade işlemleriniz için destek",
    icon: XCircle,
  },
];

export const Services = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-12">Hizmetlerimiz</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <service.icon className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};