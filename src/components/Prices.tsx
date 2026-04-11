import { Check, Zap } from 'lucide-react'
import { Reveal } from './Reveal'

const plans = [
  {
    name: 'Роздрібний',
    range: 'Від 500 грн',
    description: 'Для малого бізнесу та приватних замовників',
    features: [
      'Мінімальна сума замовлення від 500 грн',
      'Доставка по всій Україні',
      'Технічна консультація',
      'Гарантія на всю продукцію',
      'Видаткова накладна та рахунок',
    ],
    cta: 'Замовити',
    popular: false,
  },
  {
    name: 'Оптовий',
    range: 'Від 10 000 грн',
    description: "Для підприємств та дистриб'юторів",
    features: [
      'Знижки від 10% до 25% на весь асортимент',
      'Пріоритетна обробка замовлень',
      'Відстрочення платежу до 30 днів',
      'Персональний менеджер',
      'Безкоштовна доставка від 20 000 грн',
    ],
    cta: 'Отримати пропозицію',
    popular: true,
  },
  {
    name: 'Корпоративний',
    range: 'Індивідуально',
    description: 'Для великих промислових підприємств',
    features: [
      'Індивідуальне ціноутворення',
      'Довгострокові договори постачання',
      "Виїзд спеціаліста на об'єкт",
      'Пріоритетна технічна підтримка',
      'Повний пакет супровідної документації',
    ],
    cta: "Зв'язатися",
    popular: false,
  },
]

export const Prices = () => {
  return (
    <section id="prices" className="relative py-24 lg:py-32 bg-black overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="mb-14">
          <div className="red-line">
            <p className="font-mono text-[11px] text-[#ce0000] uppercase tracking-[0.25em] mb-4">
              Умови співпраці
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-condensed font-bold text-white uppercase tracking-wide"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              Тарифи співпраці
            </h2>
            <p className="font-sans text-slate-500 text-sm max-w-xs leading-relaxed">
              Гнучкі умови для роздрібних покупців, оптовиків та великих підприємств.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <div
                className={`relative h-full rounded-2xl p-7 border transition-all duration-300 flex flex-col ${
                  plan.popular
                    ? 'border-[#ce0000] bg-[#0c0000] shadow-2xl shadow-[#ce0000]/10 md:-mt-4 md:-mb-4'
                    : 'border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#ce0000] text-white font-mono text-[10px] font-medium px-4 py-1.5 rounded-b-lg uppercase tracking-wider whitespace-nowrap">
                    <Zap size={10} fill="currentColor" />
                    Популярний вибір
                  </div>
                )}

                {/* Plan name + description */}
                <div className="mb-6 pt-4">
                  <h3 className="font-condensed font-bold text-white text-xl uppercase tracking-wide mb-1">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-slate-500 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/8">
                  <span className={`font-display text-5xl leading-none ${plan.popular ? 'text-[#ce0000]' : 'text-white'}`}>
                    {plan.range}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={15} className="text-[#ce0000] mt-0.5 shrink-0" />
                      <span className="font-sans text-sm text-slate-400">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#ce0000] hover:bg-red-700 text-white hover:shadow-lg hover:shadow-[#ce0000]/30'
                      : 'bg-white/6 hover:bg-white/10 text-white border border-white/8 hover:border-white/20'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
