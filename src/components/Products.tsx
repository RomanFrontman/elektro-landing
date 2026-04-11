import { Wind, Cable, Zap, Activity, ToggleLeft, ShieldCheck } from 'lucide-react'

const products = [
  {
    icon: Wind,
    title: 'Промислові вентилятори та насоси',
    description:
      'Осьові, відцентрові та діагональні вентилятори. Насосне обладнання для водопостачання та водовідведення.',
  },
  {
    icon: Cable,
    title: 'Кабельно-провідникова продукція',
    description:
      "Силові кабелі, контрольні та сигнальні провідники, кабелі зв'язку та оптоволоконні лінії.",
  },
  {
    icon: Zap,
    title: 'Трансформатори та вібратори',
    description:
      'Силові трансформатори, автотрансформатори та промислові вібратори для ущільнення бетону.',
  },
  {
    icon: Activity,
    title: 'Частотні перетворювачі',
    description:
      'Перетворювачі частоти для регулювання швидкості електродвигунів у широкому діапазоні потужностей.',
  },
  {
    icon: ToggleLeft,
    title: 'Контактна апаратура',
    description:
      'Магнітні пускачі, контактори, реле, автоматичні вимикачі та розподільчі щити.',
  },
  {
    icon: ShieldCheck,
    title: 'Станції управління та захисту',
    description:
      'Шафи та пости управління, станції захисту електродвигунів, щити автоматизації.',
  },
]

export const Products = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Асортимент
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Наша продукція
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Постачаємо широкий спектр промислового електротехнічного обладнання
            для будь-яких потреб вашого виробництва.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-7 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-500/15 flex items-center justify-center mb-5 group-hover:bg-amber-500/25 transition-colors duration-300">
                <Icon className="text-amber-400" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-3 leading-snug">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
