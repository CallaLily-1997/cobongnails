import type { Metadata } from 'next'
import { Playfair_Display, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-serif'
});

const nunito = Nunito({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Cô Bông Nail | Tiệm Nail & Đào Tạo Chuyên Nghiệp',
  description: 'Cô Bông Nail - Tiệm nail chuyên nghiệp tại Thủ Dầu Một. Dịch vụ làm nail chất lượng cao và đào tạo học viên bài bản.',
  generator: 'v0.app',
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
  return (
    <html lang="vi" className={`${playfair.variable} ${nunito.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
