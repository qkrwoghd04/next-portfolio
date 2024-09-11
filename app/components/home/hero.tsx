"use client";

import Link from 'next/link'
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full lg:w-2/3 text-left ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
        <span className="text-blue-600 dark:text-blue-400">
          Junior DevOps Engineer
        </span>
      </h1>
      <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
        열정적인 개발자로서 혁신적인 웹 솔루션을 만들어내는 것을 즐깁니다.
        사용자 경험을 향상시키고 기술의 경계를 넓히는 것이 저의 목표입니다.
      </p>
      <div className="flex flex-col sm:flex-row justify-start space-y-3 sm:space-y-0 sm:space-x-4">
        <Link href="/projects" className="inline-block text-center">
          <button className="btn-project px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full transition-all duration-300 ease-in-out 
                             bg-blue-600 hover:bg-blue-700 text-white 
                             dark:bg-blue-500 dark:hover:bg-blue-600
                             shadow-md hover:shadow-lg 
                             transform hover:-translate-y-0.5 hover:scale-105
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}