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

function ImgReveal() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    const gridItem = document.querySelectorAll('.grid-item');
    
    const ScrollAni = () => {
      gridItem.forEach((item) => {
        const imgElement = item.querySelector('.grid-item-img');
        if (imgElement) { // Check if imgElement is defined
          gsap.timeline({
            default: {
              ease: 'power4',
            },
            scrollTrigger: {
              trigger: item,
              start: 'top bottom-=15%',
              end: '+=100%',
              scrub: true,
            },
          })
          .fromTo(imgElement, { scale: 0, transformOrigin: '0% 0%' }, { scale: 1 })
          .fromTo(item.querySelector('.grid-img'), { scale: 0, transformOrigin: '0% 0%' }, { scale: 1 }, 0)
          .fromTo(item.querySelector('.grid-item-caption'), { yPercent: 200, xPercent: 50, opacity: 0 }, { ease: 'power1', yPercent: 0, xPercent: 0, opacity: 1 }, 0);
        }
      });
    };
    const init = () => {
      ScrollAni();
    }
    init();
  },[]);
  return (
    <section className="relative w-full h-[100vh]">
      <div className="w-full grid-cols-[100%] grid relative mt-[10vh] mx-[auto] mb-[40vh] justify-center items-center ml-[100px]">
        <div className="grid-item relative m-0">
          <div className="grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]">
            <div className="grid-item-caption">EIFFEL TOWER, PARIS</div>
            <Image 
              src={Img1}
              quality={100}
              alt="Picture of the author"
              className="grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative"
            />
          </div>
        </div>
        <div className="grid-item relative m-0">
          <div className="grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]">
            <div className="grid-item-caption">TAJMAHAL, INDIA</div>
            <Image 
              src={Img2}
              quality={100}
              alt="Picture of the author"
              className="grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative"
            />
          </div>
        </div>
        <div className="grid-item relative m-0">
          <div className="grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]">
            <div className="grid-item-caption">SEOUL KOREA</div>
            <Image 
              src={Img3}
              quality={100}
              alt="Picture of the author"
              className="grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative"
            />
          </div>
        </div>
        <div className="grid-item relative m-0">
          <div className="grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]">
            <div className="grid-item-caption">STONE HENGE, UK</div>
            <Image 
              src={Img4}
              quality={100}
              alt="Picture of the author"
              className="grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative"
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default ImgReveal