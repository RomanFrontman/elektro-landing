import { Shield, Award, CheckCircle, Handshake } from 'lucide-react'
import { Reveal } from './Reveal'

const values = [
  {
    icon: Shield,
    title: 'Надійність',
    description: 'Поставляємо лише сертифіковане обладнання від перевірених виробників.',
  },
  {
    icon: Award,
    title: 'Досвід',
    description: 'Понад 15 років роботи у сфері промислової електротехніки.',
  },
  {
    icon: CheckCircle,
    title: 'Якість',
    description: 'Кожна одиниця продукції проходить вхідний контроль якості.',
  },
  {
    icon: Handshake,
    title: 'Партнерство',
    description: 'Довгострокові відносини з клієнтами та постачальниками.',
  },
]

export const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-elevated overflow-hidden">

      {/* Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[22rem] leading-none text-watermark pointer-events-none select-none">
        2008
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: text ── */}
          <Reveal direction="left">
            <div className="red-line">
              <p className="font-mono text-[11px] text-[#ce0000] uppercase tracking-[0.25em] mb-4">
                Про компанію
              </p>
              <h2 className="font-condensed font-bold text-primary uppercase tracking-wide mb-6 font-semibold"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                ДК Електро-Захід
              </h2>
            </div>

            <div className="space-y-4 font-sans text-secondary leading-relaxed text-[15px] font-semibold">
              <p>
                ДК Електро-Захід — провідний постачальник промислового
                електротехнічного обладнання в Україні. Заснована у 2008 році у Львові,
                компанія спеціалізується на комплексному постачанні обладнання для
                автоматизації, водопостачання та електроживлення промислових об'єктів.
              </p>
              <p>
                Ми співпрацюємо з провідними європейськими та вітчизняними
                виробниками, що дозволяє нам пропонувати клієнтам оптимальне
                співвідношення ціни та якості. Наша команда інженерів та менеджерів
                завжди готова допомогти обрати правильне рішення для вашого проєкту.
              </p>
              <p>
                За роки роботи ми реалізували понад 1000 проєктів різної складності —
                від невеликих підприємств до великих промислових комплексів.
              </p>
            </div>

            {/* Badge */}
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 border border-[#ce0000]/25 bg-[#ce0000]/5 rounded-lg">
              <span className="font-display text-3xl text-[#ce0000] leading-none">2008</span>
              <div>
                <p className="font-mono text-[10px] text-t-muted uppercase tracking-widest">На ринку з</p>
                <p className="font-sans text-sm text-primary font-medium">15+ років досвіду</p>
              </div>
            </div>
          </Reveal>

          {/* ── Right: value cards ── */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="group h-full p-5 rounded-xl border border-theme bg-card hover:bg-card-hover hover:border-[#ce0000]/30 hover:shadow-lg hover:shadow-[#ce0000]/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#ce0000]/10 flex items-center justify-center mb-4 group-hover:bg-[#ce0000]/20 transition-colors duration-300">
                    <Icon className="text-[#ce0000]" size={20} />
                  </div>
                  <h3 className="font-condensed font-bold text-primary text-lg uppercase tracking-wide mb-2">
                    {title}
                  </h3>
                  <p className="font-sans text-t-muted text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
