import { useState, useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X, ChevronDown, ChevronUp, Shield, BarChart2, Megaphone } from 'lucide-react'

interface Preferences {
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'cookie-consent'
const DATE_KEY    = 'cookie-consent-date'

function loadPrefs(): Preferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    // backwards compat with old string format
    if (raw === 'all')       return { analytics: true,  marketing: true  }
    if (raw === 'necessary') return { analytics: false, marketing: false }
    return JSON.parse(raw) as Preferences
  } catch {
    return null
  }
}

function savePrefs(prefs: Preferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  localStorage.setItem(DATE_KEY, new Date().toISOString())
}

// ─── Toggle ─────────────────────────────────────────────────────────────────
const Toggle = ({
  checked,
  onChange,
  disabled = false,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  disabled?: boolean
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={() => !disabled && onChange(!checked)}
    className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ce0000]/40
      ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      ${checked ? 'bg-[#ce0000]' : 'bg-white/15'}`}
  >
    <span
      className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-300
        ${checked ? 'translate-x-6' : 'translate-x-1'}`}
    />
  </button>
)

// ─── Category row ────────────────────────────────────────────────────────────
const CategoryRow = ({
  icon,
  title,
  description,
  details,
  checked,
  onChange,
  disabled = false,
  badge,
}: {
  icon: ReactNode
  title: string
  description: string
  details: string
  checked: boolean
  onChange: (v: boolean) => void
  disabled?: boolean
  badge?: string
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-white/8 rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 p-4">
        <div className="shrink-0 w-9 h-9 rounded-lg bg-[#ce0000]/8 border border-[#ce0000]/15 flex items-center justify-center text-[#ce0000]">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-condensed font-bold text-white text-sm uppercase tracking-wide">
              {title}
            </span>
            {badge && (
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-full bg-[#ce0000]/15 text-[#ce0000] border border-[#ce0000]/20 uppercase tracking-wide">
                {badge}
              </span>
            )}
          </div>
          <p className="font-sans text-xs text-slate-500 mt-0.5 leading-snug">{description}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Toggle checked={checked} onChange={onChange} disabled={disabled} />
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            className="text-slate-600 hover:text-slate-400 transition-colors duration-200"
            aria-label="Деталі"
          >
            {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </div>
      {open && (
        <p className="px-4 pb-4 text-xs text-slate-500 leading-relaxed border-t border-white/8 pt-3">
          {details}
        </p>
      )}
    </div>
  )
}

// ─── Main ────────────────────────────────────────────────────────────────────
export const CookieBanner = () => {
  const [view, setView]           = useState<'banner' | 'preferences' | 'hidden'>('hidden')
  const [showFloat, setShowFloat] = useState(false)
  const [dismissing, setDismissing] = useState(false)
  const [prefs, setPrefs]         = useState<Preferences>({ analytics: true, marketing: true })

  useEffect(() => {
    const saved = loadPrefs()
    if (saved) {
      setPrefs(saved)
      setShowFloat(true)
    } else {
      const t = setTimeout(() => setView('banner'), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const dismiss = (savedPrefs: Preferences) => {
    savePrefs(savedPrefs)
    setDismissing(true)
    setTimeout(() => {
      setView('hidden')
      setShowFloat(true)
      setDismissing(false)
    }, 450)
  }

  const acceptAll  = () => dismiss({ analytics: true,  marketing: true  })
  const declineAll = () => dismiss({ analytics: false, marketing: false })
  const saveCustom = () => dismiss(prefs)

  const openPreferences = () => {
    setShowFloat(false)
    setView('preferences')
  }

  return (
    <>
      {/* ── Floating cookie button ─────────────────────────────────────── */}
      {showFloat && view === 'hidden' && (
        <button
          onClick={openPreferences}
          title="Налаштування cookies"
          className="fixed bottom-6 right-6 z-[100] w-11 h-11 rounded-full bg-[#ce0000] hover:bg-red-700 flex items-center justify-center shadow-lg shadow-[#ce0000]/25 hover:scale-110 transition-all duration-300"
        >
          <Cookie size={18} className="text-white" />
        </button>
      )}

      {/* ── Simple banner ─────────────────────────────────────────────── */}
      {view === 'banner' && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-[100] transition-transform duration-500 ease-out ${
            dismissing ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          <div className="relative bg-[#0f0f0f] border-t border-white/10 shadow-2xl shadow-black/80">
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
                      Цей сайт використовує cookies для покращення вашого досвіду та аналізу трафіку.{' '}
                      <Link
                        to="/cookie-policy"
                        className="text-[#ce0000] hover:text-red-400 underline underline-offset-2 transition-colors duration-200"
                      >
                        Дізнатися більше
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0 w-full lg:w-auto">
                  <button
                    onClick={openPreferences}
                    className="px-5 py-2.5 border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-white text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap"
                  >
                    Налаштувати
                  </button>
                  <button
                    onClick={declineAll}
                    className="px-5 py-2.5 border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-white text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap"
                  >
                    Тільки необхідні
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 bg-[#ce0000] hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30 whitespace-nowrap"
                  >
                    Прийняти всі
                  </button>
                </div>

                {/* Close */}
                <button
                  onClick={declineAll}
                  className="absolute top-4 right-4 text-slate-600 hover:text-slate-400 transition-colors duration-200 lg:static lg:shrink-0"
                  aria-label="Закрити"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Preferences modal ─────────────────────────────────────────── */}
      {view === 'preferences' && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              dismissing ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={saveCustom}
          />

          {/* Panel */}
          <div
            className={`fixed z-[100] bottom-0 left-0 right-0 sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-[calc(100%-2rem)] sm:max-w-lg transition-all duration-300 ${
              dismissing ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={dismissing ? undefined : { animation: 'fadeInUp 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            <div className="bg-[#0f0f0f] border border-white/10 rounded-t-3xl sm:rounded-2xl shadow-2xl shadow-black/80 p-6">

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ce0000]/10 border border-[#ce0000]/20 flex items-center justify-center">
                    <Cookie size={16} className="text-[#ce0000]" />
                  </div>
                  <div>
                    <h3 className="font-condensed font-bold text-white text-base uppercase tracking-wide leading-none">
                      Налаштування Cookies
                    </h3>
                    <p className="font-sans text-xs text-slate-500 mt-1">
                      Оберіть, які дані дозволяєте збирати.{' '}
                      <Link
                        to="/cookie-policy"
                        className="text-[#ce0000] hover:text-red-400 underline underline-offset-2 transition-colors"
                      >
                        Детальніше
                      </Link>
                    </p>
                  </div>
                </div>
                <button
                  onClick={saveCustom}
                  className="text-slate-600 hover:text-slate-400 transition-colors duration-200 p-1"
                  aria-label="Закрити"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Category rows */}
              <div className="space-y-3 mb-5">
                <CategoryRow
                  icon={<Shield size={14} />}
                  title="Необхідні"
                  description="Обов'язкові для роботи сайту"
                  details="Зберігають ваш вибір щодо cookies та дату надання згоди (cookie-consent, cookie-consent-date). Не можуть бути відключені — без них функціонал згоди не працює."
                  checked={true}
                  onChange={() => {}}
                  disabled={true}
                  badge="Завжди увімкнено"
                />
                <CategoryRow
                  icon={<BarChart2 size={14} />}
                  title="Аналітичні"
                  description="Анонімний аналіз відвідуваності"
                  details="Google Analytics (_ga, _gid, _gat) збирає анонімні дані: переглянуті сторінки, тривалість сесії, джерело трафіку. Допомагає покращити сайт. Жодних персональних даних не передається."
                  checked={prefs.analytics}
                  onChange={v => setPrefs(p => ({ ...p, analytics: v }))}
                />
                <CategoryRow
                  icon={<Megaphone size={14} />}
                  title="Маркетингові"
                  description="Персоналізована реклама та ретаргетинг"
                  details="Facebook Pixel (_fbp) та Google Ads (IDE) відстежують конверсії для показу релевантної реклами. Дані можуть передаватися платформам Meta та Google."
                  checked={prefs.marketing}
                  onChange={v => setPrefs(p => ({ ...p, marketing: v }))}
                />
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={acceptAll}
                  className="flex-1 px-4 py-2.5 bg-[#ce0000] hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/20"
                >
                  Прийняти всі
                </button>
                <button
                  onClick={saveCustom}
                  className="flex-1 px-4 py-2.5 border border-white/12 hover:border-white/22 bg-white/[0.03] hover:bg-white/[0.06] text-white text-sm font-semibold rounded-xl transition-all duration-300"
                >
                  Зберегти вибір
                </button>
                <button
                  onClick={declineAll}
                  className="flex-1 px-4 py-2.5 border border-white/12 hover:border-white/22 bg-white/[0.03] hover:bg-white/[0.06] text-white text-sm font-semibold rounded-xl transition-all duration-300"
                >
                  Відмовитись
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
