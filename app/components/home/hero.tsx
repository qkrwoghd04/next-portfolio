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
        안녕하세요, <span className='text-amber-300'>밸런스형 인재 박재홍입니다.</span>
        <br></br>저는 새로운 기술과 배움을 빠르게 습득하며, <br></br>다양한 상황에서도 유연하게 대처할 수 있습니다.<br></br>
        전체적인 흐름을 보며, 서비스들이 어떻게 <br></br>상호작용하는지를 이해하는 데 강점이 있습니다.<br></br>성실하고 뚝심 있는 인재를 찾으신다면, <br></br>연락주시면 감사하겠습니다<br />
      </p>
      <div className="flex flex-col sm:flex-row justify-start space-y-3 sm:space-y-0 sm:space-x-4">
      </div>
    </div>
  );
}