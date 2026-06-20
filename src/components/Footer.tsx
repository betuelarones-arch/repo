import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-lg font-bold text-gradient mb-2">{personalInfo.name}</p>
            <p className="text-text-muted text-sm leading-relaxed">
              {personalInfo.title}. Creando experiencias digitales que marcan la diferencia.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Enlaces</p>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/projects', label: 'Proyectos' },
                { href: '/about', label: 'Sobre Mí' },
                { href: '/contact', label: 'Contacto' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-text-muted text-sm hover:text-accent-light transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Contacto</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-text-muted text-sm hover:text-accent-light transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-accent-light transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-accent-light transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-xs">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p className="text-text-dim text-xs">
            Diseñado y desarrollado con Next.js y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
