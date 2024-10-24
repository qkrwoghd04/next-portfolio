"use client"
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";

//components
import Healinghub from "./project/Healinghub"

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "저희가 발맞추겠습니다 \n빠른 문의와 답변 속도\n힐링허브(건강식품)",
    description: <Healinghub />,
    image: "/assets/images/healingHubThumb.png",
    github: "https://github.com/qkrwoghd04/healing-hub",
  },
  {
    title: "HealingHub \n건강은 저희가 책임지겠습니다\n 빠르게 전화주세요",
    description: "아버지의 매장의 대부분 50~70대 고객님들이 전화로 상품을 문의하시는 것을 발견했습니다.\n 고객님들이 매장 번호를 찾기위해 최근 통화 내역을 일일이 확인하는 것이 아닌, App을 설치해 드리고 안내해드리면,\n 매장 홍보에 도움이 될 뿐만 아니라 고객 유지율도 높일 수 있을 것이라 생각해 개발했습니다",
    image: "/assets/images/healingHubThumb.png",
    github: "https://github.com/qkrwoghd04/healing-hub",
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
      className="min-h-screen w-full flex items-center justify-center px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col 2xl:flex-row 2xl:relative"> {/* relative 추가 */}
          {/* Thumbnail with Title */}
          <div className="w-full"> {/* 전체 너비 사용 */}
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-6 2xl:mb-0"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[30vh] 2xl:h-[70vh] relative"> {/* 높이 증가 */}
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          quality={100}
                          fill
                          className="object-cover object-[10%] rounded-xl 2xl:opacity-40"
                          alt="Project Image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          {/* Description */}
          <div className="h-[50vh] 2xl:absolute 2xl:right-0 2xl:top-1/2 2xl:-translate-y-1/2 2xl:w-1/2 p-4 2xl:rounded-l-2xl"> {/* 위치 및 스타일 수정 */}
            <div className="flex flex-col space-y-8">
              <div className="text-l 2xl:text-3xl font-thin leading-8">
                {project.description}
              </div>
              {/* button */}
              <div className="w-[70px] h-[70px]">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-full rounded-full bg-white/15 flex justify-center items-center group">
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
        </div>
      </div>
    </motion.div>
  )
}

export default Project;