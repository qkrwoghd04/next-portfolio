"use client"
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    category: "Fullstack",
    title: "Express js기반 노인 친화적 건강 식품 어플 프론트/백엔드 개발 및 유지 보수 / 운영",
    description: [
      { name: "- React Native 기반의 Express.js 프레임워크를 활용한 Android 플랫폼 모바일 애플리케이션 개발" },
      { name: "Express.js" },
      { name: "AWS" },
      { name: "Expo" },
    ],
    image: "/assets/work/thumb2.png",
    github: "https://github.com/qkrwoghd04/healing-hub",
  },
  {
    category: "Fullstack",
    title: "React 기반의 Next.js 프레임워크를 사용하여 현대적이고 반응형인 개인 포트폴리오 웹사이트를 구축",
    description: [
      { name: "Next.js의 app 라우터를 사용하여 프로젝트 구조화 및 TypeScript 적용으로 코드 품질 향상" },
      { name: "Next.js" },
      { name: "Route53" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/qkrwoghd04/next-portfolio",
  },
]

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
      className="h-screen w-screen flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col 2xl:flex-row 2xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 captialize">{project.category} Project</h2>
              {/* stack */}
              <ul className="flex flex-col gap-4">
                {project.description.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.description.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* git project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover bg-white" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* swiper buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
                />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Project;