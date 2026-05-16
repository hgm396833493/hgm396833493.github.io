import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'MeliToolHub | 拉美跨境电商工具测评专家 - Mercado Libre、ERP与广告工具',
  description: '专注拉美市场，提供Mercado Libre卖家工具、ERP管理系统、广告投放工具测评与跨境电商咨询服务，助力卖家高效运营。',
  generator: 'v0.app',
  keywords: ['Mercado Libre', '拉美跨境电商', '跨境电商工具', 'ERP管理系统', '广告投放工具', 'Latin America', '跨境电商咨询'],
  openGraph: {
    title: 'MeliToolHub | 拉美跨境电商工具测评专家',
    description: '专注拉美市场，提供Mercado Libre卖家工具、ERP管理系统、广告投放工具测评与跨境电商咨询服务，助力卖家高效运营。',
    type: 'website',
    locale: 'zh_CN',
    siteName: 'MeliToolHub',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MeliToolHub',
    description: 'Expert reviews and consulting for Latin America cross-border e-commerce tools',
    url: 'https://melitoolhub.com',
    areaServed: 'Latin America',
    serviceType: ['E-commerce Consulting', 'Tool Reviews', 'Cross-border Trade Advisory'],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Shaanxi',
      addressCountry: 'China',
    },
    email: 'hgm123002@outlook.com',
  }

  return (
    <html lang="zh-CN" className="bg-background scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
