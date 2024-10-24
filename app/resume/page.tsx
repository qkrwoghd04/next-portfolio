"use client"

import React from 'react';
import { Download, Mail, Phone, MapPin, Globe } from 'lucide-react';
import Image from 'next/image'

const Resume = () => {
  const personalInfo = {
    name: "박재홍",
    title: "Software Engineer",
    email: "qkrwoghd04@naver.com",
    phone: "010-3360-4104",
    location: "서울시 마포구",
    website: "www.jaehong-park.com"
  };

  const skills = [
    {name:"HTML 5, CSS", brief:"jaehong-park.com"},
    {name:"Next.js", brief:"jaehong-park.com"},
    {name:"React Native", brief:"힐링 허브 FE"},
    {name:"Node.js", brief:"힐링 허브 BE"},
    {name:"AWS", brief: "힐링 허브 배포"},
    {name:"Java", brief: "중급"},
    {name:"Docker", brief: "초급"}
  ];

  const languages = [
    { name: "한국어", level: "원어민" },
    { name: "영어", level: "비즈니스 수준" },
    { name: "중국어", level: "비즈니스 수준" }
  ];

  const experience = [
    {
      company: "ABC 테크놀로지",
      position: "시니어 프론트엔드 개발자",
      period: "2021 - 현재",
      highlights: [
        "React와 TypeScript를 활용한 대규모 웹 애플리케이션 개발 및 유지보수",
        "마이크로프론트엔드 아키텍처 설계 및 구현으로 개발 생산성 30% 향상",
        "주니어 개발자 멘토링 및 기술 문서화 시스템 구축",
        "웹 성능 최적화를 통한 페이지 로드 시간 50% 감소"
      ]
    },
    {
      company: "XYZ 솔루션즈",
      position: "프론트엔드 개발자",
      period: "2018 - 2021",
      highlights: [
        "Vue.js 기반 실시간 데이터 시각화 대시보드 개발",
        "REST API 설계 및 백엔드 개발자와의 협업",
        "반응형 UI/UX 디자인 설계 및 구현",
        "테스트 자동화 도입으로 QA 시간 40% 단축"
      ]
    }
  ];

  const education = [
    {
      school: "한국대학교",
      degree: "컴퓨터공학 학사",
      period: "2014 - 2018",
      details: "학점: 4.0/4.5"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white min-h-screen flex flex-col md:flex-row print:flex-row border-gray-200 border-[1px]">
      {/* 왼쪽 사이드바 (1/3) */}
      <div className="w-full md:w-1/3 print:w-1/3 bg-gray-50 p-8 print:p-8">
        <div className="sticky top-8">
          {/* 프로필 이미지 */}
          <div className="mb-8">
            <Image
              src="/assets/images/resume.jpg"
              quality={100}
              width={200}
              height={200}
              className="mx-auto object-cover border-4 border-white shadow-lg"
              alt="Resume"
            />
          </div>

          {/* 이름 및 직함 */}
          <div className="text-center mb-4">
            <h1 className="text-2xl font-normal text-gray-800 mb-2">{personalInfo.name}</h1>
            <p className="text-gray-600 font-light">{personalInfo.title}</p>
          </div>
          {/* 다운로드 버튼 */}
          <button
            onClick={() => window.print()}
            className="w-full mb-8 print:hidden text-black text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-2 border-[1px] border-gray-300 hover:bg-gray-200 transition-colors"
          >
            <Download size={18} />
            PDF 다운로드
          </button>

          {/* 연락처 정보 */}
          <div className="space-y-4 mb-8">
            <h2 className="text-lg font-normal text-gray-800 mb-4 border-b-[1px] border-gray-400">Contact</h2>
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail size={18} />
              <span className="text-sm">{personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone size={18} />
              <span className="text-sm">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin size={18} />
              <span className="text-sm">{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Globe size={18} />
              <span className="text-sm">{personalInfo.website}</span>
            </div>
          </div>

          {/* 기술 스택 */}
          <div className="mb-8">
            <h2 className="text-lg font-normal text-gray-800 mb-4 border-b-[1px] border-gray-400">Skills</h2>
            <div className="flex flex-col gap-2">
              {skills.map((skill, index) => (
                <div className='flex justify-between items-center'>
                  <span
                    key={index}
                    className="py-1 text-sm text-gray-900"
                  >
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-400">{skill.brief}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 언어 */}
          <div className="mb-8">
            <h2 className="text-lg font-normal text-gray-800 mb-4 border-b-[1px] border-gray-400">Languages</h2>
            <div className="space-y-2">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-900">{language.name}</span>
                  <span className="text-sm text-gray-400">{language.level}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 오른쪽 메인 컨텐츠 (2/3) */}
      <div className="w-full md:w-2/3 print:w-2/3 p-8 print:p-8">
        {/* 경력 사항 */}
        <section className="mb-12">
          <h1 className="text-2xl font-Medium text-gray-800 mb-6 pb-2 border-b">코드 한 줄, 배움 한 걸음: 즐거움으로 성장하는 신입 개발자</h1>
          <div>
            <p></p>
          </div>
          <h2 className="text-2xl font-Medium text-gray-800 mb-6 pb-2 border-b">프로젝트</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                  <span className="text-gray-600 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-700 font-medium">{exp.position}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 학력 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">학력</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800">{edu.school}</h3>
                  <span className="text-gray-600 text-sm">{edu.period}</span>
                </div>
                <p className="text-gray-700">{edu.degree}</p>
                <p className="text-gray-600 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;