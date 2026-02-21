import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anton Korenyako – Product Designer & Art Director',
  description:
    'Designing clear, intuitive digital experiences for startups and global teams. From early MVPs to full-scale platforms.',
  authors: [{ name: 'Anton Korenyako' }],
  openGraph: {
    type: 'website',
    url: 'https://korenyako.github.io/',
    title: 'Anton Korenyako – Product Designer & Art Director',
    description:
      'Designing clear, intuitive digital experiences for startups and global teams. From early MVPs to full-scale platforms.',
    images: [{ url: 'https://korenyako.github.io/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anton Korenyako – Product Designer & Art Director',
    description:
      'Designing clear, intuitive digital experiences for startups and global teams. From early MVPs to full-scale platforms.',
    images: ['https://korenyako.github.io/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PDXLNPBHY0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PDXLNPBHY0');
          `}
        </Script>
      </body>
    </html>
  );
}
