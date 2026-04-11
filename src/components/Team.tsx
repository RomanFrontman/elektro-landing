import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, User } from 'lucide-react'
import { Reveal } from './Reveal'

const teamMembers = [
  {
    initials: 'ІЧ',
    name: 'Ігор Чаус',
    position: 'Директор',
    bio: 'Співзасновник та керівник компанії. Понад 20 років у галузі промислової електротехніки. Визначає стратегічний напрямок розвитку та відповідає за ключові партнерства.',
    accent: 'bg-[#ce0000]',
    textColor: 'text-white',
    glowColor: 'bg-[#ce0000]/8',
  },
  {
    initials: 'ОЗ',
    name: 'Олег Заліщук',
    position: 'Менеджер з продажу',
    bio: 'Співзасновник, керівник відділу продажу та роботи з клієнтами. Спеціалізується на підборі обладнання та формуванні комплексних комерційних пропозицій.',
    accent: 'bg-white',
    textColor: 'text-black',
    glowColor: 'bg-white/5',
  },
  {
    initials: 'ОЧ',
    name: 'Олександра Чаус',
    position: 'Маркетолог, СММ спеціаліст',
    bio: 'Відповідає за маркетингову стратегію, просування компанії у соціальних мережах та створення контенту для залучення нових клієнтів.',
    accent: 'bg-zinc-600',
    textColor: 'text-white',
    glowColor: 'bg-white/3',
  },
  {
    initials: 'АШ',
    name: 'Андрій Шпак',
    position: 'Технічний спеціаліст',
    bio: "Інженер-електрик з досвідом роботи на промислових об'єктах. Консультує клієнтів щодо технічних характеристик та підбору обладнання.",
    accent: 'bg-zinc-700',
    textColor: 'text-white',
    glowColor: 'bg-white/3',
  },
  {
    initials: 'АП',
    name: 'Андрій Петеляк',
    position: 'Логістика та постачання',
    bio: 'Забезпечує своєчасне постачання та оптимізацію ланцюга поставок. Координує роботу з митними брокерами та перевізниками.',
    accent: 'bg-zinc-800',
    textColor: 'text-white',
    glowColor: 'bg-white/3',
  },
]

export const Team = () => {
  const trackRef        = useRef<HTMLDivElement>(null)
  const isProgrammatic  = useRef(false)
  const rafRef          = useRef(0)
  const [current, setCurrent] = useState(0)
  const [atEnd, setAtEnd]     = useState(false)


  // Sync dots via scroll event (fires on touch swipe too).
  // Skipped while a programmatic goTo is animating to avoid fighting.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const sync = () => {
      if (isProgrammatic.current) return
      const cards = Array.from(track.querySelectorAll('[data-card]')) as HTMLElement[]
      const center = track.scrollLeft + track.clientWidth / 2
      let closest = 0, minDist = Infinity
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      setCurrent(closest)
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 6)
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(sync)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const cards = Array.from(track.querySelectorAll('[data-card]')) as HTMLElement[]
    const i = Math.max(0, Math.min(index, cards.length - 1))
    const card = cards[i] as HTMLElement | undefined
    if (!card) return

    // Lock out the scroll-event sync until animation settles (~600 ms)
    isProgrammatic.current = true
    clearTimeout(rafRef.current)          // reuse ref as timer id (number)
    rafRef.current = window.setTimeout(() => { isProgrammatic.current = false }, 620)

    track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
    setCurrent(i)
    setAtEnd(card.offsetLeft + track.clientWidth >= track.scrollWidth - 6)
  }

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

        {/* Carousel */}
        <div className="relative">

          {/* Clip wrapper — no negative margin, no extra padding */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {teamMembers.map((m) => (
                <div
                  key={m.name}
                  data-card
                  className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.5px)]"
                >
                  <div className="group h-full p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ce0000]/25 hover:shadow-xl hover:shadow-[#ce0000]/5 transition-all duration-300 flex flex-col">

                    {/* Photo placeholder */}
                    <div className="w-full aspect-[4/3] rounded-xl border border-white/8 bg-white/[0.02] flex flex-col items-center justify-center mb-5 overflow-hidden relative">
                      <div className={`absolute inset-0 ${m.glowColor}`} />
                      <div className={`relative w-20 h-20 rounded-full ${m.accent} ${m.textColor} flex items-center justify-center font-condensed font-bold text-3xl mb-3 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                        {m.initials}
                      </div>
                      <div className="relative flex items-center gap-1.5">
                        <User size={10} className="text-slate-700" />
                        <span className="font-mono text-[9px] text-slate-700 uppercase tracking-[0.2em]">
                          Фото незабаром
                        </span>
                      </div>
                    </div>

                    {/* Info */}
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
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {teamMembers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Слайд ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-[#ce0000] w-6 h-1.5'
                      : 'bg-white/20 w-1.5 h-1.5 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => goTo(current - 1)}
                disabled={current === 0}
                aria-label="Попередній"
                className="w-10 h-10 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#ce0000]/25 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => goTo(current + 1)}
                disabled={atEnd}
                aria-label="Наступний"
                className="w-10 h-10 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#ce0000]/25 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
