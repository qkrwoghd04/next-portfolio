"use client";

import Link from "next/link"
import { Button } from "./ui/button"
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation' // 추가

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isResumePage = pathname === '/resume';

  return (
    <header
      className={`${
        isSticky
          ? "fixed w-screen z-10"
          : isResumePage 
          ? "relative w-full  z-50 transition-all duration-300 ease-in-out" : "absolute w-screen z-50 transition-all duration-300 ease-in-out"
      } transition-all duration-300 ease-in-out hover:bg-white/80 hover:backdrop-blur-sm`}
    >
      <div className="py-4 px-4 mx-4 flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            JAEHONG PARK<span className="text-gray-700"> .</span>
          </h1>
        </Link>

        {/* desktop nav WITH hiring me button*/}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*  moblie nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}