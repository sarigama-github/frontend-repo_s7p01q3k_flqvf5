const works = [
  {
    title: 'Miniaturas YouTube',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Edición para creadores',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Grabación en set',
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Contenido vertical',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="trabajos" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trabajos recientes</h2>
          <p className="mt-2 text-gray-600">Una selección de proyectos con foco en performance y estética.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w) => (
            <figure key={w.title} className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <img src={w.image} alt={w.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <figcaption className="p-4 text-sm font-medium">{w.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
