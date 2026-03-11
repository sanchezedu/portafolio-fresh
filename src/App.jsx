import { useState, useEffect } from 'react'

const projects = [
  { title: 'AutoTech', category: 'Automotriz', url: 'auto-tech-three.vercel.app', img: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600' },
  { title: 'Delizia', category: 'Restaurante', url: 'delizia-restaurant.vercel.app', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600' },
  { title: 'Aurora Cove', category: 'Hotel', url: 'aurora-cove.vercel.app', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600' },
  { title: 'VisionOptica', category: 'Óptica', url: 'vision-optica-premium.vercel.app', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600' },
  { title: 'Paws Clinic', category: 'Veterinaria', url: 'paws-clinic-chi.vercel.app', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600' },
  { title: 'LexCorp', category: 'Abogados', url: 'lexcorp-firma.vercel.app', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600' },
]

const services = [
  { title: 'Desarrollo Web', desc: 'Sitios web modernos con React y Next.js' },
  { title: 'Landing Pages', desc: 'Diseños únicos que convierten' },
  { title: 'Responsive Design', desc: 'Se adapta a cualquier dispositivo' },
  { title: 'Deploy & Hosting', desc: 'Publicación profesional en Vercel' },
  { title: 'SEO', desc: 'Optimización para motores de búsqueda' },
  { title: 'Animaciones', desc: 'Efectos visuales modernos' },
]

const technologies = ['React', 'Next.js', 'Tailwind', 'GSAP', 'Vite', 'Vercel', 'JavaScript']

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setScrolled(window.scrollY > 10)
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-gray-900">Edu</span>
            <span className="text-cyan-500">.dev</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#proyectos" className="text-gray-600 hover:text-cyan-500 text-sm font-medium">Proyectos</a>
            <a href="#servicios" className="text-gray-600 hover:text-cyan-500 text-sm font-medium">Servicios</a>
            <a href="#contacto" className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-medium">Contactar</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-16 min-h-[80vh] flex items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center py-12">
            <div className="text-white space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Disponible para proyectos
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Hola, soy <span className="text-cyan-400">Edu</span>
                <br/>
                Desarrollador Full Stack
              </h1>
              
              <p className="text-gray-300 max-w-xs">
                Creo experiencias digitales modernas y efectivas.
              </p>
              
              <div className="flex gap-3">
                <a href="#proyectos" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm">Ver Proyectos</a>
                <a href="#contacto" className="border border-gray-600 text-gray-300 hover:bg-white/10 px-6 py-2.5 rounded-full font-medium text-sm">Contactar</a>
              </div>
              
              <div className="flex gap-6 pt-3">
                <div><div className="text-2xl font-bold">11+</div><div className="text-gray-400 text-sm">Proyectos</div></div>
                <div><div className="text-2xl font-bold">100%</div><div className="text-gray-400 text-sm">Responsive</div></div>
                <div><div className="text-2xl font-bold">5+</div><div className="text-gray-400 text-sm">Años</div></div>
              </div>
            </div>
            
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 bg-cyan-500/20 rounded-full blur-[50px]"></div>
                <div className="relative bg-white rounded-2xl p-5 shadow-xl text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-3xl mb-3">💻</div>
                  <div className="text-base font-bold text-gray-900">Edu.dev</div>
                  <div className="text-cyan-600 text-sm">Full Stack Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, i) => (
              <span key={i} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Mis <span className="text-cyan-500">Servicios</span></h2>
            <p className="text-gray-500 mt-1">Lo que puedo ofrecerte</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div key={i} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Mis <span className="text-cyan-500">Proyectos</span></h2>
            <p className="text-gray-500 mt-1">Landing pages profesionales</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <a 
                key={i}
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-36 overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy" />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 rounded text-xs font-medium text-gray-700">{project.category}</div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">{project.url}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">¿Listo para trabajar juntos?</h2>
          <p className="text-gray-400 mb-5">Contáctame y hagamos tu proyecto realidad</p>
          <a href="mailto:edu@local.dev" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold">Enviar Email</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <div className="text-lg font-bold mb-1">
                <span className="text-gray-900">Edu</span>
                <span className="text-cyan-500">.dev</span>
              </div>
              <p className="text-gray-500 text-sm">Desarrollo Web</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Contacto</h4>
              <p className="text-gray-500 text-sm">edu@local.dev<br/>+593 99 999 9999</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Links</h4>
              <div className="flex flex-col gap-0.5">
                <a href="#proyectos" className="text-gray-500 hover:text-cyan-500 text-sm">Proyectos</a>
                <a href="#servicios" className="text-gray-500 hover:text-cyan-500 text-sm">Servicios</a>
                <a href="#contacto" className="text-gray-500 hover:text-cyan-500 text-sm">Contacto</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-6 pt-5 text-center text-gray-400 text-sm">
            2026 Edu.dev - Todos los derechos reservados
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/593999999999" className="fixed bottom-5 right-5 w-11 h-11 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.218 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.195.194 1.628.122.434-.072 1.054-.481 1.207-1.005.151-.524.151-1.074.105-1.173-.046-.099-.172-.173-.354-.306z"/></svg>
      </a>
    </div>
  )
}

export default App
