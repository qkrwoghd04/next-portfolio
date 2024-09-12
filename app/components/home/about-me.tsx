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
                src={profileImage}
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
              <p><span className="font-semibold text-gray-900 dark:text-white">GPA:</span> 3.525/4.0</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">자격증:</span> AWS Certified Cloud Practitioner (CLF-C02)</p>
            </div>
            
            <p className="text-lg text-gray-800 dark:text-gray-200">현재 저는 기업들의 디지털 전환 추세에 주목하고 있습니다. 특히 다음과 같은 영역에 깊은 관심을 두고 있습니다:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
              <li>온프레미스에서 클라우드로의 마이그레이션</li>
              <li>하이브리드 클라우드 아키텍처 구축</li>
              <li>Docker와 Jenkins를 활용한 자동화 프로세스 구현</li>
            </ul>
            <p className="text-lg text-gray-800 dark:text-gray-200">이러한 업계 동향에 발맞추어, 저는 AWS 클라우드 서비스와 Docker & Kubernetes 기술 스택에 집중하여 전문성을 키워나가고 있습니다</p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">주요 성과 및 학습 목표</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
              <li>2024년 8월 21일: AWS Certified Cloud Practitioner (CLF-C02) 자격증 취득</li>
              <li>현재 진행 중: 실제 프로젝트 참여를 통한 다양한 Use Case 학습 및 실무 경험 축적</li>
            </ul>
            <p className="text-lg font-medium mt-6 text-gray-900 dark:text-white">앞으로도 클라우드 및 DevOps 분야에서의 지속적인 성장을 위해 노력하겠습니다</p>
          </div>
        </div>
      </div>
    </section>
  );
}