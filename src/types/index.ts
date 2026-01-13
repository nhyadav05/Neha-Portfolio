export interface Project {
    id: number;
    title: string;
    category: string; // Required for your data
    tech: string[];
    fullDesc: string;
    img: string;
    link?: string; // Optional URL for project link
}

export interface Experience {
    role: string;
    company: string;
    date: string;
    desc: string;
}

export interface Education {
    degree: string;
    school: string;
    year: string;
    location?: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface PortfolioData {
    name: string;
    role: string;
    bio: string;
    profileImg: string; // Required for your data
    skills: string[];
    languages: Language[];
    experience: Experience[];
    education: Education[];
    projects: Project[];
}