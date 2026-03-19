import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
});

const leanerTitle = localFont({
  src: [
    {
      path: '../public/leaner/Leaner-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/leaner/Kulturrrno - Leaner Thin Italic.otf',
      weight: '100',
      style: 'italic',
    }
  ],
  variable: '--font-leaner'
});

export const metadata: Metadata = {
  title: 'Vivero Sanmiguel - Diseño Emocional',
  description: 'Embellecemos hogares, lugares de trabajo, centros comerciales y más.',
  metadataBase: new URL('https://viverosanmiguel.com'),
  openGraph: {
    title: 'Vivero Sanmiguel - Diseño Emocional',
    description: 'Transformamos espacios en modernos lugares llenos de energía vital. Plantas ornamentales, jardinería y paisajismo.',
    url: 'https://viverosanmiguel.com',
    siteName: 'Vivero Sanmiguel',
    images: [
      {
        url: '/qsomos.png',
        width: 1200,
        height: 630,
        alt: 'Vivero Sanmiguel - Diseño Emocional',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${leanerTitle.variable}`}>{children}</body>
    </html>
  );
}
