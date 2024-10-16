"use client";

import { useEffect } from "react";
// components
import Hero from '@/components/Hero'
import TypoAnimation from '@/components/TypoAnimation'
import ActivityAnimation from '@/components/ActivityAnimation'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main>
      <Hero />
      <TypoAnimation />
      <ActivityAnimation />
    </main>
  );
};

export default Home;
