import React from 'react'
import Image from 'next/image'
import BackgroundImg from '../public/assets/images/background.jpg' 

const Hero = () => {
  return (
    <section className='top-0 w-full h-[100vh] flex justify-center items-center text-xl xl:text-3xl'>
        <div className="w-max">
          <h1 className="mb-6 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl text-white font-bold 2xl:text-3xl">
            안녕하세요, 주니어 개발자 박재홍입니다
          </h1>
          <Image
          src={BackgroundImg}
          placeholder="blur"
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
            opacity: 0.2,
          }}
          alt="Picture of the author"
        />
        </div>
      </section>
  )
}

export default Hero