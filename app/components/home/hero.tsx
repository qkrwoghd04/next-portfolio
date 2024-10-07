"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full lg:w-2/4 text-left ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
        <span className="text-white">
          Cloud/DevOps Learner
        </span>
      </h1>
      <p className="hero-story">
        <span className='text-amber-500 text-xl'>저는 <b>Learner</b>이자 <b>Runner</b>입니다</span>
        <br></br>지속적인 새로운 기술과 다양한 분야의 대한 배움을 빠르게 습득하며, 하나의 프로젝트에서 다양한 기술/프레임워크와 CICD 파이프라인 구축을 통해 최적의 방법을 모색합니다. <br /><br />다양한 IT포럼 및 온라인/오프라인 강연에 참석하며 배움을 쌓고 있습니다. 성실하고 뚝심 있는 인재를 찾으신다면, 연락주시면 감사하겠습니다
      </p>
      <div className="flex flex-col sm:flex-row justify-start space-y-3 sm:space-y-0 sm:space-x-4">
      </div>
    </div>
  );
}