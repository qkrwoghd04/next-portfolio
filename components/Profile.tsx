"use client"
import React from 'react'
import Image from 'next/image'


const profile = {
  title: "생각하고, 고민합니다",
  description: "재사용이 가능하게 설계합니다\n 사용자의 관점에서 바라봅니다\n 더 효율적인 방법은 없을지 검색합니다",
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
      fieldValue: "-"
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
        <div className='relative w-full h-full 2xl:h-2/3 mt-20 p-4'>
          <Image
            src="/assets/images/profile.jpg"
            quality={50}
            fill
            className='object-cover rounded-md object-[80%] opacity-30'
            alt="Profile"
          />
          <div className='w-full h-full flex flex-col items-start justify-center gap-10'>
            <div className='text-4xl'>
              {profile.title}
            </div>
            <div className='text-2xl whitespace-pre-line leading-relaxed'>
              {profile.description}
            </div>
          </div>
        </div>

        <div className='bg-gray-100 w-[30%] h-[2px] 2xl:w-[2px] 2xl:h-[30%] rounded-full'></div>

        {/* Objective */}
        <div className='w-full h-full 2xl:h-2/3 p-4'>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center items-start gap-y-8'>
              <ul className='flex flex-col justify-start items-start gap-4'>
                {profile.info.map((item, index) => {
                  return (
                    <li key={index} className="flex gap-4">
                      <div className='text-l 2xl:text-2xl font-semibold'>{item.fieldName}</div>
                      <div className='text-l 2xl:text-2xl'>{item.fieldValue}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;