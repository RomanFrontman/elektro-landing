import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { href: '#about',        label: 'Про нас' },
  { href: '#products',     label: 'Продукція' },
  { href: '#team',         label: 'Команда' },
  { href: '#prices',       label: 'Ціни' },
  { href: '#testimonials', label: 'Відгуки' },
  { href: '#contact',      label: 'Контакти' },
]

const legalLinks = [
  { to: '/privacy-policy', label: 'Політика конфіденційності' },
  { to: '/terms',          label: 'Умови використання' },
  { to: '/cookie-policy',  label: 'Політика Cookies' },
]

const phones = [
  { display: '(032) 245-47-53', href: 'tel:+380322454753' },
  { display: '(067) 672-37-81', href: 'tel:+380676723781' },
  { display: '(067) 672-37-78', href: 'tel:+380676723778' },
]

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#080808] border-t border-white/8 overflow-hidden">

      <div className="absolute right-0 bottom-0 font-display leading-none text-white/[0.015] pointer-events-none select-none overflow-hidden"
           style={{ fontSize: '18rem' }}>
        ДК
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row: logo + CTA */}
        <div className="py-12 border-b border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="ДК Електро-Захід"
              className="h-8 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <p className="font-mono text-[11px] text-slate-600 uppercase tracking-widest hidden sm:block">
            Промислове електротехнічне обладнання · з 2008 року
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ce0000] hover:bg-red-700 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30 shrink-0"
          >
            Отримати пропозицію
          </a>
        </div>

        {/* Middle 3-col */}
        <div className="py-12 grid md:grid-cols-3 gap-10">

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-5">Навігація</p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                   className="font-sans text-slate-500 hover:text-white text-sm transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact details */}
          <div>
            <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-5">Контакти</p>
            <div className="space-y-3">
              <p className="font-sans text-slate-500 text-sm flex items-start gap-2.5">
                <MapPin size={14} className="text-[#ce0000] mt-0.5 shrink-0" />
                м. Львів, вул. Зелена, 238
              </p>
              <div className="space-y-1.5">
                {phones.map((p) => (
                  <a key={p.href} href={p.href}
                     className="font-sans text-slate-500 text-sm hover:text-white transition-colors duration-300 flex items-center gap-2.5">
                    <Phone size={14} className="text-[#ce0000] shrink-0" />
                    {p.display}
                  </a>
                ))}
              </div>
              <a href="mailto:info@elektrozahid.com"
                 className="font-sans text-slate-500 text-sm hover:text-white transition-colors duration-300 flex items-center gap-2.5">
                <Mail size={14} className="text-[#ce0000] shrink-0" />
                info@elektrozahid.com
              </a>
              <p className="font-mono text-[11px] text-slate-700 pt-1">
                Пн–Пт: 8:00–18:00 · Сб: 9:00–14:00
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-5">Правова інформація</p>
            <nav className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <Link key={link.to} to={link.to}
                      className="font-sans text-slate-500 hover:text-white text-sm transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-2 mt-6">
              <a href="mailto:info@elektrozahid.com" aria-label="Email"
                 className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 hover:border-[#ce0000]/30 hover:bg-[#ce0000]/10 flex items-center justify-center text-slate-600 hover:text-[#ce0000] transition-all duration-300">
                <Mail size={15} />
              </a>
              <a href="tel:+380322454753" aria-label="Телефон"
                 className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 hover:border-[#ce0000]/30 hover:bg-[#ce0000]/10 flex items-center justify-center text-slate-600 hover:text-[#ce0000] transition-all duration-300">
                <Phone size={15} />
              </a>
              <a href="#contact" aria-label="Адреса"
                 className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 hover:border-[#ce0000]/30 hover:bg-[#ce0000]/10 flex items-center justify-center text-slate-600 hover:text-[#ce0000] transition-all duration-300">
                <MapPin size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-slate-700">
            © {year} ДК Електро-Захід. Всі права захищені.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to}
                    className="font-mono text-[10px] text-slate-700 hover:text-slate-500 transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
