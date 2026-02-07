import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '立地開発プランナー 青木和弘 | 土地活用・相続対策のプロフェッショナル',
  description: '土地活用、相続対策、店舗開発の専門家。宅地建物取引士が、地主様の土地の価値を最大限に活かすソリューションをご提案します。',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-acre-beige text-acre-gray washi-texture">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingLineButton />
      </body>
    </html>
  )
}

/**
 * Header Component
 */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-acre-blue text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl font-serif">立地開発プランナー</div>
        <ul className="hidden md:flex gap-8">
          <li><a href="#home" className="hover:text-acre-gold transition-colors">ホーム</a></li>
          <li><a href="#profile" className="hover:text-acre-gold transition-colors">プロフィール</a></li>
          <li><a href="#solution" className="hover:text-acre-gold transition-colors">ソリューション</a></li>
          <li><a href="#workflow" className="hover:text-acre-gold transition-colors">仕事の流れ</a></li>
          <li><a href="#contact" className="hover:text-acre-gold transition-colors">お問い合わせ</a></li>
        </ul>
      </nav>
    </header>
  )
}

/**
 * Footer Component
 */
function Footer() {
  return (
    <footer className="bg-acre-blue text-white py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2026 立地開発プランナー・青木和弘. All rights reserved.</p>
      </div>
    </footer>
  )
}

/**
 * Floating LINE Button
 */
function FloatingLineButton() {
  return (
    <a
      href="https://line.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-button bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-bold"
    >
      LINEで相談
    </a>
  )
}
