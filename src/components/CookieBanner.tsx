import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X, ChevronDown, ChevronUp } from 'lucide-react'

type ConsentLevel = 'all' | 'necessary'

export const CookieBanner = () => {
  const [visible,    setVisible]    = useState(false)
  const [expanded,   setExpanded]   = useState(false)
  const [dismissed,  setDismissed]  = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = (level: ConsentLevel) => {
    localStorage.setItem('cookie-consent', level)
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setDismissed(true)
    setTimeout(() => setVisible(false), 400)
  }

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] transition-transform duration-500 ease-out ${
        dismissed ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Backdrop gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none -top-20" />

      <div className="relative bg-[#0f0f0f] border-t border-white/10 shadow-2xl shadow-black/80">

        {/* Red top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#ce0000] to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">

            {/* Icon + text */}
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#ce0000]/10 border border-[#ce0000]/20 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie className="text-[#ce0000]" size={18} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-condensed font-bold text-white text-base uppercase tracking-wide mb-1">
                  Ми використовуємо файли Cookie
                </p>
                <p className="font-sans text-slate-400 text-sm leading-relaxed">
                  Цей сайт використовує cookies для покращення вашого досвіду, аналізу трафіку та персоналізації контенту.
                  Ви можете прийняти всі cookies або лише необхідні.{' '}
                  <Link to="/cookie-policy"
                        className="text-[#ce0000] hover:text-red-400 underline underline-offset-2 transition-colors duration-200">
                    Дізнатися більше
                  </Link>
                </p>

                {/* Expanded details */}
                {expanded && (
                  <div className="mt-4 grid sm:grid-cols-3 gap-3">
                    {[
                      {
                        name: 'Необхідні',
                        desc: 'Забезпечують базову роботу сайту. Не можуть бути відключені.',
                        required: true,
                      },
                      {
                        name: 'Аналітичні',
                        desc: 'Допомагають нам розуміти, як відвідувачі використовують сайт (Google Analytics).',
                        required: false,
                      },
                      {
                        name: 'Маркетингові',
                        desc: 'Використовуються для показу релевантної реклами та відстеження ефективності кампаній.',
                        required: false,
                      },
                    ].map((cat) => (
                      <div key={cat.name}
                           className="p-3 rounded-lg border border-white/8 bg-white/[0.02]">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-condensed font-bold text-white text-sm uppercase tracking-wide">
                            {cat.name}
                          </span>
                          {cat.required && (
                            <span className="font-mono text-[9px] text-[#ce0000] uppercase tracking-wider">
                              Обов'язково
                            </span>
                          )}
                        </div>
                        <p className="font-sans text-slate-500 text-xs leading-relaxed">
                          {cat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-600 hover:text-slate-400 uppercase tracking-widest mt-2 transition-colors duration-200"
                >
                  {expanded ? <><ChevronUp size={12} /> Сховати деталі</> : <><ChevronDown size={12} /> Показати деталі</>}
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => accept('necessary')}
                className="px-5 py-2.5 border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-white text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap"
              >
                Тільки необхідні
              </button>
              <button
                onClick={() => accept('all')}
                className="px-5 py-2.5 bg-[#ce0000] hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30 whitespace-nowrap"
              >
                Прийняти всі
              </button>
            </div>

            {/* Close (necessary only shortcut) */}
            <button
              onClick={() => accept('necessary')}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-400 transition-colors duration-200 lg:static lg:shrink-0"
              aria-label="Закрити"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
