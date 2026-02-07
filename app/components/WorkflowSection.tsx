'use client'

interface WorkflowStep {
  number: number
  title: string
  description: string
}

const steps: WorkflowStep[] = [
  {
    number: 1,
    title: 'ヒアリング',
    description: 'LINE や電話でまずは状況を伺います。相談は無料です。',
  },
  {
    number: 2,
    title: '現地・法規調査',
    description: '宅建士の視点で土地のポテンシャルを徹底分析します。',
  },
  {
    number: 3,
    title: '最適プラン提案',
    description: '収益性・将来性を考慮した開発案を提示します。',
  },
  {
    number: 4,
    title: '契約・実行',
    description: '信頼できるパートナーとして最後まで並走します。',
  },
]

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2>仕事の流れ</h2>
          <p>相談から実行まで、一貫したサポート</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                {/* ステップ数字 */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-acre-gold rounded-full text-white font-bold text-2xl font-serif">
                    {step.number}
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="card-hover flex-1 bg-acre-beige p-6 rounded-lg">
                  <h3 className="text-2xl font-serif font-bold text-acre-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-acre-gray">
                    {step.description}
                  </p>
                </div>

                {/* 矢印（最後のステップ以外） */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex flex-col items-center -mx-4 ml-0">
                    <div className="h-8 border-l-2 border-acre-gold" />
                    <div className="text-acre-gold text-xl">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
