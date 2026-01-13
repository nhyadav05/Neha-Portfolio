import React from 'react';
import { Education } from '@/types';
import styles from '@/styles/Skills.module.css';

import { DATA } from '@/data/portfolioData';

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <h3 className={styles.sectionTitle}>
                <span className={styles.line}></span>Technical Stack
            </h3>
            {/* Technical Stack - Spans 2 columns on large screens */}
            <div className={`${styles.glassCard} ${styles.skillsArea}`}>


                <div className={styles.skillsList}>
                    {DATA.skills.map((skill: string, index: number) => (
                        <span key={index} className={styles.skillTag}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>


        </section>
    );
}