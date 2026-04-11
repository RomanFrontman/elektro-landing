import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Адреса',
    value: 'м. Львів, вул. Промислова 14, Україна',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+38 (032) 123-45-67',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@elektro-zakhid.ua',
  },
  {
    icon: Clock,
    label: 'Графік роботи',
    value: 'Пн–Пт: 8:00–18:00, Сб: 9:00–14:00',
  },
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
    'w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10 transition-all duration-300 text-sm'

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Контакти
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Маєте запитання або хочете отримати комерційну пропозицію?
            Заповніть форму або зв'яжіться з нами зручним способом.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-8">
              Контактна інформація
            </h3>
            <div className="space-y-6 mb-10">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#1e3a5f]/8 flex items-center justify-center shrink-0">
                    <Icon className="text-[#1e3a5f]" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500 mb-0.5">
                      {label}
                    </div>
                    <div className="text-slate-700 font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#1e40af] text-white">
              <h4 className="font-semibold mb-2">Потрібна швидка консультація?</h4>
              <p className="text-slate-200 text-sm mb-4">
                Наші спеціалісти готові відповісти на всі ваші запитання щодо підбору обладнання.
              </p>
              <a
                href="tel:+380321234567"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors duration-300 text-sm"
              >
                <Phone size={15} />
                Зателефонувати зараз
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                  Повідомлення надіслано!
                </h3>
                <p className="text-slate-500">
                  Дякуємо за звернення. Наш менеджер зв'яжеться з вами
                  найближчим часом.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Ваше ім'я <span className="text-amber-500">*</span>
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
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email <span className="text-amber-500">*</span>
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
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
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
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Повідомлення <span className="text-amber-500">*</span>
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
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1e3a5f] hover:bg-[#163050] disabled:opacity-70 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
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
