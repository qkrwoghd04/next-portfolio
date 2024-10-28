"use client"

import React from "react";
import Lottie from 'react-lottie-player'
import WorkInProgress from "../../public/workInProgress_ani.json"
import "swiper/css";


const Work = () => {

  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center">
      <p className="text-5xl font-normal">준비 중입니다!</p>
      <Lottie
        loop
        play
        animationData={WorkInProgress}
        style={{ width: '100%', height: '100%', maxWidth: '380px', maxHeight: '380px' }}
        speed={0.8}
      
      />
    </div>
  )
}

export default Work;