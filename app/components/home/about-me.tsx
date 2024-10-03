"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

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
      id="aboutMe"
      ref={aboutRef}
      className={`py-20 bg-gray-100 dark:bg-gray-900 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">ABOUT ME</h2>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/profile.jpg"
                alt="박재홍의 프로필 사진"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
          <div className="lg:w-2/3 lg:pl-16 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-gray-800 dark:text-gray-200">
              <p><span className="font-semibold text-gray-900 dark:text-white">이름:</span> 박재홍</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">나이:</span> 26세</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">학력:</span> Xi&apos;an Jiaotong Liverpool University (XJTLU)</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">전공:</span> Information and Computing Science</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">GPA:</span> 3.494/4.0 (Upper Second Degree)</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">자격증:</span> AWS Certified Cloud Practitioner (CLF-C02)</p>
            </div>
            
            <hr className="border-t border-gray-300 dark:border-gray-700 my-6" />
            <p className="text-l font-bold text-gray-800 dark:text-gray-200">현재 저는 기업들의 디지털 전환 추세에 주목하고 있습니다. 특히 다음과 같은 분야에 깊은 관심을 두고 공부하고 있습니다:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-300">
              <li>다양한 AWS 클라우드 서비스를 활용한 프로젝트 구현</li>
              <li>Kubernetes와 Jenkins 통한 CICD 자동화 프로세스 구현</li>
              <li>Node.js와 MongoDB를 컨테이너화하여 ECS에 배포</li>
            </ul>
            <p className="text-l font-bold text-gray-800 dark:text-gray-200">이러한 업계 동향에 맞춰, AWS 클라우드 서비스와 자동화 프로세스 기술 스택을 중심으로 전문성을 키워나가고 있습니다.</p>

            
            <hr className="border-t border-gray-300 dark:border-gray-700 my-6" />
            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">주요 성과 및 학습 목표</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>2024년 7월 15일 ~ 2024년 8월 21일</strong>: <br></br>AWS Certified Cloud Practitioner (CLF-C02) 자격증 취득</li>
              <li><strong>2024년 8월 26일 ~ 2024년 9월 23일</strong>: <br></br>Expo기반 안드로이드 플랫폼 건강식품 앱 개발 <br></br><strong>FE</strong>: React Native, <strong>BE</strong> : Node.js, <strong>Deploy</strong>: AWS Services(PlayStore 비공개테스트 중)</li>
              <li><strong>2024년 9월 23일 ~ 현재 진행 중</strong>: <br></br>Docker를 통한 Node.js 기반 웹 ECS를 통한 관리 및 배포</li>
            </ul>
            <p className="text-l font-semibold mt-6 text-gray-900 dark:text-white">클라우드 및 DevOps 분야에서의 지속적인 성장을 위해 지금도 노력하고 있습니다</p>
          </div>
        </div>
      </div>
    </section>
  );
}