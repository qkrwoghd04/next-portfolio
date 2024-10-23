"use client"
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";

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
    title: "건강은 저희가 책임지겠습니다\n 빠르게 전화주세요 HealingHub",
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
      className="h-screen w-screen flex flex-col justify-center py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col 2xl:flex-row">
          {/* Thumbnail with Title */}
          <div className="w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[50vh] 2xl:h-full relative group flex justify-center items-center">
                      {/* image */}
                      <div className="relative w-full h-full flex justify-center items-center">
                        <p className="text-3xl z-50 text-white p-4 whitespace-pre-line leading-10 font-extralight">{project.title}</p>
                        <Image 
                          src={project.image}
                          quality={100}
                          fill 
                          className="object-[80%] object-cover opacity-40" 
                          alt="Project Image" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* swiper buttons */}
              {/* <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 2xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="hover:bg-gray-300 text-white text-[22px] w-[44px] h-[44px] rounded-full flex justify-center items-center transition-all" 
                /> */}
            </Swiper>
          </div>
          
          {/* Description */}
          <div className="flex-1 w-full flex-col p-4">
            <div className="flex flex-col justify-center items-center">
            <p className="w-[90%] text-l whitespace-pre-line font-extralight">{project.description}</p>
              {/* button */}
              <div className="absolute bottom-2 left-2 w-[70px] h-[70px]">
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

        </div>
      </div>
    </motion.div>
  )
}

export default Project;