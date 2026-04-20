import { Wind, Cable, Zap, Activity, ToggleLeft, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'
import fanImg        from '../assets/ventilyator-vc-4-75-25-vr-89-75-vr-88-72-vr-80-75-vr-86-77-037kvt-3000-obkhv.webp'
import converterImg  from '../assets/chastotnic.300x300.png'
import reducerImg    from '../assets/reduktor_motorreduktor.300x300.png'
import motorImg      from '../assets/ms-56-3-4-elektrodvigun-b3-012-kvt-1360-obkhv.jpg'

const showcase = [
  { img: fanImg,       name: 'Промислові вентилятори', sub: 'від 0.37 кВт · 3000 об/хв' },
  { img: converterImg, name: 'Частотні перетворювачі', sub: 'від 0.4 до 630 кВт'         },
  { img: reducerImg,   name: 'Мотор-редуктори',        sub: 'широкий асортимент'          },
  { img: motorImg,     name: 'Електродвигуни',          sub: 'від 0.09 кВт · серія MS'    },
]

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
        <Reveal className="mb-10">
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
            <p className="font-sans text-slate-200 text-sm max-w-xs leading-relaxed">
              Повний спектр промислового електротехнічного обладнання для будь-яких потреб виробництва.
            </p>
          </div>
        </Reveal>

        {/* ── Product photo showcase ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {showcase.map(({ img, name, sub }, i) => (
            <Reveal key={name} delay={i * 60}>
              <div
                data-theme-locked
                className="group relative overflow-hidden rounded-xl aspect-square cursor-default"
                style={{ background: '#0d0d0d' }}
              >
                {/* Red corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 z-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#ce0000]" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-[#ce0000]" />
                </div>

                {/* Product image */}
                <img
                  src={img}
                  alt={name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />

                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <p className="font-condensed font-bold text-white text-sm uppercase tracking-wide leading-tight">
                    {name}
                  </p>
                  <p className="font-mono text-[10px] text-slate-500 mt-0.5 tracking-wider">
                    {sub}
                  </p>
                </div>

                {/* Hover red glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                     style={{ boxShadow: 'inset 0 0 40px rgba(206,0,0,0.08)' }} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Category cards grid */}
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
