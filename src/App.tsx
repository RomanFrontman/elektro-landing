import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Products } from './components/Products'
import { Team } from './components/Team'
import { Prices } from './components/Prices'
import { Calculator } from './components/Calculator'
import { DiscountCTA } from './components/DiscountCTA'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfUse } from './pages/TermsOfUse'
import { CookiePolicy } from './pages/CookiePolicy'

const ScrollToHash = () => {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
      }
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [hash, pathname])
  return null
}

const HomePage = () => (
  <main>
    <Hero />
    <About />
    <Products />
    <Team />
    <Prices />
    <Calculator />
    <DiscountCTA />
    <Testimonials />
    <Contact />
  </main>
)

function App() {
  return (
    <ThemeProvider>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/"               element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms"          element={<TermsOfUse />} />
        <Route path="/cookie-policy"  element={<CookiePolicy />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </ThemeProvider>
  )
}

export default App
