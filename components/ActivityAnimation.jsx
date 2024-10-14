"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import HighSchool from '../public/assets/images/HighSchool.jpg';
import University from '../public/assets/images/University.jpg';
import OpenToWork from '../public/assets/images/OpenToWork.jpg';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ActivityAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const gridItem = document.querySelectorAll('.grid-item');

    const ScrollAni = () => {
      // Animate timeline text
      gsap.fromTo(
        '.timeline',  
        { scale: 0.5, opacity: 0, y: -50 }, 
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: '.timeline',
            start: 'top bottom',
            end: 'top+=50px',
            scrub: true,
          },
        }
      );

      // Animate timeline items
      gridItem.forEach((item, index) => {
        console.log(item);

        const transformOrigin = index % 2 === 0 ? '0% 0%' : '100% 0%';
        const xStart = index % 2 === 0 ? -100 : 100;

        gsap.timeline({
          defaults: {
            ease: 'power4',
          },
          scrollTrigger: {
            trigger: item,
            start: 'top center+=25%',
            end: '+=100%',
            scrub: true,
          },
        })
        .fromTo(
          item.querySelector('.grid-item-img'),
          { scale: 0, transformOrigin },
          { scale: 1 }
        )
        .fromTo(
          item.querySelector('.grid-img'),
          { scale: 0, xPercent: xStart, transformOrigin },
          { scale: 1, xPercent: 0 },
          0
        )
        .fromTo(
          item.querySelector('.grid-item-caption'),
          { yPercent: 200, xPercent: 50, opacity: 0 },
          { ease: 'power1', yPercent: 0, xPercent: 0, opacity: 1 },
          0
        );
      });
    };

    const init = () => {
      ScrollAni();
    };

    init();
  }, []);

  return (
    <section className="relative w-full min-h-screen">
      <div className="w-full grid grid-cols-[100%] relative mt-[10vh] mx-auto mb-[40vh] justify-center items-center">
        <p className="timeline w-full text-6xl 2xl:text-[6vw] text-center mb-20">TimeLine</p>
        
        {[
          { src: HighSchool, caption: "China Hongkong English School, Guangdong(广东), 2014-2017" },
          { src: University, caption: "Xian-Jiaotong Liverpool University, 2017-2024 (3.5/4.0)" },
          { src: OpenToWork, caption: "Open to work, Korea, Mapo, 2024-" },
        ].map((image, index) => (
          <div className="grid-item relative mb-10" key={index}>
            <div className="grid-item-img relative overflow-hidden grid place-items-center w-full h-auto">
              <div className="grid-item-caption 2xl:text-6xl text-3xl lg:mb-10 2xl:mb-15">{image.caption}</div>
              <Image 
                src={image.src}
                quality={100}
                alt={image.caption}
                className="grid-img w-full h-3/4 lg:w-2/3 2xl:w-2/3 lg:h-[500px] 2xl:h-[800px] bg-[100%] bg-cover relative -z-10" 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityAnimation;
