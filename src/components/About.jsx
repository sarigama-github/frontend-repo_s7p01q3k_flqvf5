export default function About() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre mí</h2>
          <p className="mt-4 text-gray-700">
            Soy Óscar García, freelancer y estudiante de 1º de Ingeniería Informática en Barcelona. Me mueven las historias bien contadas y el diseño que convierte. Trabajo con creadores y marcas para elevar su presencia digital con piezas visuales claras, limpias y modernas.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>• Miniaturas profesionales con foco en CTR</li>
            <li>• Edición de video con ritmo y claridad</li>
            <li>• Grabación en set para creadores y empresas</li>
            <li>• Contenido para redes y packs mensuales</li>
            <li>• Automatizaciones para ahorrar tiempo</li>
          </ul>
        </div>
        <div className="h-[380px] rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 border border-black/10" />
      </div>
    </section>
  )
}
