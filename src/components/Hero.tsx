import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.css';
import { DATA } from '@/data/portfolioData';

export default function Hero() {

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>

        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.pingContainer}>
              <span className={styles.pingPulse}></span>
              <span className={styles.pingMain}></span>
            </span>
            3 YEARS OF FRONTEND EXCELLENCE
          </div>

          <h2 className={styles.title}>
            Crafting Digital <br />
            <span className={styles.gradientText}>Masterpieces.</span>
          </h2>

          {/* <p className={styles.bio}>{DATA.bio}</p> */}
<p className={styles.bio}>
  {DATA.bio.split("3 years").map((part, index, arr) => {
    if (index < arr.length - 1) {
      return (
        <React.Fragment key={index}>
          {part}
          <span className={styles.highlight}>3 years</span>
        </React.Fragment>
      );
    }
    return part;
  })}
</p>



          <div className={styles.socials}>
            <a href="#projects" className={styles.primaryBtn}>
              Explore Projects
            </a>

            <a
              href="/Neha-Yadav-CV.pdf"
              download="Neha-Yadav-CV.pdf"
              className={styles.secondaryBtn}
            >
              Download CV
            </a>

          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageBgCard}></div>
          {/* Fixed: ProfileImg property now exists on type PortfolioData */}
          <Image
            src={DATA.profileImg}
            alt={DATA.name}
            width={450}
            height={450}
            className={styles.profileImg}
            priority // Critical for SEO and Performance
          />
        </div>

      </div>
    </section>
  );
}