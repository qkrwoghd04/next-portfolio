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
      <p className="hero-text mt-10 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
      &quot;세상이, 혹은 자기 몫에 해당하는 세상이, <br></br>자신의 인생 진로를 대신 선택하게 내버려 두는 사람은 <br></br>유인원처럼 흉내 내는 능력만이 필요할 뿐이다. <br></br><span className="font-bold text-amber-300">자기 계획을 자기가 선택하는 사람만이, <br></br>자신의 모든 능력을 발휘할 수 있다&quot;</span><br />
        <span className="block mt-6">
          - 마이클 샌델, <i>정의란 무엇인가</i> p85
        </span>
      </p>
      <div className="flex flex-col sm:flex-row justify-start space-y-3 sm:space-y-0 sm:space-x-4">
      </div>
    </div>
  );
}