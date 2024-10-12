"use client";

import { useEffect } from "react";
// components
import Hero from '@/components/Hero'
import TypoAnimation from '@/components/TypoAnimation'
import ImgReveal from '@/components/ImgReveal'
import Test from '@/components/Test'

const Home = () => {
  useEffect(() => {
    // 페이지가 로드될 때 스크롤을 최상단으로 이동
    window.scrollTo(0, 0);
  }, []); // 빈 배열로 설정하여 처음 로드될 때만 실행
  return (
    <main>
      <Hero />
      <TypoAnimation />
      <ImgReveal />
      {/* <Test /> */}
    </main>
  );
};

export default Home;
