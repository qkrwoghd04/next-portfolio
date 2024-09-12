"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full lg:w-2/3 text-left ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
        <span className="hero-title">
          Junior DevOps Engineer
        </span>
      </h1>
      <p className="hero-text mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
        열정적인 개발자로서 혁신적인 웹 솔루션을 만들어내는 것을 즐깁니다.
        사용자 경험을 향상시키고 기술의 경계를 넓히는 것이 저의 목표입니다.
      </p>
      <div className="flex flex-col sm:flex-row justify-start space-y-3 sm:space-y-0 sm:space-x-4">
      </div>
    </div>
  );
}