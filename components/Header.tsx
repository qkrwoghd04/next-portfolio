"use client";

import Link from "next/link"
import { Button } from "./ui/button"
import { useState, useEffect } from "react";

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`${isSticky ? 'fixed w-screen z-10' : 'absolute w-screen transition-all duration-300 ease-in-out z-50'}`}>
      <div className="py-4 px-4 mx-4 flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            JAEHONG PARK<span className="text-accent"> .</span>
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