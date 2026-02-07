'use client'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-acre-beige">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2>お問い合わせ</h2>
          <p>いつでもお気軽にご相談ください</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* LINE */}
          <div className="card-hover bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-serif font-bold text-acre-blue mb-3">
              LINE で相談
            </h3>
            <p className="text-acre-gray mb-6">
              最も手軽にご相談いただけます。
            </p>
            <a
              href="https://line.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-acre-gold hover:bg-opacity-90 text-white font-bold rounded-lg transition-all duration-300"
            >
              LINE で追加
            </a>
          </div>

          {/* 電話 */}
          <div className="card-hover bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-2xl font-serif font-bold text-acre-blue mb-3">
              電話で相談
            </h3>
            <p className="text-acre-gray mb-6">
              お急ぎの場合はお電話ください。
            </p>
            <a
              href="tel:090-XXXX-XXXX"
              className="inline-block px-6 py-3 bg-acre-gold hover:bg-opacity-90 text-white font-bold rounded-lg transition-all duration-300"
            >
              070-XXXX-XXXX
            </a>
          </div>

          {/* メール */}
          <div className="card-hover bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-serif font-bold text-acre-blue mb-3">
              メール で相談
            </h3>
            <p className="text-acre-gray mb-6">
              お気軽にメールもお送りください。
            </p>
            <a
              href="mailto:info@example.com"
              className="inline-block px-6 py-3 bg-acre-gold hover:bg-opacity-90 text-white font-bold rounded-lg transition-all duration-300 break-all"
            >
              info@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
