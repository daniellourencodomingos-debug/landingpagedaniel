import { lazy, Suspense } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Abaixo da dobra e mais pesado (framer-motion + carrossel + mockup de
// celular) — carregado em um chunk separado para não atrasar a primeira
// renderização da Hero.
const BeyondUX = lazy(() => import('./components/BeyondUX'))

export default function App() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--color-text)] focus:px-4 focus:py-2 focus:text-[var(--color-bg)]"
      >
        Pular para o conteúdo principal
      </a>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Suspense fallback={null}>
          <BeyondUX />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
