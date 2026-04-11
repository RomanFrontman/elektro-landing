import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Products } from './components/Products'
import { Team } from './components/Team'
import { Prices } from './components/Prices'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Team />
        <Prices />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
