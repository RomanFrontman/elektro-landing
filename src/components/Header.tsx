import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
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
      className="shrink-0 focus:outline-none"
      style={{ width: 30, height: 40 }}
    >
      {/* Outer housing — dark charcoal with bevel */}
      <div
        className="w-full h-full rounded-[5px] relative"
        style={{
          background: 'linear-gradient(160deg, #2e2e2e 0%, #0e0e0e 100%)',
          boxShadow:
            '2px 3px 6px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.07), 0 0 0 1px rgba(0,0,0,0.95)',
          padding: 3,
        }}
      >
        {/* Inner recess */}
        <div
          className="w-full h-full rounded-[2px]"
          style={{
            background: '#080808',
            boxShadow: 'inset 1px 1px 4px rgba(0,0,0,0.9)',
            padding: 2,
          }}
        >
          {/* Rocker */}
          <div
            className="w-full h-full rounded-[1px] relative overflow-hidden"
            style={{
              background: isDark
                ? 'linear-gradient(to bottom, #9a0000 0%, #d40000 40%, #ce0000 100%)'
                : 'linear-gradient(to bottom, #ce0000 0%, #d40000 60%, #9a0000 100%)',
              transform: isDark
                ? 'perspective(70px) rotateX(16deg)'
                : 'perspective(70px) rotateX(-16deg)',
              transformOrigin: 'center center',
              transition: 'transform 0.15s ease, background 0.15s ease',
              boxShadow: isDark
                ? 'inset 0 3px 5px rgba(0,0,0,0.5), inset 0 -1px 3px rgba(255,80,80,0.15)'
                : 'inset 0 -3px 5px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,80,80,0.15)',
            }}
          >
            {/* O — top (off) */}
            <span
              className="absolute left-1/2 -translate-x-1/2 leading-none select-none pointer-events-none"
              style={{
                top: '14%',
                fontSize: 8,
                fontWeight: 900,
                color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.9)',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              O
            </span>
            {/* I — bottom (on) */}
            <span
              className="absolute left-1/2 -translate-x-1/2 leading-none select-none pointer-events-none"
              style={{
                bottom: '14%',
                fontSize: 8,
                fontWeight: 900,
                color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              I
            </span>
          </div>
        </div>
      </div>
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
          ? 'bg-overlay backdrop-blur-md border-b border-theme shadow-lg'
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
                className="font-sans text-sm text-secondary hover:text-primary transition-colors duration-300 relative group"
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
              className="text-secondary hover:text-primary transition-colors duration-300 p-1"
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
        <div className="md:hidden border-t border-theme px-4 py-6 bg-overlay-heavy">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans font-medium py-2.5 px-3 rounded-lg text-secondary hover:text-primary hover:bg-dim transition-all duration-200"
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
