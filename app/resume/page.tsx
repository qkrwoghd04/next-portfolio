"use client"

import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Image from 'next/image'

const personalInfo = {
  name: "박재홍",
  title: "Software Engineer",
  email: "qkrwoghd04@naver.com",
  phone: "010-3360-4104",
  location: "서울시 마포구",
  website: "www.jaehong-park.com"
};

const skills = [
  "HTML 5, CSS",
  "Next.js",
  "Expo",
  "Node.js",
  "AWS",
  "Java",
  "Docker",
];

const languages = [
  { name: "한국어", level: "원어민" },
  { name: "영어", level: "비즈니스 수준" },
  { name: "중국어", level: "비즈니스 수준" }
];

const projects = [
  {
    name: "매장 관리와 상품 확인 및 문의를, 하나의 App으로 (In Closed Test)",
    decription: "이 앱은 관리자(admin)가 상품을 관리할 수 있는 기능을 제공함과 동시에, 사용자는 실시간으로 업데이트된 상품 정보를 확인할 수 있는 ALL-IN-ONE 앱입니다.",
    period: "2024 -",
    skills: "Expo, TailwindCSS, AWS, RESTful API",
    role: "Fullstack"
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
const Resume = () => {
  
  return (
    <div className="max-w-[21cm] mx-auto max-h-[29.7cm] flex flex-col md:flex-row print:flex-row">
      {/* 왼쪽 사이드바 (1/3) */}
      <div className="w-full md:w-[27%] print:w-1/3 bg-gray-100 p-4 print:p-8">
        <div className="sticky top-8">
          {/* 프로필 이미지 */}
          <div className="mb-4">
            <Image
              src="/assets/images/resume.jpg"
              quality={100}
              width={150}
              height={150}
              className="mx-auto object-cover border-4 border-white shadow-lg"
              alt="Resume"
            />
          </div>

          {/* 이름 및 직함 */}
          <div className="text-center mb-2">
            <h1 className="text-l font-normal text-gray-800">{personalInfo.name}</h1>
            <p className="text-gray-600 font-light text-l">{personalInfo.title}</p>
          </div>
          {/* 다운로드 버튼 */}
          {/* <button
            onClick={}
            className="w-full mb-8 print:hidden text-black text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-2 border-[1px] border-gray-300 hover:bg-gray-200 transition-colors"
          >
            <Download size={18} />
            PDF 다운로드
          </button> */}

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
                    {skill}
                  </span>
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
      <div className="w-full md:w-[73%] print:w-2/3 p-6 print:p-8">
        {/* 경력 사항 */}
        <section className="mb-12">
          {/* <h1 className="text-2xl font-Medium text-gray-800 mb-6 pb-2 border-b">중학교 3학년, 중국으로 가는 결정을 내리다</h1>
          <div className='font-light mb-6'>
            <p>고등학생이 되기 전, 중국으로 갈 기회가 생겼습니다. 환경에 빠르게 적응하는 성격을 가진 전 두려움은 잊고 중국 중산이라는 도시에서 새로운 시작을 했습니다. 사교성이 좋았던 전 다양한 국적의 친구들과 교류했고, 초기에 저조했던 성적또한, 졸업할땐 상향 그래프를 띄웠습니다. 글로벌하게 꿈을 키워나가고 싶던 저는 영국계 중국 대학인 XJTLU라는 매력적인 학교에 지원하게 되었습니다. 그러나 코로나19로 인해 지속되는 격리와 온라인 수업으로 인해 대학 생활 동안 누릴 수 있는 다양한 경험을 놓쳤습니다.</p>
          </div> */}
          <h2 className="text-2xl font-Medium text-gray-800 mb-4 pb-2 border-b">프로젝트</h2>
          <div className="space-y-8">
            {projects.map((exp, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-gray-800">{exp.name}</h3>
                  <span className="text-gray-600 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-500 font-normal">{exp.decription}</p>
                <div className='flex justify-between items-center'>
                  <p className="text-sm text-gray-700 font-Medium">{exp.skills}</p>
                  <p className="text-sm text-gray-600 font-sm">{exp.role}</p>
                </div>
                <div>
                  <h3 className='font-semibold text-lg border-y-[1px] border-gray-200 py-1'>Frontend</h3>
                  <ul className='list-disc'>
                    <li>Expo와 Tailwind CSS 통한 개발 프로세스 간소화</li>
                    <p className='font-light'>다양한 Expo라이브러리를 사용해 타사 라이브러리의 의존성을 줄이고, Expo Go를 설치하여 실시간 개발과정을 모니터링</p>

                    <li>Componentize을 통한 재사용성 향상</li>
                    <p className='font-light'>ScrollView, FlatGrid, 인기도 정렬 함수와 같이 재사용성이 높은 요소들은 컴포넌트화 시켜 코드의 간결성과 확장성 향상</p>
                  </ul>
                  <h3 className='font-semibold text-lg border-y-[1px] border-gray-200 py-1'>Backend</h3>
                  <ul className='list-disc'>
                    <li>서버 구축 및 관리</li>
                    <p className='font-light'>Elastic Beanstalk을 사용하여 서버를 구축하고, CloudFront와 API G/W를 통해 라우트 된 요청을 REST 아키텍처로 구성된 서버에서 받아 처리합니다</p>
                    <li>DynamoDB & S3</li>
                    <p className='font-light'>DynamoDB와 S3를 통해 상품의 정보와 이미지를 관리하고, AWS 서비스 간의 연동 효율성과 확장성을 높입니다</p>
                  </ul>
                  <h3 className='font-semibold text-lg border-y-[1px] border-gray-200 py-1'>문제해결</h3>
                  <ul className='list-disc'>
                    <li>APK가 설치된 자체 디바이스에서 테스트 시 네트워크에 연결되어 있지만 네트워크 오류 발생</li>
                    <p className='font-light'><b>[원인]:</b> Android 9이상부터는 https프로토콜 사용이 강제되기에 api호출시 네트워크 오류 문제가 발생함</p>
                    <p className='font-light'><b>[해결]:</b> 종단 간 암호화된 연결을 프리티어로 제공하는 Cloudfront에 API G/W를 연동</p>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 학력 */}
        {/* <section>
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
        </section> */}
      </div>
    </div>
  );
};

export default Resume;