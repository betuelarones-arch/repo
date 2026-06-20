export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
    category: string;
}
