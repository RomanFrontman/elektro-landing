import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/#about',        label: 'Про нас' },
  { to: '/#products',     label: 'Продукція' },
  { to: '/#team',         label: 'Команда' },
  { to: '/#prices',       label: 'Ціни' },
  { to: '/#testimonials', label: 'Відгуки' },
  { to: '/#contact',      label: 'Контакти' },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo image */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="ДК Електро-Захід"
              className="h-7 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-sm text-slate-200 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#ce0000] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#ce0000] hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#ce0000]/30 hover:-translate-y-px"
          >
            Зв'язатися
          </Link>

          {/* Burger */}
          <button
            className="md:hidden text-slate-200 hover:text-white transition-colors duration-300 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Відкрити меню"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/10 px-4 py-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-slate-300 hover:text-white font-medium py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
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
