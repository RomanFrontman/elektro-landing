import { useState } from 'react'
import { Zap, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'Про нас' },
  { href: '#products', label: 'Продукція' },
  { href: '#team', label: 'Команда' },
  { href: '#prices', label: 'Ціни' },
  { href: '#testimonials', label: 'Відгуки' },
  { href: '#contact', label: 'Контакти' },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-bold text-lg text-[#1e3a5f] shrink-0">
            <Zap className="text-amber-500" size={22} fill="currentColor" />
            <span>ДК Електро-Захід</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-[#1e3a5f] text-sm font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 bg-[#1e3a5f] hover:bg-[#163050] text-white text-sm font-semibold rounded-lg transition-colors duration-300"
          >
            Зв'язатися
          </a>

          <button
            className="md:hidden text-slate-600 hover:text-[#1e3a5f] transition-colors duration-300 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Відкрити меню"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-[#1e3a5f] font-medium transition-colors duration-300 py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1e3a5f] text-white font-semibold rounded-lg mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Зв'язатися
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
