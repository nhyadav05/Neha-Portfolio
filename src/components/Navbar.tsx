"use client";

import React, { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import Link from "next/link";
import { Mail, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  useScrollReveal();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.navInner}>
          <div className={styles.logo}>
            <Link href="#" className={styles.logoLink}>
              <span>Neha</span>
              <span>Yadav</span>
            </Link>
          </div>

          <div className={styles.links}>
            <Link href="#experience">Experience</Link>
            <Link href="#education">Education</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Stack</Link>
            <Link href="#contact">Contact</Link>

          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              <span className={styles.themeIconWrap}>
                <Sun className={styles.themeIconSun} size={18} />
                <Moon className={styles.themeIconMoon} size={18} />
              </span>
            </button>
            <a href="mailto:nehainduyadav@gmail.com" className={styles.hireBtn}>
              <Mail size={16} />
              <span>Hire Me</span>
            </a>
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
          <Link href="#education" onClick={() => setOpen(false)}>Education</Link>
          <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#skills" onClick={() => setOpen(false)}>Stack</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
        <div className={styles.sidebarThemeRow}>
          <span className={styles.sidebarThemeLabel}>Theme</span>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className={styles.themeIconWrap}>
              <Sun className={styles.themeIconSun} size={18} />
              <Moon className={styles.themeIconMoon} size={18} />
            </span>
          </button>
        </div>

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