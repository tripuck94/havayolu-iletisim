import { ShoppingCart, RefreshCw, PawPrint, Users, Luggage, ArrowRightLeft, ArrowUp, CheckCircle } from "lucide-react";

export const mainServices = [
  {
    title: "Bilet Satın Alma",
    description: "Online bilet satın alma işlemlerinizi hızlı ve güvenli bir şekilde gerçekleştirin.",
    icon: ShoppingCart,
    link: "/hizmetler/bilet-satin-alma",
    bgImage: "url('https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_400,h_300,c_fill/fcf6d3d4-46ef-4c5e-8a48-a2e4159997a5.webp')"
  },
  {
    title: "Bilet Değişikliği",
    description: "Mevcut biletinizde tarih ve güzergah değişikliği yapabilirsiniz.",
    icon: RefreshCw,
    link: "/hizmetler/bilet-degisikligi",
    bgImage: "url('https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_400,h_300,c_fill/1f65f478-a215-44da-9727-ceb49f5e3b74.webp')"
  },
  {
    title: "Koltuk Seçimi",
    description: "Uçuşunuz için istediğiniz koltuğu önceden seçin.",
    icon: ArrowRightLeft,
    link: "/hizmetler/koltuk-secimi",
    bgImage: "url('https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_400,h_300,c_fill/5bc51257-584d-4039-b174-07ba6c2b1766.webp')"
  },
  {
    title: "Bagaj Ekleme",
    description: "Ek bagaj hakkı satın alma ve bagaj işlemlerinizi yönetin.",
    icon: Luggage,
    link: "/hizmetler/bagaj-ekleme",
    bgImage: "url('https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_400,h_300,c_fill/7398e5b3-2469-4357-9789-94408bad853b.webp')"
  },
  {
    title: "Evcil Hayvan",
    description: "Evcil hayvanınızla seyahat için özel hizmetler ve rezervasyon.",
    icon: PawPrint,
    link: "/hizmetler/evcil-hayvan",
    bgImage: "url('https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_400,h_300,c_fill/c48f57d6-d6eb-4189-8a1a-03d89a22cef0.webp')"
  },
  {
    title: "Refakatsiz Çocuk",
    description: "Yalnız seyahat eden çocuklar için özel refakat hizmeti.",
    icon: Users,
    link: "/hizmetler/refakatsiz-cocuk",
    bgImage: "url('https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_400,h_300,c_fill/354f0595-1ec0-45e4-8552-3172df97bb8a.webp')"
  },
  {
    title: "İlave Sınıf Yükseltme",
    description: "Seyahat konforunuzu artırmak için sınıf yükseltme seçenekleri.",
    icon: ArrowUp,
    link: "/hizmetler/sinif-yukseltme",
    bgImage: "url('https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_400,h_300,c_fill/f510d99a-f3fd-490e-9038-ad0aeefb14b0.webp')",
    bgSize: "cover",
    bgPosition: "center"
  },
  {
    title: "Check-in",
    description: "Online check-in yaparak havalimanında zaman kazanın.",
    icon: CheckCircle,
    link: "/hizmetler/check-in",
    bgImage: "url('https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,q_auto,w_400,h_300,c_fill/27efca33-969c-481d-b23b-39da51b5d24d.webp')"
  }
];
