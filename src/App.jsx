import { useState, useEffect } from 'react'

const projects = [
  { title: 'AutoTech', category: 'Automotriz', url: 'auto-tech-three.vercel.app', github: 'https://github.com/sanchezedu/auto-tech', img: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600' },
  { title: 'Delizia', category: 'Restaurante', url: 'delizia-restaurant.vercel.app', github: 'https://github.com/sanchezedu/delizia-restaurant', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600' },
  { title: 'Aurora Cove', category: 'Hotel', url: 'aurora-cove.vercel.app', github: 'https://github.com/sanchezedu/aurora-cove', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600' },
  { title: 'VisionOptica', category: 'Óptica', url: 'vision-optica-premium.vercel.app', github: 'https://github.com/sanchezedu/vision-optica-premium', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600' },
  { title: 'Paws Clinic', category: 'Veterinaria', url: 'paws-clinic-chi.vercel.app', github: 'https://github.com/sanchezedu/paws-clinic', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600' },
  { title: 'LexCorp', category: 'Abogados', url: 'lexcorp-firma.vercel.app', github: 'https://github.com/sanchezedu/lexcorp-firma', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600' },
]

const services = [
  { title: 'Desarrollo Web', desc: 'Sitios web modernos con React y Next.js' },
  { title: 'Landing Pages', desc: 'Diseños únicos que convierten' },
  { title: 'Responsive Design', desc: 'Se adapta a cualquier dispositivo' },
  { title: 'Deploy & Hosting', desc: 'Publicación profesional en Vercel' },
  { title: 'SEO', desc: 'Optimización para motores de búsqueda' },
  { title: 'Animaciones', desc: 'Efectos visuales modernos' },
]

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
]

const testimonials = [
  { name: 'María García', role: 'CEO, Delizia Restaurant', text: 'Excelente trabajo. Nuestro sitio web quedó hermoso y las reservas aumentaron un 40%.' },
  { name: 'Carlos Mendoza', role: 'Director, AutoTech', text: 'Profesionalismo y calidad. El proyecto se entregó antes de lo esperado.' },
  { name: 'Ana López', role: 'Fundadora, Aurora Cove', text: 'Gran atención al detalle. Nuestra web de hotel queda increíble en móviles.' },
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setScrolled(window.scrollY > 10)
    const handleScroll = () => setScrolled(window.scrollY > 10)
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${scrolled ? 'bg-[#0a0a0a]/90' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Edu.dev</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#proyectos" className="text-gray-400 hover:text-white transition font-medium text-sm">Proyectos</a>
            <a href="#testimonios" className="text-gray-400 hover:text-white transition font-medium text-sm">Testimonios</a>
            <a href="#servicios" className="text-gray-400 hover:text-white transition font-medium text-sm">Servicios</a>
            <a href="#contacto" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition">
              Contactar
            </a>
          </nav>
        </div>
      </header>

      {/* HERO - Minimalist */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-gray-300 text-sm font-medium">Disponible para proyectos</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Desarrollo Web
              </span>
              <br/>
              <span className="text-white">Profesional</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
              Creo experiencias digitales modernas y efectivas que impulsan tu negocio al siguiente nivel.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="#proyectos" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-8 py-3.5 rounded-full font-semibold transition transform hover:scale-105">
                Ver Proyectos
              </a>
              <a href="#contacto" className="border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-full font-medium transition hover:bg-white/5">
                Contactar
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center gap-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">11+</div>
                <div className="text-gray-500 text-sm mt-1">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">100%</div>
                <div className="text-gray-500 text-sm mt-1">Responsive</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">5+</div>
                <div className="text-gray-500 text-sm mt-1">Años Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-12 bg-white/5 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-6">Tecnologías</p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full hover:border-violet-500/50 transition cursor-default">
                <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                <span className="text-sm text-gray-400">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonios" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Lo que dicen <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">mis clientes</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mis <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Servicios</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-violet-500/30 transition duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 mb-5 bg-gradient-to-br from-violet-600/20 to-pink-600/20 rounded-xl flex items-center justify-center text-2xl">
                  {['💻', '🎨', '📱', '🚀', '🔍', '✨'][i]}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mis <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Proyectos</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-cyan-500/30 transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full text-xs text-white font-semibold">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition">{project.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 mb-4">{project.url}</p>
                  <div className="flex gap-2">
                    <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-medium rounded-lg transition transform hover:scale-105">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-medium rounded-lg transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-indigo-900/20 to-cyan-900/20"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-600/30 to-pink-600/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-full blur-[100px]"></div>
        <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Listo para trabajar juntos?</h2>
          <p className="text-xl text-gray-400 mb-10">Contáctame y hagamos tu proyecto realidad</p>
          <a href="mailto:edu@local.dev" className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-10 py-4 rounded-full font-semibold text-lg transition transform hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Enviar Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Edu.dev</span>
              </div>
              <p className="text-gray-500">Desarrollo Web y Soluciones Digitales</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-500">
                <li>edu@local.dev</li>
                <li>+593 99 999 9999</li>
                <li>Guayaquil, Ecuador</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#proyectos" className="text-gray-500 hover:text-violet-400 transition">Proyectos</a></li>
                <li><a href="#testimonios" className="text-gray-500 hover:text-violet-400 transition">Testimonios</a></li>
                <li><a href="#servicios" className="text-gray-500 hover:text-violet-400 transition">Servicios</a></li>
                <li><a href="#contacto" className="text-gray-500 hover:text-violet-400 transition">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-600">
            2026 Edu.dev - Todos los derechos reservados
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all z-50">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.218 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.195.194 1.628.122.434-.072 1.054-.481 1.207-1.005.151-.524.151-1.074.105-1.173-.046-.099-.172-.173-.354-.306z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
