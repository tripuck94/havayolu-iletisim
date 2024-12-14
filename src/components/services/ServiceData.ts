import { ShoppingCart, RefreshCw, PawPrint, Users, Luggage, ArrowRightLeft, ArrowUp, CheckCircle } from "lucide-react";

export const mainServices = [
  {
    title: "Bilet Satın Alma",
    description: "Online bilet satın alma işlemlerinizi hızlı ve güvenli bir şekilde gerçekleştirin.",
    icon: ShoppingCart,
    link: "/services/ticket-purchase",
    bgImage: "url('https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3')"
  },
  {
    title: "Bilet Değişikliği",
    description: "Mevcut biletinizde tarih ve güzergah değişikliği yapabilirsiniz.",
    icon: RefreshCw,
    link: "/services/ticket-change",
    bgImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3')"
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
    bgImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3')"
  },
  {
    title: "Refakatsiz Çocuk",
    description: "Yalnız seyahat eden çocuklar için özel refakat hizmeti.",
    icon: Users,
    link: "/services/unaccompanied-minor",
    bgImage: "url('https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?ixlib=rb-4.0.3')"
  },
  {
    title: "İlave Sınıf Yükseltme",
    description: "Seyahat konforunuzu artırmak için sınıf yükseltme seçenekleri.",
    icon: ArrowUp,
    link: "/services/class-upgrade",
    bgImage: "url('https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-4.0.3')"
  },
  {
    title: "Check-in",
    description: "Online check-in yaparak havalimanında zaman kazanın.",
    icon: CheckCircle,
    link: "/services/check-in",
    bgImage: "url('https://images.unsplash.com/photo-1537538086243-1c61db1b0e4d?ixlib=rb-4.0.3')"
  }
];