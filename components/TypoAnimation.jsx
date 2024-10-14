import React, { useEffect } from 'react';

// Scroll Effect
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';

function TypoAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let lenis;

    const text = new SplitType('.target');

    const splitText = new SplitType('.split', {
      types: 'words, chars',
    });

    // scroll setting
    const initSmooth = () => {
      lenis = new Lenis({
        lerp: 0.025,
        smoothWheel: true,
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };


    // Animate when scoll
    const scroll = () => {

      // Animate Constant Challenge Text
      const chars = text.chars;
      const words = text.words;

      for (const word of words) {
        chars.forEach((char) => {
          gsap.set(char.parentNode, { perspective: 3000 });
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
            start: 'top bottom',
            end: 'top center-=15%',
            scrub: true,
          },
        });
      }

      // Animate the split text in motion.p
      const splitChars = splitText.chars;

      gsap.fromTo(splitChars, {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.split',
          start: 'top bottom-=10%',
          end: 'top center',
          scrub: true,
        },
      });
    };

    const init = () => {
      initSmooth();
      scroll();
    };

    init();
  }, []); 

  return (
    <section className='w-full h-[100vh] flex flex-col justify-center items-center'>
      <div className='flex flex-col relative px-8 py-10 z-20'>
        <h2 className='content_title text-6xl 2xl:text-[6vw] leading-[0.8] text-center grid gap-8'>
          <span className='uppercase target'>constant</span>
          <span className='uppercase target'>challenge</span>
        </h2>
      </div>

      <div className='flex flex-col w-screen relative px-8 py-6'>
        <motion.p initial="hidden" whileInView="reveal" className="split text-center max-w-[580px] mx-[auto] my-4 text-white/60 text-[20px] lg:text-[20px] 2xl:text-3xl leading-normal 2xl:leading-relaxed">
          <b className='text-white text-[30px]'>&apos;끊임없는 도전&apos;</b> <br /><br />
          새롭게 생겨나는 기술과 프레임워크,<br />
          빠르게 변화하는 인프라와 프로세스,<br />
          지속적인 적응이 필요한 IT 분야에서는<br />
          열정만으로는 충분하지 않다고 생각합니다<br /><br />
          저는 관습에 따라 행동하지 않습니다<br />
          스스로의 <b className='text-white'>인지</b>와 <b className='text-white'>판단</b>을 통해 결정하고<br />
          다양한 선택을 할 줄 아는 사람입니다
        </motion.p>
      </div>
    </section>
  );
}

export default TypoAnimation;
