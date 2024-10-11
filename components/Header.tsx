"use client";

import Link from "next/link"
import { Button } from "./ui/button"

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="w-screen">
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