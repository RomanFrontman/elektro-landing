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
    <section id="products" className="py-20 lg:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#ce0000] text-sm font-semibold uppercase tracking-widest mb-3">
            Асортимент
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Наша продукція
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
            Постачаємо широкий спектр промислового електротехнічного обладнання
            для будь-яких потреб вашого виробництва.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-7 rounded-xl bg-white/3 border border-white/8 hover:bg-white/6 hover:border-[#ce0000]/35 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ce0000]/5 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-[#ce0000]/10 flex items-center justify-center mb-5 group-hover:bg-[#ce0000]/20 transition-colors duration-300">
                <Icon className="text-[#ce0000]" size={24} />
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
