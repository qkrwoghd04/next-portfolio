"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: '웹사이트의 반응성과 동적 특성을 강조하고, 최신 기술 사용과 확장성을 언급했습니다',
    href: ""
  },
  {
    num: '02',
    title: 'App Development',
    description: 'iOS와 Android 플랫폼 모두를 포함시키고, 사용자 친화성과 비즈니스 성장 촉진 측면을 강조했습니다',
    href: ""
  },
  {
    num: '03',
    title: 'Cloud Computing',
    description: '클라우드 기술의 주요 이점인 확장성, 보안, 비용 효율성을 언급했습니다',
    href: ""
  },
  {
    num: '04',
    title: 'UI/UX Design',
    description: '직관적이고 시각적으로 매력적인 디자인의 중요성을 강조하고, 기능성과 미학의 조화를 언급했습니다.',
    href: ""
  },
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn"
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index)=> {
              return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* tap */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            })}
        </motion.div>

      </div>
    </section>
  )
}

export default Services;