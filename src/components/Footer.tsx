import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'Про нас' },
  { href: '#products', label: 'Продукція' },
  { href: '#team', label: 'Команда' },
  { href: '#prices', label: 'Ціни' },
  { href: '#testimonials', label: 'Відгуки' },
  { href: '#contact', label: 'Контакти' },
]

const contactLinks = [
  { icon: Mail, href: 'mailto:info@elektrozahid.com', label: 'Email' },
  { icon: Phone, href: 'tel:+380322454753', label: 'Телефон' },
  { icon: MapPin, href: '#contact', label: 'Адреса' },
]

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-2 font-bold text-white text-lg mb-3">
              <Zap className="text-[#ce0000]" size={22} fill="currentColor" />
              ДК Електро-Захід
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Надійний постачальник промислового електротехнічного обладнання з 2008 року.
              Комплексні рішення для вашого бізнесу.
            </p>
            <div className="text-slate-500 text-xs space-y-1">
              <p>м. Львів, вул. Зелена, 238</p>
              <a href="mailto:info@elektrozahid.com" className="block hover:text-[#ce0000] transition-colors duration-300">
                info@elektrozahid.com
              </a>
              <a href="tel:+380322454753" className="block hover:text-[#ce0000] transition-colors duration-300">
                (032) 245-47-53
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навігація</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-500 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact icons */}
          <div>
            <h4 className="text-white font-semibold mb-4">Зв'язатися</h4>
            <div className="flex gap-3 mb-5">
              {contactLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#ce0000]/20 border border-white/8 hover:border-[#ce0000]/30 flex items-center justify-center text-slate-500 hover:text-[#ce0000] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              (067) 672-37-81<br />
              (067) 672-37-78<br />
              Пн–Пт: 8:00–18:00, Сб: 9:00–14:00
            </p>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {year} ДК Електро-Захід. Всі права захищені.
          </p>
          <p className="text-slate-700 text-xs">
            Промислове електротехнічне обладнання, Україна
          </p>
        </div>
      </div>
    </footer>
  )
}
