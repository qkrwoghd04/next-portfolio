"use client"

import React from 'react'
import Image from 'next/image'
import Img1 from '../public/assets/images/1.jpg'
import Img2 from '../public/assets/images/2.jpg'
import Img3 from '../public/assets/images/3.jpg'
import Img4 from '../public/assets/images/4.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from 'react';

function ActivityAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    const gridItem = document.querySelectorAll('.grid-item');
    
    const ScrollAni = () => {
      gsap.fromTo(
        (document.querySelector('.activity')),
        { opacity:0 },
        { opacity: 0.8, duration: 2, ease: "elastic" }
      )
      gridItem.forEach((item, index)=> {
        console.log(item);
    
        const transformOrigin = index % 2 === 0 ? '0% 0%' : '100% 0%'; 
        const xStart = index % 2 === 0 ? -100 : 100; 

        gsap.timeline({
          defaults: {
            ease: 'power4',
          },
          scrollTrigger: {
            trigger: item,
            start: 'top center+=20%',
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
    }
    init();
  },[]);
  
  return (
    <section className="relative w-full min-h-screen">
      <div className="w-full grid grid-cols-[100%] relative mt-[10vh] mx-auto mb-[40vh] justify-center items-center">
        <p className="activity w-full text-6xl 2xl:text-[6vw] text-center mb-20">ACTIVITY</p>
        
        {[
          { src: Img1, caption: "EIFFEL TOWER, PARIS" },
          { src: Img2, caption: "TAJMAHAL, INDIA" },
          { src: Img3, caption: "SEOUL KOREA" },
          { src: Img4, caption: "STONE HENGE, UK" },
        ].map((image, index) => (
          <div className="grid-item relative mb-10" key={index}>
            <div className="grid-item-img relative overflow-hidden grid place-items-center w-full h-auto">
              <div className="grid-item-caption 2xl:text-6xl text-4xl">{image.caption}</div>
              <Image 
                src={image.src}
                quality={100}
                alt={image.caption}
                className="grid-img w-full h-1/2 lg:w-2/3 2xl:w-2/3 lg:h-[500px] 2xl:h-[800px] bg-[100%] bg-cover relative -z-10" 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ActivityAnimation
