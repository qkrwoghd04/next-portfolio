"use client";

import { useEffect } from "react";
import TypoAnimation from "@/components/TypoAnimation"
import Image from 'next/image'
import BackgroundImg from '../public/assets/images/background.jpg' 

const Home = () => {
  useEffect(() => {
    // 페이지가 로드될 때 스크롤을 최상단으로 이동
    window.scrollTo(0, 0);
  }, []); // 빈 배열로 설정하여 처음 로드될 때만 실행
  return (
    <section>
      <div className='top-0 w-full h-[100vh] flex justify-center items-center text-xl xl:text-3xl'>
        <div className="w-max">
          <h1 className="mb-6 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-[5vw] text-white font-bold xl:text-3xl">
            안녕하세요, 주니어 개발자 박재홍입니다
          </h1>
          <Image
          src={BackgroundImg}
          placeholder="blur"
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
            opacity: 0.2
          }}
          alt="Picture of the author"
        />
        </div>
      </div>
      <TypoAnimation />
    </section>
  );
};

export default Home;
