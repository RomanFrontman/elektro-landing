import { Wind, Cable, Zap, Activity, ToggleLeft, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'

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
    <section id="products" className="relative py-24 lg:py-32 bg-black overflow-hidden">

      {/* Watermark number */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 font-display leading-none text-white/[0.015] pointer-events-none select-none"
           style={{ fontSize: '28rem' }}>
        06
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <Reveal className="mb-14">
          <div className="red-line">
            <p className="font-mono text-[11px] text-[#ce0000] uppercase tracking-[0.25em] mb-4">
              Асортимент
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-condensed font-bold text-white uppercase tracking-wide"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              Наша продукція
            </h2>
            <p className="font-sans text-slate-500 text-sm max-w-xs leading-relaxed">
              Повний спектр промислового електротехнічного обладнання для будь-яких потреб виробництва.
            </p>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
          {products.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="group h-full p-7 bg-[#080808] hover:bg-[#0f0f0f] transition-all duration-300 cursor-default">
                {/* Red left accent */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-1 self-stretch rounded-full bg-[#ce0000]/30 group-hover:bg-[#ce0000] transition-colors duration-300 shrink-0" />
                  <div className="w-11 h-11 rounded-lg bg-[#ce0000]/10 flex items-center justify-center group-hover:bg-[#ce0000]/20 transition-colors duration-300">
                    <Icon className="text-[#ce0000]" size={22} />
                  </div>
                </div>
                <h3 className="font-condensed font-bold text-white text-lg uppercase tracking-wide mb-2 leading-snug pl-5">
                  {title}
                </h3>
                <p className="font-sans text-slate-500 text-sm leading-relaxed pl-5 group-hover:text-slate-400 transition-colors duration-300">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
