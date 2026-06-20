import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Contacto',
    description:
        `Ponte en contacto con ${personalInfo.name}. Envíame un mensaje para colaborar en proyectos, oportunidades laborales o simplemente para saludar.`,
    alternates: { canonical: '/contact' },
    openGraph: {
        title: `Contacto - ${personalInfo.name}`,
        description: `Ponte en contacto con ${personalInfo.name}.`,
        url: '/contact',
        siteName: personalInfo.name,
        locale: 'es_ES',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contacto - ${personalInfo.name}`,
    description: `Página de contacto de ${personalInfo.name}`,
    url: `${personalInfo.siteUrl}/contact`,
    mainEntity: {
        '@type': 'Person',
        name: personalInfo.name,
        email: personalInfo.email,
        url: personalInfo.siteUrl,
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20 mb-4">
                        CONTACT
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Ponte en <span className="text-gradient">Contacto</span>
                    </h1>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente o quieres colaborar? Estaré encantado de escucharte.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Form */}
                    <div className="md:col-span-3">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/5">
                            <form
                                action={`https://formsubmit.co/${personalInfo.email}`}
                                method="POST"
                                className="space-y-5"
                            >
                                <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value={personalInfo.siteUrl} />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-1.5">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/5 text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-1.5">
                                            Correo electrónico
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/5 text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                                            placeholder="betuel.arones@tecsup.edu.pe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-text-muted mb-1.5">
                                        Asunto
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/5 text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                                        placeholder="¿De qué se trata?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-1.5">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/5 text-white placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-y"
                                        placeholder="Escribe tu mensaje aquí..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2 space-y-4">
                        {[
                            {
                                label: 'Email',
                                value: personalInfo.email,
                                href: `mailto:${personalInfo.email}`,
                                icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                            },
                            {
                                label: 'GitHub',
                                value: personalInfo.github,
                                href: personalInfo.github,
                                icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                            },
                            {
                                label: 'LinkedIn',
                                value: personalInfo.linkedin,
                                href: personalInfo.linkedin,
                                icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                            },
                        ].map(({ label, value, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 hover:bg-white/[0.07] transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <svg className="w-5 h-5 text-accent-light" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={icon.startsWith('M3') ? 2 : 0}>
                                        {icon.startsWith('M3') ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                                        ) : (
                                            <path d={icon} />
                                        )}
                                    </svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs text-text-dim">{label}</p>
                                    <p className="text-sm text-text-muted group-hover:text-white truncate transition-colors">
                                        {value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
