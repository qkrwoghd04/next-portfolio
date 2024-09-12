"use client"

import { useState, useEffect } from "react";
import Link from "next/link"
import DarkModeToggleButton from "./dark-mode-toggle-button";

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
      ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md bg-white dark:bg-gray-800' : 'absolute top-0 left-0 right-0 bg-transparent'}
      transition-all duration-300 ease-in-out z-50
    `}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-xl text-gray-400">WHO IS JAEHONG PARK</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#aboutMe" onClick={scrollToSection('aboutMe')} className="mr-5 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">ABOUT ME</a>
          <a href="#techStack" onClick={scrollToSection('techStack')} className="mr-5 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">TECH STACK</a>
          <a href="#projects" onClick={scrollToSection('projects')} className="mr-5 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">MY PROJECTS</a>
          <a href="#contacts" onClick={scrollToSection('contacts')} className="mr-5 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">CONTACTS</a>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
}