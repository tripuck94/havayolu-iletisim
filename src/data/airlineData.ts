export interface AirlineData {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  primaryColor: string;
  hoverColor: string;
  bgColor: string;
  textColor: string;
  description: string;
  about: string;
  fleet: string[];
  destinations: string[];
  services: string[];
  policies: {
    cancellation: string;
    changes: string;
    baggage: string;
  };
  founded: string;
  headquarters: string;
  officialPhone?: string; // Havayolunun resmi telefon numarası
}

export const airlines: Record<string, AirlineData> = {
  thy: {
    id: "thy",
    name: "Türk Hava Yolları",
    shortName: "THY",
    logo: "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_80,w_80,q_auto/images/airline/small/TK.webp",
    primaryColor: "thy",
    hoverColor: "thy-dark",
    bgColor: "bg-thy",
    textColor: "text-thy",
    description: "Türkiye'nin bayrak taşıyıcısı THY ile dünya geneline uçuş imkanı.",
    about: "1933 yılında kurulan Türk Hava Yolları, Türkiye'nin milli havayolu şirketi olarak dünya genelinde 120'den fazla ülkede 340'tan fazla destinasyona uçuş gerçekleştirmektedir. Star Alliance üyesi olan THY, kaliteli hizmet anlayışı ve geniş uçuş ağı ile dünya havacılık sektöründe önemli bir konuma sahiptir.",
    fleet: ["Boeing 737", "Boeing 777", "Boeing 787 Dreamliner", "Airbus A320", "Airbus A330", "Airbus A350"],
    destinations: ["Avrupa", "Asya", "Afrika", "Amerika", "Orta Doğu", "İç Hat Destinasyonları"],
    services: ["Miles&Smiles", "Business Class", "Comfort Class", "Economy Class", "Cargo Hizmetleri", "THY İstanbul Airport Lounge"],
    policies: {
      cancellation: "Uçuştan 24 saat öncesine kadar iptal edilebilir. İptal ücreti bilet türüne göre değişir.",
      changes: "Değişiklik işlemleri ücret karşılığında yapılabilir. Flex biletlerde ücretsiz değişiklik hakkı bulunur.",
      baggage: "Economy Class: 20kg, Comfort Class: 25kg, Business Class: 30kg bagaj hakkı."
    },
    founded: "1933",
    headquarters: "İstanbul, Türkiye",
    officialPhone: "+90 850 333 0 849"
  },
  sunexpress: {
    id: "sunexpress",
    name: "SunExpress",
    shortName: "SXS",
    logo: "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_80,w_80,q_auto/images/airline/small/XQ.webp",
    primaryColor: "sunexpress",
    hoverColor: "sunexpress-dark",
    bgColor: "bg-sunexpress",
    textColor: "text-sunexpress",
    description: "Güneşin rehberliğinde konforlu yolculuklar.",
    about: "SunExpress, Türk Hava Yolları ve Lufthansa'nın ortak girişimi olarak 1989 yılında kurulmuştur. Antalya merkezli olan şirket, tatil destinasyonlarına charter ve tarifeli uçuşlar düzenlemektedir. Özellikle Avrupa-Türkiye arasındaki turizm trafiğinde önemli bir rol oynamaktadır.",
    fleet: ["Boeing 737-800", "Boeing 737 MAX"],
    destinations: ["Almanya", "İngiltere", "Avusturya", "Hollanda", "İç Hat Şehirleri", "Kıbrıs"],
    services: ["SunExpress Card", "Sunclass", "SunEco", "Ekstra Bagaj", "Koltuk Seçimi", "İkram Paketi"],
    policies: {
      cancellation: "Uçuştan 4 saat öncesine kadar iptal edilebilir. İptal koşulları bilet türüne göre değişir.",
      changes: "Değişiklik işlemleri ücretli olarak yapılabilir. Tarih ve rota değişiklikleri mümkündür.",
      baggage: "SunEco: 15kg, Sunclass: 20kg bagaj hakkı. Ek bagaj satın alınabilir."
    },
    founded: "1989",
    headquarters: "Antalya, Türkiye",
    officialPhone: "+90 850 399 67 67"
  },
  pegasus: {
    id: "pegasus",
    name: "Pegasus Hava Yolları",
    shortName: "Pegasus",
    logo: "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_80,w_80,q_auto/images/airline/small/PC.webp",
    primaryColor: "pegasus",
    hoverColor: "pegasus-dark",
    bgColor: "bg-pegasus",
    textColor: "text-pegasus",
    description: "Uygun fiyatlı biletlerle hayallerinizdeki destinasyonlara uçun.",
    about: "1990 yılında kurulan Pegasus Hava Yolları, Türkiye'nin önde gelen düşük maliyetli havayolu şirketidir. İstanbul Sabiha Gökçen Havalimanı'nı ana üssü olarak kullanan Pegasus, iç hat ve dış hat destinasyonlarına uygun fiyatlı uçuşlar düzenlemektedir.",
    fleet: ["Airbus A320neo", "Airbus A321neo", "Boeing 737-800"],
    destinations: ["Avrupa", "Orta Doğu", "Kuzey Afrika", "Orta Asya", "İç Hat Şehirleri"],
    services: ["Pegasus Plus", "Essentials", "Advantage", "Flypgs Mobil", "Online Check-in", "Extra Bagaj"],
    policies: {
      cancellation: "Uçuştan 4 saat öncesine kadar iptal edilebilir. İptal ücreti fare türüne göre değişir.",
      changes: "Değişiklik işlemleri ücretli olarak gerçekleştirilir. Flex biletlerde daha esnek koşullar geçerlidir.",
      baggage: "Essentials: El bagajı dahil, Advantage: 15kg, Plus: 20kg bagaj hakkı."
    },
    founded: "1990",
    headquarters: "İstanbul, Türkiye",
    officialPhone: "+90 888 228 12 12"
  },
  ajet: {
    id: "ajet",
    name: "AJet",
    shortName: "AJet",
    logo: "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_80,w_80,q_auto/images/airline/small/VF.webp",
    primaryColor: "ajet",
    hoverColor: "ajet-dark",
    bgColor: "bg-ajet",
    textColor: "text-ajet",
    description: "Türkiye'nin genç ve dinamik havayolu şirketi.",
    about: "AJet, Türkiye'nin yeni nesil havayolu şirketi olarak 2021 yılında faaliyete başlamıştır. Modern filosu ve dijital hizmet anlayışı ile genç ve dinamik yolcular için tasarlanmış bir seyahat deneyimi sunmaktadır. Ankara Esenboğa Havalimanı'nı ana üssü olarak kullanan AJet, hem iç hat hem de bölgesel uçuşlar gerçekleştirmektedir.",
    fleet: ["Airbus A320", "Airbus A321"],
    destinations: ["İç Hat Şehirleri", "KKTC", "Azerbaycan", "Gürcistan"],
    services: ["AJet Smart", "AJet Plus", "Online Check-in", "Mobil Uygulama", "Ekstra Hizmetler"],
    policies: {
      cancellation: "Uçuştan 4 saat öncesine kadar iptal edilebilir. İptal koşulları fare türüne göre değişir.",
      changes: "Değişiklik işlemleri ücretli olarak yapılabilir. Smart biletlerde ek ücret uygulanır.",
      baggage: "Smart: El bagajı dahil, Plus: 15kg bagaj hakkı."
    },
    founded: "2021",
    headquarters: "Ankara, Türkiye",
    officialPhone: "+90 850 2222 538"
  },
  azal: {
    id: "azal",
    name: "AZAL",
    shortName: "AZAL",
    logo: "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_80,w_80,q_auto/images/airline/small/J2.webp",
    primaryColor: "azal",
    hoverColor: "azal-dark",
    bgColor: "bg-azal",
    textColor: "text-azal",
    description: "Azerbaycan Hava Yolları ile Kafkasya'ya güvenli yolculuk.",
    about: "AZAL (Azerbaijan Airlines), Azerbaycan'ın milli havayolu şirketi olarak 1992 yılında kurulmuştur. Bakü merkezli olan şirket, Kafkasya bölgesi ve dünya genelindeki destinasyonlara uçuş düzenlemektedir.",
    fleet: ["Boeing 787", "Airbus A320", "Embraer E190"],
    destinations: ["Türkiye", "Rusya", "Avrupa", "Orta Doğu"],
    services: ["Business Class", "Economy Class", "AZAL Miles"],
    policies: {
      cancellation: "Uçuştan 24 saat öncesine kadar iptal edilebilir.",
      changes: "Değişiklik işlemleri ücretli olarak yapılabilir.",
      baggage: "Economy: 20kg, Business: 30kg bagaj hakkı."
    },
    founded: "1992",
    headquarters: "Bakü, Azerbaycan"
  },
  qatar: {
    id: "qatar",
    name: "Qatar Airways",
    shortName: "Qatar",
    logo: "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_80,w_80,q_auto/images/airline/small/QR.webp",
    primaryColor: "qatar",
    hoverColor: "qatar-dark",
    bgColor: "bg-qatar",
    textColor: "text-qatar",
    description: "Dünya çapında ödüllü hizmet ve lüks seyahat deneyimi.",
    about: "Qatar Airways, 1993 yılında kurulan ve Doha merkezli prestijli havayolu şirketidir. 5 yıldızlı hizmet anlayışı ve lüks seyahat deneyimi ile dünya çapında tanınmaktadır. Oneworld alliance üyesidir.",
    fleet: ["Airbus A350", "Boeing 777", "Boeing 787", "Airbus A380"],
    destinations: ["Dünya Geneli 160+ Destinasyon"],
    services: ["Qsuite", "Business Class", "First Class", "Premium Economy", "Privilege Club"],
    policies: {
      cancellation: "Esnek iptal koşulları bilet türüne göre değişir.",
      changes: "Değişiklik işlemleri kolay ve esnek şekilde yapılabilir.",
      baggage: "Economy: 30kg, Business: 40kg, First: 50kg bagaj hakkı."
    },
    founded: "1993",
    headquarters: "Doha, Katar"
  },
  aeroflot: {
    id: "aeroflot",
    name: "Aeroflot",
    shortName: "Aeroflot",
    logo: "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_80,w_80,q_auto/images/airline/small/SU.webp",
    primaryColor: "aeroflot",
    hoverColor: "aeroflot-dark",
    bgColor: "bg-aeroflot",
    textColor: "text-aeroflot",
    description: "Rusya'nın milli havayolu şirketi ile güvenli seyahat.",
    about: "Aeroflot, 1923 yılında kurulan dünyanın en eski havayolu şirketlerinden biridir. Rusya'nın milli havayolu şirketi olarak Moskova merkezli faaliyet gösterir.",
    fleet: ["Airbus A320", "Airbus A330", "Boeing 777", "Sukhoi Superjet"],
    destinations: ["Rusya", "Avrupa", "Asya", "Amerika"],
    services: ["Business Class", "Economy Class", "Aeroflot Bonus"],
    policies: {
      cancellation: "Uçuştan 24 saat öncesine kadar iptal edilebilir.",
      changes: "Değişiklik koşulları bilet türüne göre değişir.",
      baggage: "Economy: 23kg, Business: 32kg bagaj hakkı."
    },
    founded: "1923",
    headquarters: "Moskova, Rusya"
  },
  emirates: {
    id: "emirates",
    name: "Emirates",
    shortName: "Emirates",
    logo: "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_80,w_80,q_auto/images/airline/small/EK.webp",
    primaryColor: "emirates",
    hoverColor: "emirates-dark",
    bgColor: "bg-emirates",
    textColor: "text-emirates",
    description: "Dubai merkezli lüks havayolu ile dünya standartında hizmet.",
    about: "Emirates, 1985 yılında Dubai'de kurulan ve dünya çapında lüks hizmet anlayışı ile tanınan prestijli havayolu şirketidir. 6 kıtada 80+ ülkede 130+ destinasyona uçuş düzenler.",
    fleet: ["Airbus A380", "Boeing 777"],
    destinations: ["Dünya Geneli 130+ Destinasyon"],
    services: ["First Class", "Business Class", "Premium Economy", "Economy Class", "Emirates Skywards"],
    policies: {
      cancellation: "Esnek iptal koşulları ve geniş değişiklik hakları.",
      changes: "Değişiklik işlemleri kolay ve hızlı şekilde yapılabilir.",
      baggage: "Economy: 30kg, Premium Economy: 35kg, Business: 40kg, First: 50kg."
    },
    founded: "1985",
    headquarters: "Dubai, BAE"
  },
  airarabia: {
    id: "airarabia",
    name: "Air Arabia",
    shortName: "Air Arabia",
    logo: "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_80,w_80,q_auto/images/airline/small/G9.webp",
    primaryColor: "airarabia",
    hoverColor: "airarabia-dark",
    bgColor: "bg-airarabia",
    textColor: "text-airarabia",
    description: "Ortadoğu'nun önde gelen düşük maliyetli havayolu şirketi.",
    about: "Air Arabia, 2003 yılında Şarjah'ta kurulan Ortadoğu'nun ilk ve en büyük düşük maliyetli havayolu şirketidir. Uygun fiyatlarla kaliteli hizmet sunmaya odaklanır.",
    fleet: ["Airbus A320", "Airbus A321neo"],
    destinations: ["Ortadoğu", "Kuzey Afrika", "Hint Alt Kıtası", "Avrupa"],
    services: ["Economy Class", "Extra Legroom", "Priority Boarding"],
    policies: {
      cancellation: "Uçuştan 4 saat öncesine kadar iptal edilebilir.",
      changes: "Değişiklik işlemleri ücretli olarak yapılabilir.",
      baggage: "20kg bagaj hakkı dahil, ek bagaj seçenekleri mevcut."
    },
    founded: "2003",
    headquarters: "Şarjah, BAE"
  },
  flydubai: {
    id: "flydubai",
    name: "Flydubai",
    shortName: "Flydubai",
    logo: "https://res.cloudinary.com/destek/image/upload/f_auto,fl_lossy,h_80,w_80,q_auto/images/airline/small/FZ.webp",
    primaryColor: "flydubai",
    hoverColor: "flydubai-dark",
    bgColor: "bg-flydubai",
    textColor: "text-flydubai",
    description: "Dubai merkezli düşük maliyetli havayolu ile ekonomik seyahat.",
    about: "Flydubai, 2008 yılında Dubai'de kurulan düşük maliyetli havayolu şirketidir. Emirates'in yan kuluşu olarak faaliyet gösterir ve bölgesel destinasyonlara uygun fiyatlı uçuşlar sunar.",
    fleet: ["Boeing 737 MAX", "Boeing 737-800"],
    destinations: ["Ortadoğu", "Afrika", "Asya", "Avrupa"],
    services: ["Economy Class", "Business Class", "Extra Legroom"],
    policies: {
      cancellation: "Uçuştan 4 saat öncesine kadar iptal edilebilir.",
      changes: "Değişiklik işlemleri online olarak kolayça yapılabilir.",
      baggage: "20kg bagaj hakkı, Business Class'ta 30kg."
    },
    founded: "2008",
    headquarters: "Dubai, BAE"
  }
};

export const getAirlineData = (airlineId: string): AirlineData | null => {
  return airlines[airlineId] || null;
}; 
