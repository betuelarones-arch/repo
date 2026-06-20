'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 0); return () => clearTimeout(t); }, []);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-28 h-28 mx-auto mb-8 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-purple-500 animate-glow" />
              <div className="absolute inset-0.5 rounded-full bg-surface overflow-hidden">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="112px"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient animate-shimmer">{personalInfo.name}</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-muted mb-4 font-light">
              {personalInfo.title}
            </p>

            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-text-dim text-sm">Disponible para proyectos</span>
            </div>

            <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/projects"
                className="group relative px-8 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Ver Proyectos</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-xl border border-white/10 text-text-muted font-semibold text-sm hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                Sobre Mí
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-3.5 rounded-xl bg-white/5 text-text-muted font-semibold text-sm hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-accent/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Proyectos Completados', value: '15+' },
              { label: 'Tecnologías', value: '20+' },
              { label: 'Clientes Satisfechos', value: '10+' },
              { label: 'Años de Experiencia', value: '5+' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20 mb-4">
              PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proyectos{' '}
              <span className="text-gradient">Destacados</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Una selección de los proyectos más recientes y relevantes que he desarrollado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <div
                key={project.slug}
                className={`transition-all duration-700 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-text-muted text-sm font-medium hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300 group"
            >
              Ver todos los proyectos
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20 mb-4">
            TECH STACK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Tecnologías que{' '}
            <span className="text-gradient">utilizo</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js',
              'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'GraphQL',
              'Docker', 'Git', 'AWS', 'Figma',
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-text-muted text-sm font-medium hover:bg-accent/10 hover:border-accent/20 hover:text-accent-light transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Trabajemos <span className="text-gradient">juntos</span>?
              </h2>
              <p className="text-text-muted mb-8 max-w-lg mx-auto">
                Estoy abierto a nuevas oportunidades y proyectos interesantes. No dudes en contactarme.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Enviar mensaje
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
