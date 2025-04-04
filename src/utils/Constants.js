export const CONTACT_CONSTANTS = {
  PHONE_NUMBER: "+905402028484",
  IBAN: "TR080011100000000075075260",
};

export const EVENTS = {
  KINA: {
    title: "Aslı & Evren Kına Gecesi",
    description: "Aslı & Evren'in Kına Gecesine davetlisiniz",
    location: "Livza Organizasyon, Ata, 3497. Sk. Ankor AVM No.4/1, 06000 Yenimahalle/Ankara",
    startTime: "2025-05-17T18:00:00",
    endTime: "2025-05-17T23:00:00",
    mapsUrl: "https://maps.app.goo.gl/TgFgrsgt9wEGN72o7",
    venue: "Livza Organizasyon",
    address: "Ata, 3497. Sk. Ankor AVM No.4/1, 06000 Yenimahalle/Ankara",
    schedule: ["18:00 - Karşılama", "18:30 - Yemek Servisi", "19:30 - Kına Merasimi", "20:00 - Müzik ve Eğlence"],
    notes: ["Mekan içerisinde otopark mevcuttur.", "Kına yakma merasimi saat 19:30'da başlayacaktır.", "Fotoğraf çekimi için uygun alanlar bulunmaktadır."],
    color: "#800020",
  },
  NIKAH: {
    title: "Aslı & Evren Nikah Töreni",
    description: "Nikah törenimize davetlisiniz",
    location: "Vedat Dalokay Nikah Salonu, Fidanlık, Prof. Dr. Nusret Fişek Cd. No:39, 06420 Çankaya/Ankara",
    startTime: "2025-05-18T14:00:00",
    endTime: "2025-05-18T15:00:00",
    mapsUrl: "https://maps.app.goo.gl/AHxNU1uunaA6pgMS6",
    venue: "Vedat Dalokay Nikah Salonu",
    address: "Fidanlık, Prof. Dr. Nusret Fişek Cd. No:39, 06420 Çankaya/Ankara",
    notes: ["Fotoğraf çekimi için uygun alan bulunmaktadır.", "Otopark için Sıhhiye Çok Katlı Otopark'ı kullanabilirsiniz."],
    color: "#5F6F52",
  },
  AFTER: {
    title: "Aslı & Evren After Party",
    description: "Nikah sonrası after party",
    location: "Mekan daha sonra belirlenecektir",
    startTime: "2025-05-18T22:00:00",
    endTime: "2025-05-19T04:00:00",
    venue: "Mekan Daha Sonra Belirlenecektir",
    features: ["DJ performansı", "Özel kokteyl menüsü", "Dans pisti"],
    notes: ["Dress code: Smart Casual", "Vale parking hizmeti mevcuttur", "Parti sabaha kadar devam edecektir"],
    color: "#000080",
  },
};

export const ROUTES = {
  HOME: "/",
  KINA: "/kina",
  NIKAH: "/nikah",
  AFTER: "/after",
  CONTACT: "/iletisim",
  NOT_FOUND: "/404",
};
