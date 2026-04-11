import { Check } from 'lucide-react'

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
    <section id="prices" className="py-20 lg:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#ce0000] text-sm font-semibold uppercase tracking-widest mb-3">
            Умови співпраці
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Тарифи співпраці
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
            Гнучкі умови для різних категорій клієнтів — від роздрібних покупців до великих підприємств.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'border-[#ce0000] bg-[#0f0000] shadow-2xl shadow-[#ce0000]/15 -mt-3'
                  : 'border-white/10 bg-white/3 hover:border-[#ce0000]/30 hover:bg-white/5 hover:shadow-lg hover:shadow-[#ce0000]/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ce0000] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Популярний вибір
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-xl text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  {plan.description}
                </p>
                <div className={`text-3xl font-bold ${plan.popular ? 'text-[#ce0000]' : 'text-white'}`}>
                  {plan.range}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={17}
                      className="mt-0.5 shrink-0 text-[#ce0000]"
                    />
                    <span className="text-sm text-slate-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#ce0000] hover:bg-red-700 text-white hover:shadow-lg hover:shadow-[#ce0000]/30'
                    : 'bg-white/8 hover:bg-white/14 text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
