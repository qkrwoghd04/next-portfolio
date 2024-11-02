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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <FullPageTransition />
    </main>
  );
};

export default Home;
