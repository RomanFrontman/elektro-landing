import { useState, useMemo } from 'react'
import { ChevronRight, RotateCcw, CheckCircle2 } from 'lucide-react'
import { Reveal } from './Reveal'
import { Link } from 'react-router-dom'

// ─── Data ────────────────────────────────────────────────────────────────────

type Product = {
  series: string
  faza: number
  voltage: string
  rpm: number
  kw: number
  mounting: string
  model: string
  price: number
}

const PRODUCTS: Product[] = [
  // MS Promotor — 3ф 380В — 3000 об/хв
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:0.09,  mounting:'B3',     model:'MS 56 1-2',    price:53.60  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:0.12,  mounting:'B3',     model:'MS 56 2-2',    price:53.60  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:0.18,  mounting:'B3',     model:'MS 56 3-2',    price:55.47  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:0.18,  mounting:'B3',     model:'MS 63 1-2',    price:64.00  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:0.25,  mounting:'B3',     model:'MS 63 2-2',    price:67.52  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:0.37,  mounting:'B3',     model:'MS 63 3-2',    price:62.83  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:0.37,  mounting:'B3',     model:'MS 71 1-2',    price:69.60  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:0.55,  mounting:'B3',     model:'MS 71 2-2',    price:79.00  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:0.74,  mounting:'B3',     model:'MS 71 3-2',    price:85.60  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:0.75,  mounting:'B3',     model:'MS 80 1-2',    price:96.00  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:1.1,   mounting:'B3',     model:'MS 80 2-2',    price:91.95  },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:1.5,   mounting:'B3',     model:'MS 80 3-2',    price:110.67 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:1.5,   mounting:'B3',     model:'MS 90S-2',     price:122.40 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:2.2,   mounting:'B3',     model:'MS 90L 1-2',   price:134.40 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:3.0,   mounting:'B3',     model:'MS 90L 2-2',   price:160.00 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:3.0,   mounting:'B3',     model:'MS 100L1-2',   price:184.00 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:4.0,   mounting:'B3',     model:'MS 100L2-2',   price:203.20 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:4.0,   mounting:'B3',     model:'MS 112M-2',    price:248.80 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:5.5,   mounting:'B3',     model:'MS 112L-2',    price:266.40 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:5.5,   mounting:'B3',     model:'MS 132S1-2',   price:392.00 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:7.5,   mounting:'B3',     model:'MS 132S2-2',   price:400.80 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:11,    mounting:'B3',     model:'MS 132M2-2',   price:501.60 },
  { series:'MS', faza:3, voltage:'380В', rpm:3000, kw:15,    mounting:'B3',     model:'MS 132L-2',    price:536.00 },
  { series:'MS', faza:3, voltage:'380В', rpm:1500, kw:0.06,  mounting:'B3',     model:'MS 56 1-4',    price:54.40  },
  { series:'MS', faza:3, voltage:'380В', rpm:1500, kw:0.09,  mounting:'B3',     model:'MS 56 2-4',    price:54.40  },
  { series:'MS', faza:3, voltage:'380В', rpm:1000, kw:0.09,  mounting:'B3',     model:'MS 63 1-6',    price:64.00  },
  { series:'MS', faza:3, voltage:'380В', rpm:1000, kw:0.12,  mounting:'B3',     model:'MS 63 2-6',    price:69.00  },
  // YX3
  { series:'YX3', faza:3, voltage:'380В', rpm:3000, kw:11,   mounting:'B3',     model:'YX3 160M1-2',  price:640.80 },
  { series:'YX3', faza:3, voltage:'380В', rpm:3000, kw:18.5, mounting:'B3',     model:'YX3 160L-2',   price:734.93 },
  { series:'YX3', faza:3, voltage:'380В', rpm:1500, kw:11,   mounting:'B3',     model:'YX3 160M-4',   price:676.00 },
  { series:'YX3', faza:3, voltage:'380В', rpm:1500, kw:15,   mounting:'B3',     model:'YX3 160L-4',   price:811.12 },
  { series:'YX3', faza:3, voltage:'380В', rpm:1000, kw:7.5,  mounting:'B3',     model:'YX3 160M-6',   price:676.00 },
  { series:'YX3', faza:3, voltage:'380В', rpm:1000, kw:11,   mounting:'B3',     model:'YX3 160L-6',   price:832.00 },
  // MSH
  { series:'MSH', faza:3, voltage:'380В', rpm:3000, kw:0.18, mounting:'B3',     model:'MSH 63 1-2',   price:151.29 },
  { series:'MSH', faza:3, voltage:'380В', rpm:3000, kw:0.25, mounting:'B3',     model:'MSH 63 2-2',   price:155.53 },
  // ML
  { series:'ML',  faza:1, voltage:'220В', rpm:1500, kw:0.18, mounting:'B3',     model:'ML 63 2-4',    price:92.00  },
  { series:'ML',  faza:1, voltage:'220В', rpm:1500, kw:0.25, mounting:'B3',     model:'ML 71 1-4',    price:94.00  },
  // АИР
  { series:'АИР', faza:1, voltage:'220В', rpm:3000, kw:0.75, mounting:'B3',     model:'АИ1Е 71 А2 В2',     price:126.74 },
  { series:'АИР', faza:1, voltage:'220В', rpm:3000, kw:0.75, mounting:'B3+Ф',   model:'АИ1Е 71 А2 (Л/Ф)',  price:132.25 },
  { series:'АИР', faza:3, voltage:'220/380В', rpm:3000, kw:0.75, mounting:'B3', model:'АИР 71 А2 В2',      price:93.43  },
  { series:'АИР', faza:3, voltage:'220/380В', rpm:3000, kw:0.75, mounting:'B3+Ф', model:'АИР 71 А2 (Л/Ф)', price:95.00  },
  // MSC
  { series:'MSC', faza:3, voltage:'380В', rpm:3000, kw:1.5,  mounting:'спец.',  model:'MSC 58 1-2',   price:153.00 },
  { series:'MSC', faza:3, voltage:'380В', rpm:3000, kw:2.2,  mounting:'спец.',  model:'MSC 58 2-2',   price:163.00 },
]

const SERIES_INFO: Record<string, { label: string; desc: string }> = {
  MS:  { label: 'MS Promotor',      desc: 'Загальнопром. 3ф, алюм. корпус' },
  YX3: { label: 'YX3 Promotor',     desc: 'Потужні 3ф, 11–55 кВт' },
  MSH: { label: 'MSH Promotor',     desc: 'З вбудованим гальмом, 3ф' },
  ML:  { label: 'ML Promotor',      desc: 'Однофазні 220В' },
  АИР: { label: 'АИР Промелектро',  desc: '1ф і 3ф, Харків' },
  MSC: { label: 'MSC деревообробка',desc: 'Спец. кріплення під пилу' },
}

const MOUNT_LABEL: Record<string, string> = {
  'B3':     'B3 — лапи',
  'B3+Ф':   'B3+Ф — лапи + фланець',
  'спец.':  'спец. — кріплення під пилу',
}

const RPM_LABEL: Record<number, string> = {
  3000: '2 пари полюсів',
  1500: '4 пари полюсів',
  1000: '6 пар полюсів',
}

function uniq<T>(arr: T[]): T[] { return [...new Set(arr)] }

// ─── Component ───────────────────────────────────────────────────────────────

export const Calculator = () => {
  const [series,   setSeries]   = useState<string | null>(null)
  const [rpm,      setRpm]      = useState<number | null>(null)
  const [kw,       setKw]       = useState<number | null>(null)
  const [mounting, setMounting] = useState<string | null>(null)

  const seriesList  = useMemo(() => uniq(PRODUCTS.map(p => p.series)), [])

  const rpmList     = useMemo(() =>
    series ? uniq(PRODUCTS.filter(p => p.series === series).map(p => p.rpm)).sort((a,b) => b-a) : [],
  [series])

  const kwList      = useMemo(() =>
    series && rpm != null
      ? uniq(PRODUCTS.filter(p => p.series === series && p.rpm === rpm).map(p => p.kw)).sort((a,b) => a-b)
      : [],
  [series, rpm])

  const mountingList = useMemo(() =>
    series && rpm != null && kw != null
      ? uniq(PRODUCTS.filter(p => p.series === series && p.rpm === rpm && p.kw === kw).map(p => p.mounting))
      : [],
  [series, rpm, kw])

  const results = useMemo(() =>
    series && rpm != null && kw != null && mounting
      ? PRODUCTS.filter(p => p.series === series && p.rpm === rpm && p.kw === kw && p.mounting === mounting)
      : [],
  [series, rpm, kw, mounting])

  function reset(from: 'series' | 'rpm' | 'kw' | 'mounting') {
    if (from === 'series')   { setSeries(null); setRpm(null); setKw(null); setMounting(null) }
    if (from === 'rpm')      {                  setRpm(null); setKw(null); setMounting(null) }
    if (from === 'kw')       {                               setKw(null); setMounting(null) }
    if (from === 'mounting') {                                             setMounting(null) }
  }

  const step = !series ? 1 : rpm == null ? 2 : kw == null ? 3 : mounting == null ? 4 : 5

  const btnBase =
    'rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-left ' +
    'hover:border-[#ce0000]/40 hover:bg-[#ce0000]/5 transition-all duration-200 cursor-pointer'

  return (
    <section id="calculator" className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">

      {/* faint watermark */}
      <div
        className="absolute left-0 bottom-0 font-condensed font-bold leading-none text-white/[0.015] pointer-events-none select-none"
        style={{ fontSize: '20rem' }}
      >
        кВт
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="mb-14">
          <div className="red-line">
            <p className="font-mono text-[11px] text-[#ce0000] uppercase tracking-[0.25em] mb-4">
              Калькулятор
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-condensed font-bold text-white uppercase tracking-wide"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Підберіть двигун
            </h2>
            <p className="font-sans text-slate-500 text-sm max-w-xs leading-relaxed">
              Оберіть параметри — отримайте модель та ціну. Ціни вказані в USD.
            </p>
          </div>
        </Reveal>

        {/* Progress bar */}
        <Reveal className="mb-10">
          <div className="flex items-center gap-2">
            {[1,2,3,4].map((n) => {
              const done    = step > n
              const active  = step === n
              return (
                <div key={n} className="flex items-center gap-2 flex-1 last:flex-none">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-mono text-xs font-medium transition-all duration-300 ${
                    done   ? 'bg-[#ce0000] border border-[#ce0000] text-white'
                    : active ? 'bg-[#ce0000]/10 border border-[#ce0000]/50 text-[#ce0000]'
                    : 'bg-white/[0.03] border border-white/10 text-slate-600'
                  }`}>
                    {done ? <CheckCircle2 size={14} /> : n}
                  </div>
                  {n < 4 && (
                    <div className={`h-px flex-1 transition-all duration-500 ${step > n ? 'bg-[#ce0000]/50' : 'bg-white/8'}`} />
                  )}
                </div>
              )
            })}
          </div>
          <div className="flex justify-between mt-2 px-0.5">
            {['Серія','Оберти','Потужність','Кріплення'].map((label, i) => (
              <p key={label} className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                step === i+1 ? 'text-[#ce0000]' : step > i+1 ? 'text-slate-500' : 'text-slate-700'
              }`}>{label}</p>
            ))}
          </div>
        </Reveal>

        {/* ── Step 1: Series ── */}
        <Reveal className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
              Крок 1 — Серія двигуна
            </p>
            {series && (
              <button onClick={() => reset('series')}
                className="flex items-center gap-1.5 font-mono text-[10px] text-slate-600 hover:text-slate-300 uppercase tracking-widest transition-colors duration-200">
                <RotateCcw size={11} /> Скинути
              </button>
            )}
          </div>

          {series ? (
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#ce0000]/30 bg-[#ce0000]/5">
              <span className="font-sans text-white text-sm font-medium">{SERIES_INFO[series].label}</span>
              <span className="font-sans text-slate-500 text-xs">{SERIES_INFO[series].desc}</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {seriesList.map((s) => (
                <button key={s} className={btnBase} onClick={() => { reset('series'); setSeries(s) }}>
                  <p className="font-sans text-white text-sm font-medium mb-0.5">{SERIES_INFO[s].label}</p>
                  <p className="font-sans text-slate-500 text-xs leading-snug">{SERIES_INFO[s].desc}</p>
                </button>
              ))}
            </div>
          )}
        </Reveal>

        {/* ── Step 2: RPM ── */}
        {series && (
          <Reveal className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
                Крок 2 — Швидкість обертання
              </p>
              {rpm != null && (
                <button onClick={() => reset('rpm')}
                  className="flex items-center gap-1.5 font-mono text-[10px] text-slate-600 hover:text-slate-300 uppercase tracking-widest transition-colors duration-200">
                  <RotateCcw size={11} /> Змінити
                </button>
              )}
            </div>

            {rpm != null ? (
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#ce0000]/30 bg-[#ce0000]/5">
                <span className="font-sans text-white text-sm font-medium">{rpm.toLocaleString()} об/хв</span>
                <span className="font-sans text-slate-500 text-xs">{RPM_LABEL[rpm]}</span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {rpmList.map((r) => (
                  <button key={r} className={btnBase} onClick={() => { reset('rpm'); setRpm(r) }}>
                    <p className="font-sans text-white text-sm font-medium">{r.toLocaleString()} об/хв</p>
                    <p className="font-sans text-slate-500 text-xs">{RPM_LABEL[r] ?? ''}</p>
                  </button>
                ))}
              </div>
            )}
          </Reveal>
        )}

        {/* ── Step 3: kW ── */}
        {series && rpm != null && (
          <Reveal className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
                Крок 3 — Потужність (кВт)
              </p>
              {kw != null && (
                <button onClick={() => reset('kw')}
                  className="flex items-center gap-1.5 font-mono text-[10px] text-slate-600 hover:text-slate-300 uppercase tracking-widest transition-colors duration-200">
                  <RotateCcw size={11} /> Змінити
                </button>
              )}
            </div>

            {kw != null ? (
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#ce0000]/30 bg-[#ce0000]/5">
                <span className="font-sans text-white text-sm font-medium">{kw} кВт</span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {kwList.map((k) => (
                  <button key={k}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 font-sans text-sm text-white hover:border-[#ce0000]/40 hover:bg-[#ce0000]/5 transition-all duration-200 cursor-pointer"
                    onClick={() => { reset('kw'); setKw(k) }}>
                    {k} кВт
                  </button>
                ))}
              </div>
            )}
          </Reveal>
        )}

        {/* ── Step 4: Mounting ── */}
        {series && rpm != null && kw != null && (
          <Reveal className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
                Крок 4 — Тип кріплення
              </p>
              {mounting && (
                <button onClick={() => reset('mounting')}
                  className="flex items-center gap-1.5 font-mono text-[10px] text-slate-600 hover:text-slate-300 uppercase tracking-widest transition-colors duration-200">
                  <RotateCcw size={11} /> Змінити
                </button>
              )}
            </div>

            {mounting ? (
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#ce0000]/30 bg-[#ce0000]/5">
                <span className="font-sans text-white text-sm font-medium">{MOUNT_LABEL[mounting] ?? mounting}</span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {mountingList.map((m) => (
                  <button key={m} className={btnBase} onClick={() => setMounting(m)}>
                    <p className="font-sans text-white text-sm font-medium">{MOUNT_LABEL[m] ?? m}</p>
                  </button>
                ))}
              </div>
            )}
          </Reveal>
        )}

        {/* ── Result ── */}
        {results.length > 0 && (
          <Reveal>
            <div className="rounded-2xl border border-[#ce0000]/30 bg-[#ce0000]/5 p-7 mb-8">
              <p className="font-mono text-[10px] text-[#ce0000] uppercase tracking-widest mb-5">Результат підбору</p>

              {results.map((p, i) => (
                <div key={i} className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
                  results.length > 1 && i < results.length - 1 ? 'pb-5 mb-5 border-b border-white/8' : ''
                }`}>
                  <div>
                    <p className="font-condensed font-bold text-white text-2xl uppercase tracking-wide mb-1">
                      {p.model}
                    </p>
                    <p className="font-sans text-slate-400 text-sm">
                      {p.faza}ф · {p.voltage} · {p.rpm.toLocaleString()} об/хв · {p.kw} кВт · {MOUNT_LABEL[p.mounting] ?? p.mounting}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-mono text-3xl font-bold text-white">${p.price.toFixed(2)}</p>
                    <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mt-0.5">ціна в USD</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 pt-5 border-t border-white/8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ce0000] hover:bg-red-700 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30"
                >
                  Замовити цей двигун
                  <ChevronRight size={16} />
                </Link>
                <button
                  onClick={() => reset('series')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-semibold text-sm rounded-xl transition-all duration-200"
                >
                  <RotateCcw size={14} />
                  Новий підбір
                </button>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── Reference table ── */}
        {series && (
          <Reveal>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden">
              <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
                <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
                  Всі позиції · {SERIES_INFO[series].label}
                </p>
                <p className="font-mono text-[10px] text-slate-700">
                  {PRODUCTS.filter(p => p.series === series).length} моделей
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/8">
                      {['Модель','Фаз','Напруга','об/хв','кВт','Кріплення','Ціна USD'].map((h) => (
                        <th key={h} className="text-left px-4 py-3 font-mono text-[10px] text-slate-600 uppercase tracking-widest whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PRODUCTS.filter(p => p.series === series).map((p, i) => {
                      const isActive = results.some(r => r.model === p.model)
                      return (
                        <tr
                          key={i}
                          className={`border-b border-white/[0.04] cursor-pointer transition-colors duration-150 ${
                            isActive
                              ? 'bg-[#ce0000]/8'
                              : 'hover:bg-white/[0.03]'
                          }`}
                          onClick={() => { setSeries(p.series); setRpm(p.rpm); setKw(p.kw); setMounting(p.mounting) }}
                        >
                          <td className={`px-4 py-2.5 font-sans font-medium whitespace-nowrap ${isActive ? 'text-[#ce0000]' : 'text-slate-200'}`}>
                            {p.model}
                          </td>
                          <td className="px-4 py-2.5 font-sans text-slate-400">{p.faza}ф</td>
                          <td className="px-4 py-2.5 font-sans text-slate-400">{p.voltage}</td>
                          <td className="px-4 py-2.5 font-sans text-slate-400">{p.rpm.toLocaleString()}</td>
                          <td className="px-4 py-2.5 font-sans text-slate-300">{p.kw}</td>
                          <td className="px-4 py-2.5 font-sans text-slate-500 text-xs">{p.mounting}</td>
                          <td className={`px-4 py-2.5 font-mono font-medium ${isActive ? 'text-[#ce0000]' : 'text-white'}`}>
                            ${p.price.toFixed(2)}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  )
}
