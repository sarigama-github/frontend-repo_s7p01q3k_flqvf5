import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-800 shadow-sm">
            Barcelona • Freelancer · Estudiante de Ingeniería Informática
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-gray-900">
            Creativo para creadores: miniaturas, edición y video que convierten
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            Soy Óscar García. Ayudo a creadores y marcas a destacar con visuales potentes, vídeos limpios y sistemas que automatizan tu contenido.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#contacto" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black/90 transition-colors">
              Solicitar presupuesto
            </a>
            <a href="#trabajos" className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur px-6 py-3 text-sm font-semibold text-gray-900 border border-black/10 hover:bg-white transition-colors">
              Ver trabajos
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  )
}
