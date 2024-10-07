"use client"

import { useState, useEffect } from "react";
import Link from "next/link"
import DarkModeToggleButton from "../ui/dark-mode-toggle-button";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`
      ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md bg-gray-700 dark:bg-gray-800' : 'absolute top-0 left-0 right-0 bg-transparent'}
      transition-all duration-300 ease-in-out z-50
    `}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-xl text-slate-300">WHO IS JAEHONG PARK</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#aboutMe" onClick={scrollToSection('aboutMe')} className="header-item">ABOUT ME</a>
          <a href="#techStack" onClick={scrollToSection('techStack')} className="header-item">TECH STACK</a>
          <a href="#projects" onClick={scrollToSection('projects')} className="header-item">MY PROJECTS</a>
          <a href="#contacts" onClick={scrollToSection('contacts')} className="header-item">CONTACTS</a>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
}