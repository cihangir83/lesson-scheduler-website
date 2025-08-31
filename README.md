# 🎓 Akıllı Ders Dağıtım Programı - Tanıtım Sitesi

Bu klasör, Akıllı Ders Dağıtım Programı için hazırlanmış modern ve kullanıcı dostu tanıtım sitesini içerir.

## 📁 Dosya Yapısı

```
lesson-scheduler-website/
├── index.html          # Ana sayfa
├── style.css           # CSS stilleri
├── script.js           # JavaScript fonksiyonları
├── KULLANIM_KLAVUZU.md # Kullanım klavuzu
└── README.md           # Bu dosya
```

## 🚀 GitHub Pages'te Yayınlama

### 1. GitHub Repository Oluşturma
```bash
# Yeni repository oluşturun
git init
git add .
git commit -m "İlk commit: Tanıtım sitesi"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/lesson-scheduler-website.git
git push -u origin main
```

### 2. GitHub Pages Aktifleştirme
1. GitHub repository'nizde **Settings** sekmesine gidin
2. Sol menüden **Pages** seçin
3. **Source** olarak **Deploy from a branch** seçin
4. **Branch** olarak **main** seçin
5. **Folder** olarak **/ (root)** seçin
6. **Save** butonuna tıklayın

### 3. Site Erişimi
Site şu adreste yayınlanacak:
```
https://KULLANICI_ADI.github.io/lesson-scheduler-website/
```

## 🎨 Site Özellikleri

### ✨ Modern Tasarım
- **Gradient arka planlar** ve **glassmorphism** efektleri
- **Responsive tasarım** (mobil uyumlu)
- **Smooth scrolling** ve **hover animasyonları**
- **3D mockup** görsellerle profesyonel görünüm

### 📱 Bölümler
1. **Hero Section** - Ana tanıtım ve indirme butonu
2. **Features** - Program özelliklerinin detaylı açıklaması
3. **Guide** - Adım adım kullanım rehberi
4. **Download** - İndirme seçenekleri ve sistem gereksinimleri

### 🔧 İnteraktif Özellikler
- **İndirme modal'ı** - GitHub ve Google Drive seçenekleri
- **Mobil menü** - Hamburger menü ile responsive navigasyon
- **Smooth scroll** - Sayfa içi geçişler
- **Animasyonlar** - Scroll-based görünüm efektleri

## 🛠️ Özelleştirme

### İndirme Linklerini Güncelleme
`script.js` dosyasında şu fonksiyonları düzenleyin:

```javascript
function downloadFromGitHub() {
    window.open('https://github.com/KULLANICI_ADI/lesson-scheduler/releases', '_blank');
}

function downloadFromDrive() {
    window.open('https://drive.google.com/file/d/DOSYA_ID/view', '_blank');
}
```

### Renk Temasını Değiştirme
`style.css` dosyasında CSS değişkenlerini düzenleyebilirsiniz:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ffd700;
    --text-color: #1e293b;
    --bg-color: #f8fafc;
}
```

### İçerik Güncelleme
`index.html` dosyasında:
- Başlıkları ve açıklamaları düzenleyin
- İletişim bilgilerini güncelleyin
- Özellik listesini genişletin

## 📊 SEO Optimizasyonu

Site SEO dostu olarak hazırlanmıştır:
- **Semantic HTML** yapısı
- **Meta tags** ve **Open Graph** desteği
- **Hızlı yükleme** süreleri
- **Mobil uyumluluk**

### Meta Tags Ekleme
`index.html` dosyasının `<head>` bölümüne ekleyebilirsiniz:

```html
<meta name="description" content="Okullarda ders programlarını otomatik oluşturan akıllı sistem">
<meta name="keywords" content="ders programı, okul, öğretmen, sınıf, otomatik">
<meta property="og:title" content="Akıllı Ders Dağıtım Programı">
<meta property="og:description" content="Ücretsiz ders programı oluşturma yazılımı">
<meta property="og:image" content="https://your-site.com/preview.png">
```

## 🔗 Entegrasyon

### Google Analytics
Analytics kodu eklemek için `index.html` dosyasının sonuna:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Contact Form
İletişim formu eklemek için Formspree veya Netlify Forms kullanabilirsiniz.

## 📈 Performans

Site performansı için:
- **CDN** kullanımı (Font Awesome, Google Fonts)
- **Minified CSS/JS** (production için)
- **Image optimization** (WebP formatı)
- **Lazy loading** (büyük görseller için)

## 🎯 Pazarlama Stratejisi

### 1. GitHub Community
- **README.md** dosyasında site linkini paylaşın
- **Releases** sayfasında indirme linklerini ekleyin
- **Issues** ve **Discussions** bölümlerini aktif kullanın

### 2. Sosyal Medya
- Site linkini Twitter, LinkedIn'de paylaşın
- Eğitim forumlarında tanıtın
- YouTube demo videosu hazırlayın

### 3. SEO
- Eğitim bloglarından backlink alın
- Google Search Console'a kaydedin
- Sitemap.xml oluşturun

## 📞 Destek

Site ile ilgili sorularınız için:
- GitHub Issues kullanın
- Pull request gönderin
- Geliştirici ile iletişime geçin

---

**Not:** Bu site tamamen statik HTML/CSS/JS ile hazırlanmıştır ve herhangi bir backend gerektirmez. GitHub Pages üzerinde ücretsiz olarak barındırılabilir.