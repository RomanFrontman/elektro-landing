import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/#about',        label: 'Про нас' },
  { to: '/#products',     label: 'Продукція' },
  { to: '/#team',         label: 'Команда' },
  { to: '/#prices',       label: 'Ціни' },
  { to: '/#calculator',   label: 'Калькулятор' },
  { to: '/#testimonials', label: 'Відгуки' },
  { to: '/#contact',      label: 'Контакти' },
]

const ThemeToggle = () => {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'}
      className={`relative flex items-center w-12 h-7 rounded-full shrink-0 border transition-all duration-300 ${
        isDark
          ? 'bg-zinc-900 border-[#ce0000]/50'
          : 'bg-slate-100 border-slate-300'
      }`}
    >
      {/* Sun — left */}
      <Sun
        size={11}
        className={`absolute left-1.5 transition-all duration-200 ${
          isDark ? 'text-white/30' : 'text-amber-500'
        }`}
      />
      {/* Moon — right */}
      <Moon
        size={11}
        className={`absolute right-1.5 transition-all duration-200 ${
          isDark ? 'text-[#ce0000]' : 'text-slate-400/60'
        }`}
      />
      {/* Sliding knob */}
      <span
        className={`absolute w-5 h-5 rounded-full shadow-sm transition-all duration-300 ${
          isDark
            ? 'translate-x-6 bg-[#ce0000]'
            : 'translate-x-[2px] bg-white border border-slate-200'
        }`}
      />
    </button>
  )
}

export const Header = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logoFilter = isDark ? 'brightness(0) invert(1)' : 'none'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/50'
            : 'bg-white/95 backdrop-blur-md border-b border-black/10 shadow-lg shadow-gray-200/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="ДК Електро-Захід"
              className="h-7 w-auto transition-all duration-300"
              style={{ filter: logoFilter }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-sm transition-colors duration-300 relative group ${
                  isDark
                    ? 'text-slate-200 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#ce0000] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop: toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/#contact"
              className="inline-flex items-center px-5 py-2.5 bg-[#ce0000] hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30 hover:-translate-y-px"
            >
              Зв'язатися
            </Link>
          </div>

          {/* Mobile: toggle + burger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className={`transition-colors duration-300 p-1 ${
                isDark ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Відкрити меню"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden border-t px-4 py-6 ${
            isDark
              ? 'bg-black/98 border-white/10'
              : 'bg-white/98 border-black/10'
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans font-medium py-2.5 px-3 rounded-lg transition-all duration-200 ${
                  isDark
                    ? 'text-slate-300 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/#contact"
            className="mt-4 flex items-center justify-center px-5 py-3 bg-[#ce0000] hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Зв'язатися
          </Link>
        </div>
      )}
    </header>
  )
}
