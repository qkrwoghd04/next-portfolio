"use client"

import React, { useEffect } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

// images
import BackgroundImg from '@/public/assets/images/background.webp'

function Hero() {
  useEffect(() => {
    const text = new SplitType('.title');
    const chars = text.chars;

    gsap.fromTo(chars, 
      {
        opacity: 0,
        y: (position, _, arr) => -40 * Math.abs(position - arr.length / 2),
        z: () => gsap.utils.random(-1500, -600),
        rotationX: () => gsap.utils.random(-500, -200),
      },
      {
        ease: 'power1.inOut',
        opacity: 1,
        y: 0,
        z: 0,
        rotationX: 0,
        stagger: {
          each: 0.06,
          from: 'center',
        },
        duration: 0.8
      }
    );

    // 클린업 함수
    return () => {
      text.revert();
    };
  }, []);

  return (
    <section className='relative w-screen h-screen flex flex-col justify-center items-center text-white/100 bg-black/80'>
      <Image
        src={BackgroundImg}
        placeholder="blur"
        quality={98}
        fill
        priority
        sizes="100vw"
        className='object-cover opacity-35'
        alt="Background image"
      />
      <div className='relative px-8 py-10 z-20'>
        <h2 className='content_title text-5xl 2xl:text-[6vw] leading-[0.8] text-center grid gap-8'>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='uppercase title font-extralight'>constant</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}  className='uppercase title font-extralight'>challenge</motion.span>
        </h2>
      </div>

      <div className='flex flex-col w-screen relative px-8 py-6'>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }} 
          className="text-center max-w-[580px] mx-auto my-4 text-white/80 text-[20px] lg:text-[20px] 2xl:text-3xl leading-normal 2xl:leading-relaxed font-thin"
        >
          <b className='font-medium text-white text-[30px] 2xl:text-[50px] font-pretendard'>끊임없는 도전</b> <br /><br />
          새롭게 생겨나는 기술과 프레임워크,<br />
          빠르게 변화하는 인프라와 프로세스,<br />
          지속적인 적응이 필요한 IT 분야에서는<br />
          열정만으로는 충분하지 않다고 생각합니다<br /><br />
          저는 관습에 따라 행동하지 않습니다<br />
          스스로의 <b className='text-white'>인지</b>와 <b className='text-white'>판단</b>으로<br />
          다양한 선택을 할 줄 아는 사람입니다
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;