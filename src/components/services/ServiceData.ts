import { ShoppingCart, RefreshCw, PawPrint, Users, Luggage, ArrowRightLeft, ArrowUp, CheckCircle } from "lucide-react";

export const mainServices = [
  {
    title: "Bilet Satın Alma",
    description: "Online bilet satın alma işlemlerinizi hızlı ve güvenli bir şekilde gerçekleştirin.",
    icon: ShoppingCart,
    link: "/services/ticket-purchase",
    bgImage: "url('/lovable-uploads/6a40b069-eb8d-4674-b153-0a6b2ea219a4.png')"
  },
  {
    title: "Bilet Değişikliği",
    description: "Mevcut biletinizde tarih ve güzergah değişikliği yapabilirsiniz.",
    icon: RefreshCw,
    link: "/services/ticket-change",
    bgImage: "url('/lovable-uploads/b370a96a-7693-471e-be22-6b3cc2a2d4a6.png')"
  },
  {
    title: "Koltuk Seçimi",
    description: "Uçuşunuz için istediğiniz koltuğu önceden seçin.",
    icon: ArrowRightLeft,
    link: "/services/seat-selection",
    bgImage: "url('https://images.unsplash.com/photo-1540339832862-46d6239d0157?ixlib=rb-4.0.3')"
  },
  {
    title: "Bagaj Ekleme",
    description: "Ek bagaj hakkı satın alma ve bagaj işlemlerinizi yönetin.",
    icon: Luggage,
    link: "/services/baggage",
    bgImage: "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3')"
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
    bgImage: "url('https://images.unsplash.com/photo-1537538086243-1c61db1b0e4d?ixlib=rb-4.0.3')"
  }
];