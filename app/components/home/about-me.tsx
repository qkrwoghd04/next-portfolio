"use client";

import { useEffect, useRef, useState } from 'react';

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={aboutRef}
      className={`py-20 bg-gray-100 dark:bg-gray-800 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            안녕하세요, 저는 박재홍입니다. Junior DevOps Engineer로서 혁신적인 웹 솔루션을 만드는 데 열정을 가지고 있습니다.
          </p>
          <p className="text-lg mb-6">
            저는 지속적인 학습과 성장을 추구하며, 새로운 기술과 도구를 익히는 것을 즐깁니다. 팀 협업을 중요하게 생각하며, 
            효율적인 개발 프로세스와 안정적인 시스템 운영을 위해 노력합니다.
          </p>
          <p className="text-lg">
            제 목표는 사용자 경험을 향상시키고 기술의 경계를 넓히는 것입니다. 항상 최선을 다해 프로젝트에 임하며, 
            긍정적인 변화를 만들어내는 것에 큰 보람을 느낍니다.
          </p>
        </div>
      </div>
    </section>
  );
}