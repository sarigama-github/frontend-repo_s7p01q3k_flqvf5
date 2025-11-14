import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Stat number="+120" label="Miniaturas entregadas" />
            <Stat number="+60" label="Vídeos editados" />
            <Stat number="24-48h" label="Tiempo de entrega" />
            <Stat number="Barcelona" label="Disponible presencial" />
          </div>
        </section>
        <Services />
        <Work />
        <About />
        <CTA />
      </main>
      <footer className="py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Óscar García — Barcelona</p>
          <a href="#contacto" className="underline-offset-4 hover:underline">Trabaja conmigo</a>
        </div>
      </footer>
    </div>
  )
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="text-2xl font-bold">{number}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  )
}

export default App
