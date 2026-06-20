'use client';

import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState('all');
  useEffect(() => { const t = setTimeout(() => setMounted(true), 0); return () => clearTimeout(t); }, []);

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20 mb-4">
            PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="text-gradient">Proyectos</span>
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Una colección de aplicaciones y sitios web que he construido con tecnologías modernas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'bg-white/5 text-text-muted border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
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

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted">No se encontraron proyectos en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
}
