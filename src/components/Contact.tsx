import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from 'lucide-react'
import { Reveal } from './Reveal'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

const phones = [
  { display: '(032) 245-47-53', href: 'tel:+380322454753' },
  { display: '(067) 672-37-81', href: 'tel:+380676723781' },
  { display: '(067) 672-37-78', href: 'tel:+380676723778' },
]

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' })
  const [loading,   setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1000)
  }

  const inputClass = [
    'w-full px-4 py-3 rounded-lg font-sans text-sm text-white',
    'bg-white/[0.04] border border-white/10',
    'placeholder:text-slate-600',
    'focus:outline-none focus:border-[#ce0000]/50 focus:ring-2 focus:ring-[#ce0000]/8',
    'transition-all duration-300',
  ].join(' ')

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-black overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="mb-14">
          <div className="red-line">
            <p className="font-mono text-[11px] text-[#ce0000] uppercase tracking-[0.25em] mb-4">
              Контакти
            </p>
          </div>
          <h2 className="font-condensed font-bold text-white uppercase tracking-wide"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Зв'яжіться з нами
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── Left: contact info ── */}
          <Reveal direction="left">
            <p className="font-sans text-slate-200 text-sm leading-relaxed mb-8 max-w-sm">
              Маєте запитання або хочете отримати комерційну пропозицію?
              Зв'яжіться з нами зручним способом.
            </p>

            <div className="space-y-5 mb-8">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ce0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="text-[#ce0000]" size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-1">Адреса</p>
                  <p className="font-sans text-slate-200 text-sm font-medium">м. Львів, вул. Зелена, 238</p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ce0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="text-[#ce0000]" size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-2">Телефон</p>
                  <div className="flex flex-col gap-1">
                    {phones.map((p) => (
                      <a key={p.href} href={p.href}
                         className="font-sans text-slate-200 text-sm font-medium hover:text-[#ce0000] transition-colors duration-300">
                        {p.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ce0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="text-[#ce0000]" size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:info@elektrozahid.com"
                     className="font-sans text-slate-200 text-sm font-medium hover:text-[#ce0000] transition-colors duration-300">
                    info@elektrozahid.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ce0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="text-[#ce0000]" size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-1">Графік роботи</p>
                  <p className="font-sans text-slate-200 text-sm font-medium">Пн–Пт: 8:00–18:00</p>
                  <p className="font-sans text-slate-500 text-sm">Сб: 9:00–14:00</p>
                </div>
              </div>
            </div>

            {/* Quick call CTA */}
            <div className="p-5 rounded-xl border border-[#ce0000]/20 bg-[#ce0000]/5">
              <p className="font-condensed font-bold text-white uppercase tracking-wide text-base mb-1">
                Потрібна консультація?
              </p>
              <p className="font-sans text-slate-500 text-sm mb-4">
                Наші спеціалісти готові відповісти на запитання щодо підбору обладнання.
              </p>
              <a href="tel:+380322454753"
                 className="inline-flex items-center gap-2 bg-[#ce0000] hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30 text-sm">
                <Phone size={14} />
                Зателефонувати зараз
              </a>
            </div>
          </Reveal>

          {/* ── Right: form ── */}
          <Reveal direction="right">
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#ce0000]/10 border border-[#ce0000]/20 flex items-center justify-center mb-5">
                    <CheckCircle className="text-[#ce0000]" size={30} />
                  </div>
                  <h3 className="font-condensed font-bold text-white text-2xl uppercase tracking-wide mb-2">
                    Повідомлення надіслано!
                  </h3>
                  <p className="font-sans text-slate-500 text-sm max-w-xs leading-relaxed">
                    Дякуємо за звернення. Наш менеджер зв'яжеться з вами найближчим часом.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2">
                      Ваше ім'я <span className="text-[#ce0000]">*</span>
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                           placeholder="Іван Петренко" required className={inputClass} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2">
                        Email <span className="text-[#ce0000]">*</span>
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                             placeholder="ivan@company.ua" required className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2">
                        Телефон
                      </label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                             placeholder="+38 (___) ___-__-__" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2">
                      Повідомлення <span className="text-[#ce0000]">*</span>
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange}
                              placeholder="Опишіть ваш запит..." required rows={5}
                              className={`${inputClass} resize-none`} />
                  </div>

                  <button type="submit" disabled={loading}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ce0000] hover:bg-red-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30">
                    {loading
                      ? <><Loader2 size={17} className="animate-spin" />Надсилання...</>
                      : 'Надіслати повідомлення'}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
