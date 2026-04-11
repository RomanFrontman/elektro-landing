import { Star, Quote } from 'lucide-react'

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
    <section id="testimonials" className="py-20 lg:py-28 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Відгуки
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Відгуки клієнтів
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Нам довіряють сотні підприємств по всій Україні. Ось що вони кажуть про нашу роботу.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/8 rounded-xl p-7 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <Quote className="text-amber-500/40" size={28} />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
