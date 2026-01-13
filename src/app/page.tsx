import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types'; // Import the Project interface
import styles from '../styles/page.module.css';
import { DATA } from '@/data/portfolioData';
import Skills from '@/components/Skills';

export default function Home() {
  return (
   <main className={styles.mainWrapper}>
      <Navbar />
      <Hero />
      <Experience />
      
      {/* Skills & Education Section */}
      <Skills />

      <section id="projects" className={styles.projectsContainer}>
        <h3 className={styles.sectionTitle}>
        <span className={styles.line}></span> Projects
      </h3>
        <div className={styles.projectsGrid}>
          {DATA.projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}