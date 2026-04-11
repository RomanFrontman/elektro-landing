import { Reveal } from './Reveal'

const teamMembers = [
  {
    initials: 'ІЧ',
    name: 'Ігор Чаус',
    position: 'Директор',
    bio: 'Засновник та керівник компанії. Понад 20 років у галузі промислової електротехніки. Визначає стратегічний напрямок розвитку та відповідає за ключові партнерства.',
    accent: 'bg-[#ce0000]',
    textColor: 'text-white',
  },
  {
    initials: 'ОЗ',
    name: 'Олег Заліщук',
    position: 'Менеджер з продажу',
    bio: 'Керує відділом продажу та роботою з клієнтами. Спеціалізується на підборі обладнання та формуванні комплексних комерційних пропозицій.',
    accent: 'bg-white',
    textColor: 'text-black',
  },
  {
    initials: 'ОЧ',
    name: 'Олександра Чаус',
    position: 'Маркетолог, СММ спеціаліст',
    bio: 'Відповідає за маркетингову стратегію, просування компанії у соціальних мережах та створення контенту для залучення нових клієнтів.',
    accent: 'bg-zinc-700',
    textColor: 'text-white',
  },
  {
    initials: 'АШ',
    name: 'Андрій Шпак',
    position: 'Технічний спеціаліст',
    bio: "Інженер-електрик з досвідом роботи на промислових об'єктах. Консультує клієнтів щодо технічних характеристик та підбору обладнання.",
    accent: 'bg-zinc-800',
    textColor: 'text-white',
  },
  {
    initials: 'АП',
    name: 'Андрій Петеляк',
    position: 'Логістика та постачання',
    bio: 'Забезпечує своєчасне постачання та оптимізацію ланцюга поставок. Координує роботу з митними брокерами та перевізниками.',
    accent: 'bg-zinc-900',
    textColor: 'text-white',
  },
]

export const Team = () => {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">

      <div className="absolute right-0 bottom-0 font-display leading-none text-white/[0.015] pointer-events-none select-none"
           style={{ fontSize: '20rem' }}>
        05
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="mb-14">
          <div className="red-line">
            <p className="font-mono text-[11px] text-[#ce0000] uppercase tracking-[0.25em] mb-4">
              Люди
            </p>
          </div>
          <h2 className="font-condensed font-bold text-white uppercase tracking-wide"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Наша команда
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {teamMembers.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <div className="group h-full p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#ce0000]/25 hover:shadow-xl hover:shadow-[#ce0000]/5 transition-all duration-300 flex flex-col">
                <div
                  className={`w-12 h-12 ${m.accent} ${m.textColor} rounded-xl flex items-center justify-center font-condensed font-bold text-lg mb-5 group-hover:scale-105 transition-transform duration-300 shrink-0`}
                >
                  {m.initials}
                </div>
                <h3 className="font-condensed font-bold text-white text-base uppercase tracking-wide mb-0.5 leading-tight">
                  {m.name}
                </h3>
                <p className="font-mono text-[10px] text-[#ce0000] uppercase tracking-widest mb-4 leading-tight">
                  {m.position}
                </p>
                <p className="font-sans text-slate-500 text-sm leading-relaxed flex-1">
                  {m.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
