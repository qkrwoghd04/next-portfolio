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
    { name: "HTML 5, CSS", brief: "jaehong-park.com" },
    { name: "Next.js", brief: "jaehong-park.com" },
    { name: "React Native", brief: "힐링 허브 FE" },
    { name: "Node.js", brief: "힐링 허브 BE" },
    { name: "AWS", brief: "힐링 허브 배포" },
    { name: "Java", brief: "중급" },
    { name: "Docker", brief: "초급" }
  ];

  const languages = [
    { name: "한국어", level: "원어민" },
    { name: "영어", level: "비즈니스 수준" },
    { name: "중국어", level: "비즈니스 수준" }
  ];

  const projects = [
    {
      name: "매장 관리와 상품 확인 및 문의를, 하나의 App으로, 힐링 허브",
      decription: "이 앱은 관리자(admin)가 상품을 관리할 수 있는 기능을 제공하며, 사용자는 실시간으로 업데이트된 상품 정보를 확인할 수 있습니다. AWS 클라우드를 활용하여 안정적인 데이터 저장 및 전송을 구현하였으며, 확장성을 고려한 아키텍처 설계를 적용하였습니다.",
      period: "2024 -",
      skills: "Expo, TailwindCSS, EB, DynamoDB, S3, Node.js"
    },
  ];

  const education = [
    {
      school: "Xian-Jiaotong Liverpool University",
      degree: "컴퓨터공학 학사",
      period: "2017 - 2024",
      details: "학점: 3.5/4.0"
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
                <div key={index} className='flex justify-between items-center'>
                  <span className="py-1 text-sm text-gray-900">
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
          <h1 className="text-2xl font-Medium text-gray-800 mb-6 pb-2 border-b">중학교 3학년, 중국으로 가는 결정을 내리다</h1>
          <div className='font-light mb-6'>
            <p>고등학생이 되기 전, 중국으로 갈 기회가 생겼습니다. 어린 제가 당시 어떤 생각을 했는지 잘 기억나지 않지만, 활발하고 도전적인 성격 덕분에 두려움을 잊고 중국 중산이라는 도시에서 새로운 시작을 했습니다. 성실한 학생이었던 저는 초기에 저조했던 성적이 졸업할땐 상향 그래프를 띄웠고, 중국을 떠나기 아쉬운 마음에 대학을 찾던 중 영국계 중국 대학인 XJTLU라는 매력적인 학교를 발견하게 되었습니다.그러나 코로나19로 인해 지속되는 격리와 온라인 수업으로 인해 대학 생활 동안 누릴 수 있었던 다양한 경험을 놓쳤습니다. 졸업한 현재 이력서에 적을 내용이 거의 없는 상황이지만, 이는 오히려 저에게 큰 동기와 자극을 주고 있습니다. 매일 12시간 이상 공부하면서도 지치지 않고, 배움의 즐거움을 느끼며 앞으로 나아가고 있습니다</p>
          </div>
          <h2 className="text-2xl font-Medium text-gray-800 mb-6 pb-2 border-b">프로젝트</h2>
          <div className="space-y-8">
            {projects.map((exp, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-gray-800">{exp.name}</h3>
                  <span className="text-gray-600 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-500 font-normal">{exp.decription}</p>
                <p className="text-sm text-gray-700 font-Medium">{exp.skills}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 학력 */}
        <section>
          <h2 className="text-2xl font-normal text-gray-800 mb-6 pb-2 border-b">학력</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-gray-800">{edu.school}</h3>
                  <span className="text-gray-600 text-sm">{edu.period}</span>
                </div>
                <p className="text-gray-500 font-normal">{edu.degree}</p>
                <p className="text-sm text-gray-700 font-Medium">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;