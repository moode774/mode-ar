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
    <header style={styles.header}>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <div style={styles.logo}>
            <span style={styles.logoMain}>MODE</span>
            <span style={styles.logoSub}>AR</span>
          </div>
          
          {/* Desktop Menu */}
          <ul style={styles.navList}>
            <li><a href="#features" style={styles.navLink}>المميزات</a></li>
            <li><a href="#download" style={styles.navLink}>التحميل</a></li>
            <li><a href="#contact" style={styles.navLink}>تواصل معنا</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            style={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="فتح القائمة"
          >
            <span style={{...styles.hamburgerLine, transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}}></span>
            <span style={{...styles.hamburgerLine, opacity: mobileMenuOpen ? 0 : 1}}></span>
            <span style={{...styles.hamburgerLine, transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'}}></span>
          </button>
          
          <a href="/mode-ar.exe" download="MODE-AR.exe" style={styles.headerButton}>
            حمّل الآن
          </a>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <a href="#features" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>المميزات</a>
            <a href="#download" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>التحميل</a>
            <a href="#contact" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>تواصل معنا</a>
          </div>
        )}
      </div>
    </header>
  )
}

const HeroSection = () => (
  <section id="home" style={styles.heroSection}>
    <div style={{ ...styles.container, ...styles.heroContainer }}>
      <div style={styles.heroText}>
        <h1 style={styles.heroTitle}>
          توقف عن إعادة كتابة النصوص!
          <br />
          <span style={styles.heroTitleAccent}>حوّل بين العربية والإنجليزية فوراً</span>
        </h1>
        
        <div style={styles.benefitsList}>
          <div style={styles.benefitItem}>
            <span style={styles.benefitIcon}>●</span>
            <span>تحويل فوري - أقل من ثانية واحدة</span>
          </div>
          <div style={styles.benefitItem}>
            <span style={styles.benefitIcon}>●</span>
            <span>دقة 100% - يتعرف على اللغة تلقائياً</span>
          </div>
          <div style={styles.benefitItem}>
            <span style={styles.benefitIcon}>●</span>
            <span>آمن تماماً - يعمل محلياً على جهازك</span>
          </div>
        </div>
        <div style={styles.heroButtons}>
          <a href="/mode-ar.exe" download="MODE-AR.exe" style={styles.buttonPrimary}>
            <DownloadIcon style={{ width: 20, height: 20 }} />
            تحميل مجاني لويندوز
          </a>
          <a href="#features" style={styles.buttonSecondary}>
            استكشف المميزات
          </a>
        </div>
      </div>
      <div style={styles.heroImageContainer}>
        <Image
          src="/app-mockup.png"
          alt="MODE AR App Mockup"
          width={320}
          height={400}
          style={{ ...styles.heroImage, objectFit: 'contain' as const }}
          priority
        />
      </div>
    </div>
  </section>
)

const VideoSection = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [hasPlayed, setHasPlayed] = React.useState(false)
  const [wasPlaying, setWasPlaying] = React.useState(false)

  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // محاولة تشغيل فوري عند تحميل الصفحة
    const tryAutoplay = () => {
      if (hasPlayed) return
      
      video.muted = false
      video.volume = 0.8
      video.play().then(() => {
        setHasPlayed(true)
        setWasPlaying(true)
        console.log('Video autoplayed with sound!')
      }).catch(() => {
        // إذا فشل - جرب صامت
        video.muted = true
        video.play().then(() => {
          setHasPlayed(true)
          setWasPlaying(true)
          console.log('Video autoplayed muted')
        }).catch(() => {
          console.log('Autoplay completely blocked')
        })
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        
        if (entry.isIntersecting) {
          // لما يظهر الفيديو
          if (!hasPlayed) {
            tryAutoplay()
          } else if (wasPlaying && video.paused) {
            // لما يرجع للفيديو وكان يشتغل قبل كده
            video.play().then(() => {
              setWasPlaying(true)
              console.log('Video resumed!')
            }).catch((error) => {
              console.log('Failed to resume:', error)
            })
          }
        } else {
          // لما يختفي الفيديو من الشاشة
          if (!video.paused) {
            setWasPlaying(true)
            video.pause()
            console.log('Video paused - user scrolled away')
          }
        }
      },
      { threshold: 0.3 } // 30% من الفيديو يكون ظاهر
    )

    observer.observe(video)
    
    // إضافة event listeners لتتبع حالة التشغيل/التوقف
    const handlePlay = () => setWasPlaying(true)
    const handlePause = () => setWasPlaying(false)
    
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      observer.disconnect()
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [hasPlayed, wasPlaying])

  return (
    <section id="video" style={styles.videoSection}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>شاهد MODE AR في العمل</h2>
          <p style={styles.sectionSubtitle}>
            لا حاجة للكلام الكثير - شاهد كيف يحل التطبيق المشكلة في ثوانٍ معدودة
          </p>
        </div>
        
        <div style={styles.videoContainer}>
          <video 
            ref={videoRef}
            style={styles.video}
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
  )
}

const FeaturesSection = () => (
  <section id="features" style={styles.featuresSection}>
    <div style={styles.container}>
      <p style={styles.heroMainText}>
        هل سئمت من كتابة النص بالخطأ بلغة أخرى؟ تطبيق <span style={styles.brandHighlight}>MODE AR</span> 
        يحل هذه المشكلة نهائياً! يعمل خفية في الخلفية ويحول أي نص محدد بين العربية والإنجليزية 
        بضغطة واحدة <span style={styles.shortcutHighlight}>Ctrl + Q</span> - لا مزيد من الإحراج والوقت الضائع.
      </p>
      
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>لماذا ستُحب MODE AR؟</h2>
        <p style={styles.sectionSubtitle}>
          تحويل ذكي وفوري مع ضمان الخصوصية والأمان - هذا ما يميز تطبيقنا.
        </p>
      </div>
      <div style={styles.featuresGrid}>
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
  <div style={styles.featureCard}>
    <div style={styles.featureIconWrapper}>{icon}</div>
    <h3 style={styles.featureTitle}>{title}</h3>
    <p style={styles.featureDescription}>{description}</p>
  </div>
)

const DownloadSection = () => (
  <section id="download" style={styles.downloadSection}>
    <div style={{ ...styles.container, textAlign: 'center' } as React.CSSProperties}>
      <h2 style={styles.downloadTitle}>جاهز لتجربة أسرع؟</h2>
      <p style={styles.downloadSubtitle}>
        التطبيق متاح حالياً لنظام ويندوز فقط. قم بالتحميل الآن وابدأ بتوفير وقتك.
      </p>
      <a href="/mode-ar.exe" download="MODE-AR.exe" style={styles.downloadButton}>
        <WindowsIcon style={{ width: 24, height: 24 }} />
        تحميل مباشر لـ Windows
      </a>
    </div>
  </section>
)

const ContactSection = () => (
  <section id="contact" style={styles.contactSection}>
    <div style={styles.container}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>هل لديك استفسار؟</h2>
        <p style={styles.sectionSubtitle}>
          نسعد دائماً بالتواصل معكم.
        </p>
      </div>
      <div style={styles.contactContent}>
        <div style={styles.contactInfo}>
          <h3 style={styles.contactTitle}>معلومات التواصل</h3>
          <p style={styles.contactText}>
            إذا كان لديك أي اقتراح أو واجهت مشكلة، لا تتردد في مراسلتنا.
          </p>
          <a href="mailto:mnzar7162@gmail.com" style={styles.contactLink}>
            <MailIcon style={{ width: 20, height: 20 }} />
            mnzar7162@gmail.com
          </a>
        </div>
        <div style={styles.contactSocial}>
          <p style={styles.socialText}>
            للتواصل السريع والمباشر، تابعنا على:
          </p>
          <div style={styles.socialButtons}>
            <a 
              href="https://www.instagram.com/7o_ozx" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialInstagram}
            >
              <InstagramIcon style={{ width: 20, height: 20 }} />
              Instagram
            </a>
            <a 
              href="https://www.tiktok.com/@7oz_x" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialTiktok}
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
  <footer style={styles.footer}>
    <div style={styles.container}>
      <div style={styles.footerContent}>
        <p style={styles.footerCopyright}>
          © {new Date().getFullYear()} MODE AR. جميع الحقوق محفوظة.
        </p>
        <p style={styles.footerCredit}>
          تطوير: محمد عبد السلام
        </p>
      </div>
    </div>
  </footer>
)

// ====================================================================
// Main App Component
// ====================================================================

export default function ModeArApp() {
  return (
    <div style={styles.appWrapper}>
      <AppHeader />
      <main>
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  )
}

// ====================================================================
// Professional Styling System
// ====================================================================

const styles = {
  // Global Styles
  appWrapper: {
    fontFamily: "'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    direction: 'rtl' as const,
    backgroundColor: '#F5F2E8',
    color: '#2D3748',
    margin: 0,
    lineHeight: 1.7,
    minHeight: '100vh',
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    '@media (max-width: 768px)': {
      padding: '0 16px',
    },
  },

  // Header Styles
  header: {
    position: 'sticky' as const,
    top: 0,
    width: '100%',
    zIndex: 1000,
    padding: '16px 0',
    backgroundColor: 'rgba(245, 242, 232, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.04)',
    '@media (max-width: 768px)': {
      padding: '12px 0',
    },
  },

  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '16px',
    },
  },

  logo: {
    fontSize: '1.8rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
  },

  logoMain: {
    color: '#3B4F63',
  },

  logoSub: {
    color: '#64748B',
    fontWeight: 600,
  },

  navList: {
    display: 'flex',
    gap: '40px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },

  navLink: {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#475569',
    textDecoration: 'none',
    padding: '8px 0',
    transition: 'color 0.3s ease',
  } as React.CSSProperties,

  headerButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '12px',
    border: '2px solid #3B4F63',
    backgroundColor: 'transparent',
    color: '#3B4F63',
    fontSize: '1rem',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  } as React.CSSProperties,

  // Mobile Menu Styles
  mobileMenuButton: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '30px',
    height: '30px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  } as React.CSSProperties,

  hamburgerLine: {
    width: '100%',
    height: '3px',
    backgroundColor: '#3B4F63',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  mobileMenu: {
    display: 'block',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(245, 242, 232, 0.98)',
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '20px 0',
    zIndex: 999,
  } as React.CSSProperties,

  mobileNavLink: {
    display: 'block',
    padding: '15px 24px',
    fontSize: '1.1rem',
    fontWeight: 500,
    color: '#475569',
    textDecoration: 'none',
    textAlign: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  // Hero Section
  heroSection: {
    padding: '100px 0',
    backgroundColor: '#F5F2E8',
    background: 'linear-gradient(135deg, #F7F4EE 0%, #F5F2E8 100%)',
    '@media (max-width: 768px)': {
      padding: '60px 0',
    },
  },

  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 1fr',
    alignItems: 'start',
    gap: '80px',
    paddingTop: '0px',
    marginTop: '-60px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '40px',
      textAlign: 'center',
      marginTop: '0',
    },
  },

  heroText: {
    maxWidth: '100%',
    marginTop: '-40px',
    position: 'relative' as const,
    zIndex: 10,
  },

  heroMainText: {
    fontSize: '1.25rem',
    color: '#1A202C',
    fontWeight: 600,
    lineHeight: 1.7,
    marginBottom: '60px',
    maxWidth: '100%',
    textAlign: 'center' as const,
  },

  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 900,
    color: '#4A5568',
    lineHeight: 1.2,
    marginBottom: '24px',
    letterSpacing: '-0.03em',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    '@media (max-width: 480px)': {
      fontSize: '2rem',
    },
  },

  heroTitleAccent: {
    background: 'linear-gradient(135deg, #3B4F63 0%, #455A6B 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#4A5568',
    lineHeight: 1.7,
    marginBottom: '40px',
    maxWidth: '520px',
  },

  brandHighlight: {
    color: '#3B4F63',
    fontWeight: 700,
  },

  shortcutHighlight: {
    backgroundColor: '#F1F5F9',
    color: '#1E293B',
    padding: '4px 8px',
    borderRadius: '6px',
    fontWeight: 600,
    fontFamily: 'Monaco, "Courier New", monospace',
    fontSize: '1.1rem',
  },

  heroButtons: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap' as const,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  benefitsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    marginBottom: '40px',
    paddingRight: '20px',
  },

  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '1rem',
    color: '#4A5568',
    fontWeight: 500,
  },

  benefitIcon: {
    fontSize: '1rem',
    minWidth: '16px',
    color: '#3B4F63',
    fontWeight: 900,
  },

  buttonPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 32px',
    borderRadius: '14px',
    border: 'none',
    background: 'linear-gradient(135deg, #3B4F63 0%, #455A6B 100%)',
    color: '#FFFFFF',
    fontSize: '1.1rem',
    fontWeight: 600,
    textDecoration: 'none',
    boxShadow: '0 10px 40px rgba(59, 79, 99, 0.25)',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      width: '100%',
      justifyContent: 'center',
      padding: '18px 24px',
      fontSize: '1rem',
    },
  } as React.CSSProperties,

  buttonSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 32px',
    borderRadius: '14px',
    border: '2px solid #E8E3D6',
    backgroundColor: '#F8F5EE',
    color: '#475569',
    fontSize: '1.1rem',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      width: '100%',
      justifyContent: 'center',
      padding: '18px 24px',
      fontSize: '1rem',
    },
  } as React.CSSProperties,

  heroImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    padding: 0,
    margin: 0,
    background: 'none',
    border: 'none',
    marginTop: '20px',
    '@media (max-width: 768px)': {
      order: -1,
      marginTop: '0',
      marginBottom: '20px',
    },
  },

  heroImageWrapper: {
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    background: 'none',
  },

  heroImage: {
    width: '320px',
    height: 'auto',
    borderRadius: '0px',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    margin: 0,
    '@media (max-width: 768px)': {
      width: '280px',
    },
    '@media (max-width: 480px)': {
      width: '240px',
    },
  },

  // Video Section
  videoSection: {
    padding: '80px 0',
    backgroundColor: '#F5F2E8',
    '@media (max-width: 768px)': {
      padding: '60px 0',
    },
  },

  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '900px',
    margin: '0 auto',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    padding: '4px',
    '@media (max-width: 768px)': {
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      margin: '0 16px',
    },
  },

  videoWrapper: {
    position: 'relative' as const,
    width: '100%',
  },

  video: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    backgroundColor: '#000000',
    outline: 'none',
    '@media (max-width: 768px)': {
      borderRadius: '8px',
    },
  },

  unmuteButton: {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    backgroundColor: '#3B4F63',
    color: '#F5F5DC',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    zIndex: 10,
  },

  // Features Section
  featuresSection: {
    padding: '100px 0',
    backgroundColor: '#F0ECE1',
    '@media (max-width: 768px)': {
      padding: '60px 0',
    },
  },

  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: '80px',
  },

  sectionTitle: {
    fontSize: '2.75rem',
    fontWeight: 800,
    color: '#1A202C',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '2.2rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem',
    },
  },

  sectionSubtitle: {
    fontSize: '1.2rem',
    color: '#64748B',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },

  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '24px',
    },
  },

  featureCard: {
    backgroundColor: '#F8F5EE',
    padding: '48px 32px',
    borderRadius: '20px',
    border: '1px solid #E8E3D6',
    textAlign: 'center' as const,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },

  featureIconWrapper: {
    width: '80px',
    height: '80px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #3B4F63 0%, #455A6B 100%)',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px auto',
    boxShadow: '0 8px 32px rgba(59, 79, 99, 0.3)',
  },

  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#1A202C',
    marginBottom: '16px',
  },

  featureDescription: {
    color: '#64748B',
    fontSize: '1rem',
    lineHeight: 1.7,
  },

  // Download Section
  downloadSection: {
    padding: '100px 0',
    background: 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)',
    color: '#F5F5DC',
    '@media (max-width: 768px)': {
      padding: '60px 0',
    },
  },

  downloadTitle: {
    fontSize: '2.75rem',
    fontWeight: 800,
    color: '#F5F5DC',
    marginBottom: '20px',
    letterSpacing: '-0.02em',
  },

  downloadSubtitle: {
    fontSize: '1.2rem',
    color: 'rgba(255, 255, 255, 0.85)',
    maxWidth: '500px',
    margin: '0 auto 48px auto',
    lineHeight: 1.6,
  },

  downloadButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '20px 40px',
    borderRadius: '16px',
    border: 'none',
    backgroundColor: '#F5F2E8',
    color: '#1A202C',
    fontSize: '1.2rem',
    fontWeight: 700,
    textDecoration: 'none',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  // Contact Section
  contactSection: {
    padding: '100px 0',
    backgroundColor: '#F5F2E8',
    '@media (max-width: 768px)': {
      padding: '60px 0',
    },
  },

  contactContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    backgroundColor: '#F0ECE1',
    padding: '60px',
    borderRadius: '20px',
    border: '1px solid #E8E3D6',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '40px',
      padding: '40px 24px',
    },
  },

  contactInfo: {},

  contactTitle: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#1A202C',
    marginBottom: '16px',
  },

  contactText: {
    fontSize: '1rem',
    color: '#64748B',
    marginBottom: '32px',
    lineHeight: 1.7,
  },

  contactLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    color: '#3B4F63',
    fontWeight: 600,
    fontSize: '1.1rem',
  } as React.CSSProperties,

  contactSocial: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
  },

  socialText: {
    textAlign: 'center' as const,
    fontSize: '1.1rem',
    color: '#475569',
    marginBottom: '24px',
  },

  socialButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'center',
    },
  },

  socialInstagram: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '12px',
    backgroundColor: '#E4405F',
    color: '#F5F5DC',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  socialTiktok: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '12px',
    backgroundColor: '#000000',
    color: '#F5F5DC',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  // Footer
  footer: {
    backgroundColor: '#1A202C',
    color: 'rgba(255, 255, 255, 0.85)',
    padding: '40px 0',
  },

  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '16px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },

  footerCopyright: {
    margin: 0,
    fontSize: '1rem',
  },

  footerCredit: {
    margin: 0,
    fontSize: '1rem',
    opacity: 0.7,
  },
  footerLink: {
    color: '#F5F5DC',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'color 0.3s ease',
  } as React.CSSProperties,

  // Fixed Mobile Download Button
  fixedMobileButton: {
    display: 'none',
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    padding: '14px 28px',
    borderRadius: '50px',
    background: 'linear-gradient(135deg, #3B4F63 0%, #455A6B 100%)',
    color: '#FFFFFF',
    fontSize: '1rem',
    fontWeight: 600,
    textDecoration: 'none',
    boxShadow: '0 8px 32px rgba(59, 79, 99, 0.4)',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  } as React.CSSProperties,
};// <-- تم إضافة قوس الإغلاق هنا