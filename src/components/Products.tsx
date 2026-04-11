import { Wind, Cable, Zap, Activity, ToggleLeft, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'

const products = [
  {
    icon: Wind,
    title: 'Промислові вентилятори та насоси',
    items: [
      'Осьові, відцентрові та діагональні вентилятори',
      'Насосне обладнання для водопостачання',
      'Системи водовідведення та перекачування рідин',
    ],
  },
  {
    icon: Cable,
    title: 'Кабельно-провідникова продукція',
    items: [
      'Силові кабелі різних перерізів та марок',
      'Контрольні та сигнальні провідники',
      "Кабелі зв'язку та оптоволоконні лінії",
    ],
  },
  {
    icon: Zap,
    title: 'Трансформатори та вібратори',
    items: [
      'Силові та розподільчі трансформатори',
      'Автотрансформатори та стабілізатори напруги',
      'Промислові вібратори для ущільнення бетону',
    ],
  },
  {
    icon: Activity,
    title: 'Частотні перетворювачі',
    items: [
      'Регулювання швидкості електродвигунів',
      'Потужності від 0.4 до 630 кВт',
      'Моделі для складних умов експлуатації',
    ],
  },
  {
    icon: ToggleLeft,
    title: 'Контактна апаратура',
    items: [
      'Магнітні пускачі та контактори',
      'Реле захисту та автоматичні вимикачі',
      'Розподільчі щити та шинопроводи',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Станції управління та захисту',
    items: [
      'Шафи та пости оперативного управління',
      'Станції захисту електродвигунів',
      'Щити автоматизації та диспетчеризації',
    ],
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
            <p className="font-sans text-slate-400 text-sm max-w-xs leading-relaxed">
              Повний спектр промислового електротехнічного обладнання для будь-яких потреб виробництва.
            </p>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
          {products.map(({ icon: Icon, title, items }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="group h-full p-7 bg-[#080808] hover:bg-[#0f0f0f] hover:shadow-[inset_0_0_40px_rgba(206,0,0,0.04)] transition-all duration-300 cursor-default">

                {/* Icon row with red accent bar */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-1 self-stretch rounded-full bg-[#ce0000]/30 group-hover:bg-[#ce0000] transition-colors duration-300 shrink-0" />
                  <div className="w-11 h-11 rounded-lg bg-[#ce0000]/10 flex items-center justify-center group-hover:bg-[#ce0000]/20 transition-colors duration-300 shrink-0">
                    <Icon className="text-[#ce0000]" size={22} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-condensed font-bold text-white text-lg uppercase tracking-wide mb-4 leading-snug pl-5">
                  {title}
                </h3>

                {/* Bullet list */}
                <ul className="pl-5 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-[#ce0000]/50 group-hover:bg-[#ce0000]/80 transition-colors duration-300 shrink-0" />
                      <span className="font-sans text-sm text-slate-300 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
