import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from 'lucide-react'

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
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#ce0000]/60 focus:ring-2 focus:ring-[#ce0000]/10 transition-all duration-300 text-sm'

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#ce0000] text-sm font-semibold uppercase tracking-widest mb-3">
            Контакти
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
            Маєте запитання або хочете отримати комерційну пропозицію?
            Заповніть форму або зв'яжіться з нами зручним способом.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">
              Контактна інформація
            </h3>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#ce0000]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#ce0000]" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 mb-0.5">Адреса</div>
                  <div className="text-slate-200 font-medium">м. Львів, вул. Зелена, 238</div>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#ce0000]/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#ce0000]" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 mb-1">Телефон</div>
                  <div className="flex flex-col gap-1">
                    {phones.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="text-slate-200 font-medium hover:text-[#ce0000] transition-colors duration-300"
                      >
                        {p.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#ce0000]/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#ce0000]" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 mb-0.5">Email</div>
                  <a
                    href="mailto:info@elektrozahid.com"
                    className="text-slate-200 font-medium hover:text-[#ce0000] transition-colors duration-300"
                  >
                    info@elektrozahid.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#ce0000]/10 flex items-center justify-center shrink-0">
                  <Clock className="text-[#ce0000]" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 mb-0.5">Графік роботи</div>
                  <div className="text-slate-200 font-medium">Пн–Пт: 8:00–18:00, Сб: 9:00–14:00</div>
                </div>
              </div>
            </div>

            {/* Quick call CTA */}
            <div className="p-6 rounded-xl bg-[#ce0000]/8 border border-[#ce0000]/20">
              <h4 className="font-semibold text-white mb-2">Потрібна швидка консультація?</h4>
              <p className="text-slate-400 text-sm mb-4">
                Наші спеціалісти готові відповісти на всі ваші запитання щодо підбору обладнання.
              </p>
              <a
                href="tel:+380322454753"
                className="inline-flex items-center gap-2 bg-[#ce0000] hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30 text-sm"
              >
                <Phone size={15} />
                Зателефонувати зараз
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/3 rounded-2xl border border-white/10 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#ce0000]/10 border border-[#ce0000]/20 flex items-center justify-center mb-5">
                  <CheckCircle className="text-[#ce0000]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Повідомлення надіслано!
                </h3>
                <p className="text-slate-400">
                  Дякуємо за звернення. Наш менеджер зв'яжеться з вами
                  найближчим часом.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Ваше ім'я <span className="text-[#ce0000]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Іван Петренко"
                    required
                    className={inputClass}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Email <span className="text-[#ce0000]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ivan@company.ua"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+38 (___) ___-__-__"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Повідомлення <span className="text-[#ce0000]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишіть ваш запит або потребу..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ce0000] hover:bg-red-700 disabled:opacity-60 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Надсилання...
                    </>
                  ) : (
                    'Надіслати повідомлення'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
