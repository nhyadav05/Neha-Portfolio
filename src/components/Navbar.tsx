"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {  Mail, Menu, X, Briefcase, FolderCode, Layers } from 'lucide-react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track scroll position for navbar background and active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['experience', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className={`${styles.navContainer} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navInner}>
          {/* LEFT: Logo */}
          <Link href="#" className={styles.logo}>
            <div className={styles.logoContainer}>
              <span className={styles.logoText}>Neha</span>
              <span className={styles.logoAccent}>Yadav</span>
            </div>
          </Link>

          {/* CENTER (Desktop only) */}
          <div className={styles.links}>
            <Link 
              href="#experience" 
              className={`${styles.link} ${activeSection === 'experience' ? styles.active : ''}`}
            >
              <span className={styles.linkText}>Experience</span>
              <span className={styles.linkIndicator}></span>
            </Link>
            <Link 
              href="#projects" 
              className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`}
            >
              <span className={styles.linkText}>Projects</span>
              <span className={styles.linkIndicator}></span>
            </Link>
            <Link 
              href="#skills" 
              className={`${styles.link} ${activeSection === 'skills' ? styles.active : ''}`}
            >
              <span className={styles.linkText}>Stack</span>
              <span className={styles.linkIndicator}></span>
            </Link>
            <Link 
              href="#contact" 
              className={`${styles.link} ${activeSection === 'contact' ? styles.active : ''}`}
            >
              <span className={styles.linkText}>Contact</span>
              <span className={styles.linkIndicator}></span>
            </Link>
          </div>

          {/* RIGHT */}
          <div className={styles.actions}>
            {/* Desktop actions */}
            {/* <a href="tel:+918964850575" className={styles.iconBtn}>
              <Phone size={16} />
            </a> */}


            <a href="mailto:nehainduyadav@gmail.com" className={styles.hireBtn}>
              <Mail size={16} />
              <span>Hire Me</span>
              <div className={styles.hireBtnGlow}></div>
            </a>


            {/* Mobile Hamburger */}
            <button
              className={styles.menuBtn}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${open ? styles.overlayVisible : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* LEFT Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>

        {/* Sidebar Header */}
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogo}>
            <span>Neha</span><span>Yadav</span>
          </div>

          <button
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className={styles.sidebarLinks}>
          <Link href="#experience" onClick={() => setOpen(false)} className={styles.sidebarLinkItem}>
            <div className={styles.sidebarIconWrapper}>
              <Briefcase size={20} />
            </div>
            <div className={styles.sidebarLinkContent}>
              <span className={styles.sidebarLinkTitle}>Experience</span>
              <span className={styles.sidebarLinkDesc}>Work History</span>
            </div>
          </Link>
          <Link href="#projects" onClick={() => setOpen(false)} className={styles.sidebarLinkItem}>
            <div className={styles.sidebarIconWrapper}>
              <FolderCode size={20} />
            </div>
            <div className={styles.sidebarLinkContent}>
              <span className={styles.sidebarLinkTitle}>Projects</span>
              <span className={styles.sidebarLinkDesc}>Portfolio Work</span>
            </div>
          </Link>
          <Link href="#skills" onClick={() => setOpen(false)} className={styles.sidebarLinkItem}>
            <div className={styles.sidebarIconWrapper}>
              <Layers size={20} />
            </div>
            <div className={styles.sidebarLinkContent}>
              <span className={styles.sidebarLinkTitle}>Stack</span>
              <span className={styles.sidebarLinkDesc}>Skills & Tech</span>
            </div>
          </Link>
          <Link href="#contact" onClick={() => setOpen(false)} className={styles.sidebarLinkItem}>
            <div className={styles.sidebarIconWrapper}>
              <Mail size={20} />
            </div>
            <div className={styles.sidebarLinkContent}>
              <span className={styles.sidebarLinkTitle}>Contact</span>
              <span className={styles.sidebarLinkDesc}>Get In Touch</span>
            </div>
          </Link>
        </nav>

        <div className={styles.sidebarActions}>
          {/* <a href="tel:+918964850575">
            <Phone size={16} />
            <span>Call Me</span>
          </a> */}
          <a href="mailto:nehainduyadav@gmail.com">
            <Mail size={16} />
            <span>Hire Me</span>
          </a>
        </div>


      </aside>

    </>
  );
}

