# Aslı & Evren Nikah Web Sitesi

Bu proje, Aslı ve Evren'in nikah davetiyesi ve bilgilendirme web sitesidir.

## 🌟 Özellikler

- Nikah tarihi ve lokasyon bilgileri
- Dijital RSVP formu
- Fotoğraf galerisi
- Ulaşım bilgileri
- Konaklama önerileri

## 🚀 Teknolojiler

- React.js
- Tailwind CSS
- Firebase (RSVP formu için)
- Google Maps API (lokasyon için)
- GitHub Pages (hosting)

## 💻 Geliştirme

Projeyi lokalde çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start
```

Uygulama http://localhost:3000 adresinde çalışacaktır.

## 🌐 Deployment

Bu proje GitHub Pages üzerinde host edilmektedir. Yeni değişiklikleri yayınlamak için:

```bash
# Projeyi GitHub Pages'e deploy edin
npm run deploy
```

### Branch Yapısı ve Deployment Süreci

Bu projede iki önemli branch bulunmaktadır:

1. `master` branch: Geliştirme branch'i

   - Tüm kod değişiklikleri burada yapılır
   - Bu branch'teki değişiklikler otomatik olarak canlı siteyi etkilemez
   - Değişiklikler test edilip onaylandıktan sonra deploy edilebilir

2. `gh-pages` branch: Deployment branch'i
   - Sadece build edilmiş dosyaları içerir
   - `npm run deploy` komutu çalıştırıldığında otomatik güncellenir
   - GitHub Pages bu branch'ten yayın yapar

Deployment süreci şu şekilde işler:

```
master branch (geliştirme) -> npm run deploy -> gh-pages branch -> canlı site
```

Bu yapı sayesinde:

- Geliştirme yaparken canlı site etkilenmez
- Test edilmemiş değişiklikler yayına gitmez
- İstediğiniz zaman deploy ederek siteyi güncelleyebilirsiniz

### GitHub Pages'i Devre Dışı Bırakma

1. GitHub repository sayfasına gidin
2. Settings > Pages sekmesine gidin
3. "Source" kısmından "Deploy from a branch" yerine "None" seçin
4. Save'e tıklayın

## 🌍 Canlı Site

[https://evrenuzuntas.github.io/aslievren-wedding](https://evrenuzuntas.github.io/aslievren-wedding)

## 📝 Lisans

MIT License - Tüm hakları saklıdır © 2024
