'use client'

export default function ProfileSection() {
  return (
    <section id="profile" className="py-20 md:py-32 bg-acre-beige">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2>プロフィール・実績</h2>
          <p>地域に根ざし、信頼と実績で土地の価値を最大化します</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* 基本情報 */}
          <div className="card-hover bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold text-acre-blue mb-4">基本情報</h3>
            <ul className="space-y-3 text-acre-gray">
              <li className="flex items-start">
                <span className="text-acre-gold mr-3">✓</span>
                <span><strong>保有資格：</strong>宅地建物取引士（宅建）</span>
              </li>
              <li className="flex items-start">
                <span className="text-acre-gold mr-3">✓</span>
                <span><strong>所属：</strong>株式会社ACRE／立地開発プランナー</span>
              </li>
            </ul>
          </div>

          {/* メッセージ */}
          <div className="card-hover bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold text-acre-blue mb-4">メッセージ</h3>
            <p className="text-acre-gray leading-relaxed">
              地域の特性や地主様の想いを大切にし、最適な土地活用をご提案します。<br />
              「相談してよかった」と思っていただけるよう、誠実にサポートいたします。
            </p>
          </div>

          {/* 実績 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:col-span-2">
            <div className="card-hover bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-acre-gold mb-2">30件以上</div>
              <p className="text-acre-gray">店舗誘致・テナント仲介</p>
            </div>
            <div className="card-hover bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-acre-gold mb-2">20エリア超</div>
              <p className="text-acre-gray">土地活用・開発提案</p>
            </div>
            <div className="card-hover bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-acre-gold mb-2">15件以上</div>
              <p className="text-acre-gray">相続・資産活用サポート</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
