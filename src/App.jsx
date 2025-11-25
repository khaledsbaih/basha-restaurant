import { useState } from "react";
import "./App.css";

const TRANSLATIONS = {
  ar: {
    brandTitle: "مطعم باشا",
    brandSubtitle: "نكهات شرقية راقية",
    navMenu: "المنيو",
    navAbout: "من نحن",
    navContact: "تواصل",
    navBook: "احجز طاولة",
    langBtn: "English",
    heroEyebrow: "تجربة طعام ملكية",
    heroTitle: "أصالة الشرق مع لمسة عصرية",
    heroText:
      "نقدم لكم رحلة طهي متكاملة تجمع بين التوابل العربية العريقة وتقنيات الطهي الحديثة لتحصلوا على لحظات استثنائية مع العائلة والأصدقاء.",
    heroCta1: "استكشف المنيو",
    heroCta2: "تعرف علينا",
    heroBadgeTitle: "جلسة شرقية خاصة",
    heroBadgeText: "احجز اليوم واستمتع بخصم 15%",
    menuEyebrow: "طبق اليوم",
    menuTitle: "مختارات الشيف",
    menuText:
      "تشكيلة موسمية يتم إعدادها بعناية من مكونات طازجة لضمان نكهة لا تُنسى في كل لقمة.",
    aboutEyebrow: "من نحن",
    aboutTitle: "حكاية باشا",
    aboutText:
      "منذ أكثر من عقد ونحن نعيد رسم ملامح المطبخ العربي بابتسامة، ونقدم ضيافة تليق بكم في قلب دبي.",
    aboutLead:
      "فريقنا يجمع بين خبرة الطهاة وروح الضيافة، لنصنع تجربة مترفة تبدأ من aroma القهوة وتنتهي بابتسامة الضيوف.",
    contactEyebrow: "تواصل",
    contactTitle: "نجهز لكم أجمل اللحظات",
    contactText:
      "حجوزات المناسبات الخاصة والشخصية متاحة طوال الأسبوع مع إمكانية تخصيص القائمة.",
    contactTip: "💡 مواقف سيارات مجانية لضيوفنا",
    footerText: "مطعم باشا - جميع الحقوق محفوظة",
    menuItems: [
      {
        name: "مشاوي باشا الملكية",
        price: "45 درهم",
        description: "تشكيلة فاخرة من اللحم المتبل والدجاج مع صلصات مميزة.",
        tag: "الأكثر طلبًا",
      },
      {
        name: "كبسة زعفران مطهوة ببطء",
        price: "39 درهم",
        description: "لحم طري يطهى على نار هادئة مع أرز معطر بالزعفران.",
        tag: "وصفة الشيف",
      },
      {
        name: "فتة حمص مدخنة",
        price: "28 درهم",
        description: "طبقات مقرمشة مع حمص كريمي وزيت زيتون بكر.",
        tag: "مقبلات",
      },
      {
        name: "شاورما فحم مع خبز طابون",
        price: "32 درهم",
        description: "شرائح دجاج مشوية على الفحم مع خبز طازج وصلصة سرية.",
        tag: "عرض اليوم",
      },
    ],
    heroStats: [
      { value: "10+", label: "سنوات خبرة" },
      { value: "50+", label: "أطباق يومية" },
      { value: "4.9", label: "تقييم الضيوف" },
    ],
    contactInfo: [
      { label: "الهاتف", value: "050 000 0000" },
      { label: "الموقع", value: "دبي - شارع المطاعم" },
      { label: "أوقات العمل", value: "يوميًا 12:00 - 00:00" },
    ],
    aboutPoints: [
      "نختار المكونات المحلية بعناية ونضيف لمسات خاصة من الشرق.",
      "طهاة بخبرات عالمية يصممون قائمة موسمية تتجدد باستمرار.",
      "مساحة هادئة بإضاءة دافئة وموسيقى شرقية تعزف خلفيتكم المفضلة.",
    ],
    mapText: "دبي - شارع المطاعم - مقابل مركز الفلك",
  },
  en: {
    brandTitle: "Basha Restaurant",
    brandSubtitle: "Refined Eastern Flavors",
    navMenu: "Menu",
    navAbout: "About",
    navContact: "Contact",
    navBook: "Book a Table",
    langBtn: "العربية",
    heroEyebrow: "Royal Dining Experience",
    heroTitle: "Eastern Authenticity with a Modern Touch",
    heroText:
      "We offer you a complete culinary journey that combines authentic Arabic spices and modern cooking techniques to create exceptional moments with family and friends.",
    heroCta1: "Explore Menu",
    heroCta2: "Learn More",
    heroBadgeTitle: "Private Eastern Seating",
    heroBadgeText: "Book today and enjoy 15% off",
    menuEyebrow: "Dish of the Day",
    menuTitle: "Chef's Selection",
    menuText:
      "A seasonal selection carefully prepared from fresh ingredients to ensure an unforgettable flavor in every bite.",
    aboutEyebrow: "About Us",
    aboutTitle: "The Basha Story",
    aboutText:
      "For over a decade, we have been reimagining Arabic cuisine with a smile, offering hospitality worthy of you in the heart of Dubai.",
    aboutLead:
      "Our team combines culinary expertise and the spirit of hospitality to create a luxurious experience that starts with the aroma of coffee and ends with guests' smiles.",
    contactEyebrow: "Contact",
    contactTitle: "We Prepare the Best Moments for You",
    contactText:
      "Special and personal event bookings are available all week with the option to customize the menu.",
    contactTip: "💡 Free parking for our guests",
    footerText: "Basha Restaurant - All Rights Reserved",
    menuItems: [
      {
        name: "Royal Basha Grills",
        price: "AED 45",
        description:
          "Luxurious selection of marinated meat and chicken with signature sauces.",
        tag: "Most Ordered",
      },
      {
        name: "Slow-Cooked Saffron Kabsa",
        price: "AED 39",
        description:
          "Tender meat cooked on low heat with saffron-infused rice.",
        tag: "Chef's Recipe",
      },
      {
        name: "Smoked Hummus Fatteh",
        price: "AED 28",
        description: "Crispy layers with creamy hummus and virgin olive oil.",
        tag: "Appetizers",
      },
      {
        name: "Charcoal Shawarma with Taboon Bread",
        price: "AED 32",
        description:
          "Charcoal-grilled chicken slices with fresh bread and secret sauce.",
        tag: "Today's Special",
      },
    ],
    heroStats: [
      { value: "10+", label: "Years of Experience" },
      { value: "50+", label: "Daily Dishes" },
      { value: "4.9", label: "Guest Rating" },
    ],
    contactInfo: [
      { label: "Phone", value: "050 000 0000" },
      { label: "Location", value: "Dubai - Restaurant Street" },
      { label: "Working Hours", value: "Daily 12:00 - 00:00" },
    ],
    aboutPoints: [
      "We carefully select local ingredients and add special touches from the East.",
      "Chefs with international experience design a seasonal menu that is constantly renewed.",
      "A quiet space with warm lighting and oriental music playing your favorite background.",
    ],
    mapText: "Dubai - Restaurant Street - Opposite Al Falak Center",
  },
};

const CONTACT_IMAGES = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
];

const LOGO_URL = "https://cdn-icons-png.flaticon.com/512/3174/3174888.png";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80";

function App() {
  const [lang, setLang] = useState("ar");
  const t = TRANSLATIONS[lang];
  const isRTL = lang === "ar";

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };
  return (
    <div className="app" dir={isRTL ? "rtl" : "ltr"}>
      <div className="shell">
        <header className="masthead">
          <div className="brand">
            <img src={LOGO_URL} alt={t.brandTitle} className="brand__mark" />
            <div>
              <p className="brand__title">{t.brandTitle}</p>
              <p className="brand__subtitle">{t.brandSubtitle}</p>
            </div>
          </div>

          <nav className="nav">
            <a href="#menu">{t.navMenu}</a>
            <a href="#about">{t.navAbout}</a>
            <a href="#contact">{t.navContact}</a>
            <a className="btn btn--outline" href="#contact">
              {t.navBook}
            </a>
            <button className="btn btn--lang" onClick={toggleLanguage}>
              {t.langBtn}
            </button>
          </nav>
        </header>

        <main className="main">
          <section className="hero">
            <div className="hero__content">
              <p className="eyebrow">{t.heroEyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <p>{t.heroText}</p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#menu">
                  {t.heroCta1}
                </a>
                <a className="btn btn--ghost" href="#about">
                  {t.heroCta2}
                </a>
              </div>
              <div className="hero__stats">
                {t.heroStats.map((stat) => (
                  <article key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero__media">
              <img src={HERO_IMAGE} alt={t.heroTitle} loading="lazy" />
              <div className="hero__badge">
                <p>{t.heroBadgeTitle}</p>
                <span>{t.heroBadgeText}</span>
              </div>
            </div>
          </section>

          <section id="menu" className="section menu">
            <div className="section__header">
              <p className="eyebrow">{t.menuEyebrow}</p>
              <h2>{t.menuTitle}</h2>
              <p>{t.menuText}</p>
            </div>
            <div className="menu__grid">
              {t.menuItems.map((item) => (
                <article key={item.name} className="menu__card">
                  <div className="menu__card-head">
                    <span className="menu__tag">{item.tag}</span>
                    <span className="menu__price">{item.price}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="about" className="section about">
            <div className="section__header">
              <p className="eyebrow">{t.aboutEyebrow}</p>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutText}</p>
            </div>
            <div className="about__layout">
              <p className="about__lead">{t.aboutLead}</p>
              <ul className="about__list">
                {t.aboutPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="contact" className="section contact">
            <div className="section__header">
              <p className="eyebrow">{t.contactEyebrow}</p>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
            </div>
            <div className="contact__grid">
              {t.contactInfo.map((item, idx) => (
                <article
                  key={item.label}
                  className="contact__card"
                  style={{ backgroundImage: `url(${CONTACT_IMAGES[idx]})` }}
                >
                  <p className="contact__label">{item.label}</p>
                  <p className="contact__value">{item.value}</p>
                </article>
              ))}
              <div className="contact__map">
                <div className="contact__map-overlay">
                  <p>{t.mapText}</p>
                </div>
              </div>
            </div>
            <p className="contact__tip">{t.contactTip}</p>
          </section>
        </main>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {t.footerText}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
  