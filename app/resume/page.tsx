"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaDocker,
} from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"


// about data
const about = {
  title: "나에 대하여",
  description: "묵묵하면서 유연한 사람을 찾고 계신가요?\n혹은 단조롭지만 특색있는 사람은 어떠신가요?\n거짓말이라고 느끼실 수 있지만, 전 상반된 각각의 특징들을 모두 가지고 있는 사람입니다. 어디서는 일할 준비가 되어 있고, 편하게 연락주시면 감사하겠습니다",
  info: [
    {
      fieldName: "Name",
      fieldValue: "JAEHONG PARK"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Republic of Korea"
    },
    {
      fieldName: "Age",
      fieldValue: "26"
    },
    {
      fieldName: "Education",
      fieldValue: "Xian-Jiaotong Liverpool University"
    },
    {
      fieldName: "Major",
      fieldValue: "Information & Computing Science"
    },
    {
      fieldName: "GPA",
      fieldValue: "3.5/4.0 (Upper Second Grade)"
    },
    {
      fieldName: "Language",
      fieldValue: "Korean, English, Chinese"
    },
    {
      fieldName: "Spacialty",
      fieldValue: "Node.js, React, AWS"
    },
  ]
};

// experience data
const experience = {
  icon: '/asset/resume/badge.svg',
  title: "경력",
  description:
    "현재 다양한 직무와 인턴 경험 자리를 찾고 있습니다",
  items: [
    {
      company: "프리랜서",
      position: "Full Stack Developer",
      duration: "2024.08 - ",
    },
  ]
};

// education data
const education = {
  icon: '/asset/resume/cap.svg',
  title: "교육",
  description:
    "고등학교, 학사 및 졸업 후 수강한 교육 내용입니다",
  items: [
    {
      institution: "Udemy Platform",
      degree: "Cloud Practitioner Certification 취득",
      duration: "2024.07 - 2024-08-21",
    },
    {
      institution: "Xian-Jiaotong Liverpool University",
      degree: "Infomation & Computing Science 학사",
      duration: "2017.08 - 2024-08-02",
    },
    {
      institution: "China Hongkong English School",
      degree: "국제 고등학교 재학",
      duration: "2014.08 - 2017.06",
    },
  ]
};

// skills data
const skills = {
  title: "기술 스택",
  description:
    "사용할 줄 아는 혹은 사용해본 기술 스택입니다",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html"
    },
    {
      icon: <FaCss3 />,
      name: "css"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <FaAws />,
      name: "aws",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">나에 대하여</TabsTrigger>
            <TabsTrigger value="experience">경력</TabsTrigger>
            <TabsTrigger value="education">교육</TabsTrigger>
            <TabsTrigger value="skills">기술 스택</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left items-center">
              <div className="whitespace-pre-wrap flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0 border-double border-8 border-accent p-4 justify-center">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4 border-b border-white/20 hover:border-white transition-colors duration-300"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-l">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}

                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}

                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>

            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;