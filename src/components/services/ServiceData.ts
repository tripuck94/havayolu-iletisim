import { ShoppingCart, RefreshCw, PawPrint, Users, Luggage, ArrowRightLeft, ArrowUp, CheckCircle } from "lucide-react";

export const mainServices = [
  {
    title: "Bilet Satın Alma",
    description: "Online bilet satın alma işlemlerinizi hızlı ve güvenli bir şekilde gerçekleştirin.",
    icon: ShoppingCart,
    link: "/services/ticket-purchase",
    bgImage: "url('/lovable-uploads/fcf6d3d4-46ef-4c5e-8a48-a2e4159997a5.png')"
  },
  {
    title: "Bilet Değişikliği",
    description: "Mevcut biletinizde tarih ve güzergah değişikliği yapabilirsiniz.",
    icon: RefreshCw,
    link: "/services/ticket-change",
    bgImage: "url('/lovable-uploads/1f65f478-a215-44da-9727-ceb49f5e3b74.png')"
  },
  {
    title: "Koltuk Seçimi",
    description: "Uçuşunuz için istediğiniz koltuğu önceden seçin.",
    icon: ArrowRightLeft,
    link: "/services/seat-selection",
    bgImage: "url('/lovable-uploads/5bc51257-584d-4039-b174-07ba6c2b1766.png')"
  },
  {
    title: "Bagaj Ekleme",
    description: "Ek bagaj hakkı satın alma ve bagaj işlemlerinizi yönetin.",
    icon: Luggage,
    link: "/services/baggage",
    bgImage: "url('/lovable-uploads/7398e5b3-2469-4357-9789-94408bad853b.png')"
  },
  {
    title: "Evcil Hayvan",
    description: "Evcil hayvanınızla seyahat için özel hizmetler ve rezervasyon.",
    icon: PawPrint,
    link: "/pet-services",
    bgImage: "url('/lovable-uploads/c48f57d6-d6eb-4189-8a1a-03d89a22cef0.png')"
  },
  {
    title: "Refakatsiz Çocuk",
    description: "Yalnız seyahat eden çocuklar için özel refakat hizmeti.",
    icon: Users,
    link: "/services/unaccompanied-minor",
    bgImage: "url('/lovable-uploads/354f0595-1ec0-45e4-8552-3172df97bb8a.png')"
  },
  {
    title: "İlave Sınıf Yükseltme",
    description: "Seyahat konforunuzu artırmak için sınıf yükseltme seçenekleri.",
    icon: ArrowUp,
    link: "/services/class-upgrade",
    bgImage: "url('/lovable-uploads/0fe02586-04af-4d3d-842e-56c37907739b.png')",
    bgSize: "contain",
    bgPosition: "center"
  },
  {
    title: "Check-in",
    description: "Online check-in yaparak havalimanında zaman kazanın.",
    icon: CheckCircle,
    link: "/services/check-in",
    bgImage: "url('/lovable-uploads/27efca33-969c-481d-b23b-39da51b5d24d.png')"
  }
];