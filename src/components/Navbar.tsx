"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Menu, X } from 'lucide-react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.navInner}>
          {/* LEFT: Logo */}
          <div className={styles.logo}>
            <div className={styles.sidebarLogo}>
              <span>Neha</span><span>Yadav</span>
            </div>
          </div>

          {/* CENTER (Desktop only) */}
          <div className={styles.links}>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Stack</Link>
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
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

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
          <Link href="#experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#skills" onClick={() => setOpen(false)}>Stack</Link>
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