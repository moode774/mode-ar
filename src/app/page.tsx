'use client'

import React from 'react'
import Image from 'next/image'

// ====================================================================
// SVG Icons
// ====================================================================

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const WindowsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,12V6.75L9,5.43V11.25H3M3,13.5H9V19.57L3,18.25V13.5M10.5,11.25V4.5L21,3V11.25H10.5M10.5,13.5H21V21L10.5,19.75V13.5Z" />
  </svg>
)

// ====================================================================
// Mobile-First Components
// ====================================================================

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>MODE AR</div>
          <button 
            style={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {menuOpen && (
          <nav style={styles.mobileNav}>
            <a href="#features" onClick={() => setMenuOpen(false)}>المميزات</a>
            <a href="#download" onClick={() => setMenuOpen(false)}>التحميل</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>تواصل</a>
          </nav>
        )}
      </div>
    </header>
  )
}

const HeroSection = () => (
  <section style={styles.hero}>
    <div style={styles.container}>
      <div style={styles.heroContent}>
        <h1 style={styles.title}>
          توقف عن إعادة كتابة النصوص!
        </h1>
        <p style={styles.subtitle}>
          حوّل بين العربية والإنجليزية فوراً بضغطة واحدة
        </p>
        
        <div style={styles.features}>
          <div style={styles.feature}>⚡ تحويل فوري</div>
          <div style={styles.feature}>🔒 آمن 100%</div>
          <div style={styles.feature}>🆓 مجاني تماماً</div>
        </div>

        <a href="/mode-ar.exe" download style={styles.downloadBtn}>
          <DownloadIcon />
          تحميل مجاني
        </a>
      </div>
      
      <div style={styles.imageContainer}>
        <Image
          src="/app-mockup.png"
          alt="MODE AR"
          width={250}
          height={300}
          style={styles.appImage}
        />
      </div>
    </div>
  </section>
)

const FeaturesSection = () => (
  <section style={styles.section}>
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>لماذا MODE AR؟</h2>
      
      <div style={styles.featuresList}>
        <div style={styles.featureCard}>
          <h3>⚡ سرعة فائقة</h3>
          <p>تحويل فوري بأقل من ثانية واحدة</p>
        </div>
        
        <div style={styles.featureCard}>
          <h3>🎯 دقة عالية</h3>
          <p>يتعرف على اللغة تلقائياً بدقة 100%</p>
        </div>
        
        <div style={styles.featureCard}>
          <h3>🔒 أمان كامل</h3>
          <p>يعمل محلياً على جهازك دون إنترنت</p>
        </div>
      </div>
    </div>
  </section>
)

const ContactSection = () => (
  <section style={styles.section}>
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>تواصل معنا</h2>
      <p style={styles.contactText}>
        لأي استفسارات أو اقتراحات
      </p>
      <a href="mailto:mnzar7162@gmail.com" style={styles.emailLink}>
        mnzar7162@gmail.com
      </a>
    </div>
  </section>
)

// ====================================================================
// Main App
// ====================================================================

export default function ModeArApp() {
  return (
    <div style={styles.app}>
      <MobileHeader />
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      
      {/* Fixed Download Button */}
      <a href="/mode-ar.exe" download style={styles.fixedButton}>
        <DownloadIcon />
        تحميل
      </a>
    </div>
  )
}

// ====================================================================
// Mobile-First Styles
// ====================================================================

const styles = {
  app: {
    fontFamily: "'Cairo', -apple-system, BlinkMacSystemFont, sans-serif",
    direction: 'rtl' as const,
    backgroundColor: '#f8f6f0',
    color: '#2c3e50',
    lineHeight: 1.6,
    fontSize: '16px',
  } as React.CSSProperties,

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  } as React.CSSProperties,

  // Header
  header: {
    backgroundColor: 'rgba(248, 246, 240, 0.95)',
    backdropFilter: 'blur(10px)',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid #e1d5c7',
  } as React.CSSProperties,

  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
  } as React.CSSProperties,

  logo: {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#2c3e50',
  } as React.CSSProperties,

  menuButton: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-around',
    width: '24px',
    height: '18px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  } as React.CSSProperties,

  mobileNav: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
    padding: '20px 0',
    borderTop: '1px solid #e1d5c7',
  } as React.CSSProperties,

  // Hero Section  
  hero: {
    padding: '40px 0',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  heroContent: {
    marginBottom: '30px',
  } as React.CSSProperties,

  title: {
    fontSize: '1.8rem',
    fontWeight: 900,
    color: '#2c3e50',
    marginBottom: '15px',
    lineHeight: 1.3,
  } as React.CSSProperties,

  subtitle: {
    fontSize: '1rem',
    color: '#5a6c7d',
    marginBottom: '25px',
    lineHeight: 1.5,
  } as React.CSSProperties,

  features: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
    marginBottom: '30px',
  } as React.CSSProperties,

  feature: {
    fontSize: '0.9rem',
    color: '#34495e',
    fontWeight: 500,
  } as React.CSSProperties,

  downloadBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
  } as React.CSSProperties,

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  } as React.CSSProperties,

  appImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '12px',
  } as React.CSSProperties,

  // Sections
  section: {
    padding: '40px 0',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#2c3e50',
    marginBottom: '25px',
  } as React.CSSProperties,

  featuresList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  } as React.CSSProperties,

  featureCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  } as React.CSSProperties,

  contactText: {
    fontSize: '1rem',
    color: '#5a6c7d',
    marginBottom: '20px',
  } as React.CSSProperties,

  emailLink: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 600,
  } as React.CSSProperties,

  // Fixed Button
  fixedButton: {
    position: 'fixed' as const,
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
    boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)',
    zIndex: 1000,
  } as React.CSSProperties,
}
