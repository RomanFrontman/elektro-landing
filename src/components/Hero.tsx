import { Zap, ArrowRight } from 'lucide-react'

const stats = [
  { value: '15+', label: 'років досвіду' },
  { value: '500+', label: 'клієнтів' },
  { value: '1000+', label: 'проєктів' },
]

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red glow accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#ce0000]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#ce0000]/5 blur-3xl" />
      </div>

      {/* Large decorative lightning bolt */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
        <Zap
          size={520}
          className="text-white/[0.025] translate-x-24"
          strokeWidth={0.75}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ce0000]/10 border border-[#ce0000]/25 text-[#ce0000] text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Zap size={13} fill="currentColor" />
          Офіційний постачальник промислового обладнання
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.15] tracking-tight">
          Надійне промислове{' '}
          <span className="text-[#ce0000]">обладнання</span>{' '}
          для вашого бізнесу
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
          З 2008 року — комплексні рішення автоматизації та водопостачання
          для промислових підприємств України
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ce0000] hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#ce0000]/30 hover:-translate-y-0.5"
          >
            Переглянути продукцію
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/25 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5"
          >
            Зв'язатися з нами
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 mt-16 pb-12">
        <div className="border-t border-white/10 pt-10 grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#ce0000] mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
