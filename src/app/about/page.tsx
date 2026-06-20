'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { personalInfo, skills, experience, education } from '@/lib/data';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [activeSkill, setActiveSkill] = useState('all');
  useEffect(() => { const t = setTimeout(() => setMounted(true), 0); return () => clearTimeout(t); }, []);

  const skillCategories = [
    { id: 'all', label: 'Todas' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'devops', label: 'DevOps' },
    { id: 'design', label: 'Diseño' },
  ];

  const filteredSkills = activeSkill === 'all' ? skills : skills.filter(s => s.category === activeSkill);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20 mb-4">
            ABOUT
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-gradient">Mí</span>
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Conoce más sobre mi trayectoria, habilidades y pasión por la tecnología.
          </p>
        </div>

        {/* Profile */}
        <div
          className={`grid md:grid-cols-3 gap-10 mb-20 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/5 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-4 flex gap-3 justify-center">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-text-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-text-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-text-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¡Hola! Soy {personalInfo.name}
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Soy un desarrollador full stack apasionado por crear experiencias web excepcionales.
                Me especializo en construir aplicaciones modernas y escalables utilizando tecnologías
                de vanguardia como React, Next.js, TypeScript y Node.js.
              </p>
              <p>
                Mi enfoque está en escribir código limpio, mantenible y eficiente, siempre buscando
                las mejores prácticas y las últimas innovaciones para entregar productos de alta calidad.
                Creo firmemente en el poder del diseño centrado en el usuario y la importancia de
                construir interfaces intuitivas y accesibles.
              </p>
              <p>
                Cuando no estoy programando, me gusta contribuir a proyectos de código abierto,
                escribir artículos técnicos y explorar nuevas tecnologías. Estoy constantemente
                aprendiendo y buscando formas de mejorar mis habilidades.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Habilidades <span className="text-gradient">Técnicas</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveSkill(cat.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSkill === cat.id
                      ? 'bg-accent text-white'
                      : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                  <span className="text-xs text-accent-light">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light transition-all duration-1000"
                    style={{ width: mounted ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20 mb-4">
              RESUME
            </span>
            <h2 className="text-3xl font-bold text-white">
              Experiencia <span className="text-gradient">Profesional</span>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/5" />
            <div className="space-y-10">
              {experience.map((item, i) => (
                <div
                  key={item.role}
                  className={`relative pl-12 transition-all duration-700 ${
                    mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="absolute left-3 top-1 w-8 h-8 rounded-full bg-surface border-2 border-accent/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <p className="text-accent-light text-sm font-medium mb-1">{item.company}</p>
                    <p className="text-text-dim text-xs mb-3">{item.period}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">
              Formación <span className="text-gradient">Académica</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{item.degree}</h3>
                    <p className="text-text-muted text-sm">{item.school}</p>
                    <p className="text-text-dim text-xs mt-1">{item.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">
              Intereses & <span className="text-gradient">Pasiones</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Open Source', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
              { label: 'Escritura Técnica', icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z' },
              { label: 'Inteligencia Artificial', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { label: 'Ciberseguridad', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
              { label: 'DevOps', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
              { label: 'UI/UX Design', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
              { label: 'Cloud Computing', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
              { label: 'IoT', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
            ].map(({ label, icon }) => (
              <div
                key={label}
                className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 hover:bg-white/[0.07] transition-all duration-300 text-center group cursor-default"
              >
                <svg className="w-6 h-6 mx-auto mb-2 text-accent-light group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
                </svg>
                <p className="text-sm font-medium text-text-muted group-hover:text-white transition-colors">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20 overflow-hidden text-center">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Trabajemos Juntos?</h2>
              <p className="text-text-muted mb-6 max-w-lg mx-auto">
                Estoy abierto a nuevas oportunidades y proyectos interesantes. No dudes en contactarme para colaborar.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Contáctame
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
