'use client'

interface SolutionCard {
  title: string
  description: string
}

const solutions: SolutionCard[] = [
  {
    title: '相続税対策',
    description: '土地を収益物件へ変えることで評価額を下げる提案。相続後の資産運用もサポートします。',
  },
  {
    title: '空き地・空き家活用',
    description: '維持費がかかる土地を、地域に必要とされる店舗や施設へ。新たな価値を生み出します。',
  },
  {
    title: 'テナント仲介',
    description: 'ドラッグストア、コンビニ、介護施設など大手企業との橋渡し。最適な誘致を実現。',
  },
]

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 md:py-32 bg-acre-beige">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2>提供ソリューション</h2>
          <p>土地の悩み、解決します</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`card-hover bg-white p-8 rounded-lg border-l-4 border-acre-gold shadow-md animate-stagger-${index + 1}`}
            >
              <h3 className="text-2xl font-serif font-bold text-acre-blue mb-4">
                {solution.title}
              </h3>
              <p className="text-acre-gray leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
