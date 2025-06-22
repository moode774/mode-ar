'use client'

import React from 'react'
import Image from 'next/image'

// ====================================================================
// Refined SVG Icons Collection
// ====================================================================

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const KeyboardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 8h.01" /><path d="M12 8h.01" /><path d="M14 8h.01" /><path d="M16 8h.01" />
    <path d="M8 12h.01" /><path d="M10 12h.01" /><path d="M12 12h.01" /><path d="M14 12h.01" /><path d="M16 12h.01" />
    <path d="M7 16h10" />
    <rect x="3" y="4" width="18" height="16" rx="2" />
  </svg>
)

const BackgroundProcessIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m5.66 5.66l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m5.66-5.66l4.24-4.24" />
  </svg>
)

const FeatherIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>
)

const WindowsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,12V6.75L9,5.43V11.25H3M3,13.5H9V19.57L3,18.25V13.5M10.5,11.25V4.5L21,3V11.25H10.5M10.5,13.5H21V21L10.5,19.75V13.5Z" />
  </svg>
)

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.419-1.956-1.419-3.338h-3.295v13.717c0 2.115-1.705 3.82-3.82 3.82s-3.82-1.705-3.82-3.82 1.705-3.82 3.82-3.82c.211 0 .417.017.619.051V8.669c-.202-.014-.406-.021-.619-.021C4.493 8.648.858 12.283.858 16.716s3.635 8.068 8.068 8.068 8.068-3.635 8.068-8.068V9.598a9.896 9.896 0 0 0 5.53 1.674v-3.295c0-.001-.001-.001-.001-.001a6.233 6.233 0 0 1-3.202-2.414z" />
  </svg>
)

// ====================================================================
// Professional Component Architecture
// ====================================================================

const AppHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="app-header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-main">MODE</span>
            <span className="logo-sub">AR</span>
          </div>
          
          <ul className="nav-list">
            <li><a href="#features" className="nav-link">المميزات</a></li>
            <li><a href="#download" className="nav-link">التحميل</a></li>
            <li><a href="#contact" className="nav-link">تواصل معنا</a></li>
          </ul>
          
          <button 
            className={`mobile-menu-button ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="فتح القائمة"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          
          <a href="/mode-ar.exe" download="MODE-AR.exe" className="header-button">
            حمّل الآن
          </a>
        </nav>
        
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>المميزات</a>
            <a href="#download" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>التحميل</a>
            <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>تواصل معنا</a>
          </div>
        )}
      </div>
    </header>
  )
}

const HeroSection = () => (
  <section id="home" className="hero-section">
    <div className="container hero-container">
      <div className="hero-text">
        <h1 className="hero-title">
          توقف عن إعادة كتابة النصوص!
          <br />
          <span className="hero-title-accent">حوّل بين العربية والإنجليزية فوراً</span>
        </h1>
        
        <div className="benefits-list">
          <div className="benefit-item">
            <span className="benefit-icon">●</span>
            <span>تحويل فوري - أقل من ثانية واحدة</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">●</span>
            <span>دقة 100% - يتعرف على اللغة تلقائياً</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">●</span>
            <span>آمن تماماً - يعمل محلياً على جهازك</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a href="/mode-ar.exe" download="MODE-AR.exe" className="button-primary">
            <DownloadIcon style={{ width: 20, height: 20 }} />
            تحميل مجاني لويندوز
          </a>
          <a href="#features" className="button-secondary">
            استكشف المميزات
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <Image
          src="/app-mockup.png"
          alt="MODE AR App Mockup"
          width={320}
          height={400}
          className="hero-image"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  </section>
)

const VideoSection = () => {
    // ... (Your existing video logic remains unchanged)
    // ...
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [hasPlayed, setHasPlayed] = React.useState(false);
    const [wasPlaying, setWasPlaying] = React.useState(false);

    React.useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const tryAutoplay = () => {
            if (hasPlayed) return;

            video.muted = false;
            video.volume = 0.8;
            video.play().then(() => {
                setHasPlayed(true);
                setWasPlaying(true);
            }).catch(() => {
                video.muted = true;
                video.play().then(() => {
                    setHasPlayed(true);
                    setWasPlaying(true);
                }).catch(() => {
                    // Autoplay blocked
                });
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    if (!hasPlayed) {
                        tryAutoplay();
                    } else if (wasPlaying && video.paused) {
                        video.play().catch(() => {});
                    }
                } else {
                    if (!video.paused) {
                        setWasPlaying(true);
                        video.pause();
                    } else {
                        setWasPlaying(false);
                    }
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(video);

        const handlePlay = () => setWasPlaying(true);
        const handlePause = () => { if(video.currentTime < video.duration) setWasPlaying(false); };

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        return () => {
            observer.disconnect();
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, [hasPlayed, wasPlaying]);

    return (
        <section id="video" className="video-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">شاهد MODE AR في العمل</h2>
                    <p className="section-subtitle">
                        لا حاجة للكلام الكثير - شاهد كيف يحل التطبيق المشكلة في ثوانٍ معدودة
                    </p>
                </div>

                <div className="video-container">
                    <video
                        ref={videoRef}
                        className="video"
                        controls
                        preload="auto"
                        playsInline
                        webkit-playsinline="true"
                    >
                        <source src="/DE.mp4" type="video/mp4" />
                        متصفحك لا يدعم تشغيل الفيديو
                    </video>
                </div>
            </div>
        </section>
    );
};

const FeaturesSection = () => (
  <section id="features" className="features-section">
    <div className="container">
      <p className="hero-main-text">
        هل سئمت من كتابة النص بالخطأ بلغة أخرى؟ تطبيق <span className="brand-highlight">MODE AR</span> 
        يحل هذه المشكلة نهائياً! يعمل خفية في الخلفية ويحول أي نص محدد بين العربية والإنجليزية 
        بضغطة واحدة <span className="shortcut-highlight">Ctrl + Q</span> - لا مزيد من الإحراج والوقت الضائع.
      </p>
      
      <div className="section-header">
        <h2 className="section-title">لماذا ستُحب MODE AR؟</h2>
        <p className="section-subtitle">
          تحويل ذكي وفوري مع ضمان الخصوصية والأمان - هذا ما يميز تطبيقنا.
        </p>
      </div>
      <div className="features-grid">
        <FeatureCard
          icon={<BackgroundProcessIcon style={{ width: 32, height: 32 }} />}
          title="يعمل في الخلفية"
          description="يبدأ تلقائياً مع بدء تشغيل ويندوز ويعمل بهدوء دون استهلاك موارد الجهاز. متاح وجاهز عندما تحتاجه."
        />
        <FeatureCard
          icon={<FeatherIcon style={{ width: 32, height: 32 }} />}
          title="بسيط وخفيف"
          description="حجم صغير جداً (أقل من 2 ميجابايت) مع أداء قوي وموثوق. مصمم لمهمة واحدة فقط وينجزها بامتياز."
        />
        <FeatureCard
          icon={<KeyboardIcon style={{ width: 32, height: 32 }} />}
          title="اختصار واحد فقط"
          description="لا قوائم، لا إعدادات، لا تعقيدات. فقط حدد النص واضغط Ctrl + Q لتحويل فوري ودقيق بين اللغتين."
        />
      </div>
    </div>
  </section>
)

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="feature-card">
    <div className="feature-icon-wrapper">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
)

const DownloadSection = () => (
  <section id="download" className="download-section">
    <div className="container" style={{ textAlign: 'center' }}>
      <h2 className="download-title">جاهز لتجربة أسرع؟</h2>
      <p className="download-subtitle">
        التطبيق متاح حالياً لنظام ويندوز فقط. قم بالتحميل الآن وابدأ بتوفير وقتك.
      </p>
      <a href="/mode-ar.exe" download="MODE-AR.exe" className="download-button">
        <WindowsIcon style={{ width: 24, height: 24 }} />
        تحميل مباشر لـ Windows
      </a>
    </div>
  </section>
)

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">هل لديك استفسار؟</h2>
        <p className="section-subtitle">
          نسعد دائماً بالتواصل معكم.
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-title">معلومات التواصل</h3>
          <p className="contact-text">
            إذا كان لديك أي اقتراح أو واجهت مشكلة، لا تتردد في مراسلتنا.
          </p>
          <a href="mailto:mnzar7162@gmail.com" className="contact-link">
            <MailIcon style={{ width: 20, height: 20 }} />
            mnzar7162@gmail.com
          </a>
        </div>
        <div className="contact-social">
          <p className="social-text">
            للتواصل السريع والمباشر، تابعنا على:
          </p>
          <div className="social-buttons">
            <a 
              href="https://www.instagram.com/7o_ozx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-instagram"
            >
              <InstagramIcon style={{ width: 20, height: 20 }} />
              Instagram
            </a>
            <a 
              href="https://www.tiktok.com/@7oz_x" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-tiktok"
            >
              <TikTokIcon style={{ width: 20, height: 20 }} />
              TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const AppFooter = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <p className="footer-copyright">
          © {new Date().getFullYear()} MODE AR. جميع الحقوق محفوظة.
        </p>
        <p className="footer-credit">
          تطوير: محمد عبد السلام
        </p>
      </div>
    </div>
  </footer>
)

// ====================================================================
// Page Styles Component (The Fix!)
// ====================================================================

const PageStyles = () => (
  <style jsx global>{`
    /* Global Styles */
    body, html {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #F5F2E8;
    }
    .app-wrapper {
      font-family: 'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      direction: rtl;
      background-color: #F5F2E8;
      color: #2D3748;
      line-height: 1.7;
      min-height: 100vh;
      width: 100%;
      max-width: 100vw;
      overflow-x: hidden;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Header Styles */
    .app-header {
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 1000;
      padding: 16px 0;
      background-color: rgba(245, 242, 232, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04);
    }
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .logo-main { color: #3B4F63; }
    .logo-sub { color: #64748B; font-weight: 600; }
    .nav-list {
      display: flex;
      gap: 40px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .nav-link {
      font-size: 1rem;
      font-weight: 500;
      color: #475569;
      text-decoration: none;
      padding: 8px 0;
      transition: color 0.3s ease;
    }
    .nav-link:hover { color: #3B4F63; }
    .header-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 12px;
      border: 2px solid #3B4F63;
      background-color: transparent;
      color: #3B4F63;
      font-size: 1rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .header-button:hover {
      background-color: #3B4F63;
      color: #F5F2E8;
    }

    /* Mobile Menu Styles */
    .mobile-menu-button {
      display: none;
      flex-direction: column;
      justify-content: space-around;
      width: 30px;
      height: 30px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 1001;
    }
    .hamburger-line {
      width: 100%;
      height: 3px;
      background-color: #3B4F63;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
    .mobile-menu-button.is-open .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .mobile-menu-button.is-open .hamburger-line:nth-child(2) {
      opacity: 0;
    }
    .mobile-menu-button.is-open .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
    .mobile-menu {
      display: none; /* Controlled by React state */
      position: absolute;
      top: 75px; /* Adjust based on header height */
      left: 0;
      right: 0;
      background-color: rgba(245, 242, 232, 0.98);
      backdrop-filter: blur(20px);
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      padding: 20px 0;
      z-index: 999;
    }
    .mobile-nav-link {
      display: block;
      padding: 15px 24px;
      font-size: 1.1rem;
      font-weight: 500;
      color: #475569;
      text-decoration: none;
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }
    .mobile-nav-link:hover {
        background-color: #e8e3d6;
        color: #3B4F63;
    }

    /* Hero Section */
    .hero-section {
      padding: 100px 0;
      background-color: #F5F2E8;
      background: linear-gradient(135deg, #F7F4EE 0%, #F5F2E8 100%);
    }
    .hero-container {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      align-items: center;
      gap: 80px;
    }
    .hero-text {
      max-width: 100%;
      position: relative;
      z-index: 10;
    }
    .hero-main-text {
      font-size: 1.25rem;
      color: #1A202C;
      font-weight: 600;
      line-height: 1.7;
      margin: 60px 0;
      max-width: 800px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .hero-title {
      font-size: 3.5rem;
      font-weight: 900;
      color: #4A5568;
      line-height: 1.2;
      margin-bottom: 24px;
      letter-spacing: -0.03em;
    }
    .hero-title-accent {
      background: linear-gradient(135deg, #3B4F63 0%, #455A6B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .brand-highlight { color: #3B4F63; font-weight: 700; }
    .shortcut-highlight {
      background-color: #F1F5F9;
      color: #1E293B;
      padding: 4px 8px;
      border-radius: 6px;
      font-weight: 600;
      font-family: Monaco, "Courier New", monospace;
      font-size: 1.1rem;
    }
    .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
    .benefits-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 40px;
      padding-right: 0px;
    }
    .benefit-item {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1rem;
      color: #4A5568;
      font-weight: 500;
    }
    .benefit-icon {
      font-size: 1rem;
      min-width: 16px;
      color: #3B4F63;
      font-weight: 900;
    }
    .button-primary {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 16px 32px;
      border-radius: 14px;
      border: none;
      background: linear-gradient(135deg, #3B4F63 0%, #455A6B 100%);
      color: #FFFFFF;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      box-shadow: 0 10px 40px rgba(59, 79, 99, 0.25);
      transition: all 0.3s ease;
    }
    .button-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 45px rgba(59, 79, 99, 0.3); }
    .button-secondary {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 16px 32px;
      border-radius: 14px;
      border: 2px solid #E8E3D6;
      background-color: #F8F5EE;
      color: #475569;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .button-secondary:hover { transform: translateY(-3px); border-color: #d1c9b8; }
    .hero-image-container {
      display: flex;
      justify-content: center;
      align-items: start;
    }
    .hero-image {
      width: 320px;
      height: auto;
      border-radius: 0;
      box-shadow: none;
      background-color: transparent;
      border: none;
      padding: 0;
      margin: 0;
    }

    /* Video Section */
    .video-section { padding: 80px 0; background-color: #F5F2E8; }
    .video-container {
      max-width: 900px;
      margin: 0 auto;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      padding: 4px;
    }
    .video {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 16px;
      background-color: #000000;
      outline: none;
    }
    
    /* Features Section */
    .features-section { padding: 100px 0; background-color: #F0ECE1; }
    .section-header { text-align: center; margin-bottom: 80px; }
    .section-title {
      font-size: 2.75rem;
      font-weight: 800;
      color: #1A202C;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .section-subtitle {
      font-size: 1.2rem;
      color: #64748B;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 40px;
    }
    .feature-card {
      background-color: #F8F5EE;
      padding: 48px 32px;
      border-radius: 20px;
      border: 1px solid #E8E3D6;
      text-align: center;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    .feature-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); }
    .feature-icon-wrapper {
      width: 80px;
      height: 80px;
      border-radius: 20px;
      background: linear-gradient(135deg, #3B4F63 0%, #455A6B 100%);
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px auto;
      box-shadow: 0 8px 32px rgba(59, 79, 99, 0.3);
    }
    .feature-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1A202C;
      margin-bottom: 16px;
    }
    .feature-description {
      color: #64748B;
      font-size: 1rem;
      line-height: 1.7;
    }
    
    /* Download Section */
    .download-section {
      padding: 100px 0;
      background: linear-gradient(135deg, #1A202C 0%, #2D3748 100%);
      color: #F5F5DC;
    }
    .download-title {
      font-size: 2.75rem;
      font-weight: 800;
      color: #F5F5DC;
      margin-bottom: 20px;
      letter-spacing: -0.02em;
    }
    .download-subtitle {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.85);
      max-width: 500px;
      margin: 0 auto 48px auto;
      line-height: 1.6;
    }
    .download-button {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 20px 40px;
      border-radius: 16px;
      border: none;
      background-color: #F5F2E8;
      color: #1A202C;
      font-size: 1.2rem;
      font-weight: 700;
      text-decoration: none;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    .download-button:hover { transform: translateY(-3px); box-shadow: 0 14px 45px rgba(0, 0, 0, 0.3); }
    
    /* Contact Section */
    .contact-section { padding: 100px 0; background-color: #F5F2E8; }
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      background-color: #F0ECE1;
      padding: 60px;
      border-radius: 20px;
      border: 1px solid #E8E3D6;
    }
    .contact-info {}
    .contact-title {
      font-size: 1.8rem;
      font-weight: 700;
      color: #1A202C;
      margin-bottom: 16px;
    }
    .contact-text {
      font-size: 1rem;
      color: #64748B;
      margin-bottom: 32px;
      line-height: 1.7;
    }
    .contact-link {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: #3B4F63;
      font-weight: 600;
      font-size: 1.1rem;
    }
    .contact-link:hover { text-decoration: underline; }
    .contact-social {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .social-text {
      text-align: center;
      font-size: 1.1rem;
      color: #475569;
      margin-bottom: 24px;
    }
    .social-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
    }
    .social-instagram, .social-tiktok {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 12px;
      color: #F5F5DC;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .social-instagram { background-color: #E4405F; }
    .social-tiktok { background-color: #000000; }
    .social-instagram:hover, .social-tiktok:hover { opacity: 0.85; transform: translateY(-2px); }
    
    /* Footer */
    .footer {
      background-color: #1A202C;
      color: rgba(255, 255, 255, 0.85);
      padding: 40px 0;
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .footer-copyright, .footer-credit { margin: 0; font-size: 1rem; }
    .footer-credit { opacity: 0.7; }
    
    /* ================================================= */
    /* ============== MOBILE RESPONSIVE ================ */
    /* ================================================= */
    
    @media (max-width: 992px) {
      .hero-container {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }
      .hero-text {
        order: 2;
      }
      .hero-image-container {
        order: 1;
        margin-bottom: 20px;
      }
      .benefits-list {
        padding-right: 0;
        align-items: center;
      }
      .benefit-item {
        justify-content: center;
      }
      .hero-buttons {
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      .container { padding: 0 16px; }
      
      .app-header { padding: 12px 0; }
      .nav { position: relative; }
      .nav-list { display: none; }
      .header-button { display: none; }
      .mobile-menu-button { display: flex; }
      .mobile-menu { display: block; }
      
      .hero-section { padding: 60px 0; }
      .hero-title {
        font-size: 2.2rem;
        line-height: 1.3;
      }
      .hero-main-text {
        font-size: 1.1rem;
        margin: 40px 0;
      }
      .hero-buttons {
        flex-direction: column;
        align-items: stretch;
      }
      .button-primary, .button-secondary {
        width: 100%;
        justify-content: center;
        padding: 18px 24px;
        font-size: 1rem;
      }
      .hero-image { width: 280px; }
      
      .video-section, .features-section, .download-section, .contact-section {
        padding: 60px 0;
      }
      .video-container { margin: 0; }
      
      .section-title { font-size: 2.2rem; }
      .section-subtitle { font-size: 1.1rem; }
      .section-header { margin-bottom: 40px; }
      
      .features-grid { grid-template-columns: 1fr; gap: 24px; }
      
      .download-title { font-size: 2.2rem; }
      
      .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 40px 24px;
      }
      .social-buttons {
        flex-direction: column;
        align-items: stretch;
      }
      .social-instagram, .social-tiktok {
        justify-content: center;
      }
      
      .footer-content {
        flex-direction: column;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
        .hero-title { font-size: 1.8rem; }
        .hero-image { width: 240px; }
        .section-title { font-size: 1.8rem; }
    }
  `}</style>
)

// ====================================================================
// Main App Component
// ====================================================================

export default function ModeArApp() {
  return (
    <div className="app-wrapper">
      <AppHeader />
      <main>
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <AppFooter />
      {/* All styles are now here! */}
      <PageStyles />
    </div>
  )
}