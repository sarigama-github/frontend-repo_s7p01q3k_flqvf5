import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#trabajos', label: 'Trabajos' },
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-full border border-white/20 bg-white/60 backdrop-blur-xl shadow-sm">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600" />
              <span className="font-semibold tracking-tight">Óscar García</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="ml-2 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black/90 transition-colors"
              >
                Trabaja conmigo
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-sm">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-gray-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium"
              >
                Trabaja conmigo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
