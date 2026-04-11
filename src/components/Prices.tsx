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
    <section id="prices" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Умови співпраці
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
            Тарифи співпраці
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Гнучкі умови для різних категорій клієнтів — від роздрібних покупців до великих підприємств.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-amber-500 bg-gradient-to-b from-[#1e3a5f] to-[#163050] shadow-2xl shadow-[#1e3a5f]/30 -mt-3'
                  : 'border-slate-200 bg-white hover:border-[#1e3a5f]/30 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Популярний вибір
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-bold text-xl mb-1 ${
                    plan.popular ? 'text-white' : 'text-[#1e3a5f]'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.popular ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {plan.description}
                </p>
                <div
                  className={`text-3xl font-bold ${
                    plan.popular ? 'text-amber-400' : 'text-[#1e3a5f]'
                  }`}
                >
                  {plan.range}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={17}
                      className={`mt-0.5 shrink-0 ${
                        plan.popular ? 'text-amber-400' : 'text-[#1e3a5f]'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-amber-500 hover:bg-amber-400 text-white hover:shadow-lg hover:shadow-amber-500/30'
                    : 'bg-[#1e3a5f] hover:bg-[#163050] text-white'
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
