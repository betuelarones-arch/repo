'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block relative rounded-2xl overflow-hidden bg-surface-light border border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
            style={{
                animationDelay: `${index * 150}ms`,
            }}
        >
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent-light border border-accent/30 backdrop-blur-sm">
                        {project.category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-light transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-muted border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent-light">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-accent/20 transition-all duration-500 pointer-events-none" />
        </Link>
    );
}
