import React from 'react'

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
import Lenis from '@studio-freight/lenis'

function TypoAnimation() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let lenis;

    const text = new SplitType('.target');

    const initSmooth = () => {
      lenis = new Lenis({
        lerp: 0.05,
        smooth: true,
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time)
        requestAnimationFrame(scrollFn)
      };

      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      const chars = text.chars;
      const words = text.words;

      for (const word of words) {
        chars.forEach((char) => {
          gsap.set(char.parentNode, { perspective: 2000 });
        });

        gsap.fromTo(chars, {
          'will-change': 'opacity, transform',
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
            scrollTrigger: {
              trigger: word,
              start: 'top+=20 bottom',
              end: 'top center',
              scrub: true
            }
          })
      }
    };


    const init = () => {
      initSmooth();
      scroll();
    }

    init();
  })


  return (
    <div className='h-full w-full'>
      <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
        <div className='flex flex-col w-screen relative px-8 py-10 z-20'>
          <h2 className='content_title text-[8vw] leading-[0.8] text-center grid gap-8'>
            <span className='uppercase target'>constant</span>
            <span className='uppercase target'>challenge</span>
          </h2>
        </div>

        <div className='flex flex-col w-screen relative px-8 py-6'>
          <p className="text-center max-w-[580px] mx-[auto] my-6 text-white/80 text-[1.25rem] leading-normal">
            <b className='text-white'>&apos;끊임없는 도전&apos;</b> <br /><br />
            새롭게 생겨나는 기술과 프레임워크,<br />
            빠르게 변화하는 인프라와 프로세스,<br />
            지속적인 적응이 필요한 IT 분야에서는<br />
            열정만으로는 충분하지 않다고 생각합니다.<br /><br />
            저는 <b className='text-red-400'>관습</b>에 따라 행동하기를 원하지 않습니다.<br />
            <b className='text-white'>인지</b>와 <b className='text-white'>판단</b>을 통해 선택할 줄 아는 사람이 되겠습니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TypoAnimation