import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import ProfileImg from '../public/assets/images/resume-profile.jpg'


const profile = {
  title: "생각하는 개발자 박재홍입니다",
  description: "실패하고, 실패하고, 또 실패합니다",
  info: [
    {
      fieldName: "Name.",
      fieldValue: "박재홍"
    },
    {
      fieldName: "Birth.",
      fieldValue: "1998. 04. 14"
    },
    {
      fieldName: "Tel.+82",
      fieldValue: "010-3360-4104"
    },
    {
      fieldName: "Email.",
      fieldValue: "qkrwoghd04@naver.com"
    },
    {
      fieldName: "",
      fieldValue: ""
    },
    {
      fieldName: "Education",
      fieldValue: ""
    },
    {
      fieldName: "2024.08",
      fieldValue: "Xian-Jiaotong Liverpool University(GPA 3.5/4.0) 졸업"
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

      <div className='w-screen h-screen flex flex-col items-center justify-center 2xl:flex-row'>
        {/* Photo with Info */}
        <div className='w-full h-full 2xl:h-2/3 mt-20'>
          <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
            <div className='text-2xl'>
              {profile.title}
            </div>
            <div className='w-[250px] h-[250px] bg-yellow-200 rounded-full'>
              {/* image */}
            </div>
            <div className='text-l'>
              {profile.description}
            </div>
          </div>
        </div>
        
        <div className='bg-gray-100 w-[30%] h-[2px] 2xl:w-[2px] 2xl:h-[30%] rounded-full'></div>

        {/* Objective */}
        <div className='w-full h-full 2xl:h-2/3'>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center items-start gap-y-8'>
              <ul className='flex flex-col justify-start items-start gap-6'>
                {profile.info.map((item, index) => {
                  return (
                  <li key={index} className="flex gap-4">
                    <div className='text-l 2xl:text-2xl'>{item.fieldName}</div>
                    <div className='text-l 2xl:text-2xl'>{item.fieldValue}</div>
                  </li>
                )})} 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;