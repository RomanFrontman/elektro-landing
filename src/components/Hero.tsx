import { Zap, ArrowRight, ChevronDown } from 'lucide-react'


const stats = [
  { value: '15+',   label: 'РОКІВ ДОСВІДУ' },
  { value: '500+',  label: 'КЛІЄНТІВ' },
  { value: '1000+', label: 'ПРОЄКТІВ' },
]

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-base overflow-hidden noise">

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-100 pointer-events-none" />

      {/* Red glow — top right */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#ce0000]/8 blur-[140px] pointer-events-none" />

      {/* Red glow — bottom left */}
      <div className="absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-[#ce0000]/5 blur-[100px] pointer-events-none" />

      {/* Decorative bolt */}
      <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden">
        <Zap
          size={680}
          strokeWidth={0.6}
          className="text-watermark translate-x-[28%]"
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 pt-28 pb-10">

        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 font-mono text-[11px] text-t-muted uppercase tracking-[0.25em] mb-12">
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[#ce0000] shrink-0" />
          З 2008 року · Офіційний постачальник · Україна
        </div>

        {/* Headline */}
        <h1 className="hero-title font-display leading-[0.88] tracking-tight pb-4">
          <span className="block text-primary font-semibold"
                style={{ fontSize: 'clamp(3rem, 11vw, 8.5rem)' }}>
            НАДІЙНЕ
          </span>
          <span className="block text-[#ce0000] font-semibold"
                style={{ fontSize: 'clamp(3rem, 11vw, 8.5rem)' }}>
            ПРОМИСЛОВЕ
          </span>
          <span className="block text-primary font-semibold"
                style={{ fontSize: 'clamp(3rem, 11vw, 8.5rem)' }}>
            ОБЛАДНАННЯ
          </span>
        </h1>

        {/* Subheading */}
        <p className="hero-sub font-sans text-base sm:text-lg text-secondary max-w-lg mx-auto leading-relaxed pb-4">
          Комплексні рішення автоматизації та водопостачання
          для промислових підприємств України
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ce0000] hover:bg-red-700 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#ce0000]/30 hover:-translate-y-0.5"
          >
            Переглянути продукцію
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-theme-3 hover:border-theme-2 text-primary font-semibold text-sm rounded-lg transition-all duration-300 hover:bg-dim"
          >
            Зв'язатися з нами
          </a>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="hero-stats relative z-10 border-t border-theme bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-3 divide-x divide-theme">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-4">
              <span className="font-display text-4xl sm:text-5xl text-[#ce0000] leading-none">
                {s.value}
              </span>
              <span className="font-mono text-[10px] text-subtle tracking-[0.2em]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 text-faint hover:text-subtle transition-colors duration-300"
        aria-label="Прокрутити вниз"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
