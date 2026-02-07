'use client'

export default function HeroSection() {
  return (
    <section 
      id="home"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden hero-bg-img"
    >
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 hero-gradient" />

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          {/* キャッチコピー */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            その土地のを歴史に、
            <br />
            新しい未来を拓く。
          </h1>

          {/* サブテキスト */}
          <p className="text-lg md:text-xl text-gray-100">
            立地開発プランナー・青木和弘
          </p>

          {/* CTA ボタン */}
          <div className="pt-6">
            <a
              href="https://line.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-acre-gold hover:bg-opacity-90 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              今すぐ LINE で相談
            </a>
          </div>
        </div>
      </div>

      {/* スクロールハント */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  )
}
