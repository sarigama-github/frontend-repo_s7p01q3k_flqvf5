import { Camera, Video, Scissors, Sparkles, Workflow } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Miniaturas para YouTube',
    desc: 'Diseño profesional, contrastado y optimizado para CTR. Entregas en 24-48h.',
  },
  {
    icon: Scissors,
    title: 'Edición de video',
    desc: 'Edición limpia y dinámica para contenido largo o clips verticales. Subtítulos, motion y ritmo.',
  },
  {
    icon: Video,
    title: 'Grabación para creadores y empresas',
    desc: 'Producción en Barcelona: set, iluminación, micro y cámara para que solo te preocupes del guion.',
  },
  {
    icon: Sparkles,
    title: 'Contenido para redes',
    desc: 'Packs mensuales de contenido para Instagram, TikTok y YouTube Shorts adaptado a tu marca.',
  },
  {
    icon: Workflow,
    title: 'Automatizaciones',
    desc: 'Sistemas con IA y nocode para acelerar tu flujo de publicación y ganar tiempo. (Opcional)',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Servicios</h2>
          <p className="mt-2 text-gray-600">Soluciones creativas enfocadas a resultados y conversión.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white grid place-items-center">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
