"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import profileImage from './profile.jpg'

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
      className={`py-20 bg-gray-100 dark:bg-gray-800 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src={profileImage}
                alt="박재홍의 프로필 사진"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="font-semibold mb-4">
              <strong>이름: </strong>박재홍
            </h3>
            <p className="mb-4"><strong>나이:</strong> 26세</p>
            <p className="mb-4">
              <strong>학력:</strong>{' '}
              <a
                href="https://www.xjtlu.edu.cn/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Xi&apos;an Jiaotong Liverpool University (XJTLU)
              </a>
            </p>
            <p className="mb-4"><strong>전공:</strong> Information and Computing Science</p>
            <p className="mb-4"><strong>GPA:</strong> 3.525/4.0</p>
            <p className="mb-4"><strong>자격증:</strong> CLF-C02 (AWS Cloud Practitioner Certification)</p>
            <p className="mb-6">안녕하세요, 저는 고등학교를 中山(중산)에 위치한 국제 고등학교를 졸업하고, 2017년 8월부터 2024년 8월까지 苏州(쑤저우)에서 Xi&apos;an Jiaotong Liverpool University를 졸업했습니다. 클라우드 분야에 흥미를 가지고 있는 취준생입니다.</p>
            <p className="mb-6">XJTLU는 영국의 명문대인 리버풀 대학교와 중국 시안의 명문대인 시안 교통대학교의 협력을 통해 설립된 대학으로, 모든 수업을 영어로 진행함과 동시에 중국이라는 환경에서 생활하며 중국어도 같이 공부할 수 있다는 가장 큰 장점이 있습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}