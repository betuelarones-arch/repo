import { Project } from '@/types';

export const personalInfo = {
    name: 'Betuel',
    title: 'Full Stack Developer',
    description:
        'Creo experiencias digitales modernas y escalables con tecnologías de vanguardia. Apasionado por el código limpio, el diseño UI/UX y la innovación tecnológica.',
    avatar: '/avatar.jpg',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tusitio.com',
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/betuelarones-arch',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/betuel-arones-silva/',
    email: process.env.NEXT_PUBLIC_EMAIL || 'betuel.arones@tecsup.edu.pe',
    location: 'Remote',
    available: true,
};

export const projects: Project[] = [
    {
        slug: 'business-model',
        title: 'Business Model Canvas',
        description:
            'Plataforma interactiva para crear y gestionar modelos de negocio con canvas dinámicos, colaboración en tiempo real y exportación a PDF.',
        longDescription:
            'Aplicación completa para emprendedores que permite diseñar, iterar y compartir modelos de negocio utilizando la metodología Canvas. Incluye editor visual drag-and-drop, colaboración multiusuario, historial de versiones y exportación profesional.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
        demoUrl: 'https://business-model-sigma.vercel.app',
        featured: true,
        category: 'Full Stack',
    },
    {
        slug: 'books-library',
        title: 'Biblioteca Digital',
        description:
            'Catálogo interactivo de libros con búsqueda avanzada, filtros dinámicos, sistema de reseñas y recomendaciones personalizadas.',
        longDescription:
            'Plataforma de gestión bibliotecaria que permite explorar un extenso catálogo de libros con búsqueda por título, autor, género y año. Incluye sistema de autenticación, reseñas de usuarios, listas de lectura personalizadas y recomendaciones basadas en preferencias.',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'NextAuth'],
        demoUrl: 'https://books-gilt-two.vercel.app',
        featured: true,
        category: 'Full Stack',
    },
    {
        slug: 'admin-dashboard',
        title: 'Admin Dashboard',
        description:
            'Dashboard administrativo con métricas en tiempo real, gráficos interactivos, gestión de usuarios y panel de control modular.',
        longDescription:
            'Panel de administración moderno con visualización de datos en tiempo real, gráficos dinámicos con Recharts, tabla de datos con filtros avanzados, gestión de roles y permisos, y tema claro/oscuro totalmente responsive.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        technologies: ['React', 'Next.js', 'TypeScript', 'Shadcn/ui', 'Tailwind CSS', 'Recharts'],
        demoUrl: 'https://shadcn-chi-five.vercel.app/dashboard',
        githubUrl: 'https://github.com/betuelarones-arch/admin-dashboard',
        featured: true,
        category: 'Frontend',
    },
    {
        slug: 'rick-and-morty',
        title: 'Rick & Morty Explorer',
        description:
            'Explorador de personajes, episodios y ubicaciones del universo Rick & Morty con búsqueda en tiempo real y diseño inspirado en la serie.',
        longDescription:
            'Aplicación interactiva que consume la API pública de Rick & Morty para mostrar personajes, episodios y ubicaciones con filtros combinados, paginación infinita, modo oscuro y una interfaz visual inspirada en la estética psicodélica de la serie.',
        image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&q=80',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Apollo'],
        demoUrl: 'https://ricky-and-morty-imam.vercel.app',
        featured: true,
        category: 'Frontend',
    },
    {
        slug: 'cineplaneta',
        title: 'CinePlaneta',
        description:
            'Plataforma de descubrimiento de películas con tráilers, reseñas, valoraciones y recomendaciones basadas en inteligencia artificial.',
        longDescription:
            'Aplicación de cine que integra la API de TMDB para mostrar películas populares, próximos estrenos y tendencias. Incluye reproductor de tráilers, sistema de valoración, búsqueda avanzada con filtros y recomendaciones personalizadas.',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'Framer Motion'],
        demoUrl: 'https://cineplaneta.vercel.app/movies',
        featured: true,
        category: 'Full Stack',
    },
    {
        slug: 'linflow',
        title: 'LinFlow',
        description:
            'Herramienta visual para crear diagramas de flujo, mapas mentales y wireframes con interfaz drag-and-drop intuitiva.',
        longDescription:
            'Editor visual de diagramas de flujo con interfaz drag-and-drop, nodos personalizables, conexiones inteligentes, exportación a múltiples formatos y colaboración en tiempo real. Ideal para diseñar procesos, mapas conceptuales y wireframes de aplicaciones.',
        image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Flow', 'Zustand'],
        demoUrl: 'https://lin-flow.vercel.app',
        githubUrl: 'https://github.com/betuelarones-arch/linflow',
        featured: true,
        category: 'Full Stack',
    },
];

export const skills = [
    { name: 'React & Next.js', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 92, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'GraphQL', level: 78, category: 'backend' },
    { name: 'Docker', level: 70, category: 'devops' },
    { name: 'Git', level: 90, category: 'devops' },
    { name: 'AWS', level: 65, category: 'devops' },
    { name: 'Figma', level: 72, category: 'design' },
];

export const experience = [
    {
        role: 'Full Stack Developer Senior',
        company: 'TechCorp Inc.',
        period: '2022 - Presente',
        description:
            'Lideré el desarrollo de aplicaciones web escalables sirviendo a más de 50K usuarios. Implementé arquitecturas serverless y optimicé pipelines CI/CD reduciendo tiempos de deploy en un 60%.',
    },
    {
        role: 'Desarrollador Frontend',
        company: 'DigitalWave Studio',
        period: '2020 - 2022',
        description:
            'Construcción de interfaces modernas con React y TypeScript. Implementé diseño responsivo, pruebas unitarias con Jest y migré aplicaciones legacy al stack moderno.',
    },
    {
        role: 'Desarrollador Junior',
        company: 'InnovaDev',
        period: '2018 - 2020',
        description:
            'Desarrollo de funcionalidades en aplicaciones web, mantenimiento de bases de datos y soporte técnico. Participé en la migración a microservicios.',
    },
];

export const education = [
    {
        degree: 'Ingeniería en Sistemas Computacionales',
        school: 'Universidad Tecnológica',
        period: '2014 - 2018',
    },
    {
        degree: 'Máster en Desarrollo Web Full Stack',
        school: 'Academlo',
        period: '2019',
    },
];
