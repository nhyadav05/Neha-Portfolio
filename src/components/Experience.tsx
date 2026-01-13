import React from 'react';
// If @/ fails, use the relative path: ../data/portfolio
import styles from '@/styles/Experience.module.css';
import { Experience as ExperienceType } from '@/types'; // Import the type
import { DATA } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span className={styles.line}></span> Professional Journey
      </h3>
      
      <div className={styles.grid}>
        {/* Added the type 'ExperienceType' to the exp parameter */}
        {DATA.experience.map((exp: ExperienceType, index: number) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <h4 className={styles.role}>{exp.role}</h4>
              <span className={styles.date}>{exp.date}</span>
            </div>
            <p className={styles.company}>{exp.company}</p>
            <p className={styles.desc}>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}