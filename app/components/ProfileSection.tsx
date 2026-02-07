'use client'

export default function ProfileSection() {
  return (
    <section id="profile" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2>プロフィール・実績</h2>
          <p>宅地建物取引士として、信頼を築く</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* 基本情報 */}
          <div className="card-hover bg-acre-beige p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-acre-blue mb-4">基本情報</h3>
            <ul className="space-y-3 text-acre-gray">
              <li className="flex items-start">
                <span className="text-acre-gold mr-3">✓</span>
                <span><strong>保有資格：</strong>宅地建物取引士（宅建）</span>
              </li>
              <li className="flex items-start">
                <span className="text-acre-gold mr-3">✓</span>
                <span><strong>所属：</strong>株式会社ACRE 立地開発プランナー</span>
              </li>
            </ul>
          </div>

          {/* メッセージ */}
          <div className="card-hover bg-acre-beige p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-acre-blue mb-4">メッセージ</h3>
            <p className="text-acre-gray leading-relaxed">
              エリアを熟知した私が、地主様の土地への思い入れに寄り添い、その価値を最大限に活かす開発をご提案します。
            </p>
          </div>

          {/* 実績 */}
          <div className="card-hover bg-acre-beige p-8 rounded-lg md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-acre-blue mb-4">実績</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="text-center">
                <div className="text-3xl font-bold text-acre-gold mb-2">〇〇件</div>
                <p className="text-acre-gray">店舗誘致実績</p>
              </li>
              <li className="text-center">
                <div className="text-3xl font-bold text-acre-gold mb-2">〇〇エリア</div>
                <p className="text-acre-gray">土地活用提案</p>
              </li>
              <li className="text-center">
                <div className="text-3xl font-bold text-acre-gold mb-2">〇〇件</div>
                <p className="text-acre-gray">相続対策実績</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
