"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineProfile } from "react-icons/ai";
import { motion } from 'framer-motion'


const profile = {
  title: "현재에 만족하지않고, \n최적의 방안을 갈구합니다",
  description: "저는 현 상황에 안주하지 않으며,\n 지속적인 배움을 통해 실천합니다",
  info: [
    {
      fieldName: "박재홍",
      fieldValue: "-"
    },
    {
      fieldName: "Birth.",
      fieldValue: "98. 04"
    },
    {
      fieldName: "Email.",
      fieldValue: "qkrwoghd04@naver.com"
    },
    {
      fieldName: "Specialty.",
      fieldValue: "Java, Next.js, Node.js, AWS"
    },
    {
      fieldName: "",
      fieldValue: ""
    },
    {
      fieldName: "Experience",
      fieldValue: "-"
    },
    {
      fieldName: "2024.10",
      fieldValue: "PlayStore 힐링 허브(건강식품) 앱 \n(In production)"
    },
    {
      fieldName: "2024.08",
      fieldValue: "Xian-Jiaotong Liverpool University \n(GPA 3.5/4.0) 졸업"
    },
    {
      fieldName: "2017.06",
      fieldValue: "China HongKong English School 졸업"
    },
  ]
};
const Profile = () => {

  return (
    <section className='absolute top-0 w-screen h-screen flex justify-center items-center'>
      <div className='w-screen h-screen flex flex-col items-center justify-center 2xl:flex-row lg:flex-row'>
        {/* Photo with Info */}
        <div className='relative flex-1 w-full lg:h-2/3 2xl:h-2/3 p-4 flex justify-center items-center bg-black/40'>
          <Image
            src="/assets/images/profile.jpg"
            quality={75}
            fill
            className='object-cover rounded-md object-[80%] opacity-30'
            alt="Profile"
          />
          <div className='flex flex-col items-start justify-center gap-10 z-50'>
            <div className='text-4xl font-normal whitespace-pre-line 2xl:leading-relaxed 2xl:text-6xl'>
              {profile.title}
            </div>
            <div className='text-xl whitespace-pre-line 2xl:leading-relaxed 2xl:text-3xl font-light'>
              {profile.description}
            </div>
            <motion.div
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.1 }}
              className='flex flex-row justify-center items-center'
            >
              <a href="https://park-jaehong-resume-bucket.s3.ap-northeast-2.amazonaws.com/resume.pdf">
                <AiOutlineProfile size={38}/>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Objective */}
        <div className='flex-1 w-full lg:h-2/3 2xl:h-2/3 bg-gray-100'>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <ul className='flex flex-col justify-start items-start 2xl:gap-y-8 mb-10 lg:mb-0 2xl:mb-0'>
              {profile.info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-4">
                    <div className='text-l 2xl:text-2xl font-semibold'>{item.fieldName}</div>
                    <div className='text-l 2xl:text-2xl font-light whitespace-pre-line'>{item.fieldValue}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Profile;