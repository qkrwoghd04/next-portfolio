"use client";

import Link from "next/link"
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
    <header
      className={`${
        isSticky
          ? "fixed w-screen z-10"
          : "absolute w-screen z-50 transition-all duration-300 ease-in-out"
      } transition-all duration-300 ease-in-out hover:bg-white/80 hover:backdrop-blur-sm`}
    >
      <div className="py-4 px-4 mx-4 flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            {"<JaehongPark />"}
          </h1>
        </Link>

        {/* desktop nav WITH hiring me button*/}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
        </div>

        {/*  moblie nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}