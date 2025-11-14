export default function CTA() {
  return (
    <section id="contacto" className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="rounded-3xl border border-black/10 bg-white p-10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Listo para escalar tu contenido?</h2>
          <p className="mt-3 text-gray-700">Cuéntame tu proyecto y te respondo en menos de 24 horas.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input className="col-span-1 sm:col-span-1 rounded-xl border border-black/10 px-4 py-3 text-sm" placeholder="Tu nombre" />
            <input type="email" className="col-span-1 sm:col-span-1 rounded-xl border border-black/10 px-4 py-3 text-sm" placeholder="Email" />
            <button className="col-span-1 inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-4 py-3 text-sm font-semibold hover:bg-black/90 transition-colors">Solicitar presupuesto</button>
          </form>
          <p className="mt-3 text-xs text-gray-500">También puedes escribirme por Instagram o email si lo prefieres.</p>
        </div>
      </div>
    </section>
  )
}
