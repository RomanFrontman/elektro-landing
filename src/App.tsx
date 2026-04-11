import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Products } from './components/Products'
import { Team } from './components/Team'
import { Prices } from './components/Prices'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfUse } from './pages/TermsOfUse'
import { CookiePolicy } from './pages/CookiePolicy'

const HomePage = () => (
  <main>
    <Hero />
    <About />
    <Products />
    <Team />
    <Prices />
    <Testimonials />
    <Contact />
  </main>
)

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"               element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms"          element={<TermsOfUse />} />
        <Route path="/cookie-policy"  element={<CookiePolicy />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default App
