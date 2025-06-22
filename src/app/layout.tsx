import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MODE AR - تحويل فوري بين العربية والإنجليزية',
  description: 'توقف عن إعادة كتابة النصوص! حوّل بين العربية والإنجليزية فوراً بضغطة واحدة. تطبيق MODE AR آمن ومجاني.',
  keywords: 'تحويل نص، عربي إنجليزي، تطبيق مجاني، ويندوز، MODE AR',
  authors: [{ name: 'محمد عبد السلام' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}