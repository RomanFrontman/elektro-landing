import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'Про нас' },
  { href: '#products', label: 'Продукція' },
  { href: '#team', label: 'Команда' },
  { href: '#prices', label: 'Ціни' },
  { href: '#testimonials', label: 'Відгуки' },
  { href: '#contact', label: 'Контакти' },
]

const socialLinks = [
  { icon: Mail, href: 'mailto:info@elektro-zakhid.ua', label: 'Email' },
  { icon: Phone, href: 'tel:+380321234567', label: 'Телефон' },
  { icon: MapPin, href: '#contact', label: 'Адреса' },
]

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0f172a] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-2 font-bold text-white text-lg mb-3">
              <Zap className="text-amber-500" size={22} fill="currentColor" />
              ДК Електро-Захід
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Надійний постачальник промислового електротехнічного обладнання з 2008 року. Комплексні рішення для вашого бізнесу.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навігація</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social / contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Зв'язатися</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/8 hover:bg-amber-500/20 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-5 leading-relaxed">
              м. Львів, вул. Промислова 14<br />
              Пн–Пт: 8:00–18:00
            </p>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {year} ДК Електро-Захід. Всі права захищені.
          </p>
          <p className="text-slate-600 text-xs">
            Промислове електротехнічне обладнання, Україна
          </p>
        </div>
      </div>
    </footer>
  )
}
