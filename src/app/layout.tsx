import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/ui/Footer';
import { AskLaxmanCopilot } from '@/components/interactive/AskLaxmanCopilot';
import { PERSONAL_INFO } from '@/data/portfolioData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(PERSONAL_INFO.website),
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.tagline,
  keywords: [
    'Laxman Sharma',
    'AI ML Engineer',
    'FastAPI Developer',
    'Django Developer',
    'Data Engineering Intern',
    'Apache Airflow',
    'Kathmandu Nepal',
    'eSewa NLP',
    'BHASABODH',
    'EDUHUB Portal',
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.website }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: PERSONAL_INFO.website,
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.tagline,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: `${PERSONAL_INFO.website}/assets/images/laxman.png`,
        width: 1200,
        height: 630,
        alt: PERSONAL_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.tagline,
    images: [`${PERSONAL_INFO.website}/assets/images/laxman.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.title,
    url: PERSONAL_INFO.website,
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: PERSONAL_INFO.education.institution,
    },
    sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
    knowsAbout: [
      'PyTorch',
      'Transformers',
      'FastAPI',
      'Django',
      'Apache Airflow',
      'PostgreSQL',
      'MinIO',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-dark-950 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AskLaxmanCopilot />
      </body>
    </html>
  );
}
