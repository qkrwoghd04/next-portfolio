"use client";

import { useEffect } from "react";
// components
import FullPageTransition  from '@/components/FullPageTransition'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main>
      <FullPageTransition />
    </main>
  );
};

export default Home;
