import { Star } from 'lucide-react'
import { Reveal } from './Reveal'

const testimonials = [
  {
    stars: 5,
    text: 'Співпрацюємо з ДК Електро-Захід вже понад 5 років. Завжди вчасна доставка, якісна продукція та чуйні менеджери. Рекомендуємо всім партнерам.',
    name: 'Іван Ковальчук',
    company: 'Директор ТОВ "Промтех-Захід"',
    initials: 'ІК',
  },
  {
    stars: 5,
    text: 'Замовляли частотні перетворювачі та контактну апаратуру для нового цеху. Технічний спеціаліст допоміг підібрати оптимальне рішення, зекономили значну суму.',
    name: 'Сергій Петренко',
    company: 'Технічний директор "Енерго-Систем"',
    initials: 'СП',
  },
  {
    stars: 5,
    text: 'Відмінний рівень сервісу та великий асортимент. Всі питання вирішуються оперативно, документація оформлена бездоганно. Дуже задоволені співпрацею.',
    name: 'Наталія Захаренко',
    company: 'Керівник проєктів "БудМонтаж"',
    initials: 'НЗ',
  },
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">

      {/* Large decorative quote marks */}
      <div className="absolute left-4 top-12 font-display text-[18rem] leading-none text-white/[0.015] pointer-events-none select-none">
        "
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="mb-14">
          <div className="red-line">
            <p className="font-mono text-[11px] text-[#ce0000] uppercase tracking-[0.25em] mb-4">
              Відгуки
            </p>
          </div>
          <h2 className="font-condensed font-bold text-white uppercase tracking-wide"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Відгуки клієнтів
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="group h-full flex flex-col p-7 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ce0000]/20 hover:shadow-xl hover:shadow-[#ce0000]/5 transition-all duration-300">

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#ce0000] fill-[#ce0000]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-sans text-slate-200 text-sm leading-relaxed flex-1 mb-6 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-white/8 flex items-center justify-center font-condensed font-bold text-white text-xs shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-condensed font-bold text-white text-sm uppercase tracking-wide">
                      {t.name}
                    </p>
                    <p className="font-mono text-[10px] text-slate-600 mt-0.5">
                      {t.company}
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
