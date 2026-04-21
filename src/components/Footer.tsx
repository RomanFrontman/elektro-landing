import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const ViberIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M11.997 0C5.847 0 .857 4.98.857 11.117c0 3.33 1.418 6.337 3.687 8.47v3.576a.84.84 0 0 0 1.434.594l2.487-2.488c1.07.29 2.198.448 3.532.448 6.15 0 11.14-4.98 11.14-11.117C24.137 4.98 19.147 0 11.997 0zm.003 20.23c-1.19 0-2.34-.19-3.41-.535l-.56-.18-.557.557-1.39 1.393v-2.21l-.437-.385A9.17 9.17 0 0 1 2.85 11.12c0-5.06 4.1-9.18 9.15-9.18s9.15 4.12 9.15 9.18-4.1 9.11-9.15 9.11zm4.68-6.96c-.26-.13-1.53-.755-1.766-.843-.237-.086-.41-.13-.582.13-.172.258-.668.843-.817 1.016-.15.172-.3.194-.558.065-.258-.13-1.09-.402-2.075-1.28-.767-.685-1.285-1.53-1.435-1.788-.15-.26-.016-.4.113-.528.115-.115.258-.3.387-.45.13-.15.172-.258.258-.43.086-.172.043-.323-.022-.452-.064-.13-.582-1.4-.797-1.915-.21-.503-.424-.434-.582-.443l-.496-.008c-.172 0-.452.064-.688.322-.237.258-.903.883-.903 2.152s.924 2.495 1.053 2.667c.13.172 1.817 2.774 4.402 3.892.615.266 1.096.424 1.47.543.617.196 1.18.168 1.624.102.495-.073 1.53-.625 1.745-1.23.215-.602.215-1.118.15-1.23-.064-.108-.236-.172-.495-.3z"/>
  </svg>
)

const navLinks = [
  { to: '/#about',        label: 'Про нас' },
  { to: '/#products',     label: 'Продукція' },
  { to: '/#team',         label: 'Команда' },
  { to: '/#prices',       label: 'Ціни' },
  { to: '/#calculator',   label: 'Калькулятор' },
  { to: '/#testimonials', label: 'Відгуки' },
  { to: '/#contact',      label: 'Контакти' },
]

const legalLinks = [
  { to: '/privacy-policy', label: 'Політика конфіденційності' },
  { to: '/terms',          label: 'Умови використання' },
  { to: '/cookie-policy',  label: 'Політика Cookies' },
]

const phones = [
  { display: '+38(032) 245-47-53', href: 'tel:+380322454753' },
  { display: '+38(067) 672-37-81', href: 'tel:+380676723781' },
  { display: '+38(067) 672-37-78', href: 'tel:+380676723778' },
]

export const Footer = () => {
  const { theme } = useTheme()
  const year = new Date().getFullYear()
  const logoFilter = theme === 'dark' ? 'brightness(0) invert(1)' : 'none'

  return (
    <footer className="relative bg-elevated border-t border-theme overflow-hidden">

      <div className="absolute right-0 bottom-0 font-display leading-none text-watermark pointer-events-none select-none overflow-hidden"
           style={{ fontSize: '18rem' }}>
        ДК
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row: logo + CTA */}
        <div className="py-12 border-b border-theme flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="ДК Електро-Захід"
              className="h-8 w-auto transition-all duration-300"
              style={{ filter: logoFilter }}
            />
          </a>
          <p className="font-mono text-[11px] text-subtle uppercase tracking-widest hidden sm:block">
            Промислове електротехнічне обладнання · з 2008 року
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ce0000] hover:bg-red-700 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30 shrink-0"
          >
            Отримати пропозицію
          </Link>
        </div>

        {/* Middle 3-col */}
        <div className="py-12 grid md:grid-cols-3 gap-10">

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] text-subtle uppercase tracking-widest mb-5">Навігація</p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to}
                   className="font-sans text-t-muted hover:text-primary text-sm transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact details */}
          <div>
            <p className="font-mono text-[10px] text-subtle uppercase tracking-widest mb-5">Контакти</p>
            <div className="space-y-3">
              <p className="font-sans text-t-muted text-sm flex items-start gap-2.5">
                <MapPin size={14} className="text-[#ce0000] mt-0.5 shrink-0" />
                м. Львів, вул. Зелена, 238
              </p>
              <div className="space-y-1.5">
                {phones.map((p) => (
                  <a key={p.href} href={p.href}
                     className="font-sans text-t-muted text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2.5">
                    <Phone size={14} className="text-[#ce0000] shrink-0" />
                    {p.display}
                  </a>
                ))}
              </div>
              <a href="mailto:info@elektrozahid.com"
                 className="font-sans text-t-muted text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2.5">
                <Mail size={14} className="text-[#ce0000] shrink-0" />
                info@elektrozahid.com
              </a>
              <p className="font-mono text-[11px] text-faint pt-1">
                Пн–Пт: 9:00–17:00 · Обід: 13:00–14:00
              </p>
              <div className="flex gap-2 pt-3">
                <a href="mailto:info@elektrozahid.com" aria-label="Email"
                   className="w-9 h-9 rounded-lg bg-muted border border-theme hover:border-[#ce0000]/30 hover:bg-[#ce0000]/10 flex items-center justify-center text-subtle hover:text-[#ce0000] transition-all duration-300">
                  <Mail size={15} />
                </a>
                <a href="tel:+380322454753" aria-label="Телефон"
                   className="w-9 h-9 rounded-lg bg-muted border border-theme hover:border-[#ce0000]/30 hover:bg-[#ce0000]/10 flex items-center justify-center text-subtle hover:text-[#ce0000] transition-all duration-300">
                  <Phone size={15} />
                </a>
                <a href="viber://chat?number=%2B380676723781" aria-label="Viber"
                   className="w-9 h-9 rounded-lg bg-muted border border-theme hover:border-[#ce0000]/30 hover:bg-[#ce0000]/10 flex items-center justify-center text-subtle hover:text-[#ce0000] transition-all duration-300">
                  <ViberIcon />
                </a>
                <a href="https://www.instagram.com/elektrozahid" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                   className="w-9 h-9 rounded-lg bg-muted border border-theme hover:border-[#ce0000]/30 hover:bg-[#ce0000]/10 flex items-center justify-center text-subtle hover:text-[#ce0000] transition-all duration-300">
                  <InstagramIcon />
                </a>
                <Link to="/#contact" aria-label="Адреса"
                   className="w-9 h-9 rounded-lg bg-muted border border-theme hover:border-[#ce0000]/30 hover:bg-[#ce0000]/10 flex items-center justify-center text-subtle hover:text-[#ce0000] transition-all duration-300">
                  <MapPin size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <p className="font-mono text-[10px] text-subtle uppercase tracking-widest mb-5">Де нас знайти</p>
            <div className="rounded-xl overflow-hidden border border-theme">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.726545421248!2d24.056545700902593!3d49.806819586440106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae805819aa9cb%3A0x32a64777ae7915f1!2z0JXQu9C10LrRgtGA0L4t0JfQsNGF0ZbQtA!5e0!3m2!1suk!2sua!4v1776756904703!5m2!1suk!2sua"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-faint">
            © {year} ДК Електро-Захід. Всі права захищені.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to}
                    className="font-mono text-[10px] text-faint hover:text-subtle transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
