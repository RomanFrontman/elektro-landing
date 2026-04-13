import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Zap, ArrowRight } from 'lucide-react'

const SPARKS = [
  { left: '12%',  top: '20%', delay: '0s',    dur: '2.4s' },
  { left: '25%',  top: '70%', delay: '0.6s',  dur: '2.8s' },
  { left: '72%',  top: '15%', delay: '1.1s',  dur: '2.2s' },
  { left: '85%',  top: '65%', delay: '0.3s',  dur: '3.1s' },
  { left: '50%',  top: '85%', delay: '1.5s',  dur: '2.5s' },
]

export const DiscountCTA = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible,  setVisible]  = useState(false)
  const [count,    setCount]    = useState(0)

  /* ── Intersection observer ── */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  /* ── Counter 0 → 10 on reveal ── */
  useEffect(() => {
    if (!visible) return
    const duration = 900
    const start    = performance.now()
    let raf: number
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)          // ease-out cubic
      setCount(Math.round(eased * 10))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible])

  const v = visible  // shorthand for conditional class

  return (
    <section
      ref={sectionRef}
      id="discount"
      className={`relative overflow-hidden py-24 lg:py-32 ${v ? 'cta-section-enter' : 'opacity-0'}`}
      style={{
        background: 'radial-gradient(ellipse at 60% 35%, #6b0000 0%, #290000 40%, #0c0000 75%, #000 100%)',
      }}
    >
      {/* ── Ambient glow orbs ── */}
      <div
        className={`absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none ${v ? 'cta-orb-1' : 'opacity-0'}`}
        style={{ background: 'radial-gradient(circle, #ce0000 0%, transparent 70%)', filter: 'blur(48px)' }}
      />
      <div
        className={`absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none ${v ? 'cta-orb-2' : 'opacity-0'}`}
        style={{ background: 'radial-gradient(circle, #ff2200 0%, transparent 70%)', filter: 'blur(56px)' }}
      />

      {/* ── Grid pattern overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Large ЕЗ watermark ── */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
        style={{ fontSize: '28rem', letterSpacing: '-0.06em', opacity: 0.045 }}
      >
        <span className="font-condensed font-black" style={{ color: '#ff0000' }}>Е</span>
        <span className="font-condensed font-black" style={{ color: '#ffffff' }}>З</span>
      </div>

      {/* ── Floating sparks ── */}
      {v && SPARKS.map((s, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#ff3333] pointer-events-none"
          style={{
            left: s.left, top: s.top,
            animation: `cta-spark ${s.dur} ease-out ${s.delay} infinite`,
            boxShadow: '0 0 6px 2px #ff333388',
          }}
        />
      ))}

      {/* ── Decorative spinning rings (right side, desktop) ── */}
      <div className={`absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none ${v ? 'cta-decor-in' : 'opacity-0'}`}>
        {/* outer ring */}
        <div
          className="w-64 h-64 rounded-full border border-dashed border-red-900/50"
          style={{ animation: v ? 'cta-ring-spin 18s linear infinite' : undefined }}
        />
        {/* inner ring */}
        <div
          className="absolute inset-6 rounded-full border border-red-800/40"
          style={{ animation: v ? 'cta-ring-spin-rev 12s linear infinite' : undefined }}
        />
        {/* innermost filled circle with ЕЗ logo */}
        <div className="absolute inset-12 rounded-full bg-[#ce0000]/10 border border-[#ce0000]/20 flex items-center justify-center">
          <div className="flex items-center leading-none select-none" style={{ letterSpacing: '-0.04em' }}>
            <span
              className="font-condensed font-black"
              style={{
                fontSize: '2.6rem',
                color: '#ff2222',
                textShadow: '0 0 18px #ce000099, 0 0 40px #ce000055',
              }}
            >Е</span>
            <span
              className="font-condensed font-black"
              style={{
                fontSize: '2.6rem',
                color: '#ffffff',
                opacity: 0.85,
              }}
            >З</span>
          </div>
        </div>
        {/* orbit dot */}
        <div
          className="absolute w-3 h-3 rounded-full bg-[#ce0000] top-2 left-1/2 -translate-x-1/2"
          style={{
            boxShadow: '0 0 10px 3px #ce000099',
            animation: v ? 'cta-ring-spin 18s linear infinite' : undefined,
            transformOrigin: '50% 130px',
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">

          {/* Badge */}
          <div className={`mb-6 inline-flex items-center gap-2 ${v ? 'cta-badge-in' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ce0000]/20 border border-[#ce0000]/40">
              <Zap size={13} className="text-[#ff4444]" fill="currentColor" />
              <span className="font-mono text-[11px] text-[#ff6666] uppercase tracking-[0.22em] font-medium">
                Спеціальна пропозиція
              </span>
            </div>
          </div>

          {/* Big number */}
          <div className={`flex items-end gap-3 mb-3 ${v ? 'cta-num-pop' : 'opacity-0'}`}>
            <span
              className="font-condensed font-bold leading-none text-white"
              style={{ fontSize: 'clamp(5rem, 16vw, 9rem)', textShadow: '0 0 60px #ce000088, 0 0 120px #ce000044' }}
            >
              {count}%
            </span>
          </div>

          {/* Animated underline */}
          <div className={`h-0.5 w-24 bg-gradient-to-r from-[#ce0000] to-[#ff4444] mb-6 ${v ? 'cta-line-grow' : 'opacity-0 scale-x-0'}`} />

          {/* Headline */}
          <h2
            className={`font-condensed font-bold text-white uppercase tracking-wide mb-4 ${v ? 'cta-text-1' : 'opacity-0'}`}
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', lineHeight: 1.15 }}
          >
            Знижка на перше замовлення
          </h2>

          {/* Subtext */}
          <p className={`font-sans text-red-200/70 text-sm leading-relaxed max-w-sm pb-8 ${v ? 'cta-text-2' : 'opacity-0'}`}>
            Залиште заявку — наш менеджер зв'яжеться з вами, підбере обладнання
            та застосує знижку 10% до першого рахунку.
          </p>

          {/* CTA button */}
          <div className={v ? 'cta-btn-in' : 'opacity-0'}>
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-[#1a0000] text-base transition-all duration-300 hover:shadow-2xl hover:shadow-[#ce0000]/40 hover:-translate-y-0.5 cta-shimmer-btn"
            >
              Отримати знижку зараз
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest pt-4">
              * Діє для нових клієнтів · Не поєднується з іншими акціями
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
