import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return { title: 'Proyecto no encontrado' };
    }

    return {
        title: project.title,
        description: project.description,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            title: `${project.title} - ${personalInfo.name}`,
            description: project.description,
            url: `/projects/${project.slug}`,
            siteName: personalInfo.name,
            locale: 'es_ES',
            type: 'article',
            images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description,
            images: [project.image],
        },
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.title,
        description: project.description,
        image: project.image,
        author: { '@type': 'Person', name: personalInfo.name },
        url: `${personalInfo.siteUrl}/projects/${project.slug}`,
        inLanguage: 'es',
    };

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-text-muted hover:text-accent-light transition-colors mb-8 group"
                >
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Volver a Proyectos
                </Link>

                <article>
                    <div className="flex flex-wrap gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20">
                            {project.category}
                        </span>
                        {project.featured && (
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Destacado
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {project.title}
                    </h1>

                    <p className="text-lg text-text-muted mb-8 leading-relaxed">
                        {project.longDescription || project.description}
                    </p>

                    <div className="relative w-full aspect-video mb-10 rounded-2xl overflow-hidden border border-white/5">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-bold text-white mb-4">Tecnologías Utilizadas</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-text-muted text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Ver Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-text-muted font-semibold text-sm hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Ver Código
                                </a>
                            )}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
